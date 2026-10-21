"""D-07 balón parado: tiros de BP por tipo, córners, tiros libres, saques de banda en zona de peligro."""

import numpy as np
import pandas as pd

DANGER_X = 80.0
SHORT_CORNER = 15.0
RETENTION_EVENTS = 3

PATTERN_TYPE = {
    "From Corner": "corner",
    "From Free Kick": "tiro_libre",
    "From Throw In": "saque_banda",
}


def set_piece_shots(ev: pd.DataFrame, team_id: int) -> pd.DataFrame:
    """Tiros del equipo que vienen de BP, con columna sp_type: penal / tiro_libre_directo / corner / tiro_libre / saque_banda / otro."""
    s = ev[(ev["type"] == "Shot") & (ev["team_id"] == team_id)].copy()
    is_sp = (s["shot_type"] != "Open Play") | s["set_piece_phase"].notna()
    s = s[is_sp].copy()
    typ = np.where(
        s["shot_type"] == "Penalty",
        "penal",
        np.where(
            s["shot_type"] == "Free Kick",
            "tiro_libre_directo",
            np.where(
                s["shot_type"] == "Corner",
                "corner",
                s["play_pattern"].map(PATTERN_TYPE).fillna("otro"),
            ),
        ),
    )
    s["sp_type"] = typ
    return s


def corners(ev: pd.DataFrame, team_id: int) -> pd.DataFrame:
    """Una fila por córner cobrado: envío, corto, zona de primer contacto, xG y tiros de esa posesión."""
    c = ev[
        (ev["type"] == "Pass") & (ev["pass_type"] == "Corner") & (ev["team_id"] == team_id)
    ].copy()
    if c.empty:
        return c
    c["short"] = c["pass_length"] < SHORT_CORNER
    c["delivery"] = np.where(
        c["pass_inswinging"],
        "inswinging",
        np.where(c["pass_outswinging"], "outswinging", np.where(c["short"], "corto", "otro")),
    )
    shots = ev[
        (ev["type"] == "Shot") & (ev["team_id"] == team_id) & (ev["play_pattern"] == "From Corner")
    ]
    by_poss = shots.groupby("possession").agg(
        xg=("shot_xg", "sum"),
        shots=("shot_xg", "size"),
        goals=("shot_outcome", lambda s: (s == "Goal").sum()),
    )
    c = c.join(by_poss, on="possession")
    c[["xg", "shots", "goals"]] = c[["xg", "shots", "goals"]].fillna(0)
    c["side"] = np.where(c["y"] < 40, "izquierda", "derecha")
    c["height"] = np.where(c["pass_height"] == "High Pass", "alto", "raso")
    c["zone"] = corner_zone(c)
    return c


def corner_zone(c: pd.DataFrame) -> np.ndarray:
    """Zona de caída del córner: corto, borde del área, primer palo, centro o segundo palo (según el lado del cobro)."""
    ex = c["end_x"].fillna(0)
    ey = c["end_y"].fillna(40)
    left = c["side"] == "izquierda"
    near = np.where(left, ey < 30, ey > 50)
    far = np.where(left, ey > 50, ey < 30)
    return np.select(
        [c["short"], ex < 102, near, far],
        ["corto", "borde", "primer_palo", "segundo_palo"],
        default="centro",
    )


def free_kicks(ev: pd.DataFrame, team_id: int) -> pd.DataFrame:
    """Tiros libres cobrados (pase o tiro) en zona de peligro (x >= 60): directo, origen, caída, xG y goles de la posesión."""
    fk_pass = (ev["type"] == "Pass") & (ev["pass_type"] == "Free Kick")
    fk_shot = (ev["type"] == "Shot") & (ev["shot_type"] == "Free Kick")
    f = ev[(fk_pass | fk_shot) & (ev["team_id"] == team_id) & (ev["x"] >= 60)].copy()
    if f.empty:
        return f
    f["direct"] = f["type"] == "Shot"
    shots = ev[
        (ev["type"] == "Shot")
        & (ev["team_id"] == team_id)
        & (ev["play_pattern"] == "From Free Kick")
    ]
    by_poss = shots.groupby("possession").agg(
        xg=("shot_xg", "sum"),
        shots=("shot_xg", "size"),
        goals=("shot_outcome", lambda s: (s == "Goal").sum()),
    )
    f = f.join(by_poss, on="possession")
    direct = f["direct"]
    f.loc[direct, "xg"] = f.loc[direct, "shot_xg"]
    f.loc[direct, "shots"] = 1
    f.loc[direct, "goals"] = (f.loc[direct, "shot_outcome"] == "Goal").astype(int)
    f[["xg", "shots", "goals"]] = f[["xg", "shots", "goals"]].fillna(0)
    f["origin_zone"] = fk_origin_zone(f)
    f["zone"] = np.where(direct, "portería", box_zone(f["end_x"].fillna(0), f["end_y"].fillna(40)))
    return f


def fk_origin_zone(f: pd.DataFrame) -> np.ndarray:
    """Origen del tiro libre: carril (izquierda, centro, derecha) y distancia (cerca x >= 95, media 80-95, lejos < 80)."""
    lane = np.select([f["y"] < 26.7, f["y"] > 53.3], ["izquierda", "derecha"], default="centro")
    dist = np.select([f["x"] >= 95, f["x"] >= 80], ["cerca", "media"], default="lejos")
    return np.char.add(np.char.add(lane.astype(str), " "), dist.astype(str))


def box_zone(x: pd.Series, y: pd.Series) -> np.ndarray:
    """Zona de llegada en el último tercio: área chica, centro del área, lados del área, frente al área o lejos."""
    return np.select(
        [
            (x >= 114) & (y >= 30) & (y < 50),
            (x >= 102) & (y >= 30) & (y < 50),
            (x >= 102) & (y >= 18) & (y < 30),
            (x >= 102) & (y >= 50) & (y < 62),
            (x >= 84) & (x < 102) & (y >= 18) & (y < 62),
        ],
        ["chica", "centro", "izq", "der", "frente"],
        default="lejos",
    )


def danger_throw_ins(ev: pd.DataFrame, team_id: int) -> pd.DataFrame:
    """Saques de banda del equipo con x >= 80: retención (>= 3 eventos con balón propios después en la posesión) y tiros."""
    ti = ev[
        (ev["type"] == "Pass")
        & (ev["pass_type"] == "Throw-in")
        & (ev["team_id"] == team_id)
        & (ev["x"] >= DANGER_X)
    ].copy()
    if ti.empty:
        return ti
    ob = ev[ev["on_ball"] & (ev["team_id"] == team_id)]
    after = ob.groupby("possession")["index"].apply(list)
    ti["retained"] = [
        sum(1 for i in after.get(p, []) if i > idx) >= RETENTION_EVENTS
        for p, idx in zip(ti["possession"], ti["index"])
    ]
    shots = ev[
        (ev["type"] == "Shot")
        & (ev["team_id"] == team_id)
        & (ev["play_pattern"] == "From Throw In")
    ]
    by_poss = shots.groupby("possession").agg(
        xg=("shot_xg", "sum"),
        shots=("shot_xg", "size"),
        goals=("shot_outcome", lambda s: (s == "Goal").sum()),
    )
    ti = ti.join(by_poss, on="possession")
    ti[["xg", "shots", "goals"]] = ti[["xg", "shots", "goals"]].fillna(0)
    ti["side"] = np.where(ti["y"] < 40, "izquierda", "derecha")
    ti["zone"] = box_zone(ti["end_x"].fillna(0), ti["end_y"].fillna(40))
    return ti


def grid_cell(x: pd.Series, y: pd.Series, nx: int = 12, ny: int = 8) -> pd.Series:
    """Celda de cuadrícula nx x ny (para mapas agregados, nunca coordenadas individuales)."""
    cx = np.clip((x // (120 / nx)).astype("Int64"), 0, nx - 1)
    cy = np.clip((y // (80 / ny)).astype("Int64"), 0, ny - 1)
    return cx.astype(str) + "," + cy.astype(str)
