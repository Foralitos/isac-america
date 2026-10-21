"""Lectores de data/raw. Un módulo por fuente. Devuelven DataFrames planos; no calculan nada."""

from isac.io.events import build_all_events, load_events
from isac.io.lineups import load_lineups
from isac.io.matches import load_matches
from isac.io.stats import load_player_match_stats, load_team_match_stats

__all__ = [
    "build_all_events",
    "load_events",
    "load_lineups",
    "load_matches",
    "load_player_match_stats",
    "load_team_match_stats",
]
