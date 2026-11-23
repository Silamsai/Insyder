// Simple JSON-file storage (backend/data/demo-requests.json).
// Swap for a real database later without changing the routes.
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const DATA_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "data");
const FILE = path.join(DATA_DIR, "demo-requests.json");

let queue = Promise.resolve(); // serialise writes

export async function listRequests() {
  try {
    return JSON.parse(await readFile(FILE, "utf8"));
  } catch (err) {
    if (err.code === "ENOENT") return [];
    throw err;
  }
}

export function addRequest(record) {
  const job = queue.then(async () => {
    await mkdir(DATA_DIR, { recursive: true });
    const all = await listRequests();
    all.push(record);
    await writeFile(FILE, JSON.stringify(all, null, 2));
  });
  queue = job.catch(() => {}); // a failed write must not block later ones
  return job;
}
