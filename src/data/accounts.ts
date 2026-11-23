export interface Persona {
  id: string;
  name: string;
  role: string;
  department: string;
  avatar: string;
  priorities: string[];
  talkingPoints: string[];
  currentInitiatives: string[];
  techStack: string[];
}

export interface IntentSignal {
  type: "hiring" | "tech_change" | "intent_surge" | "funding" | "news";
  title: string;
  detail: string;
  timestamp: string;
  confidence: number;
}

export interface Account {
  id: string;
  name: string;
  domain: string;
  logo: string;
  industry: string;
  employees: string;
  revenue: string;
  location: string;
  intentScore: number;
  stage: "Discovery" | "Engaged" | "Qualified" | "In Pipeline";
  owner: string;
  signals: IntentSignal[];
  personas: Persona[];
  executiveBrief: {
    overview: string;
    strategicWhy: string;
    firstCallHook: string;
    keyQuestions: string[];
    riskFactors: string[];
  };
}

export const mockAccounts: Account[] = [
  {
    id: "acc-1",
    name: "Datadog",
    domain: "datadoghq.com",
    logo: "🐶",
    industry: "Enterprise Cloud Monitoring",
    employees: "5,000 - 10,000",
    revenue: "$2.1B",
    location: "New York, NY",
    intentScore: 98,
    stage: "Discovery",
    owner: "Sarah Jenkins",
    signals: [
      {
        type: "hiring",
        title: "Aggressive Enterprise GTM Expansion",
        detail: "Hiring 24 Enterprise Account Executives across EMEA & APAC.",
        timestamp: "2 hours ago",
        confidence: 96,
      },
      {
        type: "intent_surge",
        title: "High Research Activity on G2 & TrustRadius",
        detail: "54 sessions searching for account-based prospecting & sales intelligence.",
        timestamp: "5 hours ago",
        confidence: 94,
      },
      {
        type: "tech_change",
        title: "Salesforce CRM Schema Restructure",
        detail: "Detected custom objects added for multi-product rep coverage.",
        timestamp: "1 day ago",
        confidence: 90,
      },
    ],
    personas: [
      {
        id: "p-1",
        name: "Marcus Vance",
        role: "VP of Global Sales Development",
        department: "Sales",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
        priorities: [
          "Shortening rep ramp time from 4.5 months to under 60 days",
          "Consolidating 3 legacy enrichment tools into 1 unified intelligence layer",
          "Increasing cold-to-first-meeting conversion rate above 18%",
        ],
        talkingPoints: [
          "Reference Datadog's recent EMEA hiring surge and the bottleneck of ramping reps without account context.",
          "Demonstrate how 1-click meeting briefs reduce rep pre-call research from 45 min to 30 seconds.",
          "Highlight bi-directional Salesforce & Outreach integration to keep their existing rep workflows untouched.",
        ],
        currentInitiatives: [
          "Migrating out-of-date static data lists to real-time intent triggers",
          "Standardizing AE/SDR discovery playbooks across 120 global reps",
        ],
        techStack: ["Salesforce", "Outreach", "Gong", "Snowflake", "Slack"],
      },
      {
        id: "p-2",
        name: "Elena Rostova",
        role: "Head of Revenue Operations",
        department: "RevOps",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
        priorities: [
          "Preventing duplicate account creation and data contamination in CRM",
          "Ensuring automated enrichment without manual CSV uploads",
        ],
        talkingPoints: [
          "Show automated contact hierarchy mapping and automatic contact deduplication before sync.",
        ],
        currentInitiatives: ["Warehouse-native reverse ETL integration with Snowflake"],
        techStack: ["Salesforce", "Snowflake", "dbt", "Census"],
      },
    ],
    executiveBrief: {
      overview: "Datadog is rapidly scaling its enterprise sales teams. Reps are currently spending over 40 minutes per account doing fragmented manual research across LinkedIn, 10-Ks, and news before first calls.",
      strategicWhy: "Datadog's new VP of Sales Development is mandated to improve first-meeting conversion by 25% this quarter while onboarding 30+ new reps.",
      firstCallHook: "I noticed Datadog is adding 20+ enterprise reps in EMEA this quarter. Most revenue leaders we talk with find that unguided research burns 3+ hours per rep per week. How are your new hires currently preparing for their first enterprise discovery calls?",
      keyQuestions: [
        "What is your target rep ramp time right now, and what accounts for the biggest delay in pipeline generation?",
        "How do your SDRs currently identify which tier-1 accounts are actively in-market versus cold?",
      ],
      riskFactors: [
        "Heavy existing commitment to standard data vendors (requires showing immediate 1-click briefing superiority).",
      ],
    },
  },
  {
    id: "acc-2",
    name: "Snowflake",
    domain: "snowflake.com",
    logo: "❄️",
    industry: "Cloud Data Platform",
    employees: "7,000+",
    revenue: "$2.8B",
    location: "Bozeman, MT",
    intentScore: 94,
    stage: "Discovery",
    owner: "Alex Mercer",
    signals: [
      {
        type: "funding",
        title: "Major AI Data Cloud Expansion",
        detail: "Announced $250M strategic fund for generative enterprise apps.",
        timestamp: "3 hours ago",
        confidence: 98,
      },
      {
        type: "intent_surge",
        title: "Active Evaluation of B2B Buying Signals",
        detail: "8 team members in RevOps reading account-intent whitepapers.",
        timestamp: "8 hours ago",
        confidence: 91,
      },
    ],
    personas: [
      {
        id: "p-3",
        name: "David Kim",
        role: "Director of Enterprise Sales Enablement",
        department: "Enablement",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
        priorities: [
          "Ensuring every rep delivers a custom pitch aligned to the prospect's exact cloud stack",
          "Automating pre-call briefing cards directly into Slack 15 minutes before calendar events",
        ],
        talkingPoints: [
          "Highlight Insyder's automated Slack pre-call brief that pings reps with personalized icebreakers.",
        ],
        currentInitiatives: ["AI-powered sales coaching rollout across 200 North America reps"],
        techStack: ["Salesforce", "Highspot", "Salesloft", "Slack"],
      },
    ],
    executiveBrief: {
      overview: "Snowflake's enterprise reps target Fortune 500 CIOs where generic outreach immediately fails. They require deep persona insights and company cloud stack detection before any call.",
      strategicWhy: "High focus on enterprise AI workloads; reps need to speak directly to prospect data architecture pains.",
      firstCallHook: "Enterprise buyers tune out generic cloud pitches in seconds. How do your enterprise AEs currently verify a prospect's current data warehouse posture before kicking off discovery?",
      keyQuestions: [
        "How do you ensure reps aren't going in blind when talking to technical decision makers?",
      ],
      riskFactors: [
        "Strict enterprise security and SOC2 compliance review required for new vendors.",
      ],
    },
  },
  {
    id: "acc-3",
    name: "Ramp",
    domain: "ramp.com",
    logo: "💳",
    industry: "Corporate Finance & Cards",
    employees: "1,000 - 2,500",
    revenue: "$300M+ ARR",
    location: "New York, NY",
    intentScore: 91,
    stage: "Engaged",
    owner: "Jordan Lee",
    signals: [
      {
        type: "hiring",
        title: "Scaling Mid-Market & Enterprise Sales",
        detail: "Added 15 SDR openings in NYC and London.",
        timestamp: "4 hours ago",
        confidence: 93,
      },
      {
        type: "tech_change",
        title: "HubSpot to Salesforce Enterprise Migration",
        detail: "Upgraded CRM architecture to support multi-entity financial accounts.",
        timestamp: "2 days ago",
        confidence: 89,
      },
    ],
    personas: [
      {
        id: "p-4",
        name: "Chloe Chen",
        role: "VP of Revenue Operations",
        department: "RevOps",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
        priorities: [
          "Automated lead routing and instant company enrichment",
          "Real-time alerts when high-spend finance leaders visit key pricing pages",
        ],
        talkingPoints: [
          "Demonstrate Insyder's instant reverse IP website identification paired with verified CFO contact data.",
        ],
        currentInitiatives: ["Accelerating mid-market pipeline velocity"],
        techStack: ["Salesforce", "HubSpot", "Segment", "Slack"],
      },
    ],
    executiveBrief: {
      overview: "Ramp is expanding rapidly upmarket into mid-market and enterprise finance teams. The GTM team needs instant CFO/Controller buying committee intelligence.",
      strategicWhy: "Selling to finance leaders requires exact, data-backed ROI arguments within the first 2 minutes.",
      firstCallHook: "Finance leaders are notoriously skeptical of generic outreach. We help reps identify exact ERP stacks and expense friction points before picking up the phone.",
      keyQuestions: [
        "When your reps reach out to CFOs, how do they currently customize their talking points around existing ERPs like NetSuite or SAP?",
      ],
      riskFactors: ["Fast-moving evaluation cycle; needs rapid POC."],
    },
  },
  {
    id: "acc-4",
    name: "Linear",
    domain: "linear.app",
    logo: "⚡",
    industry: "Product Management & Issue Tracking",
    employees: "100 - 250",
    revenue: "$50M+",
    location: "San Francisco, CA",
    intentScore: 88,
    stage: "Qualified",
    owner: "Sarah Jenkins",
    signals: [
      {
        type: "intent_surge",
        title: "High Evaluation of Enterprise GTM Tools",
        detail: "Founding enterprise team assessing sales workflows.",
        timestamp: "1 day ago",
        confidence: 92,
      },
    ],
    personas: [
      {
        id: "p-5",
        name: "Karri Saarinen",
        role: "CEO & Co-founder",
        department: "Executive",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200",
        priorities: [
          "Crafting an enterprise sales motion that respects developer craft and product quality",
          "Zero bloated software or cumbersome UI friction",
        ],
        talkingPoints: [
          "Demonstrate Insyder's lightning-fast, keyboard-driven interface and zero-friction briefs.",
        ],
        currentInitiatives: ["Linear Asks & Enterprise plan expansion"],
        techStack: ["Next.js", "Slack", "Postgres", "Linear"],
      },
    ],
    executiveBrief: {
      overview: "Linear values design craftsmanship, speed, and precision above all else. Any tool adopted must feel blazing fast with zero clunky enterprise bloat.",
      strategicWhy: "Transitioning from purely bottom-up self-serve to a hybrid sales-assisted motion.",
      firstCallHook: "Building a sales-assisted motion without compromising Linear's legendary product polish requires tools that don't feel like 2012 enterprise software.",
      keyQuestions: [
        "How do you plan to equip your initial enterprise sales hires with insights without slowing them down with bloated CRMs?",
      ],
      riskFactors: ["High aesthetic and performance bar."],
    },
  },
  {
    id: "acc-5",
    name: "Retool",
    domain: "retool.com",
    logo: "🛠️",
    industry: "Internal Tooling & Custom Software",
    employees: "500 - 1,000",
    revenue: "$150M+",
    location: "San Francisco, CA",
    intentScore: 84,
    stage: "Discovery",
    owner: "Alex Mercer",
    signals: [
      {
        type: "hiring",
        title: "Hiring VP of Solutions Engineering",
        detail: "Focusing on enterprise custom apps for fintech and logistics.",
        timestamp: "6 hours ago",
        confidence: 88,
      },
    ],
    personas: [
      {
        id: "p-6",
        name: "Rachel Gomez",
        role: "Head of Growth & Demand Gen",
        department: "Marketing",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
        priorities: ["Matching account intent signals directly with targeted digital ad campaigns"],
        talkingPoints: ["Show bidirectional sync with ad networks and custom webhook notifications."],
        currentInitiatives: ["Account-Based Marketing targeting engineering leadership"],
        techStack: ["HubSpot", "Segment", "Snowflake", "Retool"],
      },
    ],
    executiveBrief: {
      overview: "Retool sells heavily to technical leaders building internal software. Their reps must know existing database stacks before jumping on calls.",
      strategicWhy: "High propensity to buy when developer teams face backlogged internal tooling requests.",
      firstCallHook: "When your reps speak to VP of Eng candidates, how do they identify which internal workflows are currently stalling engineering velocity?",
      keyQuestions: ["What triggers an account transition from marketing nurture to active SDR outbound?"],
      riskFactors: ["Internal build vs buy evaluation."],
    },
  },
];
