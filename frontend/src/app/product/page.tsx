import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Insyder — Product tour",
  description: "A tour of Insyder: Discover, Monitor, Accounts, Contact profiling and Outreach.",
};

export default function ProductPage() {
  return (
    <>
      <section className="pg-hero dk" aria-labelledby="pg-h">
        <div className="w">
          <p className="crumb">
            <Link href="/">
              Home
            </Link>
            {" / Product"}
          </p>
          <span className="kick" style={{ display: "block", marginTop: "28px" }}>
            Product tour
          </span>
          <h1 className="h1" id="pg-h">
            Everything your team needs between a signal and a first meeting.
          </h1>
          <p className="sub">
            Five connected workflows, from finding accounts with a reason to talk to handing them to sales.
          </p>
          <div className="row">
            <Link className="btn b-hi" href="/demo">
              Book a demo
            </Link>
          </div>
          <nav className="anchors" aria-label="On this page">
            <a href="#discover">
              Discover
            </a>
            <a href="#monitor">
              Monitor
            </a>
            <a href="#accounts">
              Accounts
            </a>
            <a href="#contacts">
              Contact profiling
            </a>
            <a href="#outreach">
              Outreach
            </a>
          </nav>
        </div>
      </section>
      <section aria-label="Product overview">
        <div className="w">
          <div style={{ paddingTop: "72px" }}>
            <div className="frame-wrap" role="img" aria-label="Insyder Discover screen with fictional sample data: a plain-language search returned 10 companies, four selected, each with its signal, date and sources, ready to assign to a researcher.">
              <div className="ap hero-ap" aria-hidden="true">
                <div className="ap-side">
                  <div className="ap-logo">
                    <Logo size={20} />
                    {" insyder"}
                  </div>
                  <div className="ap-nav">
                    <i />
                    Overview
                  </div>
                  <div className="ap-nav on">
                    <i />
                    Discover
                  </div>
                  <div className="ap-nav">
                    <i />
                    Accounts
                  </div>
                  <div className="ap-nav">
                    <i />
                    Monitors
                  </div>
                  <div className="ap-nav">
                    <i />
                    Outreach
                  </div>
                  <div className="ap-nav">
                    <i />
                    Reports
                  </div>
                  <div className="ap-nav">
                    <i />
                    Settings
                  </div>
                </div>
                <div className="ap-main">
                  <div className="ap-top">
                    <span>
                      Insyder
                    </span>
                    <span>
                      /
                    </span>
                    <b>
                      {"Discover / Find & assign"}
                    </b>
                    <span className="tag">
                      Sample data
                    </span>
                  </div>
                  <div className="ap-subnav">
                    <span className="ap-st on">
                      {"Find & assign"}
                    </span>
                    <span className="ap-st">
                      Playbooks
                    </span>
                  </div>
                  <div className="ap-body">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "12px" }}>
                      <div>
                        <span className="ap-eb">
                          {"Discover · Find & assign"}
                        </span>
                        <p className="ap-h">
                          Find new leads and hand them to a researcher
                        </p>
                      </div>
                      <span className="mb g">
                        History (8)
                      </span>
                    </div>
                    <div className="ap-steps">
                      <span className="ap-stp done">
                        <i>
                          ✓
                        </i>
                        Find leads
                      </span>
                      <span className="ap-stp on">
                        <i>
                          2
                        </i>
                        Choose leads
                      </span>
                      <span className="ap-stp">
                        <i>
                          3
                        </i>
                        Assign researcher
                      </span>
                      <span className="ap-stp">
                        <i>
                          4
                        </i>
                        Done
                      </span>
                    </div>
                    <div className="ap-split">
                      <div className="ap-col">
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <b style={{ fontFamily: "var(--font-schibsted), sans-serif", fontSize: "14.5px" }}>
                            10 companies found · 4 selected
                          </b>
                          <span className="ap-mt">
                            Each saved with its sources
                          </span>
                        </div>
                        <div className="res">
                          <span className="cb y">
                            ✓
                          </span>
                          <span className="mono">
                            NM
                          </span>
                          <div>
                            <div className="nm">
                              {"Northbridge Manufacturing "}
                              <span className="bd i">
                                Expansion
                              </span>
                              <span className="bd i">
                                Infra hiring
                              </span>
                            </div>
                            <div className="ap-mt">
                              New production facility · 14 Oct 2026 · 2 sources
                            </div>
                          </div>
                          <span className="score">
                            86
                          </span>
                        </div>
                        <div className="res">
                          <span className="cb y">
                            ✓
                          </span>
                          <span className="mono">
                            HC
                          </span>
                          <div>
                            <div className="nm">
                              {"Halden Cold Chain "}
                              <span className="bd i">
                                Expansion
                              </span>
                            </div>
                            <div className="ap-mt">
                              New regional depot approved · 6 Nov 2026 · 1 source
                            </div>
                          </div>
                          <span className="score">
                            78
                          </span>
                        </div>
                        <div className="res">
                          <span className="cb y">
                            ✓
                          </span>
                          <span className="mono">
                            FC
                          </span>
                          <div>
                            <div className="nm">
                              {"Fenmoor College "}
                              <span className="bd i">
                                Procurement
                              </span>
                            </div>
                            <div className="ap-mt">
                              Server refresh tender · 16 Nov 2026 · 1 source
                            </div>
                          </div>
                          <span className="score">
                            74
                          </span>
                        </div>
                        <div className="res">
                          <span className="cb y">
                            ✓
                          </span>
                          <span className="mono">
                            AC
                          </span>
                          <div>
                            <div className="nm">
                              {"Arkwright Components "}
                              <span className="bd i">
                                Infra hiring
                              </span>
                            </div>
                            <div className="ap-mt">
                              Infrastructure engineer role · 9 Nov 2026 · 1 source
                            </div>
                          </div>
                          <span className="score md">
                            64
                          </span>
                        </div>
                        <div className="res">
                          <span className="cb" />
                          <span className="mono">
                            KD
                          </span>
                          <div>
                            <div className="nm">
                              {"Kestrel Data Services "}
                              <span className="bd i">
                                Compute
                              </span>
                            </div>
                            <div className="ap-mt">
                              Hosting capacity expansion · 2 Nov 2026 · 1 source
                            </div>
                          </div>
                          <span className="score md">
                            61
                          </span>
                        </div>
                      </div>
                      <div className="ap-col">
                        <div className="ap-card">
                          <p className="ap-ct">
                            Your search
                          </p>
                          <p className="ap-mt" style={{ fontSize: "12.5px", color: "#34404F" }}>
                            “UK manufacturers opening or expanding production sites in the last 90 days”
                          </p>
                          <div className="chips" style={{ marginTop: "8px" }}>
                            <span className="chip on">
                              Infrastructure expansion
                            </span>
                            <span className="chip">
                              United Kingdom
                            </span>
                            <span className="chip">
                              Manufacturing
                            </span>
                          </div>
                          <p className="ap-mt" style={{ marginTop: "8px" }}>
                            Quick search · 10 research units used
                          </p>
                        </div>
                        <div className="ap-card">
                          <p className="ap-ct">
                            Next: assign a researcher
                          </p>
                          <div className="fld">
                            Tom Reed · Researcher
                          </div>
                          <p className="ap-mt" style={{ marginTop: "6px" }}>
                            Creates a research task for each selected lead.
                          </p>
                          <div style={{ marginTop: "10px" }}>
                            <span className="mb">
                              Next: Assign researcher
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="scroll-hint">
              Scroll sideways to see the full screen.
            </p>
          </div>
          <div className="frow" id="discover">
            <div className="ftxt">
              <span className="kick">
                Discover
              </span>
              <h2>
                Find companies with a reason to talk.
              </h2>
              <p className="lead">
                Describe the accounts you want in plain language and get matches saved with their sources.
              </p>
              <ul className="checks">
                <li>
                  Quick search or checked lists
                </li>
                <li>
                  Playbooks of signals
                </li>
                <li>
                  Review before spending
                </li>
              </ul>
            </div>
            <div>
              <div className="pnl" role="img" aria-label="Find & assign, sample data">
                <div aria-hidden="true">
                  <div className="pnl-h">
                    <b>
                      {"Find & assign"}
                    </b>
                    <span className="tag" style={{ margin: "0" }}>
                      Sample data
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Northbridge Manufacturing
                      <small>
                        Expansion + IT vacancy
                      </small>
                    </div>
                    <span>
                      <span className="bd t">
                        Match
                      </span>
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Arkwright Components
                      <small>
                        Infrastructure hiring
                      </small>
                    </div>
                    <span>
                      <span className="bd t">
                        Match
                      </span>
                    </span>
                  </div>
                  <p style={{ marginTop: "12px", fontSize: "13px", color: "#566070" }}>
                    <Link href="/discover" style={{ color: "#0E6B67", fontWeight: "600" }}>
                      More on Discover →
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="frow rev" id="monitor">
            <div className="ftxt">
              <span className="kick">
                Monitor
              </span>
              <h2>
                Keep watching, so you don’t have to.
              </h2>
              <p className="lead">
                Monitors re-run playbooks on a schedule and log every new signal.
              </p>
              <ul className="checks">
                <li>
                  Daily, weekly or monthly
                </li>
                <li>
                  Filter detected signals
                </li>
                <li>
                  Changes flow into the account feed
                </li>
              </ul>
            </div>
            <div>
              <div className="pnl" role="img" aria-label="Signal monitors, sample data">
                <div aria-hidden="true">
                  <div className="pnl-h">
                    <b>
                      Signal monitors
                    </b>
                    <span className="tag" style={{ margin: "0" }}>
                      Sample data
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Infrastructure expansion
                      <small>
                        Daily
                      </small>
                    </div>
                    <span>
                      <span className="bd t">
                        Fresh signals
                      </span>
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Hiring demand
                      <small>
                        Weekly
                      </small>
                    </div>
                    <span>
                      <span className="bd a">
                        Quota reached
                      </span>
                    </span>
                  </div>
                  <p style={{ marginTop: "12px", fontSize: "13px", color: "#566070" }}>
                    <Link href="/monitor" style={{ color: "#0E6B67", fontWeight: "600" }}>
                      More on Monitor →
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="frow" id="accounts">
            <div className="ftxt">
              <span className="kick">
                Accounts
              </span>
              <h2>
                Every account, its evidence and its path to sales.
              </h2>
              <p className="lead">
                Watchlist, account brief, qualification, sales acceptance, pipeline and CRM.
              </p>
              <ul className="checks">
                <li>
                  Signals with sources and dates
                </li>
                <li>
                  Answers marked with their basis
                </li>
                <li>
                  Decisions on record
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
                      New production facility
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
                      Priority
                      <small>
                        Fit, timing and evidence
                      </small>
                    </div>
                    <span>
                      <b>
                        86
                      </b>
                    </span>
                  </div>
                  <p style={{ marginTop: "12px", fontSize: "13px", color: "#566070" }}>
                    <Link href="/accounts" style={{ color: "#0E6B67", fontWeight: "600" }}>
                      More on Accounts →
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="frow rev" id="contacts">
            <div className="ftxt">
              <span className="kick">
                Contact profiling
              </span>
              <h2>
                Know who decides, and what to say.
              </h2>
              <p className="lead">
                Find decision makers with sources, then run a role hypothesis for each.
              </p>
              <ul className="checks">
                <li>
                  Sourced, unverified until checked
                </li>
                <li>
                  Roles to find
                </li>
                <li>
                  Ten-section role hypotheses
                </li>
              </ul>
            </div>
            <div>
              <div className="pnl" role="img" aria-label="Decision makers, sample data">
                <div aria-hidden="true">
                  <div className="pnl-h">
                    <b>
                      Decision makers
                    </b>
                    <span className="tag" style={{ margin: "0" }}>
                      Sample data
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Helen Marsh
                      <small>
                        Head of IT Infrastructure
                      </small>
                    </div>
                    <span>
                      <span className="bd t">
                        Hypothesis ready
                      </span>
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Owen Clarke
                      <small>
                        Operations Director
                      </small>
                    </div>
                    <span>
                      <span className="bd a">
                        Unverified
                      </span>
                    </span>
                  </div>
                  <p style={{ marginTop: "12px", fontSize: "13px", color: "#566070" }}>
                    <Link href="/contact-profiling" style={{ color: "#0E6B67", fontWeight: "600" }}>
                      More on Contact profiling →
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="frow" id="outreach">
            <div className="ftxt">
              <span className="kick">
                Outreach
              </span>
              <h2>
                Every task carries its context.
              </h2>
              <p className="lead">
                Team tasks, clear instructions, drafts from reviewed evidence and partner handoffs.
              </p>
              <ul className="checks">
                <li>
                  One list for the whole team
                </li>
                <li>
                  Drafts for human review
                </li>
                <li>
                  Outcomes logged
                </li>
              </ul>
            </div>
            <div>
              <div className="pnl" role="img" aria-label="Tasks, sample data">
                <div aria-hidden="true">
                  <div className="pnl-h">
                    <b>
                      Tasks
                    </b>
                    <span className="tag" style={{ margin: "0" }}>
                      Sample data
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Northbridge Manufacturing
                      <small>
                        Research · due 22 Nov
                      </small>
                    </div>
                    <span>
                      <span className="bd a">
                        In progress
                      </span>
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Halden Cold Chain
                      <small>
                        Email · due 24 Nov
                      </small>
                    </div>
                    <span>
                      <span className="bd">
                        Open
                      </span>
                    </span>
                  </div>
                  <p style={{ marginTop: "12px", fontSize: "13px", color: "#566070" }}>
                    <Link href="/outreach" style={{ color: "#0E6B67", fontWeight: "600" }}>
                      More on Outreach →
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-band dk" aria-labelledby="cta-h">
        <div className="w">
          <h2 id="cta-h">
            See every step on accounts like yours.
          </h2>
          <div className="row">
            <Link className="btn b-hi" href="/demo">
              Book a demo
            </Link>
            <Link className="btn b-ln" href="/contact-profiling">
              See a role hypothesis
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
