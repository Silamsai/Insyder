import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Schibsted_Grotesk } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

// Self-hosted by Next.js at build time, so every visitor gets the same fonts
const geist = Geist({ subsets: ["latin"], variable: "--nf-geist", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--nf-geist-mono", display: "swap" });
const schibsted = Schibsted_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--nf-schibsted", display: "swap" });

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export const metadata: Metadata = {
  title: "Insyder — Account intelligence for revenue teams",
  description:
    "Find the right accounts, see the evidence, find who decides and walk into every first meeting prepared.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${geist.variable} ${geistMono.variable} ${schibsted.variable}`}>
      <body>
        <div className="v2">
          <a className="skip" href="#main">
            Skip to content
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
