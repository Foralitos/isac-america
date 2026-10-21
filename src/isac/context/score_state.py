"""D-21 marcador en vivo y D-22 momento del partido, a partir de los eventos de un partido."""

import itertools

import numpy as np
import pandas as pd

from isac.config import PERIOD_BASE

STATES = ["ganando", "empate", "perdiendo"]
BUCKETS = ["0-15", "15-30", "30-45", "45-60", "60-75", "75-90"]
BUCKET_GROUP = {
    "0-15": "0-30",
    "15-30": "0-30",
    "30-45": "30-60",
    "45-60": "30-60",
    "60-75": "60-90",
    "75-90": "60-90",
}


def goal_timeline(ev: pd.DataFrame) -> pd.DataFrame:
    """(t, team_id) de cada gol: tiros con outcome Goal + 'Own Goal For' (equipo beneficiado). Sin penales de tanda."""
    g = ev[
        ((ev["type"] == "Shot") & (ev["shot_outcome"] == "Goal")) | (ev["type"] == "Own Goal For")
    ]
    g = g[g["period"] <= 4]
    return g[["t", "team_id"]].sort_values("t").reset_index(drop=True)


def period_bounds(ev: pd.DataFrame) -> dict[int, tuple[float, float]]:
    """{periodo: (t_inicio, t_fin)} con Half Start / Half End; si faltan, usa el primer y último evento."""
    out = {}
    for p, g in ev.groupby("period"):
        if p > 4:
            continue
        hs = g[g["type"] == "Half Start"]["t"]
        he = g[g["type"] == "Half End"]["t"]
        t0 = float(hs.min()) if len(hs) else float(g["t"].min())
        t1 = float(he.max()) if len(he) else float(g["t"].max())
        out[int(p)] = (t0, max(t0, t1))
    return out


def bucket_of(period: int, minute: int) -> str:
    if period == 1:
        return "0-15" if minute < 15 else "15-30" if minute < 30 else "30-45"
    if period == 2:
        return "45-60" if minute < 60 else "60-75" if minute < 75 else "75-90"
    return "75-90"


def _bucket_edges(period: int, t0: float, t1: float) -> list[tuple[float, float, str]]:
    base = PERIOD_BASE[period]
    if period == 1:
        edges = [(0, 900, "0-15"), (900, 1800, "15-30"), (1800, 1e9, "30-45")]
    elif period == 2:
        edges = [(0, 900, "45-60"), (900, 1800, "60-75"), (1800, 1e9, "75-90")]
    else:
        edges = [(0, 1e9, "75-90")]
    out = []
    for a, b, name in edges:
        lo, hi = max(t0, base + a), min(t1, base + b)
        if hi > lo:
            out.append((lo, hi, name))
    return out


def state_segments(ev: pd.DataFrame, team_id: int) -> pd.DataFrame:
    """Tramos (t0, t1, period, state) desde la perspectiva de `team_id`."""
    goals = goal_timeline(ev)
    bounds = period_bounds(ev)
    rows = []
    for p, (t0, t1) in sorted(bounds.items()):
        cuts = [t0] + goals[(goals["t"] > t0) & (goals["t"] < t1)]["t"].tolist() + [t1]
        for a, b in itertools.pairwise(cuts):
            gf = int(
                ((goals["t"] < b) & (goals["t"] > a - 1e-9) & (goals["team_id"] == team_id)).sum()
            )  # placeholder
            rows.append((a, b, p))
    seg = pd.DataFrame(rows, columns=["t0", "t1", "period"])
    # estado al inicio de cada tramo = marcador con goles estrictamente antes de t0 (el gol que abre el tramo cuenta)
    gf = np.array([((goals["t"] <= a) & (goals["team_id"] == team_id)).sum() for a in seg["t0"]])
    ga = np.array([((goals["t"] <= a) & (goals["team_id"] != team_id)).sum() for a in seg["t0"]])
    seg["state"] = np.where(gf > ga, "ganando", np.where(gf < ga, "perdiendo", "empate"))
    return seg


def exposure(ev: pd.DataFrame, team_id: int) -> pd.DataFrame:
    """Minutos por (state, bucket) desde la perspectiva de `team_id`."""
    seg = state_segments(ev, team_id)
    rows = []
    for s in seg.itertuples(index=False):
        for lo, hi, name in _bucket_edges(int(s.period), s.t0, s.t1):
            rows.append((s.state, name, (hi - lo) / 60.0))
    df = pd.DataFrame(rows, columns=["state", "bucket", "minutes"])
    return df.groupby(["state", "bucket"], as_index=False)["minutes"].sum()


def assign_state(ev: pd.DataFrame, team_id: int) -> pd.Series:
    """Estado (perspectiva de team_id) vigente al instante de cada evento. El gol cambia el estado
    de los eventos posteriores, no del propio tiro."""
    goals = goal_timeline(ev)
    gt = goals["t"].to_numpy()
    mine = (goals["team_id"] == team_id).to_numpy()
    t = ev["t"].to_numpy()
    idx = np.searchsorted(gt, t, side="left")  # goles con t < t_evento
    cum_mine = np.concatenate([[0], np.cumsum(mine)])
    cum_all = np.arange(len(gt) + 1)
    gf = cum_mine[idx]
    ga = cum_all[idx] - gf
    return pd.Series(
        np.where(gf > ga, "ganando", np.where(gf < ga, "perdiendo", "empate")), index=ev.index
    )


def assign_bucket(ev: pd.DataFrame) -> pd.Series:
    return pd.Series(
        [bucket_of(int(p), int(m)) for p, m in zip(ev["period"], ev["minute"])], index=ev.index
    )
