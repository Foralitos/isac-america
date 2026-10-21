"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import RecordBar from "@/components/ui/RecordBar";
import { catLabel, SMALL_N } from "@/libs/format";
import { buildModel, whatChanges } from "./boardModel";
import { Defs, H, INK, MUTED, PitchLines, S, SPRING, W } from "./parts";

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const f1 = (v) => (v == null ? "" : Number(v).toFixed(1));
const f0 = (v) => (v == null ? "" : Number(v).toFixed(0));
const f2 = (v) => (v == null ? "" : Number(v).toFixed(2));

function Tip({ children }) {
  return <title>{children}</title>;
}

export default function Board({ cats, formations = {} }) {
  const reduce = useReducedMotion();
  const tr = reduce ? { duration: 0 } : SPRING;
  const [sel, setSel] = useState(0);
  const [prev, setPrev] = useState(null);
  const [cmp, setCmp] = useState("");
  const models = useMemo(() => cats.map((c) => buildModel(c, formations[c.category] ?? 4231)), [cats, formations]);
  const safe = Math.min(sel, cats.length - 1);
  const m = models[safe];
  const cat = cats[safe];
  const refIdx = prev != null && prev < cats.length && prev !== safe ? prev : safe === 0 ? (cats.length > 1 ? 1 : null) : 0;
  const ref = refIdx != null ? models[refIdx] : null;
  const changes = ref ? whatChanges(m, ref, catLabel(cats[refIdx]).toLowerCase()) : [];
  const ghost = cmp !== "" ? models[Number(cmp)] : null;
  const choose = (i) => {
    if (i === safe) return;
    setPrev(safe);
    setSel(i);
  };
  const onKey = (e) => {
    if (e.key === "ArrowRight") choose((safe + 1) % cats.length);
    if (e.key === "ArrowLeft") choose((safe - 1 + cats.length) % cats.length);
  };
  const small = !m.per90 && (cat.n ?? 0) < SMALL_N;
  const tiltOpacity = m.tilt ? clamp((m.tilt.value - 40) / 60, 0.04, 0.22) : 0;
  const concOpacity = m.conceded ? clamp(m.conceded.value / 7, 0.03, 0.2) : 0;

  return (
    <section className="rounded-xl text-white overflow-hidden" style={{ background: "#0f1f2e" }} aria-label="Pizarra del escenario">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 px-5 pt-4 pb-3" tabIndex={0} onKeyDown={onKey} role="group" aria-label="Situaciones">
        <div className="flex flex-wrap gap-1.5">
          {cats.map((c, i) => {
            const on = i === safe;
            const tiny = !c.minutes && (c.n ?? 0) < SMALL_N;
            return (
              <button
                key={c.category}
                type="button"
                onClick={() => choose(i)}
                aria-pressed={on}
                title={tiny ? `${c.n} partidos: muestra chica, solo orientativo` : undefined}
                className={`rounded-full px-3 py-1.5 text-sm transition-colors ${on ? "bg-white text-ink font-semibold" : tiny ? "bg-white/5 text-white/50 hover:bg-white/10" : "bg-white/10 text-white/85 hover:bg-white/20"}`}
              >
                {catLabel(c)}
              </button>
            );
          })}
        </div>
        <div className="ml-auto text-sm text-white/70">
          {m.per90 ? (
            <span>
              <span className="display text-xl text-white">{Math.round(cat.minutes).toLocaleString("es-MX")}</span> minutos jugados en esta situación
            </span>
          ) : (
            <div className="flex items-center gap-4">
              <span>
                <span className="display text-xl text-white">{cat.n}</span> partidos{small ? ", muestra chica" : ""}
              </span>
              {cat.record && (
                <div className="w-48">
                  <RecordBar {...cat.record} compact dark />
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="px-3 pb-1">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto block" role="img" aria-label={`Cómo se para el equipo: ${catLabel(cat)}`} style={{ fontFamily: "var(--font-archivo), Archivo, sans-serif" }}>
          <Defs />
          <rect x={0} y={0} width={W} height={H} rx={12} fill="url(#board-bg)" />
          {/* dominio y peligro concedido como tintes de cada mitad */}
          <motion.rect initial={false} x={W / 2} y={0} width={W / 2} height={H} fill="var(--almada)" animate={{ opacity: tiltOpacity }} transition={tr} />
          <motion.rect initial={false} x={0} y={0} width={W / 2} height={H} fill="var(--contra)" animate={{ opacity: concOpacity }} transition={tr} />
          <PitchLines />

          {/* silueta de comparación */}
          {ghost && (
            <g opacity={0.4}>
              {ghost.press && <line x1={ghost.press.x * S} y1={0} x2={ghost.press.x * S} y2={H} stroke="#fff" strokeWidth={2} strokeDasharray="6 8" />}
              {ghost.block && <line x1={ghost.block.x * S} y1={0} x2={ghost.block.x * S} y2={H} stroke="#fff" strokeWidth={2} strokeDasharray="6 8" />}
              {ghost.tokens.map((t) => (
                <circle key={t.id} cx={t.x * S} cy={t.y * S} r={20} fill="none" stroke="#fff" strokeWidth={2} />
              ))}
            </g>
          )}

          {/* variante forma: carriles, tiros, portero */}
          {m.mode === "forma" && (
            <g>
              {m.lanes.map((l) => (
                <g key={l.lane}>
                  <motion.line initial={false} x1={48 * S} y1={l.y * S} x2={95 * S} y2={l.y * S} stroke="var(--almada)" strokeLinecap="round" markerEnd="url(#head-blue)" animate={{ strokeWidth: 4 + l.value / 4, opacity: 0.9 }} transition={tr}>
                    <Tip>{`${f0(l.value)} % de sus ataques nacen por ${l.lane === "centro" ? "el centro" : `la ${l.lane === "izquierdo" ? "izquierda" : "derecha"}`}; liga ${f0(l.league)} %`}</Tip>
                  </motion.line>
                  <text x={101 * S} y={l.y * S + 5} fontSize={24} fontWeight={600} fill={INK}>
                    {f0(l.value)} %
                  </text>
                </g>
              ))}
              {m.shots && (
                <g>
                  <motion.circle initial={false} cx={90 * S} cy={40 * S} fill="var(--almada)" animate={{ r: 14 + Math.sqrt(m.shots.outside) * 7, opacity: 0.35 }} transition={tr}>
                    <Tip>{`${f0(m.shots.outside)} % de sus tiros salen desde fuera del área; liga ${f0(m.shots.league)} %`}</Tip>
                  </motion.circle>
                  <motion.circle initial={false} cx={111 * S} cy={40 * S} fill="var(--almada)" animate={{ r: 14 + Math.sqrt(m.shots.inside) * 7, opacity: 0.35 }} transition={tr}>
                    <Tip>{`${f0(m.shots.inside)} % de sus tiros salen desde dentro del área`}</Tip>
                  </motion.circle>
                  <text x={90 * S} y={40 * S + 70} fontSize={20} fill={MUTED} textAnchor="middle">
                    {f0(m.shots.outside)} % de los tiros desde fuera
                  </text>
                </g>
              )}
              {m.gk && (
                <g>
                  <motion.line initial={false} x1={9 * S} y1={40 * S} y2={40 * S} stroke="rgba(255,255,255,0.75)" strokeWidth={3} strokeDasharray="10 8" markerEnd="url(#head-white)" animate={{ x2: (9 + 8 + m.gk.value * 0.6) * S }} transition={tr}>
                    <Tip>{`${f0(m.gk.value)} % de los pases del portero son largos; liga ${f0(m.gk.league)} %`}</Tip>
                  </motion.line>
                  <text x={10 * S} y={40 * S + 32} fontSize={20} fill={MUTED}>
                    portero {f0(m.gk.value)} % en largo
                  </text>
                </g>
              )}
            </g>
          )}

          {/* variante ritmo: presión arriba, llegadas, centros, pérdidas */}
          {m.mode === "ritmo" && m.rhythm && (
            <g>
              {m.rhythm.pressDots.map((p, i) => (
                <motion.circle initial={false} key={`p${i}`} r={6} fill="#fff" animate={{ cx: p.x * S, cy: p.y * S, opacity: 0.85 }} transition={tr} />
              ))}
              {m.rhythm.highRec.map((p, i) => (
                <motion.rect initial={false} key={`h${i}`} width={14} height={14} rx={3} fill="var(--almada)" stroke="#fff" strokeWidth={1.2} animate={{ x: p.x * S - 7, y: p.y * S - 7 }} transition={tr} />
              ))}
              {m.rhythm.boxEntries && (
                <motion.line initial={false} x1={62 * S} y1={40 * S} x2={100 * S} y2={40 * S} stroke="var(--almada)" strokeLinecap="round" markerEnd="url(#head-blue)" animate={{ strokeWidth: 3 + m.rhythm.boxEntries.value / 2.5 }} transition={tr}>
                  <Tip>{`${f1(m.rhythm.boxEntries.value)} llegadas al área por cada 90 minutos; liga ${f1(m.rhythm.boxEntries.league)}`}</Tip>
                </motion.line>
              )}
              {m.rhythm.crosses && (
                <g>
                  <motion.path initial={false} d={`M ${84 * S} ${6 * S} Q ${100 * S} ${10 * S} ${106 * S} ${33 * S}`} fill="none" stroke="var(--almada)" strokeLinecap="round" markerEnd="url(#head-blue)" animate={{ strokeWidth: 2 + m.rhythm.crosses.value / 4, opacity: 0.8 }} transition={tr} />
                  <motion.path initial={false} d={`M ${84 * S} ${74 * S} Q ${100 * S} ${70 * S} ${106 * S} ${47 * S}`} fill="none" stroke="var(--almada)" strokeLinecap="round" markerEnd="url(#head-blue)" animate={{ strokeWidth: 2 + m.rhythm.crosses.value / 4, opacity: 0.8 }} transition={tr} />
                </g>
              )}
              {m.rhythm.losses.map((p, i) => (
                <motion.circle initial={false} key={`l${i}`} r={6} fill="var(--contra)" animate={{ cx: p.x * S, cy: p.y * S, opacity: 0.9 }} transition={tr} />
              ))}
              {m.rhythm.transConceded && (
                <motion.circle initial={false} cx={24 * S} cy={40 * S} fill="var(--contra)" animate={{ r: 16 + m.rhythm.transConceded.value * 90, opacity: 0.35 }} transition={tr}>
                  <Tip>{`${f2(m.rhythm.transConceded.value)} goles esperados en contra al contragolpe por cada 90 minutos`}</Tip>
                </motion.circle>
              )}
              <text x={118 * S} y={H - 44} fontSize={20} fill={MUTED} textAnchor="end">
                {m.rhythm.pressValue ? `${f1(m.rhythm.pressValue.value)} presiones cerca del área rival` : ""}
                {m.rhythm.highRecValue ? `, ${f1(m.rhythm.highRecValue.value)} robos altos` : ""}
              </text>
              <text x={2 * S} y={H - 44} fontSize={20} fill={MUTED}>
                {m.rhythm.lossesValue ? `${f0(m.rhythm.lossesValue.value)} balones perdidos` : ""}
                {m.rhythm.transConceded ? `, ${f2(m.rhythm.transConceded.value)} de peligro al contragolpe` : ""}
              </text>
            </g>
          )}

          {/* líneas de presión y bloque */}
          {m.block && (
            <g>
              <motion.line initial={false} y1={0} y2={H} stroke="rgba(255,255,255,0.7)" strokeWidth={2} strokeDasharray="8 8" animate={{ x1: m.block.x * S, x2: m.block.x * S }} transition={tr} />
              <motion.text initial={false} y={H - 14} fontSize={22} fontWeight={600} fill={INK} textAnchor="start" animate={{ x: m.block.x * S + 10 }} transition={tr}>
                bloque a {f0(m.block.value)} m
              </motion.text>
            </g>
          )}
          {m.press && (
            <g>
              <motion.line initial={false} y1={0} y2={H} stroke="var(--almada)" strokeWidth={3} strokeDasharray="10 8" animate={{ x1: m.press.x * S, x2: m.press.x * S }} transition={tr}>
                <Tip>{`Presiona a ${f1(m.press.value)} m de su portería; liga ${f1(m.press.league)} m`}</Tip>
              </motion.line>
              <motion.text initial={false} y={30} fontSize={22} fontWeight={600} fill={INK} textAnchor="start" animate={{ x: m.press.x * S + 10 }} transition={tr}>
                presión a {f0(m.press.value)} m
              </motion.text>
            </g>
          )}

          {/* fichas */}
          {m.tokens.map((t) => (
            <motion.circle initial={false} key={t.id} r={20} fill="var(--almada)" stroke="#fff" strokeWidth={2.5} animate={{ cx: t.x * S, cy: t.y * S }} transition={tr}>
              <Tip>{t.role}</Tip>
            </motion.circle>
          ))}

          {/* etiquetas de dominio y peligro concedido */}
          {m.tilt && (
            <text x={W - 16} y={30} fontSize={22} fontWeight={600} fill={INK} textAnchor="end">
              {f0(m.tilt.value)} % del juego en campo rival
            </text>
          )}
          {m.conceded && (
            <text x={16} y={30} fontSize={22} fontWeight={600} fill={INK}>
              concede {f2(m.conceded.value)} goles esperados{m.per90 ? " por 90 min" : " por partido"}
            </text>
          )}
          {m.created && m.mode === "ritmo" && (
            <text x={W - 16} y={H - 14} fontSize={22} fontWeight={600} fill={INK} textAnchor="end">
              crea {f2(m.created.value)} goles esperados por 90 min
            </text>
          )}
        </svg>
      </div>

      <div className="flex flex-wrap items-start gap-x-8 gap-y-3 px-5 pt-3 pb-4">
        <ul className="flex flex-wrap gap-x-6 gap-y-1.5 text-sm">
          {changes.length === 0 && ref && <li className="text-white/60">Casi igual que {catLabel(cats[refIdx]).toLowerCase()}.</li>}
          {changes.map((c, i) => (
            <li key={i} className="flex items-center gap-2 text-white/90">
              <span className={`h-2 w-2 rounded-full ${c.tone === "favor" ? "bg-almada" : c.tone === "contra" ? "bg-contra" : "bg-white/60"}`} />
              {c.text}
            </li>
          ))}
        </ul>
        <label className="ml-auto flex items-center gap-2 text-xs text-white/60">
          Comparar con
          <select value={cmp} onChange={(e) => setCmp(e.target.value)} className="rounded-md bg-white/10 text-white px-2 py-1 text-xs border border-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-almada">
            <option value="">nada</option>
            {cats.map((c, i) => (
              <option key={c.category} value={i} disabled={i === safe}>
                {catLabel(c)}
              </option>
            ))}
          </select>
        </label>
      </div>
    </section>
  );
}
