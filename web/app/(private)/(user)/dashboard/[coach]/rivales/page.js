import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import RecordBar from "@/components/ui/RecordBar";
import { DefChips } from "@/components/ui/DefChip";
import { getCoach, getRivals } from "@/libs/data";
import { coachShort } from "@/libs/coach";
import { level } from "@/libs/words";

export const dynamic = "force-dynamic";

const BAND = { bajo: "Bajo", medio: "Medio", alto: "Alto" };
const f2 = (v) => (v == null ? "sin dato" : Number(v).toFixed(2));
const sign = (v) => (v == null ? "" : `${v > 0 ? "+" : ""}${Number(v).toFixed(2)}`);
const date = (d) => new Date(`${d}T12:00:00`).toLocaleDateString("es-MX", { day: "numeric", month: "short", year: "numeric" });

// Puntos por partido de un tercio contra el promedio del técnico: verde arriba, rojo abajo.
function tone(ppg, base) {
  if (ppg == null) return "text-ink-3";
  if (ppg >= base + 0.15) return "text-win";
  if (ppg <= base - 0.15) return "text-loss";
  return "text-ink";
}

function StyleRow({ s, base }) {
  const max = 3;
  return (
    <div className="grid grid-cols-[9rem_minmax(0,1fr)] md:grid-cols-[11rem_minmax(0,1fr)] gap-4 items-center py-3 border-b border-line-2 last:border-0">
      <div>
        <p className="text-sm font-semibold text-ink">{s.label}</p>
        <p className="text-xs text-ink-3 mt-0.5">rivales que {s.high_pl}</p>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {s.groups.map((g) => (
          <div key={g.band} className="min-w-0">
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-[11px] uppercase tracking-wide text-ink-3">{BAND[g.band]}</span>
              <span className="text-[11px] text-ink-3 num">{g.n} PJ</span>
            </div>
            <div className="h-2 bg-line-2 rounded-sm mt-1 overflow-hidden">
              <div className={`h-full ${g.ppg >= base + 0.15 ? "bg-win" : g.ppg <= base - 0.15 ? "bg-loss" : "bg-ink-3"}`} style={{ width: `${((g.ppg ?? 0) / max) * 100}%` }} />
            </div>
            <p className={`num text-sm mt-1 font-semibold ${tone(g.ppg, base)}`}>
              {f2(g.ppg)} <span className="font-normal text-ink-3 text-xs">pts</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function StyleStrip({ style }) {
  return (
    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
      {style.map((s) => (
        <div key={s.id}>
          <div className="flex justify-between text-xs">
            <span className="text-ink-2">{s.label}</span>
            <span className="text-ink-3">{s.pct == null ? "sin dato" : level(s.pct)}</span>
          </div>
          <div className="relative h-2 bg-line-2 rounded-sm mt-1">
            <div className="absolute top-0 bottom-0 w-px bg-ink-3" style={{ left: "50%" }} />
            {s.pct != null && <div className="absolute -top-0.5 w-3 h-3 rounded-full bg-contra border-2 border-surface" style={{ left: `calc(${s.pct}% - 6px)` }} />}
          </div>
        </div>
      ))}
    </div>
  );
}

function Recs({ title, items, color }) {
  if (!items?.length) return null;
  return (
    <div className="min-w-0">
      <p className={`text-xs font-semibold ${color}`}>{title}</p>
      <ul className="mt-2 space-y-3">
        {items.map((t, i) => (
          <li key={i} className="text-sm text-ink-2 leading-relaxed">
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

function MatchRow({ m, short }) {
  const res = { W: "bg-win", D: "bg-draw", L: "bg-loss" }[m.result];
  const home = m.is_home ? `${m.team} ${m.gf}-${m.ga} ${m.opponent}` : `${m.opponent} ${m.ga}-${m.gf} ${m.team}`;
  return (
    <li className="py-4 border-b border-line-2 last:border-0">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className={`inline-block w-2 h-2 rounded-full ${res}`} aria-hidden />
        <span className="display text-lg text-ink">{home}</span>
        <span className="text-xs text-ink-3">
          {date(m.date)}, {m.tournament}
          {m.round ? `, ${m.round}` : ""}
        </span>
      </div>
      <p className="text-xs text-ink-3 mt-1 num">
        Peligro creado {f2(m.xg)} contra {f2(m.xgc)} del rival
      </p>
      {m.changes?.length > 0 && (
        <p className="text-sm text-ink-2 mt-2 leading-relaxed">
          Lo distinto de {short} ese día: {m.changes.join("; ")}.
        </p>
      )}
    </li>
  );
}

function RivalLink({ r, active, href }) {
  return (
    <li>
      <Link href={href} scroll={false} className={`block px-3 py-2 rounded-md transition-colors ${active ? "bg-ink text-white" : "hover:bg-line-2"}`}>
        <span className="flex justify-between gap-2 text-sm">
          <span className={`font-medium truncate ${active ? "text-white" : "text-ink"}`}>{r.short}</span>
          <span className={`num text-xs shrink-0 ${active ? "text-white/70" : "text-ink-3"}`}>{r.n ? `${r.record.W}-${r.record.D}-${r.record.L}` : "sin cruce"}</span>
        </span>
        <span className={`block text-xs truncate ${active ? "text-white/60" : "text-ink-3"}`}>{r.team_now ?? r.teams_faced.join(", ")}</span>
      </Link>
    </li>
  );
}

export default async function Rivales({ params, searchParams }) {
  const { coach: key } = await params;
  const sp = await searchParams;
  const [doc, coach] = await Promise.all([getRivals(key), getCoach(key)]);
  const short = coachShort(coach);
  if (!doc) {
    return (
      <>
        <PageHeader question={`¿Contra qué estilos batalla ${short}?`} />
        <p className="text-ink-2">Este técnico todavía no tiene el cruce por rivales calculado.</p>
      </>
    );
  }
  const base = doc.overall.ppg;
  const styles = [...doc.styles].sort((a, b) => Math.min(...a.groups.map((g) => g.ppg ?? 9)) - Math.min(...b.groups.map((g) => g.ppg ?? 9)));
  const worst = styles[0];
  const worstHigh = worst.groups.find((g) => g.band === "alto");
  const worstLow = worst.groups.find((g) => g.band === "bajo");
  const hard = worstHigh.ppg <= worstLow.ppg ? worstHigh : worstLow;
  const easy = hard === worstHigh ? worstLow : worstHigh;
  const hardTrait = hard === worstHigh ? worst.high_pl : worst.low_pl;
  const easyTrait = hard === worstHigh ? worst.low_pl : worst.high_pl;
  const current = doc.rivals.filter((r) => r.current);
  const past = doc.rivals.filter((r) => !r.current && r.n >= 2);
  const sel = doc.rivals.find((r) => r.key === sp?.r) ?? current[0] ?? doc.rivals[0];
  const href = (r) => `/dashboard/${key}/rivales?r=${r.key}#rival`;

  return (
    <>
      <PageHeader
        question={`¿Contra qué estilos batalla ${short}?`}
        lead={`Cada rival se mide contra la liga en seis rasgos. Así se ve contra qué tipo de equipo ${short} suma y contra cuál se le complica, y qué hizo distinto cuando le ganó a los difíciles. Los técnicos que dirigen hoy salen aunque nunca se hayan enfrentado.`}
      />

      <section className="answer mb-10">
        <div className="flex items-baseline flex-wrap gap-x-3">
          <span className="display text-6xl text-contra">{f2(hard.ppg)}</span>
          <span className="text-sm text-ink-2">puntos por partido contra rivales que {hardTrait}</span>
        </div>
        <p className="text-sm text-ink-3 mt-1.5">
          Contra los que {easyTrait}: {f2(easy.ppg)}. Su promedio: {f2(base)} en {doc.overall.n} partidos.
        </p>
        <h3 className="text-xl font-semibold text-ink leading-snug mt-4">
          Su punto débil es el rival que {hard === worstHigh ? worst.high : worst.low}: ahí concede {f2(hard.xgc)} de peligro por partido y su presión pasa de dejar dar {doc.overall.ppda.toFixed(1)} pases antes de robar a {hard.ppda.toFixed(1)}.
        </h3>
        {hard.levers?.items?.length > 0 && (
          <p className="text-sm text-ink-2 mt-3 leading-relaxed max-w-prose">
            Cuando sí le ganó a esos rivales ({hard.levers.n_w} ganados contra {hard.levers.n_l} perdidos, medido solo con el partido empatado para que el marcador no explique la diferencia): {hard.levers.items.map((x) => x.text).join("; ")}.
          </p>
        )}
        <DefChips ids={["D-27", "D-21"]} />
      </section>

      <Card title="Puntos por partido según el estilo del rival" sub={`Cada rasgo parte a los rivales en tres grupos según la liga. Verde: arriba de su promedio de ${f2(base)}; rojo: abajo.`} className="mb-12">
        {styles.map((s) => (
          <StyleRow key={s.id} s={s} base={base} />
        ))}
      </Card>

      <div id="rival" className="grid md:grid-cols-[15rem_minmax(0,1fr)] gap-x-10 gap-y-8 items-start scroll-mt-6">
        <nav className="md:sticky md:top-6 space-y-6">
          <div>
            <p className="text-xs font-semibold text-ink-3 uppercase tracking-wide px-3 mb-2">Dirigen hoy</p>
            <ul className="space-y-0.5">
              {current.map((r) => (
                <RivalLink key={r.key} r={r} active={r.key === sel.key} href={href(r)} />
              ))}
            </ul>
          </div>
          {past.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-ink-3 uppercase tracking-wide px-3 mb-2">Historial</p>
              <ul className="space-y-0.5">
                {past.map((r) => (
                  <RivalLink key={r.key} r={r} active={r.key === sel.key} href={href(r)} />
                ))}
              </ul>
            </div>
          )}
        </nav>

        <div className="min-w-0 space-y-8">
          <header>
            <h2 className="display text-3xl text-ink">
              {short} contra {sel.short}
            </h2>
            <p className="text-sm text-ink-2 mt-1">
              {sel.current ? `Dirige hoy a ${sel.team_now}.` : "Ya no dirige en la Liga MX con datos recientes."} {sel.n ? `${sel.n} ${sel.n === 1 ? "partido directo" : "partidos directos"}, goles ${sel.gf}-${sel.ga}.` : "No se han enfrentado en los datos."}
            </p>
            {sel.n > 0 && (
              <div className="mt-3">
                <RecordBar {...sel.record} />
              </div>
            )}
          </header>

          <section className="answer">
            <h3 className="text-lg font-semibold text-ink">{sel.n ? "Cómo le ha ido y por qué" : "Lo que se puede anticipar"}</h3>
            <p className="text-sm text-ink-2 mt-2 leading-relaxed max-w-prose">{sel.read.struggle}</p>
            {sel.read.broke && <p className="text-sm text-ink mt-2 leading-relaxed max-w-prose font-medium">{sel.read.broke}</p>}
          </section>

          {(sel.recs.staff.length > 0 || sel.recs.rival.length > 0) && (
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
              <Recs title={`Para el staff de ${short}`} items={sel.recs.staff} color="text-almada" />
              <Recs title={`Para el staff de ${sel.short}`} items={sel.recs.rival} color="text-contra" />
            </div>
          )}

          <Card title={`Cómo juega ${sel.short}`} sub={`Su equipo comparado con la liga${sel.current ? ` en sus últimos ${sel.style_n} partidos` : " en los torneos en que lo enfrentó"}. La raya del centro es la liga.`} footer={<DefChips ids={["D-27"]} className="" />}>
            <StyleStrip style={sel.style} />
          </Card>

          <Card title={`Contra los ${sel.similar.n} rivales más parecidos`} sub={`Partidos de ${short} contra equipos con el estilo más cercano al de ${sel.short}. Sirve aunque se hayan enfrentado poco.`}>
            <div className="flex flex-wrap items-end gap-x-10 gap-y-4">
              <div>
                <p className={`display text-4xl ${tone(sel.similar.ppg, base)}`}>{f2(sel.similar.ppg)}</p>
                <p className="text-xs text-ink-3 mt-1">puntos por partido (promedio {f2(base)})</p>
              </div>
              <div>
                <p className="display text-4xl text-ink">{sign(sel.similar.xgd)}</p>
                <p className="text-xs text-ink-3 mt-1">balance de peligro por partido</p>
              </div>
              <div className="min-w-48 flex-1">
                <RecordBar {...sel.similar.record} />
              </div>
            </div>
            {sel.similar.examples?.length > 0 && <p className="text-xs text-ink-3 mt-4">Por ejemplo: {sel.similar.examples.join("; ")}.</p>}
          </Card>

          {sel.matches.length > 0 && (
            <Card title="Partidos directos" sub="Del más viejo al más reciente. Debajo de cada marcador, lo que más se salió de su costumbre ese día.">
              <ul>
                {sel.matches.map((m) => (
                  <MatchRow key={m.match_id} m={m} short={short} />
                ))}
              </ul>
            </Card>
          )}
        </div>
      </div>
    </>
  );
}
