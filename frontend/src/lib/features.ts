/**
 * Feature switches. Pricing is hidden for demos: set NEXT_PUBLIC_SHOW_PRICING=true to bring it back
 * (nav links, footer, sitemap and the /pricing pages). Nothing is deleted while it is off.
 */
export const SHOW_PRICING = process.env.NEXT_PUBLIC_SHOW_PRICING === "true";
