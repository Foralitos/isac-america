"""D-05 fases de presión, D-05b PPDA propio, D-06 contrapresión."""

import numpy as np
import pandas as pd

GAP = 5.0  # s entre presiones de una misma fase
SUCCESS_WINDOW = 5.0
PPDA_OPP_X = 72.0  # pases del rival en sus 60 % defensivos (x < 72 en sus coordenadas)
PPDA_OWN_X = 48.0  # acciones defensivas propias en nuestros 60 % ofensivos (x > 48)
PPDA_ACTIONS = {
    "Interception",
    "Foul Committed",
}  # + Duel tipo Tackle; sin Pressure (estándar PPDA)


def _first_on_ball_after(
    ev: pd.DataFrame, team_id: int, times: np.ndarray, window: float
) -> np.ndarray:
    ob = ev[ev["on_ball"] & (ev["team_id"] == team_id)]["t"].sort_values().to_numpy()
    idx = np.searchsorted(ob, times, side="right")
    ok = idx < len(ob)
    out = np.zeros(len(times), dtype=bool)
    out[ok] = ob[idx[ok]] - times[ok] <= window
    return out


def pressure_phases(ev: pd.DataFrame, team_id: int) -> pd.DataFrame:
    """Una fila por fase: t0, t1, n, height_x, category (alta/media/baja), success."""
    p = ev[
        (ev["type"] == "Pressure")
        & (ev["team_id"] == team_id)
        & (ev["possession_team_id"] != team_id)
    ].sort_values("t")
    if p.empty:
        return pd.DataFrame(columns=["t0", "t1", "period", "n", "height_x", "category", "success"])
    new_phase = (p["t"].diff() > GAP) | (p["possession"] != p["possession"].shift())
    pid = new_phase.cumsum()
    g = p.groupby(pid)
    ph = pd.DataFrame(
        {
            "t0": g["t"].min(),
            "t1": g["t"].max(),
            "period": g["period"].first(),
            "n": g.size(),
            "height_x": g["x"].mean(),
        }
    )
    ph = ph[ph["n"] >= 2].reset_index(drop=True)
    ph["category"] = np.where(
        ph["height_x"] >= 80, "alta", np.where(ph["height_x"] >= 40, "media", "baja")
    )
    ph["success"] = _first_on_ball_after(ev, team_id, ph["t1"].to_numpy(), SUCCESS_WINDOW)
    return ph


def ppda_own(ev: pd.DataFrame, team_id: int, opp_id: int) -> tuple[float, int, int]:
    """(ppda, pases rivales en zona, acciones propias en zona). ppda = NaN si no hay acciones."""
    opp_passes = ev[
        (ev["type"] == "Pass")
        & (ev["team_id"] == opp_id)
        & ev["pass_outcome"].isna()
        & (ev["x"] < PPDA_OPP_X)
    ]
    own = ev[(ev["team_id"] == team_id) & (ev["x"] > PPDA_OWN_X)]
    actions = own[
        own["type"].isin(PPDA_ACTIONS) | ((own["type"] == "Duel") & (own["duel_type"] == "Tackle"))
    ]
    n_p, n_a = len(opp_passes), len(actions)
    return (n_p / n_a if n_a else np.nan), n_p, n_a


def counterpressures(ev: pd.DataFrame, team_id: int) -> pd.DataFrame:
    """Presiones (type Pressure) con counterpress=True del equipo y si hubo regain (evento con balón propio en 5 s)."""
    cp = ev[
        (ev["team_id"] == team_id)
        & (ev["type"] == "Pressure")
        & ev["counterpress"].fillna(False).astype(bool)
    ].copy()
    if cp.empty:
        cp["regain"] = pd.Series(dtype=bool)
        return cp
    cp["regain"] = _first_on_ball_after(ev, team_id, cp["t"].to_numpy(), SUCCESS_WINDOW)
    return cp
