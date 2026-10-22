"""rivals.json: el técnico contra los demás técnicos, por estilo (D-27).

Tres capas:
1. Estilo de cada rival: percentil de liga del equipo rival en ese torneo en seis ejes (balón, presión, juego
   directo, contra, balón parado, solidez). Cada partido del técnico queda etiquetado con el estilo de su rival.
2. Cómo le va al técnico contra cada estilo (tercios de cada eje) y qué cambió cuando ganó contra cuando perdió,
   medido solo en los minutos con el partido empatado para que el marcador no explique la diferencia.
3. Ficha por técnico rival: partidos directos con marcador y qué cambió en cada uno, rivales parecidos (los 20
   partidos contra los estilos más cercanos) y recomendaciones para los dos lados. Los técnicos que dirigen hoy
   salen aunque no se hayan enfrentado nunca: su estilo se toma de sus últimos 34 partidos.
"""

import numpy as np
import pandas as pd

from isac.config import short_name, slug
from isac.export.baseline import percentile
from isac.export.common import write_json

# id, métrica, invertida (menos = más del rasgo), etiqueta, rasgo alto y bajo (singular para el técnico, plural para "rivales que")
STYLES = [
    (
        "balon",
        "field_tilt",
        False,
        "Tiene el balón",
        "domina el balón y el campo",
        "cede el balón y el campo",
        "dominan el balón y el campo",
        "ceden el balón y el campo",
    ),
    (
        "presion",
        "press_height",
        False,
        "Presiona arriba",
        "presiona arriba",
        "defiende abajo",
        "presionan arriba",
        "defienden abajo",
    ),
    (
        "directo",
        "directness",
        False,
        "Juega directo",
        "juega directo, en pocos pases",
        "elabora, con muchos pases",
        "juegan directo",
        "elaboran con muchos pases",
    ),
    (
        "contra",
        "transition_xg",
        False,
        "Pega a la contra",
        "pega a la contra",
        "casi no genera a la contra",
        "pegan a la contra",
        "casi no generan a la contra",
    ),
    (
        "bp",
        "sp_xg",
        False,
        "Peligro a balón parado",
        "es peligroso a balón parado",
        "genera poco a balón parado",
        "son peligrosos a balón parado",
        "generan poco a balón parado",
    ),
    (
        "solidez",
        "np_xg_conceded",
        True,
        "Concede poco",
        "concede poco atrás",
        "concede mucho atrás",
        "conceden poco atrás",
        "conceden mucho atrás",
    ),
]
BANDS = [("bajo", 0, 100 / 3), ("medio", 100 / 3, 200 / 3), ("alto", 200 / 3, 100.01)]

# Qué cambió en un partido contra la costumbre del técnico: métrica, decimales, unidad, frase si sube, si baja.
CHANGES = {
    "ppda_own": (1, "pases que dejó dar antes de robar", "presionó menos", "presionó más"),
    "press_height": (0, "m", "presionó más arriba", "presionó más abajo"),
    "field_tilt": (0, "% de dominio territorial", "pisó más campo rival", "pisó menos campo rival"),
    "possession_pct": (0, "% de posesión", "tuvo más el balón", "tuvo menos el balón"),
    "np_xg": (2, "", "generó más peligro", "generó menos peligro"),
    "np_xg_conceded": (2, "", "concedió más peligro", "concedió menos peligro"),
    "directness": (2, "de verticalidad", "jugó más directo", "jugó menos directo"),
    "dribbles": (0, "regates", "intentó más regates", "intentó menos regates"),
    "counterpressures": (
        0,
        "presiones tras pérdida",
        "presionó más tras perder el balón",
        "presionó menos tras perder el balón",
    ),
    "transition_xg": (
        2,
        "de peligro tras robo",
        "sacó más peligro a la contra",
        "sacó menos peligro a la contra",
    ),
    "sp_xg": (
        2,
        "de peligro a balón parado",
        "generó más a balón parado",
        "generó menos a balón parado",
    ),
    "gk_long_pct": (
        0,
        "% de saques largos del portero",
        "su portero sacó más largo",
        "su portero sacó más corto",
    ),
}
# Palancas con el partido empatado (D-21): lo que el técnico controla, no el resultado.
LEVERS = {
    "ppda": (1, "pases que dejó dar antes de robar", "presionó menos", "presionó más", -1),
    "press_height": (0, "m de altura de presión", "presionó más arriba", "presionó más abajo", +1),
    "directness": (2, "de verticalidad", "jugó más directo", "elaboró más", +1),
    "poss": (0, "% de posesión", "tuvo más el balón", "le cedió el balón al rival", +1),
    "tilt": (0, "% de dominio territorial", "pisó más campo rival", "se metió más atrás", +1),
    "prog_carries90": (
        0,
        "conducciones que avanzan por 90 minutos",
        "condujo más hacia adelante",
        "condujo menos",
        +1,
    ),
    "dribbles90": (0, "regates por 90 minutos", "encaró más", "encaró menos", +1),
    "counterpressures90": (
        0,
        "presiones tras pérdida por 90 minutos",
        "presionó más tras perder el balón",
        "presionó menos tras perder el balón",
        +1,
    ),
    "recoveries_high90": (
        0,
        "robos en campo rival por 90 minutos",
        "recuperó más arriba",
        "recuperó menos arriba",
        +1,
    ),
}
CURRENT_DAYS = (
    60  # dirige hoy si su equipo jugó su último partido con él en los últimos 60 días de la base
)
STYLE_WINDOW = 34  # partidos recientes para el estilo de un técnico actual (dos torneos)
K_SIMILAR = 20
MIN_SIDE = 5  # partidos mínimos de cada lado (ganados / perdidos) para leer una palanca


def _fmt(v, dec):
    return None if v is None or pd.isna(v) else f"{v:.{dec}f}"


def _u(unit):
    return f" {unit}" if unit else ""


def _record(g):
    return {k: int((g["result"] == k).sum()) for k in "WDL"}


def _ppg(g):
    return float(g["result"].map({"W": 3, "D": 1, "L": 0}).mean()) if len(g) else None


def _summary(g):
    return {
        "n": len(g),
        "record": _record(g),
        "ppg": _ppg(g),
        "xgd": float(g["xgd"].mean()) if len(g) else None,
        "xg": float(g["np_xg"].mean()) if len(g) else None,
        "xgc": float(g["np_xg_conceded"].mean()) if len(g) else None,
        "ppda": float(g["ppda_own"].mean()) if len(g) else None,
        "tilt": float(g["field_tilt"].mean()) if len(g) else None,
    }


def _style_pct(baseline, values: dict) -> dict:
    out = {}
    for sid, metric, inv, *_ in STYLES:
        p = percentile(baseline[metric], values.get(metric))
        out[sid] = None if p is None else (100 - p if inv else p)
    return out


def _band(p):
    if p is None or pd.isna(p):
        return None
    return next(b for b, lo, hi in BANDS if lo <= p < hi)


def _tied(seg, pairs):
    """Palancas por partido en los minutos con el partido empatado (D-21)."""
    e = seg[seg["state"] == "empate"].merge(pairs, on=["match_id", "team_id"])
    if e.empty:
        return pd.DataFrame()
    num = [
        "minutes",
        "on_ball",
        "opp_on_ball",
        "ppda_opp_passes",
        "ppda_actions",
        "passes_final_third",
        "opp_passes_final_third",
        "prog_carries",
        "dribbles",
        "counterpressures",
        "recoveries_high",
    ]
    e = e.assign(ph=e["press_height"] * e["minutes"], dr=e["directness"] * e["minutes"])
    a = e.groupby(["match_id", "team_id"])[num + ["ph", "dr"]].sum()
    out = pd.DataFrame(index=a.index)
    out["minutes"] = a["minutes"]
    out["press_height"] = a["ph"] / a["minutes"]
    out["directness"] = a["dr"] / a["minutes"]
    out["ppda"] = a["ppda_opp_passes"] / a["ppda_actions"].clip(lower=1)
    out["tilt"] = (
        a["passes_final_third"] / (a["passes_final_third"] + a["opp_passes_final_third"]) * 100
    )
    out["poss"] = a["on_ball"] / (a["on_ball"] + a["opp_on_ball"]) * 100
    for c in ["prog_carries", "dribbles", "counterpressures", "recoveries_high"]:
        out[f"{c}90"] = a[c] / a["minutes"] * 90
    return out[out["minutes"] >= 20].reset_index()


def _levers(g, tied):
    """Qué hizo distinto, con el partido empatado, en los que ganó contra los que perdió."""
    t = g[["match_id", "team_id", "result"]].merge(tied, on=["match_id", "team_id"])
    w, lo = t[t["result"] == "W"], t[t["result"] == "L"]
    if len(w) < MIN_SIDE or len(lo) < MIN_SIDE:
        return {"n_w": len(w), "n_l": len(lo), "items": []}
    items = []
    for lever, (dec, unit, up, down, good) in LEVERS.items():
        sd = t[lever].std()
        if not sd or pd.isna(sd):
            continue
        wv, lv = w[lever].mean(), lo[lever].mean()
        z = (wv - lv) / sd
        if abs(z) < 0.3:
            continue
        items.append(
            {
                "lever": lever,
                "w": wv,
                "l": lv,
                "z": z,
                "phrase": up if wv > lv else down,
                "text": f"{up if wv > lv else down} ({_fmt(wv, dec)}{_u(unit)} contra {_fmt(lv, dec)} en los que perdió)",
            }
        )
    items.sort(key=lambda x: -abs(x["z"]))
    return {
        "n_w": len(w),
        "n_l": len(lo),
        "minutes": float(t["minutes"].mean()),
        "items": items[:3],
    }


def _changes(row, usual, sd, top=3, zmin=0.8):
    out = []
    for m, (dec, unit, up, down) in CHANGES.items():
        v = row.get(m)
        if v is None or pd.isna(v) or not sd.get(m):
            continue
        z = (v - usual[m]) / sd[m]
        if abs(z) >= zmin:
            out.append(
                {
                    "metric": m,
                    "z": z,
                    "text": f"{up if z > 0 else down} ({_fmt(v, dec)}{_u(unit)} contra {_fmt(usual[m], dec)} de costumbre)",
                }
            )
    out.sort(key=lambda x: -abs(x["z"]))
    return out[:top]


def _count(n, word):
    return f"{n} {word}{'' if n == 1 else 's'}"


def _join(parts):
    if not parts:
        return ""
    return parts[0] if len(parts) == 1 else f"{', '.join(parts[:-1])} y {parts[-1]}"


def _current_coaches(mm):
    last_date = pd.to_datetime(mm["match_date"]).max()
    lm = mm.sort_values("match_date").groupby("team_id").tail(1)
    lm = lm[pd.to_datetime(lm["match_date"]) >= last_date - pd.Timedelta(days=CURRENT_DAYS)]
    return {r["coach"]: r["team"] for _, r in lm.iterrows() if isinstance(r["coach"], str)}


def export_rivals(rows, mm, baseline, seg) -> None:
    short = short_name(rows["coach"].iloc[0])
    me = rows["coach"].iloc[0]
    # 1. estilo del rival en cada partido: percentil de liga del rival en ese torneo
    opp = mm.groupby(["team_id", "tournament"])[[s[1] for s in STYLES]].mean().reset_index()
    sty = pd.DataFrame(
        [
            {"team_id": r["team_id"], "tournament": r["tournament"], **_style_pct(baseline, r)}
            for _, r in opp.iterrows()
        ]
    )
    A = rows.merge(
        sty.rename(columns={"team_id": "opponent_id_y", **{s[0]: f"s_{s[0]}" for s in STYLES}}),
        on=["opponent_id_y", "tournament"],
        how="left",
    )
    tied = _tied(seg, rows[["match_id", "team_id"]].drop_duplicates())
    overall = _summary(A)
    lever_cols = list(CHANGES)
    usual = {m: A[m].mean() for m in lever_cols if m in A}
    sd = {m: A[m].std() for m in lever_cols if m in A}

    # 2. cómo le va contra cada estilo
    by_style = []
    for sid, metric, inv, label, hi, lo, hi_pl, lo_pl in STYLES:
        A["_b"] = A[f"s_{sid}"].map(_band)
        groups = []
        for b, *_ in BANDS:
            g = A[A["_b"] == b]
            groups.append(
                {"band": b, **_summary(g), "levers": _levers(g, tied) if b != "medio" else None}
            )
        gh, gl = groups[2], groups[0]
        by_style.append(
            {
                "id": sid,
                "label": label,
                "metric": metric,
                "high": hi,
                "low": lo,
                "high_pl": hi_pl,
                "low_pl": lo_pl,
                "groups": groups,
                "gap": (gh["ppg"] or 0) - (gl["ppg"] or 0),
            }
        )
    worst = min(by_style, key=lambda s: min(g["ppg"] or 9 for g in s["groups"]))
    style_by_id = {s["id"]: s for s in by_style}

    # 3. fichas por técnico rival
    current = _current_coaches(mm)
    coaches = set(A["opp_coach"].dropna()) | (set(current) - {me})
    rivals = []
    for coach in coaches:
        key = slug(coach)
        h = A[A["opp_coach"] == coach].sort_values("match_date")
        is_current = coach in current
        if is_current:
            recent = mm[mm["coach"] == coach].sort_values("match_date").tail(STYLE_WINDOW)
            style = _style_pct(baseline, recent[[s[1] for s in STYLES]].mean().to_dict())
            style_n = len(recent)
        else:
            style = {s[0]: float(h[f"s_{s[0]}"].mean()) for s in STYLES}
            style_n = len(h)
        # rivales parecidos: los K partidos cuyo rival tenía el estilo más cercano
        vec = np.array([style[s[0]] if style[s[0]] is not None else 50 for s in STYLES])
        M = A[[f"s_{s[0]}" for s in STYLES]].fillna(50).to_numpy()
        near = A.iloc[np.argsort(np.linalg.norm(M - vec, axis=1))[:K_SIMILAR]]
        similar = {
            **_summary(near),
            "examples": [
                f"{r['opponent']} de {short_name(r['opp_coach']) if isinstance(r['opp_coach'], str) else 'otro técnico'}, {r['tournament']}"
                for _, r in near.drop_duplicates(["opponent_id_y", "tournament"]).head(4).iterrows()
            ],
        }
        traits = sorted(
            [(sid, p) for sid, p in style.items() if p is not None and abs(p - 50) >= 17],
            key=lambda x: -abs(x[1] - 50),
        )[:3]
        rshort = short_name(coach)
        matches = []
        for _, r in h.iterrows():
            matches.append(
                {
                    "match_id": r["match_id"],
                    "date": r["match_date"],
                    "tournament": r["tournament"],
                    "round": r["round"],
                    "team": r["team"],
                    "opponent": r["opponent"],
                    "is_home": bool(r["is_home"]),
                    "gf": r["gf"],
                    "ga": r["ga"],
                    "result": r["result"],
                    "xg": r["np_xg"],
                    "xgc": r["np_xg_conceded"],
                    "changes": [c["text"] for c in _changes(r, usual, sd)],
                }
            )
        read = _read(short, rshort, h, A, usual, sd, overall, similar)
        recs = _recs(short, rshort, traits, style_by_id, overall, similar)
        rivals.append(
            {
                "key": key,
                "coach": coach,
                "short": rshort,
                "current": is_current,
                "team_now": current.get(coach),
                "teams_faced": sorted(h["opponent"].unique().tolist()),
                **_summary(h),
                "gf": int(h["gf"].sum()),
                "ga": int(h["ga"].sum()),
                "style": [{"id": s[0], "label": s[3], "pct": style[s[0]]} for s in STYLES],
                "style_n": style_n,
                "traits": [
                    {
                        "id": sid,
                        "pct": p,
                        "text": style_by_id[sid]["high"] if p >= 50 else style_by_id[sid]["low"],
                    }
                    for sid, p in traits
                ],
                "similar": similar,
                "matches": matches,
                "read": read,
                "recs": recs,
            }
        )
    rivals.sort(key=lambda r: (not r["current"], -r["n"], r["short"]))
    write_json(
        "rivals.json",
        {
            "coach": me,
            "short": short,
            "overall": overall,
            "styles": by_style,
            "worst": {"id": worst["id"], "label": worst["label"]},
            "k_similar": K_SIMILAR,
            "rivals": rivals,
        },
        ["D-21", "D-25", "D-27"],
    )


def _read(short, rshort, h, A, usual, sd, overall, similar):
    """Por qué batalló (o no) contra ese técnico y qué hizo distinto cuando le ganó. Texto llano."""
    n = len(h)
    if n == 0:
        return {
            "struggle": f"No se han enfrentado en los datos. Contra los {similar['n']} rivales con el estilo más parecido, {short} sacó {_fmt(similar['ppg'], 2)} puntos por partido (su promedio es {_fmt(overall['ppg'], 2)}).",
            "broke": None,
        }
    ppg = _ppg(h)
    rec = _record(h)
    head = f"{n} {'partido' if n == 1 else 'partidos'}: {_join([_count(rec[k], w) for k, w in (('W', 'ganado'), ('D', 'empatado'), ('L', 'perdido')) if rec[k]])}, {_fmt(ppg, 2)} puntos por partido contra {_fmt(overall['ppg'], 2)} de su promedio."
    mean_row = h[list(usual)].mean().to_dict()
    ch = _changes(mean_row, usual, {m: s / np.sqrt(n) for m, s in sd.items()}, top=2, zmin=1.0)
    if ch:
        verb = "En esos partidos" if n > 1 else "Ese día"
        head += f" {verb} {_join([c['text'] for c in ch])}."
    broke = None
    w = h[h["result"] == "W"]
    rest = h[h["result"] != "W"]
    if len(w) and len(rest):
        diffs = []
        for m, (dec, unit, up, down) in CHANGES.items():
            if m in ("np_xg", "np_xg_conceded") or not sd.get(m):
                continue
            wv, rv = w[m].mean(), rest[m].mean()
            z = (wv - rv) / sd[m]
            if abs(z) >= 0.6:
                diffs.append(
                    (
                        abs(z),
                        f"{up if z > 0 else down} ({_fmt(wv, dec)}{_u(unit)} contra {_fmt(rv, dec)} en los demás)",
                    )
                )
        diffs.sort(key=lambda x: -x[0])
        if diffs:
            broke = f"En {'el que ganó' if len(w) == 1 else f'los {len(w)} que ganó'}, {_join([d[1] for d in diffs[:2]])}."
    elif len(w) == n and n > 0:
        broke = f"Le ganó {'el único partido' if n == 1 else 'todos'}."
    return {"struggle": head, "broke": broke}


def _recs(short, rshort, traits, style_by_id, overall, similar):
    """Recomendaciones por rasgo del rival: qué rinde el técnico contra ese estilo y qué palanca le funcionó."""
    staff, rival = [], []
    base = overall["ppg"]
    for sid, p in traits:
        if len(staff) == 2:
            break
        s = style_by_id[sid]
        band = "alto" if p >= 50 else "bajo"
        g = next(x for x in s["groups"] if x["band"] == band)
        trait = s["high"] if band == "alto" else s["low"]
        trait_pl = s["high_pl"] if band == "alto" else s["low_pl"]
        if not g["n"] or g["ppg"] is None:
            continue
        ppda_word = "baja" if g["ppda"] > overall["ppda"] else "sube"
        lv = (g.get("levers") or {}).get("items") or []
        if g["ppg"] <= base - 0.15:
            tip = (
                f" Con el partido empatado, en los que le ganó a rivales así {lv[0]['text']}."
                if lv
                else ""
            )
            staff.append(
                f"Cuidado: {rshort} {trait}. Contra rivales así {short} batalla: saca {_fmt(g['ppg'], 2)} puntos por partido en {g['n']} partidos, y su promedio es {_fmt(base, 2)}.{tip}"
            )
            rival.append(
                f"Insistir en lo suyo: contra rivales que {trait_pl}, {short} concede {_fmt(g['xgc'], 2)} de peligro por partido y su presión {ppda_word}: deja dar {_fmt(g['ppda'], 1)} pases antes de robar (de costumbre {_fmt(overall['ppda'], 1)})."
            )
        elif g["ppg"] >= base + 0.15:
            staff.append(
                f"A favor: {rshort} {trait}. Contra rivales así {short} saca {_fmt(g['ppg'], 2)} puntos por partido en {g['n']} partidos (su promedio es {_fmt(base, 2)}). Jugarle a lo de siempre."
            )
            rival.append(
                f"Cambiarle el plan: contra rivales que {trait_pl}, {short} rinde por encima de su promedio (balance de peligro de {g['xgd']:+.2f} por partido). Repetir lo de siempre le conviene a {short}."
            )
    if not staff and similar["ppg"] is not None:
        diff = similar["ppg"] - base
        tone = (
            "le cuesta más que a la media de sus rivales"
            if diff <= -0.2
            else "le conviene"
            if diff >= 0.2
            else "es un partido de su promedio"
        )
        staff.append(
            f"Ningún rasgo de {rshort} pesa por sí solo, pero su mezcla {tone}: contra los {similar['n']} rivales más parecidos, {short} saca {_fmt(similar['ppg'], 2)} puntos por partido (su promedio es {_fmt(base, 2)}) y concede {_fmt(similar['xgc'], 2)} de peligro por partido."
        )
    return {"staff": staff, "rival": rival}
