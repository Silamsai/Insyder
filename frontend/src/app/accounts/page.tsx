import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import type { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import HowItWorks from "@/components/HowItWorks";

export const metadata: Metadata = pageMeta({
  path: "/accounts",
  title: "Insyder — Accounts",
  description: "Your target accounts with their research status, buying signals, qualification brief and deals. From watchlist to sales acceptance to CRM.",
});

export default function AccountsPage() {
  return (
    <>
      <section className="pg-hero dk" aria-labelledby="pg-h">
        <div className="w">
        
          <span className="kick" style={{ display: "block", marginTop: "28px" }}>
          Accounts
          </span>
          <h1 className="h1" id="pg-h">
            Every account, its evidence and its path to sales, in one place.
          </h1>
          <p className="sub">
            Your target accounts with their research status, buying signals, qualification brief and deals. From watchlist to sales acceptance to CRM.
          </p>
          <div className="row">
            <Link className="btn b-hi" href="/demo">
              Book a demo
            </Link>
          </div>
          <nav className="anchors" aria-label="On this page">
            <a href="#watchlist">
              {"Watchlist & imports"}
            </a>
            <a href="#brief">
              Account brief
            </a>
            <a href="#qualify">
              Qualify a lead
            </a>
            <a href="#acceptance">
              Sales acceptance
            </a>
            <a href="#pipeline">
              {"Pipeline & CRM"}
            </a>
          </nav>
        </div>
      </section>
      <section aria-label="Accounts in detail">
        <div className="w">
          <div className="frow" id="watchlist">
            <div className="ftxt" data-reveal>
              <span className="kick">
                {"Watchlist & imports"}
              </span>
              <h2>
                All your target accounts, sorted by what matters.
              </h2>
              <p className="lead">
                Accounts grouped by playbook, with tier, research status, sales acceptance and a priority score, beside the signals your monitors found.
              </p>
              <ul className="checks">
                <li>
                  Import accounts or add a target by hand
                </li>
                <li>
                  Filter by tier, research status or sales acceptance
                </li>
                <li>
                  View flat or grouped by playbook
                </li>
                <li>
                  Total accounts, high-intent Tier 1 and open pipeline at a glance
                </li>
              </ul>
            </div>
            <div data-reveal style={{ "--rd": "120ms" } as CSSProperties}>
              <div className="pnl" style={{ padding: "0", overflow: "hidden", background: "transparent", border: "0", boxShadow: "0 24px 60px -20px rgba(13,27,42,.15)" }}>
                <Image
                  src="/accounts-watchlist.png"
                  alt="Accounts watchlist showing target accounts sorted by priority score with tier and research status"
                  width={1494}
                  height={963}
                  sizes="(max-width: 980px) 100vw, 560px"
                  style={{ display: "block", width: "100%", height: "auto", borderRadius: "14px" }}
                />
              </div>
            </div>
          </div>
          <div className="frow rev" id="brief">
            <div className="ftxt" data-reveal>
              <span className="kick">
                Account brief
              </span>
              <h2>
                Every signal, with its source and date.
              </h2>
              <p className="lead">
                One page per account: the evidence and its review status, priority, decision makers, deal stage, owner and a full activity timeline.
              </p>
              <ul className="checks">
                <li>
                  Mark evidence reviewed or flag it as stale
                </li>
                <li>
                  Explainable priority score out of 100
                </li>
                <li>
                  A two-sentence, cited “why now” summary
                </li>
                <li>
                  Activity timeline for everything that happened
                </li>
              </ul>
            </div>
            <div data-reveal style={{ "--rd": "120ms" } as CSSProperties}>
              <div className="pnl" style={{ padding: "0", overflow: "hidden", background: "transparent", border: "0", boxShadow: "0 24px 60px -20px rgba(13,27,42,.15)" }}>
                <Image
                  src="/account-brief.png"
                  alt="Account brief showing detected signals with source, date and review status"
                  width={1200}
                  height={800}
                  sizes="(max-width: 980px) 100vw, 560px"
                  style={{ display: "block", width: "100%", height: "auto", borderRadius: "14px" }}
                />
              </div>
            </div>
          </div>
          <div className="frow" id="qualify">
            <div className="ftxt" data-reveal>
              <span className="kick">
                Qualify a lead
              </span>
              <h2>
                A brief that says how each answer is known.
              </h2>
              <p className="lead">
                A guided five-step flow: pick a lead, check the evidence, fill the brief, add people and send it for review.
              </p>
              <ul className="checks">
                <li>
                  Mark each answer unknown, inferred, observed or confirmed
                </li>
                <li>
                  Fields for use case, environment, driver, timeframe, decision maker and partner
                </li>
                <li>
                  See which acceptance gates are still open
                </li>
                <li>
                  Send to a named sales reviewer with a note
                </li>
              </ul>
            </div>
            <div data-reveal style={{ "--rd": "120ms" } as CSSProperties}>
              <div className="pnl" style={{ padding: "0", overflow: "hidden", background: "transparent", border: "0", boxShadow: "0 24px 60px -20px rgba(13,27,42,.15)" }}>
                <Image
                  src="/qualification-brief.png"
                  alt="Qualification brief showing use case, buying timeframe and deployment model with confidence levels"
                  width={1200}
                  height={800}
                  sizes="(max-width: 980px) 100vw, 560px"
                  style={{ display: "block", width: "100%", height: "auto", borderRadius: "14px" }}
                />
              </div>
            </div>
          </div>
          <div className="frow rev" id="acceptance">
            <div className="ftxt" data-reveal>
              <span className="kick">
                Sales acceptance
              </span>
              <h2>
                A reviewer decides what’s worth sales time.
              </h2>
              <p className="lead">
                Reviewers accept, return or reject each brief. Every decision records the reviewer, reason, time and brief version.
              </p>
              <ul className="checks">
                <li>
                  Acceptance needs reviewed evidence, an owner and a next action
                </li>
                <li>
                  Add the brief fields your workspace requires
                </li>
                <li>
                  Returned briefs go back to the researcher with the reason
                </li>
                <li>
                  Works with or without a separate review step
                </li>
              </ul>
            </div>
            <div data-reveal style={{ "--rd": "120ms" } as CSSProperties}>
              <div className="pnl" style={{ padding: "0", overflow: "hidden", background: "transparent", border: "0", boxShadow: "0 24px 60px -20px rgba(13,27,42,.15)" }}>
                <Image
                  src="/sales-acceptance.png"
                  alt="Sales acceptance workflow showing Draft, Ready for review, Needs research and Accepted status counts"
                  width={1200}
                  height={800}
                  sizes="(max-width: 980px) 100vw, 560px"
                  style={{ display: "block", width: "100%", height: "auto", borderRadius: "14px" }}
                />
              </div>
            </div>
          </div>
          <div className="frow" id="pipeline">
            <div className="ftxt" data-reveal>
              <span className="kick">
                {"Pipeline & CRM"}
              </span>
              <h2>
                Acceptance and deal stage, side by side.
              </h2>
              <p className="lead">
                Track deals on their own, then send accepted accounts to your CRM without creating duplicates.
              </p>
              <ul className="checks">
                <li>
                  Accepting a brief never moves a deal by itself
                </li>
                <li>
                  Owners, next actions and overdue items
                </li>
                <li>
                  Send company, contacts and deal to HubSpot or Salesforce
                </li>
                <li>
                  Partner handoffs that share permitted fields only
                </li>
              </ul>
            </div>
            <div data-reveal style={{ "--rd": "120ms" } as CSSProperties}>
              <div className="pnl" style={{ padding: "0", overflow: "hidden", background: "transparent", border: "0", boxShadow: "0 24px 60px -20px rgba(13,27,42,.15)" }}>
                <Image
                  src="/opportunity-pipeline.png"
                  alt="Opportunity pipeline showing accepted accounts with deal stage, owner and CRM sync status"
                  width={1200}
                  height={800}
                  sizes="(max-width: 980px) 100vw, 560px"
                  style={{ display: "block", width: "100%", height: "auto", borderRadius: "14px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <HowItWorks
        title="From watchlist to CRM, with a check at every step."
        steps={[
          { title: "Research", text: "Check the evidence behind each signal.", icon: "research" },
          { title: "Qualify", text: "Fill a brief where every answer records its basis.", icon: "qualify" },
          { title: "Accept", text: "A reviewer accepts, returns or rejects, with a reason.", icon: "accept" },
          { title: "Hand off", text: "Send to your CRM or a partner, with no duplicates.", icon: "handoff" },
        ]}
      />
      <section className="sec" aria-labelledby="fq-h">
        <div className="w fq">
          <div data-reveal>
            <span className="kick">
              FAQ
            </span>
            <h2 className="h2" id="fq-h">
              Questions about Accounts.
            </h2>
          </div>
          <div className="fqd" data-reveal style={{ "--rd": "100ms" } as CSSProperties}>
            <details>
              <summary>
                What is the priority score?
              </summary>
              <div className="a">
                <p>
                  An explainable score out of 100 based on fit, timing and evidence. It ranks accounts for review; it is not a purchase probability.
                </p>
              </div>
            </details>
            <details>
              <summary>
                Can we skip the review step?
              </summary>
              <div className="a">
                <p>
                  Yes. Small teams can let whoever qualifies a lead accept it and choose who works it.
                </p>
              </div>
            </details>
            <details>
              <summary>
                Does accepting a brief change the deal stage?
              </summary>
              <div className="a">
                <p>
                  No. Sales acceptance and deal stage are tracked separately.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
      <nav className="w related" data-reveal aria-label="More solutions">
        <Link href="/monitor">
          <span>
            ← Previous
          </span>
          <b>
            Monitor
          </b>
        </Link>
        <Link className="nx" href="/contact-profiling">
          <span>
            Next →
          </span>
          <b>
            Contact profiling
          </b>
        </Link>
      </nav>
      <section className="cta-band dk" aria-labelledby="cta-h">
        <div className="w" data-reveal>
          <h2 id="cta-h">
            Give sales fewer, better accounts.
          </h2>
          <div className="row">
            <Link className="btn b-hi" href="/demo">
              Book a demo
            </Link>
            <Link className="btn b-ln" href="/solutions">
              All solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
