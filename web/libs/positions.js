// Posiciones de StatsBomb: coordenada en la cancha (x de izquierda a derecha, y de portería propia 0 a rival 1)
// y abreviatura en español.
export const POS = {
  Goalkeeper: { x: 0.5, y: 0.06, abbr: "POR" },
  "Right Back": { x: 0.86, y: 0.26, abbr: "LD" },
  "Right Center Back": { x: 0.64, y: 0.2, abbr: "DFC" },
  "Center Back": { x: 0.5, y: 0.2, abbr: "DFC" },
  "Left Center Back": { x: 0.36, y: 0.2, abbr: "DFC" },
  "Left Back": { x: 0.14, y: 0.26, abbr: "LI" },
  "Right Wing Back": { x: 0.9, y: 0.42, abbr: "CAD" },
  "Left Wing Back": { x: 0.1, y: 0.42, abbr: "CAI" },
  "Right Defensive Midfield": { x: 0.62, y: 0.4, abbr: "MCD" },
  "Center Defensive Midfield": { x: 0.5, y: 0.4, abbr: "MCD" },
  "Left Defensive Midfield": { x: 0.38, y: 0.4, abbr: "MCD" },
  "Right Midfield": { x: 0.86, y: 0.54, abbr: "MD" },
  "Right Center Midfield": { x: 0.64, y: 0.54, abbr: "MC" },
  "Center Midfield": { x: 0.5, y: 0.54, abbr: "MC" },
  "Left Center Midfield": { x: 0.36, y: 0.54, abbr: "MC" },
  "Left Midfield": { x: 0.14, y: 0.54, abbr: "MI" },
  "Right Wing": { x: 0.86, y: 0.7, abbr: "ED" },
  "Right Attacking Midfield": { x: 0.66, y: 0.67, abbr: "MCO" },
  "Center Attacking Midfield": { x: 0.5, y: 0.67, abbr: "MCO" },
  "Left Attacking Midfield": { x: 0.34, y: 0.67, abbr: "MCO" },
  "Left Wing": { x: 0.14, y: 0.7, abbr: "EI" },
  "Right Center Forward": { x: 0.62, y: 0.86, abbr: "DC" },
  "Center Forward": { x: 0.5, y: 0.86, abbr: "DC" },
  "Left Center Forward": { x: 0.38, y: 0.86, abbr: "DC" },
  "Secondary Striker": { x: 0.5, y: 0.76, abbr: "SD" },
};

export function posAbbr(p) {
  return POS[p]?.abbr ?? p ?? "";
}

// Huecos de una formación (4231 → filas 4, 2, 3, 1 de atrás hacia adelante) más el portero.
export function formationSlots(f) {
  const rows = String(f ?? "4231").replace(/\.0$/, "").split("").map(Number).filter((n) => n > 0);
  const slots = [{ x: 0.5, y: 0.06, row: -1 }];
  const y0 = 0.22;
  const y1 = 0.86;
  rows.forEach((k, r) => {
    const y = rows.length === 1 ? y1 : y0 + ((y1 - y0) * r) / (rows.length - 1);
    const m = k >= 4 ? 0.1 : k === 3 ? 0.2 : 0.35;
    for (let i = 0; i < k; i++) slots.push({ x: k === 1 ? 0.5 : m + ((1 - 2 * m) * i) / (k - 1), y, row: r });
  });
  return slots;
}

// Apellido para la ficha: con dos tokens el segundo, con tres o más el tercero (dos nombres + apellido paterno).
export function shortName(full) {
  const t = String(full ?? "").trim().split(/\s+/);
  if (t.length <= 1) return t[0] ?? "";
  if (t.length === 2) return t[1];
  return t[2];
}

// Filas de una formación (de atrás hacia adelante) con su reparto lateral en unidades de cancha (y de 0 a 80).
export function rowsOf(f) {
  const rows = String(f ?? "4231").replace(/\.0$/, "").split("").map(Number).filter((n) => n > 0);
  return rows.map((k) => {
    const m = k >= 4 ? 0.1 : k === 3 ? 0.2 : 0.35;
    return Array.from({ length: k }, (_, i) => (k === 1 ? 0.5 : m + ((1 - 2 * m) * i) / (k - 1)) * 80);
  });
}
