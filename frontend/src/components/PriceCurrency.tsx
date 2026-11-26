"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { DisplayCurrency, Rates } from "@/lib/rates";

const LABELS: Record<DisplayCurrency, string> = {
  GBP: "£ GBP · UK pound",
  EUR: "€ EUR · Euro",
  USD: "$ USD · US dollar",
  INR: "₹ INR · Indian rupee",
  AUD: "A$ AUD · Australian dollar",
  CAD: "C$ CAD · Canadian dollar",
  SGD: "S$ SGD · Singapore dollar",
};

type Ctx = { currency: DisplayCurrency; rate: number };
const CurrencyCtx = createContext<Ctx>({ currency: "GBP", rate: 1 });

/** Pricing page: GBP is the real price; another currency shows an approximate conversion. */
export function CurrencyProvider({ rates, children }: { rates: Rates | null; children: ReactNode }) {
  const [currency, setCurrency] = useState<DisplayCurrency>("GBP");
  const available = (Object.keys(LABELS) as DisplayCurrency[]).filter((c) => c === "GBP" || rates?.rates[c]);
  const rate = currency === "GBP" ? 1 : (rates?.rates[currency] ?? 1);

  return (
    <CurrencyCtx.Provider value={{ currency, rate }}>
      {available.length > 1 ? (
        <div className="cur-pick">
          <label htmlFor="cur-select">Show prices in</label>
          <select id="cur-select" value={currency} onChange={(e) => setCurrency(e.target.value as DisplayCurrency)}>
            {available.map((c) => (
              <option key={c} value={c}>
                {LABELS[c]}
              </option>
            ))}
          </select>
          {currency !== "GBP" ? (
            <p>
              Approximate, at today&apos;s exchange rate{rates?.date ? ` (${rates.date})` : ""}. You&apos;re always billed in UK pounds; your bank sets the final amount.
            </p>
          ) : null}
        </div>
      ) : null}
      {children}
    </CurrencyCtx.Provider>
  );
}

/** A plan's monthly price: £ by default, or ≈ the chosen currency with the £ amount underneath. */
export function PlanPrice({ gbp }: { gbp: number }) {
  const { currency, rate } = useContext(CurrencyCtx);
  if (currency === "GBP") {
    return (
      <div className="plan-price">
        <p>
          <span className="cur">£</span>
          <b>{gbp}</b>
          <span className="per">/ month</span>
        </p>
        <small>Per company · billed monthly in GBP</small>
      </div>
    );
  }
  const amount = new Intl.NumberFormat("en-GB", { style: "currency", currency, maximumFractionDigits: 0 }).format(Math.round(gbp * rate));
  return (
    <div className="plan-price">
      <p>
        <span className="approx">≈</span>
        <b className="conv">{amount}</b>
        <span className="per">/ month</span>
      </p>
      <small>Billed as £{gbp} / month in GBP</small>
    </div>
  );
}
