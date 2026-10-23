"use client";

import { useEffect, useMemo, useRef, useState } from "react";

// El visor de un partido: las 10,000 repeticiones ya calculadas (barra y cuadrícula de marcadores)
// y un botón que lo vuelve a jugar aquí mismo, ocasión por ocasión, con la misma regla (D-28).
const MAX_MIN = 95;
const pctTxt = (p) => (p >= 0.995 ? "99" : p < 0.005 && p > 0 ? "<1" : String(Math.round(p * 100)));
const date = (d) => new Date(`${d}T12:00:00`).toLocaleDateString("es-MX", { day: "numeric", month: "long", year: "numeric" });

function reducedMotion() {
  return typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
}

function OutcomeBar({ w, d, l, team }) {
  const seg = [
    { p: w, cls: "bg-almada", txt: "text-white", label: `gana ${team}` },
    { p: d, cls: "bg-draw", txt: "text-white", label: "empate" },
    { p: l, cls: "bg-contra", txt: "text-white", label: "pierde" },
  ];
  return (
    <div>
      <div className="flex h-9 rounded-md overflow-hidden gap-px">
        {seg.map((s) =>
          s.p > 0 ? (
            <div key={s.label} className={`${s.cls} ${s.txt} flex items-center justify-center text-sm font-semibold num min-w-0`} style={{ width: `${s.p * 100}%` }}>
              {s.p >= 0.08 ? `${pctTxt(s.p)}` : ""}
            </div>
          ) : null
        )}
      </div>
      <div className="flex justify-between text-xs text-ink-3 mt-1.5">
        {seg.map((s) => (
          <span key={s.label}>
            {s.label} <span className="num text-ink-2">{pctTxt(s.p)} de cada 100</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function ScoreGrid({ grid, gf, ga, team, opponent }) {
  const n = grid.length;
  const peak = Math.max(...grid.flat());
  const lab = (i) => (i === n - 1 ? `${i}+` : String(i));
  return (
    <div>
      <div className="grid gap-1" style={{ gridTemplateColumns: `2rem repeat(${n}, minmax(0,1fr))` }}>
        <span />
        {grid[0].map((_, j) => (
          <span key={j} className="text-center text-[11px] text-ink-3 num">
            {lab(j)}
          </span>
        ))}
        {grid.map((row, i) => (
          <div key={i} className="contents">
            <span className="text-[11px] text-ink-3 num self-center text-right pr-1">{lab(i)}</span>
            {row.map((p, j) => {
              const real = i === Math.min(gf, n - 1) && j === Math.min(ga, n - 1);
              const tint = i > j ? "30,90,168" : i < j ? "194,65,12" : "125,138,150";
              return (
                <div
                  key={j}
                  className={`aspect-square rounded-sm flex items-center justify-center text-[11px] num ${real ? "ring-2 ring-ink ring-offset-1 ring-offset-surface" : ""}`}
                  style={{ background: `rgba(${tint},${p > 0 ? 0.08 + 0.85 * (p / peak) : 0.03})`, color: p / peak > 0.55 ? "#fff" : "var(--ink-2)" }}
                  title={`${team} ${i}-${j} ${opponent}: ${pctTxt(p)} de cada 100`}
                >
                  {p >= 0.01 ? pctTxt(p) : ""}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <p className="text-xs text-ink-3 mt-2">
        Filas: goles de {team}. Columnas: goles de {opponent}. El recuadro es el marcador real.
      </p>
    </div>
  );
}

function Lane({ chances, color, hits, revealed, side, active }) {
  return (
    <div className="relative h-12">
      <span className="absolute left-0 right-0 top-1/2 h-px bg-line" aria-hidden />
      {chances.map((c, i) => {
        const r = 6 + Math.sqrt(c.p) * 16;
        const id = `${side}${i}`;
        const shown = revealed.has(id);
        const hit = hits.has(id);
        return (
          <span
            key={id}
            className="absolute top-1/2 rounded-full transition-all duration-300"
            style={{
              left: `${(Math.min(c.min, MAX_MIN) / MAX_MIN) * 100}%`,
              width: r,
              height: r,
              background: active ? (shown && hit ? color : "var(--surface)") : c.goal ? color : "var(--surface)",
              border: `2px solid ${color}`,
              opacity: shown && !hit ? 0.35 : 1,
              transform: `translate(-50%, -50%) scale(${shown && hit ? 1.25 : 1})`,
              boxShadow: shown && hit ? `0 0 0 6px ${color}22` : "none",
            }}
            title={`Min ${c.min}, ${c.player ?? "sin nombre"}: ${pctTxt(c.p)} de cada 100 de ser gol${c.shots > 1 ? ` (${c.shots} tiros en la jugada)` : ""}${c.pen ? ", penal" : ""}${c.goal ? ". Fue gol" : ""}`}
          />
        );
      })}
    </div>
  );
}

export default function Replay({ m, nSims }) {
  const [run, setRun] = useState(null); // { hits:Set, gf, ga, step }
  const [revealed, setRevealed] = useState(new Set());
  const [tally, setTally] = useState({ W: 0, D: 0, L: 0 });
  const timer = useRef(null);

  const order = useMemo(() => {
    const all = [...m.for.map((c, i) => ({ ...c, id: `f${i}`, side: "f" })), ...m.against.map((c, i) => ({ ...c, id: `a${i}`, side: "a" }))];
    return all.sort((a, b) => a.min - b.min);
  }, [m]);

  useEffect(() => () => clearInterval(timer.current), []);

  function play(times = 1) {
    clearInterval(timer.current);
    let last = null;
    const add = { W: 0, D: 0, L: 0 };
    for (let k = 0; k < times; k++) {
      const hits = new Set(order.filter((c) => Math.random() < c.p).map((c) => c.id));
      const gf = [...hits].filter((id) => id.startsWith("f")).length;
      const ga = hits.size - gf;
      add[gf > ga ? "W" : gf === ga ? "D" : "L"] += 1;
      last = { hits, gf, ga };
    }
    setTally((t) => ({ W: t.W + add.W, D: t.D + add.D, L: t.L + add.L }));
    if (times > 1 || reducedMotion()) {
      setRun({ ...last, live: { gf: last.gf, ga: last.ga }, done: true });
      setRevealed(new Set(order.map((c) => c.id)));
      return;
    }
    setRun({ ...last, live: { gf: 0, ga: 0 }, done: false });
    setRevealed(new Set());
    let i = 0;
    const live = { gf: 0, ga: 0 };
    timer.current = setInterval(() => {
      if (i >= order.length) {
        clearInterval(timer.current);
        setRun((r) => ({ ...r, done: true }));
        return;
      }
      const c = order[i];
      if (last.hits.has(c.id)) live[c.side === "f" ? "gf" : "ga"] += 1;
      setRevealed((s) => new Set(s).add(c.id));
      setRun((r) => ({ ...r, live: { ...live } }));
      i += 1;
    }, Math.max(45, Math.min(110, 1800 / Math.max(1, order.length))));
  }

  function reset() {
    clearInterval(timer.current);
    setRun(null);
    setRevealed(new Set());
    setTally({ W: 0, D: 0, L: 0 });
  }

  const hits = run?.hits ?? new Set();
  const total = tally.W + tally.D + tally.L;
  const home = m.is_home;
  const left = home ? m.team : m.opponent;
  const right = home ? m.opponent : m.team;
  const real = home ? `${m.gf}-${m.ga}` : `${m.ga}-${m.gf}`;
  const liveTxt = run ? (home ? `${run.live.gf}-${run.live.ga}` : `${run.live.ga}-${run.live.gf}`) : null;

  return (
    <section className="bg-surface border border-line rounded-lg overflow-hidden">
      <div className="bg-sidebar text-white px-6 py-5 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-xs text-sidebar-ink/70">
            {date(m.date)}, {m.tournament}
            {m.round && m.round !== "Regular Season" ? `, ${m.round}` : ""}
          </p>
          <p className="display text-3xl mt-1">
            {left} <span className="num">{real}</span> {right}
          </p>
          <p className="text-xs text-sidebar-ink/70 mt-1 num">
            Peligro de sus ocasiones: {m.team} {m.xg.toFixed(2)}, {m.opponent} {m.xga.toFixed(2)}. Merecía {m.xpts.toFixed(2)} puntos y sacó {m.pts}.
          </p>
        </div>
        <div className="text-right min-w-40" aria-live="polite">
          {run ? (
            <>
              <p className="text-[11px] uppercase tracking-wide text-sidebar-ink/60">{run.done ? "Así quedó esta repetición" : "Jugándose"}</p>
              <p className={`display text-5xl num mt-1 ${run.done ? "" : "text-white/80"}`}>{liveTxt}</p>
            </>
          ) : (
            <button type="button" onClick={() => play(1)} className="px-4 py-2.5 rounded-md bg-white text-ink text-sm font-semibold hover:bg-white/90 transition-colors">
              Volver a jugarlo
            </button>
          )}
        </div>
      </div>

      <div className="px-6 py-6 space-y-8">
        <div>
          <div className="flex flex-wrap items-baseline justify-between gap-3 mb-3">
            <h3 className="text-base font-semibold text-ink">Cada ocasión, en su minuto</h3>
            <div className="flex flex-wrap items-center gap-2">
              <button type="button" onClick={() => play(1)} className="px-4 py-2 rounded-md bg-almada text-white text-sm font-semibold hover:opacity-90 transition-opacity">
                Jugarlo otra vez
              </button>
              <button type="button" onClick={() => play(100)} className="px-3 py-2 rounded-md border border-line text-sm text-ink hover:bg-line-2 transition-colors">
                100 veces
              </button>
              {total > 0 && (
                <button type="button" onClick={reset} className="px-2 py-2 text-xs text-ink-3 hover:text-ink underline underline-offset-2">
                  Reiniciar
                </button>
              )}
            </div>
          </div>
          <div className="grid grid-cols-[7rem_minmax(0,1fr)] gap-x-4 items-center">
            <span className="text-sm font-semibold text-almada truncate">{m.team}</span>
            <Lane chances={m.for} color="var(--almada)" hits={hits} revealed={revealed} side="f" active={!!run} />
            <span className="text-sm font-semibold text-contra truncate">{m.opponent}</span>
            <Lane chances={m.against} color="var(--contra)" hits={hits} revealed={revealed} side="a" active={!!run} />
            <span />
            <div className="relative h-4 text-[11px] text-ink-3 num">
              {[0, 15, 30, 45, 60, 75, 90].map((v) => (
                <span key={v} className="absolute -translate-x-1/2" style={{ left: `${(v / MAX_MIN) * 100}%` }}>
                  {v}&apos;
                </span>
              ))}
            </div>
          </div>
          <p className="text-xs text-ink-3 mt-3 leading-relaxed">
            Cada círculo es una ocasión; más grande, más probable el gol. Rellenos: los que fueron gol de verdad. Al volver a jugarlo, cada ocasión entra con su probabilidad: las que se encienden son los goles de esta repetición.
            {total > 0 && (
              <span className="text-ink-2 num">
                {" "}
                Llevas {total} {total === 1 ? "repetición" : "repeticiones"}: {m.team} ganó {tally.W}, empató {tally.D} y perdió {tally.L}.
              </span>
            )}
          </p>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_20rem] gap-x-10 gap-y-8">
          <div>
            <h3 className="text-base font-semibold text-ink mb-3">En {nSims.toLocaleString("es-MX")} repeticiones</h3>
            <OutcomeBar w={m.p_w} d={m.p_d} l={m.p_l} team={m.team} />
            <p className="text-sm text-ink-2 mt-5 leading-relaxed max-w-prose">
              El marcador más repetido fue {m.team} {m.likely[0].gf}-{m.likely[0].ga} ({pctTxt(m.likely[0].p)} de cada 100). El real, {m.gf}-{m.ga}, salió {pctTxt(m.grid[Math.min(m.gf, m.grid.length - 1)][Math.min(m.ga, m.grid.length - 1)])} de cada 100 veces.
            </p>
          </div>
          <ScoreGrid grid={m.grid} gf={m.gf} ga={m.ga} team={m.team} opponent={m.opponent} />
        </div>
      </div>
    </section>
  );
}
