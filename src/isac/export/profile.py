"""profile.json: identidad del técnico, todas las métricas del registro con percentil de liga."""

from isac.export.baseline import summarize
from isac.export.common import metric_meta, write_json
from isac.metrics.registry import METRICS


def export_profile(rows, baseline, name="profile.json", extra=None):
    metrics = list(METRICS)
    summary = summarize(rows, baseline, metrics)
    by_block = {}
    for s in summary:
        meta = metric_meta(s["metric"])
        by_block.setdefault(meta["block"], []).append({**meta, **s})
    defs = sorted({d for s in summary for d in METRICS[s["metric"]][2]})
    payload = {
        "n_matches": int(rows["match_id"].nunique()),
        "record": {k: int((rows["result"] == k).sum()) for k in "WDL"},
        "blocks": by_block,
        **(extra or {}),
    }
    write_json(name, payload, defs)
    return summary
