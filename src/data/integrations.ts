export interface Integration {
  id: string;
  name: string;
  category: "CRM" | "Sales Engagement" | "Data Warehouse" | "Communication" | "Automation";
  description: string;
  logo: string;
  featured: boolean;
  syncType: "Bi-directional" | "Real-time Push" | "Scheduled Sync";
  popularityScore: number;
  features: string[];
}

export const integrationsData: Integration[] = [
  {
    id: "salesforce",
    name: "Salesforce",
    category: "CRM",
    description: "Two-way live synchronization of enriched account records, buying committee contacts, and automated meeting notes.",
    logo: "☁️",
    featured: true,
    syncType: "Bi-directional",
    popularityScore: 99,
    features: [
      "Auto-enrich Leads, Contacts, and Accounts without overwriting custom fields",
      "Sync Intent Scores & Surge topics directly into Salesforce Reports & Dashboards",
      "1-Click Meeting Brief generator inside the native Salesforce record layout",
    ],
  },
  {
    id: "hubspot",
    name: "HubSpot",
    category: "CRM",
    description: "Seamlessly map accounts, trigger automated lifecycle stage transitions, and populate deal rooms with persona intel.",
    logo: "🟠",
    featured: true,
    syncType: "Bi-directional",
    popularityScore: 97,
    features: [
      "Custom properties for Intent Score, Buying Stage, and Technology Stack",
      "Trigger HubSpot workflows when target accounts show 90+ buying intent",
      "Auto-sync meeting briefings into deal activity timeline",
    ],
  },
  {
    id: "outreach",
    name: "Outreach",
    category: "Sales Engagement",
    description: "Inject customized persona hooks and strategic conversation angles straight into rep email sequences and call tasks.",
    logo: "🟣",
    featured: true,
    syncType: "Bi-directional",
    popularityScore: 95,
    features: [
      "Dynamic sequence variables: {{insyder_intent_topic}}, {{insyder_first_call_hook}}",
      "Automatically enroll newly identified buying committee personas into tailored sequences",
      "Populate rep dialer with real-time talking points and icebreakers",
    ],
  },
  {
    id: "salesloft",
    name: "Salesloft",
    category: "Sales Engagement",
    description: "Empower reps with rhythm-based calling guides and account summaries right inside the Salesloft Live Call Studio.",
    logo: "🟢",
    featured: true,
    syncType: "Bi-directional",
    popularityScore: 94,
    features: [
      "Pre-call cheat sheets generated inside the Salesloft execution pane",
      "Auto-tag accounts by high-propensity buying triggers",
      "Continuous cadence optimization based on target company news",
    ],
  },
  {
    id: "snowflake",
    name: "Snowflake",
    category: "Data Warehouse",
    description: "Warehouse-native architecture: stream all raw intent events, contact graphs, and scoring models directly into your data lake.",
    logo: "❄️",
    featured: true,
    syncType: "Real-time Push",
    popularityScore: 96,
    features: [
      "Direct secure data share into your Snowflake account with zero ETL lag",
      "Join Insyder intent data with your product usage metrics and billing data",
      "Zero vendor lock-in with standard SQL query access",
    ],
  },
  {
    id: "bigquery",
    name: "Google BigQuery",
    category: "Data Warehouse",
    description: "Query enterprise intent signals and B2B firmographics using Google Cloud's serverless data warehouse.",
    logo: "🔍",
    featured: false,
    syncType: "Scheduled Sync",
    popularityScore: 91,
    features: [
      "Daily partitions of high-intent accounts and verified emails",
      "Direct connector for Looker and Data Studio analytics",
    ],
  },
  {
    id: "slack",
    name: "Slack",
    category: "Communication",
    description: "Instant notification pings when tier-1 target accounts surge, plus automated pre-call briefing summaries delivered 15 min before meetings.",
    logo: "💬",
    featured: true,
    syncType: "Real-time Push",
    popularityScore: 98,
    features: [
      "Daily morning pipeline digest for each sales rep in their direct channel",
      "Instant celebration alerts when in-market accounts convert to meetings",
      "Interactive Slack bot: type '/insyder acme.com' for an instant account brief",
    ],
  },
  {
    id: "teams",
    name: "Microsoft Teams",
    category: "Communication",
    description: "Deliver account intelligence cards, trigger alerts, and enable rep collaboration directly within Microsoft 365.",
    logo: "👥",
    featured: false,
    syncType: "Real-time Push",
    popularityScore: 89,
    features: [
      "Adaptive Cards for account summaries and buyer persona cards",
      "Outlook calendar synchronization for automatic meeting prep triggers",
    ],
  },
  {
    id: "gong",
    name: "Gong.io",
    category: "Sales Engagement",
    description: "Correlate post-call conversation analytics with initial pre-call intelligence to continuously refine win rates.",
    logo: "🎙️",
    featured: false,
    syncType: "Bi-directional",
    popularityScore: 92,
    features: [
      "Verify whether reps touched on recommended talking points during discovery",
      "Feed successful objection handles back into Insyder's AI briefing models",
    ],
  },
  {
    id: "segment",
    name: "Twilio Segment",
    category: "Automation",
    description: "Collect reverse-IP anonymous traffic and stream identified high-value accounts into your GTM activation stack.",
    logo: "🟩",
    featured: false,
    syncType: "Real-time Push",
    popularityScore: 90,
    features: [
      "De-anonymize company web visitors into known accounts",
      "Trigger downstream marketing and sales workflows instantly",
    ],
  },
];
