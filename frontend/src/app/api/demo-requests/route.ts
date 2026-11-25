// "Book a demo" form handler. Runs on the server (Vercel function), checks the form,
// then forwards it to the Insyder portal, where it shows under Platform HQ → Demo requests.
// DEMO_INTAKE_KEY and PORTAL_API_URL are server-only: they never reach the browser.

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FIELDS = { name: 120, email: 200, company: 200, role: 120, website: 300, message: 2000 } as const;

const fail = (error: string, status = 400) => Response.json({ error }, { status });

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body || typeof body !== "object") return fail("Invalid request.");

  const data: Record<string, string> = {};
  for (const [key, max] of Object.entries(FIELDS)) {
    const v = typeof body[key] === "string" ? (body[key] as string).trim() : "";
    if (v.length > max) return fail(`${key} is too long (max ${max} characters).`);
    if (v) data[key] = v;
  }
  if (!data.name) return fail("Please enter your name.");
  if (!EMAIL.test(data.email ?? "")) return fail("Please enter a valid work email.");
  if (data.website && !/^https?:\/\//i.test(data.website)) return fail("Website should start with http:// or https://");

  const base = (process.env.PORTAL_API_URL ?? "").trim().replace(/\/$/, "");
  const key = (process.env.DEMO_INTAKE_KEY ?? "").trim();
  if (!base || !key) {
    console.error("Demo request not sent: set PORTAL_API_URL and DEMO_INTAKE_KEY");
    return fail("Sorry, we couldn't send your request right now. Please try again later.", 503);
  }

  try {
    const res = await fetch(`${base}/v1/intake/demo-requests`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-intake-key": key },
      body: JSON.stringify(data),
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });
    if (!res.ok) {
      console.error(`Portal rejected the demo request (HTTP ${res.status}): ${await res.text().catch(() => "")}`);
      return fail("Sorry, we couldn't send your request right now. Please try again later.", 502);
    }
    const json = (await res.json().catch(() => ({}))) as { id?: string };
    return Response.json({ ok: true, id: json.id }, { status: 201 });
  } catch (err) {
    console.error(`Could not reach the portal at ${base}:`, err);
    return fail("Sorry, we couldn't send your request right now. Please try again later.", 502);
  }
}
