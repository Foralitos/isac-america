"""Digest en texto de data/out/<clave>/ para redactar hallazgos sin leer JSON crudo.

    uv run python -m isac.digest <clave>            imprime el digest
    uv run python -m isac.digest <clave> --numbers  imprime todos los números del export (para verificar cifras)

Todo lo que sale aquí viene del export; no calcula nada nuevo salvo medias por torneo y récords, que
se derivan de matches.json. Pensado para que quien redacte los hallazgos (persona o agente) tenga en un
solo lugar: perfil vs liga, qué se mueve por escenario, jugadores y cambios, balón parado y partidos.
"""

import json
import sys
from collections import Counter, defaultdict
from pathlib import Path

from isac.export.common import OUT


def load(folder: Path, name: str):
    p = folder / name
    return json.loads(p.read_text()) if p.exists() else None


def f1(v, d=1):
    if v is None:
        return "—"
    return f"{v:.{d}f}"


def lvl(pct):
    if pct is None:
        return ""
    if pct >= 90:
        return "de los más altos"
    if pct >= 75:
        return "arriba"
    if pct > 25:
        return "como la liga"
    if pct > 10:
        return "abajo"
    return "de los más bajos"


def fmt_metric(m):
    u = m.get("unit", "")
    return f"{m['metric']:28s} {f1(m['value'], 2):>7} vs liga {f1(m.get('league_mean'), 2):>6}  p{f1(m.get('pct'), 0):>3}  {lvl(m.get('pct')):18s} {m.get('label', '')} [{u}] dir={m.get('direction')} n={m.get('n')}"


def section(t):
    print(f"\n{'=' * 100}\n{t}\n{'=' * 100}")


def digest(key: str) -> None:
    folder = OUT / key
    meta = load(folder, "meta.json")
    if not meta:
        raise SystemExit(f"no hay export en {folder}")
    profile = load(folder, "profile.json")
    players = load(folder, "players.json")
    sp = load(folder, "set_pieces.json")
    matches = load(folder, "matches.json")
    matches = matches["matches"] if isinstance(matches, dict) and "matches" in matches else matches
    league = load(OUT / "global", "league.json")

    section(f"TÉCNICO: {meta['coach']} ({meta['short']}) clave={meta['key']}")
    r = meta["record"]
    print(f"{meta['n_matches']} partidos, récord {r['W']}-{r['D']}-{r['L']}, del {meta['period']['from']} al {meta['period']['to']}")
    for t in meta["teams"]:
        print(f"  {t['team']}: {t['n']} partidos ({t['desde']} a {t['hasta']})")
    print(f"Línea base: {meta.get('league_units')} medias de equipo-torneo de la Liga MX. Percentil p90 = más alto que el 90 % de ellas.")
    if meta["n_matches"] < 30:
        print(f"MUESTRA CHICA: solo {meta['n_matches']} partidos. Decirlo en cada hallazgo y evitar cortes con menos de 6 partidos.")

    section("PERFIL VS LIGA (todas las métricas, por bloque; pct = percentil del valor, pct_good = percentil 'bueno' según dirección)")
    for b, ms in profile["blocks"].items():
        print(f"\n-- {b}")
        for m in sorted(ms, key=lambda x: -abs((x.get("pct") or 50) - 50)):
            print("  " + fmt_metric(m))

    chapters = sorted(folder.glob("profile_*.json"))
    if len(chapters) > 1:
        section("POR EQUIPO: métricas donde un equipo se aparta 15+ puntos de percentil del total del técnico")
        overall = {m["metric"]: m for ms in profile["blocks"].values() for m in ms}
        for ch in chapters:
            d = json.loads(ch.read_text())
            print(f"\n-- {d.get('team')} ({d.get('n_matches')} partidos, récord {d['record']['W']}-{d['record']['D']}-{d['record']['L']})")
            rows = []
            for ms in d["blocks"].values():
                for m in ms:
                    o = overall.get(m["metric"])
                    if o and m.get("pct") is not None and o.get("pct") is not None and abs(m["pct"] - o["pct"]) >= 15:
                        rows.append((abs(m["pct"] - o["pct"]), m, o))
            for _, m, o in sorted(rows, key=lambda x: -x[0])[:25]:
                print(f"  {m['metric']:28s} {f1(m['value'], 2):>7} (p{f1(m['pct'], 0)})  total técnico {f1(o['value'], 2)} (p{f1(o['pct'], 0)})  {m.get('label', '')}")

    section("ESCENARIOS: por cada escenario, récord por categoría y las métricas que más se mueven entre categorías")
    for sf in sorted((folder / "scenarios").glob("*.json")):
        s = json.loads(sf.read_text())
        name = sf.stem
        if "categories" not in s:
            continue
        cats = [c for c in s["categories"] if c.get("metrics")]
        print(f"\n-- escenario={name}")
        for c in cats:
            rec = c.get("record") or {}
            mins = f", {c['minutes']:.0f} min" if c.get("minutes") else ""
            print(f"   {c['category']:22s} n={c['n']:3d}{mins}  récord {rec.get('W', '—')}-{rec.get('D', '—')}-{rec.get('L', '—')}" + ("  (MUESTRA CHICA)" if c["n"] < 8 else ""))
        by_metric = defaultdict(dict)
        info = {}
        for c in cats:
            for m in c["metrics"]:
                by_metric[m["metric"]][c["category"]] = m
                info[m["metric"]] = m
        rows = []
        for metric, per in by_metric.items():
            pcts = [m["pct"] for m in per.values() if m.get("pct") is not None]
            if len(pcts) >= 2:
                rows.append((max(pcts) - min(pcts), metric))
        for spread, metric in sorted(rows, reverse=True)[:18]:
            per = by_metric[metric]
            cells = "  ".join(f"{cat}={f1(per[cat]['value'], 2)} (p{f1(per[cat].get('pct'), 0)})" for cat in per)
            print(f"   {metric:26s} liga {f1(info[metric].get('league_mean'), 2):>6}  {info[metric].get('label', '')}\n      {cells}")

    mxt = load(folder / "scenarios", "marcador_x_tabla.json")
    if mxt:
        section("MARCADOR × SITUACIÓN EN LA TABLA (por 90 min en cada estado; n_matches = partidos con minutos en ese estado)")
        keys = ["np_xg", "shots", "xg_conceded", "shots_conceded", "pressures", "counterpressures", "transition_shots", "transition_xg", "box_entries", "opp_box_entries", "prog_passes", "crosses"]
        for row in mxt.get("by_stakes", []):
            print(f"\n-- {row['label']} ({row['stakes']})")
            for st, v in row["states"].items():
                if not v or not v.get("minutes"):
                    continue
                vals = "  ".join(f"{k}={f1(v.get(k), 2)}" for k in keys if v.get(k) is not None)
                print(f"   {st:10s} {v['minutes']:.0f} min en {v['n_matches']} partidos: {vals}")
        for row in mxt.get("by_home", []):
            print(f"\n-- localía={row['localia']}")
            for st, v in row["states"].items():
                if not v or not v.get("minutes"):
                    continue
                vals = "  ".join(f"{k}={f1(v.get(k), 2)}" for k in keys if v.get(k) is not None)
                print(f"   {st:10s} {v['minutes']:.0f} min en {v['n_matches']} partidos: {vals}")

    if players:
        section("JUGADORES Y CAMBIOS")
        fm = players["formations"]
        n = players["n_matches"]
        print("Dibujo inicial:", ", ".join(f"{x['formation']} en {x['n']} ({100 * x['n'] / n:.0f} %)" for x in fm["start_mix"]))
        print(f"Partidos con cambio real de dibujo: {fm.get('matches_with_change')} de {n}")
        for t in fm.get("by_tournament", []):
            print(f"   {t['tournament']:16s} " + ", ".join(f"{k}×{v}" for k, v in sorted(t["mix"].items(), key=lambda kv: -kv[1])))
        xi = players["xi"]
        print(f"\nOnce: estabilidad Jaccard {xi['stability_jaccard']:.2f}; {xi['changes_per_match']:.1f} titulares distintos de un partido al siguiente; núcleo = titular en {xi['core_threshold_pct']:.0f} % o más")
        print("Más usados (titularidades, % de partidos, minutos, rol principal):")
        for p in sorted(xi["players"], key=lambda p: -p["minutes"])[:16]:
            role = p["roles"][0]["position"] if p.get("roles") else ""
            print(f"   {p['player']:38s} {p['starts']:3d} tit ({p['start_pct']:.0f} %) {p['minutes']:6.0f} min  {role}{'  NÚCLEO' if p.get('core') else ''}")
        for t in xi.get("core_by_tournament", []):
            core = ", ".join(f"{c['player'].split()[0]} {c['player'].split()[-1]}" for c in t["core"][:8])
            print(f"   núcleo {t['tournament']:16s} ({t['n_matches']} pj, {len(t['core'])} jugadores): {core}")
        s = players["subs"]
        print(f"\nCambios: {s['per_match']:.1f} por partido; motivos {s.get('reasons')}")
        for r in s.get("first_sub_by_state", []):
            print(f"   primer cambio {r['label']:12s} n={r['n']:3d} media {r['mean_minute']:.1f}' mediana {r['median_minute']:.0f}'")
        for r in s.get("first_sub_by_stakes", []):
            print(f"   primer cambio {r['label']:26s} n={r['n']:3d} media {r['mean_minute']:.1f}'")
        for r in s.get("first_sub_by_home", []):
            print(f"   primer cambio {r['label']:12s} n={r['n']:3d} media {r['mean_minute']:.1f}'")
        for st, v in (s.get("all_subs_by_state") or {}).items():
            print(f"   todos los cambios {st:10s} n={v['n']:4d} minuto medio {v['mean_minute']:.1f}'")
        pos = defaultdict(list)
        for r in s.get("position_out_by_state", []):
            pos[r["state"]].append(f"{r['position_out']} ({r['n']})")
        for st, lst in pos.items():
            print(f"   a quién saca {st:10s}: {', '.join(lst[:6])}")
        print("Impacto del primer cambio (por 15 min antes vs después):")
        for st, i in (s.get("first_sub_impact") or {}).items():
            print(f"   {st:10s} n={i['n']:3d} xG {i['before_xg']:.2f}→{i['after_xg']:.2f}  xG conc {i['before_xg_conceded']:.2f}→{i['after_xg_conceded']:.2f}  tiros {i['before_shots']:.1f}→{i['after_shots']:.1f}  PPDA {i['before_ppda_own']:.1f}→{i['after_ppda_own']:.1f}  field tilt {i['before_field_tilt']:.0f}→{i['after_field_tilt']:.0f}  altura presión {i['before_press_height']:.0f}→{i['after_press_height']:.0f}")
        print("Dibujo por marcador y tramo (minutos jugados en cada formación; solo los dos principales):")
        for c in players["clock"]["cells"]:
            top = sorted(c["formations"].items(), key=lambda kv: -kv[1])[:2]
            tot = sum(c["formations"].values()) or 1
            print(f"   {c['state']:10s} tramo {c['bucket']:>3}: " + ", ".join(f"{k} {100 * v / tot:.0f} %" for k, v in top) + f"  ({c['minutes']:.0f} min, {c['subs']} cambios)")

    if sp:
        section("BALÓN PARADO (totales de todos los partidos)")
        b = sp["board"]
        n = sp["n_matches"]
        for k in ["corners_for", "corners_against", "free_kicks_for", "free_kicks_against", "throwins_for", "throwins_against"]:
            v = b.get(k) or {}
            extra = f", {v['direct_n']} directos" if v.get("direct_n") is not None else ""
            extra += f", retiene {v['retained_pct']} %" if v.get("retained_pct") is not None else ""
            print(f"\n{k}: {v.get('n')} ({v.get('n', 0) / n:.1f} por partido), {v.get('goals')} goles" + (f", xG {v['xg']:.1f}" if v.get("xg") is not None else "") + extra)
            for bd in sorted(v.get("bundles", []), key=lambda x: -x["n"])[:7]:
                print(f"   {bd.get('side', ''):10s} {bd.get('delivery', ''):12s} {bd.get('zone', ''):13s} n={bd['n']:4d} tiros={bd.get('shots', 0):.0f} xG={bd.get('xg', 0):.2f} goles={bd.get('goals', 0):.0f}")
        for k in ["shots_for", "shots_against"]:
            v = b.get(k) or {}
            tot = {t: (sum(c["n"] for c in cells), sum(c["xg"] for c in cells), sum(c["goals"] for c in cells)) for t, cells in (v.get("by_type") or {}).items()}
            print(f"\n{k}: {v.get('n')} tiros de balón parado; por tipo: " + "; ".join(f"{t} {a} tiros, xG {x:.1f}, {g} goles" for t, (a, x, g) in tot.items()))
        if len(sp.get("by_team", {})) > 1:
            print("\nPor equipo:")
            for team, v in sp["by_team"].items():
                cf, ca = v.get("corners_for", {}), v.get("corners_against", {})
                print(f"   {team:18s} {v.get('n_matches')} pj: córners {cf.get('n')} ({cf.get('goals')} goles) vs en contra {ca.get('n')} ({ca.get('goals')} goles)")

    if matches:
        section("PARTIDOS (de matches.json): por torneo, rachas, extremos, rivales")
        by_t = defaultdict(list)
        for m in matches:
            by_t[m["tournament"]].append(m)
        for t, ms in by_t.items():
            W = sum(m["result"] == "W" for m in ms)
            D = sum(m["result"] == "D" for m in ms)
            L = sum(m["result"] == "L" for m in ms)
            gf = sum(m["gf"] for m in ms)
            ga = sum(m["ga"] for m in ms)
            mean = lambda k: sum((m.get(k) or 0) for m in ms) / len(ms)
            pos = [m["pos_before"] for m in ms if m.get("pos_before") is not None and m.get("phase_kind") == "regular"]
            forms = Counter(m.get("formation") for m in ms).most_common(2)
            print(f"   {t:16s} {ms[0]['team']:18s} {len(ms):2d} pj {W}-{D}-{L} GF {gf} GA {ga}  xG {mean('np_xg'):.2f} / conc {mean('np_xg_conceded'):.2f}  PPDA {mean('ppda_own'):.1f}  pos {mean('possession_pct'):.0f} %  tilt {mean('field_tilt'):.0f}  regates {mean('dribbles'):.1f}  1er cambio {mean('first_sub_minute'):.0f}'  posición antes: {pos[:1]}→{pos[-1:]}  dibujos {forms}")
        best = sorted(matches, key=lambda m: -(m.get("xgd") or 0))[:5]
        worst = sorted(matches, key=lambda m: (m.get("xgd") or 0))[:5]
        print("\nMejores partidos por diferencia de peligro:")
        for m in best:
            print(f"   {m['match_date'][:10]} {m['team']} {'local' if m['is_home'] else 'visita'} vs {m['opponent']} {m['gf']}-{m['ga']}  xG {m['np_xg']:.2f}-{m['np_xg_conceded']:.2f}  ({m['tournament']}, {m.get('stakes')})")
        print("Peores:")
        for m in worst:
            print(f"   {m['match_date'][:10]} {m['team']} {'local' if m['is_home'] else 'visita'} vs {m['opponent']} {m['gf']}-{m['ga']}  xG {m['np_xg']:.2f}-{m['np_xg_conceded']:.2f}  ({m['tournament']}, {m.get('stakes')})")
        # rachas
        seq = [m["result"] for m in matches]
        best_run = run = 0
        worst_run = wrun = 0
        for x in seq:
            run = run + 1 if x == "W" else 0
            wrun = wrun + 1 if x == "L" else 0
            best_run, worst_run = max(best_run, run), max(worst_run, wrun)
        unbeaten = u = 0
        for x in seq:
            u = u + 1 if x != "L" else 0
            unbeaten = max(unbeaten, u)
        print(f"\nRachas: {best_run} victorias seguidas, {unbeaten} sin perder, {worst_run} derrotas seguidas")
        # resultados vs xG: partidos que ganó siendo superado en xG y viceversa
        stole = sum(1 for m in matches if m["result"] == "W" and (m.get("xgd") or 0) < -0.3)
        robbed = sum(1 for m in matches if m["result"] == "L" and (m.get("xgd") or 0) > 0.3)
        print(f"Ganó con menos peligro que el rival (xGD < -0.3): {stole} partidos; perdió creando más (xGD > 0.3): {robbed}")
        # rivales
        rc = defaultdict(lambda: [0, 0, 0, 0.0, 0.0])
        for m in matches:
            k = m.get("opp_coach") or "?"
            rc[k][{"W": 0, "D": 1, "L": 2}[m["result"]]] += 1
            rc[k][3] += m.get("np_xg") or 0
            rc[k][4] += m.get("np_xg_conceded") or 0
        print("\nTécnicos rivales más enfrentados (récord, xG medio a favor / en contra):")
        for k, v in sorted(rc.items(), key=lambda kv: -sum(kv[1][:3]))[:10]:
            n_ = sum(v[:3])
            print(f"   {k:40s} {n_:2d} pj {v[0]}-{v[1]}-{v[2]}  xG {v[3] / n_:.2f} / {v[4] / n_:.2f}")
        oc = defaultdict(lambda: [0, 0, 0])
        for m in matches:
            oc[m["opponent"]][{"W": 0, "D": 1, "L": 2}[m["result"]]] += 1
        print("Rivales (equipo) con peor récord del técnico:")
        for k, v in sorted(oc.items(), key=lambda kv: (kv[1][0] - kv[1][2]) / max(1, sum(kv[1])))[:6]:
            print(f"   {k:20s} {v[0]}-{v[1]}-{v[2]}")
        ts = sum((m.get("tactical_shifts") or 0) for m in matches)
        print(f"\nCambios de dibujo en el partido: {ts} en {len(matches)} partidos ({ts / len(matches):.2f} por partido); partidos sin primer cambio: {sum(1 for m in matches if m.get('first_sub_minute') is None)}")

    if league:
        section("LIGA (media, sd, p25, p50, p75 de las 198 medias de equipo-torneo), para contexto")
        for k, v in league["metrics"].items():
            print(f"   {k:28s} media {f1(v.get('mean'), 2):>6} sd {f1(v.get('sd'), 2):>5}  p25 {f1(v.get('p25'), 2):>6} p50 {f1(v.get('p50'), 2):>6} p75 {f1(v.get('p75'), 2):>6}")


def all_numbers(key: str) -> set:
    """Todos los números del export del técnico, redondeados a 0, 1 y 2 decimales (y ×100 para proporciones)."""
    out = set()

    def walk(o):
        if isinstance(o, dict):
            for v in o.values():
                walk(v)
        elif isinstance(o, list):
            for v in o:
                walk(v)
        elif isinstance(o, (int, float)) and not isinstance(o, bool):
            for d in (0, 1, 2):
                out.add(round(o, d))
            if 0 <= o <= 1:
                for d in (0, 1):
                    out.add(round(o * 100, d))

    for p in (OUT / key).rglob("*.json"):
        walk(json.loads(p.read_text()))
    return out


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)
    if "--numbers" in sys.argv:
        print("\n".join(str(x) for x in sorted(all_numbers(sys.argv[1]))))
    else:
        digest(sys.argv[1])
