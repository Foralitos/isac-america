"""isac publish: sube los JSON agregados de data/out a MongoDB Atlas (lo que lee el dashboard).

REGLA (Fora, 2026-10-20): la base es free tier (512 MB). Aquí solo van resultados finales agregados;
eventos, alineaciones, parquet y métricas de toda la liga se quedan en local. El comando imprime
colecciones y tamaño antes de subir y aborta si un técnico pasa de MAX_MB_COACH.

Esquema (base multi-técnico):
- `coaches`: registro, un doc por técnico publicado (_id = coach_key). El picker del dashboard lee solo esto.
- `meta`, `profile`, `scenarios`, `set_pieces`, `players`, `rivals`, `matches`, `findings`: por técnico, `key` = coach_key,
  `_id` = `coach_key:nombre`. Los capítulos por equipo van en `profile` con `_id` = `coach_key:team_key:profile`.
- `definitions` y `league`: globales, `key` = "global".
"""

import json
import os
from datetime import UTC, datetime
from pathlib import Path

from dotenv import load_dotenv
from pymongo import MongoClient, UpdateOne

from isac.config import OUT, ROOT
from isac.export.common import GLOBAL_DIR, coach_dir

SINGLETONS = ["meta", "profile", "set_pieces", "players", "rivals", "simulation"]
MAX_MB_COACH = 4.0  # tamaño del JSON con sangría; en BSON ocupa menos
GLOBAL_KEY = "global"


def _client() -> tuple[MongoClient, str]:
    load_dotenv(ROOT / ".env")
    uri, db = os.environ.get("MONGODB_URI"), os.environ.get("MONGODB_DB", "isac_america")
    if not uri:
        raise SystemExit("falta MONGODB_URI en .env")
    return MongoClient(uri, serverSelectionTimeoutMS=20000), db


def _load(folder: Path, name: str) -> dict:
    return json.loads((folder / f"{name}.json").read_text(encoding="utf-8"))


def _size_mb(folder: Path) -> float:
    return sum(f.stat().st_size for f in folder.rglob("*.json")) / 1e6


def published_coaches() -> list[str]:
    """Claves con carpeta exportada en data/out (todo menos global)."""
    return sorted(
        p.name
        for p in OUT.iterdir()
        if p.is_dir() and p.name != "global" and (p / "meta.json").exists()
    )


def publish_globals(log=print) -> None:
    client, dbname = _client()
    db = client[dbname]
    for name in ("definitions", "league"):
        if not (GLOBAL_DIR / f"{name}.json").exists():
            continue
        doc = {"key": GLOBAL_KEY, "_id": f"{GLOBAL_KEY}:{name}", **_load(GLOBAL_DIR, name)}
        db[name].replace_one({"_id": doc["_id"]}, doc, upsert=True)
        log(f"  global {name}: 1 doc")


def publish(coach_key: str, log=print) -> None:
    folder = coach_dir(coach_key)
    if not (folder / "meta.json").exists():
        raise SystemExit(f"no hay export en {folder}; corre `isac export --coach {coach_key}`")
    size = _size_mb(folder)
    log(
        f"{coach_key}: {size:.2f} MB en {len(list(folder.rglob('*.json')))} JSON (límite {MAX_MB_COACH} MB)"
    )
    if size > MAX_MB_COACH:
        raise SystemExit("demasiado grande para la base free; revisa qué se exporta")
    client, dbname = _client()
    db = client[dbname]
    meta = _load(folder, "meta")
    key = meta["key"]
    base = {"coach": meta["coach"], "short": meta["short"], "key": key}

    for name in SINGLETONS:
        if not (folder / f"{name}.json").exists():
            continue
        doc = {**base, "_id": f"{key}:{name}", **_load(folder, name)}
        db[name].replace_one({"_id": doc["_id"]}, doc, upsert=True)
        log(f"  {name}: 1 doc")

    for ch in meta.get("other_chapters", []):
        fname = f"profile_{ch['team_key']}"
        if (folder / f"{fname}.json").exists():
            d = _load(folder, fname)
            _id = f"{key}:{ch['team_key']}:profile"
            db["profile"].replace_one({"_id": _id}, {**base, "_id": _id, **d}, upsert=True)
            log(f"  profile ({ch['team']}): 1 doc")

    ops = []
    for f in sorted((folder / "scenarios").glob("*.json")):
        d = json.loads(f.read_text(encoding="utf-8"))
        ops.append(
            UpdateOne(
                {"_id": f"{key}:{f.stem}"}, {"$set": {**base, "scenario": f.stem, **d}}, upsert=True
            )
        )
    if ops:
        db["scenarios"].bulk_write(ops)
    log(f"  scenarios: {len(ops)} docs")

    m = _load(folder, "matches")
    db["matches"].delete_many({"key": key})
    docs = [{**base, "_id": f"{key}:{r['match_id']}", **r} for r in m["matches"]]
    if docs:
        db["matches"].insert_many(docs)
    db["matches"].create_index([("key", 1), ("match_date", 1)])
    db["matches"].create_index([("opp_coach_key", 1)])
    log(f"  matches: {len(docs)} docs")

    fd = _load(folder, "findings")
    db["findings"].delete_many({"key": key})
    fdocs = [
        {**base, "_id": f"{key}:{i:02d}", "order": i, **f}
        for i, f in enumerate(fd["findings"], start=1)
    ]
    if fdocs:
        db["findings"].insert_many(fdocs)
    log(f"  findings: {len(fdocs)} docs")

    # registro de técnicos: lo único que lee el picker
    db["coaches"].replace_one(
        {"_id": key},
        {
            "_id": key,
            "key": key,
            "coach": meta["coach"],
            "short": meta["short"],
            "teams": meta["teams"],
            "n_matches": meta["n_matches"],
            "record": meta.get("record"),
            "period": meta["period"],
            "n_findings": len(fdocs),
            "opp_coaches": meta.get("opp_coaches", []),
            "published_at": datetime.now(UTC).isoformat(timespec="seconds"),
        },
        upsert=True,
    )
    log(f"publicado {key} en {dbname}")


def clean_legacy(log=print) -> None:
    """Borra los documentos de la clave vieja (coach:todos) y los de claves que ya no tienen carpeta en data/out."""
    client, dbname = _client()
    db = client[dbname]
    keep = set(published_coaches()) | {GLOBAL_KEY}
    total = 0
    for c in (
        "meta",
        "profile",
        "scenarios",
        "set_pieces",
        "players",
        "rivals",
        "simulation",
        "matches",
        "findings",
        "definitions",
        "coaches",
    ):
        r = db[c].delete_many(
            {"$or": [{"key": {"$regex": ":todos$"}}, {"key": {"$nin": list(keep)}}]}
        )
        total += r.deleted_count
    log(f"limpieza: {total} docs viejos borrados")


def counts(log=print) -> dict:
    client, dbname = _client()
    db = client[dbname]
    stats = db.command("dbStats")
    out = {c: db[c].count_documents({}) for c in sorted(db.list_collection_names())}
    log(
        f"colecciones: {json.dumps(out, ensure_ascii=False)}; tamaño de datos {stats['dataSize'] / 1e6:.2f} MB de 512 MB"
    )
    return out
