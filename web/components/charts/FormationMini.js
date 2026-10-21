import { formationSlots } from "@/libs/positions";

// Un dibujo táctico en miniatura: once puntos en su formación, sobre media cancha.
export default function FormationMini({ formation, size = 44, active = true }) {
  const W = 40;
  const H = 56;
  const slots = formationSlots(formation);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width={size} height={(size * H) / W} role="img" aria-label={`Formación ${String(formation).split("").join("-")}`} className="shrink-0">
      <rect x={0.5} y={0.5} width={W - 1} height={H - 1} rx={1.5} fill="var(--grass-soft)" stroke="var(--grass)" strokeOpacity={0.5} />
      <line x1={0} y1={H / 2} x2={W} y2={H / 2} stroke="var(--grass)" strokeOpacity={0.4} />
      {slots.map((s, i) => (
        <circle key={i} cx={s.x * W} cy={(1 - s.y) * H} r={2.6} fill={active ? "var(--almada)" : "var(--ink-3)"} />
      ))}
    </svg>
  );
}
