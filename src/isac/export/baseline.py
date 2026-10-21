"""Percentiles de liga: la unidad es la media por equipo-torneo (>= 10 partidos)."""

import numpy as np
import pandas as pd

from isac.metrics.registry import METRICS

MIN_MATCHES = 10


def team_tournament_means(mm: pd.DataFrame) -> pd.DataFrame:
    cols = [c for c in METRICS if c in mm.columns]
    g = mm.groupby(["team_id", "tournament"])
    means = g[cols].mean()
    means["n"] = g.size()
    return means[means["n"] >= MIN_MATCHES].reset_index()


def percentile(baseline: pd.Series, value: float) -> float | None:
    b = baseline.dropna().to_numpy()
    if value is None or (isinstance(value, float) and np.isnan(value)) or len(b) == 0:
        return None
    return float((b < value).mean() * 100 + (b == value).mean() * 50)


def summarize(rows: pd.DataFrame, baseline: pd.DataFrame, metrics: list[str]) -> list[dict]:
    """Para un subconjunto de partidos del técnico: media, n, media de liga, percentil (crudo y 'bueno')."""
    out = []
    for m in metrics:
        if m not in rows.columns:
            continue
        v = rows[m].dropna()
        if v.empty:
            continue
        val = float(v.mean())
        pct = percentile(baseline[m], val) if m in baseline.columns else None
        direction = METRICS[m][4]
        out.append(
            {
                "metric": m,
                "value": val,
                "n": int(v.size),
                "sd": float(v.std()) if v.size > 1 else None,
                "league_mean": float(baseline[m].mean()) if m in baseline.columns else None,
                "pct": pct,
                "pct_good": (100 - pct if direction < 0 else pct) if pct is not None else None,
            }
        )
    return out
