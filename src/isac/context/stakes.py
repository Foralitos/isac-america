"""D-23: categoría de situación en la tabla antes del partido."""

from isac.config import MATCHDAYS

CATEGORIES = [
    "arranque",
    "directa_asegurada",
    "zona_directa",
    "directa_alcanzable",
    "pelea_playin",
    "sin_nada",
]
LABELS = {
    "arranque": "Arranque (J1–J4)",
    "directa_asegurada": "Directa asegurada",
    "zona_directa": "En zona directa",
    "directa_alcanzable": "Directa alcanzable",
    "pelea_playin": "Pelea play-in / reclasificación",
    "sin_nada": "Sin nada en juego",
}


def stakes_category(
    pos: int, pts: int, pts_by_pos: list[int], week: int, rules: dict, matchdays: int = MATCHDAYS
) -> str:
    """pts_by_pos[0] = puntos del 1.º, [1] del 2.º, ... (tabla antes de la jornada)."""
    if week <= 4:
        return "arranque"
    rem = matchdays - week + 1
    n, m = rules["direct"], rules["last"]
    if pts - pts_by_pos[n] > 3 * rem:  # pts_by_pos[n] es el (N+1)-ésimo
        return "directa_asegurada"
    if pos <= n:
        return "zona_directa"
    if pts_by_pos[n - 1] - pts <= 3 * rem:
        return "directa_alcanzable"
    if pts_by_pos[m - 1] - pts <= 3 * rem:
        return "pelea_playin"
    return "sin_nada"
