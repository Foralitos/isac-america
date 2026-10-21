
import { level, metricLabel, pctSentence, techLabel, valueOnly, valueWithUnit } from "@/libs/words";

// Una barra por métrica que sale del centro: a la derecha si hace más que la liga, a la izquierda si hace menos.
// La diferencia va escrita en porcentaje. Azul le favorece, naranja le pesa, tinta si solo describe.
export function deltaRows(rows) {
  return rows
    .filter((m) => m.value != null && m.league_mean)
    .map((m) => ({ ...m, delta: ((m.value - m.league_mean) / Math.abs(m.league_mean)) * 100 }))
    .sort((a, b) => Math.abs(b.delta) - Math.abs(a.delta));
}

function Row({ m, scale }) {
  const good = m.direction === 0 ? null : (m.pct_good ?? 50) >= 50;
  const color = good === null ? "var(--ink-2)" : good ? "var(--almada)" : "var(--contra)";
  const w = Math.min(50, (Math.abs(m.delta) / scale) * 50);
  const sign = m.delta > 0 ? "+" : m.delta < 0 ? "−" : "";
  return (
    <li className="tip py-3" tabIndex={0}>
      <div className="flex items-baseline justify-between gap-4">
        <p className="text-sm text-ink leading-snug">{metricLabel(m)}</p>
        <p className="text-sm font-semibold num shrink-0" style={{ color }}>
          {sign}
          {Math.abs(m.delta).toFixed(0)} %
        </p>
      </div>
      <p className="text-xs text-ink-3 mt-0.5 num">
        {valueWithUnit(m.value, m.unit, { pctOf: "" })}, liga {valueOnly(m.league_mean, m.unit)}
      </p>
      <div className="relative h-4 mt-1.5">
        <div className="absolute inset-y-1/2 left-0 right-0 h-px bg-line" />
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-ink-3" />
        <div className="absolute top-1/2 -translate-y-1/2 h-2.5 rounded-sm" style={{ left: m.delta >= 0 ? "50%" : `${50 - w}%`, width: `${Math.max(w, 0.5)}%`, background: color }} />
      </div>
      <div className="tip-box">
        <p className="font-semibold">
          {metricLabel(m)}
          {techLabel(m) && <span className="opacity-70 font-normal"> ({techLabel(m)})</span>}
        </p>
        <p>
          {pctSentence(m.pct)}: {level(m.pct)}.
        </p>
      </div>
    </li>
  );
}

export default function DeltaBars({ rows, show = 6 }) {
  const all = deltaRows(rows);
  const scale = Math.max(10, Math.min(100, ...[Math.max(...all.map((r) => Math.abs(r.delta)))]));
  const head = all.slice(0, show);
  const rest = all.slice(show);
  return (
    <div>
      <div className="flex justify-between text-[11px] text-ink-3 pb-1.5 border-b border-line-2">
        <span>hace menos que la liga</span>
        <span>media de la liga</span>
        <span>hace más que la liga</span>
      </div>
      <ul className="divide-y divide-line-2">
        {head.map((m) => (
          <Row key={m.metric} m={m} scale={scale} />
        ))}
      </ul>
      {rest.length > 0 && (
        <details className="explore mt-2">
          <summary className="text-xs text-almada hover:underline inline-flex items-center gap-1">
            <span className="chev inline-block">›</span> Ver las otras {rest.length}
          </summary>
          <ul className="divide-y divide-line-2 border-t border-line-2 mt-1">
            {rest.map((m) => (
              <Row key={m.metric} m={m} scale={scale} />
            ))}
          </ul>
        </details>
      )}
    </div>
  );
}
