import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Schibsted_Grotesk } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_NAME, SITE_URL, jsonLdScript, organizationJsonLd } from "@/lib/seo";
import ScrollReveal from "@/components/ScrollReveal";
import "./globals.css";

// Self-hosted by Next.js at build time, so every visitor gets the same fonts
const geist = Geist({ subsets: ["latin"], variable: "--nf-geist", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--nf-geist-mono", display: "swap" });
const schibsted = Schibsted_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--nf-schibsted", display: "swap" });

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: "Insyder — Account intelligence for revenue teams",
  description:
    "Find the right accounts, see the evidence, find who decides and walk into every first meeting prepared.",
  openGraph: { siteName: SITE_NAME, type: "website", locale: "en_GB" },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${geist.variable} ${geistMono.variable} ${schibsted.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(organizationJsonLd)} />
        <div className="v2">
          <a className="skip" href="#main">
            Skip to content
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <ScrollReveal />
        </div>
      </body>
    </html>
  );
}
