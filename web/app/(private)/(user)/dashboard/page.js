import Link from "next/link";
import { getCoaches } from "@/libs/data";
import { coachShort, coachYears, listTeams } from "@/libs/coach";
import RecordBar from "@/components/ui/RecordBar";
import PickerFrame from "./PickerFrame";

export const dynamic = "force-dynamic";

// Elige tu técnico: una tarjeta por técnico publicado. Todo lo demás del dashboard cuelga de la clave que eliges aquí.
export default async function ElegirTecnico() {
  const coaches = await getCoaches();
  return (
    <PickerFrame>
      <header className="border-b border-line pb-6 mb-8">
        <h1 className="display text-3xl md:text-4xl text-ink">Elige al técnico</h1>
        <p className="text-ink-2 mt-3 text-base md:text-lg leading-relaxed max-w-2xl">
          Cada técnico se lee con las mismas reglas y contra la misma liga. Elige uno y el dashboard entero se llena con sus partidos.
        </p>
      </header>
      {coaches.length === 0 ? (
        <p className="text-ink-2">Todavía no hay técnicos publicados.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {coaches.map((c) => (
            <Link key={c.key} href={`/dashboard/${c.key}`} className="group bg-surface border border-line rounded-lg p-5 hover:border-almada transition-colors focus-visible:ring-2 focus-visible:ring-almada">
              <p className="display text-2xl text-ink group-hover:text-almada">{coachShort(c)}</p>
              <p className="text-xs text-ink-3 mt-0.5">{c.coach}</p>
              <p className="text-sm text-ink-2 mt-3">
                {listTeams((c.teams ?? []).map((t) => t.team))}, {coachYears(c)}.
              </p>
              <div className="mt-4">
                <p className="text-sm text-ink mb-1.5">
                  <span className="display text-xl">{c.n_matches}</span> partidos
                </p>
                {c.record && <RecordBar {...c.record} compact />}
              </div>
              {c.n_findings === 0 && <p className="text-[11px] text-ink-3 mt-3">Sin hallazgos redactados todavía: solo cifras.</p>}
            </Link>
          ))}
        </div>
      )}
    </PickerFrame>
  );
}
