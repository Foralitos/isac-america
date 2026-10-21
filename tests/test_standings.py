import pandas as pd

from isac.context.stakes import stakes_category
from isac.context.standings import standings_before


def _m(week, h, a, hs, as_):
    return {
        "tournament": "T",
        "match_week": week,
        "home_team_id": h,
        "home_team": f"T{h}",
        "away_team_id": a,
        "away_team": f"T{a}",
        "home_score": hs,
        "away_score": as_,
    }


def test_standings_before_week():
    m = pd.DataFrame([_m(1, 1, 2, 2, 0), _m(1, 3, 4, 1, 1), _m(2, 1, 3, 0, 1), _m(2, 2, 4, 0, 0)])
    st = standings_before(m, matchdays=3)
    w1 = st[st["week"] == 1]
    assert (w1["pts"] == 0).all()
    w2 = st[st["week"] == 2].set_index("team_id")
    assert w2.loc[1, "pos"] == 1 and w2.loc[1, "pts"] == 3
    w3 = st[st["week"] == 3].set_index("team_id")
    assert w3.loc[3, "pts"] == 4 and w3.loc[3, "pos"] == 1
    final = st[st["week"] == 4].set_index("team_id")
    assert final.loc[1, "played"] == 2


def test_stakes_eras():
    rules_old = {"direct": 4, "last": 12}
    rules_new = {"direct": 6, "last": 10}
    pts = [40, 35, 33, 30, 28, 27, 25, 24, 22, 20, 18, 17, 15, 12, 10, 9, 7, 5]
    assert stakes_category(1, 40, pts, 3, rules_new) == "arranque"
    assert stakes_category(1, 40, pts, 16, rules_new) == "directa_asegurada"  # 40-25=15 > 3*2
    assert stakes_category(3, 33, pts, 14, rules_new) == "zona_directa"  # 33-25=8 <= 12
    assert stakes_category(8, 24, pts, 16, rules_new) == "directa_alcanzable"  # 27-24=3 <= 6
    assert stakes_category(13, 15, pts, 16, rules_new) == "pelea_playin"  # 20-15=5 <= 6
    assert stakes_category(18, 5, pts, 16, rules_new) == "sin_nada"
    assert stakes_category(5, 28, pts, 16, rules_old) == "directa_alcanzable"  # 30-28 <= 6
    assert stakes_category(14, 12, pts, 16, rules_old) == "pelea_playin"  # 17-12=5 <= 6
