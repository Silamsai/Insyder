import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import type { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import HowItWorks from "@/components/HowItWorks";

export const metadata: Metadata = pageMeta({
  path: "/monitor",
  title: "Insyder — Monitor",
  description: "Monitors are saved playbooks that re-run research on the schedule you choose, within your research quota, and log every new signal they find.",
});

export default function MonitorPage() {
  return (
    <>
      <section className="pg-hero dk" aria-labelledby="pg-h">
        <div className="w">

          <span className="kick" style={{ display: "block", marginTop: "28px" }}>
          Monitor
          </span>
          <h1 className="h1" id="pg-h">
            Keep watching your market, without anyone watching it.
          </h1>
          <p className="sub">
            Monitors are saved playbooks that re-run research on the schedule you choose, within your research quota, and log every new signal they find.
          </p>
          <div className="row">
            <Link className="btn b-hi" href="/demo">
              Book a demo
            </Link>
          </div>
          <nav className="anchors" aria-label="On this page">
            <a href="#recipes">
              Saved recipes
            </a>
            <a href="#cadence">
              Cadence
            </a>
            <a href="#signals">
              Signals detected
            </a>
            <a href="#feed">
              Into the account feed
            </a>
          </nav>
        </div>
      </section>
      <section aria-label="Monitor in detail">
        <div className="w">
          <div className="frow" id="recipes">
            <div className="ftxt" data-reveal>
              <span className="kick">
                Saved recipes
              </span>
              <h2>
                Turn a playbook into a standing search.
              </h2>
              <p className="lead">
                A monitor keeps your targeting: territory, time window and the signals that matter. It runs again and again so your team doesn’t have to.
              </p>
              <ul className="checks">
                <li>
                  Built from any playbook
                </li>
                <li>
                  Territory and event window, such as the last 90 days
                </li>
                <li>
                  Watch the whole market or only your target accounts
                </li>
                <li>
                  Add or remove monitors at any time
                </li>
              </ul>
            </div>
            <div data-reveal style={{ "--rd": "120ms" } as CSSProperties}>
              <div className="pnl" style={{ padding: "0", overflow: "hidden", background: "transparent", border: "0", boxShadow: "0 24px 60px -20px rgba(13,27,42,.15)" }}>
                <Image
                  src="/signal-monitors.jpeg"
                  alt="Signal monitors: Infrastructure expansion, Multi-site IT support, Hiring demand"
                  width={1600}
                  height={799}
                  sizes="(max-width: 980px) 100vw, 560px"
                  style={{ display: "block", width: "100%", height: "auto", borderRadius: "14px" }}
                />
              </div>
            </div>
          </div>
          <div className="frow rev" id="cadence">
            <div className="ftxt" data-reveal>
              <span className="kick">
                Cadence
              </span>
              <h2>
                Daily, weekly or monthly. Or right now.
              </h2>
              <p className="lead">
                Choose how often each monitor checks. Every run stays within your research quota, and you can see when each last ran and last succeeded.
              </p>
              <ul className="checks">
                <li>
                  Set the cadence per monitor
                </li>
                <li>
                  Check now when you need it
                </li>
                <li>
                  Last checked and last successful run on every monitor
                </li>
                <li>
                  Clear notice when the research quota is reached
                </li>
              </ul>
            </div>
            <div data-reveal style={{ "--rd": "120ms" } as CSSProperties}>
              <div className="pnl" style={{ padding: "0", overflow: "hidden", background: "transparent", border: "0", boxShadow: "0 24px 60px -20px rgba(13,27,42,.15)" }}>
                <Image
                  src="/monitor-cadence.jpeg"
                  alt="Monitor cadence configuration and schedule status"
                  width={1600}
                  height={817}
                  sizes="(max-width: 980px) 100vw, 560px"
                  style={{ display: "block", width: "100%", height: "auto", borderRadius: "14px" }}
                />
              </div>
            </div>
          </div>
          <div className="frow" id="signals">
            <div className="ftxt" data-reveal>
              <span className="kick">
                Signals detected
              </span>
              <h2>
                Every new change, in one list.
              </h2>
              <p className="lead">
                Each detected signal shows its type, when it was found, which monitor found it and the source behind it.
              </p>
              <ul className="checks">
                <li>
                  Filter by signal type: refresh, hiring, compute, expansion, tender
                </li>
                <li>
                  Filter by monitor or by account
                </li>
                <li>
                  Show target watchlist accounts or newly discovered leads
                </li>
                <li>
                  Open the source behind every signal
                </li>
              </ul>
            </div>
            <div data-reveal style={{ "--rd": "120ms" } as CSSProperties}>
              <div className="pnl" style={{ padding: "0", overflow: "hidden", background: "transparent", border: "0", boxShadow: "0 24px 60px -20px rgba(13,27,42,.15)" }}>
                <Image
                  src="/signals-detected.jpeg"
                  alt="Signals detected list showing hardware refresh, hiring change and expansion signals with discovery dates"
                  width={1600}
                  height={800}
                  sizes="(max-width: 980px) 100vw, 560px"
                  style={{ display: "block", width: "100%", height: "auto", borderRadius: "14px" }}
                />
              </div>
            </div>
          </div>
          <div className="frow rev" id="feed">
            <div className="ftxt" data-reveal>
              <span className="kick">
                Into the account feed
              </span>
              <h2>
                Changes land where your team works.
              </h2>
              <p className="lead">
                Material changes appear in the account intelligence feed, next to the account they belong to, so nobody needs to check a separate inbox.
              </p>
              <ul className="checks">
                <li>
                  Signal activity log beside your accounts
                </li>
                <li>
                  New companies saved as discovered leads
                </li>
                <li>
                  Changes on existing accounts flagged for review
                </li>
                <li>
                  Researchers can pick up new work straight away
                </li>
              </ul>
            </div>
            <div data-reveal style={{ "--rd": "120ms" } as CSSProperties}>
              <div style={{
                background: "#ffffff",
                border: "1px solid #E2E8F0",
                borderRadius: "14px",
                padding: "20px 22px 24px",
                boxShadow: "0 24px 60px -20px rgba(13,27,42,.12)",
                maxWidth: "340px",
                margin: "0 auto",
                fontFamily: "var(--font-schibsted), sans-serif"
              }}>
                {/* Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: "700", fontSize: "14.5px", color: "#0D1B2A" }}>
                    <span style={{ display: "inline-block", width: "7px", height: "7px", borderRadius: "50%", background: "#0D1B2A" }}></span>
                    Signal activity log
                  </div>
                  <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "10.5px", fontWeight: "700", color: "#0E6B67", letterSpacing: "0.06em" }}>
                    MONITORS
                  </span>
                </div>

                {/* Timeline item 1 */}
                <div style={{ position: "relative", paddingLeft: "26px", paddingBottom: "20px" }}>
                  {/* Vertical track line */}
                  <div style={{ position: "absolute", left: "9px", top: "18px", bottom: "0", width: "1px", background: "#E2E8F0" }}></div>
                  {/* Icon badge */}
                  <div style={{
                    position: "absolute", left: "0", top: "1px", width: "19px", height: "19px", borderRadius: "50%",
                    background: "#F0FDF4", border: "1px solid #BBF7D0", display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#16A34A"
                  }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"/>
                    </svg>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "8px", marginBottom: "4px" }}>
                    <div style={{ fontSize: "13px", fontWeight: "700", color: "#0D1B2A", lineHeight: "1.3" }}>
                      VP, Enterprise Procurement <span style={{ fontWeight: "400", color: "#4A5568" }}>at Premierinc</span>
                    </div>
                    <span style={{ fontSize: "11px", color: "#718096", whiteSpace: "nowrap", flexShrink: 0 }}>22 hours ago</span>
                  </div>
                  <p style={{ fontSize: "12px", color: "#4A5568", lineHeight: "1.45", margin: "0 0 8px" }}>
                    The Vice President, Enterprise Procurement is responsible for leading and executing a unified procurement strategy across all...
                  </p>
                  <span style={{
                    display: "inline-block", background: "#E6F5F3", color: "#0E6B67", fontSize: "9.5px", fontWeight: "700",
                    fontFamily: "var(--font-geist-mono), monospace", padding: "2.5px 7px", borderRadius: "4px", letterSpacing: "0.04em"
                  }}>
                    MATERIAL CHANGE
                  </span>
                </div>

                {/* Timeline item 2 */}
                <div style={{ position: "relative", paddingLeft: "26px" }}>
                  {/* Icon badge */}
                  <div style={{
                    position: "absolute", left: "0", top: "1px", width: "19px", height: "19px", borderRadius: "50%",
                    background: "#F0FDF4", border: "1px solid #BBF7D0", display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#16A34A"
                  }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"/>
                    </svg>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "8px", marginBottom: "4px" }}>
                    <div style={{ fontSize: "13px", fontWeight: "700", color: "#0D1B2A", lineHeight: "1.3" }}>
                      The Gate and the Wave: Boston&apos;s Three Longwood Megaprojects
                    </div>
                    <span style={{ fontSize: "11px", color: "#718096", whiteSpace: "nowrap", flexShrink: 0 }}>22 hours ago</span>
                  </div>
                  <p style={{ fontSize: "12px", color: "#4A5568", lineHeight: "1.45", margin: "0 0 8px" }}>
                    Spaulding Rehabilitation Hospital in the Charlestown Navy Yard, opened in 2013, set its first floor 30 inches above the 500-year...
                  </p>
                  <span style={{
                    display: "inline-block", background: "#E6F5F3", color: "#0E6B67", fontSize: "9.5px", fontWeight: "700",
                    fontFamily: "var(--font-geist-mono), monospace", padding: "2.5px 7px", borderRadius: "4px", letterSpacing: "0.04em"
                  }}>
                    MATERIAL CHANGE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HowItWorks
        title="Set it once, then let it run."
        steps={[
          { title: "Pick a playbook", text: "Choose the signals and territory to watch.", icon: "playbook" },
          { title: "Set the cadence", text: "Daily, weekly or monthly, within your quota.", icon: "cadence" },
          { title: "Review signals", text: "Filter what was found by type, monitor or account.", icon: "filter" },
          { title: "Act on changes", text: "Material changes flow into the account feed.", icon: "alert" },
        ]}
      />
      <section className="sec" aria-labelledby="fq-h">
        <div className="w fq">
          <div data-reveal>
            <span className="kick">
              FAQ
            </span>
            <h2 className="h2" id="fq-h">
              Questions about Monitor.
            </h2>
          </div>
          <div className="fqd" data-reveal style={{ "--rd": "100ms" } as CSSProperties}>
            <details>
              <summary>
                Do monitors use research units?
              </summary>
              <div className="a">
                <p>
                  Yes. Each run uses units from your workspace quota. Monitors show when the quota has been reached.
                </p>
              </div>
            </details>
            <details>
              <summary>
                Can I monitor only my target accounts?
              </summary>
              <div className="a">
                <p>
                  Yes. You can watch your target watchlist, newly discovered leads, or both.
                </p>
              </div>
            </details>
            <details>
              <summary>
                How do I know a monitor is working?
              </summary>
              <div className="a">
                <p>
                  Each monitor shows when it last checked and when it last succeeded.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
      <nav className="w related" data-reveal aria-label="More solutions">
        <Link href="/discover">
          <span>
            ← Previous
          </span>
          <b>
            Discover
          </b>
        </Link>
        <Link className="nx" href="/accounts">
          <span>
            Next →
          </span>
          <b>
            Accounts
          </b>
        </Link>
      </nav>
      <section className="cta-band dk" aria-labelledby="cta-h">
        <div className="w" data-reveal>
          <h2 id="cta-h">
            Never miss the change that makes an account relevant.
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
