"""Corre todas las métricas sobre toda la liga y guarda parquet en data/processed/metrics/."""

from concurrent.futures import ProcessPoolExecutor

import pandas as pd

from isac.config import PROCESSED
from isac.io.events import EVENTS_OUT
from isac.metrics.match import team_match_metrics
from isac.metrics.players import (
    formation_changes,
    formation_minutes,
    position_profiles,
    substitutions,
)
from isac.metrics.segments import team_segment_metrics
from isac.metrics.validate import validate

METRICS_DIR = PROCESSED / "metrics"


def _process_match(ev: pd.DataFrame) -> dict:
    from isac.framework.possession import possessions

    teams = [int(t) for t in ev["team_id"].dropna().unique()]
    if len(teams) != 2:
        return {}
    poss = possessions(ev)
    out = {
        "match": [],
        "segment": [],
        "corners": [],
        "sp_shots": [],
        "free_kicks": [],
        "throwins": [],
        "subs": [],
        "formations": [],
        "formation_minutes": [],
        "positions": [],
        "pass_pairs": [],
    }
    for tid in teams:
        opp = teams[1] if tid == teams[0] else teams[0]
        m, aux = team_match_metrics(ev, tid, opp, poss)
        out["match"].append(m)
        out["segment"].append(team_segment_metrics(ev, tid, opp))
        out["corners"].extend(aux["corners"])
        out["sp_shots"].extend(aux["sp_shots"])
        out["free_kicks"].extend(aux["free_kicks"])
        out["throwins"].extend(aux["throwins"])
        out["subs"].extend(substitutions(ev, tid, opp))
        out["formations"].extend(formation_changes(ev, tid))
        out["formation_minutes"].extend(formation_minutes(ev, tid))
        pp = position_profiles(ev, tid)
        out["positions"].extend(pp["positions"])
        out["pass_pairs"].extend(pp["pass_pairs"])
    return out


def run_metrics(log=print, workers: int = 8, season_ids: list[int] | None = None) -> None:
    METRICS_DIR.mkdir(parents=True, exist_ok=True)
    acc = {
        "match": [],
        "segment": [],
        "corners": [],
        "sp_shots": [],
        "free_kicks": [],
        "throwins": [],
        "subs": [],
        "formations": [],
        "formation_minutes": [],
        "positions": [],
        "pass_pairs": [],
    }
    for d in sorted(EVENTS_OUT.glob("season_id=*")):
        sid = int(d.name.split("=")[1])
        if season_ids and sid not in season_ids:
            continue
        ev = pd.read_parquet(d / "part.parquet")
        groups = [g for _, g in ev.groupby("match_id", sort=False)]
        with ProcessPoolExecutor(max_workers=workers) as ex:
            for res in ex.map(_process_match, groups, chunksize=4):
                for k, v in res.items():
                    acc[k].extend(v)
        log(f"  season {sid}: {len(groups)} partidos")
    mm = pd.DataFrame(acc["match"])
    mm.to_parquet(METRICS_DIR / "metrics_match.parquet", index=False)
    pd.concat(acc["segment"], ignore_index=True).to_parquet(
        METRICS_DIR / "metrics_segment.parquet", index=False
    )
    pd.DataFrame(acc["corners"]).to_parquet(METRICS_DIR / "sp_corners.parquet", index=False)
    pd.DataFrame(acc["sp_shots"]).to_parquet(METRICS_DIR / "sp_shots.parquet", index=False)
    pd.DataFrame(acc["free_kicks"]).to_parquet(METRICS_DIR / "sp_free_kicks.parquet", index=False)
    pd.DataFrame(acc["throwins"]).to_parquet(METRICS_DIR / "sp_throwins.parquet", index=False)
    pd.DataFrame(acc["subs"]).to_parquet(METRICS_DIR / "subs.parquet", index=False)
    pd.DataFrame(acc["formations"]).to_parquet(METRICS_DIR / "formations_ev.parquet", index=False)
    pd.DataFrame(acc["positions"]).to_parquet(METRICS_DIR / "positions.parquet", index=False)
    pd.DataFrame(acc["pass_pairs"]).to_parquet(METRICS_DIR / "pass_pairs.parquet", index=False)
    pd.DataFrame(acc["formation_minutes"]).to_parquet(
        METRICS_DIR / "formation_minutes.parquet", index=False
    )
    log(f"metrics_match: {len(mm)} filas, {mm.shape[1]} columnas")
    tms = pd.read_parquet(PROCESSED / "team_match_stats.parquet")
    rep = validate(mm, tms)
    rep.to_csv(METRICS_DIR / "validation.csv", index=False)
    log("validación vs StatsBomb:\n" + rep.to_string(index=False))
    if not rep["ok"].all():
        log("ATENCIÓN: hay métricas por debajo del umbral de correlación")
