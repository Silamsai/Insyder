import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Insyder — Discover",
  description: "Describe the accounts you want in plain language. Insyder searches the web against your playbook, saves each match with its sources and hands it to a researcher.",
};

export default function DiscoverPage() {
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
            {" / Discover"}
          </p>
          <span className="kick" style={{ display: "block", marginTop: "28px" }}>
            Solutions · Discover
          </span>
          <h1 className="h1" id="pg-h">
            Find companies with a reason to talk, before anyone else does.
          </h1>
          <p className="sub">
            Describe the accounts you want in plain language. Insyder searches the web against your playbook, saves each match with its sources and hands it to a researcher.
          </p>
          <div className="row">
            <Link className="btn b-hi" href="/demo">
              Book a demo
            </Link>
          </div>
          <nav className="anchors" aria-label="On this page">
            <a href="#search">
              Plain-language search
            </a>
            <a href="#types">
              Quick search or list
            </a>
            <a href="#playbooks">
              Playbooks
            </a>
            <a href="#assign">
              {"Choose & assign"}
            </a>
          </nav>
        </div>
      </section>
      <section aria-label="Discover in detail">
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
          <div className="frow" id="search">
            <div className="ftxt">
              <span className="kick">
                Plain-language search
              </span>
              <h2>
                Say who, where and what they’re doing.
              </h2>
              <p className="lead">
                No boolean strings or filter trees. Describe the companies you want, and be specific: who they are, where they are and what is changing.
              </p>
              <ul className="checks">
                <li>
                  “UK universities upgrading data centres in the last 90 days”
                </li>
                <li>
                  Mention a city or region in the description to narrow it
                </li>
                <li>
                  Set countries, industries and how many results you want
                </li>
                <li>
                  Every result is saved as an account with its sources
                </li>
              </ul>
            </div>
            <div>
              <div className="pnl" role="img" aria-label="Describe the companies, sample data">
                <div aria-hidden="true">
                  <div className="pnl-h">
                    <b>
                      Describe the companies
                    </b>
                    <span className="tag" style={{ margin: "0" }}>
                      Sample data
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      What kind of companies?
                      <small>
                        UK manufacturers expanding production sites
                      </small>
                    </div>
                    <span>
                      <span className="bd">
                        Required
                      </span>
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Countries
                      <small>
                        United Kingdom
                      </small>
                    </div>
                    <span>
                      <span className="bd">
                        Set
                      </span>
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Industries
                      <small>
                        Manufacturing
                      </small>
                    </div>
                    <span>
                      <span className="bd">
                        Recommended
                      </span>
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Results
                      <small>
                        10 · 1 result = 1 research unit
                      </small>
                    </div>
                    <span>
                      <span className="bd">
                        10
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frow rev" id="types">
            <div className="ftxt">
              <span className="kick">
                Search type
              </span>
              <h2>
                Seconds for a scan, minutes for a checked list.
              </h2>
              <p className="lead">
                Choose the depth that fits the job: a quick look at recent news, or a list where every company is checked against your signals.
              </p>
              <ul className="checks">
                <li>
                  Quick search: recent articles about companies with a buying signal, up to 10 results
                </li>
                <li>
                  Build a list: up to 25 companies, each checked against your signals, with sources
                </li>
                <li>
                  Run history keeps every past search
                </li>
              </ul>
            </div>
            <div>
              <div className="pnl" role="img" aria-label="Search type, sample data">
                <div aria-hidden="true">
                  <div className="pnl-h">
                    <b>
                      Search type
                    </b>
                    <span className="tag" style={{ margin: "0" }}>
                      Sample data
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Quick search
                      <small>
                        Takes seconds · up to 10 results
                      </small>
                    </div>
                    <span>
                      <span className="bd t">
                        Selected
                      </span>
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Build a list
                      <small>
                        Takes a few minutes · up to 25 companies
                      </small>
                    </div>
                    <span>
                      <span className="bd">
                        Option
                      </span>
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      History
                      <small>
                        8 previous searches
                      </small>
                    </div>
                    <span>
                      <span className="bd">
                        8
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frow" id="playbooks">
            <div className="ftxt">
              <span className="kick">
                Playbooks
              </span>
              <h2>
                Your signals, bundled and reusable.
              </h2>
              <p className="lead">
                A playbook says which changes make an account relevant to your offer. Use it for searches now and monitors later.
              </p>
              <ul className="checks">
                <li>
                  Expansion, infrastructure hiring, hardware refresh, compute and procurement signals
                </li>
                <li>
                  One playbook per offer or campaign
                </li>
                <li>
                  Accounts are grouped by playbook across Insyder
                </li>
                <li>
                  Or search with no playbook for open company research
                </li>
              </ul>
            </div>
            <div>
              <div className="pnl" role="img" aria-label="Playbooks, sample data">
                <div aria-hidden="true">
                  <div className="pnl-h">
                    <b>
                      Playbooks
                    </b>
                    <span className="tag" style={{ margin: "0" }}>
                      Sample data
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Infrastructure expansion
                      <small>
                        Expansion · infra hiring · refresh · compute · procurement
                      </small>
                    </div>
                    <span>
                      <span className="bd">
                        6 accounts
                      </span>
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Hiring demand
                      <small>
                        Infrastructure roles at growing sites
                      </small>
                    </div>
                    <span>
                      <span className="bd">
                        4 accounts
                      </span>
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Multi-site IT support
                      <small>
                        Refresh and procurement signals
                      </small>
                    </div>
                    <span>
                      <span className="bd">
                        3 accounts
                      </span>
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Public tenders
                      <small>
                        New procurement notices
                      </small>
                    </div>
                    <span>
                      <span className="bd">
                        2 accounts
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frow rev" id="assign">
            <div className="ftxt">
              <span className="kick">
                {"Choose & assign"}
              </span>
              <h2>
                Pick the best leads and hand them over.
              </h2>
              <p className="lead">
                A four-step flow takes you from search to assigned work: find leads, choose the ones worth researching, assign a researcher, done.
              </p>
              <ul className="checks">
                <li>
                  Review the search before any research units are spent
                </li>
                <li>
                  Select the leads worth a researcher’s time
                </li>
                <li>
                  Each assignment creates a research task
                </li>
                <li>
                  Accounts appear in the watchlist straight away
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
                      1 · Find leads
                      <small>
                        Search reviewed and run
                      </small>
                    </div>
                    <span>
                      <span className="bd t">
                        Done
                      </span>
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      2 · Choose leads
                      <small>
                        4 of 10 selected
                      </small>
                    </div>
                    <span>
                      <span className="bd i">
                        Current
                      </span>
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      3 · Assign researcher
                      <small>
                        Tom Reed
                      </small>
                    </div>
                    <span>
                      <span className="bd">
                        Next
                      </span>
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      4 · Done
                      <small>
                        Research tasks created
                      </small>
                    </div>
                    <span>
                      <span className="bd">
                        —
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
            From a sentence to an assigned lead in four steps.
          </h2>
          <div className="steps3">
            <div>
              <span>
                01
              </span>
              <b>
                Describe
              </b>
              <p>
                Write who you’re looking for and pick a playbook.
              </p>
            </div>
            <div>
              <span>
                02
              </span>
              <b>
                Review
              </b>
              <p>
                Check the search before research units are spent.
              </p>
            </div>
            <div>
              <span>
                03
              </span>
              <b>
                Choose
              </b>
              <p>
                Select the leads worth researching from the results.
              </p>
            </div>
            <div>
              <span>
                04
              </span>
              <b>
                Assign
              </b>
              <p>
                Hand them to a researcher, with a task for each.
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
              Questions about Discover.
            </h2>
          </div>
          <div className="fqd">
            <details>
              <summary>
                What does a search cost?
              </summary>
              <div className="a">
                <p>
                  Each result uses one research unit from your workspace quota. You review the search before anything is spent.
                </p>
              </div>
            </details>
            <details>
              <summary>
                Where do the results come from?
              </summary>
              <div className="a">
                <p>
                  Insyder searches the open web, including news, registries, tenders and job ads, and saves each result with links to its sources.
                </p>
              </div>
            </details>
            <details>
              <summary>
                Can I search without a playbook?
              </summary>
              <div className="a">
                <p>
                  Yes. Open company and contact search works without one, though playbooks keep results focused on the signals that matter to your offer.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
      <nav className="w related" aria-label="More solutions">
        <Link href="/solutions">
          <span>
            ← All solutions
          </span>
          <b>
            Solutions overview
          </b>
        </Link>
        <Link className="nx" href="/monitor">
          <span>
            Next →
          </span>
          <b>
            Monitor
          </b>
        </Link>
      </nav>
      <section className="cta-band dk" aria-labelledby="cta-h">
        <div className="w">
          <h2 id="cta-h">
            Find your next accounts with a reason to talk.
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
