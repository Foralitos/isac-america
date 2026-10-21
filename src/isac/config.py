"""Rutas, IDs y selección del técnico. Único lugar con constantes."""

from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
DATA = ROOT / "data"
RAW = DATA / "raw"
PROCESSED = DATA / "processed"
OUT = DATA / "out"

COMPETITION_ID = 73  # Liga MX
SEASONS = {
    108: "2021/2022",
    235: "2022/2023",
    281: "2023/2024",
    317: "2024/2025",
    318: "2025/2026",
    351: "2026/2027",
}

# Técnico y equipo objetivo (parametrizado para poder perfilar a otro técnico después)
COACH = "Jorge Guillermo Almada Álves"
TEAM = None  # None = todos los equipos que dirigió en la Liga MX; un nombre acota a ese equipo
TEAM_ALL_LABEL = "todos"

# Formato del torneo (D-23 / D-24). Clave de orden de torneo: year*2 + (1 si Apertura).
MATCHDAYS = 17
TEAMS = 18


def tournament_key(year: int, phase: str) -> int:
    return year * 2 + (1 if phase == "Apertura" else 0)


def era_rules(year: int, phase: str) -> dict:
    """Plazas directas (N), última plaza de repechaje/play-in (M) y nombre del repechaje."""
    if tournament_key(year, phase) <= tournament_key(2023, "Clausura"):
        return {"direct": 4, "last": 12, "playoff": "reclasificacion"}
    return {"direct": 6, "last": 10, "playoff": "play-in"}


# Tiempo de partido: segundos de inicio de cada periodo (los timestamps de eventos reinician por periodo)
PERIOD_BASE = {1: 0, 2: 45 * 60, 3: 90 * 60, 4: 105 * 60, 5: 120 * 60}

# Cancha
PITCH_X, PITCH_Y = 120.0, 80.0
