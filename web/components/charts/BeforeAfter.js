import { fmt } from "@/libs/format";

// Antes y después por métrica: dos barras cortas (antes gris, después azul), los valores a la derecha
// y un chip con la diferencia que ya dice si le conviene.
export default function BeforeAfter({ rows, beforeLabel = "15 minutos antes del cambio", afterLabel = "15 minutos después" }) {
  const max = Math.max(...rows.flatMap((r) => [r.before ?? 0, r.after ?? 0])) || 1;
  return (
    <div>
      <ul className="space-y-4">
        {rows.map((r) => {
          const delta = r.before != null && r.after != null ? r.after - r.before : null;
          const good = delta == null || !r.direction ? null : delta * r.direction > 0;
          const abs = delta == null ? null : Math.abs(delta);
          const word = delta == null ? "" : abs < (r.unit === "%" ? 0.5 : 0.005) ? "igual" : delta > 0 ? "sube" : "baja";
          const chip = good == null ? "bg-line-2 text-ink-2" : good ? "bg-almada-soft text-almada" : "bg-contra-soft text-contra";
          return (
            <li key={r.label}>
              <div className="flex items-baseline justify-between gap-3 mb-1.5">
                <p className="text-sm text-ink">{r.label}</p>
                {delta != null && (
                  <span className={`rounded-full px-2 py-0.5 text-[11px] font-medium num ${chip}`}>
                    {word}
                    {word !== "igual" && <> {fmt(abs, r.unit)}</>}
                  </span>
                )}
              </div>
              <div className="grid grid-cols-[minmax(0,1fr)_3.5rem] gap-x-3 gap-y-1 items-center">
                <div className="h-2 rounded-sm bg-line-2 overflow-hidden">
                  <div className="h-full bg-before rounded-sm" style={{ width: `${((r.before ?? 0) / max) * 100}%` }} />
                </div>
                <span className="text-xs text-ink-3 num text-right">{fmt(r.before, r.unit)}</span>
                <div className="h-2 rounded-sm bg-line-2 overflow-hidden">
                  <div className="h-full bg-after rounded-sm" style={{ width: `${((r.after ?? 0) / max) * 100}%` }} />
                </div>
                <span className="text-xs text-ink font-semibold num text-right">{fmt(r.after, r.unit)}</span>
              </div>
            </li>
          );
        })}
      </ul>
      <p className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-ink-3 mt-4">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-3 rounded-sm bg-before" /> {beforeLabel}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-3 rounded-sm bg-after" /> {afterLabel}
        </span>
      </p>
    </div>
  );
}
