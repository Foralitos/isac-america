import pandas as pd

from isac.context.score_state import assign_state, exposure, state_segments

HOME, AWAY = 1, 2


def _ev(rows):
    cols = ["t", "period", "minute", "type", "team_id", "shot_outcome"]
    return pd.DataFrame(rows, columns=cols)


def test_states_and_exposure():
    ev = _ev(
        [
            (0, 1, 0, "Half Start", HOME, None),
            (600, 1, 10, "Shot", HOME, "Goal"),
            (2820, 1, 47, "Half End", HOME, None),  # 1.er tiempo: 47 min
            (2700, 2, 45, "Half Start", HOME, None),
            (3000, 2, 50, "Shot", AWAY, "Goal"),
            (4800, 2, 80, "Own Goal For", AWAY, None),
            (5520, 2, 92, "Half End", HOME, None),
        ]
    )
    seg = state_segments(ev, HOME)
    assert seg["state"].tolist() == ["empate", "ganando", "ganando", "empate", "perdiendo"]
    ex = exposure(ev, HOME).set_index(["state", "bucket"])["minutes"]
    assert abs(ex[("empate", "0-15")] - 10) < 1e-6
    assert abs(ex[("ganando", "0-15")] - 5) < 1e-6
    assert abs(ex[("ganando", "30-45")] - 17) < 1e-6  # 30' a 47'
    assert abs(ex[("perdiendo", "75-90")] - 12) < 1e-6  # 80' a 92'
    st = assign_state(ev, HOME)
    assert st.tolist() == [
        "empate",
        "empate",
        "ganando",
        "ganando",
        "ganando",
        "empate",
        "perdiendo",
    ]
