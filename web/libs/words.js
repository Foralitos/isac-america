// Diccionario llano: lo técnico se traduce aquí una sola vez. El nombre técnico vive en el tooltip y en Metodología.
export const METRIC_LABEL = {
  np_xg: "Peligro creado",
  np_shots: "Tiros",
  xg_per_shot: "Calidad de cada tiro",
  shots_outside_box_pct: "Tiros desde fuera del área",
  obv_offense: "Valor de sus acciones con balón",
  directness: "Verticalidad",
  dribbles: "Regates intentados",
  dribbles_completed_pct: "Regates que le salen",
  sequences: "Ataques",
  seq_final_third_pct: "Ataques que llegan cerca del área",
  seq_shot_pct: "Ataques que terminan en tiro",
  seq_start_defensivo_pct: "Ataques que nacen en su campo",
  seq_start_medio_pct: "Ataques que nacen en medio campo",
  seq_start_ultimo_pct: "Ataques que nacen cerca del área rival",
  seq_lane_izquierdo_pct: "Ataques que nacen por la izquierda",
  seq_lane_centro_pct: "Ataques que nacen por el centro",
  seq_lane_derecho_pct: "Ataques que nacen por la derecha",
  pass_pct: "Pases que llegan",
  prog_passes: "Pases que avanzan",
  prog_carries: "Conducciones que avanzan",
  box_entries: "Llegadas al área",
  cross_ratio: "Centros por cada llegada al área",
  field_tilt: "Dominio territorial",
  pup_success_pct: "Pases que llegan bajo presión",
  gk_long_pct: "Salida larga del portero",
  possession_pct: "Posesión",
  ppda_own: "Intensidad de presión",
  press_height: "Altura de la presión",
  def_line: "Altura de la defensa",
  press_phases: "Rachas de presión",
  press_high_pct: "Rachas de presión en campo rival",
  press_success_pct: "Rachas de presión que roban el balón",
  pressures: "Presiones",
  pressures_final_third: "Presiones cerca del área rival",
  counterpressures: "Presión tras pérdida",
  cp_regain_pct: "Presiones tras pérdida que recuperan",
  np_xg_conceded: "Peligro concedido",
  shots_conceded: "Tiros que concede",
  shots_conceded_in_box_pct: "Tiros concedidos desde el área",
  opp_box_entries: "Llegadas al área del rival",
  obv_conceded: "Valor que concede al rival",
  opp_directness: "Verticalidad que permite al rival",
  fouls: "Faltas cometidas",
  xgd: "Balance de peligro",
  transitions: "Ataques tras robo",
  transition_shots: "Tiros tras robo",
  transition_xg: "Peligro creado tras robo",
  transition_conv_pct: "Robos que acaban en tiro",
  high_recoveries: "Robos en campo rival",
  high_rec_shot_pct: "Robos en campo rival con tiro en 10 segundos",
  rec_to_shot_s: "Segundos de robo a tiro",
  vuln_shots: "Tiros del rival justo tras perderla",
  vuln_xg: "Peligro del rival justo tras perderla",
  transition_xg_conceded: "Peligro concedido en contragolpe",
  corners: "Córners",
  corner_xg: "Peligro de córner",
  xg_per_corner: "Peligro por cada córner",
  corner_short_pct: "Córners cortos",
  corner_inswing_pct: "Córners cerrados",
  fk_direct_xg: "Peligro de tiro libre directo",
  fk_indirect_xg: "Peligro de tiro libre al área",
  throwins_danger: "Saques de banda cerca del área",
  throwin_retention_pct: "Saques de banda que conserva",
  throwin_xg: "Peligro tras saque de banda",
  sp_xg: "Peligro de balón parado",
  sp_goals: "Goles de balón parado",
  sp_xg_conceded: "Peligro concedido de balón parado",
  xg_per_corner_conceded: "Peligro por cada córner en contra",
  sp_goals_conceded: "Goles concedidos de balón parado",
  tactical_shifts: "Cambios de dibujo",
  first_sub_minute: "Minuto del primer cambio",
  shots: "Tiros",
  xg_conceded: "Peligro concedido",
  crosses: "Centros",
  losses: "Balones perdidos",
  recoveries_high: "Robos en campo rival",
};

// Nombre técnico para el tooltip, cuando difiere del llano.
export const TECH_LABEL = {
  np_xg: "xG sin penales",
  np_xg_conceded: "xG concedido sin penales",
  xg_per_shot: "xG por tiro",
  obv_offense: "OBV ofensivo",
  obv_conceded: "OBV concedido",
  directness: "directness",
  opp_directness: "directness del rival",
  field_tilt: "field tilt",
  ppda_own: "PPDA propio",
  counterpressures: "contrapresiones",
  cp_regain_pct: "contrapresiones con regain",
  xgd: "diferencia de xG",
  transitions: "transiciones ofensivas",
  transition_xg: "xG en transición",
  transition_xg_conceded: "xG concedido en transición",
  vuln_xg: "xG rival en 10 s tras pérdida",
  corner_xg: "xG de córner",
  xg_per_corner: "xG por córner",
  xg_per_corner_conceded: "xG por córner concedido",
  corner_inswing_pct: "córners inswinging",
  fk_direct_xg: "xG de tiro libre directo",
  fk_indirect_xg: "xG de tiro libre indirecto",
  throwin_xg: "xG tras saque de banda",
  sp_xg: "xG de balón parado",
  sp_xg_conceded: "xG concedido de balón parado",
  xg_conceded: "xG concedido",
  sequences: "secuencias ofensivas",
  press_phases: "fases de presión",
};

export const UNIT_LABEL = {
  "/partido": "por partido",
  "/90 min": "por cada 90 minutos",
  "xG/partido": "goles esperados por partido",
  xG: "goles esperados",
  "OBV/partido": "goles de valor por partido",
  "pases/acción": "pases que deja dar antes de robar",
  "0–1": "de 0 a 1, más alto es más directo",
  ratio: "por cada una",
  m: "metros desde su portería",
  min: "minuto",
  s: "segundos",
  "%": "%",
};

export const metricLabel = (m) => METRIC_LABEL[m?.metric ?? m] ?? m?.label ?? String(m);
export const techLabel = (m) => TECH_LABEL[m?.metric ?? m] ?? null;
export const unitLabel = (u) => UNIT_LABEL[u] ?? u ?? "";

// Nivel verbal del percentil, para no decir "percentil".
export function level(pct) {
  if (pct == null) return "";
  if (pct >= 90) return "de los más altos de la liga";
  if (pct >= 75) return "arriba de la liga";
  if (pct > 25) return "como la liga";
  if (pct > 10) return "abajo de la liga";
  return "de los más bajos de la liga";
}

// "Más que el 95 % de los equipos de la liga" / "Menos que el 74 %".
export function pctSentence(pct) {
  if (pct == null) return "";
  const p = Math.round(pct);
  return p >= 50 ? `Más que el ${p} % de los equipos de la liga` : `Menos que el ${100 - p} % de los equipos de la liga`;
}

export const PCT_HELP = "Comparado con las 198 temporadas de equipo de la Liga MX desde 2021";

// Valor con su unidad en frase, escrita una sola vez: "16.1 por partido", "4 segundos", "49 % de las veces".
export function valueWithUnit(value, unit, { pctOf = "de las veces" } = {}) {
  if (value == null || Number.isNaN(Number(value))) return "sin dato";
  const v = Number(value);
  const n = (d) => v.toFixed(d);
  switch (unit) {
    case "%":
      return `${n(0)} % ${pctOf}`.trim();
    case "/partido":
      return `${v >= 10 ? n(1) : n(2)} por partido`;
    case "/90 min":
      return `${v >= 10 ? n(1) : n(2)} por cada 90 minutos`;
    case "xG/partido":
      return `${n(2)} goles esperados por partido`;
    case "xG":
      return `${n(3)} goles esperados`;
    case "OBV/partido":
      return `${n(2)} goles de valor por partido`;
    case "pases/acción":
      return `${n(1)} pases que deja dar`;
    case "0–1":
      return `${n(2)} de 0 a 1`;
    case "ratio":
      return `${n(2)} por cada una`;
    case "m":
      return `${n(0)} metros`;
    case "min":
      return `minuto ${n(0)}`;
    case "s":
      return `${n(0)} segundos`;
    default:
      return `${v >= 100 ? n(0) : v >= 10 ? n(1) : n(2)}${unit ? ` ${unit}` : ""}`;
  }
}

// Solo el número, con el formato de arriba, para la referencia de liga.
export function valueOnly(value, unit) {
  if (value == null || Number.isNaN(Number(value))) return "sin dato";
  const v = Number(value);
  if (unit === "%") return `${v.toFixed(0)} %`;
  if (unit === "xG") return v.toFixed(3);
  if (unit === "m" || unit === "min" || unit === "s") return v.toFixed(0);
  if (unit === "pases/acción") return v.toFixed(1);
  return v >= 100 ? v.toFixed(0) : v >= 10 ? v.toFixed(1) : v.toFixed(2);
}
