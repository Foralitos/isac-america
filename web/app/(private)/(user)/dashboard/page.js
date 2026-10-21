import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import Finding from "@/components/ui/Finding";
import HuellaTiles from "@/components/charts/HuellaTiles";
import DeltaBars from "@/components/charts/DeltaBars";
import { getFindings, getMeta, getProfile } from "@/libs/data";
import { BLOCKS, dateLabel } from "@/libs/format";

export const dynamic = "force-dynamic";

export default async function Identidad() {
  const [meta, profile, findings] = await Promise.all([getMeta(), getProfile(), getFindings()]);
  if (!profile) {
    return <PageHeader question="Todavía no hay resultados publicados." lead="Falta publicar los resultados desde el pipeline." />;
  }
  const all = Object.values(profile.blocks).flat();
  const firmas = all
    .filter((m) => m.pct != null && !m.metric.startsWith("seq_lane") && !m.metric.startsWith("seq_start"))
    .sort((a, b) => Math.abs(b.pct - 50) - Math.abs(a.pct - 50))
    .slice(0, 8);
  const identityFindings = findings.filter((f) => !f.fields?.escenario);
  const { W, D, L } = profile.record;
  return (
    <>
      <PageHeader
        question="Así trabaja Almada"
        lead={`${profile.n_matches} partidos de Liga MX con ${(profile.teams ?? []).map((t) => `${t.team} (${t.n})`).join(", ")}, de ${dateLabel(profile.period?.from)} a ${dateLabel(profile.period?.to)}. Cada dato se compara con lo que hacen los demás equipos de la liga desde 2021 (${meta?.league_units ?? 198} temporadas de equipo).`}
        aside={
          <div className="flex gap-6">
            {[
              ["Ganados", W],
              ["Empatados", D],
              ["Perdidos", L],
            ].map(([k, v]) => (
              <div key={k}>
                <p className="display text-4xl text-ink">{v}</p>
                <p className="text-xs text-ink-3 mt-1">{k}</p>
              </div>
            ))}
          </div>
        }
      />

      <section className="mb-10">
        <h2 className="text-2xl font-semibold tracking-tight text-ink">La huella</h2>
        <p className="text-sm text-ink-2 mt-1 mb-5">Las ocho cosas que hace más distinto que el resto de la liga. Azul le favorece, naranja le pesa, negro solo describe su estilo.</p>
        <HuellaTiles rows={firmas} />
      </section>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {Object.entries(BLOCKS).map(([id, label]) => (
          <Card key={id} title={label} sub="Cuánto más o menos que la liga hace cada cosa, de mayor a menor diferencia.">
            <DeltaBars rows={(profile.blocks[id] ?? []).filter((m) => m.pct != null)} />
          </Card>
        ))}
      </div>

      <section>
        <h2 className="text-2xl font-semibold tracking-tight text-ink mb-5">Lo que define a sus equipos</h2>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-9">
          {identityFindings.map((f) => (
            <Finding key={f.id} f={f} />
          ))}
        </div>
      </section>
    </>
  );
}
