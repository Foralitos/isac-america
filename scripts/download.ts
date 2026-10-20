/**
 * Descarga la Liga MX completa (competition 73) de la API de StatsBomb a data/raw/.
 *
 * Reanudable: si el archivo ya existe y pesa > 0, se salta.
 * Eventos y 360 se guardan comprimidos (.json.gz) para no reventar el disco.
 *
 * Uso:
 *   yarn download                 # todo menos 360
 *   yarn download --with-360      # también los frames 360 de los partidos que los tengan
 *   yarn download --only-meta     # solo competitions, matches, stats de temporada
 */
import "dotenv/config";
import { mkdirSync, existsSync, statSync, writeFileSync, appendFileSync } from "node:fs";
import { join } from "node:path";
import { gzipSync } from "node:zlib";

const HOST = "https://data.statsbomb.com";
const COMPETITION_ID = 73; // Liga MX
const RAW = join(process.cwd(), "data", "raw");
const LOG = join(process.cwd(), "data", "download.log");
const CONCURRENCY = 4;

const WITH_360 = process.argv.includes("--with-360");
const ONLY_META = process.argv.includes("--only-meta");

const user = process.env.SB_USER;
const pass = process.env.SB_PASS;
if (!user || !pass) {
  console.error("Faltan SB_USER / SB_PASS en .env");
  process.exit(1);
}
const AUTH = "Basic " + Buffer.from(`${user}:${pass}`).toString("base64");

function log(msg: string) {
  const line = `${new Date().toISOString()} ${msg}`;
  console.log(line);
  appendFileSync(LOG, line + "\n");
}

function has(path: string) {
  return existsSync(path) && statSync(path).size > 0;
}

async function get(path: string, attempt = 1): Promise<string> {
  const res = await fetch(HOST + path, { headers: { Authorization: AUTH } });
  if (res.ok) return await res.text();
  const retryable = res.status === 429 || res.status >= 500;
  if (retryable && attempt <= 5) {
    const wait = Math.min(60_000, 2_000 * 2 ** (attempt - 1));
    log(`  ${res.status} en ${path}, reintento ${attempt} en ${wait / 1000}s`);
    await new Promise((r) => setTimeout(r, wait));
    return get(path, attempt + 1);
  }
  throw new Error(`${res.status} ${res.statusText} en ${path}`);
}

/** Baja a archivo si no existe. gz=true comprime. Devuelve true si descargó. */
async function fetchToFile(path: string, file: string, gz = false): Promise<boolean> {
  const target = gz ? file + ".gz" : file;
  if (has(target)) return false;
  const body = await get(path);
  mkdirSync(join(target, ".."), { recursive: true });
  writeFileSync(target, gz ? gzipSync(body) : body);
  return true;
}

async function pool<T>(items: T[], worker: (item: T, i: number) => Promise<void>) {
  let next = 0;
  const errors: string[] = [];
  const runners = Array.from({ length: CONCURRENCY }, async () => {
    while (next < items.length) {
      const i = next++;
      try {
        await worker(items[i], i);
      } catch (e) {
        errors.push(String(e));
        log(`  ERROR ${String(e)}`);
      }
    }
  });
  await Promise.all(runners);
  return errors;
}

type Season = { season_id: number; season_name: string };
type Competition = {
  competition_id: number;
  competition_name: string;
  season_id: number;
  season_name: string;
  match_available_360?: string | null;
};
type Match = {
  match_id: number;
  match_status: string;
  match_status_360?: string;
  season: { season_id: number };
};

async function main() {
  mkdirSync(RAW, { recursive: true });
  log(`=== inicio descarga (with360=${WITH_360}, onlyMeta=${ONLY_META}) ===`);

  // 1. Competiciones y temporadas de la Liga MX
  await fetchToFile("/api/v4/competitions", join(RAW, "competitions.json"));
  const comps: Competition[] = JSON.parse(
    (await import("node:fs")).readFileSync(join(RAW, "competitions.json"), "utf8")
  );
  const seasons: Season[] = comps
    .filter((c) => c.competition_id === COMPETITION_ID)
    .map((c) => ({ season_id: c.season_id, season_name: c.season_name }))
    .sort((a, b) => a.season_id - b.season_id);
  log(`Liga MX: ${seasons.length} temporadas: ${seasons.map((s) => s.season_name).join(", ")}`);

  // 2. Por temporada: partidos y stats agregadas
  for (const s of seasons) {
    const sid = s.season_id;
    await fetchToFile(
      `/api/v6/competitions/${COMPETITION_ID}/seasons/${sid}/matches`,
      join(RAW, "matches", `${sid}.json`)
    );
    await fetchToFile(
      `/api/v4/competitions/${COMPETITION_ID}/seasons/${sid}/team-stats`,
      join(RAW, "team-season-stats", `${sid}.json`)
    );
    await fetchToFile(
      `/api/v7/competitions/${COMPETITION_ID}/seasons/${sid}/player-stats`,
      join(RAW, "player-season-stats", `${sid}.json`)
    );
    await fetchToFile(
      `/api/v1/player-mapping?competition-id=${COMPETITION_ID}&season-id=${sid}`,
      join(RAW, "player-mapping", `${sid}.json`)
    );
    log(`temporada ${s.season_name} (${sid}): meta OK`);
  }
  if (ONLY_META) return log("=== fin (solo meta) ===");

  // 3. Lista de partidos con datos
  const fs = await import("node:fs");
  const matches: Match[] = [];
  for (const s of seasons) {
    const list: Match[] = JSON.parse(
      fs.readFileSync(join(RAW, "matches", `${s.season_id}.json`), "utf8")
    );
    matches.push(...list.filter((m) => m.match_status === "available"));
  }
  log(`${matches.length} partidos con datos`);

  // 4. Por partido: alineaciones, stats, eventos (gz) y opcionalmente 360 (gz)
  let done = 0;
  let downloaded = 0;
  const errors = await pool(matches, async (m) => {
    const id = m.match_id;
    const got = await Promise.all([
      fetchToFile(`/api/v5/lineups/${id}`, join(RAW, "lineups", `${id}.json`)),
      fetchToFile(`/api/v4/matches/${id}/team-stats`, join(RAW, "team-match-stats", `${id}.json`)),
      fetchToFile(`/api/v8/matches/${id}/player-stats`, join(RAW, "player-match-stats", `${id}.json`)),
      fetchToFile(`/api/v11/events/${id}`, join(RAW, "events", `${id}.json`), true),
      WITH_360 && m.match_status_360 === "available"
        ? fetchToFile(`/api/v2/360-frames/${id}`, join(RAW, "360", `${id}.json`), true)
        : Promise.resolve(false),
    ]);
    if (got.some(Boolean)) downloaded++;
    done++;
    if (done % 25 === 0 || done === matches.length) {
      log(`  ${done}/${matches.length} partidos (${downloaded} con descargas nuevas)`);
    }
  });

  log(`=== fin: ${done} partidos, ${errors.length} errores ===`);
  if (errors.length) process.exitCode = 1;
}

main().catch((e) => {
  log(`FATAL ${e}`);
  process.exit(1);
});
