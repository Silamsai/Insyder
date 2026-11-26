import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import type { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import HowItWorks from "@/components/HowItWorks";

export const metadata: Metadata = pageMeta({
  path: "/outreach",
  title: "Insyder — Outreach",
  description: "Researchers, reviewers and SDRs work from one task list. Drafts come from reviewed evidence, outcomes are logged, and handoffs stay clear.",
});

export default function OutreachPage() {
  return (
    <>
      <section className="pg-hero dk" aria-labelledby="pg-h">
        <div className="w">
         
          <span className="kick" style={{ display: "block", marginTop: "28px" }}>
          Outreach
          </span>
          <h1 className="h1" id="pg-h">
            Every task carries its context.
          </h1>
          <p className="sub">
            Researchers, reviewers and SDRs work from one task list. Drafts come from reviewed evidence, outcomes are logged, and handoffs stay clear.
          </p>
          <div className="row">
            <Link className="btn b-hi" href="/demo">
              Book a demo
            </Link>
          </div>
          <nav className="anchors" aria-label="On this page">
            <a href="#tasks">
              Team tasks
            </a>
            <a href="#work">
              Work my tasks
            </a>
            <a href="#drafts">
              Drafts
            </a>
            <a href="#handoffs">
              Handoffs
            </a>
          </nav>
        </div>
      </section>
      <section aria-label="Outreach in detail">
        <div className="w">
          <div className="frow" id="tasks">
            <div className="ftxt" data-reveal>
              <span className="kick">
                Team tasks
              </span>
              <h2>
                One list for the whole team.
              </h2>
              <p className="lead">
                See every task across the workspace, with what is overdue, what is due soon and what is in progress.
              </p>
              <ul className="checks">
                <li>
                  Research, review, email and call tasks
                </li>
                <li>
                  Filter by owner, status, due date and priority
                </li>
                <li>
                  Each task links straight to the account brief
                </li>
                <li>
                  Tasks shown, overdue, due within 24 hours and in progress
                </li>
              </ul>
            </div>
            <div data-reveal style={{ "--rd": "120ms" } as CSSProperties}>
              <div className="pnl" style={{ padding: "0", overflow: "hidden", background: "transparent", border: "0", boxShadow: "0 24px 60px -20px rgba(13,27,42,.15)" }}>
                <Image
                  src="/team-tasks.png"
                  alt="Team tasks list showing research and email tasks with status, owner and due dates"
                  width={1200}
                  height={800}
                  sizes="(max-width: 980px) 100vw, 560px"
                  style={{ display: "block", width: "100%", height: "auto", borderRadius: "14px" }}
                />
              </div>
            </div>
          </div>
          <div className="frow rev" id="work">
            <div className="ftxt" data-reveal>
              <span className="kick">
                Work my tasks
              </span>
              <h2>
                Clear instructions on every task.
              </h2>
              <p className="lead">
                Each task says what to do next. A research task, for example, ends by sending the brief to a sales reviewer with a note, and then completes itself.
              </p>
              <ul className="checks">
                <li>
                  Step-by-step “what to do” on each task
                </li>
                <li>
                  Open the account brief in one click
                </li>
                <li>
                  Send to a named sales reviewer with a note
                </li>
                <li>
                  Start, complete or cancel with a reason
                </li>
              </ul>
            </div>
            <div data-reveal style={{ "--rd": "120ms" } as CSSProperties}>
              <div className="pnl" style={{ padding: "0", overflow: "hidden", background: "transparent", border: "0", boxShadow: "0 24px 60px -20px rgba(13,27,42,.15)" }}>
                <Image
                  src="/task-instructions.png"
                  alt="Research task showing step-by-step checklist: review evidence, write note, send to sales reviewer"
                  width={1394}
                  height={1088}
                  sizes="(max-width: 980px) 100vw, 560px"
                  style={{ display: "block", width: "100%", height: "auto", borderRadius: "14px" }}
                />
              </div>
            </div>
          </div>
          <div className="frow" id="drafts">
            <div className="ftxt" data-reveal>
              <span className="kick">
                Drafts
              </span>
              <h2>
                Outreach written from what you know.
              </h2>
              <p className="lead">
                Draft emails and LinkedIn notes from reviewed evidence and the contact’s role hypothesis. A person reviews every draft before it’s used.
              </p>
              <ul className="checks">
                <li>
                  Email drafts and LinkedIn notes
                </li>
                <li>
                  Grounded in reviewed evidence
                </li>
                <li>
                  Opening lines from the role hypothesis
                </li>
                <li>
                  Log call and email outcomes against the task
                </li>
              </ul>
            </div>
            <div data-reveal style={{ "--rd": "120ms" } as CSSProperties}>
              <div className="pnl" style={{ padding: "0", overflow: "hidden", background: "transparent", border: "0", boxShadow: "0 24px 60px -20px rgba(13,27,42,.15)" }}>
                <Image
                  src="/outreach-drafts.png"
                  alt="Outreach drafts showing email and LinkedIn note drafts generated from reviewed evidence"
                  width={1200}
                  height={800}
                  sizes="(max-width: 980px) 100vw, 560px"
                  style={{ display: "block", width: "100%", height: "auto", borderRadius: "14px" }}
                />
              </div>
            </div>
          </div>
          <div className="frow rev" id="handoffs">
            <div className="ftxt" data-reveal>
              <span className="kick">
                Handoffs
              </span>
              <h2>
                Pass accounts on without losing context.
              </h2>
              <p className="lead">
                When an account needs external fulfilment, prepare a handoff with an agreed next action and follow-up date, sharing only permitted fields.
              </p>
              <ul className="checks">
                <li>
                  Partner handoffs for accepted accounts
                </li>
                <li>
                  Agreed next action and follow-up date
                </li>
                <li>
                  Permitted fields only
                </li>
                <li>
                  Send accepted accounts to your CRM
                </li>
              </ul>
            </div>
            <div data-reveal style={{ "--rd": "120ms" } as CSSProperties}>
              <div className="pnl" style={{ padding: "0", overflow: "hidden", background: "transparent", border: "0", boxShadow: "0 24px 60px -20px rgba(13,27,42,.15)" }}>
                <Image
                  src="/partner-handoffs.png"
                  alt="Partner handoffs showing accepted accounts prepared for external fulfilment with follow-up dates"
                  width={1200}
                  height={800}
                  sizes="(max-width: 980px) 100vw, 560px"
                  style={{ display: "block", width: "100%", height: "auto", borderRadius: "14px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <HowItWorks
        title="From accepted account to logged outcome."
        steps={[
          { title: "Receive", text: "Accepted accounts arrive as tasks with context.", icon: "receive" },
          { title: "Prepare", text: "Read the brief and the contact’s role hypothesis.", icon: "prep" },
          { title: "Draft", text: "Write outreach from reviewed evidence.", icon: "draft" },
          { title: "Log", text: "Record the outcome, or hand off to a partner.", icon: "log" },
        ]}
      />
      <section className="sec" aria-labelledby="fq-h">
        <div className="w fq">
          <div data-reveal>
            <span className="kick">
              FAQ
            </span>
            <h2 className="h2" id="fq-h">
              Questions about Outreach.
            </h2>
          </div>
          <div className="fqd" data-reveal style={{ "--rd": "100ms" } as CSSProperties}>
            <details>
              <summary>
                Does Insyder send emails for us?
              </summary>
              <div className="a">
                <p>
                  Insyder prepares drafts from reviewed evidence. A person on your team reviews each one before it’s used.
                </p>
              </div>
            </details>
            <details>
              <summary>
                Can partners see everything?
              </summary>
              <div className="a">
                <p>
                  No. Partner handoffs share only the fields partners are permitted to see.
                </p>
              </div>
            </details>
            <details>
              <summary>
                Can we see task outcomes?
              </summary>
              <div className="a">
                <p>
                  Yes. Outcomes are logged against each task and show up in workspace reports.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
      <nav className="w related" data-reveal aria-label="More solutions">
        <Link href="/contact-profiling">
          <span>
            ← Previous
          </span>
          <b>
            Contact profiling
          </b>
        </Link>
        <Link className="nx" href="/solutions">
          <span>
            Next →
          </span>
          <b>
            Solutions by team
          </b>
        </Link>
      </nav>
      <section className="cta-band dk" aria-labelledby="cta-h">
        <div className="w" data-reveal>
          <h2 id="cta-h">
            Start every conversation with context.
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
