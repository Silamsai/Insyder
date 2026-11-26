import type { CSSProperties, ReactNode } from "react";

/** Step icons. Each animates only while its card is hovered (see .steps-pro rules in globals.css). */
const icons = {
  /** Person with magnifier: find people */
  find: (
    <>
      <circle cx="10" cy="7" r="4" />
      <path d="M10.3 15H7a4 4 0 0 0-4 4v2" />
      <g className="ic-lens">
        <circle cx="17" cy="17" r="3" />
        <path d="m21 21-1.9-1.9" />
      </g>
    </>
  ),
  /** Shield with tick: check / verify */
  check: (
    <>
      <path className="ic-glow" d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path className="ic-tick" d="m9 12 2 2 4-4" />
    </>
  ),
  /** Lightbulb: hypothesis */
  idea: (
    <>
      <g className="ic-rays">
        <path d="M12 .5v1.2M3.6 3.6l.9.9M20.4 3.6l-.9.9M1 9.5h1.2M21.8 9.5H23" />
      </g>
      <g className="ic-bulb">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </g>
    </>
  ),
  /** Clipboard with list: prepare */
  prep: (
    <>
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path className="ic-l1" d="M12 11h4" />
      <path className="ic-l2" d="M12 16h4" />
      <path d="M8 11h.01" />
      <path d="M8 16h.01" />
    </>
  ),
  /** Document with magnifier: research */
  research: (
    <>
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" />
      <g className="ic-lens">
        <circle cx="6" cy="14" r="3" />
        <path d="m9 18-1.5-1.5" />
      </g>
    </>
  ),
  /** List with ticks: qualify */
  qualify: (
    <>
      <path className="ic-tick" d="m3 7 2 2 4-4" />
      <path className="ic-tick ic-d2" d="m3 17 2 2 4-4" />
      <path className="ic-l1" d="M13 6h8" />
      <path d="M13 12h8" />
      <path className="ic-l2" d="M13 18h8" />
    </>
  ),
  /** Circle with tick: accept */
  accept: (
    <>
      <circle className="ic-glow" cx="12" cy="12" r="10" />
      <path className="ic-tick" d="m9 12 2 2 4-4" />
    </>
  ),
  /** Arrow into a box: hand off */
  handoff: (
    <>
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <g className="ic-push">
        <path d="m10 17 5-5-5-5" />
        <path d="M15 12H3" />
      </g>
    </>
  ),
  /** Arrow down into a tray: receive */
  receive: (
    <>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <g className="ic-drop">
        <path d="m7 10 5 5 5-5" />
        <path d="M12 15V3" />
      </g>
    </>
  ),
  /** Pen writing a line: draft */
  draft: (
    <>
      <path className="ic-line" d="M12 20h9" />
      <path className="ic-pen" d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" />
    </>
  ),
  /** Database: log the outcome */
  log: (
    <>
      <ellipse className="ic-s1" cx="12" cy="5" rx="9" ry="3" />
      <path className="ic-s2" d="M3 12a9 3 0 0 0 18 0" />
      <path d="M3 5v14a9 3 0 0 0 18 0V5" />
    </>
  ),
  /** Chat bubble with lines: describe */
  describe: (
    <>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path className="ic-l1" d="M7 8h8" />
      <path className="ic-l2" d="M7 12h6" />
    </>
  ),
  /** Eye: review */
  review: (
    <>
      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
      <circle className="ic-look" cx="12" cy="12" r="3" />
    </>
  ),
  /** Pointer clicking: choose */
  choose: (
    <>
      <g className="ic-rays">
        <path d="M14 4.1 12 6M5.1 8l-2.9-.8M6 12l-1.9 2M7.2 2.2 8 5.1" />
      </g>
      <path className="ic-click" d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z" />
    </>
  ),
  /** Person with tick: assign */
  assign: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path className="ic-tick" d="m16 11 2 2 4-4" />
    </>
  ),
  /** Open book: playbook */
  playbook: (
    <g className="ic-float">
      <path d="M12 7v14" />
      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
    </g>
  ),
  /** Clock: cadence */
  cadence: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path className="ic-hands" d="M12 6v6l4 2" />
    </>
  ),
  /** Filter lines: review signals */
  filter: (
    <>
      <path d="M3 6h18" />
      <path className="ic-l1" d="M7 12h10" />
      <path className="ic-l2" d="M10 18h4" />
    </>
  ),
  /** Ringing bell: act on changes */
  alert: (
    <>
      <g className="ic-bell">
        <path d="M10.268 21a2 2 0 0 0 3.464 0" />
        <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
      </g>
      <g className="ic-rays">
        <path d="M22 8c0-2.3-.8-4.3-2-6M4 2C2.8 3.7 2 5.7 2 8" />
      </g>
    </>
  ),
} satisfies Record<string, ReactNode>;

export type StepIcon = keyof typeof icons;
export type Step = { title: string; text: string; icon: StepIcon };

/** Dark "How it works" band: four numbered step cards joined by a line, each with an icon that animates on hover. */
export default function HowItWorks({ title, lead, steps }: { title: string; lead?: string; steps: Step[] }) {
  return (
    <section className="sec dk steps-sec" aria-labelledby="st-h">
      <div className="w">
        <div className={lead ? "steps-head" : undefined} data-reveal>
          <div>
            <span className="kick">How it works</span>
            <h2 className="h2" id="st-h">
              {title}
            </h2>
          </div>
          {lead && <p className="lead">{lead}</p>}
        </div>
        <ol className="steps-pro">
          {steps.map((s, i) => (
            <li key={s.title} data-reveal style={{ "--rd": `${i * 90}ms` } as CSSProperties}>
              <div className="sp-top">
                <span className="sp-n">{String(i + 1).padStart(2, "0")}</span>
                <span className="sp-icw">
                  <svg className={`sp-ic ic-${s.icon}`} viewBox="0 0 24 24" aria-hidden="true">
                    {icons[s.icon]}
                  </svg>
                </span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
