import { level, metricLabel, pctSentence, techLabel, valueOnly, valueWithUnit } from "@/libs/words";

// Las métricas donde más se separa de la liga, como tarjetas: cifra grande, una frase, y Almada contra liga en dos barras.
export default function HuellaTiles({ rows, name = "Técnico" }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {rows.map((m) => {
        const good = m.direction === 0 ? null : (m.pct_good ?? 50) >= 50;
        const color = good === null ? "text-ink" : good ? "text-almada" : "text-contra";
        const bar = good === null ? "bg-ink-2" : good ? "bg-almada" : "bg-contra";
        const max = Math.max(m.value ?? 0, m.league_mean ?? 0) || 1;
        return (
          <div key={m.metric} className="bg-surface border border-line rounded-lg p-5 flex flex-col" title={techLabel(m) ? `En términos técnicos: ${techLabel(m)}` : undefined}>
            <p className="text-sm text-ink leading-snug">{metricLabel(m)}</p>
            <p className={`display text-4xl mt-2 ${color}`}>{valueOnly(m.value, m.unit)}</p>
            <p className="text-xs text-ink-3 mt-1">{valueWithUnit(m.value, m.unit).replace(/^[\d.,]+ (% )?/, "") || "de las veces"}</p>
            <p className="text-sm text-ink-2 mt-3 leading-snug">
              {pctSentence(m.pct)}: <span className="font-medium text-ink">{level(m.pct)}</span>.
            </p>
            <div className="mt-auto pt-4 space-y-1.5 text-[11px] text-ink-3">
              <div className="grid grid-cols-[3rem_minmax(0,1fr)_2.5rem] items-center gap-2">
                <span className="text-ink truncate">{name}</span>
                <span className="h-2 rounded-sm bg-line-2 overflow-hidden">
                  <span className={`block h-full ${bar}`} style={{ width: `${((m.value ?? 0) / max) * 100}%` }} />
                </span>
                <span className="num text-right text-ink">{valueOnly(m.value, m.unit)}</span>
              </div>
              <div className="grid grid-cols-[3rem_minmax(0,1fr)_2.5rem] items-center gap-2">
                <span>liga</span>
                <span className="h-2 rounded-sm bg-line-2 overflow-hidden">
                  <span className="block h-full bg-liga" style={{ width: `${((m.league_mean ?? 0) / max) * 100}%` }} />
                </span>
                <span className="num text-right">{valueOnly(m.league_mean, m.unit)}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
