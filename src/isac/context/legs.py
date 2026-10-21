"""D-24: ida / vuelta y resultado de la ida para los cruces de play-in y liguilla."""

import pandas as pd


def add_legs(matches: pd.DataFrame) -> pd.DataFrame:
    """Añade leg (1, 2, 'unico'), y para la vuelta: leg1_home_id, leg1_home_score, leg1_away_score."""
    m = matches.copy()
    m["leg"] = None
    m["leg1_home_id"] = None
    m["leg1_home_score"] = None
    m["leg1_away_score"] = None
    ko = m[m["phase_kind"] != "regular"]
    key = ko.apply(
        lambda r: (r["tournament"], r["round"], frozenset((r["home_team_id"], r["away_team_id"]))),
        axis=1,
    )
    for idx in ko.groupby(key).groups.values():
        rows = m.loc[idx].sort_values("match_date")
        if len(rows) == 1:
            m.loc[rows.index, "leg"] = "unico"
            continue
        first, second = rows.index[0], rows.index[1]
        m.loc[first, "leg"] = "1"
        m.loc[second, "leg"] = "2"
        m.loc[second, "leg1_home_id"] = m.loc[first, "home_team_id"]
        m.loc[second, "leg1_home_score"] = m.loc[first, "home_score"]
        m.loc[second, "leg1_away_score"] = m.loc[first, "away_score"]
    return m
