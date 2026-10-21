import { POS, formationSlots, posAbbr, shortName } from "@/libs/positions";

// Cancha vertical con el núcleo del torneo como fichas en su hueco de la formación base.
// Los huecos sin jugador fijo quedan punteados: la rotación se ve sin leer.
function pitchLines(W, H) {
  const s = (v) => (v / 80) * W;
  const t = (v) => (v / 120) * H;
  return (
    <g fill="none" stroke="var(--grass)" strokeOpacity={0.55} strokeWidth={1}>
      <rect x={0.5} y={0.5} width={W - 1} height={H - 1} rx={2} />
      <line x1={0} y1={H / 2} x2={W} y2={H / 2} />
      <circle cx={W / 2} cy={H / 2} r={t(10)} />
      <rect x={s(18)} y={H - t(18)} width={s(44)} height={t(18)} />
      <rect x={s(30)} y={H - t(6)} width={s(20)} height={t(6)} />
      <rect x={s(18)} y={0} width={s(44)} height={t(18)} />
      <rect x={s(30)} y={0} width={s(20)} height={t(6)} />
    </g>
  );
}

export function assignSlots(core, formation) {
  const slots = formationSlots(formation).map((s) => ({ ...s, player: null }));
  const players = [...core].sort((a, b) => (b.start_pct ?? 0) - (a.start_pct ?? 0));
  for (const p of players) {
    const pos = POS[p.roles?.[0]?.position] ?? { x: 0.5, y: 0.5 };
    let best = null;
    let bd = Infinity;
    for (const s of slots) {
      if (s.player) continue;
      const d = (s.x - pos.x) ** 2 * 1.4 + (s.y - pos.y) ** 2;
      if (d < bd) {
        bd = d;
        best = s;
      }
    }
    if (best) best.player = p;
  }
  return slots;
}

export default function LineupPitch({ core = [], formation = 4231, title, caption, width = 220 }) {
  const W = 200;
  const H = 300;
  const slots = assignSlots(core, formation);
  const filled = slots.filter((s) => s.player).length;
  return (
    <figure className="min-w-0">
      {title && (
        <figcaption className="mb-2">
          <p className="text-sm font-semibold text-ink leading-snug">{title}</p>
          {caption && <p className="text-xs text-ink-3 mt-0.5">{caption}</p>}
          <p className="text-xs text-ink-2 mt-0.5">
            <span className="font-semibold text-ink num">{filled}</span> fijos de 11
          </p>
        </figcaption>
      )}
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width, maxWidth: "100%" }} className="h-auto" role="img" aria-label={`${title ?? "Once"}: ${filled} jugadores fijos de 11`}>
        <rect x={0} y={0} width={W} height={H} rx={2} fill="var(--grass-soft)" />
        {pitchLines(W, H)}
        {slots.map((s, i) => {
          const cx = s.x * W;
          const cy = (1 - s.y) * H;
          if (!s.player)
            return <circle key={i} cx={cx} cy={cy} r={9} fill="none" stroke="var(--ink-3)" strokeOpacity={0.6} strokeDasharray="2.5 2.5" strokeWidth={1.2} />;
          const p = s.player;
          return (
            <g key={i}>
              <title>{`${p.player}, ${posAbbr(p.roles?.[0]?.position)}, titular en ${Math.round(p.start_pct)} % de los partidos`}</title>
              <circle cx={cx} cy={cy} r={10} fill="var(--almada)" stroke="var(--surface)" strokeWidth={1.5} />
              <text x={cx} y={cy + 3} textAnchor="middle" fontSize={7} fontWeight={600} fill="#fff">
                {Math.round(p.start_pct)}
              </text>
              <text x={cx} y={cy + 20} textAnchor="middle" fontSize={8.5} fill="var(--ink)" fontWeight={500}>
                {shortName(p.player)}
              </text>
            </g>
          );
        })}
      </svg>
    </figure>
  );
}
