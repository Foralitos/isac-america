"""Compara métricas propias con las de StatsBomb a nivel partido-equipo."""

import pandas as pd

PAIRS = [  # (propia, statsbomb, r mínimo)
    ("np_xg", "np_xg", 0.99),
    ("np_shots", "np_shots", 0.99),
    ("possession_pct", "possession", 0.90),
    ("directness", "avg_team_possession_directness", 0.75),
    ("corners", "corners", 0.95),
    ("counterpressures", "counterpressures", 0.90),
    ("pressures", "pressures", 0.95),
    ("ppda_own", "ppda", 0.80),
]


def validate(metrics_match: pd.DataFrame, tms: pd.DataFrame) -> pd.DataFrame:
    t = tms.copy()
    t["possession"] = t["possession"] * 100
    df = metrics_match.merge(t, on=["match_id", "team_id"], suffixes=("", "_sb"))
    rows = []
    for own, sb, rmin in PAIRS:
        sbc = sb if sb in df.columns and sb not in metrics_match.columns else f"{sb}_sb"
        r = df[own].corr(df[sbc])
        rows.append(
            {
                "metric": own,
                "statsbomb": sb,
                "r": round(float(r), 3),
                "mean_own": round(float(df[own].mean()), 3),
                "mean_sb": round(float(df[sbc].mean()), 3),
                "ok": r >= rmin,
            }
        )
    return pd.DataFrame(rows)
