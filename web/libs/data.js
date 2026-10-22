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
