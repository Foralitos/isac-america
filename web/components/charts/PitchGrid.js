// Mapa de cancha en cuadrícula (12 x 8 celdas de 10 m). Secuencial, un solo tono: más oscuro = más.
// Ataque hacia la derecha. Solo agregados por celda; nunca coordenadas de eventos.
export default function PitchGrid({ cells, nx = 12, ny = 8, value = "xg", title, half = "right" }) {
  const W = 360;
  const H = 240;
  const cw = W / nx;
  const ch = H / ny;
  const max = Math.max(...cells.map((c) => c[value] ?? 0), 0.0001);
  const byKey = new Map(cells.map((c) => [`${c.cx},${c.cy}`, c]));
  const shown = half === "right" ? Array.from({ length: nx / 2 }, (_, i) => i + nx / 2) : Array.from({ length: nx }, (_, i) => i);
  const x0 = half === "right" ? W / 2 : 0;
  const vw = half === "right" ? W / 2 : W;
  return (
    <figure>
      <svg viewBox={`${x0} 0 ${vw} ${H}`} className="w-full h-auto" role="img" aria-label={title}>
        <rect x={x0} y={0} width={vw} height={H} fill="var(--surface)" />
        {shown.map((cx) =>
          Array.from({ length: ny }, (_, cy) => {
            const c = byKey.get(`${cx},${cy}`);
            const v = c?.[value] ?? 0;
            const t = v / max;
            return (
              <g key={`${cx},${cy}`}>
                <rect x={cx * cw + 1} y={cy * ch + 1} width={cw - 2} height={ch - 2} rx={2} fill="var(--almada)" fillOpacity={0.06 + t * 0.84} />
                {c && c.n > 0 && <title>{`celda ${cx},${cy}: ${c.n} · ${value} ${Number(v).toFixed(2)}${c.goals != null ? ` · goles ${c.goals}` : ""}`}</title>}
              </g>
            );
          })
        )}
        <g fill="none" stroke="var(--ink)" strokeOpacity={0.5} strokeWidth={1}>
          <rect x={0.5} y={0.5} width={W - 1} height={H - 1} />
          <line x1={W / 2} y1={0} x2={W / 2} y2={H} />
          <circle cx={W / 2} cy={H / 2} r={(10 / 120) * W} />
          <rect x={W - (18 / 120) * W} y={(18 / 80) * H} width={(18 / 120) * W} height={(44 / 80) * H} />
          <rect x={W - (6 / 120) * W} y={(30 / 80) * H} width={(6 / 120) * W} height={(20 / 80) * H} />
          <rect x={0} y={(18 / 80) * H} width={(18 / 120) * W} height={(44 / 80) * H} />
          <rect x={0} y={(30 / 80) * H} width={(6 / 120) * W} height={(20 / 80) * H} />
        </g>
      </svg>
      {title && <figcaption className="text-xs text-ink-3 mt-2">{title}</figcaption>}
    </figure>
  );
}
