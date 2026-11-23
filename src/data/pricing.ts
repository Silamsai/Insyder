export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  popular?: boolean;
  ctaText: string;
  ctaHref: string;
  features: string[];
  limits: {
    accounts: string;
    briefs: string;
    users: string;
    syncSpeed: string;
  };
}

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Essential intent signals and 1-click meeting preparation for small GTM teams and founders.",
    monthlyPrice: 89,
    annualPrice: 69,
    popular: false,
    ctaText: "Start 14-day free trial",
    ctaHref: "/book-demo?plan=starter",
    features: [
      "Up to 500 active tracked accounts",
      "Unlimited 1-click meeting briefs",
      "Real-time intent radar & hiring shifts",
      "HubSpot & Salesforce native sync",
      "Slack morning digest & alert bot",
      "Standard email & phone support",
    ],
    limits: {
      accounts: "500 accounts",
      briefs: "Unlimited",
      users: "Up to 3 reps",
      syncSpeed: "Hourly sync",
    },
  },
  {
    id: "growth",
    name: "Growth",
    badge: "Most Popular",
    description: "Full intelligence suite with custom buying committee mapping and outbound automation for scaling sales orgs.",
    monthlyPrice: 179,
    annualPrice: 139,
    popular: true,
    ctaText: "Start 14-day free trial",
    ctaHref: "/book-demo?plan=growth",
    features: [
      "Up to 2,500 active tracked accounts",
      "Everything in Starter, plus:",
      "Custom Buying Committee hierarchy mapping",
      "Bi-directional Outreach & Salesloft sync",
      "De-anonymized website visitor identification",
      "Predictive ICP propensity scoring",
      "Export directly to CSV, Google Sheets, or CRM",
      "Priority phone & dedicated Slack channel",
    ],
    limits: {
      accounts: "2,500 accounts",
      briefs: "Unlimited",
      users: "Up to 15 reps",
      syncSpeed: "Real-time sync",
    },
  },
  {
    id: "enterprise",
    name: "Enterprise",
    badge: "Custom Scale",
    description: "Custom data lake streaming, bespoke machine learning models, and dedicated solution engineering.",
    monthlyPrice: 299,
    annualPrice: 239,
    popular: false,
    ctaText: "Talk to sales",
    ctaHref: "/book-demo?plan=enterprise",
    features: [
      "Unlimited tracked accounts & custom segments",
      "Everything in Growth, plus:",
      "Direct Snowflake, BigQuery & Databricks data share",
      "Custom trained ICP machine learning models",
      "Enterprise SSO (Okta, Azure AD, SAML 2.0)",
      "Role-based access control (RBAC)",
      "Custom legal terms, SLA & SOC2 documentation",
      "Dedicated Enterprise Account Director",
    ],
    limits: {
      accounts: "Unlimited",
      briefs: "Unlimited",
      users: "Unlimited reps",
      syncSpeed: "Sub-second streaming",
    },
  },
];
