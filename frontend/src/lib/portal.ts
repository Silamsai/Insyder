// Server-only calls from this site to the Insyder portal's API (insyder-portal/backend).
// PORTAL_API_URL and DEMO_INTAKE_KEY never reach the browser.

export class PortalUnavailable extends Error {}

export async function portalFetch(path: string, init: RequestInit = {}) {
  const base = (process.env.PORTAL_API_URL ?? "").trim().replace(/\/$/, "");
  const key = (process.env.DEMO_INTAKE_KEY ?? "").trim();
  if (!base || !key) {
    console.error(`Portal call ${path} not sent: set PORTAL_API_URL and DEMO_INTAKE_KEY`);
    throw new PortalUnavailable("not configured");
  }
  try {
    return await fetch(`${base}${path}`, {
      ...init,
      headers: { "Content-Type": "application/json", "x-intake-key": key, ...(init.headers ?? {}) },
      signal: AbortSignal.timeout(20_000),
      cache: "no-store",
    });
  } catch (err) {
    console.error(`Could not reach the portal at ${base}:`, err);
    throw new PortalUnavailable("unreachable");
  }
}
