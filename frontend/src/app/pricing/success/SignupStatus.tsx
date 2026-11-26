"use client";

import { useEffect, useState } from "react";
import { FiCheckCircle, FiMail } from "react-icons/fi";

type Status = { status: "processing" | "ready" | "failed"; plan?: string; emailHint?: string; loginUrl?: string };

/** Waits for the portal to finish creating the account (Stripe confirms payment a moment after the redirect). */
export default function SignupStatus({ sessionId }: { sessionId: string }) {
  const [s, setS] = useState<Status>({ status: "processing" });

  useEffect(() => {
    if (!sessionId) return;
    let stop = false;
    let tries = 0;
    async function poll() {
      tries++;
      try {
        const res = await fetch(`/api/signup/status?session_id=${encodeURIComponent(sessionId)}`, { cache: "no-store" });
        if (res.ok) {
          const body = (await res.json()) as Status;
          if (!stop) setS(body);
          if (body.status !== "processing") return;
        }
      } catch {
        // keep trying
      }
      if (!stop && tries < 20) setTimeout(poll, 2500);
    }
    void poll();
    return () => {
      stop = true;
    };
  }, [sessionId]);

  const ready = s.status === "ready";
  return (
    <div className="demo-form" style={{ maxWidth: "560px" }}>
      <p style={{ display: "flex", gap: "12px", alignItems: "center", margin: 0 }}>
        {ready ? (
          <FiCheckCircle size={26} aria-hidden="true" style={{ color: "#0E6B67", flexShrink: 0 }} />
        ) : (
          <FiMail size={26} aria-hidden="true" style={{ color: "#0E6B67", flexShrink: 0 }} />
        )}
        <b style={{ fontSize: "20px" }} role="status">
          {ready ? "Your workspace is ready" : s.status === "failed" ? "We're finishing your setup" : "Setting up your workspace…"}
        </b>
      </p>
      <p style={{ margin: "14px 0 0", fontSize: "15.5px", lineHeight: 1.55, color: "#34404F" }}>
        {ready
          ? `We've emailed your login details${s.emailHint ? ` to ${s.emailHint}` : ""}. Log in with the temporary password, then choose your own.`
          : s.status === "failed"
            ? "Your payment went through, but setting up your account is taking longer than usual. We'll email your login details shortly; if they don't arrive, contact us and we'll sort it out."
            : "Your payment went through. This usually takes a few seconds, and your login details will arrive by email."}
      </p>
      <p style={{ margin: "14px 0 0", fontSize: "14px", color: "#566070" }}>
        Can&apos;t see the email? Check your spam folder.
      </p>
      {s.loginUrl ? (
        <a className="btn b-ink" href={s.loginUrl} style={{ marginTop: "22px" }}>
          Go to login
        </a>
      ) : null}
    </div>
  );
}
