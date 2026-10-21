import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import Finding from "@/components/ui/Finding";
import ScenarioRail from "@/components/ui/ScenarioRail";
import { DefChips } from "@/components/ui/DefChip";
import CategoryBars from "@/components/charts/CategoryBars";
import ChangeMatrix from "@/components/charts/ChangeMatrix";
import { getFindings, getMatches, getScenario } from "@/libs/data";
import Board from "@/components/board/Board";
import { BLOCKS, SCENARIOS, catLabel, tournamentKey } from "@/libs/format";
import { metricLabel, techLabel, unitLabel } from "@/libs/words";

export const dynamic = "force-dynamic";

const PILL = "px-3 py-1.5 rounded-full text-sm border transition-colors";
const ON = "bg-ink text-white border-ink";
const OFF = "bg-surface text-ink-2 border-line hover:border-ink-3";

export default async function Escenarios({ searchParams }) {
  const sp = await searchParams;
  const escenario = SCENARIOS.some((s) => s.id === sp?.escenario) ? sp.escenario : "localia";
  const bloque = BLOCKS[sp?.bloque] ? sp.bloque : null;
  const [doc, findings, matches] = await Promise.all([getScenario(escenario), getFindings({ "fields.escenario": escenario }), getMatches()]);
  const meta = SCENARIOS.find((s) => s.id === escenario);
  let cats = (doc?.categories ?? []).filter((c) => c.metrics?.length);
  if (escenario === "torneo") cats = [...cats].sort((a, b) => tournamentKey(a.category) - tournamentKey(b.category));
  const segment = cats.some((c) => c.minutes);
  const totalMin = segment ? cats.reduce((a, c) => a + (c.minutes ?? 0), 0) : 0;
  const nMetrics = new Set(cats.flatMap((c) => c.metrics.map((m) => m.metric))).size;
  const blocksHere = Object.keys(BLOCKS).filter((b) => cats.some((c) => c.metrics.some((m) => m.block === b)));
  const activeBlock = bloque ?? blocksHere[0];
  const order = [];
  const seen = new Map();
  for (const c of cats) {
    for (const m of c.metrics) {
      if (m.block === activeBlock && !seen.has(m.metric)) {
        seen.set(m.metric, m);
        order.push(m.metric);
      }
    }
  }
  const formations = formationsFor(escenario, cats, matches);
  return (
    <>
      <PageHeader question={meta.q} lead="Mismo técnico, distinto contexto. Cada escenario abre con la respuesta y las métricas que más se mueven; el detalle completo está al final." />
      <div className="grid md:grid-cols-[15rem_minmax(0,1fr)] gap-x-10 gap-y-8 items-start">
        <ScenarioRail active={escenario} bloque={bloque} />
        <div className="min-w-0 space-y-10">
          <section>
            <Board key={escenario} cats={cats} formations={formations} />
            {doc?.note && <p className="text-xs text-ink-3 mt-3">Las cifras de este escenario son {doc.note}.</p>}
          </section>

          {findings.length > 0 && (
            <section className="space-y-8">
              {findings.map((f, i) => (
                <Finding key={f.id} f={f} hero={i === 0} compact={i > 0} />
              ))}
            </section>
          )}

          <Card title="Dónde más cambia" sub="Las seis métricas con mayor diferencia entre situaciones. La barra compara el valor con la media de la liga.">
            <ChangeMatrix cats={cats} labelOf={catLabel} />
          </Card>

          <details className="explore" open={bloque ? true : undefined} id="explorar">
            <summary className="flex items-center gap-2 text-base font-semibold text-ink py-2">
              <span className="chev inline-block text-ink-3">›</span>
              Explorar las {nMetrics} métricas de este escenario
            </summary>
            <div className="flex flex-wrap gap-2 mt-3 mb-6">
              {blocksHere.map((id) => (
                <Link key={id} href={`/dashboard/escenarios?escenario=${escenario}&bloque=${id}#explorar`} className={`${PILL} ${id === activeBlock ? ON : OFF}`} scroll={false}>
                  {BLOCKS[id]}
                </Link>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {order.map((metric) => {
                const m0 = seen.get(metric);
                const data = cats.map((c) => {
                  const m = c.metrics.find((x) => x.metric === metric);
                  return { label: catLabel(c), value: m?.value ?? null, n: segment ? null : c.n, pct: m?.pct, pct_good: m?.pct_good, direction: m0.direction };
                });
                return (
                  <Card key={metric} title={metricLabel(m0)} sub={`${unitLabel(m0.unit)}${techLabel(m0) ? `. En términos técnicos: ${techLabel(m0)}` : ""}`} footer={<DefChips ids={m0.definitions ?? []} className="" />}>
                    <CategoryBars data={data} unit={m0.unit} league={m0.league_mean} />
                  </Card>
                );
              })}
            </div>
            {order.length === 0 && <p className="text-ink-2">No hay métricas de este bloque en este escenario.</p>}
          </details>
        </div>
      </div>
    </>
  );
}

// Formación más usada en los partidos de cada categoría del escenario (para colocar las fichas de la pizarra).
const MATCHERS = {
  localia: (m, c) => (c === "local") === !!m.is_home,
  tabla: (m, c) => m.stakes === c,
  fase: (m, c) => (c === "regular" ? m.phase_kind === "regular" : m.round === c),
  ida_vuelta: (m, c) => (c === "ida" ? m.leg === "1" : m.leg === "2" && c === `vuelta ${m.agg_before}`),
  rival: (m, c) => (c === "top6") === !!m.opp_top6,
  torneo: (m, c) => m.tournament === c,
  resultado: (m, c) => ({ gano: "W", empato: "D", perdio: "L" })[c] === m.result,
  equipo: (m, c) => m.team === c,
};

function formationsFor(escenario, cats, matches) {
  const match = MATCHERS[escenario];
  const out = {};
  if (!match) return out;
  for (const c of cats) {
    const count = {};
    for (const m of matches) {
      if (!m.formation || !match(m, c.category)) continue;
      count[m.formation] = (count[m.formation] ?? 0) + 1;
    }
    const top = Object.entries(count).sort((a, b) => b[1] - a[1])[0];
    if (top) out[c.category] = Number(top[0]);
  }
  return out;
}
