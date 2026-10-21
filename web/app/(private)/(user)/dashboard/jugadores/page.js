import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import Finding from "@/components/ui/Finding";
import Stat from "@/components/ui/Stat";
import CategoryBars from "@/components/charts/CategoryBars";
import BeforeAfter from "@/components/charts/BeforeAfter";
import LineupPitch from "@/components/charts/LineupPitch";
import FormationMini from "@/components/charts/FormationMini";
import { getFindings, getPlayers } from "@/libs/data";
import { STATE_LABEL, STAKES_LABEL, formationLabel, tournamentKey } from "@/libs/format";

export const dynamic = "force-dynamic";

const STATES = ["perdiendo", "empate", "ganando"];
const TEAM_BY_TOURNAMENT = (t) => (t === "Apertura 2021" ? "Santos Laguna" : t === "Apertura 2026" ? "América" : "Pachuca");

export default async function Jugadores() {
  const [p, findings] = await Promise.all([getPlayers(), getFindings({ "fields.bloque": "M-5" })]);
  if (!p) return <PageHeader question="Sin datos de jugadores publicados." />;
  const n = p.n_matches;
  const start = p.formations.start_mix.slice(0, 6).map((f) => ({ label: formationLabel(f.formation), value: (f.n / n) * 100, n: f.n }));
  const firstByState = STATES.map((s) => {
    const r = p.subs.first_sub_by_state.find((x) => x.category === s);
    return { label: STATE_LABEL[s], value: r?.mean_minute ?? null, n: r?.n };
  });
  const firstByStakes = p.subs.first_sub_by_stakes.filter((r) => r.n >= 5).map((r) => ({ label: STAKES_LABEL[r.category] ?? r.label, value: r.mean_minute, n: r.n }));
  const impact = (st) => {
    const i = p.subs.first_sub_impact[st];
    if (!i) return [];
    return [
      { label: "Peligro creado", before: i.before_xg, after: i.after_xg, direction: 1 },
      { label: "Peligro concedido", before: i.before_xg_conceded, after: i.after_xg_conceded, direction: -1 },
      { label: "Dominio territorial", before: i.before_field_tilt, after: i.after_field_tilt, direction: 1, unit: "%" },
    ];
  };
  const headline = (st) => {
    const i = p.subs.first_sub_impact[st];
    if (!i) return "";
    const r = i.after_xg / (i.before_xg || 1);
    if (r >= 1.8) return `el peligro creado se ${r >= 2.5 ? "triplica" : "duplica"}`;
    if (r >= 1.1) return "crea más peligro";
    if (r <= 0.9) return "crea menos, concede menos";
    return "casi no cambia";
  };
  const top431 = p.formations.start_mix[0];
  const byTournament = Object.fromEntries(p.formations.by_tournament.map((t) => [t.tournament, t.mix]));
  const mainFormation = (t) => {
    const mix = byTournament[t] ?? {};
    return Object.entries(mix).sort((a, b) => b[1] - a[1])[0]?.[0] ?? 4231;
  };
  const core = [...p.xi.core_by_tournament].sort((a, b) => tournamentKey(a.tournament) - tournamentKey(b.tournament));
  const pctTactical = p.subs.reasons ? Math.round((100 * (p.subs.reasons.Tactical ?? 0)) / Object.values(p.subs.reasons).reduce((a, b) => a + b, 0)) : null;

  return (
    <>
      <PageHeader question="¿A quién usa, cómo los acomoda y cuándo cambia?" lead="Formación inicial, estabilidad del once, minuto del primer cambio según el marcador y la tabla, y qué pasa en los 15 minutos siguientes." />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <Stat value={formationLabel(top431.formation)} label={`Dibujo base, en ${((top431.n / n) * 100).toFixed(0)} % de los partidos`} />
        <Stat value={p.subs.per_match?.toFixed(1)} label="Cambios por partido" reference={pctTactical != null ? `${pctTactical} % tácticos` : null} refLabel="" />
        <Stat value={p.xi.changes_per_match?.toFixed(1)} label="Titulares distintos de un partido al siguiente" />
        <Stat value={p.formations.matches_with_change} label="Partidos con cambio real de dibujo" reference={`de ${n}`} refLabel="" />
      </div>

      {findings.length > 0 && (
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mb-12">
          {findings.map((f) => (
            <Finding key={f.id} f={f} compact />
          ))}
        </div>
      )}

      <Card title="Qué pasa alrededor del primer cambio" sub="Promedio por partido en los 15 minutos antes y después del primer cambio, según cómo iba el marcador en ese momento. Peligro = goles esperados." className="mb-6">
        <div className="grid md:grid-cols-3 gap-10">
          {STATES.map((s) => (
            <div key={s}>
              <p className="text-base font-semibold text-ink leading-snug">
                {STATE_LABEL[s]}: {headline(s)}
              </p>
              <p className="text-xs text-ink-3 mb-4">{p.subs.first_sub_impact[s]?.n} partidos</p>
              <BeforeAfter rows={impact(s)} />
            </div>
          ))}
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <Card title="Formación inicial" sub="Porcentaje de partidos que arranca con cada dibujo">
          <CategoryBars data={start} unit="%" />
        </Card>
        <Card title="Cambios de dibujo más repetidos" sub="De qué formación a cuál, y cómo iba el marcador">
          <ul className="divide-y divide-line-2">
            {p.formations.top_changes.slice(0, 5).map((c, i) => (
              <li key={i} className="flex items-center gap-4 py-2.5">
                <FormationMini formation={c.from_formation} active={false} />
                <svg width="18" height="12" viewBox="0 0 18 12" aria-hidden className="text-ink-3 shrink-0">
                  <path d="M1 6h14M10 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <FormationMini formation={c.formation} />
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-ink num">
                    {formationLabel(String(c.from_formation).replace(/\.0$/, ""))} a {formationLabel(c.formation)}
                  </p>
                  <p className="text-xs text-ink-3">{STATE_LABEL[c.state]?.toLowerCase()}</p>
                </div>
                <p className="text-sm font-semibold text-ink num">
                  {c.n} <span className="font-normal text-ink-3">veces</span>
                </p>
              </li>
            ))}
          </ul>
          <p className="text-xs text-ink-3 mt-3">
            Cambios de dibujo por estado: {STATES.map((s) => `${(p.formations.changes_by_state[s] ?? 0)} ${STATE_LABEL[s].toLowerCase()}`).join(", ")}.
          </p>
        </Card>
        <Card title="Minuto del primer cambio según el marcador" sub="Promedio en minutos. Cambia antes cuando pierde.">
          <CategoryBars data={firstByState} unit="min" />
        </Card>
        <Card title="Minuto del primer cambio según la tabla" sub="Promedio en minutos. Solo situaciones con 5 partidos o más.">
          <CategoryBars data={firstByStakes} unit="min" />
        </Card>
      </div>

      <Card title="El núcleo, torneo por torneo" sub="Jugadores que fueron titulares en 70 % o más de los partidos del torneo, colocados en el dibujo base de ese torneo. El número es su porcentaje de titularidades; los huecos punteados rotaron.">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-8">
          {core.map((t) => (
            <LineupPitch key={t.tournament} core={t.core} formation={mainFormation(t.tournament)} title={t.tournament} caption={`${TEAM_BY_TOURNAMENT(t.tournament)}, ${t.n_matches} partidos, ${formationLabel(mainFormation(t.tournament))}`} width={190} />
          ))}
        </div>
      </Card>
    </>
  );
}
