"""M-1..M-4 (y básicos de M-5) a nivel partido-equipo. Devuelve un dict de métricas y tablas auxiliares de BP."""

import numpy as np
import pandas as pd

from isac.framework.possession import possessions
from isac.framework.pressing import counterpressures, ppda_own, pressure_phases
from isac.framework.sequences import sequences
from isac.framework.set_pieces import (
    corners,
    danger_throw_ins,
    free_kicks,
    grid_cell,
    set_piece_shots,
)
from isac.framework.transitions import (
    losses,
    recoveries,
    shots_within,
    transition_possessions,
    transition_shots,
)
from isac.framework.zones import defensive_line, in_box, is_box_entry, is_progressive, press_height

OFFENSIVE_OB = ["Pass", "Carry", "Dribble"]


def _pct(num, den):
    return float(num) / float(den) * 100.0 if den else np.nan


def _mean(s):
    return float(s.mean()) if len(s) else np.nan


def team_match_metrics(
    ev: pd.DataFrame, team_id: int, opp_id: int, poss: pd.DataFrame | None = None
) -> tuple[dict, dict]:
    poss = possessions(ev) if poss is None else poss
    seq = sequences(poss)
    t = ev[ev["team_id"] == team_id]
    o = ev[ev["team_id"] == opp_id]
    sq = seq[seq["team_id"] == team_id] if not seq.empty else seq
    shots = t[t["type"] == "Shot"]
    np_shots = shots[shots["shot_type"] != "Penalty"]
    oshots = o[o["type"] == "Shot"]
    passes = t[t["type"] == "Pass"]
    completed = passes[passes["pass_outcome"].isna()]
    opasses = o[(o["type"] == "Pass") & o["pass_outcome"].isna()]
    prog = is_progressive(ev)
    box = is_box_entry(ev)
    m: dict = {
        "match_id": int(ev["match_id"].iloc[0]),
        "team_id": int(team_id),
        "opponent_id": int(opp_id),
    }

    # ---- M-1 ofensiva
    m["shots"] = len(shots)
    m["np_shots"] = len(np_shots)
    m["xg"] = float(shots["shot_xg"].sum())
    m["np_xg"] = float(np_shots["shot_xg"].sum())
    m["xg_per_shot"] = m["np_xg"] / m["np_shots"] if m["np_shots"] else np.nan
    m["shots_outside_box_pct"] = _pct((~in_box(np_shots["x"], np_shots["y"])).sum(), len(np_shots))
    m["obv_offense"] = float(t[t["type"].isin(OFFENSIVE_OB)]["obv_total_net"].sum())
    m["directness"] = (
        _mean(poss[poss["team_id"] == team_id]["directness"].dropna()) if not poss.empty else np.nan
    )
    m["dribbles"] = int((t["type"] == "Dribble").sum())
    m["dribbles_completed_pct"] = _pct(
        ((t["type"] == "Dribble") & (t["dribble_outcome"] == "Complete")).sum(), m["dribbles"]
    )
    m["sequences"] = len(sq)
    m["seq_final_third_pct"] = _pct(sq["reached_final_third"].sum(), len(sq)) if len(sq) else np.nan
    m["seq_shot_pct"] = _pct(sq["has_shot"].sum(), len(sq)) if len(sq) else np.nan
    for z in ("defensivo", "medio", "ultimo"):
        m[f"seq_start_{z}_pct"] = (
            _pct((sq["start_third"] == z).sum(), len(sq)) if len(sq) else np.nan
        )
    for z in ("izquierdo", "centro", "derecho"):
        m[f"seq_lane_{z}_pct"] = _pct((sq["start_lane"] == z).sum(), len(sq)) if len(sq) else np.nan
    m["passes"] = len(passes)
    m["pass_pct"] = _pct(len(completed), len(passes))
    m["prog_passes"] = int((prog & (ev["team_id"] == team_id) & (ev["type"] == "Pass")).sum())
    m["prog_carries"] = int((prog & (ev["team_id"] == team_id) & (ev["type"] == "Carry")).sum())
    m["box_entries_pass"] = int((box & (ev["team_id"] == team_id) & (ev["type"] == "Pass")).sum())
    m["box_entries_carry"] = int((box & (ev["team_id"] == team_id) & (ev["type"] == "Carry")).sum())
    m["box_entries"] = m["box_entries_pass"] + m["box_entries_carry"]
    m["crosses"] = int(passes["pass_cross"].sum())
    m["cross_ratio"] = m["crosses"] / m["box_entries"] if m["box_entries"] else np.nan
    own_f3, opp_f3 = int((completed["x"] >= 80).sum()), int((opasses["x"] >= 80).sum())
    m["passes_final_third"] = own_f3
    m["field_tilt"] = _pct(own_f3, own_f3 + opp_f3)
    pup = passes[passes["under_pressure"]]
    m["passes_under_pressure"] = len(pup)
    m["pup_success_pct"] = _pct(pup["pass_outcome"].isna().sum(), len(pup))
    gk = passes[passes["position"] == "Goalkeeper"]
    m["gk_long_pct"] = _pct(
        ((gk["pass_length"] >= 40) | (gk["pass_height"] == "High Pass")).sum(), len(gk)
    )
    m["possession_pct"] = _pct(t["on_ball"].sum(), ev["on_ball"].sum())
    m["switches"] = int(passes["pass_switch"].sum())
    m["through_balls"] = int(passes["pass_through_ball"].sum())

    # ---- M-2 defensiva y presión
    m["ppda_own"], m["ppda_opp_passes"], m["ppda_actions"] = ppda_own(ev, team_id, opp_id)
    m["press_height"] = press_height(ev, team_id)
    m["def_line"] = defensive_line(ev, team_id)
    ph = pressure_phases(ev, team_id)
    m["press_phases"] = len(ph)
    m["press_high_pct"] = _pct((ph["category"] == "alta").sum(), len(ph)) if len(ph) else np.nan
    m["press_success_pct"] = _pct(ph["success"].sum(), len(ph)) if len(ph) else np.nan
    m["pressures"] = int((t["type"] == "Pressure").sum())
    m["pressures_final_third"] = int(((t["type"] == "Pressure") & (t["x"] >= 80)).sum())
    cp = counterpressures(ev, team_id)
    m["counterpressures"] = len(cp)
    m["cp_regain_pct"] = _pct(cp["regain"].sum(), len(cp)) if len(cp) else np.nan
    m["xg_conceded"] = float(oshots["shot_xg"].sum())
    m["np_xg_conceded"] = float(oshots[oshots["shot_type"] != "Penalty"]["shot_xg"].sum())
    m["shots_conceded"] = len(oshots)
    m["shots_conceded_in_box_pct"] = _pct(in_box(oshots["x"], oshots["y"]).sum(), len(oshots))
    m["opp_box_entries"] = int((box & (ev["team_id"] == opp_id)).sum())
    m["obv_conceded"] = float(o[o["type"].isin(OFFENSIVE_OB)]["obv_total_net"].sum())
    m["opp_directness"] = (
        _mean(poss[poss["team_id"] == opp_id]["directness"].dropna()) if not poss.empty else np.nan
    )
    m["opp_prog_passes"] = int((prog & (ev["team_id"] == opp_id) & (ev["type"] == "Pass")).sum())
    m["fouls"] = int((t["type"] == "Foul Committed").sum())
    m["xgd"] = m["xg"] - m["xg_conceded"]

    # ---- M-3 transiciones
    tp = transition_possessions(poss, team_id)
    ts_ = transition_shots(ev, team_id)
    rec = recoveries(ev, team_id)
    m["transitions"] = len(tp)
    m["transition_shots"] = len(ts_)
    m["transition_xg"] = float(ts_["shot_xg"].sum())
    m["recoveries"] = len(rec)
    m["transition_conv_pct"] = _pct(len(ts_), len(rec))
    high = rec[rec["x"] >= 80]
    m["high_recoveries"] = len(high)
    sw_high = shots_within(ev, team_id, high["t"])
    m["high_rec_shot_pct"] = _pct(len(sw_high), len(high))
    sw = shots_within(ev, team_id, rec["t"])
    m["quick_shots"] = len(sw)
    m["rec_to_shot_s"] = _mean(sw["t_shot"] - sw["t_from"]) if len(sw) else np.nan
    lo = losses(ev, team_id)
    v = shots_within(ev, opp_id, lo["t"])
    m["losses"] = len(lo)
    m["vuln_shots"] = len(v)
    m["vuln_xg"] = float(v["xg"].sum())
    m["transition_xg_conceded"] = float(transition_shots(ev, opp_id)["shot_xg"].sum())
    m["transition_shots_conceded"] = len(transition_shots(ev, opp_id))

    # ---- M-4 balón parado
    sp = set_piece_shots(ev, team_id)
    spc = set_piece_shots(ev, opp_id)
    m["sp_shots"] = len(sp)
    m["sp_xg"] = float(sp["shot_xg"].sum())
    m["sp_goals"] = int((sp["shot_outcome"] == "Goal").sum())
    for typ, key in (
        ("corner", "corner"),
        ("tiro_libre", "fk_indirect"),
        ("tiro_libre_directo", "fk_direct"),
        ("saque_banda", "throwin"),
        ("penal", "penalty"),
    ):
        s = sp[sp["sp_type"] == typ]
        m[f"{key}_shots"] = len(s)
        m[f"{key}_xg"] = float(s["shot_xg"].sum())
        m[f"{key}_goals"] = int((s["shot_outcome"] == "Goal").sum())
    c = corners(ev, team_id)
    m["corners"] = len(c)
    m["corner_short_pct"] = _pct(c["short"].sum(), len(c)) if len(c) else np.nan
    m["corner_inswing_pct"] = (
        _pct((c["delivery"] == "inswinging").sum(), len(c)) if len(c) else np.nan
    )
    m["corner_outswing_pct"] = (
        _pct((c["delivery"] == "outswinging").sum(), len(c)) if len(c) else np.nan
    )
    m["xg_per_corner"] = m["corner_xg"] / m["corners"] if m["corners"] else np.nan
    ti = danger_throw_ins(ev, team_id)
    m["throwins_danger"] = len(ti)
    m["throwin_retention_pct"] = _pct(ti["retained"].sum(), len(ti)) if len(ti) else np.nan
    m["free_kicks_zone"] = len(free_kicks(ev, team_id))
    m["sp_shots_conceded"] = len(spc)
    m["sp_xg_conceded"] = float(spc["shot_xg"].sum())
    m["sp_goals_conceded"] = int((spc["shot_outcome"] == "Goal").sum())
    cc = corners(ev, opp_id)
    m["corners_conceded"] = len(cc)
    m["corner_xg_conceded"] = float(spc[spc["sp_type"] == "corner"]["shot_xg"].sum())
    m["xg_per_corner_conceded"] = (
        m["corner_xg_conceded"] / m["corners_conceded"] if m["corners_conceded"] else np.nan
    )
    m["ball_in_play_proxy"] = float(ev["t"].max() - 2700) / 60 if len(ev) else np.nan

    # ---- M-5 básicos
    sx = t[t["type"] == "Starting XI"]
    m["formation"] = (
        int(sx["formation"].iloc[0]) if len(sx) and pd.notna(sx["formation"].iloc[0]) else None
    )
    m["tactical_shifts"] = int((t["type"] == "Tactical Shift").sum())
    subs = t[t["type"] == "Substitution"]
    m["subs"] = len(subs)
    m["first_sub_minute"] = int(subs["minute"].min()) if len(subs) else None

    # ---- tablas auxiliares de BP (agregables a cuadrícula; sin coordenadas crudas en el export)
    aux = {
        "corners": [
            {
                "match_id": m["match_id"],
                "team_id": team_id,
                "delivery": d,
                "side": sd,
                "cell": cell,
                "xg": x,
                "shots": s,
                "goals": g,
            }
            for d, sd, cell, x, s, g in zip(
                c["delivery"],
                c["side"],
                grid_cell(c["end_x"].fillna(0), c["end_y"].fillna(0)),
                c["xg"],
                c["shots"],
                c["goals"],
            )
        ]
        if len(c)
        else [],
        "sp_shots": [
            {
                "match_id": m["match_id"],
                "team_id": team_id,
                "for": True,
                "sp_type": st,
                "cell": cell,
                "xg": x,
                "goal": oc == "Goal",
            }
            for st, cell, x, oc in zip(
                sp["sp_type"], grid_cell(sp["x"], sp["y"]), sp["shot_xg"], sp["shot_outcome"]
            )
        ]
        + [
            {
                "match_id": m["match_id"],
                "team_id": team_id,
                "for": False,
                "sp_type": st,
                "cell": cell,
                "xg": x,
                "goal": oc == "Goal",
            }
            for st, cell, x, oc in zip(
                spc["sp_type"], grid_cell(spc["x"], spc["y"]), spc["shot_xg"], spc["shot_outcome"]
            )
        ],
    }
    return m, aux
