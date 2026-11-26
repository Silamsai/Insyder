import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import DemoForm from "@/components/DemoForm";

export const metadata: Metadata = pageMeta({
  path: "/demo",
  title: "Insyder — Book a demo",
  description: "Book a 30-minute Insyder demo shaped around what you sell and who you sell to.",
});

export default function DemoPage() {
  return (
    <>
      <section className="pg-hero dk" aria-labelledby="pg-h">
        <div className="w demo">
          <div>
            <p className="crumb">
              <Link href="/">
                Home
              </Link>
              {" / Book a demo"}
            </p>
            <span className="kick" style={{ display: "block", marginTop: "28px" }}>
              Book a demo
            </span>
            <h1 className="h1" id="pg-h" style={{ fontSize: "clamp(40px, 4.6vw, 64px)" }}>
              See Insyder on accounts like yours.
            </h1>
            <p className="sub">
              A 30-minute walkthrough, shaped around what you sell and who you sell to.
            </p>
            <h2 className="kick" style={{ display: "block", marginTop: "40px", fontSize: "12.5px" }}>
              What we’ll cover
            </h2>
            <ul className="checks">
              <li>
                Finding accounts with the signals that matter to your offer
              </li>
              <li>
                An account brief and its evidence
              </li>
              <li>
                A role hypothesis for a sample contact
              </li>
              <li>
                How acceptance and CRM handoff would work for your team
              </li>
            </ul>
            <h2 className="kick" style={{ display: "block", marginTop: "32px", fontSize: "12.5px" }}>
              Useful to have ready
            </h2>
            <ul className="checks">
              <li>
                Your website
              </li>
              <li>
                Two or three target accounts
              </li>
              <li>
                The CRM you use
              </li>
            </ul>
          </div>
          <DemoForm />
        </div>
      </section>
      <section className="sec" aria-labelledby="dq">
        <div className="w fq">
          <div>
            <span className="kick">
              Before you book
            </span>
            <h2 className="h2" id="dq">
              Quick answers.
            </h2>
          </div>
          <div className="fqd">
            <details>
              <summary>
                Is Insyder an outsourced SDR service?
              </summary>
              <div className="a">
                <p>
                  No. It’s software your team runs. Your people choose the accounts, judge the evidence and own every decision.
                </p>
              </div>
            </details>
            <details>
              <summary>
                Which CRMs does it work with?
              </summary>
              <div className="a">
                <p>
                  HubSpot and Salesforce.
                </p>
              </div>
            </details>
            <details>
              <summary>
                Is a role hypothesis a personality profile?
              </summary>
              <div className="a">
                <p>
                  No. It describes a professional role from public sources, as a working hypothesis to check in conversation.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
