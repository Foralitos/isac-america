"""players.json: formaciones, núcleo del XI, minutos por posición, cambios por contexto e impacto del primer cambio."""

import itertools

import pandas as pd

from isac.context.stakes import LABELS
from isac.export.common import select_pairs, write_json

CORE_PCT = 70.0


def export_players(
    ctx_c: pd.DataFrame,
    formations: pd.DataFrame,
    subs: pd.DataFrame,
    lineups: pd.DataFrame,
    pms: pd.DataFrame | None,
    fmin: pd.DataFrame | None = None,
    positions: pd.DataFrame | None = None,
    pass_pairs: pd.DataFrame | None = None,
) -> None:
    profiles = (
        _profiles(select_pairs(positions, ctx_c), select_pairs(pass_pairs, ctx_c))
        if positions is not None and len(positions)
        else None
    )
    mids = ctx_c["match_id"].tolist()
    n = len(mids)
    clock = (
        _clock(select_pairs(fmin, ctx_c), select_pairs(subs, ctx_c))
        if fmin is not None and len(fmin)
        else None
    )
    fm = select_pairs(formations, ctx_c)
    start = fm[fm["kind"] == "inicial"]
    start_mix = (
        start["formation"]
        .value_counts()
        .rename_axis("formation")
        .reset_index(name="n")
        .to_dict("records")
    )
    by_tour = (
        start.merge(ctx_c[["match_id", "tournament", "tkey"]], on="match_id")
        .groupby(["tkey", "tournament"])["formation"]
        .agg(lambda s: s.value_counts().to_dict())
        .reset_index()
        .sort_values("tkey")
        .to_dict("records")
    )
    shifts = fm[fm["kind"] == "cambio"]
    changes = shifts[
        shifts["formation"] != shifts["from_formation"]
    ]  # cambio real de dibujo; el resto son reacomodos
    changes_by_state = changes.groupby("state").size().to_dict()
    shifts_by_state = shifts.groupby("state").size().to_dict()
    matches_with_shift = int(shifts["match_id"].nunique())
    change_pairs = (
        changes.groupby(["from_formation", "formation", "state"])
        .size()
        .reset_index(name="n")
        .sort_values("n", ascending=False)
        .head(15)
        .to_dict("records")
    )
    matches_with_change = int(changes["match_id"].nunique())

    lu = select_pairs(lineups, ctx_c).copy()
    lu["minutes"] = (
        lu["to_t"].fillna(lu.groupby("match_id")["to_t"].transform("max")) - lu["from_t"]
    ) / 60
    starts = (
        lu[lu["start_reason"] == "Starting XI"]
        .groupby(["player_id", "player"])
        .agg(starts=("match_id", "nunique"))
        .reset_index()
    )
    starts["start_pct"] = starts["starts"] / n * 100
    mins = (
        lu.groupby(["player_id", "player"])
        .agg(minutes=("minutes", "sum"), apps=("match_id", "nunique"))
        .reset_index()
    )
    core = starts.merge(mins, on=["player_id", "player"]).sort_values("starts", ascending=False)
    core["core"] = core["start_pct"] >= CORE_PCT
    pos_minutes = (
        lu.groupby(["player_id", "player", "position"])["minutes"]
        .sum()
        .reset_index()
        .sort_values("minutes", ascending=False)
    )
    top_pos = pos_minutes.groupby(["player_id", "player"]).head(2)
    roles = {
        int(pid): grp[["position", "minutes"]].to_dict("records")
        for (pid, _), grp in top_pos.groupby(["player_id", "player"])
    }
    players_out = []
    for r in core.head(30).itertuples(index=False):
        players_out.append(
            {
                "player_id": int(r.player_id),
                "player": r.player,
                "starts": int(r.starts),
                "start_pct": float(r.start_pct),
                "minutes": float(r.minutes),
                "apps": int(r.apps),
                "core": bool(r.core),
                "roles": roles.get(int(r.player_id), []),
            }
        )
    # núcleo por torneo (>= 70 % de titularidades en ese torneo)
    st_t = lu[lu["start_reason"] == "Starting XI"].merge(
        ctx_c[["match_id", "tournament", "tkey"]], on="match_id"
    )
    n_by_t = ctx_c.groupby("tournament")["match_id"].nunique()
    core_by_t = []
    for (tkey, tour), g in st_t.groupby(["tkey", "tournament"]):
        c = g.groupby(["player_id", "player"])["match_id"].nunique().reset_index(name="starts")
        c["start_pct"] = c["starts"] / n_by_t[tour] * 100
        c = c[c["start_pct"] >= CORE_PCT].sort_values("starts", ascending=False)
        core_by_t.append(
            {
                "tournament": tour,
                "tkey": int(tkey),
                "n_matches": int(n_by_t[tour]),
                "core": [
                    {
                        "player_id": int(r.player_id),
                        "player": r.player,
                        "starts": int(r.starts),
                        "start_pct": float(r.start_pct),
                        "roles": roles.get(int(r.player_id), []),
                    }
                    for r in c.itertuples(index=False)
                ],
            }
        )
    core_by_t.sort(key=lambda d: d["tkey"])
    # XI estabilidad (Jaccard entre partidos consecutivos)
    xi = lu[lu["start_reason"] == "Starting XI"].groupby("match_id")["player_id"].apply(set)
    order = ctx_c.sort_values("match_date")["match_id"].tolist()
    jac = []
    for a, b in itertools.pairwise(order):
        if a in xi and b in xi:
            jac.append(len(xi[a] & xi[b]) / len(xi[a] | xi[b]))
    xi_stability = float(sum(jac) / len(jac)) if jac else None
    xi_changes_mean = (
        float(
            sum(
                11 - len(xi[a] & xi[b]) for a, b in itertools.pairwise(order) if a in xi and b in xi
            )
            / max(1, len(jac))
        )
        if jac
        else None
    )

    sb = select_pairs(subs, ctx_c).merge(
        ctx_c[["match_id", "stakes", "is_home", "result", "phase_kind"]], on="match_id"
    )
    first = sb[sb["order"] == 1]

    def first_sub_by(key):
        g = first.groupby(key)["minute"]
        return [
            {
                "category": str(k),
                "label": LABELS.get(k, str(k)),
                "n": int(v.size),
                "mean_minute": float(v.mean()),
                "median_minute": float(v.median()),
            }
            for k, v in g
        ]

    impact_cols = [c for c in first.columns if c.startswith(("before_", "after_"))]
    impact = {}
    for st, g in first.groupby("state"):
        impact[st] = {"n": len(g), **{c: float(g[c].mean()) for c in impact_cols}}
    impact["todos"] = {"n": len(first), **{c: float(first[c].mean()) for c in impact_cols}}
    sub_minutes_by_state = {
        st: {"n": len(g), "mean_minute": float(g["minute"].mean())} for st, g in sb.groupby("state")
    }
    pos_out = (
        sb.groupby(["state", "position_out"])
        .size()
        .reset_index(name="n")
        .sort_values("n", ascending=False)
        .to_dict("records")
    )
    reasons = sb["reason"].value_counts().to_dict()
    subs_per_match = float(len(sb) / n) if n else None
    payload = {
        "n_matches": n,
        "clock": clock,
        "profiles": profiles,
        "shape": _shape(select_pairs(positions, ctx_c), select_pairs(pass_pairs, ctx_c))
        if positions is not None and len(positions)
        else None,
        "formations": {
            "start_mix": start_mix,
            "by_tournament": [
                {"tournament": r["tournament"], "mix": r["formation"]} for r in by_tour
            ],
            "matches_with_change": matches_with_change,
            "matches_with_shift": matches_with_shift,
            "changes_by_state": changes_by_state,
            "shifts_by_state": shifts_by_state,
            "top_changes": change_pairs,
        },
        "xi": {
            "stability_jaccard": xi_stability,
            "changes_per_match": xi_changes_mean,
            "core_threshold_pct": CORE_PCT,
            "players": players_out,
            "core_by_tournament": core_by_t,
        },
        "subs": {
            "per_match": subs_per_match,
            "reasons": reasons,
            "first_sub_by_state": first_sub_by("state"),
            "first_sub_by_stakes": first_sub_by("stakes"),
            "first_sub_by_home": [
                {**d, "label": "Local" if d["category"] == "True" else "Visita"}
                for d in first_sub_by("is_home")
            ],
            "all_subs_by_state": sub_minutes_by_state,
            "position_out_by_state": pos_out,
            "first_sub_impact": impact,
        },
    }
    write_json("players.json", payload, ["D-21", "D-23", "SB"])


POS_GROUP = {
    "Goalkeeper": "portero",
    "Right Back": "lateral",
    "Left Back": "lateral",
    "Right Wing Back": "lateral",
    "Left Wing Back": "lateral",
    "Right Center Back": "central",
    "Left Center Back": "central",
    "Center Back": "central",
    "Right Defensive Midfield": "pivote",
    "Left Defensive Midfield": "pivote",
    "Center Defensive Midfield": "pivote",
    "Right Center Midfield": "medio",
    "Left Center Midfield": "medio",
    "Center Midfield": "medio",
    "Right Midfield": "extremo",
    "Left Midfield": "extremo",
    "Right Wing": "extremo",
    "Left Wing": "extremo",
    "Right Attacking Midfield": "mediapunta",
    "Left Attacking Midfield": "mediapunta",
    "Center Attacking Midfield": "mediapunta",
    "Secondary Striker": "delantero",
    "Center Forward": "delantero",
    "Right Center Forward": "delantero",
    "Left Center Forward": "delantero",
}


def _clock(fmin: pd.DataFrame, subs: pd.DataFrame) -> dict:
    """Reloj táctico: por estado y tramo de 5 minutos, minutos con cada dibujo y cambios hechos (por posición que sale)."""
    cells = []
    sb = subs.copy()
    sb["bucket5"] = sb["minute"].clip(upper=90).floordiv(5).mul(5).astype(int)
    sb["group"] = sb["position_out"].map(POS_GROUP).fillna("otro")
    for (state, bucket), g in fmin.groupby(["state", "bucket"]):
        forms = g.groupby("formation")["minutes"].sum().sort_values(ascending=False)
        ss = sb[(sb["state"] == state) & (sb["bucket5"] == bucket)]
        cells.append(
            {
                "state": state,
                "bucket": int(bucket),
                "minutes": round(float(forms.sum()), 1),
                "matches": int(g["match_id"].nunique()),
                "formations": {str(int(f)): round(float(m), 1) for f, m in forms.items()},
                "subs": len(ss),
                "subs_by_group": {k: int(v) for k, v in ss["group"].value_counts().items()},
            }
        )
    # acumulado de cambios por estado hasta cada tramo (para "para entonces ya hizo X cambios")
    return {"buckets": list(range(0, 95, 5)), "cells": cells}


MIN_PROFILE_EVENTS = 150


def _profiles(pos: pd.DataFrame, pairs: pd.DataFrame) -> dict:
    """Por estado y dibujo: posición media con balón de cada posición, vectores de conducción y pase, y red de pases."""
    out = {}
    pos = pos.copy()
    pos["formation"] = pos["formation"].astype(int)
    pairs = pairs.copy()
    pairs["formation"] = pairs["formation"].astype(int)
    groups = [(st, f) for (st, f) in pos.groupby(["state", "formation"]).groups.keys()]
    groups += [(st, 0) for st in pos["state"].unique()]  # 0 = todos los dibujos
    for state, form in groups:
        p = pos[(pos["state"] == state) & ((pos["formation"] == form) if form else True)]
        q = pairs[(pairs["state"] == state) & ((pairs["formation"] == form) if form else True)]
        if p["n"].sum() < MIN_PROFILE_EVENTS * 11:
            continue
        w = p["n"]
        agg = (
            p.assign(
                wx=p["x"] * w,
                wy=p["y"] * w,
                wcdx=p["cdx"] * p["carries"],
                wcdy=p["cdy"] * p["carries"],
                wpdx=p["pdx"] * p["passes"],
                wpdy=p["pdy"] * p["passes"],
                wdef=p["def_x"].fillna(0) * p["def_n"],
            )
            .groupby("position")
            .agg(
                n=("n", "sum"),
                wx=("wx", "sum"),
                wy=("wy", "sum"),
                carries=("carries", "sum"),
                wcdx=("wcdx", "sum"),
                wcdy=("wcdy", "sum"),
                passes=("passes", "sum"),
                wpdx=("wpdx", "sum"),
                wpdy=("wpdy", "sum"),
                def_n=("def_n", "sum"),
                wdef=("wdef", "sum"),
                matches=("match_id", "nunique"),
            )
            .reset_index()
        )
        agg = agg[agg["n"] >= MIN_PROFILE_EVENTS].sort_values("n", ascending=False)
        rows = [
            {
                "position": r["position"],
                "n": int(r["n"]),
                "matches": int(r["matches"]),
                "x": round(r["wx"] / r["n"], 2),
                "y": round(r["wy"] / r["n"], 2),
                "carries": int(r["carries"]),
                "cdx": round(r["wcdx"] / r["carries"], 2) if r["carries"] else 0,
                "cdy": round(r["wcdy"] / r["carries"], 2) if r["carries"] else 0,
                "passes": int(r["passes"]),
                "pdx": round(r["wpdx"] / r["passes"], 2) if r["passes"] else 0,
                "pdy": round(r["wpdy"] / r["passes"], 2) if r["passes"] else 0,
                "def_x": round(r["wdef"] / r["def_n"], 2) if r["def_n"] else None,
            }
            for _, r in agg.iterrows()
        ]
        keep = {r["position"] for r in rows}
        links = (
            q[q["pos_from"].isin(keep) & q["pos_to"].isin(keep)]
            .groupby(["pos_from", "pos_to"])["n"]
            .sum()
            .reset_index()
            .sort_values("n", ascending=False)
            .head(24)
        )
        out[f"{state}:{form}"] = {
            "state": state,
            "formation": int(form),
            "positions": rows,
            "links": [
                {"a": r["pos_from"], "b": r["pos_to"], "n": int(r["n"])}
                for _, r in links.iterrows()
            ],
        }
    return out


# Once huecos fijos: cada posición de StatsBomb cae en uno, para que la forma real se vea aunque cambie el dibujo.
SLOT = {
    "Goalkeeper": "POR",
    "Left Back": "LI",
    "Left Wing Back": "LI",
    "Left Center Back": "DFCI",
    "Right Center Back": "DFCD",
    "Center Back": "DFCD",
    "Right Back": "LD",
    "Right Wing Back": "LD",
    "Left Defensive Midfield": "MCI",
    "Left Center Midfield": "MCI",
    "Center Defensive Midfield": "MCI",
    "Right Defensive Midfield": "MCD",
    "Right Center Midfield": "MCD",
    "Center Midfield": "MCD",
    "Left Wing": "EI",
    "Left Midfield": "EI",
    "Left Attacking Midfield": "EI",
    "Center Attacking Midfield": "MP",
    "Secondary Striker": "MP",
    "Right Center Forward": "MP",
    "Right Wing": "ED",
    "Right Midfield": "ED",
    "Right Attacking Midfield": "ED",
    "Center Forward": "DC",
    "Left Center Forward": "DC",
}
SLOT_LABEL = {
    "POR": "portero",
    "LI": "lateral izquierdo",
    "DFCI": "central izquierdo",
    "DFCD": "central derecho",
    "LD": "lateral derecho",
    "MCI": "medio izquierdo",
    "MCD": "medio derecho",
    "EI": "extremo izquierdo",
    "MP": "mediapunta / segundo punta",
    "ED": "extremo derecho",
    "DC": "delantero centro",
}
BUCKET_ORDER = ["0-15", "15-30", "30-45", "45-60", "60-75", "75-90"]


def _shape(pos: pd.DataFrame, pairs: pd.DataFrame) -> dict:
    """Forma real del equipo por estado y tramo de 15 minutos: posición media de cada hueco (sin importar el dibujo)."""
    pos = pos.copy()
    pos["slot"] = pos["position"].map(SLOT)
    pos = pos[pos["slot"].notna()]
    pairs = pairs.copy()
    pairs["a"] = pairs["pos_from"].map(SLOT)
    pairs["b"] = pairs["pos_to"].map(SLOT)
    pairs = pairs[pairs["a"].notna() & pairs["b"].notna() & (pairs["a"] != pairs["b"])]
    cells = []
    for state in ["perdiendo", "empate", "ganando"]:
        for bucket in BUCKET_ORDER:
            p = pos[(pos["state"] == state) & (pos["bucket"] == bucket)]
            if p["n"].sum() < 500:
                continue
            w = p["n"]
            agg = (
                p.assign(
                    wx=p["x"] * w,
                    wy=p["y"] * w,
                    wcdx=p["cdx"] * p["carries"],
                    wcdy=p["cdy"] * p["carries"],
                    wpdx=p["pdx"] * p["passes"],
                    wpdy=p["pdy"] * p["passes"],
                )
                .groupby("slot")
                .agg(
                    n=("n", "sum"),
                    wx=("wx", "sum"),
                    wy=("wy", "sum"),
                    carries=("carries", "sum"),
                    wcdx=("wcdx", "sum"),
                    wcdy=("wcdy", "sum"),
                    passes=("passes", "sum"),
                    wpdx=("wpdx", "sum"),
                    wpdy=("wpdy", "sum"),
                    matches=("match_id", "nunique"),
                )
                .reset_index()
            )
            slots = [
                {
                    "slot": r["slot"],
                    "label": SLOT_LABEL[r["slot"]],
                    "n": int(r["n"]),
                    "matches": int(r["matches"]),
                    "x": round(r["wx"] / r["n"], 2),
                    "y": round(r["wy"] / r["n"], 2),
                    "carries": int(r["carries"]),
                    "cdx": round(r["wcdx"] / r["carries"], 2) if r["carries"] else 0,
                    "cdy": round(r["wcdy"] / r["carries"], 2) if r["carries"] else 0,
                    "passes": int(r["passes"]),
                    "pdx": round(r["wpdx"] / r["passes"], 2) if r["passes"] else 0,
                    "pdy": round(r["wpdy"] / r["passes"], 2) if r["passes"] else 0,
                }
                for _, r in agg.iterrows()
            ]
            q = pairs[(pairs["state"] == state) & (pairs["bucket"] == bucket)]
            links = (
                q.groupby(["a", "b"])["n"]
                .sum()
                .reset_index()
                .sort_values("n", ascending=False)
                .head(16)
            )
            # mezcla de dibujos en el tramo (minutos), para la frase
            cells.append(
                {
                    "state": state,
                    "bucket": bucket,
                    "matches": int(p["match_id"].nunique()),
                    "slots": slots,
                    "links": [
                        {"a": r["a"], "b": r["b"], "n": int(r["n"])} for _, r in links.iterrows()
                    ],
                }
            )
    return {"buckets": BUCKET_ORDER, "cells": cells}
