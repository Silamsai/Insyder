export const productLinks = [
  { href: "/product", label: "Product tour", desc: "See how Insyder connects every step from signal to first meeting." },
  { href: "/discover", label: "Discover", desc: "Find companies with a reason to talk, from a plain-language search." },
  { href: "/monitor", label: "Monitor", desc: "Saved playbooks that re-check on a schedule and log new signals." },
  { href: "/accounts", label: "Accounts", desc: "Every account, its evidence, its brief and its path to sales." },
  { href: "/contact-profiling", label: "Contact profiling", desc: "Find who decides, then prepare for each person." },
  { href: "/outreach", label: "Outreach", desc: "Tasks, drafts and handoffs that carry the account’s context." },
];

/** Login page of the Insyder portal app (separate repo: insyder-portal). */
export const PORTAL_LOGIN_URL = `${(process.env.NEXT_PUBLIC_PORTAL_URL ?? "http://localhost:3000").replace(/\/$/, "")}/login`;
