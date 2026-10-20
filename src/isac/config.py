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
TEAM = "Pachuca"

# Formato del torneo (para D-23 / D-24)
DIRECT_LIGUILLA = {"<=2022/2023": 4, ">=2023/2024": 6}
PLAYIN_UNTIL = {"<=2022/2023": 12, ">=2023/2024": 10}
MATCHDAYS = 17
