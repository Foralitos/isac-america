"""M-5: cambios (con estado de marcador y situación), cambios de formación e impacto del primer cambio."""

import numpy as np
import pandas as pd

from isac.context.score_state import assign_bucket, assign_state, state_segments
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


def formation_minutes(ev: pd.DataFrame, team_id: int) -> list[dict]:
    """Minutos jugados con cada dibujo, por estado del marcador y tramo de 5 minutos (reloj táctico)."""
    t = ev[
        (ev["team_id"] == team_id) & ev["type"].isin(["Starting XI", "Tactical Shift"])
    ].sort_values("t")
    if t.empty:
        return []
    fev = [
        (float(r["t"]), int(r["formation"])) for _, r in t.iterrows() if pd.notna(r["formation"])
    ]
    if not fev:
        return []
    seg = state_segments(ev, team_id)
    mid = int(ev["match_id"].iloc[0])
    acc: dict[tuple, float] = {}
    for _, sg in seg.iterrows():
        a, b, state = float(sg["t0"]), float(sg["t1"]), sg["state"]
        cuts = sorted({a, b, *[ft for ft, _ in fev if a < ft < b]})
        for c0, c1 in zip(cuts[:-1], cuts[1:]):
            form = next((f for ft, f in reversed(fev) if ft <= c0 + 1e-9), fev[0][1])
            x = c0
            while x < c1:
                bucket = min(90, int(x // 300) * 5)
                edge = min(c1, (int(x // 300) + 1) * 300) if bucket < 90 else c1
                key = (state, bucket, form)
                acc[key] = acc.get(key, 0.0) + (edge - x) / 60
                x = edge
    return [
        {
            "match_id": mid,
            "team_id": int(team_id),
            "state": st,
            "bucket": bk,
            "formation": f,
            "minutes": round(m, 3),
        }
        for (st, bk, f), m in acc.items()
        if m > 0
    ]


ONBALL = {"Pass", "Carry", "Ball Receipt*", "Dribble", "Shot"}
DEFENSIVE = {"Pressure", "Ball Recovery", "Interception", "Clearance", "Block", "Duel"}


def _formation_at(ev: pd.DataFrame, team_id: int) -> pd.Series:
    """Dibujo en uso en cada evento del equipo (último Starting XI / Tactical Shift anterior)."""
    f = ev[
        (ev["team_id"] == team_id) & ev["type"].isin(["Starting XI", "Tactical Shift"])
    ].sort_values("t")
    f = f[f["formation"].notna()]
    if f.empty:
        return pd.Series(index=ev.index, dtype="object")
    ts = f["t"].to_numpy()
    forms = f["formation"].astype(int).to_numpy()
    pos = np.searchsorted(ts, ev["t"].to_numpy(), side="right") - 1
    pos = np.clip(pos, 0, len(forms) - 1)
    return pd.Series(forms[pos], index=ev.index)


def position_profiles(ev: pd.DataFrame, team_id: int) -> dict:
    """Dónde juega cada posición y hacia dónde se mueve el balón, por estado del marcador y dibujo (agregados por partido)."""
    ev = ev.sort_values("index")
    own = ev["team_id"] == team_id
    st = assign_state(ev, team_id)
    fo = _formation_at(ev, team_id)
    t = ev[own & ev["position"].notna()].copy()
    t["state"] = st.loc[t.index]
    t["formation"] = fo.loc[t.index]
    t["bucket"] = assign_bucket(t)
    t = t[t["formation"].notna()]
    mid = int(ev["match_id"].iloc[0])
    rows = []
    for (state, bucket, form, position), g in t.groupby(
        ["state", "bucket", "formation", "position"]
    ):
        ob = g[g["type"].isin(ONBALL)]
        ca = g[(g["type"] == "Carry") & g["end_x"].notna()]
        pa = g[(g["type"] == "Pass") & g["pass_outcome"].isna() & g["end_x"].notna()]
        de = g[g["type"].isin(DEFENSIVE)]
        if len(ob) < 3:
            continue
        rows.append(
            {
                "match_id": mid,
                "team_id": int(team_id),
                "state": state,
                "bucket": bucket,
                "formation": int(form),
                "position": position,
                "n": len(ob),
                "x": float(ob["x"].mean()),
                "y": float(ob["y"].mean()),
                "carries": len(ca),
                "cdx": float((ca["end_x"] - ca["x"]).mean()) if len(ca) else 0.0,
                "cdy": float((ca["end_y"] - ca["y"]).mean()) if len(ca) else 0.0,
                "passes": len(pa),
                "pdx": float((pa["end_x"] - pa["x"]).mean()) if len(pa) else 0.0,
                "pdy": float((pa["end_y"] - pa["y"]).mean()) if len(pa) else 0.0,
                "def_n": len(de),
                "def_x": float(de["x"].mean()) if len(de) else np.nan,
            }
        )
    # red de pases entre posiciones: pase completado seguido de la recepción del mismo equipo
    passes = ev[own & (ev["type"] == "Pass") & ev["pass_outcome"].isna() & ev["position"].notna()]
    nxt = ev.shift(-1)
    rec_ok = (
        (nxt["type"] == "Ball Receipt*") & (nxt["team_id"] == team_id) & nxt["position"].notna()
    )
    pp = passes[rec_ok.loc[passes.index]].copy()
    pp["to"] = nxt.loc[pp.index, "position"]
    pp["state"] = st.loc[pp.index]
    pp["formation"] = fo.loc[pp.index]
    pp["bucket"] = assign_bucket(pp)
    pp = pp[pp["formation"].notna()]
    pairs = [
        {
            "match_id": mid,
            "team_id": int(team_id),
            "state": state,
            "bucket": bucket,
            "formation": int(form),
            "pos_from": a,
            "pos_to": b,
            "n": len(g),
        }
        for (state, bucket, form, a, b), g in pp.groupby(
            ["state", "bucket", "formation", "position", "to"]
        )
    ]
    return {"positions": rows, "pass_pairs": pairs}
