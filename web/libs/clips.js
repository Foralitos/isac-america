// Jugadas reales que respaldan un hallazgo: el dato vive en el dashboard y el clip es el ejemplo.
// Los videos están en el R2 público (bucket trafickads, prefijo isac-america/clips/); aquí solo va la URL.
// Para agregar una jugada: subir mp4 + jpg a ese prefijo y añadir una entrada con el inicio del título del hallazgo.
const BASE = "https://pub-a9649c219d0a44139d795e7987eda305.r2.dev/isac-america/clips";

export const CLIPS = {
  "jorge-guillermo-almada-alves": [
    {
      finding: "Vive del robo",
      src: `${BASE}/clasico-73-robo.mp4`,
      poster: `${BASE}/clasico-73-robo.jpg`,
      match: "América 2-2 Chivas, jornada 9 del Apertura 2026, minuto 73",
      text: "Chivas sale jugando desde su portero. El América gana el duelo al receptor, roba a 22 m del arco y en 4 segundos y 2 pases empata con un tiro de xG 0.85.",
      defs: ["D-03", "D-10"],
    },
  ],
};

export function clipFor(key, finding) {
  return (CLIPS[key] ?? []).find((c) => finding.title?.startsWith(c.finding)) ?? null;
}
