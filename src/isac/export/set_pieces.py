"""set_pieces.json: córners (envío, zona de primer contacto), tiros de BP por tipo y zonas (cuadrícula 12x8)."""

import pandas as pd

from isac.export.common import write_json


def _grid(df: pd.DataFrame, value: str | None = None) -> list[dict]:
    if df.empty:
        return []
    g = df.groupby("cell")
    out = g.size().rename("n").to_frame()
    if value:
        out[value] = g[value].sum()
    if "goal" in df.columns:
        out["goals"] = g["goal"].sum()
    res = []
    for cell, r in out.iterrows():
        cx, cy = (int(v) for v in cell.split(","))
        res.append({"cx": cx, "cy": cy, **{k: float(v) for k, v in r.items()}})
    return res


def export_set_pieces(
    corners_c: pd.DataFrame,
    corners_all: pd.DataFrame,
    sp_c: pd.DataFrame,
    sp_all: pd.DataFrame,
    n_matches: int,
    n_matches_league_units: int,
) -> None:
    deliv = (
        corners_c["delivery"].value_counts(normalize=True).mul(100).to_dict()
        if len(corners_c)
        else {}
    )
    deliv_league = (
        corners_all["delivery"].value_counts(normalize=True).mul(100).to_dict()
        if len(corners_all)
        else {}
    )
    side = (
        corners_c["side"].value_counts(normalize=True).mul(100).to_dict() if len(corners_c) else {}
    )
    by_deliv = (
        corners_c.groupby("delivery")
        .agg(n=("xg", "size"), xg=("xg", "sum"), shots=("shots", "sum"), goals=("goals", "sum"))
        .reset_index()
        .to_dict("records")
        if len(corners_c)
        else []
    )
    by_deliv_league = (
        corners_all.groupby("delivery")
        .agg(n=("xg", "size"), xg=("xg", "sum"), shots=("shots", "sum"), goals=("goals", "sum"))
        .reset_index()
        if len(corners_all)
        else pd.DataFrame()
    )
    if len(by_deliv_league):
        by_deliv_league["xg_per_corner"] = by_deliv_league["xg"] / by_deliv_league["n"]
        by_deliv_league = by_deliv_league.to_dict("records")
    for r in by_deliv:
        r["xg_per_corner"] = r["xg"] / r["n"] if r["n"] else None
    sp_for = sp_c[sp_c["for"]]
    sp_against = sp_c[~sp_c["for"]]
    by_type = lambda df: (
        df.groupby("sp_type")
        .agg(shots=("xg", "size"), xg=("xg", "sum"), goals=("goal", "sum"))
        .reset_index()
        .to_dict("records")
    )
    payload = {
        "n_matches": n_matches,
        "corners": {
            "n": len(corners_c),
            "per_match": float(len(corners_c) / n_matches) if n_matches else None,
            "delivery_mix": deliv,
            "delivery_mix_league": deliv_league,
            "side_mix": side,
            "by_delivery": by_deliv,
            "by_delivery_league": by_deliv_league if isinstance(by_deliv_league, list) else [],
            "first_contact_grid": _grid(corners_c, "xg"),
            "first_contact_grid_league": _grid(corners_all, "xg"),
        },
        "shots_for": {"by_type": by_type(sp_for), "grid": _grid(sp_for, "xg")},
        "shots_against": {"by_type": by_type(sp_against), "grid": _grid(sp_against, "xg")},
        "league_shots_for_by_type": by_type(sp_all[sp_all["for"]]),
        "grid_shape": {
            "nx": 6,
            "ny": 4,
            "note": "celda (cx, cy) de 20 x 20 m; cx=5 es la portería rival (ataque hacia x=120)",
        },
    }
    write_json("set_pieces.json", payload, ["D-07", "D-12"])
