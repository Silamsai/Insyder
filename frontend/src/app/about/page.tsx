import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Insyder — Account intelligence for revenue teams",
  description: "Learn how Insyder helps revenue teams find the right accounts, understand the evidence and prepare for better first conversations.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pg-hero dk" aria-labelledby="pg-h">
        <div className="w">
          
          <span className="kick" style={{ display: "block", marginTop: "28px" }}>
            About Insyder
          </span>
          <h1 className="h1" id="pg-h">
            Better first conversations start with better account context.
          </h1>
          <p className="sub">
            Insyder helps revenue teams find companies with a reason to talk, see the evidence behind the opportunity and prepare the people who make the decisions.
          </p>
          <div className="row">
            <Link className="btn b-hi" href="/demo">
              Book a demo
            </Link>
            <Link className="btn b-ln" href="/product">
              Explore the product
            </Link>
          </div>
        </div>
      </section>
      <section className="sec about-split" aria-labelledby="purpose-heading">
        <div className="w">
          <div className="frow">
            <div className="ftxt">
              <span className="kick">
                Why Insyder
              </span>
              <h2 id="purpose-heading">
                Less guesswork. More useful context.
              </h2>
              <p className="lead">
                Good outreach begins before the first message. Teams need a clear reason to engage, credible sources for that reason and an understanding of who is likely to care.
              </p>
              <p>
                Insyder brings those steps together in one workflow: discover relevant accounts, monitor new signals, build account briefs, profile decision makers and carry context into outreach.
              </p>
            </div>
            <div className="ftxt">
              <span className="kick">
                How we work
              </span>
              <h2>
                Evidence first, always.
              </h2>
              <p className="lead">
                Account research should be explainable. Insyder keeps sources close to the insight, so teams can judge what is useful, what is uncertain and what to ask next.
              </p>
              <p>
                Examples throughout this website use fictional sample data. Product outputs are research aids—not verified facts or a substitute for a seller’s judgement.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec dk" aria-labelledby="audience-heading">
        <div className="w">
          <span className="kick">
            Built for teams who sell into change
          </span>
          <h2 className="h2" id="audience-heading">
            One shared picture of the opportunity.
          </h2>
          <p className="lead" style={{ maxWidth: "760px" }}>
            From sales leaders and SDRs to researchers, RevOps teams, agencies and channel partners, everyone can work from the same account evidence and next steps.
          </p>
          <div className="row">
            <Link className="btn b-hi" href="/solutions">
              Explore solutions by team
            </Link>
            <Link className="btn b-ln" href="/contact-profiling">
              See contact profiling
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
