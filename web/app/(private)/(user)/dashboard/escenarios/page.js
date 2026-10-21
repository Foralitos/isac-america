import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import Finding from "@/components/ui/Finding";
import RecordBar from "@/components/ui/RecordBar";
import ScenarioRail from "@/components/ui/ScenarioRail";
import { DefChips } from "@/components/ui/DefChip";
import CategoryBars from "@/components/charts/CategoryBars";
import ChangeMatrix from "@/components/charts/ChangeMatrix";
import { getFindings, getScenario } from "@/libs/data";
import { BLOCKS, SCENARIOS, SMALL_N, catLabel, tournamentKey } from "@/libs/format";
import { metricLabel, techLabel, unitLabel } from "@/libs/words";

export const dynamic = "force-dynamic";

const PILL = "px-3 py-1.5 rounded-full text-sm border transition-colors";
const ON = "bg-ink text-white border-ink";
const OFF = "bg-surface text-ink-2 border-line hover:border-ink-3";

export default async function Escenarios({ searchParams }) {
  const sp = await searchParams;
  const escenario = SCENARIOS.some((s) => s.id === sp?.escenario) ? sp.escenario : "localia";
  const bloque = BLOCKS[sp?.bloque] ? sp.bloque : null;
  const [doc, findings] = await Promise.all([getScenario(escenario), getFindings({ "fields.escenario": escenario })]);
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
  return (
    <>
      <PageHeader question={meta.q} lead="Mismo técnico, distinto contexto. Cada escenario abre con la respuesta y las métricas que más se mueven; el detalle completo está al final." />
      <div className="grid md:grid-cols-[15rem_minmax(0,1fr)] gap-x-10 gap-y-8 items-start">
        <ScenarioRail active={escenario} bloque={bloque} />
        <div className="min-w-0 space-y-10">
          <section>
            <div className="grid gap-x-8 gap-y-5" style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${cats.length > 5 ? 9 : 12}rem, 1fr))` }}>
              {cats.map((c) => {
                const small = !segment && (c.n ?? 0) < SMALL_N;
                return (
                  <div key={c.category} className={small ? "opacity-70" : ""}>
                    <p className="text-sm text-ink leading-snug">{catLabel(c)}</p>
                    <p className="display text-3xl text-ink mt-1">
                      {segment ? Math.round(c.minutes).toLocaleString("es-MX") : c.n}
                      <span className="text-sm text-ink-3 font-normal ml-1.5" style={{ fontStretch: "100%", fontVariationSettings: '"wdth" 100' }}>
                        {segment ? "minutos" : "partidos"}
                      </span>
                    </p>
                    {segment ? (
                      <div className="h-1.5 w-full max-w-xs bg-line-2 rounded-sm mt-2 overflow-hidden">
                        <div className="h-full bg-almada" style={{ width: `${((c.minutes ?? 0) / totalMin) * 100}%` }} />
                      </div>
                    ) : c.record ? (
                      <div className="mt-2">
                        <RecordBar {...c.record} compact />
                      </div>
                    ) : null}
                    {small && <p className="text-[11px] text-ink-3 mt-1">Muestra chica, solo orientativo</p>}
                  </div>
                );
              })}
            </div>
            {doc?.note && <p className="text-xs text-ink-3 mt-4">Las cifras de este escenario son {doc.note}.</p>}
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
