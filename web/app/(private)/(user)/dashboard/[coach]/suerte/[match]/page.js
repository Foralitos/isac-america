import Link from "next/link";
import { notFound } from "next/navigation";
import { DefChips } from "@/components/ui/DefChip";
import { getSimulationMatch } from "@/libs/data";
import Replay from "../Replay";

export const dynamic = "force-dynamic";

const LISTS = {
  control: { title: "Ganó jugando mejor", tone: "text-almada" },
  stolen: { title: "Ganó sin merecerlo", tone: "text-ink" },
  robbed: { title: "Perdió sin merecerlo", tone: "text-contra" },
};

function Nav({ href, label, sub, align = "left" }) {
  if (!href) return <span />;
  return (
    <Link href={href} className={`group block rounded-md px-3 py-2 hover:bg-line-2 transition-colors ${align === "right" ? "text-right" : ""}`}>
      <span className="block text-xs text-ink-3">{label}</span>
      <span className="block text-sm font-medium text-ink group-hover:underline underline-offset-2">{sub}</span>
    </Link>
  );
}

export default async function PartidoSimulado({ params, searchParams }) {
  const { coach: key, match } = await params;
  const sp = await searchParams;
  const doc = await getSimulationMatch(key, Number(match));
  if (!doc) notFound();
  const m = doc.match;
  // Se navega dentro de la lista de la que se llegó; si no, en orden de fecha.
  const listKey = LISTS[sp?.l] ? sp.l : Object.keys(LISTS).find((k) => doc.lists[k].includes(m.match_id));
  const team = sp?.e && Object.values(doc.teamOf).includes(sp.e) ? sp.e : null;
  const ids = (listKey ? doc.lists[listKey] : doc.order).filter((id) => !team || doc.teamOf[id] === team);
  const i = ids.indexOf(m.match_id);
  const qs = new URLSearchParams({ ...(listKey ? { l: listKey } : {}), ...(team ? { e: team } : {}) }).toString();
  const q = qs ? `?${qs}` : "";
  const at = (j) => (j >= 0 && j < ids.length ? `/dashboard/${key}/suerte/${ids[j]}${q}` : null);
  const where = `${listKey ? LISTS[listKey].title : "Todos sus partidos"}${team ? ` con ${team}` : ""}`;

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <Link href={`/dashboard/${key}/suerte${team ? `?equipo=${encodeURIComponent(team)}` : ""}`} className="text-sm text-ink-2 hover:text-ink inline-flex items-center gap-1.5">
          <span aria-hidden>‹</span> Suerte o dominio
        </Link>
        <p className="text-sm">
          <span className={`font-semibold ${listKey ? LISTS[listKey].tone : "text-ink"}`}>{where}</span>
          {i >= 0 && (
            <span className="text-ink-3 num">
              , {i + 1} de {ids.length}
            </span>
          )}
        </p>
      </div>

      <p className="text-ink-2 text-base leading-relaxed max-w-3xl mb-6">
        Este partido se volvió a jugar {doc.n_sims.toLocaleString("es-MX")} veces con las mismas ocasiones: en cada repetición, cada ocasión entra o no según su probabilidad de gol. Así se ve si el resultado fue lo normal o una sorpresa. Dale a volver a jugarlo para verlo tú.
      </p>

      <Replay m={m} nSims={doc.n_sims} />

      <div className="grid grid-cols-2 gap-4 mt-6 border-t border-line pt-4">
        <Nav href={at(i - 1)} label="‹ Anterior" sub={where} />
        <Nav href={at(i + 1)} label="Siguiente ›" sub={where} align="right" />
      </div>
      <DefChips ids={["D-28"]} className="mt-6" />
    </>
  );
}
