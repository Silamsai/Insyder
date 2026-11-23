import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insyder — Contact profiling",
  description: "Find the IT and technology decision makers at an account, each with a source. Then prepare for every conversation with a role hypothesis.",
};

export default function ContactProfilingPage() {
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
            {" / Contact profiling"}
          </p>
          <span className="kick" style={{ display: "block", marginTop: "28px" }}>
            Solutions · Contact profiling
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
            <a href="#find">
              Find decision makers
            </a>
            <a href="#roles">
              Roles to find
            </a>
            <a href="#hypothesis">
              Role hypothesis
            </a>
            <a href="#notes">
              Meeting notes
            </a>
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
                        Head of IT Infrastructure · source linked
                      </small>
                    </div>
                    <span>
                      <span className="bd a">
                        Unverified
                      </span>
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Owen Clarke
                      <small>
                        Operations Director · source linked
                      </small>
                    </div>
                    <span>
                      <span className="bd a">
                        Unverified
                      </span>
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Ruth Adeyemi
                      <small>
                        Procurement Lead · source linked
                      </small>
                    </div>
                    <span>
                      <span className="bd a">
                        Unverified
                      </span>
                    </span>
                  </div>
                  <p style={{ marginTop: "12px", fontSize: "13px", color: "#566070" }}>
                    Results are unverified: check before use.
                  </p>
                </div>
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
              <div className="pnl" role="img" aria-label="Roles to find, sample data">
                <div aria-hidden="true">
                  <div className="pnl-h">
                    <b>
                      Roles to find
                    </b>
                    <span className="tag" style={{ margin: "0" }}>
                      Sample data
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Site project manager
                      <small>
                        Kestrel Park
                      </small>
                    </div>
                    <span>
                      <span className="bd">
                        Open
                      </span>
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Head of Procurement
                      <small>
                        Found · Ruth Adeyemi
                      </small>
                    </div>
                    <span>
                      <span className="bd t">
                        Filled
                      </span>
                    </span>
                  </div>
                </div>
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
              <div className="pnl" role="img" aria-label="Role hypothesis · Helen Marsh, sample data">
                <div aria-hidden="true">
                  <div className="pnl-h">
                    <b>
                      Role hypothesis · Helen Marsh
                    </b>
                    <span className="tag" style={{ margin: "0" }}>
                      Sample data
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Meeting context
                      <small>
                        Purpose, posture and central tension
                      </small>
                    </div>
                    <span>
                      <span className="bd">
                        01
                      </span>
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      How to run the meeting
                      <small>
                        Opening, questions and the ask
                      </small>
                    </div>
                    <span>
                      <span className="bd">
                        06
                      </span>
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Objections
                      <small>
                        Likely pushback and how to respond
                      </small>
                    </div>
                    <span>
                      <span className="bd">
                        07
                      </span>
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      The question to leave them with
                      <small>
                        What has to be true on opening day…
                      </small>
                    </div>
                    <span>
                      <span className="bd t">
                        09
                      </span>
                    </span>
                  </div>
                  <p style={{ marginTop: "12px", fontSize: "13px", color: "#566070" }}>
                    <Link href="/contact-profiling" style={{ color: "#0E6B67", fontWeight: "600" }}>
                      See the full example →
                    </Link>
                  </p>
                </div>
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
              <div className="pnl" role="img" aria-label="Meeting note, sample data">
                <div aria-hidden="true">
                  <div className="pnl-h">
                    <b>
                      Meeting note
                    </b>
                    <span className="tag" style={{ margin: "0" }}>
                      Sample data
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Call booked
                      <small>
                        4 Dec, via the partner
                      </small>
                    </div>
                    <span>
                      <span className="bd t">
                        Added
                      </span>
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Partner covers
                      <small>
                        Cabling only
                      </small>
                    </div>
                    <span>
                      <span className="bd t">
                        Added
                      </span>
                    </span>
                  </div>
                  <div className="row2">
                    <div>
                      Hypothesis
                      <small>
                        Regenerated with the note
                      </small>
                    </div>
                    <span>
                      <span className="bd i">
                        Sharpened
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
            From an account to a prepared call.
          </h2>
          <div className="steps3">
            <div>
              <span>
                01
              </span>
              <b>
                Find people
              </b>
              <p>
                Search for decision makers on the account.
              </p>
            </div>
            <div>
              <span>
                02
              </span>
              <b>
                Check them
              </b>
              <p>
                Confirm who they are before relying on them.
              </p>
            </div>
            <div>
              <span>
                03
              </span>
              <b>
                Run a hypothesis
              </b>
              <p>
                Get a ten-section brief for each contact.
              </p>
            </div>
            <div>
              <span>
                04
              </span>
              <b>
                Prepare
              </b>
              <p>
                Add a meeting note, regenerate and export.
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
