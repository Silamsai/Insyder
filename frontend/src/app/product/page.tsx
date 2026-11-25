import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

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
            <div className="frame-wrap">
              <Image
                src="/discover.png"
                alt="Insyder Discover screen, Choose leads step: four companies found, each with its signal, date, sources and a score out of 100, ready to assign to a researcher."
                width={3446}
                height={1826}
                sizes="(max-width: 1240px) 100vw, 1200px"
                priority
                style={{ display: "block", width: "100%", height: "auto" }}
              />
            </div>
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
