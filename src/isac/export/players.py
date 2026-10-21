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
) -> None:
    mids = ctx_c["match_id"].tolist()
    n = len(mids)
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
