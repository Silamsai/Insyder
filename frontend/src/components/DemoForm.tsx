"use client";

import { useRef, useState } from "react";
import { FiCheckCircle, FiAlertCircle } from "react-icons/fi";

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "ok" } | { kind: "error"; text: string };

export default function DemoForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const msgRef = useRef<HTMLParagraphElement>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/demo-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error || `Request failed (${res.status})`);
      form.reset();
      setStatus({ kind: "ok" });
    } catch (err) {
      const text =
        err instanceof TypeError
          ? "Could not reach the server. Check your connection and try again."
          : (err as Error).message;
      setStatus({ kind: "error", text });
    }
    requestAnimationFrame(() => msgRef.current?.focus());
  }

  return (
    <div className="demo-form">
      <h2>Request a demo</h2>
      <form onSubmit={onSubmit} noValidate>
        <div className="g2f">
          <div className="fl">
            <label htmlFor="d-n">Name</label>
            <input id="d-n" name="name" type="text" autoComplete="name" required />
          </div>
          <div className="fl">
            <label htmlFor="d-e">Work email</label>
            <input id="d-e" name="email" type="email" autoComplete="email" required />
          </div>
        </div>
        <div className="g2f">
          <div className="fl">
            <label htmlFor="d-c">Company</label>
            <input id="d-c" name="company" type="text" autoComplete="organization" />
          </div>
          <div className="fl">
            <label htmlFor="d-r">Your role</label>
            <input id="d-r" name="role" type="text" autoComplete="organization-title" />
          </div>
        </div>
        <div className="fl">
          <label htmlFor="d-w">Company website</label>
          <input id="d-w" name="website" type="url" autoComplete="url" />
        </div>
        <div className="fl">
          <label htmlFor="d-m">What would you like to see?</label>
          <textarea id="d-m" name="message" placeholder="Who you sell to, which signals matter, which CRM you use" />
        </div>
        {(status.kind === "ok" || status.kind === "error") && (
          <p
            ref={msgRef}
            className={status.kind === "ok" ? "msg" : "flag"}
            role="alert"
            tabIndex={-1}
            style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}
          >
            {status.kind === "ok" ? (
              <>
                <FiCheckCircle size={18} aria-hidden="true" style={{ flexShrink: 0, marginTop: "2px", color: "#7FD3CB" }} />
                Thanks, your request has been received. We’ll be in touch to arrange a time.
              </>
            ) : (
              <>
                <FiAlertCircle size={18} aria-hidden="true" style={{ flexShrink: 0, marginTop: "2px" }} />
                {status.text}
              </>
            )}
          </p>
        )}
        <button type="submit" className="btn b-ink" style={{ justifySelf: "start" }} disabled={status.kind === "sending"}>
          {status.kind === "sending" ? "Sending…" : "Request demo"}
        </button>
      </form>
    </div>
  );
}
