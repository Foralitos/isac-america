"""Team / player match stats de StatsBomb (ya calculadas) a DataFrames planos."""

import pandas as pd

from isac.config import RAW
from isac.io.common import read_json


def _load_dir(name: str, prefix: str) -> pd.DataFrame:
    rows = []
    for f in sorted((RAW / name).glob("*.json")):
        rows.extend(read_json(f))
    df = pd.DataFrame(rows)
    df.columns = [c.replace(prefix, "") if c.startswith(prefix) else c for c in df.columns]
    return df


def load_team_match_stats() -> pd.DataFrame:
    return _load_dir("team-match-stats", "team_match_")


def load_player_match_stats() -> pd.DataFrame:
    return _load_dir("player-match-stats", "player_match_")
