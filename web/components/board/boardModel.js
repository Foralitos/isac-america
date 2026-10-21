import { rowsOf } from "@/libs/positions";

// De una categoría de escenario (sus métricas) a un modelo visual en unidades de cancha (120 x 80, ataque a la derecha).
// Todo lo dibujado sale de una métrica; si la métrica no existe en ese escenario, la capa no se dibuja.
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const LANE_Y = { izquierdo: 13.3, centro: 40, derecho: 66.7 };

function val(cat, metric) {
  const m = cat.metrics?.find((x) => x.metric === metric);
  return m ? { value: m.value, league: m.league_mean, pct: m.pct, pct_good: m.pct_good, direction: m.direction } : null;
}

// Secuencia determinista (razón áurea) para repartir puntos sin que parezcan rejilla.
function scatter(n, x0, x1, y0, y1, seed = 0) {
  const pts = [];
  for (let i = 0; i < n; i++) {
    const a = ((i + 1 + seed) * 0.6180339887) % 1;
    const b = ((i + 1 + seed) * 0.7548776662) % 1;
    pts.push({ x: x0 + a * (x1 - x0), y: y0 + b * (y1 - y0) });
  }
  return pts;
}

export function buildModel(cat, formation = 4231) {
  const press = val(cat, "press_height");
  const block = val(cat, "def_line");
  const lanes = ["izquierdo", "centro", "derecho"].map((l) => ({ lane: l, y: LANE_Y[l], ...(val(cat, `seq_lane_${l}_pct`) ?? {}) })).filter((l) => l.value != null);
  const tilt = val(cat, "field_tilt");
  const conceded = val(cat, "np_xg_conceded") ?? val(cat, "xg_conceded");
  const created = val(cat, "np_xg");
  const outside = val(cat, "shots_outside_box_pct");
  const gk = val(cat, "gk_long_pct");
  const mode = lanes.length ? "forma" : "ritmo";

  // Fichas: las filas cuelgan de las dos alturas.
  const pressX = clamp(press?.value ?? 55, 30, 100);
  const blockX = clamp(block?.value ?? pressX - 10, 20, 90);
  const rows = rowsOf(formation);
  const n = rows.length;
  // Las líneas quedan en su valor real; las filas de fichas se cuelgan de ellas pero con al menos 9 m entre filas para que se lean.
  let lo = blockX - 8;
  let hi = pressX + 12;
  const need = 9 * (n - 1);
  if (hi - lo < need) {
    const mid = (lo + hi) / 2;
    lo = mid - need / 2;
    hi = mid + need / 2;
  }
  const xs = rows.map((_, i) => (n === 1 ? hi : lo + ((hi - lo) * i) / (n - 1)));
  const tokens = [{ id: "gk", x: 6, y: 40, role: "portero" }];
  rows.forEach((ys, i) => ys.forEach((y, j) => tokens.push({ id: `r${i}-${j}`, x: clamp(xs[i], 8, 112), y, role: i === 0 ? "defensa" : i === n - 1 ? "delantero" : "medio" })));
  // Ids estables 0..10 para que las fichas se deslicen aunque cambie la formación.
  const stable = tokens.map((t, i) => ({ ...t, id: `t${i}` }));

  const rhythm =
    mode === "ritmo"
      ? {
          pressDots: scatter(clamp(Math.round((val(cat, "pressures_final_third")?.value ?? 0) / 1.5), 0, 36), 82, 116, 8, 72, 3),
          pressValue: val(cat, "pressures_final_third"),
          highRec: scatter(clamp(Math.round(val(cat, "recoveries_high")?.value ?? 0), 0, 18), 78, 104, 12, 68, 11),
          highRecValue: val(cat, "recoveries_high"),
          boxEntries: val(cat, "box_entries"),
          crosses: val(cat, "crosses"),
          losses: scatter(clamp(Math.round((val(cat, "losses")?.value ?? 0) / 5), 0, 30), 20, 58, 8, 72, 7),
          lossesValue: val(cat, "losses"),
          transConceded: val(cat, "transition_xg_conceded"),
          transCreated: val(cat, "transition_xg"),
        }
      : null;

  return {
    mode,
    formation,
    press: press ? { x: pressX, ...press } : null,
    block: block ? { x: blockX, ...block } : null,
    tokens: stable,
    lanes,
    tilt,
    conceded,
    created,
    shots: outside ? { outside: outside.value, inside: 100 - outside.value, ...outside } : null,
    gk,
    rhythm,
    per90: !!cat.minutes,
  };
}

// Frases con lo que más cambia entre dos situaciones. Devuelve las tres de mayor peso.
export function whatChanges(a, b, labelB) {
  if (!a || !b) return [];
  const out = [];
  const add = (score, text, tone) => out.push({ score: Math.abs(score), text, tone });
  const pct = (x, y) => (y ? ((x - y) / Math.abs(y)) * 100 : 0);
  const sign = (d) => (d > 0 ? "más" : "menos");
  if (a.press && b.press) {
    const d = a.press.value - b.press.value;
    if (Math.abs(d) >= 0.8) add(d / 2.5, `Presiona ${Math.abs(d).toFixed(1)} m más ${d > 0 ? "arriba" : "abajo"} que ${labelB}`, d > 0 ? "favor" : "contra");
  }
  if (a.block && b.block) {
    const d = a.block.value - b.block.value;
    if (Math.abs(d) >= 0.8) add(d / 3, `Defiende ${Math.abs(d).toFixed(1)} m más ${d > 0 ? "arriba" : "atrás"}`, "neutro");
  }
  if (a.tilt && b.tilt) {
    const d = a.tilt.value - b.tilt.value;
    if (Math.abs(d) >= 1.5) add(d / 4, `Juega ${Math.abs(d).toFixed(0)} puntos ${sign(d)} en campo rival`, d > 0 ? "favor" : "contra");
  }
  if (a.conceded && b.conceded) {
    const p = pct(a.conceded.value, b.conceded.value);
    if (Math.abs(p) >= 6) add(p / 15, `Concede ${Math.abs(p).toFixed(0)} % ${sign(p)} peligro`, p > 0 ? "contra" : "favor");
  }
  if (a.created && b.created) {
    const p = pct(a.created.value, b.created.value);
    if (Math.abs(p) >= 6) add(p / 15, `Crea ${Math.abs(p).toFixed(0)} % ${sign(p)} peligro`, p > 0 ? "favor" : "contra");
  }
  if (a.lanes.length && b.lanes.length) {
    let best = null;
    for (const la of a.lanes) {
      const lb = b.lanes.find((x) => x.lane === la.lane);
      if (!lb) continue;
      const d = la.value - lb.value;
      if (!best || Math.abs(d) > Math.abs(best.d)) best = { d, lane: la.lane };
    }
    if (best && Math.abs(best.d) >= 2) add(best.d / 4, `Nacen ${sign(best.d)} ataques por ${best.lane === "centro" ? "el centro" : `la ${best.lane === "izquierdo" ? "izquierda" : "derecha"}`} (${best.d > 0 ? "+" : "−"}${Math.abs(best.d).toFixed(0)} puntos)`, "neutro");
  }
  if (a.gk && b.gk) {
    const d = a.gk.value - b.gk.value;
    if (Math.abs(d) >= 3) add(d / 6, `El portero juega ${Math.abs(d).toFixed(0)} puntos ${sign(d)} en largo`, "neutro");
  }
  if (a.shots && b.shots) {
    const d = a.shots.outside - b.shots.outside;
    if (Math.abs(d) >= 3) add(d / 6, `Tira ${Math.abs(d).toFixed(0)} puntos ${sign(d)} desde fuera del área`, "neutro");
  }
  if (a.rhythm && b.rhythm) {
    const r = (k, label, toneUp) => {
      const x = a.rhythm[k]?.value;
      const y = b.rhythm[k]?.value;
      if (x == null || y == null) return;
      const p = pct(x, y);
      if (Math.abs(p) >= 6) add(p / 15, `${label} ${Math.abs(p).toFixed(0)} % ${sign(p)}`, p > 0 ? toneUp : toneUp === "favor" ? "contra" : "favor");
    };
    r("pressValue", "Presiona cerca del área rival", "favor");
    r("boxEntries", "Llega al área", "favor");
    r("lossesValue", "Pierde balones", "contra");
    r("crosses", "Centra", "neutro");
    r("transCreated", "Crea peligro tras robar", "favor");
  }
  out.sort((x, y) => y.score - x.score);
  return out.slice(0, 3);
}
