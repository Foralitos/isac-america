// Torneo a torneo: intensidad de presión (PPDA, menos es más intensa), récord y puntos contra merecidos (D-28).
// Valores de data/out/jorge-guillermo-almada-alves (scenarios/torneo.json y simulation.json).
const T = [
  { t: "Ap 21", team: "Santos", ppda: 8.75, rec: "7-9-4", diff: -0.6 },
  { t: "Cl 22", team: "Pachuca", ppda: 9.33, rec: "15-4-4", diff: 10.7 },
  { t: "Ap 22", team: "Pachuca", ppda: 9.79, rec: "14-5-4", diff: 6.1, champ: true },
  { t: "Cl 23", team: "Pachuca", ppda: 10.74, rec: "10-2-6", diff: 2.6 },
  { t: "Ap 23", team: "Pachuca", ppda: 12.96, rec: "5-7-5", diff: -0.4 },
  { t: "Cl 24", team: "Pachuca", ppda: 11.32, rec: "10-5-6", diff: -0.3 },
  { t: "Ap 24", team: "Pachuca", ppda: 12.76, rec: "3-4-10", diff: -10.0 },
  { t: "Cl 25", team: "Pachuca", ppda: 12.86, rec: "9-5-6", diff: 0.7 },
  { t: "Ap 26", team: "América", ppda: 10.8, rec: "7-3-1", diff: 5.4 },
];
const LIGA = 14.0;

const W = 900;
const COL = W / T.length;
const P_TOP = 30;
const P_H = 150; // alto de la banda de presión
const R_Y = P_TOP + P_H + 34; // fila del récord
const D_MID = R_Y + 95; // eje de puntos de más / de menos
const D_H = 55;
const H = D_MID + D_H + 34;

// Escala de PPDA invertida: 7 arriba (más intensa), 15 abajo.
const py = (v) => P_TOP + ((v - 7) / (15 - 7)) * P_H;

export default function TournamentChart() {
  const pts = T.map((d, i) => [COL * i + COL / 2, py(d.ppda)]);
  return (
    <figure className="min-w-0">
      <div className="overflow-x-auto">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full min-w-[640px] h-auto" role="img" aria-label="Presión, récord y puntos contra merecidos de Almada en cada torneo">
          {/* Bloques por equipo */}
          <rect x={0} y={0} width={COL} height={H} fill="var(--line-2)" />
          <rect x={COL * 8} y={0} width={COL} height={H} fill="var(--almada-soft)" />
          {["Santos", "Pachuca", "América"].map((team, i) => {
            const x = [COL / 2, COL * 4.5, COL * 8.5][i];
            return (
              <text key={team} x={x} y={16} textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--ink-2)">
                {team}
              </text>
            );
          })}

          {/* Presión */}
          <text x={6} y={P_TOP + 14} fontSize="11" fill="var(--ink-3)">
            más intensa
          </text>
          <text x={6} y={P_TOP + P_H - 4} fontSize="11" fill="var(--ink-3)">
            menos
          </text>
          <line x1={0} x2={W} y1={py(LIGA)} y2={py(LIGA)} stroke="var(--liga)" strokeDasharray="4 4" />
          <text x={W - 6} y={py(LIGA) - 6} textAnchor="end" fontSize="11" fill="var(--liga)">
            liga: 14.0 pases
          </text>
          <polyline points={pts.map((p) => p.join(",")).join(" ")} fill="none" stroke="var(--almada)" strokeWidth="2.5" />
          {T.map((d, i) => (
            <g key={d.t}>
              <circle cx={pts[i][0]} cy={pts[i][1]} r={d.champ ? 7 : 5} fill={d.champ ? "var(--gold)" : "var(--almada)"} stroke="#fff" strokeWidth="2">
                <title>{`${d.t} (${d.team}): deja dar ${d.ppda} pases antes de robar`}</title>
              </circle>
              <text x={pts[i][0]} y={pts[i][1] - 12} textAnchor="middle" fontSize="12" fontWeight="600" fill="var(--ink)" className="num">
                {d.ppda.toFixed(1)}
              </text>
            </g>
          ))}

          {/* Torneo y récord */}
          {T.map((d, i) => (
            <g key={`r${d.t}`}>
              <text x={COL * i + COL / 2} y={R_Y} textAnchor="middle" fontSize="13" fontWeight="600" fill="var(--ink)">
                {d.t}
                {d.champ ? " ★" : ""}
              </text>
              <text x={COL * i + COL / 2} y={R_Y + 18} textAnchor="middle" fontSize="12" fill="var(--ink-2)" className="num">
                {d.rec}
              </text>
            </g>
          ))}

          {/* Puntos de más o de menos contra lo merecido */}
          <line x1={0} x2={W} y1={D_MID} y2={D_MID} stroke="var(--line)" />
          {T.map((d, i) => {
            const h = (Math.abs(d.diff) / 11) * D_H;
            const up = d.diff >= 0;
            return (
              <g key={`d${d.t}`}>
                <rect x={COL * i + COL / 2 - 16} y={up ? D_MID - h : D_MID} width={32} height={Math.max(h, 1.5)} rx="3" fill={up ? "var(--almada)" : "var(--contra)"}>
                  <title>{`${d.t}: ${up ? "+" : ""}${d.diff} puntos contra lo merecido`}</title>
                </rect>
                <text x={COL * i + COL / 2} y={up ? D_MID - h - 6 : D_MID + h + 14} textAnchor="middle" fontSize="12" fontWeight="600" fill={up ? "var(--almada)" : "var(--contra)"} className="num">
                  {up ? "+" : "−"}
                  {Math.abs(d.diff).toFixed(1)}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <figcaption className="text-sm text-ink-2 mt-3 leading-relaxed">
        <span className="font-semibold text-ink">Arriba:</span> pases que deja dar al rival antes de robar (PPDA, D-05b); más arriba es presión más intensa. <span className="font-semibold text-ink">En medio:</span> torneo y récord (G-E-P), ★ campeón. <span className="font-semibold text-ink">Abajo:</span> puntos sumados menos puntos merecidos en 10,000 repeticiones de cada partido (D-28).
      </figcaption>
    </figure>
  );
}
