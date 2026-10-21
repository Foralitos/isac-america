"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

// Pizarra de balón parado: medio campo vertical con la portería arriba. Cinco jugadas (córners, tiros libres,
// saques de banda, penales, todos los tiros), a favor y en contra. Trayectorias agregadas como arcos con nombre;
// zonas de tiro pintadas con su porcentaje. Solo agregados, nunca jugadas sueltas.
const S = 10;
const W = 80 * S;
const H = 60 * S;
const GOAL = 40;
const sx = (py) => py * S;
const sy = (px) => (120 - px) * S;

const PLAYS = [
  { id: "corners", label: "Córners" },
  { id: "free_kicks", label: "Tiros libres" },
  { id: "throwins", label: "Saques de banda" },
  { id: "penalties", label: "Penales" },
  { id: "shots", label: "Todos los tiros" },
];
const DELIV = { inswinging: "cerrado", outswinging: "abierto", corto: "corto", otro: "otro" };
const CORNER_ZONE = { corto: "corto", borde: "borde del área", primer_palo: "primer palo", centro: "centro del área", segundo_palo: "segundo palo" };
const BOX_ZONE = { chica: "área chica", centro: "centro del área", izq: "lado izquierdo del área", der: "lado derecho del área", frente: "frente al área", lejos: "lejos del área", portería: "a portería" };
const ORIGIN = { izquierda: "Izquierda", centro: "Centro", derecha: "Derecha", cerca: "cerca del área", media: "a media distancia", lejos: "lejos" };
const TYPES = { corner: "córner", tiro_libre: "tiro libre al área", tiro_libre_directo: "tiro libre directo", saque_banda: "saque de banda", penal: "penal" };
const TONE = { for: "var(--almada)", against: "var(--contra)" };

const SHOT_ZONES = [
  { id: "chica", label: "área chica", x0: 114, x1: 120, y0: 30, y1: 50, lx: 40, ly: 117 },
  { id: "centro", label: "centro del área", x0: 102, x1: 114, y0: 30, y1: 50, lx: 40, ly: 108 },
  { id: "izq", label: "lado izquierdo del área", x0: 102, x1: 120, y0: 18, y1: 30, lx: 24, ly: 111 },
  { id: "der", label: "lado derecho del área", x0: 102, x1: 120, y0: 50, y1: 62, lx: 56, ly: 111 },
  { id: "frente", label: "frente al área", x0: 84, x1: 102, y0: 18, y1: 62, lx: 40, ly: 93 },
  { id: "lejos", label: "lejos o muy abierto", x0: 60, x1: 84, y0: 0, y1: 80, lx: 40, ly: 72 },
];
function zoneOf(x, y) {
  for (const z of SHOT_ZONES) if (x >= z.x0 && x < z.x1 && y >= z.y0 && y < z.y1) return z.id;
  return "lejos";
}
function shotZones(cells) {
  const acc = Object.fromEntries(SHOT_ZONES.map((z) => [z.id, { ...z, n: 0, goals: 0, xg: 0 }]));
  for (const c of cells ?? []) {
    if (c.cx < 15) continue;
    const z = acc[zoneOf(c.cx * 4 + 2, c.cy * 4 + 2)];
    z.n += c.n;
    z.goals += c.goals;
    z.xg += c.xg;
  }
  return Object.values(acc);
}
const originLabel = (oz) => {
  const [lane, dist] = String(oz).split(" ");
  return `${ORIGIN[lane] ?? lane}, ${ORIGIN[dist] ?? dist}`;
};
const goalsTxt = (g) => `${g} ${g === 1 ? "gol" : "goles"}`;
const OUTLINE = { paintOrder: "stroke", stroke: "#0f1f2e", strokeWidth: 4 };

function Pitch() {
  const line = "rgba(255,255,255,0.55)";
  return (
    <g fill="none" stroke={line} strokeWidth={2}>
      <rect x={1} y={1} width={W - 2} height={H - 2} />
      <rect x={sx(18)} y={0} width={sx(44)} height={sy(102)} />
      <rect x={sx(30)} y={0} width={sx(20)} height={sy(114)} />
      <circle cx={sx(40)} cy={sy(108)} r={3} fill={line} />
      <path d={`M ${sx(40) - 71} ${sy(102)} A 100 100 0 0 0 ${sx(40) + 71} ${sy(102)}`} />
      <path d={`M ${sx(40) - 100} ${H} A 100 100 0 0 1 ${sx(40) + 100} ${H}`} />
      <path d={`M 0 ${sx(1)} A 10 10 0 0 0 ${sx(1)} 0`} />
      <path d={`M ${W} ${sx(1)} A 10 10 0 0 1 ${W - sx(1)} 0`} />
      <rect x={sx(36)} y={-GOAL} width={sx(8)} height={GOAL} stroke="rgba(255,255,255,0.9)" strokeWidth={3} />
      <g stroke="rgba(255,255,255,0.25)" strokeWidth={1}>
        {[1, 2, 3].map((i) => (
          <line key={`v${i}`} x1={sx(36) + (sx(8) * i) / 4} y1={-GOAL} x2={sx(36) + (sx(8) * i) / 4} y2={0} />
        ))}
        {[1, 2, 3].map((i) => (
          <line key={`h${i}`} x1={sx(36)} y1={-GOAL + (GOAL * i) / 4} x2={sx(44)} y2={-GOAL + (GOAL * i) / 4} />
        ))}
      </g>
    </g>
  );
}

function Heat({ cells, color, opacity = 1, id }) {
  const max = Math.max(...cells.map((c) => c.n), 1);
  return (
    <g filter={`url(#${id})`} opacity={opacity}>
      {cells.map((c) => {
        if (c.cx < 15) return null;
        return <rect key={`${c.cx},${c.cy}`} x={c.cy * 4 * S} y={(120 - (c.cx + 1) * 4) * S} width={4 * S} height={4 * S} fill={color} opacity={Math.sqrt(c.n / max)} />;
      })}
    </g>
  );
}

// Un arco agregado con su punto de caída etiquetado (nombre, cantidad y goles).
function Arc({ x0, y0, x1, y1, n, maxN, color, name, sub, title, bend = 40, labelSide = "left", tr, delay, ly }) {
  const mx = (x0 + x1) / 2;
  const my = (y0 + y1) / 2;
  const d = `M ${x0} ${y0} Q ${mx} ${my + bend} ${x1} ${y1}`;
  const w = 3 + (n / maxN) * 18;
  const r = 6 + Math.sqrt(n) * 1.1;
  const left = labelSide === "left";
  const tx = left ? x1 - r - 10 : x1 + r + 10;
  const yl = ly ?? y1;
  const moved = Math.abs(yl - y1) > 6;
  return (
    <g>
      <motion.path d={d} fill="none" stroke={color} strokeWidth={w} strokeLinecap="round" opacity={0.75} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={tr}>
        <title>{title}</title>
      </motion.path>
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay, duration: 0.3 }}>
        <circle cx={x1} cy={y1} r={r} fill="#0f1f2e" stroke={color} strokeWidth={3}>
          <title>{title}</title>
        </circle>
        <text x={x1} y={y1 + 5} fontSize={13} fontWeight={700} textAnchor="middle" fill="#fff" pointerEvents="none">
          {n}
        </text>
        {moved && <line x1={left ? x1 - r : x1 + r} y1={y1} x2={tx + (left ? 4 : -4)} y2={yl + 4} stroke="rgba(255,255,255,0.5)" strokeWidth={1} />}
        <text x={tx} y={yl - 3} fontSize={14} fontWeight={600} textAnchor={left ? "end" : "start"} fill="#fff" pointerEvents="none" style={OUTLINE}>
          {name}
        </text>
        <text x={tx} y={yl + 13} fontSize={12} textAnchor={left ? "end" : "start"} fill="rgba(255,255,255,0.75)" pointerEvents="none" style={OUTLINE}>
          {sub}
        </text>
      </motion.g>
    </g>
  );
}

// Separa etiquetas que caen a menos de `gap` px en vertical (mismo lado), en orden de arriba hacia abajo.
function spreadLabels(items, gap = 36) {
  const out = {};
  const sorted = [...items].sort((a, b) => a.y - b.y);
  let prev = -Infinity;
  for (const it of sorted) {
    let y = Math.max(it.y, prev + gap);
    y = Math.min(y, H - 16);
    out[it.key] = y;
    prev = y;
  }
  return out;
}

function groupZones(bundles, keyFn) {
  const acc = {};
  for (const b of bundles) {
    const k = keyFn(b);
    const z = (acc[k] ??= { key: k, n: 0, xg: 0, goals: 0, shots: 0, ex: 0, ey: 0, ox: 0, oy: 0, ret: 0, mix: {} });
    z.n += b.n;
    z.xg += b.xg;
    z.goals += b.goals;
    z.shots += b.shots ?? 0;
    z.ex += b.ex * b.n;
    z.ey += b.ey * b.n;
    z.ox += (b.ox ?? 0) * b.n;
    z.oy += (b.oy ?? 0) * b.n;
    z.ret += (b.retained_pct ?? 0) * b.n;
    if (b.delivery) z.mix[b.delivery] = (z.mix[b.delivery] ?? 0) + b.n;
  }
  return Object.values(acc)
    .map((z) => ({ ...z, ex: z.ex / z.n, ey: z.ey / z.n, ox: z.ox / z.n, oy: z.oy / z.n, ret: z.ret / z.n }))
    .sort((a, b) => a.n - b.n);
}

export default function SetPieceBoard({ board, penalties }) {
  const reduce = useReducedMotion();
  const [play, setPlay] = useState("corners");
  const [dir, setDir] = useState("for");
  const [team, setTeam] = useState("");
  const [side, setSide] = useState("derecha");
  const [deliv, setDeliv] = useState("");
  const [origin, setOrigin] = useState("");
  const [shotType, setShotType] = useState("");
  const [league, setLeague] = useState(false);
  const teams = Object.keys(board.by_team ?? {});
  const src = team && board.by_team?.[team] ? board.by_team[team] : board;
  const color = TONE[dir];
  const tr = reduce ? { duration: 0 } : { duration: 0.9, ease: "easeOut" };
  const delay = reduce ? 0 : 0.6;
  const key = `${play}-${dir}-${team}-${side}-${deliv}-${origin}-${shotType}`;

  // ---- córners
  const cData = useMemo(() => src[`corners_${dir}`] ?? { bundles: [], heat: [], n: 0 }, [src, dir]);
  const cBundles = useMemo(() => (cData.bundles ?? []).filter((b) => b.side === side && (!deliv || b.delivery === deliv)), [cData, side, deliv]);
  const cZones = useMemo(() => groupZones(cBundles, (b) => b.zone), [cBundles]);
  const cSideTotal = (cData.bundles ?? []).filter((b) => b.side === side).reduce((a, b) => a + b.n, 0);
  const cTot = cZones.reduce((a, z) => ({ n: a.n + z.n, goals: a.goals + z.goals, xg: a.xg + z.xg }), { n: 0, goals: 0, xg: 0 });
  const cTop = cZones.length ? [...cZones].sort((a, b) => b.n - a.n)[0] : null;

  // ---- tiros libres
  const fData = useMemo(() => src[`free_kicks_${dir}`] ?? { bundles: [], direct: [], n: 0 }, [src, dir]);
  const origins = useMemo(() => {
    const acc = {};
    for (const b of fData.bundles ?? []) acc[b.origin_zone] = (acc[b.origin_zone] ?? 0) + b.n;
    for (const b of fData.direct ?? []) acc[b.origin_zone] = (acc[b.origin_zone] ?? 0) + b.n;
    return Object.entries(acc)
      .filter(([, n]) => n >= 10)
      .map(([id, n]) => ({ id, n }))
      .sort((a, b) => b.n - a.n);
  }, [fData]);
  const fDefault = origins.find((o) => !o.id.endsWith("lejos"))?.id ?? origins[0]?.id ?? "";
  const fOrigin = origins.some((o) => o.id === origin) ? origin : fDefault;
  const fZones = useMemo(() => groupZones((fData.bundles ?? []).filter((b) => b.origin_zone === fOrigin), (b) => b.zone).map((z) => ({ ...z, ex: Math.max(63, z.ex) })), [fData, fOrigin]);
  const fDirect = (fData.direct ?? []).find((b) => b.origin_zone === fOrigin);
  const fAll = [...fZones, ...(fDirect ? [{ key: "portería", ...fDirect, ex: 120, ey: 40 }] : [])];
  const fTot = fAll.reduce((a, z) => ({ n: a.n + z.n, goals: a.goals + z.goals }), { n: 0, goals: 0 });
  const fOriginPt = fAll.length ? { x: fAll.reduce((a, z) => a + z.ox * z.n, 0) / fTot.n, y: fAll.reduce((a, z) => a + z.oy * z.n, 0) / fTot.n } : null;

  // ---- saques de banda
  const tData = useMemo(() => src[`throwins_${dir}`] ?? { bundles: [], n: 0 }, [src, dir]);
  const tZones = useMemo(() => groupZones((tData.bundles ?? []).filter((b) => b.side === side), (b) => b.zone), [tData, side]);
  const tTot = tZones.reduce((a, z) => ({ n: a.n + z.n, goals: a.goals + z.goals, ret: a.ret + z.ret * z.n }), { n: 0, goals: 0, ret: 0 });
  const tOriginPt = tZones.length ? { x: tZones.reduce((a, z) => a + z.ox * z.n, 0) / tTot.n, y: side === "izquierda" ? 0 : 80 } : null;

  // ---- tiros
  const sData = useMemo(() => src[`shots_${dir}`] ?? { heat: [], by_type: {}, n: 0 }, [src, dir]);
  const sCells = useMemo(() => (shotType ? (sData.by_type?.[shotType] ?? []) : (sData.heat ?? [])), [sData, shotType]);
  const sZones = useMemo(() => shotZones(sCells), [sCells]);
  const sTotal = sZones.reduce((a, z) => a + z.n, 0) || 1;
  const sMax = Math.max(...sZones.map((z) => z.n), 1);
  const leagueKey = play === "shots" ? `shots_${dir}_heat` : play === "corners" && dir === "for" ? "corners_for_heat" : null;
  const leagueHeat = league && leagueKey ? board.league?.[leagueKey] : null;
  const lZones = useMemo(() => (play === "shots" && leagueHeat ? shotZones(leagueHeat) : null), [play, leagueHeat]);
  const lTotal = lZones ? lZones.reduce((a, z) => a + z.n, 0) || 1 : 1;
  const sTop = sZones.length ? [...sZones].sort((a, b) => b.n - a.n)[0] : null;

  // ---- penales
  const pen = penalties?.[dir] ?? { n: 0, goals: 0 };
  const penPct = pen.n ? Math.round((pen.goals / pen.n) * 100) : null;
  const penLeague = penalties?.league?.n ? Math.round((penalties.league.goals / penalties.league.n) * 100) : null;

  const PILL = (on) => `rounded-full px-3 py-1.5 text-sm transition-colors ${on ? "bg-white text-ink font-semibold" : "bg-white/10 text-white/85 hover:bg-white/20"}`;
  const MINI = (on) => `rounded-full px-3 py-1 text-xs transition-colors ${on ? "bg-white text-ink font-semibold" : "text-white/80 hover:text-white"}`;
  const SEL = "rounded-md bg-white/10 text-white px-2 py-1 text-xs border border-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-almada";
  const who = dir === "for" ? "Almada" : "el rival";

  const headline = () => {
    if (play === "corners")
      return (
        <>
          <span className="display text-xl text-white">{cTot.n.toLocaleString("es-MX")}</span> córners {dir === "for" ? "suyos" : "del rival"} desde la {side}, <span className="display text-xl text-white">{cTot.goals}</span> goles
          {cTop && cTot.n > 0 && (
            <span className="block text-xs text-white/50 mt-0.5">
              {Math.round((cTop.n / cTot.n) * 100)} % van al {CORNER_ZONE[cTop.key]}; {cData.n ? Math.round((cSideTotal / cData.n) * 100) : 0} % de los córners se cobran de este lado.
            </span>
          )}
        </>
      );
    if (play === "free_kicks")
      return (
        <>
          <span className="display text-xl text-white">{fTot.n.toLocaleString("es-MX")}</span> tiros libres {dir === "for" ? "suyos" : "del rival"} desde {fOrigin ? originLabel(fOrigin).toLowerCase() : "ahí"}, <span className="display text-xl text-white">{fTot.goals}</span> goles
          <span className="block text-xs text-white/50 mt-0.5">
            {fData.n?.toLocaleString("es-MX")} en total en zona de peligro, {fData.direct_n} directos a portería.
          </span>
        </>
      );
    if (play === "throwins")
      return (
        <>
          <span className="display text-xl text-white">{tTot.n.toLocaleString("es-MX")}</span> saques {dir === "for" ? "suyos" : "del rival"} cerca del área por la {side}, <span className="display text-xl text-white">{tTot.goals}</span> goles
          <span className="block text-xs text-white/50 mt-0.5">Conserva el balón en el {tTot.n ? Math.round((tTot.ret / tTot.n) * 100) : 0} % de ellos.</span>
        </>
      );
    if (play === "penalties")
      return (
        <>
          <span className="display text-xl text-white">{pen.n}</span> penales {dir === "for" ? "a favor" : "en contra"}, <span className="display text-xl text-white">{pen.goals}</span> goles
          {penPct != null && (
            <span className="block text-xs text-white/50 mt-0.5">
              {penPct} % convertidos{penLeague != null ? `; la liga convierte el ${penLeague} %` : ""}.
            </span>
          )}
        </>
      );
    return (
      <>
        <span className="display text-xl text-white">{sZones.reduce((a, z) => a + z.n, 0).toLocaleString("es-MX")}</span> tiros, <span className="display text-xl text-white">{sZones.reduce((a, z) => a + z.goals, 0)}</span> goles
        {sTop && (
          <span className="block text-xs text-white/50 mt-0.5">
            {Math.round((sTop.n / sTotal) * 100)} % salen desde {sTop.label === "área chica" ? "el área chica" : `el ${sTop.label}`}; 1 de cada {sTop.goals ? Math.round(sTop.n / sTop.goals) : "—"} ahí es gol.
          </span>
        )}
      </>
    );
  };

  return (
    <section className="rounded-xl text-white overflow-hidden" style={{ background: "#0f1f2e" }} aria-label="Pizarra de balón parado">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 px-5 pt-4 pb-2">
        <div className="flex flex-wrap gap-1.5">
          {PLAYS.map((p) => (
            <button key={p.id} type="button" onClick={() => setPlay(p.id)} aria-pressed={p.id === play} className={PILL(p.id === play)}>
              {p.label}
            </button>
          ))}
        </div>
        <span className="inline-flex rounded-full bg-white/10 p-0.5">
          {[
            ["for", "A favor"],
            ["against", "En contra"],
          ].map(([d, l]) => (
            <button key={d} type="button" onClick={() => setDir(d)} aria-pressed={dir === d} className={MINI(dir === d)}>
              {l}
            </button>
          ))}
        </span>
        <div className="ml-auto text-sm text-white/70 text-right">{headline()}</div>
      </div>

      <div className="flex flex-wrap items-center gap-3 px-5 pb-3 text-xs text-white/60">
        {teams.length > 1 && (
          <label className="flex items-center gap-2">
            Equipo
            <select value={team} onChange={(e) => setTeam(e.target.value)} className={SEL}>
              <option value="">todos</option>
              {teams.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>
        )}
        {(play === "corners" || play === "throwins") && (
          <span className="inline-flex rounded-full bg-white/10 p-0.5">
            {["izquierda", "derecha"].map((sd) => (
              <button key={sd} type="button" onClick={() => setSide(sd)} aria-pressed={side === sd} className={MINI(side === sd)}>
                Desde la {sd}
              </button>
            ))}
          </span>
        )}
        {play === "corners" && (
          <label className="flex items-center gap-2">
            Envío
            <select value={deliv} onChange={(e) => setDeliv(e.target.value)} className={SEL}>
              <option value="">todos</option>
              {Object.entries(DELIV).map(([k, v]) => (
                <option key={k} value={k}>
                  {v}
                </option>
              ))}
            </select>
          </label>
        )}
        {play === "free_kicks" && (
          <label className="flex items-center gap-2">
            Desde dónde
            <select value={fOrigin} onChange={(e) => setOrigin(e.target.value)} className={SEL}>
              {origins.map((o) => (
                <option key={o.id} value={o.id}>
                  {originLabel(o.id)} ({o.n})
                </option>
              ))}
            </select>
          </label>
        )}
        {play === "shots" && (
          <label className="flex items-center gap-2">
            Tipo de jugada
            <select value={shotType} onChange={(e) => setShotType(e.target.value)} className={SEL}>
              <option value="">todas</option>
              {Object.entries(TYPES).map(([k, v]) => (
                <option key={k} value={k}>
                  {v}
                </option>
              ))}
            </select>
          </label>
        )}
        {leagueKey && (
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={league} onChange={(e) => setLeague(e.target.checked)} className="accent-white" />
            comparar con la liga
          </label>
        )}
      </div>

      <div className="px-3 pb-1 mx-auto" style={{ maxWidth: 760 }}>
        <svg viewBox={`0 ${-GOAL - 12} ${W} ${H + GOAL + 12}`} className="w-full h-auto block" role="img" aria-label={`${PLAYS.find((p) => p.id === play)?.label}, ${dir === "for" ? "a favor" : "en contra"}`} style={{ fontFamily: "var(--font-archivo), Archivo, sans-serif" }}>
          <defs>
            <filter id="sp-blur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="22" />
            </filter>
            <filter id="sp-blur-league" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="26" />
            </filter>
            <radialGradient id="sp-bg" cx="50%" cy="15%" r="90%">
              <stop offset="0%" stopColor="#16304a" />
              <stop offset="100%" stopColor="#0f1f2e" />
            </radialGradient>
          </defs>
          <rect x={0} y={-GOAL - 12} width={W} height={H + GOAL + 12} fill="url(#sp-bg)" />

          {play === "corners" && leagueHeat && <Heat cells={leagueHeat} color="#ffffff" opacity={0.5} id="sp-blur-league" />}
          {play === "corners" && <Heat key={`heat-${key}`} cells={cData.heat ?? []} color={color} id="sp-blur" />}
          {play === "shots" &&
            sZones.map((z) => (
              <motion.rect key={`z-${z.id}`} x={sx(z.y0)} y={sy(z.x1)} width={sx(z.y1 - z.y0)} height={sy(z.x0) - sy(z.x1)} fill={color} initial={false} animate={{ opacity: 0.08 + 0.55 * (z.n / sMax) }} transition={{ duration: 0.5 }} />
            ))}
          {play === "penalties" && <circle cx={sx(40)} cy={sy(108)} r={120} fill={color} opacity={0.25} />}
          <Pitch />

          {play === "corners" &&
            cZones.map((z, _, arr) => (
              <Arc
                ly={spreadLabels(arr.map((q) => ({ key: q.key, y: sy(q.ex) })))[z.key]}
                key={`${key}-${z.key}`}
                x0={side === "izquierda" ? 0 : W}
                y0={0}
                x1={sx(z.ey)}
                y1={sy(z.ex)}
                n={z.n}
                maxN={Math.max(...cZones.map((q) => q.n), 1)}
                color={color}
                name={CORNER_ZONE[z.key] ?? z.key}
                sub={goalsTxt(z.goals)}
                bend={z.key === "corto" ? 6 : 40}
                labelSide={side === "derecha" ? "left" : "right"}
                tr={tr}
                delay={delay}
                title={`${z.n} córners al ${CORNER_ZONE[z.key] ?? z.key} (${Object.entries(z.mix)
                  .sort((a, b) => b[1] - a[1])
                  .map(([k, v]) => `${Math.round((v / z.n) * 100)} % ${DELIV[k] ?? k}`)
                  .join(", ")}): ${z.xg.toFixed(2)} goles esperados, ${goalsTxt(z.goals)}`}
              />
            ))}

          {play === "free_kicks" && fOriginPt && (
            <g>
              {fAll.map((z) => (
                <Arc
                  ly={spreadLabels(fAll.filter((q) => (q.ey < 40) === (z.ey < 40)).map((q) => ({ key: q.key, y: sy(q.ex) })))[z.key]}
                  key={`${key}-${z.key}`}
                  x0={sx(fOriginPt.y)}
                  y0={sy(fOriginPt.x)}
                  x1={sx(z.ey)}
                  y1={sy(z.ex)}
                  n={z.n}
                  maxN={Math.max(...fAll.map((q) => q.n), 1)}
                  color={z.key === "portería" ? "#ffffff" : color}
                  name={z.key === "portería" ? "directo a portería" : BOX_ZONE[z.key] ?? z.key}
                  sub={goalsTxt(z.goals)}
                  bend={z.key === "portería" ? 0 : fOriginPt.y < 40 ? -30 : 30}
                  labelSide={z.ey < 40 ? "right" : "left"}
                  tr={tr}
                  delay={delay}
                  title={`${z.n} tiros libres ${z.key === "portería" ? "directos a portería" : `al ${BOX_ZONE[z.key] ?? z.key}`}: ${z.xg.toFixed(2)} goles esperados, ${goalsTxt(z.goals)}`}
                />
              ))}
              <circle cx={sx(fOriginPt.y)} cy={sy(fOriginPt.x)} r={9} fill="#fff" stroke="#0f1f2e" strokeWidth={2} />
              <text x={sx(fOriginPt.y)} y={sy(fOriginPt.x) + 26} fontSize={12} textAnchor="middle" fill="rgba(255,255,255,0.8)" style={OUTLINE}>
                desde aquí cobra {who}
              </text>
            </g>
          )}

          {play === "throwins" && tOriginPt && (
            <g>
              {tZones.map((z) => (
                <Arc
                  ly={spreadLabels(tZones.map((q) => ({ key: q.key, y: sy(q.ex) })))[z.key]}
                  key={`${key}-${z.key}`}
                  x0={sx(tOriginPt.y)}
                  y0={sy(tOriginPt.x)}
                  x1={sx(z.ey)}
                  y1={sy(z.ex)}
                  n={z.n}
                  maxN={Math.max(...tZones.map((q) => q.n), 1)}
                  color={color}
                  name={z.key === "lejos" ? "sigue por la banda" : BOX_ZONE[z.key] ?? z.key}
                  sub={`conserva ${Math.round(z.ret * 100)} %, ${goalsTxt(z.goals)}`}
                  bend={side === "izquierda" ? -24 : 24}
                  labelSide={side === "derecha" ? "left" : "right"}
                  tr={tr}
                  delay={delay}
                  title={`${z.n} saques ${z.key === "lejos" ? "que siguen por la banda" : `al ${BOX_ZONE[z.key] ?? z.key}`}: conserva el balón en ${Math.round(z.ret * 100)} %, ${z.shots} tiros, ${goalsTxt(z.goals)}`}
                />
              ))}
              <circle cx={sx(tOriginPt.y)} cy={sy(tOriginPt.x)} r={9} fill="#fff" stroke="#0f1f2e" strokeWidth={2} />
            </g>
          )}

          {play === "penalties" && (
            <g style={OUTLINE}>
              <text x={sx(40)} y={sy(108) + 70} fontSize={44} fontWeight={700} textAnchor="middle" fill="#fff" className="display">
                {pen.goals} de {pen.n}
              </text>
              <text x={sx(40)} y={sy(108) + 98} fontSize={16} textAnchor="middle" fill="rgba(255,255,255,0.85)">
                penales {dir === "for" ? "a favor" : "en contra"} que terminaron en gol{penPct != null ? ` (${penPct} %)` : ""}
              </text>
              {penLeague != null && (
                <text x={sx(40)} y={sy(108) + 122} fontSize={14} textAnchor="middle" fill="rgba(255,255,255,0.6)">
                  la liga convierte el {penLeague} %
                </text>
              )}
            </g>
          )}

          {play === "shots" &&
            sZones.map((z) => {
              const lz = lZones?.find((q) => q.id === z.id);
              const share = Math.round((z.n / sTotal) * 100);
              const small = z.id === "chica";
              return (
                <g key={`zl-${z.id}`} pointerEvents="none" style={OUTLINE}>
                  <text x={sx(z.lx)} y={sy(z.ly) - (small ? 2 : 10)} fontSize={small ? 12 : 13} fill="rgba(255,255,255,0.8)" textAnchor="middle">
                    {z.label}
                  </text>
                  <text x={sx(z.lx)} y={sy(z.ly) + 14} fontSize={small ? 16 : 24} fontWeight={700} fill="#fff" textAnchor="middle" className="display">
                    {share} %
                  </text>
                  <text x={sx(z.lx)} y={sy(z.ly) + (small ? 26 : 32)} fontSize={12} fill="rgba(255,255,255,0.8)" textAnchor="middle">
                    {z.n} tiros, {goalsTxt(z.goals)}
                    {lz ? ` (liga ${Math.round((lz.n / lTotal) * 100)} %)` : ""}
                  </text>
                </g>
              );
            })}
        </svg>
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 px-5 pt-3 pb-4 text-xs text-white/70">
        {(play === "corners" || play === "free_kicks" || play === "throwins") && (
          <span className="inline-flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-8 rounded-full" style={{ background: color }} /> cada arco es un destino; más grueso, más balones
          </span>
        )}
        {play === "corners" && (
          <span className="inline-flex items-center gap-1.5">
            <span className="inline-block h-3 w-3 rounded-full" style={{ background: color, opacity: 0.7 }} /> dónde cae el balón (más brillante, más balones)
          </span>
        )}
        {play === "corners" && <span className="text-white/50">Pasa el mouse por un destino para ver el reparto de envíos.</span>}
        {play === "corners" && leagueHeat && <span className="text-white/50">La mancha blanca es la liga.</span>}
        {play === "free_kicks" && <span className="text-white/50">El arco blanco son los tiros directos a portería.</span>}
        {play === "shots" && (
          <>
            <span className="inline-flex items-center gap-1.5">
              <span className="inline-block h-3 w-5 rounded-sm" style={{ background: color, opacity: 0.7 }} /> cada zona dice qué porcentaje de los tiros sale de ahí; más intensa, más tiros
            </span>
            <span className="text-white/50">{leagueHeat ? "Entre paréntesis, el reparto de la liga." : 'Marca "comparar con la liga" para ver el reparto de la liga.'}</span>
          </>
        )}
        <span className="ml-auto text-white/40">Celdas de 4 m; nunca jugadas sueltas.</span>
      </div>
    </section>
  );
}
