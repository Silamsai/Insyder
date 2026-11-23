export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "Data" | "Integration" | "Security" | "Implementation";
}

export const faqsData: FaqItem[] = [
  {
    id: "faq-1",
    question: "What data sources does Insyder use for intent and contact intelligence?",
    answer: "Insyder aggregates multi-modal signals from over 40 distinct sources: real-time B2B content consumption across 10,000+ publisher networks, public job postings and organizational hiring shifts, SEC filings and quarterly earnings transcripts, tech stack installations detected via reverse DNS/SDK telemetry, and de-anonymized first-party website visits. All data is continuously cross-verified against live SMTP handshakes and professional graphs.",
    category: "Data",
  },
  {
    id: "faq-2",
    question: "How accurate is the contact and buyer committee information?",
    answer: "Every email address undergoes 9-step real-time verification (syntax, MX record validation, catch-all detection, and active SMTP ping) right before it is presented to your reps, guaranteeing a 97%+ deliverability rate with zero bounce penalties. Phone numbers are verified against direct mobile carrier registries.",
    category: "Data",
  },
  {
    id: "faq-3",
    question: "Does Insyder integrate directly with Salesforce, HubSpot, and Outreach?",
    answer: "Yes. Insyder provides certified native bi-directional integrations. You can install our managed package or OAuth app in under 10 minutes. We support field mapping, custom objects, deduplication rules, and custom sync triggers so your existing CRM workflow remains intact.",
    category: "Integration",
  },
  {
    id: "faq-4",
    question: "What is the typical implementation timeline for a sales team?",
    answer: "Most mid-market and enterprise teams are live within 48 to 72 hours. Initial CRM sync takes approximately 30 minutes, followed by automated account scoring and buying committee backfill. We provide dedicated onboarding specialists to configure your custom ICP criteria and train your reps.",
    category: "Implementation",
  },
  {
    id: "faq-5",
    question: "How does Insyder ensure GDPR, CCPA, and enterprise privacy compliance?",
    answer: "Insyder is SOC 2 Type II certified and fully compliant with GDPR, CCPA, and CASL regulations. We never harvest private consumer data or track individual personal browsing history. We honor opt-out requests instantly via our automated Global Privacy Control endpoint and maintain strict data minimization safeguards.",
    category: "Security",
  },
  {
    id: "faq-6",
    question: "Can reps generate meeting briefs automatically before calendar events?",
    answer: "Yes! With our Google Calendar and Outlook integration, Insyder detects upcoming discovery calls and delivers a custom 1-click meeting brief directly to the rep's Slack or email 15 minutes before the meeting starts, complete with talking points, past history, and key pain points.",
    category: "Implementation",
  },
];
