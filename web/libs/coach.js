// Textos que dependen del técnico. Un solo lugar para no repetir "Almada" por toda la UI.
export function coachShort(c) {
  return c?.short ?? c?.coach ?? "el técnico";
}

export function coachTeams(c) {
  return (c?.teams ?? []).map((t) => t.team);
}

export function coachYears(c) {
  const y = (d) => (d ? String(d).slice(0, 4) : "");
  const a = y(c?.period?.from);
  const b = y(c?.period?.to);
  return a && b ? (a === b ? a : `${a} a ${b}`) : "";
}

export function listTeams(teams) {
  if (!teams.length) return "";
  if (teams.length === 1) return teams[0];
  return `${teams.slice(0, -1).join(", ")} y ${teams[teams.length - 1]}`;
}

export const NAV = (key) => [
  { href: `/dashboard/${key}`, label: "Identidad" },
  { href: `/dashboard/${key}/escenarios`, label: "Escenarios" },
  { href: `/dashboard/${key}/balon-parado`, label: "Balón parado" },
  { href: `/dashboard/${key}/jugadores`, label: "Jugadores y cambios" },
  { href: `/dashboard/${key}/partidos`, label: "Partidos" },
  { href: `/dashboard/${key}/rivales`, label: "Rivales" },
];
