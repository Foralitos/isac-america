"""Utilidades compartidas por los lectores."""

import json
from pathlib import Path

from isac.config import PERIOD_BASE


def read_json(path: Path):
    with open(path, encoding="utf-8") as f:
        return json.load(f)


def ts_to_seconds(ts: str) -> float:
    """'01:25:54.791' -> 5154.791"""
    h, m, s = ts.split(":")
    return int(h) * 3600 + int(m) * 60 + float(s)


def match_time(period: int, ts_in_period: str) -> float:
    """Tiempo de partido en segundos: base del periodo + timestamp dentro del periodo (eventos)."""
    return PERIOD_BASE.get(period, 0) + ts_to_seconds(ts_in_period)


def cumulative_to_match_time(period: int, ts_cumulative: str) -> float:
    """Las alineaciones v5 traen reloj acumulado (el 2.º tiempo arranca en 00:45:00): ya es tiempo de partido."""
    return ts_to_seconds(ts_cumulative)
