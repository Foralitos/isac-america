"""D-01 posesión: una fila por posesión con evento con balón."""

import pandas as pd

from isac.framework.zones import lane, third


def possessions(ev: pd.DataFrame) -> pd.DataFrame:
    ob = ev[ev["on_ball"] & ev["possession"].notna()].copy()
    if ob.empty:
        return pd.DataFrame()
    g = ob.groupby("possession", sort=True)
    first = g.first()
    out = pd.DataFrame(
        {
            "team_id": first["possession_team_id"],
            "t0": g["t"].min(),
            "t1": g["t"].max(),
            "period": first["period"],
            "n_on_ball": g.size(),
            "has_shot": g["type"].apply(lambda s: (s == "Shot").any()),
            "xg": g["shot_xg"].sum(min_count=1).fillna(0.0),
            "reached_final_third": g["x"].max() >= 80,
            "max_x": g["x"].max(),
            "start_x": first["x"],
            "start_y": first["y"],
            "play_pattern": first["play_pattern"],
            "is_transition": g["is_transition"].apply(lambda s: bool(s.fillna(False).any())),
            "directness": g["directness"].first(),
            "set_piece": g["set_piece_phase"].apply(lambda s: s.notna().any()),
        }
    )
    out["start_third"] = third(out["start_x"])
    out["start_lane"] = lane(out["start_y"])
    return out.reset_index()
