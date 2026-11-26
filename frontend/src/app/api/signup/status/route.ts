// "Payment received" page: asks the portal whether the new account is ready yet.
import { portalFetch, PortalUnavailable } from "@/lib/portal";

export async function GET(req: Request) {
  const sessionId = new URL(req.url).searchParams.get("session_id") ?? "";
  if (!/^cs_[A-Za-z0-9_]+$/.test(sessionId)) return Response.json({ error: "Invalid session." }, { status: 400 });
  try {
    const res = await portalFetch(`/v1/intake/signups/status?sessionId=${encodeURIComponent(sessionId)}`);
    if (res.status === 404) return Response.json({ status: "processing" });
    if (!res.ok) return Response.json({ error: "Could not check right now." }, { status: 502 });
    return Response.json(await res.json());
  } catch (err) {
    if (err instanceof PortalUnavailable) return Response.json({ error: "Could not check right now." }, { status: 503 });
    throw err;
  }
}
