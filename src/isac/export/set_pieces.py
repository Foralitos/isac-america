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


def _heat4(df: pd.DataFrame) -> list[dict]:
    """Celdas de 4 m (30 x 20) con n, xG y goles. Agregado; nunca coordenadas sueltas."""
    if df.empty or "cell4" not in df.columns:
        return []
    g = df.groupby("cell4")
    out = g.size().rename("n").to_frame()
    out["xg"] = g["xg"].sum()
    gcol = "goals" if "goals" in df.columns else "goal"
    out["goals"] = g[gcol].sum()
    res = []
    for cell, r in out.iterrows():
        cx, cy = (int(v) for v in cell.split(","))
        res.append(
            {
                "cx": cx,
                "cy": cy,
                "n": int(r["n"]),
                "xg": round(float(r["xg"]), 4),
                "goals": int(r["goals"]),
            }
        )
    return res


def _bundles(df: pd.DataFrame) -> list[dict]:
    """Trayectorias agregadas de córner: lado x envío x zona de caída, con el punto medio de caída (centro de celdas de 4 m)."""
    if df.empty or "zone" not in df.columns:
        return []
    d = df.copy()
    cx = d["cell4"].str.split(",").str[0].astype(int)
    cy = d["cell4"].str.split(",").str[1].astype(int)
    d["ex"] = cx * 4 + 2
    d["ey"] = cy * 4 + 2
    d["alto"] = d["height"] == "alto"
    g = d.groupby(["side", "delivery", "zone"])
    out = g.agg(
        n=("xg", "size"),
        xg=("xg", "sum"),
        shots=("shots", "sum"),
        goals=("goals", "sum"),
        ex=("ex", "mean"),
        ey=("ey", "mean"),
        alto_pct=("alto", "mean"),
    ).reset_index()
    out["alto_pct"] = out["alto_pct"] * 100
    return [
        {
            k: (
                round(float(v), 3)
                if isinstance(v, float)
                else (int(v) if hasattr(v, "item") and not isinstance(v, str) else v)
            )
            for k, v in r.items()
        }
        for r in out.to_dict("records")
    ]


def _centers(df: pd.DataFrame, col: str, prefix: str) -> pd.DataFrame:
    d = df.copy()
    parts = d[col].str.split(",")
    d[f"{prefix}x"] = parts.str[0].astype(int) * 4 + 2
    d[f"{prefix}y"] = parts.str[1].astype(int) * 4 + 2
    return d


def _traj(df: pd.DataFrame, keys: list[str], extra: dict | None = None) -> list[dict]:
    """Trayectorias agregadas: origen medio (cell4) y caída media (end4) por combinación de claves."""
    if df.empty:
        return []
    d = _centers(_centers(df, "cell4", "o"), "end4", "e")
    agg = {
        "n": ("xg", "size"),
        "xg": ("xg", "sum"),
        "shots": ("shots", "sum"),
        "goals": ("goals", "sum"),
        "ox": ("ox", "mean"),
        "oy": ("oy", "mean"),
        "ex": ("ex", "mean"),
        "ey": ("ey", "mean"),
        **(extra or {}),
    }
    out = d.groupby(keys).agg(**agg).reset_index()
    recs = []
    for r in out.to_dict("records"):
        recs.append(
            {
                k: (
                    round(float(v), 3)
                    if isinstance(v, float)
                    else (int(v) if hasattr(v, "item") and not isinstance(v, str) else v)
                )
                for k, v in r.items()
            }
        )
    return recs


def _free_kicks(df: pd.DataFrame) -> dict:
    if df.empty:
        return {"n": 0, "direct_n": 0, "goals": 0, "xg": 0.0, "bundles": [], "direct": []}
    ind = df[~df["direct"]]
    dr = df[df["direct"]]
    return {
        "n": len(df),
        "direct_n": len(dr),
        "goals": int(df["goals"].sum()),
        "xg": round(float(df["xg"].sum()), 3),
        "bundles": _traj(ind, ["origin_zone", "zone"]),
        "direct": _traj(dr, ["origin_zone"]),
    }


def _throwins(df: pd.DataFrame) -> dict:
    if df.empty:
        return {"n": 0, "goals": 0, "retained_pct": None, "bundles": []}
    d = df.copy()
    d["ret"] = d["retained"].astype(float)
    return {
        "n": len(d),
        "goals": int(d["goals"].sum()),
        "retained_pct": round(float(d["ret"].mean() * 100), 1),
        "bundles": _traj(d, ["side", "zone"], {"retained_pct": ("ret", "mean")}),
    }


def _by_type(df: pd.DataFrame) -> dict:
    return {t: _heat4(g) for t, g in df.groupby("sp_type")} if len(df) else {}


def _board(
    corners_for: pd.DataFrame,
    corners_against: pd.DataFrame,
    sp_for: pd.DataFrame,
    sp_against: pd.DataFrame,
    fk_for: pd.DataFrame | None = None,
    fk_against: pd.DataFrame | None = None,
    ti_for: pd.DataFrame | None = None,
    ti_against: pd.DataFrame | None = None,
) -> dict:
    empty = pd.DataFrame()
    return {
        "free_kicks_for": _free_kicks(fk_for if fk_for is not None else empty),
        "free_kicks_against": _free_kicks(fk_against if fk_against is not None else empty),
        "throwins_for": _throwins(ti_for if ti_for is not None else empty),
        "throwins_against": _throwins(ti_against if ti_against is not None else empty),
        "corners_for": {
            "n": len(corners_for),
            "goals": int(corners_for["goals"].sum()) if len(corners_for) else 0,
            "bundles": _bundles(corners_for),
            "heat": _heat4(corners_for),
        },
        "corners_against": {
            "n": len(corners_against),
            "goals": int(corners_against["goals"].sum()) if len(corners_against) else 0,
            "bundles": _bundles(corners_against),
            "heat": _heat4(corners_against),
        },
        "shots_for": {"n": len(sp_for), "heat": _heat4(sp_for), "by_type": _by_type(sp_for)},
        "shots_against": {
            "n": len(sp_against),
            "heat": _heat4(sp_against),
            "by_type": _by_type(sp_against),
        },
    }


def export_set_pieces(
    corners_c: pd.DataFrame,
    corners_all: pd.DataFrame,
    sp_c: pd.DataFrame,
    sp_all: pd.DataFrame,
    n_matches: int,
    n_matches_league_units: int,
    rows: pd.DataFrame | None = None,
    fk_c: pd.DataFrame | None = None,
    ti_c: pd.DataFrame | None = None,
) -> None:
    fk_c = fk_c if fk_c is not None else pd.DataFrame()
    ti_c = ti_c if ti_c is not None else pd.DataFrame()
    fk_for = fk_c[fk_c["for"]] if len(fk_c) else fk_c
    fk_against = fk_c[~fk_c["for"]] if len(fk_c) else fk_c
    ti_for = ti_c[ti_c["for"]] if len(ti_c) else ti_c
    ti_against = ti_c[~ti_c["for"]] if len(ti_c) else ti_c
    # córners rivales (for = False) van aparte; todo lo demás usa solo los propios.
    if "for" in corners_c.columns:
        corners_against_c = corners_c[~corners_c["for"]].copy()
        corners_c = corners_c[corners_c["for"]].copy()
        corners_all = corners_all[corners_all["for"]].copy()
    else:
        corners_against_c = corners_c.iloc[0:0]
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
    board = _board(
        corners_c, corners_against_c, sp_for, sp_against, fk_for, fk_against, ti_for, ti_against
    )
    board["league"] = {
        "corners_for_heat": _heat4(corners_all),
        "shots_for_heat": _heat4(sp_all[sp_all["for"]]),
        "shots_against_heat": _heat4(sp_all[~sp_all["for"]]),
        "units": n_matches_league_units,
    }
    board["by_team"] = {}
    if rows is not None and len(rows):
        pairs = rows[["match_id", "team_id", "team"]].drop_duplicates()
        cf = corners_c.merge(pairs, on=["match_id", "team_id"], how="inner")
        ca = corners_against_c.merge(pairs, on=["match_id", "team_id"], how="inner")
        sf = sp_for.merge(pairs, on=["match_id", "team_id"], how="inner")
        sa = sp_against.merge(pairs, on=["match_id", "team_id"], how="inner")
        for team in sorted(pairs["team"].unique()):
            board["by_team"][team] = {
                **_board(
                    cf[cf["team"] == team],
                    ca[ca["team"] == team],
                    sf[sf["team"] == team],
                    sa[sa["team"] == team],
                ),
                "n_matches": int((pairs["team"] == team).sum()),
            }
    payload = {
        "n_matches": n_matches,
        "board": board,
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
