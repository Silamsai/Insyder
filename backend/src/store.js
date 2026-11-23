// Simple JSON-file storage: one file per collection in backend/data/<name>.json
// (e.g. demo-requests.json, signups.json). Swap for a real database later
// without changing the routes.
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const DATA_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "data");
const fileFor = (name) => path.join(DATA_DIR, `${name}.json`);

let queue = Promise.resolve(); // serialise writes

export async function list(name) {
  try {
    return JSON.parse(await readFile(fileFor(name), "utf8"));
  } catch (err) {
    if (err.code === "ENOENT") return [];
    throw err;
  }
}

export function add(name, record) {
  const job = queue.then(async () => {
    await mkdir(DATA_DIR, { recursive: true });
    const all = await list(name);
    all.push(record);
    await writeFile(fileFor(name), JSON.stringify(all, null, 2));
  });
  queue = job.catch(() => {}); // a failed write must not block later ones
  return job;
}

export const listRequests = () => list("demo-requests");
export const addRequest = (record) => add("demo-requests", record);
