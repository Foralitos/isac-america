// Cada definición del framework en español llano, con el diagrama que la ilustra.
// `term` es el nombre que ven los chips; `corto` es la frase para alguien que no es analista;
// `diagram` es la variante de PitchDiagram (null = icono simple).
export const DEFS = {
  "D-01": { term: "Posesión", corto: "Cada vez que un equipo tiene el balón, desde que lo toma hasta que lo pierde o se detiene el juego.", diagram: null },
  "D-02": { term: "Secuencia ofensiva", corto: "Una posesión en la que el equipo encadena al menos tres acciones con el balón, o que acaba en tiro. Es peligrosa si llega al último tercio.", diagram: "sequence" },
  "D-03": { term: "Transición ofensiva", corto: "Los segundos justo después de robar el balón, antes de que el equipo se acomode. Un tiro en los 10 segundos siguientes a la recuperación cuenta como tiro rápido.", diagram: "transition" },
  "D-04": { term: "Transición defensiva", corto: "Lo mismo visto al revés: qué le pasa al equipo en los 10 segundos después de perder el balón.", diagram: "transition-def" },
  "D-05": { term: "Fase de presión", corto: "Dos o más presiones seguidas, con menos de 5 segundos entre una y otra, mientras el rival tiene el balón. Es alta cuando ocurre en campo rival.", diagram: "press-phase" },
  "D-05b": { term: "PPDA propio", corto: "Cuántos pases le dejamos dar al rival en su propio campo antes de meterle una acción defensiva. Menos pases, más presión.", diagram: "ppda" },
  "D-06": { term: "Contrapresión", corto: "Presionar en los 5 segundos que siguen a perder el balón, para recuperarlo antes de que el rival arme algo.", diagram: "counterpress" },
  "D-07": { term: "Balón parado", corto: "Córners, tiros libres, penales y saques de banda cerca del área rival. Un córner es corto cuando el primer pase mide menos de 15 metros.", diagram: "set-piece" },
  "D-10": { term: "Tercios", corto: "La cancha partida en tres franjas a lo largo: la defensiva, la media y la última, que es la del rival.", diagram: "thirds" },
  "D-11": { term: "Carriles", corto: "La cancha partida en tres franjas a lo ancho: izquierda, centro y derecha, vistas desde el ataque propio.", diagram: "lanes" },
  "D-12": { term: "Área y zona 14", corto: "El área grande y el rectángulo que está justo enfrente de ella, donde se cocinan los goles.", diagram: "box-zone14" },
  "D-13": { term: "Altura de presión y línea defensiva", corto: "A cuántos metros de su propia portería presiona el equipo, y a cuántos defiende.", diagram: "press-height" },
  "D-14": { term: "Progresión", corto: "Un pase o una conducción que avanza al menos 10 metros hacia la portería rival, o que mete el balón en el último tercio.", diagram: "progression" },
  "D-20": { term: "Localía", corto: "Si el equipo jugó en su estadio o en el del rival.", diagram: null },
  "D-21": { term: "Marcador en vivo", corto: "Si en ese instante el equipo iba ganando, empatando o perdiendo. Todo se mide por 90 minutos en cada estado para poder comparar.", diagram: "score-state" },
  "D-22": { term: "Momento del partido", corto: "El partido en tramos de 15 minutos, que se agrupan en 0 a 30, 30 a 60 y 60 a 90.", diagram: "timeline" },
  "D-23": { term: "Situación en la tabla", corto: "Qué se jugaba el equipo antes de ese partido según la tabla de esa jornada: si ya tenía la liguilla, si la podía alcanzar o si no había nada en juego.", diagram: "table" },
  "D-24": { term: "Fase del torneo", corto: "Fase regular, play-in o liguilla. En la liguilla, si es ida o vuelta y cómo iba el global.", diagram: null },
  "D-25": { term: "Tipo de rival", corto: "Si el rival terminó ese torneo entre los seis primeros de la tabla.", diagram: null },
  "D-26": { term: "Torneo", corto: "Apertura si el partido fue de julio en adelante, Clausura si no.", diagram: null },
  "D-26b": { term: "Equipo", corto: "Con qué equipo dirigía el técnico ese partido. Cuando dirigió a más de uno, cada equipo es un escenario.", diagram: null },
  "D-27": { term: "Estilo del rival", corto: "Cómo juega el rival comparado con la liga en seis rasgos: si tiene el balón, si presiona arriba, si juega directo, si pega a la contra, si es peligroso a balón parado y si concede poco. Los rivales parecidos son los 20 partidos contra los estilos más cercanos.", diagram: null },
  "D-28": { term: "Partido simulado", corto: "Cada partido se vuelve a jugar 10,000 veces con las ocasiones que hubo: cada ocasión entra con su probabilidad de gol. Así se ve quién merecía ganar y cuántos puntos merecía cada equipo. Los tiros de una misma jugada cuentan como una sola ocasión.", diagram: null },
  SB: { term: "Métrica de StatsBomb", corto: "Se usa tal como la publica Hudl StatsBomb.", diagram: null },
};

export const DEF_GROUPS = [
  { title: "Unidades de juego", ids: ["D-01", "D-02", "D-03", "D-04", "D-05", "D-05b", "D-06", "D-07"] },
  { title: "Espacio", ids: ["D-10", "D-11", "D-12", "D-13", "D-14"] },
  { title: "Contexto", ids: ["D-20", "D-21", "D-22", "D-23", "D-24", "D-25", "D-26", "D-26b", "D-27"] },
  { title: "Simulación", ids: ["D-28"] },
];

export function defTerm(id) {
  return DEFS[id]?.term ?? id;
}
