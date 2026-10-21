"""Alineaciones v5: una fila por jugador-posición-tramo, más formaciones por equipo."""

import pandas as pd

from isac.config import RAW
from isac.io.common import cumulative_to_match_time, read_json


def load_lineup(match_id: int) -> tuple[list[dict], list[dict]]:
    stints, formations = [], []
    for team in read_json(RAW / "lineups" / f"{match_id}.json"):
        for p in team["lineup"]:
            for pos in p.get("positions") or []:
                stints.append(
                    {
                        "match_id": match_id,
                        "team_id": team["team_id"],
                        "team": team["team_name"],
                        "player_id": p["player_id"],
                        "player": p["player_name"],
                        "jersey": p.get("jersey_number"),
                        "position_id": pos["position_id"],
                        "position": pos["position"],
                        "from_period": pos["from_period"],
                        "from_t": cumulative_to_match_time(pos["from_period"], pos["from"]),
                        "to_period": pos.get("to_period"),
                        "to_t": cumulative_to_match_time(pos["to_period"], pos["to"])
                        if pos.get("to")
                        else None,
                        "start_reason": pos.get("start_reason"),
                        "end_reason": pos.get("end_reason"),
                    }
                )
        for fm in team.get("formations") or []:
            formations.append(
                {
                    "match_id": match_id,
                    "team_id": team["team_id"],
                    "team": team["team_name"],
                    "period": fm["period"],
                    "t": cumulative_to_match_time(fm["period"], fm["timestamp"]),
                    "formation": fm["formation"],
                    "reason": fm["reason"],
                }
            )
    return stints, formations


def load_lineups(match_ids: list[int] | None = None) -> tuple[pd.DataFrame, pd.DataFrame]:
    ids = match_ids or sorted(int(f.stem) for f in (RAW / "lineups").glob("*.json"))
    stints, formations = [], []
    for mid in ids:
        s, f = load_lineup(mid)
        stints.extend(s)
        formations.extend(f)
    return pd.DataFrame(stints), pd.DataFrame(formations)
