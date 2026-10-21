// Diagramas del framework: una cancha de 120 x 80 (ataque hacia la derecha) con la forma que define cada regla.
// Solo formas y sombras, sin datos. Las variantes "score-state", "timeline" y "table" no son canchas.
const W = 240;
const H = 160;
const sx = (x) => (x / 120) * W;
const sy = (y) => (y / 80) * H;

function Pitch({ children, label }) {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label={label}>
      <rect x={0} y={0} width={W} height={H} rx={3} fill="var(--grass-soft)" />
      {children}
      <g fill="none" stroke="var(--grass)" strokeOpacity={0.6} strokeWidth={1}>
        <rect x={0.5} y={0.5} width={W - 1} height={H - 1} rx={3} />
        <line x1={W / 2} y1={0} x2={W / 2} y2={H} />
        <circle cx={W / 2} cy={H / 2} r={sx(10)} />
        <rect x={0} y={sy(18)} width={sx(18)} height={sy(44)} />
        <rect x={0} y={sy(30)} width={sx(6)} height={sy(20)} />
        <rect x={sx(102)} y={sy(18)} width={sx(18)} height={sy(44)} />
        <rect x={sx(114)} y={sy(30)} width={sx(6)} height={sy(20)} />
      </g>
    </svg>
  );
}

const T = (props) => <text fontSize={9} fill="var(--ink)" fontWeight={600} textAnchor="middle" {...props} />;
const Arrow = ({ x1, y1, x2, y2, color = "var(--almada)", dash }) => (
  <g stroke={color} strokeWidth={2} fill="none" strokeLinecap="round" strokeDasharray={dash}>
    <line x1={sx(x1)} y1={sy(y1)} x2={sx(x2)} y2={sy(y2)} />
    <polyline
      points={(() => {
        const ax = sx(x2);
        const ay = sy(y2);
        const a = Math.atan2(sy(y2) - sy(y1), sx(x2) - sx(x1));
        const l = 6;
        return `${ax - l * Math.cos(a - 0.5)},${ay - l * Math.sin(a - 0.5)} ${ax},${ay} ${ax - l * Math.cos(a + 0.5)},${ay - l * Math.sin(a + 0.5)}`;
      })()}
    />
  </g>
);
const Ball = ({ x, y, color = "var(--almada)", r = 5 }) => <circle cx={sx(x)} cy={sy(y)} r={r} fill={color} stroke="var(--surface)" strokeWidth={1.5} />;
const Clock = ({ x, y, text }) => (
  <g>
    <rect x={sx(x) - 16} y={sy(y) - 8} width={32} height={16} rx={8} fill="var(--ink)" />
    <text x={sx(x)} y={sy(y) + 3.5} fontSize={9} fill="#fff" fontWeight={600} textAnchor="middle">
      {text}
    </text>
  </g>
);

function Bar({ children, label }) {
  return (
    <svg viewBox={`0 0 ${W} 72`} className="w-full h-auto" role="img" aria-label={label}>
      {children}
    </svg>
  );
}

export default function PitchDiagram({ variant }) {
  switch (variant) {
    case "thirds":
      return (
        <Pitch label="Tercios: defensivo, medio y último">
          <rect x={0} y={0} width={sx(40)} height={H} fill="var(--contra)" fillOpacity={0.12} />
          <rect x={sx(80)} y={0} width={sx(40)} height={H} fill="var(--almada)" fillOpacity={0.18} />
          <T x={sx(20)} y={14}>defensivo</T>
          <T x={sx(60)} y={14}>medio</T>
          <T x={sx(100)} y={14}>último</T>
          <Arrow x1={50} y1={74} x2={70} y2={74} color="var(--ink-3)" />
        </Pitch>
      );
    case "lanes":
      return (
        <Pitch label="Carriles: izquierdo, centro y derecho">
          <rect x={0} y={0} width={W} height={sy(26.7)} fill="var(--almada)" fillOpacity={0.14} />
          <rect x={0} y={sy(53.3)} width={W} height={sy(26.7)} fill="var(--almada)" fillOpacity={0.14} />
          <T x={sx(60)} y={sy(13.3) + 3}>izquierdo</T>
          <T x={sx(60)} y={sy(40) + 3}>centro</T>
          <T x={sx(60)} y={sy(66.6) + 3}>derecho</T>
        </Pitch>
      );
    case "box-zone14":
      return (
        <Pitch label="Área y zona 14">
          <rect x={sx(102)} y={sy(18)} width={sx(18)} height={sy(44)} fill="var(--almada)" fillOpacity={0.22} />
          <rect x={sx(80)} y={sy(26.7)} width={sx(22)} height={sy(26.6)} fill="var(--contra)" fillOpacity={0.22} />
          <T x={sx(91)} y={sy(40) + 3}>zona 14</T>
          <T x={sx(111)} y={sy(12)}>área</T>
          <Arrow x1={70} y1={60} x2={106} y2={50} />
        </Pitch>
      );
    case "press-height":
      return (
        <Pitch label="Altura de presión y línea defensiva">
          <line x1={sx(57)} y1={0} x2={sx(57)} y2={H} stroke="var(--almada)" strokeWidth={2} strokeDasharray="5 4" />
          <line x1={sx(38)} y1={0} x2={sx(38)} y2={H} stroke="var(--contra)" strokeWidth={2} strokeDasharray="5 4" />
          <T x={sx(57)} y={12} fill="var(--almada)">presión, 57 m</T>
          <T x={sx(38)} y={H - 6} fill="var(--contra)">línea defensiva</T>
          <Ball x={54} y={30} />
          <Ball x={60} y={52} />
          <Ball x={57} y={66} />
          <Arrow x1={6} y1={74} x2={36} y2={74} color="var(--ink-3)" />
          <T x={sx(21)} y={sy(70)} fontSize={8} fill="var(--ink-3)">metros desde la portería</T>
        </Pitch>
      );
    case "progression":
      return (
        <Pitch label="Pase o conducción progresiva">
          <rect x={sx(80)} y={0} width={sx(40)} height={H} fill="var(--almada)" fillOpacity={0.1} />
          <Arrow x1={45} y1={55} x2={62} y2={48} />
          <line x1={sx(45)} y1={sy(66)} x2={sx(62)} y2={sy(66)} stroke="var(--ink-3)" strokeWidth={1} />
          <T x={sx(53.5)} y={sy(72)} fontSize={8}>al menos 10 m hacia la portería</T>
          <Arrow x1={70} y1={25} x2={86} y2={22} />
          <T x={sx(96)} y={sy(14)} fontSize={8}>o entrar al último tercio</T>
        </Pitch>
      );
    case "sequence":
      return (
        <Pitch label="Secuencia ofensiva: tres acciones o un tiro">
          <rect x={sx(80)} y={0} width={sx(40)} height={H} fill="var(--almada)" fillOpacity={0.1} />
          <Ball x={30} y={60} />
          <Arrow x1={33} y1={58} x2={55} y2={45} />
          <Ball x={58} y={43} />
          <Arrow x1={61} y1={41} x2={84} y2={30} />
          <Ball x={87} y={28} />
          <Arrow x1={90} y1={30} x2={112} y2={40} color="var(--contra)" />
          <T x={sx(60)} y={sy(76)} fontSize={8}>tres acciones con el balón, o un tiro</T>
          <T x={sx(100)} y={14} fontSize={8}>peligrosa si llega aquí</T>
        </Pitch>
      );
    case "transition":
      return (
        <Pitch label="Transición ofensiva: 10 segundos desde la recuperación">
          <Ball x={48} y={55} color="var(--contra)" />
          <Clock x={48} y={70} text="0 s" />
          <Arrow x1={52} y1={52} x2={108} y2={40} />
          <Ball x={110} y={40} />
          <Clock x={110} y={25} text="10 s" />
          <T x={sx(60)} y={14} fontSize={8}>recupera y tira antes de que el rival se ordene</T>
        </Pitch>
      );
    case "transition-def":
      return (
        <Pitch label="Transición defensiva: 10 segundos después de perder">
          <Ball x={72} y={30} color="var(--contra)" />
          <Clock x={72} y={15} text="pérdida" />
          <Arrow x1={68} y1={32} x2={14} y2={42} color="var(--contra)" />
          <Clock x={14} y={58} text="10 s" />
          <T x={sx(60)} y={H - 8} fontSize={8}>qué le hace el rival en esos 10 segundos</T>
        </Pitch>
      );
    case "counterpress":
      return (
        <Pitch label="Contrapresión: 5 segundos después de perder">
          <Ball x={70} y={40} color="var(--contra)" />
          <circle cx={sx(70)} cy={sy(40)} r={22} fill="var(--almada)" fillOpacity={0.15} stroke="var(--almada)" strokeDasharray="3 3" />
          <Ball x={62} y={28} r={4} />
          <Ball x={78} y={30} r={4} />
          <Ball x={64} y={52} r={4} />
          <Clock x={70} y={66} text="5 s" />
          <T x={sx(60)} y={14} fontSize={8}>pierde y presiona ahí mismo</T>
        </Pitch>
      );
    case "press-phase":
      return (
        <Pitch label="Fase de presión: presiones encadenadas en menos de 5 segundos">
          <rect x={sx(80)} y={0} width={sx(40)} height={H} fill="var(--almada)" fillOpacity={0.1} />
          <Ball x={84} y={24} r={4} />
          <Ball x={92} y={42} r={4} />
          <Ball x={88} y={60} r={4} />
          <line x1={sx(84)} y1={sy(24)} x2={sx(92)} y2={sy(42)} stroke="var(--almada)" strokeWidth={1.5} strokeDasharray="2 2" />
          <line x1={sx(92)} y1={sy(42)} x2={sx(88)} y2={sy(60)} stroke="var(--almada)" strokeWidth={1.5} strokeDasharray="2 2" />
          <Clock x={104} y={33} text="< 5 s" />
          <Clock x={104} y={51} text="< 5 s" />
          <T x={sx(100)} y={14} fontSize={8}>alta si pasa aquí</T>
        </Pitch>
      );
    case "ppda":
      return (
        <Pitch label="PPDA: pases del rival en su campo entre nuestras acciones defensivas">
          <rect x={sx(48)} y={0} width={sx(72)} height={H} fill="var(--contra)" fillOpacity={0.1} />
          <Ball x={60} y={30} color="var(--contra)" r={4} />
          <Ball x={75} y={44} color="var(--contra)" r={4} />
          <Ball x={92} y={36} color="var(--contra)" r={4} />
          <Ball x={100} y={56} color="var(--contra)" r={4} />
          <Ball x={80} y={60} />
          <T x={sx(84)} y={14} fontSize={8}>pases del rival aquí</T>
          <T x={sx(84)} y={H - 8} fontSize={8}>entre cada acción defensiva nuestra</T>
        </Pitch>
      );
    case "set-piece":
      return (
        <Pitch label="Balón parado: córner corto y saque de banda en zona de peligro">
          <rect x={sx(80)} y={0} width={sx(40)} height={sy(6)} fill="var(--contra)" fillOpacity={0.35} />
          <rect x={sx(80)} y={sy(74)} width={sx(40)} height={sy(6)} fill="var(--contra)" fillOpacity={0.35} />
          <Ball x={119} y={1} r={4} />
          <Arrow x1={117} y1={3} x2={106} y2={10} />
          <T x={sx(100)} y={sy(20)} fontSize={8}>corto: menos de 15 m</T>
          <T x={sx(100)} y={sy(70)} fontSize={8}>saque en zona de peligro</T>
        </Pitch>
      );
    case "score-state":
      return (
        <Bar label="Marcador en vivo: minutos ganando, empatando o perdiendo">
          <rect x={0} y={20} width={W * 0.3} height={16} fill="var(--liga)" />
          <rect x={W * 0.3} y={20} width={W * 0.45} height={16} fill="var(--almada)" />
          <rect x={W * 0.75} y={20} width={W * 0.25} height={16} fill="var(--liga)" />
          {[0.3, 0.75].map((p) => (
            <g key={p}>
              <line x1={W * p} y1={12} x2={W * p} y2={44} stroke="var(--ink)" strokeWidth={1.5} />
              <text x={W * p} y={9} fontSize={8} textAnchor="middle" fill="var(--ink)">
                gol
              </text>
            </g>
          ))}
          <text x={W * 0.15} y={31} fontSize={8} fill="#fff" textAnchor="middle">empatando</text>
          <text x={W * 0.52} y={31} fontSize={8} fill="#fff" textAnchor="middle">ganando</text>
          <text x={W * 0.87} y={31} fontSize={8} fill="#fff" textAnchor="middle">empatando</text>
          <text x={0} y={60} fontSize={8} fill="var(--ink-3)">{"0'"}</text>
          <text x={W} y={60} fontSize={8} fill="var(--ink-3)" textAnchor="end">{"90'"}</text>
          <text x={W / 2} y={70} fontSize={8} fill="var(--ink-2)" textAnchor="middle">cada métrica se mide por 90 minutos en ese estado</text>
        </Bar>
      );
    case "timeline":
      return (
        <Bar label="Momento: tramos de 15 minutos agrupados de 30 en 30">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect key={i} x={(i * W) / 6 + 1} y={20} width={W / 6 - 2} height={16} fill="var(--almada)" fillOpacity={0.25 + Math.floor(i / 2) * 0.3} />
          ))}
          {["0 a 30", "30 a 60", "60 a 90"].map((t, i) => (
            <text key={t} x={((i + 0.5) * W) / 3} y={31} fontSize={8} fill="var(--ink)" textAnchor="middle" fontWeight={600}>
              {t}
            </text>
          ))}
          {[0, 15, 30, 45, 60, 75, 90].map((m) => (
            <text key={m} x={(m / 90) * W} y={52} fontSize={8} fill="var(--ink-3)" textAnchor={m === 0 ? "start" : m === 90 ? "end" : "middle"}>
              {`${m}'`}
            </text>
          ))}
        </Bar>
      );
    case "table":
      return (
        <svg viewBox={`0 0 ${W} 120`} className="w-full h-auto" role="img" aria-label="Situación en la tabla: zona directa, play-in y resto">
          {Array.from({ length: 18 }, (_, i) => {
            const fill = i < 6 ? "var(--almada)" : i < 10 ? "var(--almada-soft)" : "var(--line-2)";
            return <rect key={i} x={(i % 9) * (W / 9) + 1} y={i < 9 ? 10 : 36} width={W / 9 - 2} height={20} rx={2} fill={fill} />;
          })}
          {Array.from({ length: 18 }, (_, i) => (
            <text key={i} x={(i % 9) * (W / 9) + W / 18} y={i < 9 ? 24 : 50} fontSize={8} textAnchor="middle" fill={i < 6 ? "#fff" : "var(--ink)"}>
              {i + 1}
            </text>
          ))}
          <text x={0} y={76} fontSize={8} fill="var(--ink-2)">1 al 6: liguilla directa. 7 al 10: play-in. Antes de 2023: 4 directos y repechaje del 5 al 12.</text>
          <text x={0} y={92} fontSize={8} fill="var(--ink-2)">Con los puntos que faltan por jugar se sabe si la directa está asegurada,</text>
          <text x={0} y={104} fontSize={8} fill="var(--ink-2)">si es alcanzable, si pelea el play-in o si ya no hay nada en juego.</text>
        </svg>
      );
    default:
      return null;
  }
}
