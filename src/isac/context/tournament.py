"""D-26 torneo por fecha y D-24 fase/ronda por nombre de stage normalizado."""

import pandas as pd

from isac.config import tournament_key

PREFIXES = ("apertura - ", "clausura - ", "play-offs - ", "play-off - ", "playoffs - ")


def tournament_of(date: pd.Timestamp) -> tuple[str, int]:
    """(Apertura|Clausura, año natural). Corrige el 'Regular Season' del Apertura 2022."""
    phase = "Apertura" if date.month >= 7 else "Clausura"
    return phase, int(date.year)


def round_of(stage: str) -> tuple[str, str | None]:
    """(regular|playin|liguilla, None|play-in|cuartos|semis|final)."""
    s = stage.strip().lower()
    for pre in PREFIXES:
        s = s.removeprefix(pre)
    if s in ("apertura", "clausura", "regular season"):
        return "regular", None
    if "reclasific" in s or "play-in" in s or "play in" in s:
        return "playin", "play-in"
    if "quarter" in s:
        return "liguilla", "cuartos"
    if "semi" in s:
        return "liguilla", "semis"
    if "final" in s:
        return "liguilla", "final"
    raise ValueError(f"stage desconocido: {stage!r}")


def add_tournament(matches: pd.DataFrame) -> pd.DataFrame:
    m = matches.copy()
    tp = m["match_date"].map(tournament_of)
    m["phase_name"] = tp.map(lambda x: x[0])
    m["year"] = tp.map(lambda x: x[1])
    m["tournament"] = m["phase_name"] + " " + m["year"].astype(str)
    m["tkey"] = [tournament_key(y, p) for y, p in zip(m["year"], m["phase_name"])]
    rk = m["stage"].map(round_of)
    m["phase_kind"] = rk.map(lambda x: x[0])
    m["round"] = rk.map(lambda x: x[1])
    return m
