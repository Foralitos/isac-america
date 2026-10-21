"""scenarios/*.json: cada escenario -> categorías -> métricas (media, n, percentil, delta vs el propio promedio)."""

import numpy as np
import pandas as pd

from isac.context.score_state import BUCKET_GROUP
from isac.context.stakes import CATEGORIES, LABELS
from isac.export.baseline import percentile, summarize
from isac.export.common import metric_meta, write_json
from isac.metrics.registry import METRICS

MATCH_SCENARIOS = {
    "equipo": ("D-26", lambda r: r["team"], None),
    "localia": ("D-20", lambda r: np.where(r["is_home"], "local", "visita"), ["local", "visita"]),
    "tabla": ("D-23", lambda r: r["stakes"], CATEGORIES + ["playin", "liguilla"]),
    "fase": (
        "D-24",
        lambda r: np.where(
            r["phase_kind"] == "regular",
            "regular",
            np.where(r["phase_kind"] == "playin", "play-in", r["round"]),
        ),
        ["regular", "play-in", "cuartos", "semis", "final"],
    ),
    "ida_vuelta": (
        "D-24",
        lambda r: np.where(
            r["leg"] == "2",
            "vuelta " + r["agg_before"].fillna(""),
            np.where(r["leg"] == "1", "ida", None),
        ),
        ["ida", "vuelta ganando", "vuelta empatado", "vuelta perdiendo"],
    ),
    "rival": ("D-25", lambda r: np.where(r["opp_top6"], "top6", "resto"), ["top6", "resto"]),
    "torneo": ("D-26", lambda r: r["tournament"], None),
    "resultado": (
        "D-20",
        lambda r: r["result"].map({"W": "gano", "D": "empato", "L": "perdio"}),
        ["gano", "empato", "perdio"],
    ),
}
CAT_LABELS = {
    **LABELS,
    "playin": "Play-in / reclasificación",
    "liguilla": "Liguilla",
    "local": "Local",
    "visita": "Visita",
    "top6": "Rival top 6",
    "resto": "Resto",
    "regular": "Fase regular",
    "play-in": "Play-in",
    "cuartos": "Cuartos",
    "semis": "Semifinal",
    "final": "Final",
    "gano": "Ganó",
    "empato": "Empató",
    "perdio": "Perdió",
    "ida": "Ida",
    "vuelta ganando": "Vuelta, ganando el global",
    "vuelta empatado": "Vuelta, global empatado",
    "vuelta perdiendo": "Vuelta, perdiendo el global",
}

SEG_METRICS = [
    "np_xg",
    "shots",
    "xg_conceded",
    "shots_conceded",
    "prog_passes",
    "prog_carries",
    "box_entries",
    "opp_box_entries",
    "crosses",
    "pressures",
    "pressures_final_third",
    "counterpressures",
    "transition_shots",
    "transition_xg",
    "transition_xg_conceded",
    "dribbles",
    "obv_offense",
    "obv_conceded",
    "losses",
    "recoveries_high",
    "sp_xg",
    "sp_xg_conceded",
    "fouls",
]
SEG_RATIOS = ["ppda_own", "press_height", "directness", "field_tilt", "possession_pct"]


def export_match_scenarios(rows: pd.DataFrame, baseline: pd.DataFrame, overall: list[dict]) -> None:
    ov = {s["metric"]: s["value"] for s in overall}
    for name, (dsid, fn, order) in MATCH_SCENARIOS.items():
        cat = pd.Series(fn(rows), index=rows.index)
        cats = order or sorted(cat.dropna().unique())
        out = []
        for c in cats:
            sub = rows[cat == c]
            if len(sub) == 0:
                continue
            summ = summarize(sub, baseline, list(METRICS))
            for s in summ:
                s["delta_vs_overall"] = (
                    s["value"] - ov[s["metric"]]
                    if s["metric"] in ov and ov[s["metric"]] is not None
                    else None
                )
                s.update(metric_meta(s["metric"]))
            out.append(
                {
                    "category": c,
                    "label": CAT_LABELS.get(c, c),
                    "n": len(sub),
                    "record": {k: int((sub["result"] == k).sum()) for k in "WDL"},
                    "metrics": summ,
                }
            )
        write_json(
            f"scenarios/{name}.json",
            {"scenario": name, "categories": out},
            [dsid] + sorted({d for m in METRICS.values() for d in m[2]}),
        )


def _rates(seg: pd.DataFrame) -> dict:
    mins = seg["minutes"].sum()
    out = {"minutes": float(mins), "n_matches": int(seg["match_id"].nunique())}
    if mins <= 0:
        return out
    for m in SEG_METRICS:
        out[m] = float(seg[m].sum() / mins * 90)
    out["ppda_own"] = (
        float(seg["ppda_opp_passes"].sum() / seg["ppda_actions"].sum())
        if seg["ppda_actions"].sum()
        else None
    )
    out["press_height"] = (
        float((seg["press_height"] * seg["pressures"]).sum() / seg["pressures"].sum())
        if seg["pressures"].sum()
        else None
    )
    w = seg["on_ball"].sum()
    out["directness"] = (
        float((seg["directness"].fillna(0) * seg["on_ball"]).sum() / w) if w else None
    )
    f3 = seg["passes_final_third"].sum() + seg["opp_passes_final_third"].sum()
    out["field_tilt"] = float(seg["passes_final_third"].sum() / f3 * 100) if f3 else None
    ob = seg["on_ball"].sum() + seg["opp_on_ball"].sum()
    out["possession_pct"] = float(seg["on_ball"].sum() / ob * 100) if ob else None
    return out


def _league_by(seg_all: pd.DataFrame, key: str, cat: str) -> dict:
    """Línea base de liga por categoría: tasas por equipo-torneo-categoría, percentil sobre esa distribución."""
    s = seg_all[seg_all[key] == cat]
    units = []
    for _, g in s.groupby(["team_id", "tournament"]):
        if g["minutes"].sum() >= 180:
            units.append(_rates(g))
    return pd.DataFrame(units)


def export_segment_scenarios(seg_coach: pd.DataFrame, seg_all: pd.DataFrame) -> None:
    seg_all = seg_all.copy()
    seg_coach = seg_coach.copy()
    for df in (seg_all, seg_coach):
        df["bucket_group"] = df["bucket"].map(BUCKET_GROUP)
    overall = _rates(seg_coach)
    for name, key, cats, dsid in (
        ("marcador", "state", ["ganando", "empate", "perdiendo"], "D-21"),
        ("momento", "bucket_group", ["0-30", "30-60", "60-90"], "D-22"),
        ("momento_15", "bucket", ["0-15", "15-30", "30-45", "45-60", "60-75", "75-90"], "D-22"),
    ):
        out = []
        for c in cats:
            r = _rates(seg_coach[seg_coach[key] == c])
            base = _league_by(seg_all, key, c)
            metrics = []
            for m in SEG_METRICS + SEG_RATIOS:
                if m not in r or r[m] is None:
                    continue
                pct = percentile(base[m], r[m]) if m in base.columns else None
                direction = METRICS[m][4] if m in METRICS else 0
                meta = (
                    metric_meta(m)
                    if m in METRICS
                    else {
                        "metric": m,
                        "block": "M-1",
                        "label": m,
                        "definitions": ["D-21"],
                        "unit": "/90",
                        "direction": 0,
                    }
                )
                metrics.append(
                    {
                        **meta,
                        "value": r[m],
                        "unit": "/90 min" if m in SEG_METRICS else meta["unit"],
                        "league_mean": float(base[m].mean()) if m in base.columns else None,
                        "pct": pct,
                        "pct_good": (100 - pct if direction < 0 else pct)
                        if pct is not None
                        else None,
                        "delta_vs_overall": r[m] - overall[m]
                        if overall.get(m) is not None
                        else None,
                    }
                )
            out.append(
                {
                    "category": c,
                    "label": c,
                    "n": r["n_matches"],
                    "minutes": r["minutes"],
                    "metrics": metrics,
                }
            )
        write_json(
            f"scenarios/{name}.json",
            {
                "scenario": name,
                "categories": out,
                "note": "tasas por 90 minutos de exposición en ese estado",
            },
            [dsid, "D-01", "D-05b", "D-12", "D-13", "D-14"],
        )


def export_state_by_stakes(seg_coach: pd.DataFrame, ctx_coach: pd.DataFrame) -> None:
    """Cruce marcador x situación en la tabla (solo tasas del técnico, sin percentil)."""
    s = seg_coach.merge(ctx_coach[["match_id", "stakes", "is_home"]], on="match_id")
    out = []
    for stakes, g in s.groupby("stakes"):
        row = {"stakes": stakes, "label": CAT_LABELS.get(stakes, stakes), "states": {}}
        for st, gg in g.groupby("state"):
            row["states"][st] = _rates(gg)
        out.append(row)
    out2 = []
    for home, g in s.groupby("is_home"):
        row = {"localia": "local" if home else "visita", "states": {}}
        for st, gg in g.groupby("state"):
            row["states"][st] = _rates(gg)
        out2.append(row)
    write_json(
        "scenarios/marcador_x_tabla.json",
        {"by_stakes": out, "by_home": out2},
        ["D-20", "D-21", "D-23"],
    )
