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

# Técnicos. La clave de cada técnico es slug(nombre completo de StatsBomb); el equipo es un escenario, no parte de la clave.
MIN_MATCHES = 30  # partidos mínimos para que un técnico aparezca en `isac coaches` / `--all`
COACH_SHORT = {
    "Jorge Guillermo Almada Álves": "Almada",
    "Antonio Ricardo Mohamed Matijevich": "Turco Mohamed",
    "Domènec Torrent Font": "Domènec Torrent",
    "Renato Manuel Alves Paiva": "Renato Paiva",
    "Efraín Juárez Váldez": "Efraín Juárez",
    "Benjamín Mora Mendívil": "Benjamín Mora",
    "Beñat San José Gil": "Beñat San José",
    "Martín Varini Di Zioli": "Martín Varini",
    "Veljko Paunovic": "Paunovic",
    "Miguel Ernesto Herrera Aguirre": "Piojo Herrera",
    "Víctor Manuel Vucetich Rojas": "Vucetich",
    "Diego Martín Cocca Pera": "Cocca",
    "André Soares Jardine": "Jardine",
    "Nicolás Ricardo Larcamón": "Larcamón",
    "Marcos Ignacio Ambriz Espinoza": "Nacho Ambriz",
    "Fernando Ortiz": "Tano Ortiz",
    "Robert Dante Siboldi Badiola": "Siboldi",
    "Guido Hernán Pizarro Demestri": "Guido Pizarro",
    "Gabriel Alejandro Milito": "Milito",
    "Fernando Rubén Gago": "Gago",
    "Gustavo Alberto Lema": "Lema",
    "Andrés Luciano Lillini": "Lillini",
    "Eduardo Fentanes Orozco": "Fentanes",
    "Mauro Néstor Gerk Larrea": "Gerk",
    "Rolando Hernán Cristante Mandarino": "Cristante",
}


def slug(s: str) -> str:
    """Clave estable: sin acentos, minúsculas, guiones. Es la misma en data/out, Mongo y la URL del dashboard."""
    import re
    import unicodedata

    plain = unicodedata.normalize("NFKD", s).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]+", "-", plain.lower()).strip("-")


def short_name(coach: str) -> str:
    if coach in COACH_SHORT:
        return COACH_SHORT[coach]
    t = coach.split()
    return t[-2] if len(t) >= 4 else t[-1]


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
