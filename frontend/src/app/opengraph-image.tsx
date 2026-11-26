import { ImageResponse } from "next/og";

// Social share card (LinkedIn, Slack, X, WhatsApp). Used by every page unless a page adds its own.
export const alt = "Insyder: account intelligence for revenue teams";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #0D1B2A 0%, #112A3C 60%, #0E3B44 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: "#7FD3CB" }} />
          <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: "-0.02em" }}>Insyder</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 26, color: "#7FD3CB", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Account intelligence for revenue teams
          </div>
          <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.03em", maxWidth: 1000 }}>
            Find the right accounts. Walk into every first meeting prepared.
          </div>
        </div>
        <div style={{ fontSize: 26, color: "#B8C3CF" }}>Buying signals · Evidence · Decision makers · CRM sync</div>
      </div>
    ),
    size,
  );
}
