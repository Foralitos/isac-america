"""Partidos: una fila por partido, con técnicos de cada lado."""

import pandas as pd

from isac.config import RAW
from isac.io.common import read_json


def _manager(team: dict) -> tuple[int | None, str | None]:
    mg = team.get("managers") or []
    if not mg:
        return None, None
    return mg[0]["id"], mg[0]["name"]


def load_matches(only_available: bool = True) -> pd.DataFrame:
    rows = []
    for f in sorted((RAW / "matches").glob("*.json")):
        for m in read_json(f):
            if only_available and m.get("match_status") != "available":
                continue
            hm_id, hm = _manager(m["home_team"])
            am_id, am = _manager(m["away_team"])
            rows.append(
                {
                    "match_id": m["match_id"],
                    "season_id": m["season"]["season_id"],
                    "season_name": m["season"]["season_name"],
                    "match_date": m["match_date"],
                    "kick_off": m.get("kick_off"),
                    "match_week": m.get("match_week"),
                    "stage": m["competition_stage"]["name"],
                    "home_team_id": m["home_team"]["home_team_id"],
                    "home_team": m["home_team"]["home_team_name"],
                    "away_team_id": m["away_team"]["away_team_id"],
                    "away_team": m["away_team"]["away_team_name"],
                    "home_score": m["home_score"],
                    "away_score": m["away_score"],
                    "home_manager_id": hm_id,
                    "home_manager": hm,
                    "away_manager_id": am_id,
                    "away_manager": am,
                    "stadium": (m.get("stadium") or {}).get("name"),
                    "neutral_ground": bool(m.get("neutral_ground")),
                    "has_360": m.get("match_status_360") == "available",
                }
            )
    df = pd.DataFrame(rows)
    df["match_date"] = pd.to_datetime(df["match_date"])
    return df.sort_values(["match_date", "match_id"]).reset_index(drop=True)
