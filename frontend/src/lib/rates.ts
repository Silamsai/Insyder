// Exchange rates from GBP, for showing approximate local prices on the Pricing page.
// Source: Frankfurter (European Central Bank reference rates, no API key). Cached for a day.
// Plans are always charged in GBP; these numbers are only a guide.

export const DISPLAY_CURRENCIES = ["GBP", "EUR", "USD", "INR", "AUD", "CAD", "SGD"] as const;
export type DisplayCurrency = (typeof DISPLAY_CURRENCIES)[number];

export type Rates = { date: string; rates: Partial<Record<DisplayCurrency, number>> };

export async function getGbpRates(): Promise<Rates | null> {
  try {
    const symbols = DISPLAY_CURRENCIES.filter((c) => c !== "GBP").join(",");
    const res = await fetch(`https://api.frankfurter.dev/v1/latest?base=GBP&symbols=${symbols}`, {
      next: { revalidate: 86_400 },
      signal: AbortSignal.timeout(8_000),
    });
    if (!res.ok) return null;
    const json = (await res.json()) as { date?: string; rates?: Record<string, number> };
    if (!json.rates) return null;
    const rates: Rates["rates"] = { GBP: 1 };
    for (const c of DISPLAY_CURRENCIES) if (typeof json.rates[c] === "number") rates[c] = json.rates[c];
    return { date: json.date ?? "", rates };
  } catch {
    return null; // the page still works in pounds only
  }
}
