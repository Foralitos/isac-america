"""Carga de parquet procesados, selección del técnico y escritura de JSON."""

import json
import math
from datetime import UTC, datetime

import numpy as np
import pandas as pd

from isac.config import OUT, PROCESSED
from isac.metrics.registry import METRICS
from isac.metrics.run import METRICS_DIR


def load_all() -> dict[str, pd.DataFrame]:
    d = {
        "ctx": pd.read_parquet(PROCESSED / "matches_context.parquet"),
        "mm": pd.read_parquet(METRICS_DIR / "metrics_match.parquet"),
        "seg": pd.read_parquet(METRICS_DIR / "metrics_segment.parquet"),
        "corners": pd.read_parquet(METRICS_DIR / "sp_corners.parquet"),
        "sp_shots": pd.read_parquet(METRICS_DIR / "sp_shots.parquet"),
        "free_kicks": pd.read_parquet(METRICS_DIR / "sp_free_kicks.parquet"),
        "throwins": pd.read_parquet(METRICS_DIR / "sp_throwins.parquet"),
        "formation_minutes": pd.read_parquet(METRICS_DIR / "formation_minutes.parquet"),
        "positions": pd.read_parquet(METRICS_DIR / "positions.parquet"),
        "pass_pairs": pd.read_parquet(METRICS_DIR / "pass_pairs.parquet"),
        "subs": pd.read_parquet(METRICS_DIR / "subs.parquet"),
        "formations": pd.read_parquet(METRICS_DIR / "formations_ev.parquet"),
        "lineups": pd.read_parquet(PROCESSED / "lineups.parquet"),
        "tms": pd.read_parquet(PROCESSED / "team_match_stats.parquet"),
    }
    d["mm"] = d["mm"].merge(d["ctx"], on=["match_id", "team_id"], how="left")
    return d


# Carpeta de salida activa: data/out/<coach_key>/ o data/out/global/. La fija run_export antes de exportar.
_OUT_DIR = {"path": OUT}
GLOBAL_DIR = OUT / "global"


def set_out_dir(path) -> None:
    _OUT_DIR["path"] = path


def out_dir():
    return _OUT_DIR["path"]


def coach_dir(key: str):
    return OUT / key


def coach_mask(df: pd.DataFrame, coach: str, team: str | None = None) -> pd.Series:
    m = df["coach"] == coach
    return m & (df["team"] == team) if team else m


def select_pairs(df: pd.DataFrame, pairs: pd.DataFrame) -> pd.DataFrame:
    """Filas de df cuyo (match_id, team_id) está en pairs (los partidos-equipo del técnico)."""
    return df.merge(
        pairs[["match_id", "team_id"]].drop_duplicates(), on=["match_id", "team_id"], how="inner"
    )


def _clean(o):
    if isinstance(o, dict):
        return {str(k): _clean(v) for k, v in o.items()}
    if isinstance(o, (list, tuple)):
        return [_clean(v) for v in o]
    if isinstance(o, (np.integer,)):
        return int(o)
    if isinstance(o, (np.floating, float)):
        return None if (o is None or math.isnan(o)) else round(float(o), 4)
    if isinstance(o, (np.bool_,)):
        return bool(o)
    if isinstance(o, pd.Timestamp):
        return o.strftime("%Y-%m-%d")
    return o


def write_json(name: str, payload: dict, definitions: list[str]) -> None:
    base = out_dir()
    base.mkdir(parents=True, exist_ok=True)
    (base / name).parent.mkdir(parents=True, exist_ok=True)
    body = {
        "generated_at": datetime.now(UTC).isoformat(timespec="seconds"),
        "definitions": sorted(set(definitions)),
        **payload,
    }
    with open(base / name, "w", encoding="utf-8") as f:
        json.dump(_clean(body), f, ensure_ascii=False, indent=1)


def metric_meta(metric: str) -> dict:
    b, lab, defs, unit, direction, _per90 = METRICS[metric]
    return {
        "metric": metric,
        "block": b,
        "label": lab,
        "definitions": defs,
        "unit": unit,
        "direction": direction,
    }
