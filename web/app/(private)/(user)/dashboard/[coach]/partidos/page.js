import PageHeader from "@/components/ui/PageHeader";
import PartidosView from "./PartidosView";
import { getMatches, getProfile } from "@/libs/data";
import { STAKES_LABEL } from "@/libs/format";

export const dynamic = "force-dynamic";

function rolling(values, w = 5) {
  return values.map((_, i) => {
    const slice = values.slice(Math.max(0, i - w + 1), i + 1).filter((v) => v != null);
    return slice.length ? slice.reduce((a, b) => a + b, 0) / slice.length : null;
  });
}

const SHORT = (t) => t.replace("Apertura ", "Ap. ").replace("Clausura ", "Cl. ").replace(/20(\d\d)$/, "$1");

export default async function Partidos({ params }) {
  const { coach: key } = await params;
  const [matches, profile] = await Promise.all([getMatches(key), getProfile(key)]);
  const league = Object.fromEntries(Object.values(profile?.blocks ?? {}).flat().map((m) => [m.metric, m.league_mean]));
  const xgdAvg = rolling(matches.map((m) => m.xgd));
  const ppdaAvg = rolling(matches.map((m) => m.ppda_own));
  const bands = [];
  const teams = [];
  matches.forEach((m, i) => {
    const last = bands[bands.length - 1];
    if (!last || last.label !== m.tournament) {
      if (last) last.to = i - 1;
      bands.push({ label: m.tournament, short: SHORT(m.tournament), team: m.team, from: i, to: i, W: 0, D: 0, L: 0 });
    }
    const b = bands[bands.length - 1];
    if (m.result in b) b[m.result] += 1;
    if (i === 0 || matches[i - 1].team !== m.team) teams.push({ from: i, label: m.team });
  });
  if (bands.length) bands[bands.length - 1].to = matches.length - 1;
  const series = matches.map((m, i) => ({
    x: i,
    title: `${m.team} ${m.is_home ? "en casa" : "de visita"} contra ${m.opponent}, ${m.gf}-${m.ga}`,
    sub: `${m.tournament}. ${STAKES_LABEL[m.stakes] ?? m.stakes}`,
    xgd: m.xgd,
    xgdAvg: xgdAvg[i],
    ppda: m.ppda_own,
    ppdaAvg: ppdaAvg[i],
  }));
  return (
    <>
      <PageHeader question="¿Cómo se fue moviendo el equipo partido a partido?" lead="Cada punto es un partido, en orden. Elige un torneo en la franja de abajo de la gráfica para ver sus partidos." />
      <PartidosView matches={matches} league={league} series={series} bands={bands} teams={teams} />
    </>
  );
}
