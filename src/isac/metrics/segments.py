"""Métricas por segmento (estado de marcador D-21 x cubeta de momento D-22), tasas por 90 min de exposición."""

import numpy as np
import pandas as pd

from isac.context.score_state import assign_bucket, assign_state, exposure
from isac.framework.pressing import PPDA_ACTIONS, PPDA_OPP_X, PPDA_OWN_X
from isac.framework.zones import is_box_entry, is_progressive

COUNT_COLS = [
    "shots",
    "np_xg",
    "xg",
    "shots_conceded",
    "xg_conceded",
    "passes",
    "passes_completed",
    "passes_final_third",
    "opp_passes_final_third",
    "prog_passes",
    "prog_carries",
    "box_entries",
    "opp_box_entries",
    "crosses",
    "pressures",
    "pressures_final_third",
    "counterpressures",
    "ppda_opp_passes",
    "ppda_actions",
    "transition_shots",
    "transition_xg",
    "transition_shots_conceded",
    "transition_xg_conceded",
    "dribbles",
    "obv_offense",
    "obv_conceded",
    "on_ball",
    "opp_on_ball",
    "losses",
    "recoveries_high",
    "sp_xg",
    "sp_xg_conceded",
    "fouls",
]


def team_segment_metrics(ev: pd.DataFrame, team_id: int, opp_id: int) -> pd.DataFrame:
    e = ev.copy()
    e["state"] = assign_state(e, team_id)
    e["bucket"] = assign_bucket(e)
    own, opp = e["team_id"] == team_id, e["team_id"] == opp_id
    is_pass, is_shot = e["type"] == "Pass", e["type"] == "Shot"
    comp = is_pass & e["pass_outcome"].isna()
    prog, box = is_progressive(e), is_box_entry(e)
    trans = e["is_transition"].fillna(False).astype(bool)
    xg = e["shot_xg"].fillna(0.0)
    sp_shot = is_shot & ((e["shot_type"] != "Open Play") | e["set_piece_phase"].notna())
    f = pd.DataFrame(index=e.index)
    f["shots"] = (own & is_shot).astype(int)
    f["xg"] = np.where(own & is_shot, xg, 0.0)
    f["np_xg"] = np.where(own & is_shot & (e["shot_type"] != "Penalty"), xg, 0.0)
    f["shots_conceded"] = (opp & is_shot).astype(int)
    f["xg_conceded"] = np.where(opp & is_shot, xg, 0.0)
    f["passes"] = (own & is_pass).astype(int)
    f["passes_completed"] = (own & comp).astype(int)
    f["passes_final_third"] = (own & comp & (e["x"] >= 80)).astype(int)
    f["opp_passes_final_third"] = (opp & comp & (e["x"] >= 80)).astype(int)
    f["prog_passes"] = (own & prog & is_pass).astype(int)
    f["prog_carries"] = (own & prog & (e["type"] == "Carry")).astype(int)
    f["box_entries"] = (own & box).astype(int)
    f["opp_box_entries"] = (opp & box).astype(int)
    f["crosses"] = (own & is_pass & e["pass_cross"]).astype(int)
    f["pressures"] = (own & (e["type"] == "Pressure")).astype(int)
    f["pressures_final_third"] = (own & (e["type"] == "Pressure") & (e["x"] >= 80)).astype(int)
    f["counterpressures"] = (
        own & (e["type"] == "Pressure") & e["counterpress"].fillna(False).astype(bool)
    ).astype(int)
    f["ppda_opp_passes"] = (opp & comp & (e["x"] < PPDA_OPP_X)).astype(int)
    f["ppda_actions"] = (
        own
        & (e["x"] > PPDA_OWN_X)
        & (e["type"].isin(PPDA_ACTIONS) | ((e["type"] == "Duel") & (e["duel_type"] == "Tackle")))
    ).astype(int)
    f["transition_shots"] = (own & is_shot & trans).astype(int)
    f["transition_xg"] = np.where(own & is_shot & trans, xg, 0.0)
    f["transition_shots_conceded"] = (opp & is_shot & trans).astype(int)
    f["transition_xg_conceded"] = np.where(opp & is_shot & trans, xg, 0.0)
    f["dribbles"] = (own & (e["type"] == "Dribble")).astype(int)
    f["obv_offense"] = np.where(
        own & e["type"].isin(["Pass", "Carry", "Dribble"]), e["obv_total_net"].fillna(0.0), 0.0
    )
    f["obv_conceded"] = np.where(
        opp & e["type"].isin(["Pass", "Carry", "Dribble"]), e["obv_total_net"].fillna(0.0), 0.0
    )
    f["on_ball"] = (own & e["on_ball"]).astype(int)
    f["opp_on_ball"] = (opp & e["on_ball"]).astype(int)
    f["losses"] = (
        own
        & (
            e["type"].isin(["Dispossessed", "Miscontrol"])
            | (is_pass & e["pass_outcome"].isin(["Incomplete", "Out", "Pass Offside"]))
        )
    ).astype(int)
    f["recoveries_high"] = (
        own
        & (e["type"] == "Ball Recovery")
        & ~e["recovery_failure"].fillna(False).astype(bool)
        & (e["x"] >= 80)
    ).astype(int)
    f["sp_xg"] = np.where(own & sp_shot, xg, 0.0)
    f["sp_xg_conceded"] = np.where(opp & sp_shot, xg, 0.0)
    f["fouls"] = (own & (e["type"] == "Foul Committed")).astype(int)
    # medias ponderadas: altura de presión y directness
    f["press_x_sum"] = np.where(own & (e["type"] == "Pressure"), e["x"].fillna(0.0), 0.0)
    f["directness_sum"] = np.where(own & e["on_ball"], e["directness"].fillna(0.0), 0.0)
    f["directness_n"] = (own & e["on_ball"] & e["directness"].notna()).astype(int)
    f["state"], f["bucket"] = e["state"], e["bucket"]
    g = f.groupby(["state", "bucket"], as_index=False).sum(numeric_only=True)
    ex = exposure(ev, team_id)
    g = ex.merge(g, on=["state", "bucket"], how="left").fillna(0.0)
    g["match_id"], g["team_id"] = int(ev["match_id"].iloc[0]), int(team_id)
    g["press_height"] = np.where(
        g["pressures"] > 0, g["press_x_sum"] / g["pressures"].replace(0, np.nan), np.nan
    )
    g["directness"] = np.where(
        g["directness_n"] > 0, g["directness_sum"] / g["directness_n"].replace(0, np.nan), np.nan
    )
    g["ppda_own"] = np.where(
        g["ppda_actions"] > 0, g["ppda_opp_passes"] / g["ppda_actions"].replace(0, np.nan), np.nan
    )
    g["field_tilt"] = np.where(
        (g["passes_final_third"] + g["opp_passes_final_third"]) > 0,
        g["passes_final_third"]
        / (g["passes_final_third"] + g["opp_passes_final_third"]).replace(0, np.nan)
        * 100,
        np.nan,
    )
    g["possession_pct"] = np.where(
        (g["on_ball"] + g["opp_on_ball"]) > 0,
        g["on_ball"] / (g["on_ball"] + g["opp_on_ball"]).replace(0, np.nan) * 100,
        np.nan,
    )
    return g.drop(columns=["press_x_sum", "directness_sum", "directness_n"])
