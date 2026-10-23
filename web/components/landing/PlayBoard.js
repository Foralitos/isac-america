// Medio campo de StatsBomb (120 × 80, el América ataca a la derecha) con la jugada del 2-2 del Clásico,
// minuto 73. Las coordenadas son las de los eventos reales del partido 4063597, posesión 164.
const DUEL = [86.6, 57.9];
const ROBO = [97.7, 55.7];
const PASS1 = [[97.9, 55.0], [106.8, 40.6]];
const CARRY = [[106.8, 40.6], [108.7, 41.2]];
const PASS2 = [[108.7, 41.2], [112.3, 46.3]];
const SHOT = [[112.3, 46.3], [120, 41.7]];

const line = ([a, b]) => `M${a[0]} ${a[1]} L${b[0]} ${b[1]}`;

function Label({ x, y, children, delay, anchor = "start", tone = "chalk" }) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      className={`board-fade ${tone === "gold" ? "fill-[var(--gold)]" : "fill-white/85"}`}
      style={{ animationDelay: `${delay}s`, fontSize: 2.1, fontWeight: 600, letterSpacing: 0.04 }}
    >
      {children}
    </text>
  );
}

export default function PlayBoard() {
  return (
    <svg viewBox="57 -3 66 86" className="w-full h-auto" role="img" aria-label="Pizarra de la jugada: duelo ganado, robo a 22 metros del arco, dos pases y tiro de xG 0.85 que termina en gol">
      <defs>
        <marker id="pb-head" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="#fff" />
        </marker>
        <marker id="pb-head-gold" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="3.4" markerHeight="3.4" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="var(--gold)" />
        </marker>
        <clipPath id="pb-d">
          <rect x="60" y="0" width="42" height="80" />
        </clipPath>
      </defs>

      {/* Líneas de cal */}
      <g fill="none" stroke="rgb(255 255 255 / 0.22)" strokeWidth="0.35">
        <rect x="60" y="0" width="60" height="80" />
        <path d="M60 30 A10 10 0 0 1 60 50" />
        <rect x="102" y="18" width="18" height="44" />
        <rect x="114" y="30" width="6" height="20" />
        <circle cx="108" cy="40" r="10" clipPath="url(#pb-d)" />
        <path d="M120 36 h1.6 v8 h-1.6" />
      </g>
      <circle cx="108" cy="40" r="0.35" fill="rgb(255 255 255 / 0.35)" />

      {/* Duelo y robo */}
      <circle cx={DUEL[0]} cy={DUEL[1]} r="3.2" fill="none" stroke="#fff" strokeWidth="0.45" className="board-ring" style={{ animationDelay: "0.5s" }} />
      <Label x={DUEL[0] - 4.2} y={DUEL[1] + 0.8} anchor="end" delay={0.8}>
        Duelo ganado · 73:37
      </Label>
      <circle cx={ROBO[0]} cy={ROBO[1]} r="2" fill="var(--gold)" className="board-pop" style={{ animationDelay: "1.1s" }} />
      <Label x={ROBO[0]} y={ROBO[1] + 5.2} anchor="middle" delay={1.3} tone="gold">
        Robo a 22 m del arco
      </Label>

      {/* Dos pases y tiro */}
      <path d={line(PASS1)} pathLength="1" stroke="#fff" strokeWidth="0.5" fill="none" markerEnd="url(#pb-head)" className="board-draw" style={{ animationDelay: "1.7s" }} />
      <path d={line(CARRY)} pathLength="1" stroke="#fff" strokeWidth="0.4" strokeDasharray="0.8 0.6" fill="none" className="board-fade" style={{ animationDelay: "2.3s" }} />
      <path d={line(PASS2)} pathLength="1" stroke="#fff" strokeWidth="0.5" fill="none" markerEnd="url(#pb-head)" className="board-draw" style={{ animationDelay: "2.5s" }} />
      <Label x={101.5} y={45} anchor="end" delay={2.4}>
        2 pases
      </Label>
      <path d={line(SHOT)} pathLength="1" stroke="var(--gold)" strokeWidth="0.75" fill="none" markerEnd="url(#pb-head-gold)" className="board-draw" style={{ animationDelay: "3.1s" }} />
      <circle cx={SHOT[0][0]} cy={SHOT[0][1]} r="1" fill="#fff" className="board-pop" style={{ animationDelay: "3s" }} />
    </svg>
  );
}
