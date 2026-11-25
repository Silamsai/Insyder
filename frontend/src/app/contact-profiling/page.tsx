import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnchorLink from "@/components/AnchorLink";
import HowItWorks from "@/components/HowItWorks";

export const metadata: Metadata = {
  title: "Insyder — Contact profiling",
  description: "Find the IT and technology decision makers at an account, each with a source. Then prepare for every conversation with a role hypothesis.",
};

export default function ContactProfilingPage() {
  return (
    <>
      <section className="pg-hero dk" aria-labelledby="pg-h">
        <div className="w">

          <span className="kick" style={{ display: "block", marginTop: "28px" }}>
          Contact profiling
          </span>
          <h1 className="h1" id="pg-h">
            Know who decides, and what to say to each of them.
          </h1>
          <p className="sub">
            Find the IT and technology decision makers at an account, each with a source. Then prepare for every conversation with a role hypothesis.
          </p>
          <div className="row">
            <Link className="btn b-hi" href="/demo">
              Book a demo
            </Link>
          </div>
          <nav className="anchors" aria-label="On this page">
            <AnchorLink to="find">
              Find decision makers
            </AnchorLink>
            <AnchorLink to="roles">
              Roles to find
            </AnchorLink>
            <AnchorLink to="hypothesis">
              Role hypothesis
            </AnchorLink>
            <AnchorLink to="notes">
              Meeting notes
            </AnchorLink>
          </nav>
        </div>
      </section>
      <section aria-label="Contact profiling in detail">
        <div className="w">
          <div className="frow" id="find">
            <div className="ftxt">
              <span className="kick">
                Find decision makers
              </span>
              <h2>
                The people who own the decision, with sources.
              </h2>
              <p className="lead">
                Insyder searches the web for IT and technology decision makers at an account, with work emails where it finds them. Every contact shows where it was found.
              </p>
              <ul className="checks">
                <li>
                  Name, title and work email where available
                </li>
                <li>
                  The source and public profile behind each contact
                </li>
                <li>
                  Marked unverified until someone on your team checks
                </li>
                <li>
                  One research unit per search
                </li>
              </ul>
            </div>
            <div>
              <div className="pnl" style={{ padding: "0", overflow: "hidden", background: "transparent", border: "0", boxShadow: "0 24px 60px -20px rgba(13,27,42,.15)" }}>
                <Image
                  src="/decision-makers.jpeg"
                  alt="Key decision makers (3 sourced): Jody Cushman, Kathleen Young, Branwen Cale with linked sources, email drafts, and LinkedIn notes."
                  width={1609}
                  height={977}
                  sizes="(max-width: 980px) 100vw, 560px"
                  style={{ display: "block", width: "100%", height: "auto", borderRadius: "14px" }}
                />
              </div>
            </div>
          </div>
          <div className="frow rev" id="roles">
            <div className="ftxt">
              <span className="kick">
                Roles to find
              </span>
              <h2>
                Track the roles that matter, even before you know the person.
              </h2>
              <p className="lead">
                If a role matters but nobody fills it yet, add it. Your team can see the gap and close it later.
              </p>
              <ul className="checks">
                <li>
                  Add roles such as site project manager or procurement lead
                </li>
                <li>
                  See open roles beside your contacts
                </li>
                <li>
                  Add a contact by hand when you meet someone
                </li>
              </ul>
            </div>
            <div>
              <div className="pnl" style={{ padding: "0", overflow: "hidden", background: "transparent", border: "0", boxShadow: "0 24px 60px -20px rgba(13,27,42,.15)" }}>
                <Image
                  src="/roles-to-find.png"
                  alt="Roles to find and key decision makers"
                  width={1498}
                  height={1050}
                  sizes="(max-width: 980px) 100vw, 560px"
                  style={{ display: "block", width: "100%", height: "auto", borderRadius: "14px" }}
                />
              </div>
            </div>
          </div>
          <div className="frow" id="hypothesis">
            <div className="ftxt">
              <span className="kick">
                Role hypothesis
              </span>
              <h2>
                A meeting-ready brief for each person.
              </h2>
              <p className="lead">
                For any contact, Insyder writes ten sections: what they likely control, their world right now, how to open, what to ask, objections and what you don’t know yet.
              </p>
              <ul className="checks">
                <li>
                  Built from public sources, the account research and your notes
                </li>
                <li>
                  A few minutes and 2 research units per contact
                </li>
                <li>
                  Sources listed, PDF export
                </li>
                <li>
                  A working hypothesis, never presented as fact
                </li>
              </ul>
            </div>
            <div>
              <div className="pnl" style={{ padding: "0", overflow: "hidden", background: "transparent", border: "0", boxShadow: "0 24px 60px -20px rgba(13,27,42,.15)" }}>
                <Image
                  src="/role-hypothesis.jpeg"
                  alt="Contact Role Hypothesis for Gavin Lyngdoh"
                  width={1600}
                  height={733}
                  sizes="(max-width: 980px) 100vw, 560px"
                  style={{ display: "block", width: "100%", height: "auto", borderRadius: "14px" }}
                />
              </div>
            </div>
          </div>
          <div className="frow rev" id="notes">
            <div className="ftxt">
              <span className="kick">
                Meeting notes
              </span>
              <h2>
                Sharper with what you already know.
              </h2>
              <p className="lead">
                Booked a meeting? Add a note about it and regenerate. The context, opening and questions update to match.
              </p>
              <ul className="checks">
                <li>
                  Add a meeting note before or after running
                </li>
                <li>
                  Regenerate for a version that reflects it
                </li>
                <li>
                  Unknowns shrink as you learn more
                </li>
              </ul>
            </div>
            <div>
              <div className="pnl" style={{
                padding: "0",
                overflow: "hidden",
                background: "transparent",
                border: "0",
                boxShadow: "0 24px 60px -20px rgba(13,27,42,.15)",
                maxWidth: "320px",
                margin: "0 auto"
              }}>
                <Image
                  src="/meeting-note.png"
                  alt="Tell us about the meeting form for role hypothesis"
                  width={767}
                  height={989}
                  sizes="(max-width: 980px) 100vw, 320px"
                  style={{ display: "block", width: "100%", height: "auto", borderRadius: "14px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <HowItWorks
        title="From an account to a prepared call."
        lead="Four steps take you from a company name to a conversation you are ready for."
        steps={[
          { title: "Find people", text: "Search for decision makers on the account.", icon: "find" },
          { title: "Check them", text: "Confirm who they are before relying on them.", icon: "check" },
          { title: "Run a hypothesis", text: "Get a ten-section brief for each contact.", icon: "idea" },
          { title: "Prepare", text: "Add a meeting note, regenerate and export.", icon: "prep" },
        ]}
      />
      <section className="sec" aria-labelledby="fq-h">
        <div className="w fq">
          <div>
            <span className="kick">
              FAQ
            </span>
            <h2 className="h2" id="fq-h">
              Questions about Contact profiling.
            </h2>
          </div>
          <div className="fqd">
            <details>
              <summary>
                Are contacts verified?
              </summary>
              <div className="a">
                <p>
                  No. Each comes with the source it was found in and stays marked unverified until someone checks.
                </p>
              </div>
            </details>
            <details>
              <summary>
                Is a role hypothesis a personality profile?
              </summary>
              <div className="a">
                <p>
                  No. It describes a professional role and how it likely works, as hypotheses to check in conversation.
                </p>
              </div>
            </details>
            <details>
              <summary>
                What does it cost?
              </summary>
              <div className="a">
                <p>
                  A contact search uses 1 research unit. A role hypothesis uses 2 per contact.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
      <nav className="w related" aria-label="More solutions">
        <Link href="/accounts">
          <span>
            ← Previous
          </span>
          <b>
            Accounts
          </b>
        </Link>
        <Link className="nx" href="/outreach">
          <span>
            Next →
          </span>
          <b>
            Outreach
          </b>
        </Link>
      </nav>
      <section className="cta-band dk" aria-labelledby="cta-h">
        <div className="w">
          <h2 id="cta-h">
            Walk into every first meeting prepared.
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
