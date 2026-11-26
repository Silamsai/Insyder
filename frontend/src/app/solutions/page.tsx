import type { Metadata } from "next";
import Link from "next/link";
import SolutionCards from "@/components/SolutionCards";

export const metadata: Metadata = {
  title: "Insyder — Solutions",
  description: "Five connected workflows and how each team in the revenue organisation uses Insyder.",
};

export default function SolutionsPage() {
  return (
    <>
      <section className="pg-hero dk" aria-labelledby="pg-h">
        <div className="w">
         
          <span className="kick" style={{ display: "block", marginTop: "28px" }}>
            Solutions
          </span>
          <h1 className="h1" id="pg-h">
            Five workflows. Every role in the revenue team.
          </h1>
          <p className="sub">
            Explore each workflow, or see how each team uses Insyder on the same account record.
          </p>
          <div className="row">
            <Link className="btn b-hi" href="/demo">
              Book a demo
            </Link>
          </div>
          <nav className="anchors" aria-label="On this page">
            <a href="#workflows">
              Workflows
            </a>
            <a href="#leaders">
              Sales leaders
            </a>
            <a href="#sellers">
              {"SDRs & AEs"}
            </a>
            <a href="#researchers">
              Researchers
            </a>
            <a href="#revops">
              RevOps
            </a>
            <a href="#agencies">
              {"Agencies & MSPs"}
            </a>
            <a href="#partners">
              Channel partners
            </a>
          </nav>
        </div>
      </section>
      <section className="sec" id="workflows" aria-labelledby="wf-h">
        <div className="w">
          <span className="kick" data-reveal>
            Workflows
          </span>
          <h2 className="h2" id="wf-h" data-reveal>
            From first signal to first meeting.
          </h2>
          <SolutionCards />
        </div>
      </section>
      <section aria-labelledby="bt-h">
        <div className="w">
          <span className="kick" data-reveal>
            By team
          </span>
          <h2 className="h2" id="bt-h" data-reveal>
            Built for every role.
          </h2>
          <div className="sol" data-reveal id="leaders">
            <div>
              <span className="kick">
                Sales leaders
              </span>
              <h2>
                Know which accounts are real, and who owns them.
              </h2>
              <p className="lead">
                See the pipeline with sales acceptance next to deal stage, and the reason behind every decision.
              </p>
              <p className="pain">
                <b>
                  Without Insyder
                </b>
                Pipeline full of accounts nobody can explain.
              </p>
              <ul className="checks">
                <li>
                  Acceptance outcomes with reasons
                </li>
                <li>
                  Owners and overdue next actions
                </li>
                <li>
                  Workspace reports with PDF export
                </li>
              </ul>
            </div>
            <div className="scn">
              <div className="scn-h">
                <span className="lbl" style={{ padding: "0" }}>
                  Example
                </span>
                <span className="tag" style={{ margin: "0" }}>
                  Illustrative
                </span>
              </div>
              <div className="scn-r">
                <span className="lbl">
                  Signal
                </span>
                <span>
                  Five accounts entered the pipeline this week.
                </span>
              </div>
              <div className="scn-r">
                <span className="lbl">
                  Context
                </span>
                <span>
                  Two accepted, one returned, two rejected with reasons.
                </span>
              </div>
              <div className="scn-r q">
                <span className="lbl">
                  Question
                </span>
                <span>
                  Which accepted accounts have no meeting booked yet?
                </span>
              </div>
            </div>
          </div>
          <div className="sol" data-reveal id="sellers">
            <div>
              <span className="kick">
                {"SDRs & AEs"}
              </span>
              <h2>
                Start every conversation with a reason and a plan.
              </h2>
              <p className="lead">
                Accepted accounts arrive with evidence, people and a role hypothesis for each contact.
              </p>
              <p className="pain">
                <b>
                  Without Insyder
                </b>
                Generic outreach because nobody had time to work out what changed.
              </p>
              <ul className="checks">
                <li>
                  Role hypothesis before each first call
                </li>
                <li>
                  Drafts written from reviewed evidence
                </li>
                <li>
                  One task list with the brief attached
                </li>
              </ul>
            </div>
            <div className="scn">
              <div className="scn-h">
                <span className="lbl" style={{ padding: "0" }}>
                  Example
                </span>
                <span className="tag" style={{ margin: "0" }}>
                  Illustrative
                </span>
              </div>
              <div className="scn-r">
                <span className="lbl">
                  Signal
                </span>
                <span>
                  A logistics group opens a second distribution hub.
                </span>
              </div>
              <div className="scn-r">
                <span className="lbl">
                  Context
                </span>
                <span>
                  Head of IT likely owns site standards, not budget.
                </span>
              </div>
              <div className="scn-r q">
                <span className="lbl">
                  Question
                </span>
                <span>
                  Who is specifying the new hub’s network?
                </span>
              </div>
            </div>
          </div>
          <div className="sol" data-reveal id="researchers">
            <div>
              <span className="kick">
                Researchers
              </span>
              <h2>
                Turn a lead into a brief sales will trust.
              </h2>
              <p className="lead">
                Search, review the sources and fill a brief where every answer says how it’s known.
              </p>
              <p className="pain">
                <b>
                  Without Insyder
                </b>
                Research lives in tabs and notes, and the reviewer has to redo it.
              </p>
              <ul className="checks">
                <li>
                  Quick searches or checked lists
                </li>
                <li>
                  Evidence marked reviewed or stale
                </li>
                <li>
                  Brief sent to a named reviewer
                </li>
              </ul>
            </div>
            <div className="scn">
              <div className="scn-h">
                <span className="lbl" style={{ padding: "0" }}>
                  Example
                </span>
                <span className="tag" style={{ margin: "0" }}>
                  Illustrative
                </span>
              </div>
              <div className="scn-r">
                <span className="lbl">
                  Signal
                </span>
                <span>
                  A college publishes a server refresh tender.
                </span>
              </div>
              <div className="scn-r">
                <span className="lbl">
                  Context
                </span>
                <span>
                  Value and timeline observed; incumbent unknown.
                </span>
              </div>
              <div className="scn-r q">
                <span className="lbl">
                  Question
                </span>
                <span>
                  Is the incumbent bidding, and who wrote the specification?
                </span>
              </div>
            </div>
          </div>
          <div className="sol" data-reveal id="revops">
            <div>
              <span className="kick">
                RevOps
              </span>
              <h2>
                Only checked accounts reach the CRM.
              </h2>
              <p className="lead">
                Set the workflow, acceptance gates and suppressions, and control what syncs.
              </p>
              <p className="pain">
                <b>
                  Without Insyder
                </b>
                Half-qualified records and duplicates polluting the CRM.
              </p>
              <ul className="checks">
                <li>
                  Workflow with or without sales review
                </li>
                <li>
                  Gates for the facts you require
                </li>
                <li>
                  HubSpot or Salesforce sync without duplicates
                </li>
              </ul>
            </div>
            <div className="scn">
              <div className="scn-h">
                <span className="lbl" style={{ padding: "0" }}>
                  Example
                </span>
                <span className="tag" style={{ margin: "0" }}>
                  Illustrative
                </span>
              </div>
              <div className="scn-r">
                <span className="lbl">
                  Signal
                </span>
                <span>
                  Twelve accounts accepted this month.
                </span>
              </div>
              <div className="scn-r">
                <span className="lbl">
                  Context
                </span>
                <span>
                  Two matched existing CRM records; one contact had opted out.
                </span>
              </div>
              <div className="scn-r q">
                <span className="lbl">
                  Question
                </span>
                <span>
                  Did every accepted account sync with an owner?
                </span>
              </div>
            </div>
          </div>
          <div className="sol" data-reveal id="agencies">
            <div>
              <span className="kick">
                {"Agencies & MSPs"}
              </span>
              <h2>
                Run every client from one login.
              </h2>
              <p className="lead">
                Each client gets its own workspace, playbooks, accounts and reports.
              </p>
              <p className="pain">
                <b>
                  Without Insyder
                </b>
                Spreadsheets per client and shortlists the client can’t check.
              </p>
              <ul className="checks">
                <li>
                  A workspace per client
                </li>
                <li>
                  Explainable shortlists with sources
                </li>
                <li>
                  Usage tracked per workspace
                </li>
              </ul>
            </div>
            <div className="scn">
              <div className="scn-h">
                <span className="lbl" style={{ padding: "0" }}>
                  Example
                </span>
                <span className="tag" style={{ margin: "0" }}>
                  Illustrative
                </span>
              </div>
              <div className="scn-r">
                <span className="lbl">
                  Signal
                </span>
                <span>
                  Twelve target accounts with facility news.
                </span>
              </div>
              <div className="scn-r">
                <span className="lbl">
                  Context
                </span>
                <span>
                  Three are already worked by a channel partner.
                </span>
              </div>
              <div className="scn-r q">
                <span className="lbl">
                  Question
                </span>
                <span>
                  Which are explainable enough to put forward?
                </span>
              </div>
            </div>
          </div>
          <div className="sol" data-reveal id="partners">
            <div>
              <span className="kick">
                Channel partners
              </span>
              <h2>
                Pick up exactly what you’re handed.
              </h2>
              <p className="lead">
                Handoffs carry an agreed next action and follow-up date, and share only permitted fields.
              </p>
              <p className="pain">
                <b>
                  Without Insyder
                </b>
                Leads passed by email with no context.
              </p>
              <ul className="checks">
                <li>
                  Accepted accounts with context
                </li>
                <li>
                  Permitted fields only
                </li>
                <li>
                  Clear follow-up dates
                </li>
              </ul>
            </div>
            <div className="scn">
              <div className="scn-h">
                <span className="lbl" style={{ padding: "0" }}>
                  Example
                </span>
                <span className="tag" style={{ margin: "0" }}>
                  Illustrative
                </span>
              </div>
              <div className="scn-r">
                <span className="lbl">
                  Signal
                </span>
                <span>
                  An accepted account needs on-site fulfilment.
                </span>
              </div>
              <div className="scn-r">
                <span className="lbl">
                  Context
                </span>
                <span>
                  Reviewer prepares a handoff to the regional partner.
                </span>
              </div>
              <div className="scn-r q">
                <span className="lbl">
                  Question
                </span>
                <span>
                  Has the partner followed up by the agreed date?
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-band dk" aria-labelledby="cta-h">
        <div className="w" data-reveal>
          <h2 id="cta-h">
            See how your team would use it.
          </h2>
          <div className="row">
            <Link className="btn b-hi" href="/demo">
              Book a demo
            </Link>
            <Link className="btn b-ln" href="/product">
              Take the product tour
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
