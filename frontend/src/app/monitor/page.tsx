import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import Image from "next/image";

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
          <p className="crumb">
            <Link href="/">
              Home
            </Link>
            {" / "}
            <Link href="/solutions">
              Solutions
            </Link>
            {" / Monitor"}
          </p>
          <span className="kick" style={{ display: "block", marginTop: "28px" }}>
            Solutions · Monitor
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
            <div className="ftxt">
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
            <div>
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
            <div className="ftxt">
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
            <div>
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
            <div className="ftxt">
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
            <div>
              <div className="pnl" role="img" aria-label="Signals detected, sample data">
                <div aria-hidden="true">
                  <div className="pnl-h">
                    <b>
                      Signals detected
                    </b>
                    <span className="tag" style={{ margin: "0" }}>
                      Sample data
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Server refresh tender · Fenmoor College
                      <small>
                        Hardware refresh · discovered 16 Nov
                      </small>
                    </div>
                    <span>
                      <span className="bd r">
                        Material change
                      </span>
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Reliability engineer role · Kestrel Data Services
                      <small>
                        Infrastructure hiring · discovered 16 Nov
                      </small>
                    </div>
                    <span>
                      <span className="bd r">
                        Material change
                      </span>
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      New depot approved · Halden Cold Chain
                      <small>
                        Expansion · discovered 14 Nov
                      </small>
                    </div>
                    <span>
                      <span className="bd r">
                        Material change
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frow rev" id="feed">
            <div className="ftxt">
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
            <div>
              <div className="pnl" role="img" aria-label="Signal activity log, sample data">
                <div aria-hidden="true">
                  <div className="pnl-h">
                    <b>
                      Signal activity log
                    </b>
                    <span className="tag" style={{ margin: "0" }}>
                      Sample data
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Northbridge Manufacturing
                      <small>
                        IT vacancy names the new site
                      </small>
                    </div>
                    <span>
                      <span className="bd r">
                        Material change
                      </span>
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Arkwright Components
                      <small>
                        Infrastructure engineer role
                      </small>
                    </div>
                    <span>
                      <span className="bd r">
                        Material change
                      </span>
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Monitored changes
                      <small>
                        Last 30 days
                      </small>
                    </div>
                    <span>
                      <b>
                        18
                      </b>
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
            Set it once, then let it run.
          </h2>
          <div className="steps3">
            <div>
              <span>
                01
              </span>
              <b>
                Pick a playbook
              </b>
              <p>
                Choose the signals and territory to watch.
              </p>
            </div>
            <div>
              <span>
                02
              </span>
              <b>
                Set the cadence
              </b>
              <p>
                Daily, weekly or monthly, within your quota.
              </p>
            </div>
            <div>
              <span>
                03
              </span>
              <b>
                Review signals
              </b>
              <p>
                Filter what was found by type, monitor or account.
              </p>
            </div>
            <div>
              <span>
                04
              </span>
              <b>
                Act on changes
              </b>
              <p>
                Material changes flow into the account feed.
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
              Questions about Monitor.
            </h2>
          </div>
          <div className="fqd">
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
      <nav className="w related" aria-label="More solutions">
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
        <div className="w">
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
