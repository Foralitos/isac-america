"""D-03 transición ofensiva (flag StatsBomb + ventana propia) y D-04 transición defensiva / vulnerabilidad."""

import numpy as np
import pandas as pd

WINDOW = 10.0  # segundos
WON = {"Won", "Success", "Success In Play", "Success Out"}
INCOMPLETE = {"Incomplete", "Out", "Pass Offside"}


def recoveries(ev: pd.DataFrame, team_id: int) -> pd.DataFrame:
    """Recuperaciones en juego abierto del equipo: Ball Recovery exitosa, Interception ganada, Tackle ganado."""
    t = ev[ev["team_id"] == team_id]
    br = (t["type"] == "Ball Recovery") & ~t["recovery_failure"].fillna(False).astype(bool)
    ic = (t["type"] == "Interception") & t["interception_outcome"].isin(WON)
    du = (t["type"] == "Duel") & (t["duel_type"] == "Tackle") & t["duel_outcome"].isin(WON)
    return t[br | ic | du]


def losses(ev: pd.DataFrame, team_id: int) -> pd.DataFrame:
    """Pérdidas del equipo: Dispossessed, Miscontrol, pase incompleto, regate fallido."""
    t = ev[ev["team_id"] == team_id]
    return t[
        (t["type"].isin(["Dispossessed", "Miscontrol"]))
        | ((t["type"] == "Pass") & t["pass_outcome"].isin(INCOMPLETE))
        | ((t["type"] == "Dribble") & (t["dribble_outcome"] == "Incomplete"))
    ]


def shots_within(
    ev: pd.DataFrame, team_id: int, from_times: pd.Series, window: float = WINDOW
) -> pd.DataFrame:
    """Para cada instante de `from_times`, el primer tiro del equipo en (t, t+window]. Devuelve (t_from, t_shot, xg)."""
    shots = ev[(ev["type"] == "Shot") & (ev["team_id"] == team_id)].sort_values("t")
    st = shots["t"].to_numpy()
    sx = shots["shot_xg"].fillna(0.0).to_numpy()
    rows = []
    for t0 in from_times.to_numpy():
        i = np.searchsorted(st, t0, side="right")
        if i < len(st) and st[i] - t0 <= window:
            rows.append((t0, st[i], sx[i]))
    return pd.DataFrame(rows, columns=["t_from", "t_shot", "xg"])


def transition_shots(ev: pd.DataFrame, team_id: int) -> pd.DataFrame:
    """Tiros del equipo marcados por StatsBomb como transición."""
    return ev[
        (ev["type"] == "Shot")
        & (ev["team_id"] == team_id)
        & ev["is_transition"].fillna(False).astype(bool)
    ]


def transition_possessions(poss: pd.DataFrame, team_id: int) -> pd.DataFrame:
    return poss[(poss["team_id"] == team_id) & poss["is_transition"]] if not poss.empty else poss
