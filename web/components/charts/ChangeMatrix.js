import { barColor, fmt, SMALL_N } from "@/libs/format";
import { metricLabel, pctSentence, techLabel, unitLabel } from "@/libs/words";

// Las métricas que más cambian entre categorías de un escenario, en una sola figura:
// fila = métrica, columna = categoría, celda = valor con barra proporcional y color por percentil.
export function rankMetrics(cats, { limit = 6 } = {}) {
  let elig = cats.filter((c) => (c.n ?? 0) >= SMALL_N);
  if (elig.length < 2) elig = cats;
  const byMetric = new Map();
  for (const c of elig) {
    for (const m of c.metrics ?? []) {
      if (m.value == null || m.pct == null) continue;
      if (!byMetric.has(m.metric)) byMetric.set(m.metric, { meta: m, pcts: [] });
      byMetric.get(m.metric).pcts.push(m.pct);
    }
  }
  const rows = [];
  for (const [metric, { meta, pcts }] of byMetric) {
    if (pcts.length < elig.length) continue;
    if (metric.startsWith("seq_lane") || metric.startsWith("seq_start")) continue;
    rows.push({ metric, meta, range: Math.max(...pcts) - Math.min(...pcts) });
  }
  rows.sort((a, b) => b.range - a.range);
  return rows.slice(0, limit);
}

export default function ChangeMatrix({ cats, labelOf, limit = 6 }) {
  const rows = rankMetrics(cats, { limit });
  if (!rows.length) return <p className="text-sm text-ink-2">No hay suficientes partidos para comparar.</p>;
  const cols = cats;
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-separate border-spacing-0">
        <thead>
          <tr>
            <th className="text-left font-normal text-xs text-ink-3 pb-2 pr-4 align-bottom">Métrica</th>
            {cols.map((c) => (
              <th key={c.category} className="text-left font-normal pb-2 px-3 align-bottom min-w-[7.5rem]">
                <span className={`block text-sm ${(c.n ?? 0) < SMALL_N ? "text-ink-3" : "text-ink font-medium"}`}>{labelOf(c)}</span>
                <span className="block text-[11px] text-ink-3 num">
                  {c.minutes ? `${Math.round(c.minutes).toLocaleString("es-MX")} min` : `${c.n} partidos`}
                  {(c.n ?? 0) < SMALL_N && !c.minutes ? ", muestra chica" : ""}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(({ metric, meta }) => {
            const vals = cols.map((c) => c.metrics.find((x) => x.metric === metric));
            const max = Math.max(...vals.map((v) => v?.value ?? 0), meta.league_mean ?? 0) || 1;
            return (
              <tr key={metric} className="border-t border-line-2">
                <td className="py-3 pr-4 border-t border-line-2 align-top">
                  <p className="text-ink leading-snug" title={techLabel(meta) ? `En términos técnicos: ${techLabel(meta)}` : undefined}>{metricLabel(meta)}</p>
                  <p className="text-[11px] text-ink-3 mt-0.5">
                    {unitLabel(meta.unit)}
                    {meta.league_mean != null && <>. Liga {fmt(meta.league_mean, meta.unit)}</>}
                  </p>
                </td>
                {vals.map((v, i) => {
                  const c = cols[i];
                  const d = { value: v?.value, n: c.minutes ? null : c.n, direction: meta.direction, pct_good: v?.pct_good };
                  return (
                    <td key={c.category} className="py-3 px-3 border-t border-line-2 align-top">
                      <p className="num font-semibold text-ink leading-none" title={v?.pct != null ? pctSentence(v.pct) : undefined}>
                        {fmt(v?.value, meta.unit)}
                      </p>
                      <div className="relative h-1.5 mt-1.5 bg-line-2 rounded-sm overflow-visible">
                        <div className="absolute inset-y-0 left-0 rounded-sm" style={{ width: `${Math.max(2, ((v?.value ?? 0) / max) * 100)}%`, background: barColor(d) }} />
                        {meta.league_mean != null && <div className="absolute -top-0.5 -bottom-0.5 w-px bg-liga" style={{ left: `${Math.min(100, (meta.league_mean / max) * 100)}%` }} />}
                      </div>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-ink-3 mt-3">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-3 rounded-sm bg-almada" /> le favorece frente a la liga
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-3 rounded-sm bg-contra" /> le pesa
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-3 w-px bg-liga" /> media de la liga
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-3 rounded-sm bg-line" /> muestra chica, solo orientativo
        </span>
      </p>
    </div>
  );
}
