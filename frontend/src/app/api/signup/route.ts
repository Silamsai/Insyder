// Pricing page sign-up: checks the details, asks the portal to open Stripe Checkout for the
// chosen plan and returns its URL. The account is only created after Stripe confirms payment.
import { portalFetch, PortalUnavailable } from "@/lib/portal";
import { planByKey } from "@/components/plans";
import { SHOW_PRICING } from "@/lib/features";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FIELDS = { plan: 20, name: 120, email: 200, phone: 40, companyName: 200, website: 300 } as const;
const UNAVAILABLE = "Sorry, sign-up isn't available right now. Please try again shortly, or book a demo instead.";

const fail = (error: string, status = 400) => Response.json({ error }, { status });

export async function POST(req: Request) {
  // Pricing hidden for demos (see lib/features.ts): no sign-ups or payments
  if (!SHOW_PRICING) return fail("Sign-up isn't available right now. Please book a demo instead.", 404);
  const body = (await req.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body || typeof body !== "object") return fail("Invalid request.");

  const data: Record<string, string> = {};
  for (const [key, max] of Object.entries(FIELDS)) {
    const v = typeof body[key] === "string" ? (body[key] as string).trim() : "";
    if (v.length > max) return fail(`${key} is too long (max ${max} characters).`);
    if (v) data[key] = v;
  }
  if (!planByKey(data.plan)) return fail("Please choose a plan.");
  if (!data.name) return fail("Please enter your name.");
  if (!EMAIL.test(data.email ?? "")) return fail("Please enter a valid work email.");
  if (!data.companyName) return fail("Please enter your company name.");
  if (data.website && !/^https?:\/\//i.test(data.website)) data.website = `https://${data.website}`;

  try {
    const res = await portalFetch("/v1/intake/signups", { method: "POST", body: JSON.stringify(data) });
    const json = (await res.json().catch(() => ({}))) as { url?: string; error?: { message?: string } };
    // 400 (invalid details) and 409 (email already has an account) carry a message meant for the buyer
    if (res.status === 400 || res.status === 409) return fail(json.error?.message || "Please check your details.", res.status);
    if (!res.ok || !json.url) {
      console.error(`Portal refused the sign-up (HTTP ${res.status}): ${JSON.stringify(json)}`);
      return fail(UNAVAILABLE, 502);
    }
    return Response.json({ url: json.url });
  } catch (err) {
    if (err instanceof PortalUnavailable) return fail(UNAVAILABLE, 503);
    throw err;
  }
}
