"use client";

import { useMemo, useState } from "react";
import RecordBar from "@/components/ui/RecordBar";
import { STAKES_LABEL, dateLabel, fmt, formationLabel } from "@/libs/format";

const RESULT = { W: { label: "ganó", cls: "bg-win text-white" }, D: { label: "empató", cls: "bg-draw text-white" }, L: { label: "perdió", cls: "bg-loss text-white" } };
const SELECT = "rounded-md border border-line bg-surface px-2.5 py-1.5 text-sm text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-almada";

function HomeIcon({ home }) {
  const common = { width: 14, height: 14, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };
  if (home)
    return (
      <svg {...common}>
        <path d="M3 11 12 4l9 7M5 10v10h14V10" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M3 13h18M12 3v10M7 21l5-8 5 8" />
    </svg>
  );
}

export default function MatchList({ matches, league }) {
  const teams = useMemo(() => [...new Set(matches.map((m) => m.team))], [matches]);
  const tournaments = useMemo(() => [...new Set(matches.map((m) => m.tournament))], [matches]);
  const stakes = useMemo(() => [...new Set(matches.map((m) => m.stakes))].filter(Boolean), [matches]);
  const [team, setTeam] = useState("");
  const [tourn, setTourn] = useState("");
  const [result, setResult] = useState("");
  const [stake, setStake] = useState("");
  const rows = matches.filter((m) => (!team || m.team === team) && (!tourn || m.tournament === tourn) && (!result || m.result === result) && (!stake || m.stakes === stake));
  const maxXg = Math.max(...matches.map((m) => Math.max(m.np_xg ?? 0, m.np_xg_conceded ?? 0)), 0.1);
  const maxPpda = Math.max(...matches.map((m) => m.ppda_own ?? 0), league.ppda_own ?? 0, 1);
  // Más larga = más intensa: la barra crece cuando deja dar menos pases.
  const intensity = (v) => (v == null ? 0 : Math.max(0, Math.min(100, (1 - v / maxPpda) * 100)));
  const groups = [];
  for (const m of rows) {
    let g = groups[groups.length - 1];
    if (!g || g.tournament !== m.tournament) {
      g = { tournament: m.tournament, team: m.team, rows: [], W: 0, D: 0, L: 0 };
      groups.push(g);
    }
    g.rows.push(m);
    g[m.result] += 1;
  }
  const clear = () => {
    setTeam("");
    setTourn("");
    setResult("");
    setStake("");
  };
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 mb-5">
        <select className={SELECT} value={team} onChange={(e) => setTeam(e.target.value)} aria-label="Equipo">
          <option value="">Todos los equipos</option>
          {teams.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <select className={SELECT} value={tourn} onChange={(e) => setTourn(e.target.value)} aria-label="Torneo">
          <option value="">Todos los torneos</option>
          {tournaments.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <select className={SELECT} value={result} onChange={(e) => setResult(e.target.value)} aria-label="Resultado">
          <option value="">Cualquier resultado</option>
          <option value="W">Ganó</option>
          <option value="D">Empató</option>
          <option value="L">Perdió</option>
        </select>
        <select className={SELECT} value={stake} onChange={(e) => setStake(e.target.value)} aria-label="Situación en la tabla">
          <option value="">Cualquier situación en la tabla</option>
          {stakes.map((s) => (
            <option key={s} value={s}>
              {STAKES_LABEL[s] ?? s}
            </option>
          ))}
        </select>
        <p className="text-sm text-ink-3 ml-auto num">
          {rows.length} de {matches.length} partidos
          {rows.length !== matches.length && (
            <button type="button" onClick={clear} className="ml-3 text-almada hover:underline">
              Quitar filtros
            </button>
          )}
        </p>
      </div>

      <div className="hidden md:grid grid-cols-[4.5rem_minmax(9rem,1.2fr)_4.5rem_minmax(8rem,1fr)_minmax(8rem,1fr)_4rem_6rem_6rem] gap-x-4 px-2 text-[11px] text-ink-3 pb-2 border-b border-line">
        <span>Fecha</span>
        <span>Rival</span>
        <span className="text-center">Marcador</span>
        <span>Antes del partido</span>
        <span>
          Peligro <span className="text-almada">creado</span> y <span className="text-contra">concedido</span>
        </span>
        <span className="text-right">Balance</span>
        <span>Intensidad de presión</span>
        <span>Primer cambio</span>
      </div>

      {groups.map((g) => (
        <section key={g.tournament}>
          <header className="sticky top-0 z-10 bg-surface flex flex-wrap items-center gap-x-6 gap-y-1 px-2 py-2.5 border-b border-line-2">
            <p className="text-sm font-semibold text-ink">
              {g.tournament} <span className="font-normal text-ink-3">con {g.team}</span>
            </p>
            <div className="w-56">
              <RecordBar W={g.W} D={g.D} L={g.L} compact />
            </div>
          </header>
          <ul>
            {g.rows.map((m) => {
              const r = RESULT[m.result] ?? RESULT.D;
              const xgF = ((m.np_xg ?? 0) / maxXg) * 100;
              const xgA = ((m.np_xg_conceded ?? 0) / maxXg) * 100;
              const bal = (m.np_xg ?? 0) - (m.np_xg_conceded ?? 0);
              return (
                <li key={m.match_id} className="tip grid grid-cols-2 md:grid-cols-[4.5rem_minmax(9rem,1.2fr)_4.5rem_minmax(8rem,1fr)_minmax(8rem,1fr)_4rem_6rem_6rem] gap-x-4 gap-y-1 items-center px-2 py-2 border-b border-line-2 hover:bg-bg/70" tabIndex={0}>
                  <span className="text-xs text-ink-2 num whitespace-nowrap">{dateLabel(m.match_date)}</span>
                  <span className="flex items-center gap-2 min-w-0 text-sm text-ink">
                    <span className="text-ink-3 shrink-0" title={m.is_home ? "En casa" : "De visita"}>
                      <HomeIcon home={m.is_home} />
                    </span>
                    <span className="truncate">{m.opponent}</span>
                    {m.round && <span className="text-[11px] text-ink-3 shrink-0">{m.round}</span>}
                  </span>
                  <span className="flex justify-center">
                    <span className={`inline-block rounded-md px-2 py-0.5 text-sm font-semibold num ${r.cls}`} title={`${r.label} ${m.gf}-${m.ga}`}>
                      {m.gf}-{m.ga}
                    </span>
                  </span>
                  <span className="text-xs text-ink-2 truncate">
                    {m.pos_before != null && m.phase_kind === "regular" && <span className="text-ink num">{m.pos_before}.º </span>}
                    {STAKES_LABEL[m.stakes] ?? m.stakes}
                  </span>
                  <span className="grid grid-cols-[minmax(0,1fr)_2.2rem] gap-x-2 gap-y-0.5 items-center" aria-label={`peligro creado ${fmt(m.np_xg)}, concedido ${fmt(m.np_xg_conceded)}`}>
                    <span className="h-1.5 rounded-sm bg-line-2 overflow-hidden">
                      <span className="block h-full bg-almada" style={{ width: `${xgF}%` }} />
                    </span>
                    <span className="text-[10px] text-almada num text-right">{fmt(m.np_xg)}</span>
                    <span className="h-1.5 rounded-sm bg-line-2 overflow-hidden">
                      <span className="block h-full bg-contra" style={{ width: `${xgA}%` }} />
                    </span>
                    <span className="text-[10px] text-contra num text-right">{fmt(m.np_xg_conceded)}</span>
                  </span>
                  <span className={`text-sm font-semibold num text-right ${bal > 0.15 ? "text-almada" : bal < -0.15 ? "text-contra" : "text-ink-2"}`}>
                    {bal > 0 ? "+" : bal < 0 ? "−" : ""}
                    {Math.abs(bal).toFixed(1)}
                  </span>
                  <span className="relative h-5 flex items-center" aria-label={`deja dar ${fmt(m.ppda_own)} pases antes de robar`} title={`Deja dar ${fmt(m.ppda_own)} pases al rival antes de robar; la liga ${fmt(league.ppda_own)}`}>
                    <span className="absolute left-0 right-0 top-1.5 h-2 rounded-sm bg-line-2" />
                    <span className="absolute left-0 top-1.5 h-2 rounded-sm bg-almada" style={{ width: `${intensity(m.ppda_own)}%` }} />
                    {league.ppda_own != null && <span className="absolute top-0.5 h-4 w-px bg-liga" style={{ left: `${intensity(league.ppda_own)}%` }} />}
                    <span className="absolute right-0 -top-0.5 text-[10px] text-ink-3 num">{fmt(m.ppda_own)} pases</span>
                  </span>
                  <span className="relative h-5 flex items-center" aria-label={`primer cambio al minuto ${m.first_sub_minute ?? "sin cambio"}`}>
                    <span className="absolute left-0 right-0 top-2.5 h-px bg-line" />
                    <span className="absolute top-2 h-1.5 w-px bg-ink-3" style={{ left: "50%" }} />
                    {m.first_sub_minute != null && <span className="absolute top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-almada ring-2 ring-surface" style={{ left: `${Math.min(100, (m.first_sub_minute / 90) * 100)}%` }} />}
                    <span className="absolute right-0 -top-0.5 text-[10px] text-ink-3 num">{m.first_sub_minute != null ? `${Math.round(m.first_sub_minute)}'` : "sin cambio"}</span>
                  </span>
                  <div className="tip-box">
                    <p className="font-semibold">
                      {m.team} {m.is_home ? "en casa" : "de visita"} contra {m.opponent}, {m.gf}-{m.ga}
                    </p>
                    <p>
                      {m.stadium}. Técnico rival: {m.opp_coach}
                      {m.opp_top6 ? " (terminó en el top 6)" : ""}
                    </p>
                    <p className="opacity-80">
                      Formación {formationLabel(m.formation)}
                      {m.tactical_shifts ? `, ${m.tactical_shifts} cambio${m.tactical_shifts > 1 ? "s" : ""} de dibujo` : ", sin cambios de dibujo"}. Posesión {fmt(m.possession_pct, "%")}, dominio territorial {fmt(m.field_tilt, "%")}, {m.dribbles} regates.
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
      {rows.length === 0 && <p className="text-sm text-ink-2 py-6">Ningún partido cumple esos filtros.</p>}
      <p className="text-[11px] text-ink-3 mt-4">Peligro = goles esperados: la probabilidad de gol de cada tiro, sumada. La barra de presión es más larga cuanto menos pases deja dar al rival antes de robar; la raya gris es la liga. El primer cambio se marca sobre una regla de 90 minutos.</p>
    </div>
  );
}
