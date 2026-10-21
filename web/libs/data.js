import clientPromise from "./mongo";
import config from "@/config";

// Lectura de los resultados publicados por `isac publish` (base isac_america). Solo lectura.
async function db() {
  const client = await clientPromise;
  return client.db(process.env.MONGODB_DB || "isac_america");
}

const KEY = config.coachKey;

const strip = (doc) => {
  if (!doc) return null;
  const { _id, ...rest } = doc;
  return JSON.parse(JSON.stringify({ id: String(_id), ...rest }));
};

export async function getMeta() {
  return strip(await (await db()).collection("meta").findOne({ key: KEY }));
}

export async function getProfile(key = KEY) {
  return strip(await (await db()).collection("profile").findOne({ _id: `${key}:profile` }));
}

export async function getScenario(name) {
  return strip(await (await db()).collection("scenarios").findOne({ _id: `${KEY}:${name}` }));
}

export async function getSetPieces() {
  return strip(await (await db()).collection("set_pieces").findOne({ _id: `${KEY}:set_pieces` }));
}

export async function getPlayers() {
  return strip(await (await db()).collection("players").findOne({ _id: `${KEY}:players` }));
}

export async function getDefinitions() {
  return strip(await (await db()).collection("definitions").findOne({ _id: `${KEY}:definitions` }));
}

export async function getFindings(filter = {}) {
  const docs = await (await db()).collection("findings").find({ key: KEY, ...filter }).sort({ order: 1 }).toArray();
  return docs.map(strip);
}

export async function getMatches() {
  const docs = await (await db()).collection("matches").find({ key: KEY }).sort({ match_date: 1 }).toArray();
  return docs.map(strip);
}
