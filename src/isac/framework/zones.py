"""D-10 tercios, D-11 carriles, D-12 área y zona 14, D-13 alturas, D-14 progresión."""

import numpy as np
import pandas as pd

DEFENSIVE_ACTIONS = {"Clearance", "Interception", "Block", "Duel", "Pressure", "Ball Recovery"}


def third(x: pd.Series) -> pd.Series:  # D-10
    return pd.Series(
        np.where(x < 40, "defensivo", np.where(x < 80, "medio", "ultimo")), index=x.index
    )


def lane(y: pd.Series) -> pd.Series:  # D-11
    return pd.Series(
        np.where(y < 26.7, "izquierdo", np.where(y <= 53.3, "centro", "derecho")), index=y.index
    )


def in_box(x: pd.Series, y: pd.Series) -> pd.Series:  # D-12
    return (x >= 102) & (y >= 18) & (y <= 62)


def in_zone14(x: pd.Series, y: pd.Series) -> pd.Series:  # D-12
    return (x >= 80) & (x < 102) & (y >= 26.7) & (y <= 53.3)


def completed_pass(ev: pd.DataFrame) -> pd.Series:
    return (ev["type"] == "Pass") & ev["pass_outcome"].isna()


def is_progressive(ev: pd.DataFrame) -> pd.Series:  # D-14, para Pass completado o Carry
    mover = completed_pass(ev) | (ev["type"] == "Carry")
    adv = (ev["end_x"] - ev["x"] >= 10) & (ev["end_x"] >= 40)
    into_final = (ev["x"] < 80) & (ev["end_x"] >= 80)
    return mover & (adv | into_final)


def is_box_entry(ev: pd.DataFrame) -> pd.Series:  # D-12
    mover = completed_pass(ev) | (ev["type"] == "Carry")
    return mover & ~in_box(ev["x"], ev["y"]) & in_box(ev["end_x"], ev["end_y"])


def press_height(ev: pd.DataFrame, team_id: int) -> float:  # D-13
    p = ev[(ev["type"] == "Pressure") & (ev["team_id"] == team_id)]
    return float(p["x"].mean()) if len(p) else np.nan


def defensive_line(ev: pd.DataFrame, team_id: int) -> float:  # D-13
    d = ev[
        (ev["type"].isin(DEFENSIVE_ACTIONS))
        & (ev["team_id"] == team_id)
        & (ev["possession_team_id"] != team_id)
    ]
    return float(d["x"].mean()) if len(d) else np.nan
