import pandas as pd

from isac.context.tournament import round_of, tournament_of


def test_regular_season_label_is_apertura_2022():
    assert tournament_of(pd.Timestamp("2022-09-10")) == ("Apertura", 2022)
    assert tournament_of(pd.Timestamp("2023-02-05")) == ("Clausura", 2023)


def test_rounds():
    assert round_of("Regular Season") == ("regular", None)
    assert round_of("Apertura") == ("regular", None)
    assert round_of("Clausura - Quarter-finals") == ("liguilla", "cuartos")
    assert round_of("Semi-finals") == ("liguilla", "semis")
    assert round_of("Final") == ("liguilla", "final")
    assert round_of("Play-offs - Finals") == ("liguilla", "final")
    assert round_of("Apertura - Reclasificación") == ("playin", "play-in")
    assert round_of("Play-In Round") == ("playin", "play-in")
