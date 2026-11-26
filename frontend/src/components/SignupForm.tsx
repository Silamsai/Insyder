"use client";

import { useRef, useState } from "react";
import { FiAlertCircle, FiLock } from "react-icons/fi";
import type { Plan } from "./plans";

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "error"; text: string };

/** Pricing → checkout: the buyer's details, then off to Stripe to pay. */
export default function SignupForm({ plan }: { plan: Plan }) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const msgRef = useRef<HTMLParagraphElement>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const data = { ...Object.fromEntries(new FormData(form).entries()), plan: plan.key };
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = (await res.json().catch(() => ({}))) as { url?: string; error?: string };
      if (!res.ok || !body.url) throw new Error(body.error || `Request failed (${res.status})`);
      window.location.assign(body.url); // Stripe Checkout
    } catch (err) {
      const text =
        err instanceof TypeError ? "Could not reach the server. Check your connection and try again." : (err as Error).message;
      setStatus({ kind: "error", text });
      requestAnimationFrame(() => msgRef.current?.focus());
    }
  }

  return (
    <div className="demo-form">
      <h2>Your details</h2>
      <p style={{ margin: "6px 0 0", color: "#566070", fontSize: "15px" }}>
        Your login details will be emailed to this address after payment.
      </p>
      <form onSubmit={onSubmit} noValidate>
        <div className="g2f">
          <div className="fl">
            <label htmlFor="s-n">Full name</label>
            <input id="s-n" name="name" type="text" autoComplete="name" required maxLength={120} />
          </div>
          <div className="fl">
            <label htmlFor="s-e">Work email</label>
            <input id="s-e" name="email" type="email" autoComplete="email" required maxLength={200} />
          </div>
        </div>
        <div className="g2f">
          <div className="fl">
            <label htmlFor="s-p">Phone number</label>
            <input id="s-p" name="phone" type="tel" autoComplete="tel" maxLength={40} />
          </div>
          <div className="fl">
            <label htmlFor="s-c">Company name</label>
            <input id="s-c" name="companyName" type="text" autoComplete="organization" required maxLength={200} />
          </div>
        </div>
        <div className="fl">
          <label htmlFor="s-w">Company website</label>
          <input id="s-w" name="website" type="text" inputMode="url" autoComplete="url" placeholder="yourcompany.com" maxLength={300} />
        </div>
        {status.kind === "error" && (
          <p ref={msgRef} className="flag" role="alert" tabIndex={-1} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
            <FiAlertCircle size={18} aria-hidden="true" style={{ flexShrink: 0, marginTop: "2px" }} />
            {status.text}
          </p>
        )}
        <button type="submit" className="btn b-ink" style={{ width: "100%" }} disabled={status.kind === "sending"}>
          {status.kind === "sending" ? "Opening secure payment…" : `Continue to payment · £${plan.price}/month`}
        </button>
        <p style={{ margin: 0, display: "flex", gap: "8px", alignItems: "center", justifyContent: "center", fontSize: "13px", color: "#566070" }}>
          <FiLock size={13} aria-hidden="true" /> Payment is handled securely by Stripe.
        </p>
      </form>
    </div>
  );
}
