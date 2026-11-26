import type { Metadata } from "next";
import SignupStatus from "./SignupStatus";

export const metadata: Metadata = {
  title: "Insyder — Payment received",
  description: "Thanks for choosing Insyder. Your login details are on their way.",
  robots: { index: false, follow: false },
};

export default async function SuccessPage({ searchParams }: { searchParams: Promise<{ session_id?: string }> }) {
  const { session_id: sessionId = "" } = await searchParams;
  return (
    <section className="pg-hero dk" aria-labelledby="pg-h">
      <div className="w">
        <span className="kick" style={{ display: "block", marginTop: "28px" }}>
          Payment received
        </span>
        <h1 className="h1" id="pg-h" style={{ fontSize: "clamp(40px, 4.6vw, 64px)" }}>
          Thanks for choosing Insyder.
        </h1>
        <div style={{ marginTop: "32px" }}>
          <SignupStatus sessionId={sessionId} />
        </div>
      </div>
    </section>
  );
}
