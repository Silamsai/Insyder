import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { FiCheck, FiLayers, FiLock, FiStar, FiTrendingUp, FiZap } from "react-icons/fi";
import type { IconType } from "react-icons";
import { pageMeta } from "@/lib/seo";
import { getGbpRates } from "@/lib/rates";
import { CurrencyProvider, PlanPrice } from "@/components/PriceCurrency";
import { everyPlanIncludes, plans, type PlanKey } from "@/components/plans";

const PLAN_ICONS: Record<PlanKey, IconType> = { starter: FiZap, growth: FiTrendingUp, enterprise: FiLayers };

export const metadata: Metadata = pageMeta({
  path: "/pricing",
  title: "Insyder — Pricing",
  description: "Starter, Growth and Enterprise plans for Insyder. Every plan includes every feature; plans differ in research units, users, workspaces and monitor frequency.",
});

const faqs = [
  {
    q: "What is a research unit?",
    a: "Research runs on units. Roughly, each company found or researched uses 1 unit, a decision-maker search uses 1 and a role hypothesis uses 2. Units reset every month, and you always see what a search will cost before it runs.",
  },
  {
    q: "How do I get my login?",
    a: "Choose a plan, enter your details and pay securely with Stripe. Your workspace is created straight away and your login details are emailed to you. You’ll set your own password when you first log in.",
  },
  {
    q: "Can I change plan later?",
    a: "Yes. A company admin can switch plan at any time from Settings → Plan & billing. The change applies straight away and your next bill is adjusted for the days already paid.",
  },
  {
    q: "Can I cancel?",
    a: "Yes, from Settings → Plan & billing, at any time. Your plan stays active until the end of the period you’ve paid for.",
  },
  {
    q: "Are prices per user?",
    a: "No. The price is per company per month, in UK pounds (GBP), for everyone on the plan.",
  },
];

export default async function PricingPage() {
  const rates = await getGbpRates();
  return (
    <>
      <section className="pg-hero dk" aria-labelledby="pg-h">
        <div className="w">
          <span className="kick" style={{ display: "block", marginTop: "28px" }}>
            Pricing
          </span>
          <h1 className="h1" id="pg-h">
            Simple plans. Every feature included.
          </h1>
          <p className="sub">
            Pick the size that fits your team. Every plan has the full product; plans differ only in research units, users, workspaces and how often monitors run.
          </p>
        </div>
      </section>

      <section className="sec" aria-label="Pricing plans" style={{ paddingTop: "72px" }}>
        <div className="w">
          <CurrencyProvider rates={rates}>
          <div className="plans-grid">
            {plans.map((p, i) => {
              const Icon = PLAN_ICONS[p.key];
              return (
                <article
                  key={p.key}
                  className={`plan-card${p.popular ? " pop" : ""}`}
                  data-reveal
                  style={{ "--rd": `${i * 90}ms` } as CSSProperties}
                  aria-labelledby={`plan-${p.key}`}
                >
                  {p.popular ? (
                    <span className="plan-tag">
                      <FiStar aria-hidden="true" /> Most popular
                    </span>
                  ) : null}
                  <div className="plan-top">
                    <h2 id={`plan-${p.key}`}>{p.name}</h2>
                    <span className="plan-ic" aria-hidden="true">
                      <Icon />
                    </span>
                  </div>
                  <p className="plan-blurb">{p.blurb}</p>
                  <PlanPrice gbp={p.price} />
                  <ul className="plan-list">
                    <li>
                      <FiCheck aria-hidden="true" />
                      <span>
                        <b>{p.researchUnits}</b> research units a month
                      </span>
                    </li>
                    <li>
                      <FiCheck aria-hidden="true" />
                      <span>
                        Up to <b>{p.users}</b> users
                      </span>
                    </li>
                    <li>
                      <FiCheck aria-hidden="true" />
                      <span>
                        <b>{p.workspaces}</b> workspace{p.workspaces === 1 ? "" : "s"}
                      </span>
                    </li>
                    <li>
                      <FiCheck aria-hidden="true" />
                      <span>
                        <b>{p.monitors}</b> monitors
                      </span>
                    </li>
                  </ul>
                  <Link className={`btn ${p.popular ? "b-hi" : "b-ink"} plan-btn`} href={`/pricing/checkout?plan=${p.key}`}>
                    Get started with {p.name}
                  </Link>
                </article>
              );
            })}
          </div>
          </CurrencyProvider>
          <p className="plan-note">
            <FiLock aria-hidden="true" /> Prices in UK pounds, per company per month. Secure payment by Stripe. Cancel any time.
          </p>
        </div>
      </section>

      <section className="sec dk" aria-labelledby="inc-h">
        <div className="w">
          <div style={{ maxWidth: "820px" }} data-reveal>
            <span className="kick">Every plan includes</span>
            <h2 className="h2" id="inc-h">
              The whole workflow, from first signal to CRM.
            </h2>
          </div>
          <ul className="plan-inc" data-reveal style={{ "--rd": "100ms" } as CSSProperties}>
            {everyPlanIncludes.map((f) => (
              <li key={f}>
                <FiCheck aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec" aria-labelledby="fq-h">
        <div className="w fq">
          <div data-reveal>
            <span className="kick">FAQ</span>
            <h2 className="h2" id="fq-h">
              Questions about plans.
            </h2>
          </div>
          <div className="fqd" data-reveal style={{ "--rd": "100ms" } as CSSProperties}>
            {faqs.map(({ q, a }) => (
              <details key={q}>
                <summary>{q}</summary>
                <div className="a">
                  <p>{a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
