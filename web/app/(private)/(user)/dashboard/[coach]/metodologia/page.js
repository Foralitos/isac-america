import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import PitchDiagram from "@/components/charts/PitchDiagram";
import inlineMd from "@/libs/inlineMd";
import { DEFS, DEF_GROUPS } from "@/libs/plain";
import { getDefinitions } from "@/libs/data";

export const dynamic = "force-dynamic";

const ICONS = {
  "D-01": <circle cx="12" cy="12" r="8" />,
  "D-20": <path d="M3 11 12 4l9 7M5 10v10h14V10" />,
  "D-24": <path d="M6 4h12v4a6 6 0 0 1-12 0V4ZM9 20h6M12 14v6M3 6h3M18 6h3" />,
  "D-25": <path d="M12 3 4 6v6c0 4.4 3.4 8.2 8 9 4.6-.8 8-4.6 8-9V6l-8-3Z" />,
  "D-26": <path d="M4 5h16v15H4zM4 10h16M8 3v4M16 3v4" />,
  "D-26b": <path d="M12 3 4 6v6c0 4.4 3.4 8.2 8 9 4.6-.8 8-4.6 8-9V6l-8-3ZM12 8v8M8 12h8" />,
};

function Icon({ id }) {
  return (
    <div className="h-16 w-16 rounded-lg bg-grass-soft text-grass flex items-center justify-center">
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        {ICONS[id] ?? <circle cx="12" cy="12" r="8" />}
      </svg>
    </div>
  );
}

function scopeBlocks(scope = []) {
  return scope.map((s) => {
    const m = /^\*\*([^*]+)\*\*:\s*(.*)$/s.exec(s);
    return m ? { title: m[1], text: m[2] } : { title: "", text: s };
  });
}

export default async function Metodologia() {
  const d = await getDefinitions();
  if (!d) return <PageHeader question="Sin definiciones publicadas." />;
  const byId = Object.fromEntries(d.definitions.map((x) => [x.id, x]));
  const mets = d.definitions.filter((x) => x.id.startsWith("M-"));
  const scope = scopeBlocks(d.scope);
  return (
    <>
      <PageHeader question="¿Con qué reglas se midió todo esto?" lead="Las definiciones se escribieron antes de calcular. Cada métrica y cada gráfica del dashboard cita la suya con un chip; si una definición cambia, se recalcula todo." />

      <div className="grid md:grid-cols-[11rem_minmax(0,1fr)] gap-x-10 gap-y-8 items-start">
        <nav aria-label="Índice" className="md:sticky md:top-8 text-sm">
          <ul className="space-y-1">
            <li>
              <a href="#alcance" className="block px-3 py-1.5 rounded-md text-ink hover:bg-surface">
                Alcance y límites
              </a>
            </li>
            {DEF_GROUPS.map((g) => (
              <li key={g.title}>
                <a href={`#${g.ids[0]}`} className="block px-3 py-1.5 rounded-md text-ink hover:bg-surface">
                  {g.title}
                </a>
                <ul className="pl-3">
                  {g.ids.map((id) => (
                    <li key={id}>
                      <a href={`#${id}`} className="block px-3 py-1 rounded-md text-xs text-ink-3 hover:text-ink hover:bg-surface truncate">
                        <span className="num">{id}</span> {DEFS[id]?.term}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            <li>
              <a href="#metricas" className="block px-3 py-1.5 rounded-md text-ink hover:bg-surface">
                Métricas por bloque
              </a>
            </li>
          </ul>
        </nav>

        <div className="min-w-0 space-y-12">
          <section id="alcance" className="scroll-mt-8">
            <h2 className="text-2xl font-semibold tracking-tight text-ink mb-5">Alcance y límites</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {scope.map((s, i) => (
                <div key={i} className="bg-surface border border-line rounded-lg p-5">
                  {s.title && <h3 className="font-semibold text-ink mb-2">{s.title}</h3>}
                  <p className="text-sm text-ink-2 leading-relaxed">{inlineMd(s.text)}</p>
                </div>
              ))}
            </div>
          </section>

          {DEF_GROUPS.map((g) => (
            <section key={g.title}>
              <h2 className="text-2xl font-semibold tracking-tight text-ink mb-2">{g.title}</h2>
              <div className="bg-surface border border-line rounded-lg px-6 divide-y divide-line-2">
                {g.ids.map((id) => {
                  const x = byId[id];
                  const p = DEFS[id];
                  if (!x) return null;
                  return (
                    <article key={id} id={id} className="grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-x-10 gap-y-4 py-8 scroll-mt-8">
                      <div className="flex items-start">{p?.diagram ? <PitchDiagram variant={p.diagram} /> : <Icon id={id} />}</div>
                      <div className="min-w-0">
                        <p className="text-xs text-ink-3 num mb-1">{id}</p>
                        <h3 className="text-xl font-semibold text-ink leading-snug">{x.term}</h3>
                        <p className="text-base text-ink-2 mt-2 leading-relaxed max-w-prose">{p?.corto}</p>
                        <details className="explore mt-4">
                          <summary className="inline-flex items-center gap-1.5 text-sm text-almada hover:underline">
                            <span className="chev inline-block">›</span> La regla exacta
                          </summary>
                          <div className="mt-3 text-sm text-ink-2 leading-relaxed space-y-2 max-w-prose">
                            <p>{inlineMd(x.definition)}</p>
                            {x.threshold && x.threshold !== "—" && (
                              <p>
                                <span className="font-semibold text-ink">Umbral:</span> {inlineMd(x.threshold)}
                              </p>
                            )}
                            {x.implements && (
                              <p>
                                <span className="font-semibold text-ink">Código:</span> <span className="field">{x.implements}</span>
                              </p>
                            )}
                          </div>
                        </details>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}

          <section id="metricas" className="scroll-mt-8">
            <h2 className="text-2xl font-semibold tracking-tight text-ink mb-2">Métricas por bloque</h2>
            <p className="text-sm text-ink-2 mb-5 max-w-prose">Qué se toma tal cual de Hudl StatsBomb y qué se calculó aquí con las definiciones de arriba.</p>
            <Card>
              <div className="divide-y divide-line-2">
                {mets.map((x) => (
                  <div key={x.id} className="grid md:grid-cols-[10rem_minmax(0,1fr)_minmax(0,1fr)] gap-x-8 gap-y-2 py-5">
                    <div>
                      <p className="text-xs text-ink-3 num">{x.id}</p>
                      <p className="font-semibold text-ink">{x.block}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-ink-3 mb-1">Viene de StatsBomb</p>
                      <p className="text-sm text-ink-2 leading-relaxed">{inlineMd(x.statsbomb)}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-ink-3 mb-1">Es nuestra</p>
                      <p className="text-sm text-ink-2 leading-relaxed">{inlineMd(x.own)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </section>
        </div>
      </div>
    </>
  );
}
