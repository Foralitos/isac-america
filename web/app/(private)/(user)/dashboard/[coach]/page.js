import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import Finding from "@/components/ui/Finding";
import HuellaTiles from "@/components/charts/HuellaTiles";
import DeltaBars from "@/components/charts/DeltaBars";
import PlayClip from "@/components/ui/PlayClip";
import { clipFor } from "@/libs/clips";
import { getFindings, getMeta, getProfile } from "@/libs/data";
import { coachShort } from "@/libs/coach";
import { BLOCKS, dateLabel } from "@/libs/format";

export const dynamic = "force-dynamic";

export default async function Identidad({ params }) {
  const { coach: key } = await params;
  const [meta, profile, findings] = await Promise.all([getMeta(key), getProfile(key), getFindings(key)]);
  const short = coachShort(meta);
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
        question={`Así trabaja ${short}`}
        lead={`${profile.n_matches} partidos de Liga MX con ${(profile.teams ?? []).map((t) => `${t.team} (${t.n})`).join(", ")}, de ${dateLabel(profile.period?.from)} a ${dateLabel(profile.period?.to)}. Cada dato se compara con lo que hacen los demás equipos de la liga desde 2021 (${meta?.league_units ?? 198} temporadas de equipo).${profile.n_matches < 30 ? ` Este técnico tiene solo ${profile.n_matches} partidos en la Liga MX con datos y el análisis se hizo con esos: las cifras son orientativas y los cortes por contexto pueden moverse con pocas jornadas más.` : ""}`}
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
        <HuellaTiles rows={firmas} name={short} />
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
        {identityFindings.length === 0 && <p className="text-ink-2">Todavía no hay hallazgos redactados para {short}; las cifras de arriba son todo el perfil por ahora.</p>}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-9">
          {identityFindings.map((f) => {
            const clip = clipFor(key, f);
            if (!clip) return <Finding key={f.id} f={f} />;
            // Con jugada: ocupa las dos columnas, el hallazgo a la izquierda y el video que lo comprueba a la derecha.
            return (
              <div key={f.id} className="md:col-span-2 grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-x-10 gap-y-6 items-start">
                <Finding f={f} />
                <PlayClip clip={clip} />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
