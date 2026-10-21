"""isac publish: sube los JSON agregados de data/out a MongoDB Atlas (lo que lee el dashboard).

REGLA (Fora, 2026-10-20): la base es free tier (512 MB). Aquí solo van resultados finales agregados;
eventos, alineaciones, parquet y métricas de toda la liga se quedan en local. El comando imprime
colecciones y tamaño antes de subir y aborta si el total pasa de MAX_MB."""

import json
import os
import re
import unicodedata
from pathlib import Path

from dotenv import load_dotenv
from pymongo import MongoClient, UpdateOne

from isac.config import OUT, ROOT

SINGLETONS = ["meta", "profile", "set_pieces", "players", "definitions"]
MAX_MB = 20.0


def _slug(s: str) -> str:
    plain = unicodedata.normalize("NFKD", s).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]+", "-", plain.lower()).strip("-")


def _client() -> tuple[MongoClient, str]:
    load_dotenv(ROOT / ".env")
    uri, db = os.environ.get("MONGODB_URI"), os.environ.get("MONGODB_DB", "isac_america")
    if not uri:
        raise SystemExit("falta MONGODB_URI en .env")
    return MongoClient(uri, serverSelectionTimeoutMS=20000), db


def _load(name: str) -> dict:
    return json.loads((OUT / f"{name}.json").read_text(encoding="utf-8"))


def _size_mb() -> float:
    return sum(f.stat().st_size for f in OUT.rglob("*.json")) / 1e6


def publish(log=print) -> None:
    size = _size_mb()
    log(f"data/out: {size:.2f} MB en {len(list(OUT.rglob('*.json')))} JSON (límite {MAX_MB} MB)")
    if size > MAX_MB:
        raise SystemExit("demasiado grande para la base free; revisa qué se exporta")
    client, dbname = _client()
    db = client[dbname]
    meta = _load("meta")
    key = f"{_slug(meta['coach'])}:{_slug(meta['team'])}"
    base = {"coach": meta["coach"], "team": meta["team"], "key": key}

    for name in SINGLETONS:
        doc = {**base, "_id": f"{key}:{name}", **_load(name)}
        db[name].replace_one({"_id": doc["_id"]}, doc, upsert=True)
        log(f"  {name}: 1 doc")

    for ch in meta.get("other_chapters", []):
        fname = f"profile_{ch['team'].lower().replace(' ', '_')}"
        if (OUT / f"{fname}.json").exists():
            d = _load(fname)
            k = f"{_slug(d['coach'])}:{_slug(d['team'])}"
            db["profile"].replace_one(
                {"_id": f"{k}:profile"},
                {"coach": d["coach"], "team": d["team"], "key": k, "_id": f"{k}:profile", **d},
                upsert=True,
            )
            log(f"  profile ({ch['team']}): 1 doc")

    ops = []
    for f in sorted((OUT / "scenarios").glob("*.json")):
        d = json.loads(Path(f).read_text(encoding="utf-8"))
        ops.append(
            UpdateOne(
                {"_id": f"{key}:{f.stem}"}, {"$set": {**base, "scenario": f.stem, **d}}, upsert=True
            )
        )
    db["scenarios"].bulk_write(ops)
    log(f"  scenarios: {len(ops)} docs")

    m = _load("matches")
    ops = [
        UpdateOne({"_id": f"{key}:{r['match_id']}"}, {"$set": {**base, **r}}, upsert=True)
        for r in m["matches"]
    ]
    db["matches"].bulk_write(ops)
    db["matches"].create_index([("key", 1), ("match_date", 1)])
    log(f"  matches: {len(ops)} docs")

    fd = _load("findings")
    db["findings"].delete_many({"key": key})
    docs = [
        {**base, "_id": f"{key}:{i:02d}", "order": i, **f}
        for i, f in enumerate(fd["findings"], start=1)
    ]
    if docs:
        db["findings"].insert_many(docs)
    log(f"  findings: {len(docs)} docs")
    log(f"publicado en {dbname}")


def counts(log=print) -> dict:
    client, dbname = _client()
    db = client[dbname]
    stats = db.command("dbStats")
    out = {c: db[c].count_documents({}) for c in sorted(db.list_collection_names())}
    log(
        f"colecciones: {json.dumps(out, ensure_ascii=False)}; tamaño de datos {stats['dataSize'] / 1e6:.2f} MB de 512 MB"
    )
    return out
