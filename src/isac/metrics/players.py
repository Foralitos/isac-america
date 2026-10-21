"""M-5: cambios (con estado de marcador y situación), cambios de formación e impacto del primer cambio."""

import numpy as np
import pandas as pd

from isac.context.score_state import assign_bucket, assign_state
from isac.framework.pressing import PPDA_ACTIONS, PPDA_OPP_X, PPDA_OWN_X

IMPACT_WINDOW = 15 * 60


def _window_stats(ev: pd.DataFrame, team_id: int, opp_id: int, t0: float, t1: float) -> dict:
    w = ev[(ev["t"] >= t0) & (ev["t"] < t1)]
    own, opp = w["team_id"] == team_id, w["team_id"] == opp_id
    shot = w["type"] == "Shot"
    comp = (w["type"] == "Pass") & w["pass_outcome"].isna()
    acts = (
        own
        & (w["x"] > PPDA_OWN_X)
        & (w["type"].isin(PPDA_ACTIONS) | ((w["type"] == "Duel") & (w["duel_type"] == "Tackle")))
    )
    opp_p = opp & comp & (w["x"] < PPDA_OPP_X)
    ob = w[own & w["on_ball"]]
    return {
        "xg": float(w.loc[own & shot, "shot_xg"].sum()),
        "xg_conceded": float(w.loc[opp & shot, "shot_xg"].sum()),
        "shots": int((own & shot).sum()),
        "ppda_own": float(opp_p.sum() / acts.sum()) if acts.sum() else np.nan,
        "directness": float(ob["directness"].mean()) if len(ob) else np.nan,
        "press_height": float(w.loc[own & (w["type"] == "Pressure"), "x"].mean())
        if (own & (w["type"] == "Pressure")).any()
        else np.nan,
        "field_tilt": float(
            (own & comp & (w["x"] >= 80)).sum()
            / max(1, ((own | opp) & comp & (w["x"] >= 80)).sum())
            * 100
        ),
    }


def substitutions(ev: pd.DataFrame, team_id: int, opp_id: int) -> list[dict]:
    t = ev[ev["team_id"] == team_id]
    subs = t[t["type"] == "Substitution"].sort_values("t")
    if subs.empty:
        return []
    st = assign_state(ev, team_id).loc[subs.index]
    bk = assign_bucket(subs)
    rows = []
    first_t = float(subs["t"].iloc[0])
    before = _window_stats(ev, team_id, opp_id, first_t - IMPACT_WINDOW, first_t)
    after = _window_stats(ev, team_id, opp_id, first_t, first_t + IMPACT_WINDOW)
    for i, (idx, s) in enumerate(subs.iterrows(), start=1):
        row = {
            "match_id": int(ev["match_id"].iloc[0]),
            "team_id": int(team_id),
            "order": i,
            "minute": int(s["minute"]),
            "t": float(s["t"]),
            "period": int(s["period"]),
            "player_out_id": s["player_id"],
            "player_out": s["player"],
            "position_out": s["position"],
            "player_in_id": s["sub_replacement_id"],
            "player_in": s["sub_replacement"],
            "reason": s["sub_outcome"],
            "state": st.loc[idx],
            "bucket": bk.loc[idx],
        }
        if i == 1:
            row.update({f"before_{k}": v for k, v in before.items()})
            row.update({f"after_{k}": v for k, v in after.items()})
        rows.append(row)
    return rows


def formation_changes(ev: pd.DataFrame, team_id: int) -> list[dict]:
    t = ev[
        (ev["team_id"] == team_id) & ev["type"].isin(["Starting XI", "Tactical Shift"])
    ].sort_values("t")
    st = assign_state(ev, team_id).loc[t.index]
    rows, prev = [], None
    for idx, r in t.iterrows():
        rows.append(
            {
                "match_id": int(ev["match_id"].iloc[0]),
                "team_id": int(team_id),
                "kind": "inicial" if r["type"] == "Starting XI" else "cambio",
                "minute": int(r["minute"]),
                "t": float(r["t"]),
                "formation": int(r["formation"]) if pd.notna(r["formation"]) else None,
                "from_formation": prev,
                "state": st.loc[idx],
            }
        )
        prev = int(r["formation"]) if pd.notna(r["formation"]) else prev
    return rows
