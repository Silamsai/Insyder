import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import type { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import HowItWorks from "@/components/HowItWorks";

export const metadata: Metadata = pageMeta({
  path: "/discover",
  title: "Insyder — Discover",
  description: "Describe the accounts you want in plain language. Insyder searches the web against your playbook, saves each match with its sources and hands it to a researcher.",
});

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
            <div className="frame-wrap" data-reveal>
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
            <div className="ftxt" data-reveal>
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
            <div data-reveal style={{ "--rd": "120ms" } as CSSProperties}>
              <div className="pnl" style={{ padding: "0", overflow: "hidden", background: "transparent", border: "0", boxShadow: "0 24px 60px -20px rgba(13,27,42,.15)" }}>
                <Image
                  src="/describe-companies.png"
                  alt="Describe the companies you're looking for: search type, playbook, criteria, countries"
                  width={2004}
                  height={1396}
                  sizes="(max-width: 980px) 100vw, 560px"
                  style={{ display: "block", width: "100%", height: "auto", borderRadius: "14px" }}
                />
              </div>
            </div>
          </div>
          <div className="frow rev" id="types">
            <div className="ftxt" data-reveal>
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
            <div data-reveal style={{ "--rd": "120ms" } as CSSProperties}>
              <div style={{
                background: "#ffffff",
                border: "1px solid #E2E8F0",
                borderRadius: "14px",
                padding: "22px 24px 20px",
                boxShadow: "0 24px 60px -20px rgba(13,27,42,.12)",
                maxWidth: "460px",
                margin: "0 auto",
                fontFamily: "var(--font-schibsted), sans-serif"
              }}>
                {/* Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: "700", fontSize: "14.5px", color: "#0D1B2A" }}>
                    <span style={{ display: "inline-block", width: "7px", height: "7px", borderRadius: "50%", background: "#0D1B2A" }}></span>
                    Search type
                  </div>
                  <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "10.5px", fontWeight: "700", color: "#0E6B67", letterSpacing: "0.06em" }}>
                    STEP 1 OF 4
                  </span>
                </div>

                {/* Option 1: Quick search (Active) */}
                <div style={{
                  border: "1.5px solid #0E6B67",
                  background: "#F2FBF9",
                  borderRadius: "10px",
                  padding: "14px 16px",
                  marginBottom: "10px",
                  position: "relative"
                }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "5px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        border: "4px solid #0E6B67",
                        background: "#ffffff",
                        boxSizing: "border-box"
                      }} />
                      <span style={{ fontWeight: "700", fontSize: "14px", color: "#0D1B2A" }}>
                        Quick search
                      </span>
                    </div>
                    <span style={{
                      background: "#0E6B67",
                      color: "#ffffff",
                      fontSize: "9.5px",
                      fontWeight: "700",
                      fontFamily: "var(--font-geist-mono), monospace",
                      padding: "2px 7px",
                      borderRadius: "4px",
                      letterSpacing: "0.04em"
                    }}>
                      ACTIVE
                    </span>
                  </div>
                  <p style={{ fontSize: "12.5px", color: "#4A5568", margin: "0 0 10px 26px", lineHeight: "1.4" }}>
                    Finds recent articles about companies with a buying signal. Takes seconds, up to 10 results.
                  </p>
                  <div style={{ display: "flex", gap: "6px", marginLeft: "26px", flexWrap: "wrap" }}>
                    <span style={{ background: "#ffffff", border: "1px solid #D1EAE5", color: "#0E6B67", fontSize: "11px", fontWeight: "600", padding: "2px 8px", borderRadius: "4px" }}>
                      ⚡ Takes seconds
                    </span>
                    <span style={{ background: "#ffffff", border: "1px solid #D1EAE5", color: "#0E6B67", fontSize: "11px", fontWeight: "600", padding: "2px 8px", borderRadius: "4px" }}>
                      Up to 10 results
                    </span>
                    <span style={{ background: "#ffffff", border: "1px solid #D1EAE5", color: "#0E6B67", fontSize: "11px", fontWeight: "600", padding: "2px 8px", borderRadius: "4px" }}>
                      1 research unit
                    </span>
                  </div>
                </div>

                {/* Option 2: Build a list */}
                <div style={{
                  border: "1px solid #E2E8F0",
                  background: "#ffffff",
                  borderRadius: "10px",
                  padding: "14px 16px",
                  marginBottom: "16px"
                }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "5px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        border: "1.5px solid #CBD5E1",
                        background: "#ffffff",
                        boxSizing: "border-box"
                      }} />
                      <span style={{ fontWeight: "700", fontSize: "14px", color: "#0D1B2A" }}>
                        Build a list
                      </span>
                    </div>
                    <span style={{
                      background: "#F1F5F9",
                      color: "#64748B",
                      fontSize: "9.5px",
                      fontWeight: "700",
                      fontFamily: "var(--font-geist-mono), monospace",
                      padding: "2px 7px",
                      borderRadius: "4px",
                      letterSpacing: "0.04em"
                    }}>
                      DEEP CHECK
                    </span>
                  </div>
                  <p style={{ fontSize: "12.5px", color: "#4A5568", margin: "0 0 10px 26px", lineHeight: "1.4" }}>
                    Builds a list of companies and checks each one against your signals, with sources. Takes a few minutes.
                  </p>
                  <div style={{ display: "flex", gap: "6px", marginLeft: "26px", flexWrap: "wrap" }}>
                    <span style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", color: "#64748B", fontSize: "11px", fontWeight: "600", padding: "2px 8px", borderRadius: "4px" }}>
                      ⏱ 3–5 minutes
                    </span>
                    <span style={{ background: "#F8FAFC", border: "1px solid #E2E8F0", color: "#64748B", fontSize: "11px", fontWeight: "600", padding: "2px 8px", borderRadius: "4px" }}>
                      Up to 25 companies
                    </span>
                  </div>
                </div>

                {/* History Section */}
                <div style={{ borderTop: "1px solid #F1F5F9", paddingTop: "14px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                    <span style={{ fontSize: "11px", fontWeight: "700", fontFamily: "var(--font-geist-mono), monospace", color: "#64748B", letterSpacing: "0.05em" }}>
                      RECENT SEARCH HISTORY
                    </span>
                    <span style={{ fontSize: "11px", color: "#0E6B67", fontWeight: "600" }}>
                      8 searches saved
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "12px", background: "#F8FAFC", padding: "8px 12px", borderRadius: "6px" }}>
                      <div>
                        <span style={{ fontWeight: "600", color: "#0D1B2A" }}>UK universities data centres</span>
                        <span style={{ display: "block", fontSize: "11px", color: "#64748B" }}>10 leads · 2 hours ago</span>
                      </div>
                      <span style={{ fontSize: "10px", fontWeight: "600", background: "#E6F5F3", color: "#0E6B67", padding: "2px 6px", borderRadius: "4px" }}>Quick</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "12px", background: "#F8FAFC", padding: "8px 12px", borderRadius: "6px" }}>
                      <div>
                        <span style={{ fontWeight: "600", color: "#0D1B2A" }}>Healthcare facility EHR migration</span>
                        <span style={{ display: "block", fontSize: "11px", color: "#64748B" }}>24 leads · Yesterday</span>
                      </div>
                      <span style={{ fontSize: "10px", fontWeight: "600", background: "#F1F5F9", color: "#475569", padding: "2px 6px", borderRadius: "4px" }}>List</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frow" id="playbooks">
            <div className="ftxt" data-reveal>
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
            <div data-reveal style={{ "--rd": "120ms" } as CSSProperties}>
              <div className="pnl" style={{ padding: "0", overflow: "hidden", background: "transparent", border: "0", boxShadow: "0 24px 60px -20px rgba(13,27,42,.15)" }}>
                <Image
                  src="/playbooks.png"
                  alt="Signal playbooks: Infrastructure expansion, Hiring demand, Multi-site IT support"
                  width={2004}
                  height={1032}
                  sizes="(max-width: 980px) 100vw, 560px"
                  style={{ display: "block", width: "100%", height: "auto", borderRadius: "14px" }}
                />
              </div>
            </div>
          </div>
          <div className="frow rev" id="assign">
            <div className="ftxt" data-reveal>
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
            <div data-reveal style={{ "--rd": "120ms" } as CSSProperties}>
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
          <div data-reveal>
            <span className="kick">
              FAQ
            </span>
            <h2 className="h2" id="fq-h">
              Questions about Discover.
            </h2>
          </div>
          <div className="fqd" data-reveal style={{ "--rd": "100ms" } as CSSProperties}>
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
      <nav className="w related" data-reveal aria-label="More solutions">
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
        <div className="w" data-reveal>
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
