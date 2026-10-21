import pandas as pd

from isac.framework.possession import possessions
from isac.framework.pressing import pressure_phases
from isac.framework.sequences import sequences
from isac.framework.set_pieces import set_piece_shots

COLS = [
    "match_id",
    "index",
    "period",
    "t",
    "type",
    "team_id",
    "possession",
    "possession_team_id",
    "x",
    "y",
    "on_ball",
    "shot_xg",
    "location_bucket",
    "is_transition",
    "directness",
    "set_piece_phase",
    "shot_type",
    "play_pattern",
    "pass_outcome",
    "counterpress",
    "recovery_failure",
    "interception_outcome",
    "duel_type",
    "duel_outcome",
]


def _ev(rows):
    df = pd.DataFrame(rows, columns=COLS[: len(rows[0])])
    for c in COLS:
        if c not in df.columns:
            df[c] = None
    return df


def test_sequences_threshold_and_danger():
    # posesión 1: 2 pases (no cuenta); posesión 2: 3 pases que llegan al último tercio; posesión 3: 1 tiro
    rows = [
        (1, 1, 1, 10, "Pass", 1, 1, 1, 30, 40, True, None, "defensive_third"),
        (1, 2, 1, 12, "Pass", 1, 1, 1, 50, 40, True, None, "midfield_third"),
        (1, 3, 1, 20, "Pass", 1, 2, 1, 30, 40, True, None, "defensive_third"),
        (1, 4, 1, 22, "Carry", 1, 2, 1, 60, 40, True, None, "midfield_third"),
        (1, 5, 1, 25, "Pass", 1, 2, 1, 85, 40, True, None, "final_third"),
        (1, 6, 1, 40, "Shot", 2, 3, 2, 100, 40, True, 0.3, "final_third"),
    ]
    poss = possessions(_ev(rows))
    seq = sequences(poss)
    assert set(seq["possession"]) == {2, 3}
    assert (
        seq.set_index("possession").loc[2, "dangerous"]
        and seq.set_index("possession").loc[3, "has_shot"]
    )
    assert seq.set_index("possession").loc[2, "start_third"] == "defensivo"


def test_pressure_phases_gap_and_success():
    base = {"match_id": 1, "period": 1, "possession_team_id": 2, "on_ball": False}
    rows = []
    # fase A: 3 presiones a 1 s, altura 85 -> alta; recuperación propia (Pass) 3 s después -> éxito
    for i, t in enumerate((10, 11, 12)):
        rows.append(
            {
                **base,
                "index": i,
                "t": t,
                "type": "Pressure",
                "team_id": 1,
                "possession": 5,
                "x": 85.0,
                "y": 40.0,
            }
        )
    rows.append(
        {
            **base,
            "index": 10,
            "t": 15,
            "type": "Pass",
            "team_id": 1,
            "possession": 6,
            "possession_team_id": 1,
            "on_ball": True,
            "x": 80.0,
            "y": 40.0,
        }
    )
    # fase B: 2 presiones separadas 7 s -> son dos fases de 1 presión, no cuentan
    rows.append(
        {
            **base,
            "index": 20,
            "t": 40,
            "type": "Pressure",
            "team_id": 1,
            "possession": 7,
            "x": 50.0,
            "y": 40.0,
        }
    )
    rows.append(
        {
            **base,
            "index": 21,
            "t": 47,
            "type": "Pressure",
            "team_id": 1,
            "possession": 7,
            "x": 50.0,
            "y": 40.0,
        }
    )
    ev = pd.DataFrame(rows)
    for c in COLS:
        if c not in ev.columns:
            ev[c] = None
    ph = pressure_phases(ev, 1)
    assert (
        len(ph) == 1
        and ph.iloc[0]["n"] == 3
        and ph.iloc[0]["category"] == "alta"
        and bool(ph.iloc[0]["success"])
    )


def test_set_piece_shot_types():
    rows = [
        {
            "match_id": 1,
            "index": 1,
            "period": 1,
            "t": 1,
            "type": "Shot",
            "team_id": 1,
            "shot_type": "Penalty",
            "set_piece_phase": None,
            "play_pattern": "Other",
            "x": 108,
            "y": 40,
            "shot_xg": 0.76,
        },
        {
            "match_id": 1,
            "index": 2,
            "period": 1,
            "t": 2,
            "type": "Shot",
            "team_id": 1,
            "shot_type": "Open Play",
            "set_piece_phase": 1,
            "play_pattern": "From Corner",
            "x": 110,
            "y": 40,
            "shot_xg": 0.1,
        },
        {
            "match_id": 1,
            "index": 3,
            "period": 1,
            "t": 3,
            "type": "Shot",
            "team_id": 1,
            "shot_type": "Open Play",
            "set_piece_phase": None,
            "play_pattern": "Regular Play",
            "x": 110,
            "y": 40,
            "shot_xg": 0.1,
        },
        {
            "match_id": 1,
            "index": 4,
            "period": 1,
            "t": 4,
            "type": "Shot",
            "team_id": 1,
            "shot_type": "Free Kick",
            "set_piece_phase": None,
            "play_pattern": "From Free Kick",
            "x": 95,
            "y": 40,
            "shot_xg": 0.05,
        },
    ]
    ev = pd.DataFrame(rows)
    for c in COLS:
        if c not in ev.columns:
            ev[c] = None
    sp = set_piece_shots(ev, 1)
    assert sp["sp_type"].tolist() == ["penal", "corner", "tiro_libre_directo"]
