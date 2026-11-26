import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";

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
          <p className="crumb">
            <Link href="/">
              Home
            </Link>
            {" / "}
            <Link href="/solutions">
              Solutions
            </Link>
            {" / Accounts"}
          </p>
          <span className="kick" style={{ display: "block", marginTop: "28px" }}>
            Solutions · Accounts
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
            <div className="ftxt">
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
            <div>
              <div className="pnl" role="img" aria-label="Account intelligence, sample data">
                <div aria-hidden="true">
                  <div className="pnl-h">
                    <b>
                      Account intelligence
                    </b>
                    <span className="tag" style={{ margin: "0" }}>
                      Sample data
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Northbridge Manufacturing
                      <small>
                        Tier 1 · accepted · qualified
                      </small>
                    </div>
                    <span>
                      <b>
                        86
                      </b>
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Halden Cold Chain
                      <small>
                        Tier 1 · accepted
                      </small>
                    </div>
                    <span>
                      <b>
                        78
                      </b>
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Fenmoor College
                      <small>
                        Tier 1 · in review
                      </small>
                    </div>
                    <span>
                      <b>
                        74
                      </b>
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Arkwright Components
                      <small>
                        Tier 2 · draft
                      </small>
                    </div>
                    <span>
                      <b>
                        64
                      </b>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frow rev" id="brief">
            <div className="ftxt">
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
            <div>
              <div className="pnl" role="img" aria-label="Northbridge Manufacturing, sample data">
                <div aria-hidden="true">
                  <div className="pnl-h">
                    <b>
                      Northbridge Manufacturing
                    </b>
                    <span className="tag" style={{ margin: "0" }}>
                      Sample data
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      New production facility announced
                      <small>
                        Expansion · 14 Oct 2026
                      </small>
                    </div>
                    <span>
                      <span className="bd t">
                        Reviewed
                      </span>
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      IT Infrastructure Lead role
                      <small>
                        Infra hiring · 03 Nov 2026
                      </small>
                    </div>
                    <span>
                      <span className="bd">
                        Not reviewed
                      </span>
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Regional hub consolidation
                      <small>
                        Compute · 18 Aug 2026
                      </small>
                    </div>
                    <span>
                      <span className="bd a">
                        Stale
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frow" id="qualify">
            <div className="ftxt">
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
            <div>
              <div className="pnl" role="img" aria-label="Qualification brief, sample data">
                <div aria-hidden="true">
                  <div className="pnl-h">
                    <b>
                      Qualification brief
                    </b>
                    <span className="tag" style={{ margin: "0" }}>
                      Sample data
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Workload / use case
                      <small>
                        New production lines need site systems
                      </small>
                    </div>
                    <span>
                      <span className="bd i">
                        Observed
                      </span>
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Buying timeframe
                      <small>
                        Before opening · date disputed
                      </small>
                    </div>
                    <span>
                      <span className="bd a">
                        Inferred
                      </span>
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Deployment model
                      <small>
                        Critical question for the meeting
                      </small>
                    </div>
                    <span>
                      <span className="bd">
                        Unknown
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frow rev" id="acceptance">
            <div className="ftxt">
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
            <div>
              <div className="pnl" role="img" aria-label="Sales acceptance, sample data">
                <div aria-hidden="true">
                  <div className="pnl-h">
                    <b>
                      Sales acceptance
                    </b>
                    <span className="tag" style={{ margin: "0" }}>
                      Sample data
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Draft
                      <small>
                        Being researched
                      </small>
                    </div>
                    <span>
                      <b>
                        9
                      </b>
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Ready for review
                      <small>
                        Waiting for a decision
                      </small>
                    </div>
                    <span>
                      <b>
                        2
                      </b>
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Needs research
                      <small>
                        Returned with a reason
                      </small>
                    </div>
                    <span>
                      <b>
                        1
                      </b>
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Accepted
                      <small>
                        Owner and next action set
                      </small>
                    </div>
                    <span>
                      <b>
                        7
                      </b>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frow" id="pipeline">
            <div className="ftxt">
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
            <div>
              <div className="pnl" role="img" aria-label="Opportunity pipeline, sample data">
                <div aria-hidden="true">
                  <div className="pnl-h">
                    <b>
                      Opportunity pipeline
                    </b>
                    <span className="tag" style={{ margin: "0" }}>
                      Sample data
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Northbridge Manufacturing
                      <small>
                        Accepted · Qualified · Priya Shah
                      </small>
                    </div>
                    <span>
                      27 Nov
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Halden Cold Chain
                      <small>
                        Accepted · Contacted · £60,000
                      </small>
                    </div>
                    <span>
                      24 Nov
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Kestrel Data Services
                      <small>
                        New · no deal yet
                      </small>
                    </div>
                    <span>
                      <span className="bd r">
                        Overdue
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec dk" aria-labelledby="st-h">
        <div className="w">
          <span className="kick">
            How it works
          </span>
          <h2 className="h2" id="st-h">
            From watchlist to CRM, with a check at every step.
          </h2>
          <div className="steps3">
            <div>
              <span>
                01
              </span>
              <b>
                Research
              </b>
              <p>
                Check the evidence behind each signal.
              </p>
            </div>
            <div>
              <span>
                02
              </span>
              <b>
                Qualify
              </b>
              <p>
                Fill a brief where every answer records its basis.
              </p>
            </div>
            <div>
              <span>
                03
              </span>
              <b>
                Accept
              </b>
              <p>
                A reviewer accepts, returns or rejects, with a reason.
              </p>
            </div>
            <div>
              <span>
                04
              </span>
              <b>
                Hand off
              </b>
              <p>
                Send to your CRM or a partner, with no duplicates.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec" aria-labelledby="fq-h">
        <div className="w fq">
          <div>
            <span className="kick">
              FAQ
            </span>
            <h2 className="h2" id="fq-h">
              Questions about Accounts.
            </h2>
          </div>
          <div className="fqd">
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
      <nav className="w related" aria-label="More solutions">
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
        <div className="w">
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
