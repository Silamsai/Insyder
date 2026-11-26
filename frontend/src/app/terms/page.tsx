import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import LegalPage, { type LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = pageMeta({
  path: "/terms",
  title: "Insyder — Terms of service",
  description: "The terms that apply when you use the Insyder website and product.",
});

// Draft content: replace with your reviewed terms before launch.
const sections: LegalSection[] = [
  {
    heading: "About these terms",
    body: [
      "These terms apply to your use of the Insyder website and the Insyder product. By signing up or using Insyder, you agree to them on behalf of yourself and the organisation you represent.",
      "If your organisation has a signed agreement with us, that agreement takes priority where it differs from these terms.",
    ],
  },
  {
    heading: "Your account",
    body: [
      [
        "You must give accurate information when you sign up and keep it up to date.",
        "You are responsible for everyone you invite to your workspace and for keeping login details secure.",
        "Tell us promptly if you think your account has been accessed without permission.",
      ],
    ],
  },
  {
    heading: "Using Insyder",
    body: [
      "Insyder is a business-to-business tool for finding and researching companies and the professionals who work there. You agree not to:",
      [
        "Use Insyder to research private individuals outside a professional context.",
        "Send outreach that breaks marketing, privacy or anti-spam laws, or contact people who have opted out.",
        "Try to break, overload or reverse engineer the service, or access it in ways we have not allowed.",
        "Resell or share access to Insyder outside your organisation without our agreement.",
      ],
    ],
  },
  {
    heading: "Research and accuracy",
    body: [
      "Insyder gathers information from public sources and produces signals, account briefs and role hypotheses. Signals are reasons to ask a question, not proof that a company will buy. Role hypotheses are working hypotheses to check in conversation, not verified facts.",
      "Your team decides which accounts to pursue and what to say. You are responsible for checking information before you rely on it.",
    ],
  },
  {
    heading: "Research units and fees",
    body: [
      "Research runs on units from your workspace quota. We show you a search before units are spent. Fees, quotas and billing terms are set out in your order or plan. Unless stated otherwise, fees are non-refundable and exclude taxes.",
    ],
  },
  {
    heading: "Your data",
    body: [
      "You own the data you put into Insyder, including notes, briefs and CRM records. You give us permission to use it only to provide and support the service for you. Our Privacy policy explains how we handle personal information.",
    ],
  },
  {
    heading: "Our service",
    body: [
      "We own Insyder, including its software, design and content, apart from your data. We work to keep Insyder available and secure, but we may change features, and the service may sometimes be unavailable for maintenance or reasons outside our control.",
    ],
  },
  {
    heading: "Liability",
    body: [
      "Insyder is provided “as is”. To the extent the law allows, we are not liable for indirect or consequential losses, lost profits or lost opportunities, and our total liability in any 12-month period is limited to the fees you paid us in that period. Nothing in these terms limits liability that cannot be limited by law.",
    ],
  },
  {
    heading: "Ending your use",
    body: [
      "You can stop using Insyder at any time. We may suspend or close an account that breaks these terms. When an account closes, you can ask us to export your data within 30 days, after which we may delete it.",
    ],
  },
  {
    heading: "Changes, law and contact",
    body: [
      "We may update these terms and will change the date at the top when we do. Significant changes will be notified to account owners in advance.",
      "These terms are governed by the laws of England and Wales, and its courts have jurisdiction.",
      "Questions about these terms? Contact us through the Book a demo page and mark your message “Terms”.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of service"
      intro="The terms that apply when you use the Insyder website and product."
      updated="23 November 2026"
      sections={sections}
    />
  );
}
