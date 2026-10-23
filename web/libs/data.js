import clientPromise from "./mongo";

// Lectura de los resultados publicados por `isac publish` (base isac_america). Solo lectura.
// Todo va por `key` (clave del técnico); lo compartido vive bajo la clave "global".
async function db() {
  const client = await clientPromise;
  return client.db(process.env.MONGODB_DB || "isac_america");
}

const GLOBAL = "global";

const strip = (doc) => {
  if (!doc) return null;
  const { _id, ...rest } = doc;
  return JSON.parse(JSON.stringify({ id: String(_id), ...rest }));
};

export async function getCoaches() {
  const docs = await (await db()).collection("coaches").find({}).sort({ n_matches: -1 }).toArray();
  return docs.map(strip);
}

export async function getCoach(key) {
  return strip(await (await db()).collection("coaches").findOne({ _id: key }));
}

export async function getMeta(key) {
  return strip(await (await db()).collection("meta").findOne({ _id: `${key}:meta` }));
}

export async function getProfile(key, teamKey = null) {
  const _id = teamKey ? `${key}:${teamKey}:profile` : `${key}:profile`;
  return strip(await (await db()).collection("profile").findOne({ _id }));
}

export async function getScenario(key, name) {
  return strip(await (await db()).collection("scenarios").findOne({ _id: `${key}:${name}` }));
}

export async function getSetPieces(key) {
  return strip(await (await db()).collection("set_pieces").findOne({ _id: `${key}:set_pieces` }));
}

export async function getPlayers(key) {
  return strip(await (await db()).collection("players").findOne({ _id: `${key}:players` }));
}

export async function getDefinitions() {
  return strip(await (await db()).collection("definitions").findOne({ _id: `${GLOBAL}:definitions` }));
}

export async function getLeague() {
  return strip(await (await db()).collection("league").findOne({ _id: `${GLOBAL}:league` }));
}

export async function getFindings(key, filter = {}) {
  const docs = await (await db()).collection("findings").find({ key, ...filter }).sort({ order: 1 }).toArray();
  return docs.map(strip);
}

export async function getMatches(key) {
  const docs = await (await db()).collection("matches").find({ key }).sort({ match_date: 1 }).toArray();
  return docs.map(strip);
}

export async function getRivals(key) {
  return strip(await (await db()).collection("rivals").findOne({ _id: `${key}:rivals` }));
}

export async function getSimulation(key) {
  return strip(await (await db()).collection("simulation").findOne({ _id: `${key}:simulation` }));
}

// Un solo partido de la simulación (el documento completo pesa ~1 MB) más el índice para navegar entre listas.
export async function getSimulationMatch(key, matchId) {
  const col = (await db()).collection("simulation");
  const _id = `${key}:simulation`;
  const [one, index] = await Promise.all([
    col.findOne({ _id }, { projection: { n_sims: 1, matches: { $elemMatch: { match_id: matchId } } } }),
    col.findOne({ _id }, { projection: { lists: 1, "matches.match_id": 1, "matches.team": 1 } }),
  ]);
  if (!one?.matches?.length) return null;
  return { n_sims: one.n_sims, match: JSON.parse(JSON.stringify(one.matches[0])), lists: JSON.parse(JSON.stringify(index.lists)), order: index.matches.map((m) => m.match_id), teamOf: Object.fromEntries(index.matches.map((m) => [m.match_id, m.team])) };
}
