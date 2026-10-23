import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import { DefChips } from "@/components/ui/DefChip";
import { getCoach, getSimulation } from "@/libs/data";
import { coachShort } from "@/libs/coach";

export const dynamic = "force-dynamic";

const f1 = (v) => Number(v).toFixed(1);
const f2 = (v) => Number(v).toFixed(2);
const sign1 = (v) => `${v > 0 ? "+" : v < 0 ? "−" : ""}${Math.abs(v).toFixed(1)}`;
const of100 = (p) => Math.round(p * 100);
const date = (d) => new Date(`${d}T12:00:00`).toLocaleDateString("es-MX", { day: "numeric", month: "short", year: "numeric" });
const SHORT = (t) => t.replace("Apertura ", "Ap. ").replace("Clausura ", "Cl. ");

// Qué tanto se salió un torneo de lo normal en la liga, en palabras.
function luckWords(pct) {
  if (pct >= 90) return `sacó más de lo merecido que el ${Math.round(pct)} % de la liga`;
  if (pct <= 10) return `dejó ir más que el ${Math.round(100 - pct)} % de la liga`;
  return "dentro de lo normal en la liga";
}

function scoreLine(m) {
  return m.is_home ? `${m.team} ${m.gf}-${m.ga} ${m.opponent}` : `${m.opponent} ${m.ga}-${m.gf} ${m.team}`;
}

// Mancuerna por torneo: círculo hueco = merecidos, sólido = reales, la raya es la suerte.
function Dumbbell({ tours, max }) {
  const x = (v) => `${(v / max) * 100}%`;
  const groups = [];
  tours.forEach((t) => {
    const g = groups[groups.length - 1];
    if (!g || g.team !== t.team) groups.push({ team: t.team, rows: [t] });
    else g.rows.push(t);
  });
  const ticks = [];
  for (let v = 0; v <= max; v += 10) ticks.push(v);
  return (
    <div>
      <div className="grid grid-cols-[7.5rem_minmax(0,1fr)_6.5rem] gap-x-4 text-[11px] text-ink-3 mb-1">
        <span />
        <div className="relative h-4">
          {ticks.map((v) => (
            <span key={v} className="absolute -translate-x-1/2 num" style={{ left: x(v) }}>
              {v}
            </span>
          ))}
        </div>
        <span className="text-right">real − merecido</span>
      </div>
      {groups.map((g) => (
        <div key={g.team} className="mt-3 first:mt-0">
          <p className="text-xs font-semibold text-ink border-l-2 border-ink pl-1.5 mb-1">{g.team}</p>
          {g.rows.map((t) => {
            const up = t.diff >= 0;
            const lo = Math.min(t.pts, t.xpts);
            const hi = Math.max(t.pts, t.xpts);
            const extreme = t.n >= 5 && (t.pct >= 90 || t.pct <= 10);
            return (
              <div key={t.tournament} className="grid grid-cols-[7.5rem_minmax(0,1fr)_6.5rem] gap-x-4 items-center h-9 border-b border-line-2 last:border-0">
                <span className="text-sm text-ink-2 truncate">
                  {SHORT(t.tournament)} <span className="text-ink-3 text-xs num">{t.n} PJ</span>
                </span>
                <div className="relative h-full">
                  {ticks.map((v) => (
                    <span key={v} className="absolute top-1 bottom-1 w-px bg-line-2" style={{ left: x(v) }} aria-hidden />
                  ))}
                  <span className={`absolute top-1/2 -translate-y-1/2 h-1 rounded-full ${up ? "bg-almada" : "bg-contra"}`} style={{ left: x(lo), width: `calc(${x(hi)} - ${x(lo)})` }} />
                  <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full border-2 border-ink-3 bg-surface" style={{ left: x(t.xpts) }} title={`Merecía ${f1(t.xpts)} puntos`} />
                  <span className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full ${up ? "bg-almada" : "bg-contra"}`} style={{ left: x(t.pts) }} title={`Sacó ${t.pts} puntos`} />
                </div>
                <span className={`text-right num text-sm ${extreme ? (up ? "text-almada font-semibold" : "text-contra font-semibold") : "text-ink-3"}`}>
                  {sign1(t.diff)} pts
                </span>
              </div>
            );
          })}
        </div>
      ))}
      <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-xs text-ink-2">
        <span className="inline-flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full border-2 border-ink-3 bg-surface" /> puntos que merecía por sus ocasiones
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-almada" /> puntos que sacó, cuando fueron más
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-contra" /> cuando fueron menos
        </span>
      </div>
    </div>
  );
}

function MatchItem({ m, prob, href }) {
  return (
    <li>
      <Link href={href} className="group flex items-center justify-between gap-3 px-3 py-2 rounded-md border border-transparent hover:border-line hover:bg-surface transition-colors">
        <span className="min-w-0">
          <span className="block text-sm font-medium text-ink truncate">{scoreLine(m)}</span>
          <span className="block text-xs text-ink-3">
            {prob(m)}. {date(m.date)}
          </span>
        </span>
        <span className="shrink-0 text-ink-3 group-hover:text-almada group-hover:translate-x-0.5 transition-all" aria-hidden>
          ›
        </span>
      </Link>
    </li>
  );
}

const SHOWN = 5;

function MatchList({ title, sub, list, ids, byId, prob, tone, coachKey, team }) {
  const items = ids.map((id) => byId[id]).filter((m) => !team || m.team === team);
  const href = (m) => `/dashboard/${coachKey}/suerte/${m.match_id}?l=${list}${team ? `&e=${encodeURIComponent(team)}` : ""}`;
  return (
    <div className="min-w-0">
      <p className={`text-sm font-semibold ${tone}`}>
        {title} <span className="text-ink-3 font-normal num">{items.length}</span>
      </p>
      <p className="text-xs text-ink-3 mt-0.5">{sub}</p>
      <ul className="mt-3 space-y-0.5">
        {items.slice(0, SHOWN).map((m) => (
          <MatchItem key={m.match_id} m={m} prob={prob} href={href(m)} />
        ))}
      </ul>
      {items.length > SHOWN && (
        <details className="explore mt-1">
          <summary className="px-3 py-2 text-xs text-ink-2 hover:text-ink inline-flex items-center gap-1">
            <span className="chev inline-block">›</span> Ver los {items.length}
          </summary>
          <ul className="space-y-0.5">
            {items.slice(SHOWN).map((m) => (
              <MatchItem key={m.match_id} m={m} prob={prob} href={href(m)} />
            ))}
          </ul>
        </details>
      )}
      {items.length === 0 && <p className="text-sm text-ink-3 mt-3 px-3">Ninguno con este equipo.</p>}
    </div>
  );
}

export default async function Suerte({ params, searchParams }) {
  const { coach: key } = await params;
  const sp = await searchParams;
  const [doc, coach] = await Promise.all([getSimulation(key), getCoach(key)]);
  const short = coachShort(coach);
  const question = `¿${short} ganó lo que mereció?`;
  if (!doc) {
    return (
      <>
        <PageHeader question={question} />
        <p className="text-ink-2">Este técnico todavía no tiene la simulación calculada.</p>
      </>
    );
  }
  const o = doc.overall;
  const byId = Object.fromEntries(doc.matches.map((m) => [m.match_id, m]));
  const perMatch = o.diff / o.n;
  const fair = Math.abs(perMatch) < 0.15;
  const tours = doc.tournaments;
  const big = tours.filter((t) => t.n >= 5).length ? tours.filter((t) => t.n >= 5) : tours;
  const best = big.reduce((a, b) => (b.diff > a.diff ? b : a));
  const worst = big.reduce((a, b) => (b.diff < a.diff ? b : a));
  const last = tours[tours.length - 1];
  const lastExtreme = last.n >= 5 && (last.pct >= 90 || last.pct <= 10);
  const max = Math.ceil(Math.max(...tours.map((t) => Math.max(t.pts, t.xpts))) / 10) * 10;
  const teams = doc.by_team.map((t) => t.team);
  const team = teams.includes(sp?.equipo) ? sp.equipo : null;
  const controlPct = Math.round(o.wins_control_share * 100);
  const lp10 = Math.abs(doc.league.p10 * 17).toFixed(0);
  const lp90 = (doc.league.p90 * 17).toFixed(0);

  return (
    <>
      <PageHeader
        question={question}
        lead={`Cada partido se volvió a jugar ${doc.n_sims.toLocaleString("es-MX")} veces con las ocasiones que hubo: cada ocasión entra con su probabilidad de gol. Si sacó más puntos de los que merecían sus ocasiones, tuvo suerte o un portero en racha; si sacó menos, se le fueron partidos que jugaba para ganar.`}
      />

      <section className="answer mb-10">
        <div className="flex items-baseline flex-wrap gap-x-3">
          <span className={`display text-6xl ${fair ? "text-ink" : perMatch > 0 ? "text-almada" : "text-contra"}`}>{sign1(o.diff)}</span>
          <span className="text-sm text-ink-2">puntos sobre lo que merecía, en {o.n} partidos</span>
        </div>
        <p className="text-sm text-ink-3 mt-1.5 num">
          Sacó {o.pts} puntos ({f2(o.ppg)} por partido); sus ocasiones daban para {f1(o.xpts)} ({f2(o.xppg)} por partido).
        </p>
        <h3 className="text-xl font-semibold text-ink leading-snug mt-4 max-w-3xl">
          {fair ? `En conjunto sus resultados salen de su juego, no de la suerte.` : perMatch > 0 ? `En conjunto sacó más de lo que jugó.` : `En conjunto jugó mejor de lo que dicen sus resultados.`}{" "}
          Los torneos que se salen son {SHORT(best.tournament)} con {best.team}, {sign1(best.diff)} puntos ({luckWords(best.pct)}), y {SHORT(worst.tournament)} con {worst.team}, {sign1(worst.diff)} ({luckWords(worst.pct)}).
        </h3>
        <div className="grid md:grid-cols-2 gap-x-6 gap-y-3 mt-4 max-w-4xl">
          <div>
            <p className="text-xs font-semibold text-almada">Si eres su staff</p>
            <p className="text-sm text-ink-2 mt-1 leading-relaxed">
              {lastExtreme
                ? `${last.team} va ${sign1(last.diff)} en ${last.n} partidos del ${last.tournament}: ${last.pts} puntos reales contra ${f1(last.xpts)} merecidos. ${last.diff > 0 ? "La tabla va adelante del juego; no se debe leer el arranque como si ya estuviera todo resuelto." : "El juego va adelante de la tabla; los resultados deberían llegar si se sostiene lo que genera."}`
                : `En el ${last.tournament} con ${last.team} los puntos van parejos con lo que genera (${last.pts} contra ${f1(last.xpts)}): la tabla refleja el juego.`}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-contra">Si lo enfrentas</p>
            <p className="text-sm text-ink-2 mt-1 leading-relaxed">
              {controlPct} de cada 100 de sus triunfos fueron de control (los ganaba en 6 de cada 10 repeticiones o más) y {o.wins_stolen} los ganó con menos de 1 en 3 a favor. {controlPct < 50 ? "La mayoría de sus victorias se deciden en pocas ocasiones: un partido cerrado le quita su ventaja." : "Cuando gana, suele ser porque domina: hay que quitarle ocasiones, no esperar que falle."}
            </p>
          </div>
        </div>
        <DefChips ids={["D-28"]} />
      </section>

      <Card
        title="Puntos reales contra merecidos, torneo por torneo"
        sub={`La raya es la diferencia. En la liga, 8 de cada 10 equipos terminan un torneo de 17 partidos entre ${lp10} puntos abajo y ${lp90} arriba de lo que merecían.`}
        className="mb-10"
      >
        <Dumbbell tours={tours} max={max} />
      </Card>

      <div className="flex flex-wrap items-baseline justify-between gap-3 mb-4">
        <h2 className="text-lg font-semibold text-ink">Los partidos que se salen</h2>
        <p className="text-sm text-ink-2">Abre cualquiera para verlo repetirse y volver a jugarlo.</p>
      </div>
      {teams.length > 1 && (
        <div className="flex flex-wrap gap-2 mb-6" role="group" aria-label="Filtrar por equipo">
          {[null, ...teams].map((t) => {
            const on = t === team;
            const n = t ? doc.by_team.find((b) => b.team === t).n : o.n;
            return (
              <Link
                key={t ?? "todos"}
                href={t ? `/dashboard/${key}/suerte?equipo=${encodeURIComponent(t)}` : `/dashboard/${key}/suerte`}
                scroll={false}
                className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${on ? "bg-ink text-white border-ink" : "border-line text-ink-2 hover:border-ink-3 hover:text-ink"}`}
              >
                {t ?? "Todos"} <span className={`num text-xs ${on ? "text-white/60" : "text-ink-3"}`}>{n}</span>
              </Link>
            );
          })}
        </div>
      )}
      <div className="grid md:grid-cols-3 gap-x-8 gap-y-8 mb-12">
        <MatchList list="control" title="Ganó jugando mejor" sub="Los ganaba en 6 de cada 10 repeticiones o más." ids={doc.lists.control} byId={byId} prob={(m) => `Lo ganaba ${of100(m.p_w)} de cada 100`} tone="text-almada" coachKey={key} team={team} />
        <MatchList list="stolen" title="Ganó sin merecerlo" sub="Lo ganaba en menos de 1 de cada 3." ids={doc.lists.stolen} byId={byId} prob={(m) => `Lo ganaba ${of100(m.p_w)} de cada 100`} tone="text-ink" coachKey={key} team={team} />
        <MatchList list="robbed" title="Perdió sin merecerlo" sub="Lo perdía en menos de 1 de cada 3." ids={doc.lists.robbed} byId={byId} prob={(m) => `Lo perdía ${of100(m.p_l)} de cada 100`} tone="text-contra" coachKey={key} team={team} />
      </div>

    </>
  );
}
