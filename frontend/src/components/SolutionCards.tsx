import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

type Card = { href: string; title: string; text: string; cta: string; icon: ReactNode };

const svg = (cls: string, children: ReactNode) => (
  <svg className={`sc-ic ${cls}`} viewBox="0 0 24 24" aria-hidden="true">
    {children}
  </svg>
);

const cards: Card[] = [
  {
    href: "/discover",
    title: "Discover",
    text: "Find companies with a reason to talk, from a plain-language search.",
    cta: "Explore discover",
    icon: svg(
      "ic-disc",
      <>
        <g className="ic-lens">
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="m20 20-4.6-4.6" />
        </g>
        <path className="ic-spark" d="M10.5 7.2v1.6M10.5 12.2v1.6M7.2 10.5h1.6M12.2 10.5h1.6" />
      </>
    ),
  },
  {
    href: "/monitor",
    title: "Monitor",
    text: "Saved playbooks that re-check on a schedule and log new signals.",
    cta: "Explore monitor",
    icon: svg(
      "ic-mon",
      <path
        className="ic-pulse"
        d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
      />
    ),
  },
  {
    href: "/accounts",
    title: "Accounts",
    text: "Every account, its evidence, its brief and its path to sales.",
    cta: "Explore accounts",
    icon: svg(
      "ic-acc",
      <>
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
        <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
        <path className="ic-w1" d="M10 6h4" />
        <path className="ic-w2" d="M10 10h4" />
        <path className="ic-w3" d="M10 14h4" />
        <path className="ic-w4" d="M10 18h4" />
      </>
    ),
  },
  {
    href: "/contact-profiling",
    title: "Contact profiling",
    text: "Find who decides, then prepare for each person.",
    cta: "Explore contact profiling",
    icon: svg(
      "ic-ppl",
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <g className="ic-p2">
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </g>
      </>
    ),
  },
  {
    href: "/outreach",
    title: "Outreach",
    text: "Tasks, drafts and handoffs that carry the account’s context.",
    cta: "Explore outreach",
    icon: svg(
      "ic-send",
      <g className="ic-plane">
        <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
        <path d="m21.854 2.147-10.94 10.939" />
      </g>
    ),
  },
  {
    href: "/contact-profiling",
    title: "Role hypothesis",
    text: "A meeting-ready brief for each contact: what they control, how to open, what to ask and what to avoid.",
    cta: "See an example",
    icon: svg(
      "ic-idea2",
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
  },
];

/** The six workflow cards shown on the home page and the Solutions page. */
export default function SolutionCards() {
  return (
    <div className="solgrid">
      {cards.map((c, i) => (
        <Link
          key={c.title}
          className="solcard"
          href={c.href}
          data-reveal
          style={{ "--rd": `${(i % 3) * 90}ms` } as CSSProperties}
        >
          <div className="sc-top">
            <span className="sc-n">{String(i + 1).padStart(2, "0")}</span>
            <span className="sc-icw">{c.icon}</span>
          </div>
          <b>{c.title}</b>
          <p>{c.text}</p>
          <span className="sc-btn">{c.cta}</span>
        </Link>
      ))}
    </div>
  );
}
