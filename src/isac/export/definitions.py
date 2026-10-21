"""definitions.json: parsea las tablas de framework/FRAMEWORK.md."""

import re

from isac.config import ROOT
from isac.export.common import write_json

FRAMEWORK = ROOT / "framework" / "FRAMEWORK.md"


def parse_framework() -> list[dict]:
    rows = []
    section = None
    for line in FRAMEWORK.read_text(encoding="utf-8").splitlines():
        if line.startswith("## "):
            section = line[3:].strip()
            continue
        if not line.startswith("| D-") and not line.startswith("| M-"):
            continue
        cells = [c.strip() for c in line.strip().strip("|").split("|")]
        if len(cells) < 3:
            continue
        row = {"id": cells[0], "section": section}
        if cells[0].startswith("D-"):
            row.update(term=cells[1], definition=cells[2])
            if len(cells) >= 5:
                row.update(threshold=cells[3], implements=cells[4].strip("`"))
            elif len(cells) == 4:
                row.update(implements=cells[3].strip("`"))
        else:
            row.update(block=cells[1], statsbomb=cells[2], own=cells[3] if len(cells) > 3 else "")
        rows.append(row)
    return rows


def export_definitions() -> None:
    rows = parse_framework()
    scope = []
    txt = FRAMEWORK.read_text(encoding="utf-8")
    m = re.search(r"## 0\. Alcance y límites\n(.*?)\n## 1\.", txt, re.DOTALL)
    if m:
        scope = [
            ln.strip("- ").strip() for ln in m.group(1).splitlines() if ln.strip().startswith("-")
        ]
    write_json(
        "definitions.json",
        {"scope": scope, "definitions": rows},
        [r["id"] for r in rows if r["id"].startswith("D-")],
    )
