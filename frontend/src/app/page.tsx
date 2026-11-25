import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GetStarted from "@/components/GetStarted";
import SolutionCards from "@/components/SolutionCards";

export const metadata: Metadata = {
  title: "Insyder — Account intelligence for revenue teams",
  description: "Find the right accounts, see the evidence, find who decides and walk into every first meeting prepared.",
};

export default function HomePage() {
  return (
    <>
      <section className="hero-bg" aria-labelledby="h1">
        <div className="hero dk" style={{ background: "transparent" }}>
          <div className="w">
            <div className="hero-c">
              <span className="pill-lab">
                Account intelligence for revenue teams
              </span>
              <h1 className="h1" id="h1">
                {"Find the right accounts. Walk into "}
                <em>
                  every first meeting
                </em>
                {" prepared."}
              </h1>
              <p className="sub">
                Insyder spots companies going through the changes your offer depends on, shows the evidence, finds the people who decide, and briefs your sellers on each one before they call.
              </p>
              <div className="row">
                <Link className="btn b-hi" href="/demo">
                  Book a demo
                </Link>
                <Link className="btn b-ln" href="/discover">
                  See how Discover works
                </Link>
              </div>
             
            </div>
            <div className="stage">
              <div className="frame-wrap">
                <Image
                  src="/discover-v3.png"
                  alt="Insyder Discover screen, Choose leads step: four companies found, each with its signal, date, sources and a score out of 100, ready to assign to a researcher."
                  width={3438}
                  height={1803}
                  sizes="(max-width: 1240px) 100vw, 1200px"
                  priority
                  style={{ display: "block", width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="strip" aria-label="Who Insyder is built for">
        <div className="w">
          <p>
            Built for teams who sell into change
          </p>
          <ul>
            <li>
              Technology sales teams
            </li>
            <li>
              SDR teams
            </li>
            <li>
              Managed service providers
            </li>
            <li>
              Agencies
            </li>
            <li>
              Channel partners
            </li>
          </ul>
        </div>
      </section>
      <section className="sec" aria-labelledby="sol-h" style={{ paddingTop: "72px" }}>
        <div className="w">
          <div style={{ maxWidth: "820px" }}>
            <span className="kick">
              Solutions
            </span>
            <h2 className="h2" id="sol-h">
              Every account, from first signal to first meeting.
            </h2>
            <p className="lead">
              Five connected workflows, each with the evidence attached.
            </p>
          </div>
          <SolutionCards />
        </div>
      </section>
      <section className="sec dk" aria-labelledby="rh-h">
        <div className="w">
          <div className="rh-intro">
            <div>
              <span className="kick">
                Role hypothesis
              </span>
              <h2 className="h2" id="rh-h">
                Know what each person is likely to care about, before you call.
              </h2>
              <p className="lead">
                For any contact, Insyder writes a meeting-ready brief from public sources, the account research and your meeting notes.
              </p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "28px" }}>
                <Link className="btn b-hi" href="/contact-profiling">
                  See a full example
                </Link>
                <Link className="btn b-ln" href="/contact-profiling">
                  Contact profiling
                </Link>
              </div>
            </div>
            <ul className="facts" aria-label="Role hypothesis at a glance">
              <li>
                <span>
                  Built from
                </span>
                <span>
                  Public sources, account research, your notes
                </span>
              </li>
              <li>
                <span>
                  Time
                </span>
                <span>
                  A few minutes
                </span>
              </li>
              <li>
                <span>
                  Cost
                </span>
                <span>
                  2 research units
                </span>
              </li>
              <li>
                <span>
                  Output
                </span>
                <span>
                  10 sections, sources, PDF export
                </span>
              </li>
              <li>
                <span>
                  Status
                </span>
                <span>
                  A working hypothesis, never verified fact
                </span>
              </li>
            </ul>
          </div>
          <div className="doc" role="img" aria-label="Excerpt from a sample role hypothesis for a fictional contact, Helen Marsh">
            <div aria-hidden="true">
              <div className="doc-top">
                <div>
                  <span className="kick">
                    Contact role hypothesis · sample
                  </span>
                  <h3>
                    {"Helen Marsh, "}
                    <span>
                      Northbridge Manufacturing
                    </span>
                  </h3>
                  <p className="sub">
                    Head of IT Infrastructure · Decision maker
                  </p>
                </div>
                <div className="doc-acts">
                  <span className="mb g">
                    Regenerate
                  </span>
                  <span className="mb">
                    Export PDF
                  </span>
                </div>
              </div>
              <div className="rh-sample-scroll">
                <div className="rh-sample-grid">
                  <div className="sec-view" style={{ borderRight: "1px solid #DCD5C6" }}>
                    <div className="blk">
                      <span className="lab">
                        Opening approach
                      </span>
                      <p>
                        “I saw the Kestrel Park announcement. Which part of getting the site ready is taking most of your attention?”
                      </p>
                    </div>
                  </div>
                  <div className="sec-view" style={{ borderRight: "1px solid #DCD5C6" }}>
                    <div className="blk">
                      <span className="lab">
                        Lead with
                      </span>
                      <p>
                        A site network and backup design review.
                      </p>
                    </div>
                    <div className="blk avoid">
                      <span className="lab">
                        Hold back
                      </span>
                      <ul>
                        <li>
                          A full hardware refresh proposal
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="sec-view">
                    <div className="blk leave">
                      <span className="lab">
                        The question to leave them with
                      </span>
                      <p>
                        “What has to be true on opening day for you to be confident the site will run?”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mid" aria-label="Book a demo">
        <div className="w">
          <div className="mid-in">
            <h2>
              See Insyder on accounts like the ones your team sells to.
            </h2>
            <div className="row">
              <Link className="btn b-ink" href="/demo">
                Book a demo
              </Link>
              <Link className="btn b-gh" href="/product">
                Take the product tour
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="sec" aria-labelledby="pl-h" style={{ paddingTop: "24px" }}>
        <div className="w">
          <div style={{ maxWidth: "820px" }}>
            <span className="kick">
              {"Platform & trust"}
            </span>
            <h2 className="h2" id="pl-h">
              Fits your stack. Keeps your data clean.
            </h2>
            <p className="lead">
              Insyder sits alongside your CRM, keeps every claim tied to a source and lets you control who sees what.
            </p>
          </div>
          <div className="trust">
            <div className="tc">
              <h3>
                CRM sync
              </h3>
              <p>
                Send sales-accepted accounts to HubSpot or Salesforce.
              </p>
              <ul>
                <li>
                  Updates records, never duplicates
                </li>
                <li>
                  Opted-out contacts never sent
                </li>
              </ul>
            </div>
            <div className="tc">
              <h3>
                Evidence you can check
              </h3>
              <p>
                Every signal, contact and hypothesis lists its sources.
              </p>
              <ul>
                <li>
                  Dates and last-checked kept
                </li>
                <li>
                  Unverified until a person confirms
                </li>
              </ul>
            </div>
            <div className="tc">
              <h3>
                Access control
              </h3>
              <p>
                Role-based access for every part of the team.
              </p>
              <ul>
                <li>
                  Separate workspaces per team or client
                </li>
                <li>
                  Partners see permitted fields only
                </li>
              </ul>
            </div>
            <div className="tc">
              <h3>
                Usage you control
              </h3>
              <p>
                Research runs on units from your workspace quota.
              </p>
              <ul>
                <li>
                  Review searches before spending
                </li>
                <li>
                  Suppress current clients
                </li>
              </ul>
            </div>
          </div>
          <p style={{ marginTop: "24px" }}>
            <Link href="/about" style={{ color: "#0E6B67", fontWeight: "600" }}>
              More on the platform →
            </Link>
          </p>
        </div>
      </section>
      <GetStarted />
      <section className="sec" aria-labelledby="fq-h" style={{ paddingTop: "0" }}>
        <div className="w fq">
          <div>
            <span className="kick">
              FAQ
            </span>
            <h2 className="h2" id="fq-h">
              Good questions.
            </h2>
          </div>
          <div className="fqd">
            <details>
              <summary>
                What does Insyder do?
              </summary>
              <div className="a">
                <p>
                  It finds companies showing the changes your offer depends on, keeps the evidence behind each one, finds the people who decide and prepares a role hypothesis for each, then hands sales-accepted accounts to your CRM.
                </p>
              </div>
            </details>
            <details>
              <summary>
                Does a signal mean a company is ready to buy?
              </summary>
              <div className="a">
                <p>
                  No. A signal is a reason to ask a good question. Insyder keeps observations, inferences and confirmed answers separate so nobody mistakes one for the other.
                </p>
              </div>
            </details>
            <details>
              <summary>
                Is a role hypothesis a personality profile?
              </summary>
              <div className="a">
                <p>
                  No. It describes a professional role and how it likely works. Every point is a working hypothesis to check in conversation, and it lists what it doesn’t know.
                </p>
              </div>
            </details>
            <details>
              <summary>
                Which CRMs does it work with?
              </summary>
              <div className="a">
                <p>
                  HubSpot and Salesforce. Only sales-accepted accounts are sent, existing records are updated instead of duplicated, and opted-out contacts are never sent.
                </p>
              </div>
            </details>
            <details>
              <summary>
                Is this an outsourced SDR service?
              </summary>
              <div className="a">
                <p>
                  No. Insyder is software your team runs. Your people choose the accounts, judge the evidence and own every decision.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
      <section className="fin dk" aria-labelledby="fin-h">
        <div className="w">
          <h2 id="fin-h">
            {"Every account with a "}
            <em>
              reason
            </em>
            , an owner and a prepared first call.
          </h2>
          <div className="fin-opts">
            <div className="fo">
              <b>
                Book a demo
              </b>
              <p>
                We’ll show Insyder on accounts and roles like the ones your team sells to.
              </p>
              <Link className="btn b-hi" href="/demo">
                Book a demo
              </Link>
            </div>
            <div className="fo">
              <b>
                See a role hypothesis
              </b>
              <p>
                Walk through a sample brief for one contact, section by section.
              </p>
              <Link className="btn b-ln" href="/contact-profiling">
                Open the example
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
