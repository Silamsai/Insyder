import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Insyder — Privacy policy",
  description: "How Insyder collects, uses and protects personal information.",
};

// Draft content: replace with your reviewed policy before launch.
const sections: LegalSection[] = [
  {
    heading: "Who we are",
    body: [
      "Insyder provides account intelligence software for revenue teams. This policy explains how we handle personal information when you visit our website, request a demo, sign up, or use the Insyder product.",
      "For information processed inside the product on behalf of our customers, our customer is the controller and Insyder acts as a processor under our agreement with them.",
    ],
  },
  {
    heading: "Information we collect",
    body: [
      "We collect only what we need to provide and improve our service:",
      [
        "Details you give us, such as your name, work email, company, role and website when you request a demo or sign up.",
        "Account information for users of the product, such as login details, workspace settings and team membership.",
        "Business contact information found in public sources (for example company websites, press releases, job listings and professional profiles) when our customers run research in Insyder.",
        "Basic technical information, such as browser type and pages visited, needed to run and secure the website.",
      ],
    ],
  },
  {
    heading: "How we use information",
    body: [
      [
        "To respond to demo requests and sign-ups, and to set up your workspace.",
        "To provide the product, including research, account briefs, contact profiling and CRM sync.",
        "To keep the service secure, prevent misuse and fix problems.",
        "To meet legal, tax and accounting obligations.",
      ],
      "We do not sell personal information, and we do not use it for advertising.",
    ],
  },
  {
    heading: "Legal basis",
    body: [
      "Where data protection law such as the UK GDPR applies, we rely on: performing our contract with you; our legitimate interests in running and improving a business-to-business service; your consent where we ask for it; and compliance with legal obligations.",
    ],
  },
  {
    heading: "Contacts found through research",
    body: [
      "Contact profiles in Insyder are built from public, professional sources and are marked unverified until a person on the customer's team checks them. Every contact lists the source it was found in.",
      "Role hypotheses describe a professional role, not a person's private life or personality. Opted-out contacts are never sent to a CRM.",
      "If you believe Insyder holds information about you, contact us and we will help you exercise your rights, working with the relevant customer where needed.",
    ],
  },
  {
    heading: "Sharing",
    body: [
      "We share personal information only with:",
      [
        "Service providers who host, run or support Insyder for us, under written agreements.",
        "The CRM systems and partners our customers choose to connect, limited to the fields they permit.",
        "Authorities, where the law requires it.",
      ],
    ],
  },
  {
    heading: "Retention",
    body: [
      "We keep personal information only as long as we need it for the purposes above. Demo requests and sign-ups that do not become customers are deleted after 24 months. Customer data is deleted or returned when an agreement ends, in line with that agreement.",
    ],
  },
  {
    heading: "Security",
    body: [
      "We use role-based access, separate workspaces, encryption in transit and access logging to protect information. No system is perfectly secure, but we work to protect your information and will notify affected parties of a breach where the law requires it.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      "Depending on where you live, you may have the right to access, correct, delete or restrict the use of your personal information, to object to processing, and to data portability. You can also complain to your local data protection authority (in the UK, the Information Commissioner's Office).",
    ],
  },
  {
    heading: "Changes and contact",
    body: [
      "We may update this policy from time to time and will change the date at the top when we do.",
      "Questions about privacy? Contact us through the Book a demo page and mark your message “Privacy”.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      intro="How Insyder collects, uses and protects personal information."
      updated="23 November 2026"
      sections={sections}
    />
  );
}
