import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HowItWorks from "@/components/HowItWorks";

export const metadata: Metadata = {
  title: "Insyder — Discover",
  description: "Describe the accounts you want in plain language. Insyder searches the web against your playbook, saves each match with its sources and hands it to a researcher.",
};

export default function DiscoverPage() {
  return (
    <>
      <section className="pg-hero dk" aria-labelledby="pg-h">
        <div className="w">
        
          <span className="kick" style={{ display: "block", marginTop: "28px" }}>
            Discover
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
              <div className="pnl" style={{ padding: "0", overflow: "hidden", background: "transparent", border: "0", boxShadow: "0 24px 60px -20px rgba(13,27,42,.15)" }}>
                <Image
                  src="/describe-companies.png"
                  alt="Describe the companies you're looking for: search type, playbook, criteria, countries"
                  width={1002}
                  height={676}
                  sizes="(max-width: 980px) 100vw, 560px"
                  style={{ display: "block", width: "100%", height: "auto", borderRadius: "14px" }}
                />
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
              <div className="pnl" style={{ padding: "0", overflow: "hidden", background: "transparent", border: "0", boxShadow: "0 24px 60px -20px rgba(13,27,42,.15)" }}>
                <Image
                  src="/playbooks.png"
                  alt="Signal playbooks: Infrastructure expansion, Hiring demand, Multi-site IT support"
                  width={1002}
                  height={502}
                  sizes="(max-width: 980px) 100vw, 560px"
                  style={{ display: "block", width: "100%", height: "auto", borderRadius: "14px" }}
                />
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
              <div className="pnl" style={{ padding: "0", overflow: "hidden", background: "transparent", border: "0", boxShadow: "0 24px 60px -20px rgba(13,27,42,.15)" }}>
                <Image
                  src="/find-and-assign.png"
                  alt="Find & assign step-by-step workflow: Find leads, Choose leads, Assign researcher, Done"
                  width={1402}
                  height={718}
                  sizes="(max-width: 980px) 100vw, 560px"
                  style={{ display: "block", width: "100%", height: "auto", borderRadius: "14px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <HowItWorks
        title="From a sentence to an assigned lead in four steps."
        steps={[
          { title: "Describe", text: "Write who you’re looking for and pick a playbook.", icon: "describe" },
          { title: "Review", text: "Check the search before research units are spent.", icon: "review" },
          { title: "Choose", text: "Select the leads worth researching from the results.", icon: "choose" },
          { title: "Assign", text: "Hand them to a researcher, with a task for each.", icon: "assign" },
        ]}
      />
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
