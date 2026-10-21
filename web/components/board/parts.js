// Piezas estáticas de la pizarra. Unidades de cancha (120 x 80) por S = 10 → viewBox 1200 x 800.
export const S = 10;
export const W = 120 * S;
export const H = 80 * S;
export const SPRING = { type: "spring", stiffness: 300, damping: 30 };
export const LINE = "rgba(255,255,255,0.55)";
export const INK = "rgba(255,255,255,0.88)";
export const MUTED = "rgba(255,255,255,0.6)";

export function PitchLines() {
  const x = (v) => v * S;
  const y = (v) => v * S;
  return (
    <g fill="none" stroke={LINE} strokeWidth={2}>
      <rect x={1} y={1} width={W - 2} height={H - 2} rx={10} />
      <line x1={W / 2} y1={0} x2={W / 2} y2={H} />
      <circle cx={W / 2} cy={H / 2} r={x(10)} />
      <rect x={0} y={y(18)} width={x(18)} height={y(44)} />
      <rect x={0} y={y(30)} width={x(6)} height={y(20)} />
      <rect x={x(102)} y={y(18)} width={x(18)} height={y(44)} />
      <rect x={x(114)} y={y(30)} width={x(6)} height={y(20)} />
      <circle cx={x(12)} cy={H / 2} r={3} fill={LINE} />
      <circle cx={x(108)} cy={H / 2} r={3} fill={LINE} />
    </g>
  );
}

export function Defs() {
  return (
    <defs>
      <radialGradient id="board-bg" cx="50%" cy="50%" r="75%">
        <stop offset="0%" stopColor="#15293f" />
        <stop offset="100%" stopColor="#0f1f2e" />
      </radialGradient>
      <marker id="head-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse" markerUnits="strokeWidth">
        <path d="M0 0 L10 5 L0 10 z" fill="var(--almada)" />
      </marker>
      <marker id="head-white" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse" markerUnits="strokeWidth">
        <path d="M0 0 L10 5 L0 10 z" fill="rgba(255,255,255,0.8)" />
      </marker>
      <marker id="head-orange" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse" markerUnits="strokeWidth">
        <path d="M0 0 L10 5 L0 10 z" fill="var(--contra)" />
      </marker>
    </defs>
  );
}
