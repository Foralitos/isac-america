import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import TrendLine from "@/components/charts/TrendLine";
import MatchList from "./MatchList";
import { getMatches, getProfile } from "@/libs/data";
import { STAKES_LABEL } from "@/libs/format";

export const dynamic = "force-dynamic";

function rolling(values, w = 5) {
  return values.map((_, i) => {
    const slice = values.slice(Math.max(0, i - w + 1), i + 1).filter((v) => v != null);
    return slice.length ? slice.reduce((a, b) => a + b, 0) / slice.length : null;
  });
}

const SHORT = (t) => t.replace("Apertura", "Ap.").replace("Clausura", "Cl.");

export default async function Partidos() {
  const [matches, profile] = await Promise.all([getMatches(), getProfile()]);
  const league = Object.fromEntries(Object.values(profile?.blocks ?? {}).flat().map((m) => [m.metric, m.league_mean]));
  const xgd = rolling(matches.map((m) => m.xgd));
  const bands = [];
  const marks = [];
  matches.forEach((m, i) => {
    const last = bands[bands.length - 1];
    if (!last || last.label !== m.tournament) {
      if (last) last.to = i - 1;
      bands.push({ label: m.tournament, short: SHORT(m.tournament), from: i, to: i });
    }
    if (i === 0 || matches[i - 1].team !== m.team) marks.push({ x: i, label: m.team });
  });
  if (bands.length) bands[bands.length - 1].to = matches.length - 1;
  const series = matches.map((m, i) => ({
    x: i,
    title: `${m.team} ${m.is_home ? "en casa" : "de visita"} contra ${m.opponent}, ${m.gf}-${m.ga}`,
    sub: `${m.tournament}. ${STAKES_LABEL[m.stakes] ?? m.stakes}`,
    xgd: xgd[i],
    ppda: m.ppda_own,
  }));
  return (
    <>
      <PageHeader question="¿Cómo se fue moviendo el equipo partido a partido?" lead="Cada punto es un partido, en orden. Las bandas separan los torneos y la línea punteada marca cuándo cambió de equipo." />
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card title="Balance de peligro, promedio de los últimos 5 partidos" sub="Peligro creado menos peligro concedido, en goles esperados. Arriba de cero crea más de lo que concede.">
          <TrendLine data={series} dataKey="xgd" league={0} bands={bands} marks={marks} />
        </Card>
        <Card title="Intensidad de presión por partido" sub="Pases que deja dar al rival antes de robar el balón. Menos pases es presión más intensa.">
          <TrendLine data={series} dataKey="ppda" league={league.ppda_own} bands={bands} marks={marks} />
        </Card>
      </div>
      <Card title={`Los ${matches.length} partidos`} sub="Agrupados por torneo. La situación en la tabla es la de antes de jugar, con la posición que ocupaba.">
        <MatchList matches={matches} league={league} />
      </Card>
    </>
  );
}
