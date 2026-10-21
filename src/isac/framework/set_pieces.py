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
    return c


def free_kicks(ev: pd.DataFrame, team_id: int) -> pd.DataFrame:
    """Tiros libres cobrados (pase o tiro) en zona de peligro (x >= 60)."""
    fk_pass = (ev["type"] == "Pass") & (ev["pass_type"] == "Free Kick")
    fk_shot = (ev["type"] == "Shot") & (ev["shot_type"] == "Free Kick")
    f = ev[(fk_pass | fk_shot) & (ev["team_id"] == team_id) & (ev["x"] >= 60)].copy()
    f["direct"] = f["type"] == "Shot"
    return f


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
    by_poss = shots.groupby("possession").agg(xg=("shot_xg", "sum"), shots=("shot_xg", "size"))
    ti = ti.join(by_poss, on="possession")
    ti[["xg", "shots"]] = ti[["xg", "shots"]].fillna(0)
    return ti


def grid_cell(x: pd.Series, y: pd.Series, nx: int = 12, ny: int = 8) -> pd.Series:
    """Celda de cuadrícula nx x ny (para mapas agregados, nunca coordenadas individuales)."""
    cx = np.clip((x // (120 / nx)).astype("Int64"), 0, nx - 1)
    cy = np.clip((y // (80 / ny)).astype("Int64"), 0, ny - 1)
    return cx.astype(str) + "," + cy.astype(str)
