export const BLOCKS = {
  "M-1": "Ofensiva",
  "M-2": "Defensa y presión",
  "M-3": "Transiciones",
  "M-4": "Balón parado",
  "M-5": "Jugadores y cambios",
};

export const STATE_LABEL = { ganando: "Ganando", empate: "Empatando", perdiendo: "Perdiendo" };

export const SCENARIO_GROUPS = [
  {
    title: "Contexto del partido",
    items: [
      { id: "localia", label: "Local o visita", q: "¿Es el mismo equipo en casa y fuera?", short: "Casa y fuera" },
      { id: "marcador", label: "Marcador en vivo", q: "¿Qué cambia cuando va ganando, empatando o perdiendo?", short: "Ganando, empatando, perdiendo" },
      { id: "momento", label: "Momento del partido", q: "¿Cómo se mueve el partido por tramos de 30 minutos?", short: "Por tramos de 30 minutos" },
      { id: "resultado", label: "Según el resultado", q: "¿Qué tenían en común los partidos que ganó y los que perdió?", short: "Qué distingue a las victorias" },
    ],
  },
  {
    title: "Contexto del torneo",
    items: [
      { id: "tabla", label: "Situación en la tabla", q: "¿Qué hace cuando la clasificación está en juego?", short: "Con la liguilla en juego" },
      { id: "fase", label: "Fase del torneo", q: "¿Juega distinto en liguilla?", short: "Regular, play-in y liguilla" },
      { id: "ida_vuelta", label: "Ida y vuelta", q: "¿Cómo plantea la ida y cómo reacciona en la vuelta?", short: "Según el global" },
      { id: "rival", label: "Tipo de rival", q: "¿Le pesa el rival de arriba?", short: "Top 6 contra el resto" },
      { id: "torneo", label: "Por torneo", q: "¿Se mantuvo la identidad de 2021 a 2026?", short: "Torneo a torneo" },
    ],
  },
  {
    title: "Equipo",
    items: [{ id: "equipo", label: "Por equipo", q: "¿Qué viaja con el técnico y qué depende de la plantilla?", short: "Equipo por equipo" }],
  },
];

export const SCENARIOS = SCENARIO_GROUPS.flatMap((g) => g.items);

// Etiquetas llanas para las categorías que vienen crudas del export.
export const CAT_LABEL = {
  ganando: "Ganando",
  empate: "Empatando",
  perdiendo: "Perdiendo",
  "0-15": "Minutos 0 a 15",
  "15-30": "Minutos 15 a 30",
  "30-45": "Minutos 30 a 45",
  "45-60": "Minutos 45 a 60",
  "60-75": "Minutos 60 a 75",
  "75-90": "Minutos 75 a 90",
  "0-30": "Minutos 0 a 30",
  "30-60": "Minutos 30 a 60",
  "60-90": "Minutos 60 a 90",
  cuartos: "Cuartos de final",
  top6: "Rival del top 6",
  resto: "Resto de rivales",
  pelea_playin: "Pelea el play-in",
  playin: "Play-in",
};

export function catLabel(c) {
  return CAT_LABEL[c.category] ?? CAT_LABEL[c.label] ?? c.label ?? c.category;
}

// Torneos en orden cronológico (Clausura antes que Apertura dentro del mismo año).
export function tournamentKey(name) {
  const m = /^(Apertura|Clausura) (\d{4})$/.exec(name || "");
  if (!m) return 0;
  return Number(m[2]) * 2 + (m[1] === "Apertura" ? 1 : 0);
}

export const SMALL_N = 5;

export function fmt(value, unit = "") {
  if (value === null || value === undefined || Number.isNaN(value)) return "–";
  const v = Number(value);
  if (unit === "%") return `${v.toFixed(0)} %`;
  if (unit === "0–1") return v.toFixed(2);
  if (unit === "min" || unit === "s" || unit === "m") return `${v.toFixed(0)} ${unit}`;
  if (Math.abs(v) >= 100) return v.toFixed(0);
  if (Math.abs(v) >= 10) return v.toFixed(1);
  return v.toFixed(2);
}

export function pctLabel(p) {
  if (p === null || p === undefined) return "–";
  return `p${Math.round(p)}`;
}

export function formationLabel(f) {
  if (!f) return "–";
  return String(f).split("").join("-");
}

export function dateLabel(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString("es-MX", { day: "numeric", month: "short", year: "2-digit" });
}

export const STAKES_LABEL = {
  arranque: "Arranque (J1–J4)",
  directa_asegurada: "Directa asegurada",
  zona_directa: "En zona directa",
  directa_alcanzable: "Directa alcanzable",
  pelea_playin: "Pelea play-in",
  sin_nada: "Sin nada en juego",
  playin: "Play-in",
  liguilla: "Liguilla",
};


// Color de una barra de Almada: azul si le favorece, naranja si le pesa, azul plano si solo describe, gris si la muestra es chica.
export function barColor(d) {
  if (d.value == null) return "var(--line)";
  if (d.n != null && d.n < SMALL_N) return "var(--line)";
  if (!d.direction) return "var(--almada)";
  return (d.pct_good ?? 50) >= 50 ? "var(--almada)" : "var(--contra)";
}

