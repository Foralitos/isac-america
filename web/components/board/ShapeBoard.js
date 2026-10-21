"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Defs, H, INK, MUTED, PitchLines, S, SPRING, W } from "./parts";

// Cómo se para el equipo de verdad según el marcador y el momento: once huecos fijos (portero, laterales, centrales,
// medios, extremos, mediapunta, delantero) en su posición media con balón, por tramo de 15 minutos. El partido corre solo.
const STATES = [
  { id: "perdiendo", label: "Perdiendo" },
  { id: "empate", label: "Empatando" },
  { id: "ganando", label: "Ganando" },
];
const BUCKET_LABEL = { "0-15": "0 a 15", "15-30": "15 a 30", "30-45": "30 a 45", "45-60": "45 a 60", "60-75": "60 a 75", "75-90": "75 a 90" };
const SCALE = 3;
const STEP_MS = 2400;

function describe(cell, base) {
  if (!cell || !base || cell === base) return [];
  const out = [];
  const by = Object.fromEntries(base.slots.map((s) => [s.slot, s]));
  const line = (slots, label, plural = false) => {
    const now = cell.slots.filter((s) => slots.includes(s.slot));
    const was = now.map((s) => by[s.slot]).filter(Boolean);
    if (!now.length || was.length !== now.length) return;
    const d = now.reduce((a, s) => a + s.x, 0) / now.length - was.reduce((a, s) => a + s.x, 0) / was.length;
    if (Math.abs(d) >= 1.5) out.push({ d, text: `${label} ${d > 0 ? (plural ? "suben" : "sube") : plural ? "bajan" : "baja"} ${Math.abs(d).toFixed(0)} m` });
  };
  line(["DFCI", "DFCD"], "La defensa");
  line(["LI", "LD"], "Los laterales", true);
  line(["MCI", "MCD"], "El medio campo");
  line(["EI", "ED"], "Los extremos", true);
  line(["MP"], "El mediapunta");
  line(["DC"], "El delantero");
  const mp = cell.slots.find((s) => s.slot === "MP");
  const dc = cell.slots.find((s) => s.slot === "DC");
  const mp0 = by.MP;
  const dc0 = by.DC;
  if (mp && dc && mp0 && dc0) {
    const gap = dc.x - mp.x;
    const gap0 = dc0.x - mp0.x;
    if (gap0 - gap >= 2.5) out.push({ d: 0, text: `El mediapunta se pega al delantero: juegan a ${Math.max(0, gap).toFixed(0)} m, eran ${gap0.toFixed(0)}` });
  }
  return out.sort((a, b) => Math.abs(b.d) - Math.abs(a.d)).slice(0, 3);
}

export default function ShapeBoard({ shape, clock }) {
  const reduce = useReducedMotion();
  const tr = reduce ? { duration: 0 } : { ...SPRING, stiffness: 120, damping: 22 };
  const [state, setState] = useState("perdiendo");
  const [idx, setIdx] = useState(0);
  const [auto, setAuto] = useState(true);
  const buckets = shape?.buckets ?? [];
  const cells = useMemo(() => (shape?.cells ?? []).filter((c) => c.state === state), [shape, state]);
  const bucket = buckets[idx] ?? buckets[0];
  const cell = cells.find((c) => c.bucket === bucket) ?? cells[0];
  const base = cells.find((c) => c.bucket === buckets[0]) ?? cells[0];

  useEffect(() => {
    if (!auto || reduce) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % Math.max(1, buckets.length)), STEP_MS);
    return () => clearInterval(t);
  }, [auto, reduce, buckets.length]);

  const slots = cell?.slots ?? [];
  const byId = Object.fromEntries(slots.map((s) => [s.slot, s]));
  const maxLink = Math.max(...(cell?.links ?? []).map((l) => l.n), 1);
  const links = (cell?.links ?? []).filter((l) => byId[l.a] && byId[l.b]).slice(0, 12);
  const changes = describe(cell, base);
  // mezcla de dibujos en el tramo, para la frase secundaria (del reloj de 5 min, sumado a 15)
  const mix = useMemo(() => {
    if (!clock?.cells || !bucket) return [];
    const [b0, b1] = bucket.split("-").map(Number);
    const acc = {};
    for (const c of clock.cells) {
      if (c.state !== state || c.bucket < b0 || c.bucket >= b1) continue;
      for (const [f, m] of Object.entries(c.formations)) acc[f] = (acc[f] ?? 0) + m;
    }
    const tot = Object.values(acc).reduce((a, b) => a + b, 0) || 1;
    return Object.entries(acc)
      .map(([f, m]) => ({ f: String(f).split("").join("-"), share: m / tot }))
      .sort((a, b) => b.share - a.share)
      .slice(0, 3);
  }, [clock, state, bucket]);
  const subsSoFar = useMemo(() => {
    if (!clock?.cells || !bucket) return 0;
    const [, b1] = bucket.split("-").map(Number);
    const cs = clock.cells.filter((c) => c.state === state && c.bucket < b1);
    const m = Math.max(...cs.map((c) => c.matches), 1);
    return cs.reduce((a, c) => a + c.subs, 0) / m;
  }, [clock, state, bucket]);
  const stateLabel = STATES.find((s) => s.id === state)?.label.toLowerCase();

  return (
    <section className="rounded-xl text-white overflow-hidden" style={{ background: "#0f1f2e" }} aria-label="Cómo se para el equipo">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 px-5 pt-4 pb-3">
        <span className="inline-flex rounded-full bg-white/10 p-0.5">
          {STATES.map((s) => (
            <button key={s.id} type="button" onClick={() => setState(s.id)} aria-pressed={state === s.id} className={`rounded-full px-4 py-2 text-base transition-colors ${state === s.id ? "bg-white text-ink font-semibold" : "text-white/80 hover:text-white"}`}>
              {s.label}
            </button>
          ))}
        </span>
        <div className="flex items-center gap-1.5 flex-wrap">
          {buckets.map((b, i) => (
            <button
              key={b}
              type="button"
              onClick={() => {
                setIdx(i);
                setAuto(false);
              }}
              aria-pressed={i === idx}
              className={`relative overflow-hidden rounded-md px-2.5 py-1.5 text-xs transition-colors ${i === idx ? "bg-white text-ink font-semibold" : "bg-white/10 text-white/80 hover:bg-white/20"}`}
            >
              {i === idx && auto && !reduce && <motion.span key={`${state}-${b}`} className="absolute left-0 bottom-0 h-0.5 bg-almada" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: STEP_MS / 1000, ease: "linear" }} />}
              {`${BUCKET_LABEL[b] ?? b}'`}
            </button>
          ))}
          <button type="button" onClick={() => setAuto((a) => !a)} className="ml-1 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/85 hover:bg-white/20" aria-pressed={auto}>
            {auto ? "Pausar" : "Reproducir"}
          </button>
        </div>
        <div className="ml-auto text-sm text-white/70 text-right">
          <span className="display text-xl text-white">{cell?.matches ?? 0}</span> partidos pasaron {stateLabel} por el minuto {BUCKET_LABEL[bucket]}
          {mix.length > 0 && <span className="block text-xs text-white/50 mt-0.5">En ese tramo arrancan en {mix.map((m) => `${m.f} (${Math.round(m.share * 100)} %)`).join(", ")}.</span>}
        </div>
      </div>

      <div className="grid md:grid-cols-[minmax(0,1fr)_15rem] gap-x-6 px-3 pb-1 items-start">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto block" role="img" aria-label={`Posición media de cada hueco ${stateLabel}, minutos ${BUCKET_LABEL[bucket]}`} style={{ fontFamily: "var(--font-archivo), Archivo, sans-serif" }}>
          <Defs />
          <rect x={0} y={0} width={W} height={H} rx={12} fill="url(#board-bg)" />
          <PitchLines />
          {links.map((l) => {
            const a = byId[l.a];
            const b = byId[l.b];
            return (
              <motion.line key={`${l.a}>${l.b}`} initial={false} stroke="#fff" strokeLinecap="round" animate={{ x1: a.x * S, y1: a.y * S, x2: b.x * S, y2: b.y * S, strokeWidth: 1 + (l.n / maxLink) * 8, opacity: 0.12 + (l.n / maxLink) * 0.35 }} transition={tr}>
                <title>{`${l.a} a ${l.b}: ${l.n} pases`}</title>
              </motion.line>
            );
          })}
          {slots.map((t) => (
            <g key={t.slot}>
              {t.carries >= 20 && (
                <motion.line initial={false} stroke="var(--almada)" strokeWidth={4} strokeLinecap="round" markerEnd="url(#head-blue)" animate={{ x1: t.x * S, y1: t.y * S, x2: (t.x + t.cdx * SCALE) * S, y2: (t.y + t.cdy * SCALE) * S }} transition={tr}>
                  <title>{`${t.label}: conduce en promedio ${t.cdx.toFixed(1)} m hacia adelante`}</title>
                </motion.line>
              )}
              <motion.circle initial={false} r={21} fill="var(--almada)" stroke="#fff" strokeWidth={2.5} animate={{ cx: t.x * S, cy: t.y * S }} transition={tr}>
                <title>{`${t.label}: posición media con balón, ${t.n.toLocaleString("es-MX")} acciones en ${t.matches} partidos`}</title>
              </motion.circle>
              <motion.text initial={false} fontSize={11} fontWeight={700} fill="#fff" textAnchor="middle" pointerEvents="none" animate={{ x: t.x * S, y: t.y * S + 4 }} transition={tr}>
                {t.slot === "DFCI" || t.slot === "DFCD" ? "DFC" : t.slot === "MCI" || t.slot === "MCD" ? "MC" : t.slot}
              </motion.text>
            </g>
          ))}
          <text x={W - 16} y={H - 14} fontSize={22} fontWeight={600} fill={INK} textAnchor="end" className="display">
            {stateLabel}, {BUCKET_LABEL[bucket]}&apos;
          </text>
          <text x={16} y={H - 14} fontSize={18} fill={MUTED}>
            {subsSoFar >= 0.5 ? `ya hizo ${subsSoFar.toFixed(1)} cambios por partido` : "todavía casi sin cambios"}
          </text>
        </svg>
        <div className="py-2 pr-2 text-sm">
          <p className="text-xs font-semibold text-white/60 mb-2">Qué cambia respecto al arranque</p>
          {changes.length ? (
            <ul className="space-y-2 text-white/90">
              {changes.map((c, i) => (
                <li key={i} className="flex gap-2">
                  <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${c.d > 0 ? "bg-almada" : c.d < 0 ? "bg-contra" : "bg-white/60"}`} />
                  <span>{c.text}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-white/50">{cell === base ? "Es el punto de partida." : "Casi igual que al arranque."}</p>
          )}
          <p className="text-xs text-white/50 mt-5 leading-relaxed">La flecha azul es hacia dónde conduce cada hueco (ampliada tres veces); las líneas blancas, entre quiénes circula más el balón.</p>
        </div>
      </div>
      <p className="px-5 pt-2 pb-4 text-xs text-white/50">Cada ficha es un hueco del once (no un jugador) en su posición media con el balón, sin importar el nombre del dibujo. No hay tracking: son promedios de las acciones, no recorridos.</p>
    </section>
  );
}
