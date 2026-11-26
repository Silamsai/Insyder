import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { planByKey, plans } from "@/components/plans";
import SignupForm from "@/components/SignupForm";

export const metadata: Metadata = {
  title: "Insyder — Sign up",
  description: "Enter your details and pay securely to start your Insyder plan.",
  robots: { index: false, follow: false },
};

export default async function CheckoutPage({ searchParams }: { searchParams: Promise<{ plan?: string; cancelled?: string }> }) {
  const { plan: planKey, cancelled } = await searchParams;
  const plan = planByKey(planKey);
  if (!plan) redirect("/pricing");
  const others = plans.filter((p) => p.key !== plan.key);

  return (
    <section className="pg-hero dk" aria-labelledby="pg-h">
      <div className="w demo">
        <div>
          <p className="crumb">
            <Link href="/pricing">Pricing</Link>
            {` / ${plan.name}`}
          </p>
          <span className="kick" style={{ display: "block", marginTop: "28px" }}>
            {plan.name} plan
          </span>
          <h1 className="h1" id="pg-h" style={{ fontSize: "clamp(40px, 4.6vw, 64px)" }}>
            £{plan.price}
            <span style={{ fontSize: "0.4em", fontWeight: 600, color: "#B8C3CF", letterSpacing: "-0.01em" }}> / month</span>
          </h1>
          <p className="sub">{plan.blurb}</p>
          <ul className="checks" style={{ marginTop: "28px" }}>
            <li>{plan.researchUnits} research units a month</li>
            <li>Up to {plan.users} users</li>
            <li>
              {plan.workspaces} workspace{plan.workspaces === 1 ? "" : "s"}
            </li>
            <li>{plan.monitors} monitors</li>
            <li>Every Insyder feature included</li>
          </ul>
          <p className="crumb" style={{ marginTop: "28px", textTransform: "none", letterSpacing: 0, fontFamily: "inherit", fontSize: "15px" }}>
            Not quite right? Switch to{" "}
            {others.map((o, i) => (
              <span key={o.key}>
                <Link href={`/pricing/checkout?plan=${o.key}`} style={{ color: "#7FD3CB" }}>
                  {o.name} (£{o.price})
                </Link>
                {i < others.length - 1 ? " or " : "."}
              </span>
            ))}
          </p>
        </div>
        <div>
          {cancelled ? (
            <p className="flag" role="status" style={{ marginBottom: "14px" }}>
              Payment was cancelled, so nothing was charged. You can try again below.
            </p>
          ) : null}
          <SignupForm plan={plan} />
        </div>
      </div>
    </section>
  );
}
