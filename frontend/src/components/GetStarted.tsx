import type { IconType } from "react-icons";
import { FiDatabase, FiGlobe, FiLayers, FiUsers } from "react-icons/fi";

type Step = { title: string; text: string; Icon: IconType; tone: string };

const steps: Step[] = [
  {
    title: "Add your website",
    text: "Get a suggested offer, buyers, territory and signals for one research unit.",
    Icon: FiGlobe,
    tone: "teal",
  },
  {
    title: "Choose your playbooks",
    text: "Bundle the signals that matter and set monitors to re-check daily, weekly or monthly.",
    Icon: FiLayers,
    tone: "blue",
  },
  {
    title: "Invite your team",
    text: "Add researchers, sales reviewers, SDRs, analysts and partners, and pick a workflow.",
    Icon: FiUsers,
    tone: "violet",
  },
  {
    title: "Connect your CRM",
    text: "Link HubSpot or Salesforce and add suppressions so current clients are never prospected.",
    Icon: FiDatabase,
    tone: "green",
  },
];

/** Home page "Get started" section: heading on top, four step cards below. */
export default function GetStarted() {
  return (
    <section className="sec gs" aria-labelledby="go-h" style={{ paddingTop: "0" }}>
      <div className="w">
        <div style={{ maxWidth: "820px" }}>
          <span className="kick">Get started</span>
          <h2 className="h2" id="go-h">
            Start with your website.
          </h2>
          <p className="lead">
            Insyder reads it to suggest what you sell, who buys it and which signals to watch. You review every
            suggestion before it’s used.
          </p>
        </div>
        <ol className="gs-grid">
          {steps.map(({ title, text, Icon, tone }, i) => {
            const n = String(i + 1).padStart(2, "0");
            return (
              <li key={title} className="gs-card">
                <div className="gs-top">
                  <span className="gs-n">{n}</span>
                  <span className={`gs-ic ${tone}`}>
                    <Icon size={18} aria-hidden="true" />
                  </span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="gs-step">Step {n}</span>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
