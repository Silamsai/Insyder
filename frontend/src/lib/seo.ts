import type { Metadata } from "next";

/** Public site address, used for canonical links, the sitemap and social previews. Set NEXT_PUBLIC_SITE_URL in production. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001").replace(/\/+$/, "");
export const SITE_NAME = "Insyder";

// The shared share card from app/opengraph-image.tsx. Pages that set openGraph would otherwise drop it.
const OG_IMAGE = { url: "/opengraph-image", width: 1200, height: 630, alt: "Insyder: account intelligence for revenue teams" };

/** Per-page metadata: title, description, canonical URL, and matching Open Graph / Twitter tags. */
export function pageMeta({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: SITE_NAME, type: "website", locale: "en_GB", images: [OG_IMAGE] },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE.url] },
  };
}

/** Site-wide structured data (schema.org) for search engines. */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#org`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/assets/logo.svg`,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#org` },
      inLanguage: "en-GB",
    },
    {
      "@type": "SoftwareApplication",
      name: SITE_NAME,
      url: SITE_URL,
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Sales intelligence",
      operatingSystem: "Web",
      description:
        "Account intelligence software for B2B revenue teams: finds companies showing buying signals, keeps the evidence, identifies decision makers, prepares a role hypothesis for each and syncs accepted accounts to HubSpot or Salesforce.",
      publisher: { "@id": `${SITE_URL}/#org` },
    },
  ],
};

/** FAQPage structured data from question/answer pairs. */
export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
}

/** Renders a JSON-LD script tag. `<` is escaped so content can never close the script early. */
export function jsonLdScript(data: object) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
