"""findings.json: hallazgos redactados a mano en analysis/findings/<coach_key>.md.
Formato por hallazgo (bloques separados por '### '):
### <título>
- bloque: M-1
- escenario: tabla | localia | ...   (opcional)
- metrica: ppda_own                  (opcional)
- cifra: "8.8 vs 11.1 de liga"
- definiciones: D-05b, D-23
- decision: "..."
<párrafo libre>
"""

import re

from isac.config import ROOT
from isac.export.common import write_json

FINDINGS_DIR = ROOT / "analysis" / "findings"


def findings_path(coach_key: str):
    return FINDINGS_DIR / f"{coach_key}.md"


def parse_findings(coach_key: str) -> list[dict]:
    path = findings_path(coach_key)
    if not path.exists():
        return []
    txt = path.read_text(encoding="utf-8")
    out = []
    for chunk in re.split(r"^### ", txt, flags=re.MULTILINE)[1:]:
        title, _, body = chunk.partition("\n")
        f = {"title": title.strip(), "fields": {}, "text": ""}
        free = []
        for ln in body.splitlines():
            m = re.match(r"^- (\w+): (.*)$", ln.strip())
            if m:
                f["fields"][m.group(1)] = m.group(2).strip().strip('"')
            elif ln.strip() and not ln.lstrip().startswith("#"):
                # Los encabezados de sección (## ...) separan hallazgos, no son texto.
                free.append(ln.strip())
        f["text"] = " ".join(free)
        if "definiciones" in f["fields"]:
            f["fields"]["definiciones"] = [
                d.strip() for d in f["fields"]["definiciones"].split(",")
            ]
        out.append(f)
    return out


def export_findings(coach_key: str) -> None:
    rows = parse_findings(coach_key)
    defs = sorted({d for r in rows for d in r["fields"].get("definiciones", [])})
    write_json("findings.json", {"findings": rows}, defs)
