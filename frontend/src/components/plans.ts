/**
 * Plans shown on the Pricing page. Keep in step with the portal's source of truth:
 * insyder-portal/backend/src/services/plans.ts (that one decides what customers actually get and pay).
 */
export type PlanKey = "starter" | "growth" | "enterprise";

export type Plan = {
  key: PlanKey;
  name: string;
  /** UK pounds (GBP) per company per month */
  price: number;
  blurb: string;
  researchUnits: number;
  workspaces: number;
  users: number;
  monitors: string;
  popular?: boolean;
};

export const plans: Plan[] = [
  {
    key: "starter",
    name: "Starter",
    price: 20,
    blurb: "For a small team getting started with signal-led prospecting.",
    researchUnits: 100,
    workspaces: 1,
    users: 4,
    monitors: "Monthly",
  },
  {
    key: "growth",
    name: "Growth",
    price: 40,
    blurb: "For a sales team with researchers, reviewers and SDRs working together.",
    researchUnits: 250,
    workspaces: 3,
    users: 10,
    monitors: "Weekly or monthly",
    popular: true,
  },
  {
    key: "enterprise",
    name: "Enterprise",
    price: 60,
    blurb: "For larger teams, agencies and partners running several workspaces.",
    researchUnits: 500,
    workspaces: 6,
    users: 20,
    monitors: "Daily or weekly",
  },
];

export const planByKey = (key: string | undefined | null) => plans.find((p) => p.key === key);

/** What every plan includes: plans differ only in limits. */
export const everyPlanIncludes = [
  "Plain-language company search and checked lists",
  "Account research with every source attached",
  "Evidence review and qualification briefs",
  "Sales review: accept, return or reject with a reason",
  "Decision makers, each with a source",
  "Role hypothesis for every contact",
  "Signal monitors on a schedule",
  "HubSpot and Salesforce sync",
  "Outreach drafts and task queue",
  "Partner handoffs and custom branding",
  "Reports with PDF export",
];
