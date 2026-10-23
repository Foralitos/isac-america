"""simulation.json: cada partido repetido 10,000 veces con las ocasiones que hubo (D-28).

La liga entera se simula una vez (línea base de "suerte" por equipo-torneo) y cada técnico se mide contra ella.
"""

import numpy as np
import pandas as pd

from isac.config import PROCESSED
from isac.export.common import write_json

N_SIMS = 10_000
SEED = 2026
MAX_GOALS = 5  # la cuadrícula de marcadores va de 0 a 5; 5 = "5 o más"
CONTROL_P = 0.60  # triunfo de control: lo ganaba en 6 de cada 10 repeticiones o más
STOLEN_P = 1 / 3  # lo sacó / no lo merecía: menos de 1 de cada 3
EVENTS = PROCESSED / "events"


def load_chances() -> pd.DataFrame:
    """Ocasiones de toda la liga: tiros de la misma posesión y equipo combinados en una sola (D-28)."""
    parts = []
    for f in sorted(EVENTS.glob("season_id=*/part.parquet")):
        ev = pd.read_parquet(
            f,
            columns=["match_id", "team_id", "type", "period", "minute", "possession", "player", "shot_xg", "shot_type", "shot_outcome"],
        )
        parts.append(ev[(ev["type"] == "Shot") & (ev["period"] < 5)])
    s = pd.concat(parts, ignore_index=True)
    s["shot_xg"] = s["shot_xg"].fillna(0.0).clip(0, 0.99)
    s["goal"] = s["shot_outcome"] == "Goal"
    s = s.sort_values(["match_id", "possession", "shot_xg"], ascending=[True, True, False])
    g = s.groupby(["match_id", "team_id", "possession"], sort=False)
    ch = g.agg(
        minute=("minute", "min"),
        player=("player", "first"),
        shots=("shot_xg", "size"),
        penalty=("shot_type", lambda t: bool((t == "Penalty").any())),
        goal=("goal", "any"),
        p=("shot_xg", lambda x: 1 - np.prod(1 - x.to_numpy())),
    ).reset_index()
    return ch


def _simulate(p_for: np.ndarray, p_against: np.ndarray, rng) -> tuple[np.ndarray, np.ndarray]:
    gf = (rng.random((N_SIMS, len(p_for))) < p_for).sum(axis=1) if len(p_for) else np.zeros(N_SIMS, int)
    ga = (rng.random((N_SIMS, len(p_against))) < p_against).sum(axis=1) if len(p_against) else np.zeros(N_SIMS, int)
    return gf, ga


def simulate_league(mm: pd.DataFrame, chances: pd.DataFrame | None = None) -> tuple[pd.DataFrame, pd.DataFrame]:
    """Una fila por partido-equipo con probabilidades y puntos merecidos; y las ocasiones usadas."""
    chances = chances if chances is not None else load_chances()
    rng = np.random.default_rng(SEED)
    by_match = {k: g for k, g in chances.groupby("match_id")}
    pairs = mm[["match_id", "team_id"]].drop_duplicates()
    teams_of = pairs.groupby("match_id")["team_id"].apply(list).to_dict()
    rows = []
    for match_id, team_ids in teams_of.items():
        if len(team_ids) != 2:
            continue
        a, b = team_ids
        ch = by_match.get(match_id)
        pa = ch.loc[ch["team_id"] == a, "p"].to_numpy() if ch is not None else np.array([])
        pb = ch.loc[ch["team_id"] == b, "p"].to_numpy() if ch is not None else np.array([])
        ga_, gb_ = _simulate(pa, pb, rng)
        grid = np.zeros((MAX_GOALS + 1, MAX_GOALS + 1))
        np.add.at(grid, (np.minimum(ga_, MAX_GOALS), np.minimum(gb_, MAX_GOALS)), 1)
        grid /= N_SIMS
        w, d, l = (ga_ > gb_).mean(), (ga_ == gb_).mean(), (ga_ < gb_).mean()
        for team, opp, pw, pl, g in ((a, b, w, l, grid), (b, a, l, w, grid.T)):
            rows.append(
                {
                    "match_id": match_id,
                    "team_id": team,
                    "p_w": pw,
                    "p_d": d,
                    "p_l": pl,
                    "xpts": 3 * pw + d,
                    "grid": g,
                }
            )
    return pd.DataFrame(rows), chances


def _pts(result: str) -> int:
    return {"W": 3, "D": 1, "L": 0}.get(result, 0)


def league_luck(mm: pd.DataFrame, sim: pd.DataFrame) -> pd.Series:
    """Diferencia por partido (puntos reales − merecidos) de cada equipo-torneo de la liga."""
    x = mm[["match_id", "team_id", "team", "tournament", "result"]].merge(sim, on=["match_id", "team_id"])
    x["pts"] = x["result"].map(_pts)
    g = x.groupby(["team", "tournament"]).agg(pts=("pts", "sum"), xpts=("xpts", "sum"), n=("match_id", "nunique"))
    return (g["pts"] - g["xpts"]) / g["n"]


def calibration(mm: pd.DataFrame, sim: pd.DataFrame) -> dict:
    x = mm[["match_id", "team_id", "result"]].merge(sim, on=["match_id", "team_id"])
    x["pts"] = x["result"].map(_pts)
    return {
        "matches": int(x["match_id"].nunique()),
        "pts_per_match": float(x["pts"].mean()),
        "xpts_per_match": float(x["xpts"].mean()),
        "p_w_mean": float(x["p_w"].mean()),
        "w_rate": float((x["result"] == "W").mean()),
        "p_d_mean": float(x["p_d"].mean()),
        "d_rate": float((x["result"] == "D").mean()),
    }


def _pct(v: float, dist: pd.Series) -> float:
    return float((dist < v).mean() * 100 + (dist == v).mean() * 50)


def _chances_list(ch: pd.DataFrame) -> list[dict]:
    ch = ch.sort_values("minute")
    return [
        {
            "min": int(r.minute) + 1,
            "player": r.player,
            "p": float(r.p),
            "shots": int(r.shots),
            "pen": bool(r.penalty),
            "goal": bool(r.goal),
        }
        for r in ch.itertuples()
    ]


def export_simulation(rows: pd.DataFrame, mm: pd.DataFrame, sim: pd.DataFrame, chances: pd.DataFrame) -> None:
    luck_dist = league_luck(mm, sim)
    x = rows.merge(sim, on=["match_id", "team_id"], how="inner").sort_values("match_date")
    x["pts"] = x["result"].map(_pts)
    ch_by = {k: g for k, g in chances.groupby("match_id")}

    matches = []
    for r in x.itertuples():
        ch = ch_by.get(r.match_id, chances.iloc[0:0])
        top = sorted(
            ((float(r.grid[i, j]), i, j) for i in range(MAX_GOALS + 1) for j in range(MAX_GOALS + 1)),
            reverse=True,
        )[:3]
        matches.append(
            {
                "match_id": r.match_id,
                "date": r.match_date,
                "tournament": r.tournament,
                "round": r.round if isinstance(r.round, str) else None,
                "team": r.team,
                "opponent": r.opponent,
                "is_home": bool(r.is_home),
                "gf": int(r.gf),
                "ga": int(r.ga),
                "result": r.result,
                "pts": int(r.pts),
                "xpts": float(r.xpts),
                "p_w": float(r.p_w),
                "p_d": float(r.p_d),
                "p_l": float(r.p_l),
                "xg": float(ch.loc[ch["team_id"] == r.team_id, "p"].sum()),
                "xga": float(ch.loc[ch["team_id"] != r.team_id, "p"].sum()),
                "grid": [[round(float(v), 4) for v in row] for row in r.grid],
                "likely": [{"gf": i, "ga": j, "p": p} for p, i, j in top],
                "for": _chances_list(ch[ch["team_id"] == r.team_id]),
                "against": _chances_list(ch[ch["team_id"] != r.team_id]),
            }
        )

    tours = []
    for (team, tour), g in x.groupby(["team", "tournament"], sort=False):
        n = g["match_id"].nunique()
        diff = (g["pts"].sum() - g["xpts"].sum()) / n
        tours.append(
            {
                "team": team,
                "tournament": tour,
                "from": g["match_date"].min(),
                "n": int(n),
                "pts": int(g["pts"].sum()),
                "xpts": float(g["xpts"].sum()),
                "diff": float(g["pts"].sum() - g["xpts"].sum()),
                "pct": _pct(diff, luck_dist),
            }
        )
    tours.sort(key=lambda t: t["from"])

    n = len(x)
    pts, xpts = int(x["pts"].sum()), float(x["xpts"].sum())
    by_res = {k: int((x["result"] == k).sum()) for k in "WDL"}
    control = x[(x["result"] == "W") & (x["p_w"] >= CONTROL_P)]
    stolen = x[(x["result"] == "W") & (x["p_w"] < STOLEN_P)]
    robbed = x[(x["result"] == "L") & (x["p_l"] < STOLEN_P)]
    pick = lambda df, col, asc: df.sort_values(col, ascending=asc)["match_id"].tolist()
    by_team = []
    for team, g in x.groupby("team", sort=False):
        by_team.append(
            {
                "team": team,
                "n": int(len(g)),
                "ppg": float(g["pts"].mean()),
                "xppg": float(g["xpts"].mean()),
            }
        )
    write_json(
        "simulation.json",
        {
            "n_sims": N_SIMS,
            "thresholds": {"control": CONTROL_P, "stolen": STOLEN_P},
            "overall": {
                "n": n,
                "pts": pts,
                "xpts": xpts,
                "diff": pts - xpts,
                "ppg": pts / n,
                "xppg": xpts / n,
                "pct": _pct((pts - xpts) / n, luck_dist),
                "record": by_res,
                "wins_control": int(len(control)),
                "wins_stolen": int(len(stolen)),
                "losses_robbed": int(len(robbed)),
                "wins_control_share": float(len(control) / max(1, by_res["W"])),
            },
            "league": {
                "units": int(len(luck_dist)),
                "p10": float(luck_dist.quantile(0.1)),
                "p90": float(luck_dist.quantile(0.9)),
            },
            "calibration": calibration(mm, sim),
            "by_team": by_team,
            "tournaments": tours,
            "lists": {
                "control": pick(control, "p_w", False),
                "stolen": pick(stolen, "p_w", True),
                "robbed": pick(robbed, "p_l", True),
            },
            "matches": matches,
        },
        ["D-28", "D-26", "D-26b"],
    )
