import PageHeader from "@/components/ui/PageHeader";
import DefExplorer from "./DefExplorer";
import { DEFS, DEF_GROUPS } from "@/libs/plain";
import { getDefinitions, getMeta } from "@/libs/data";
import { coachShort, coachYears, listTeams } from "@/libs/coach";

export const dynamic = "force-dynamic";

function scopeBlocks(scope = []) {
  return scope.map((s) => {
    const m = /^\*\*([^*]+)\*\*:\s*(.*)$/s.exec(s);
    return m ? { title: m[1], text: m[2] } : { title: "", text: s };
  });
}

export default async function Metodologia({ params }) {
  const { coach: key } = await params;
  const [d, meta] = await Promise.all([getDefinitions(), getMeta(key)]);
  if (!d) return <PageHeader question="Sin definiciones publicadas." />;
  const byId = Object.fromEntries(d.definitions.map((x) => [x.id, x]));
  const mets = d.definitions.filter((x) => x.id.startsWith("M-"));
  const scope = scopeBlocks(d.scope);
  if (meta) {
    const teams = (meta.teams ?? []).map((t) => `${t.team} (${t.n})`);
    scope.unshift({ title: `Este técnico: ${coachShort(meta)}`, text: `${meta.coach}, ${meta.n_matches} partidos de Liga MX con ${listTeams(teams)}, ${coachYears(meta)}. Estas reglas son las mismas para todos los técnicos de la base.` });
  }
  const groups = DEF_GROUPS.map((g) => ({
    title: g.title,
    items: g.ids
      .filter((id) => byId[id])
      .map((id) => ({ id, term: byId[id].term, corto: DEFS[id]?.corto ?? null, diagram: DEFS[id]?.diagram ?? null, definition: byId[id].definition ?? null, threshold: byId[id].threshold ?? null, implements: byId[id].implements ?? null })),
  }));
  return (
    <>
      <PageHeader question="¿Con qué reglas se midió todo esto?" lead="Las definiciones se escribieron antes de calcular. Cada métrica y cada gráfica del dashboard cita la suya con un chip; si una definición cambia, se recalcula todo." />
      <DefExplorer scope={scope} groups={groups} mets={mets.map((x) => ({ id: x.id, block: x.block ?? null, statsbomb: x.statsbomb ?? null, own: x.own ?? null }))} />
    </>
  );
}
