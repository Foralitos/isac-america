"""D-23: tabla antes de cada jornada, reconstruida con los partidos de fase regular (match_week menor)."""

import pandas as pd

from isac.config import MATCHDAYS


def _table(played: pd.DataFrame, teams: dict[int, str]) -> pd.DataFrame:
    acc = {
        tid: {"team_id": tid, "team": name, "pts": 0, "gf": 0, "ga": 0, "played": 0}
        for tid, name in teams.items()
    }
    for r in played.itertuples(index=False):
        h, a = acc[r.home_team_id], acc[r.away_team_id]
        h["gf"] += r.home_score
        h["ga"] += r.away_score
        a["gf"] += r.away_score
        a["ga"] += r.home_score
        h["played"] += 1
        a["played"] += 1
        if r.home_score > r.away_score:
            h["pts"] += 3
        elif r.home_score < r.away_score:
            a["pts"] += 3
        else:
            h["pts"] += 1
            a["pts"] += 1
    t = pd.DataFrame(list(acc.values()))
    t["gd"] = t["gf"] - t["ga"]
    t = t.sort_values(
        ["pts", "gd", "gf", "team"], ascending=[False, False, False, True]
    ).reset_index(drop=True)
    t["pos"] = range(1, len(t) + 1)
    return t


def standings_before(matches_regular: pd.DataFrame, matchdays: int = MATCHDAYS) -> pd.DataFrame:
    """Una fila por (tournament, week, team): tabla ANTES de la jornada `week`.
    week = matchdays + 1 es la tabla final del torneo."""
    out = []
    for tour, g in matches_regular.groupby("tournament", sort=False):
        teams = {
            **dict(zip(g["home_team_id"], g["home_team"])),
            **dict(zip(g["away_team_id"], g["away_team"])),
        }
        for w in range(1, matchdays + 2):
            t = _table(g[g["match_week"] < w], teams)
            t["tournament"] = tour
            t["week"] = w
            out.append(t)
    return pd.concat(out, ignore_index=True)


def final_table(standings: pd.DataFrame, matchdays: int = MATCHDAYS) -> pd.DataFrame:
    return standings[standings["week"] == matchdays + 1].copy()
