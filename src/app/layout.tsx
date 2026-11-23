import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Insyder | Account Intelligence & First Meeting Preparation",
  description:
    "Find the right accounts. Walk into every first meeting prepared. Real-time buyer intent, verified contact intelligence, and 1-click meeting briefings for GTM teams.",
  keywords: [
    "account intelligence",
    "B2B intent data",
    "sales meeting preparation",
    "buyer committee mapping",
    "sales enablement",
    "crm enrichment",
  ],
  authors: [{ name: "Insyder Technologies" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="min-h-full flex flex-col bg-[#080d1a] text-slate-100 selection:bg-teal-400 selection:text-slate-950 font-sans">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
