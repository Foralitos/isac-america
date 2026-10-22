"""Revisión automática de analysis/findings/<clave>.md antes de publicar.

    uv run python analysis/verify_findings.py <clave> [<clave> ...]
    uv run python analysis/verify_findings.py --all

Comprueba que cada hallazgo parsea, trae los campos que lee el dashboard, usa IDs válidos
(bloque, escenario, métrica, definiciones), que el kpi tiene el formato "valor | referencia | unidad |
percentil | etiqueta | tono | etiqueta de la referencia", que la decisión trae Rival y Staff, que no hay
olor a código (asteriscos, backticks, flechas, punto medio) y que los números citados existen en el
export del técnico (redondeados). Los números derivados (dobles, diferencias) no van a cuadrar: por eso
se reporta la proporción y se marca el hallazgo solo si cuadra menos del 60 %.
"""

import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "src"))

from isac.digest import all_numbers  # noqa: E402
from isac.export.common import OUT  # noqa: E402
from isac.export.findings import FINDINGS_DIR, parse_findings  # noqa: E402

BLOCKS = {"M-1", "M-2", "M-3", "M-4", "M-5"}
SCENARIOS = {"localia", "marcador", "momento", "resultado", "tabla", "fase", "ida_vuelta", "rival", "torneo", "equipo"}
TONES = {"favor", "contra", "neutro"}
CODE_SMELL = re.compile(r"\*\*|`|→|⇒|·|_pct\b|\bxgd\b")
NUM = re.compile(r"(?<![\w.])-?\d+(?:[.,]\d+)?(?![\w.])")


def numbers(text: str) -> list[float]:
    out = []
    for raw in NUM.findall(text or ""):
        try:
            out.append(float(raw.replace(",", ".")))
        except ValueError:
            pass
    return out


def check(key: str) -> int:
    folder = OUT / key
    if not (folder / "meta.json").exists():
        print(f"{key}: sin export")
        return 1
    metrics = set()
    defs = {"SB"}
    prof = json.loads((folder / "profile.json").read_text())
    for ms in prof["blocks"].values():
        for m in ms:
            metrics.add(m["metric"])
            defs.update(m.get("definitions", []))
    defs.update(d["id"] for d in json.loads((OUT / "global" / "definitions.json").read_text())["definitions"])
    # Métricas de los cortes por 90 min (marcador, momento) y de jugadores que no están en el perfil.
    extra_metrics = {"first_sub_minute", "tactical_shifts", "formation", "record", "xi_stability", "subs_per_match", "possession_pct", "gf", "ga", "xg_conceded", "shots", "shots_conceded", "crosses", "pressures", "counterpressures", "box_entries", "opp_box_entries", "prog_passes", "prog_carries", "transition_shots", "transition_xg", "recoveries_high", "losses", "pressures_final_third"}
    nums = all_numbers(key)
    rows = parse_findings(key)
    if not rows:
        print(f"{key}: SIN HALLAZGOS ({FINDINGS_DIR / (key + '.md')})")
        return 1
    problems = 0
    sections = {"identidad": 0, "escenario": 0, "M-4": 0, "M-5": 0}
    for i, f in enumerate(rows, 1):
        issues = []
        fl = f["fields"]
        for req in ("bloque", "cifra", "kpi", "definiciones", "decision"):
            if not fl.get(req):
                issues.append(f"falta {req}")
        if fl.get("bloque") and fl["bloque"] not in BLOCKS:
            issues.append(f"bloque inválido {fl['bloque']}")
        if fl.get("escenario") and fl["escenario"] not in SCENARIOS:
            issues.append(f"escenario inválido {fl['escenario']}")
        if fl.get("metrica") and fl["metrica"] not in metrics | extra_metrics:
            issues.append(f"métrica desconocida {fl['metrica']}")
        bad_defs = [d for d in fl.get("definiciones", []) if d not in defs]
        if bad_defs:
            issues.append(f"definiciones desconocidas {bad_defs}")
        kpi = [s.strip() for s in (fl.get("kpi") or "").split("|")]
        if fl.get("kpi"):
            if len(kpi) not in (6, 7):
                issues.append(f"kpi con {len(kpi)} partes (deben ser 6 o 7)")
            else:
                if not numbers(kpi[0]):
                    issues.append("kpi sin valor numérico")
                if kpi[3] and not re.fullmatch(r"\d{1,3}", kpi[3]):
                    issues.append(f"kpi percentil raro '{kpi[3]}'")
                if kpi[5] not in TONES:
                    issues.append(f"kpi tono '{kpi[5]}' (favor|contra|neutro)")
        dec = fl.get("decision") or ""
        if "Rival" not in dec or "Staff" not in dec:
            issues.append("decisión sin Rival/Staff")
        visible = " ".join([f["title"], f["text"], dec, kpi[4] if len(kpi) > 4 else ""])
        if CODE_SMELL.search(visible):
            issues.append("olor a código en texto visible (asteriscos, backticks, flechas, punto medio o nombre de campo)")
        if len(f["title"]) < 30 or (not numbers(f["title"]) and len(f["title"]) < 45):
            issues.append("título genérico: debe traer una cifra o una afirmación concreta (evitar generalidades)")
        if not f["text"] or len(f["text"]) < 80:
            issues.append("párrafo libre corto o ausente (menos de 80 caracteres)")
        cited = numbers(fl.get("cifra", "")) + numbers(kpi[0] if kpi else "") + numbers(kpi[1] if len(kpi) > 1 else "")
        # Años (2021-2027) y ceros no cuentan como cifras a cruzar.
        cited = [c for c in cited if c != 0 and not (2020 <= c <= 2027 and float(c).is_integer())]
        if cited:
            ok = sum(1 for c in cited if any(round(c, d) in nums for d in (0, 1, 2)))
            ratio = ok / len(cited)
            if ratio < 0.6:
                missing = [c for c in cited if not any(round(c, d) in nums for d in (0, 1, 2))]
                issues.append(f"solo {ok}/{len(cited)} números cuadran con el export; no encontrados: {missing[:8]}")
        if fl.get("escenario"):
            sections["escenario"] += 1
        else:
            sections["identidad"] += 1
        if fl.get("bloque") in ("M-4", "M-5"):
            sections[fl["bloque"]] += 1
        if issues:
            problems += 1
            print(f"  [{i:2d}] {f['title'][:70]}")
            for x in issues:
                print(f"        - {x}")
    cover = f"identidad {sections['identidad']}, con escenario {sections['escenario']}, balón parado {sections['M-4']}, jugadores {sections['M-5']}"
    print(f"{key}: {len(rows)} hallazgos ({cover}); {problems} con observaciones")
    if sections["M-4"] < 2 or sections["M-5"] < 2 or sections["escenario"] < 5 or sections["identidad"] < 5:
        print("  COBERTURA BAJA: se esperan al menos 5 de identidad, 5 con escenario, 2 de balón parado y 2 de jugadores")
        problems += 1
    return problems


if __name__ == "__main__":
    args = sys.argv[1:]
    if not args:
        print(__doc__)
        sys.exit(1)
    keys = [p.name for p in OUT.iterdir() if p.is_dir() and p.name != "global"] if "--all" in args else args
    total = 0
    for k in sorted(keys):
        total += check(k)
    sys.exit(1 if total else 0)
