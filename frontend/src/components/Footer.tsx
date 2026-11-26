import Link from "next/link";
import Logo from "./Logo";
import { productLinks } from "./nav";

const groups: { title: string; links: { href: string; label: string }[] }[] = [
  { title: "Product", links: productLinks },
  { title: "Solutions", links: [{ href: "/solutions", label: "Solutions by Teams" }] },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/demo", label: "Book a demo" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="ft dk">
      <div className="w">
        <div className="ft-in">
          <div className="ft-brand">
            <Link className="logo" href="/" aria-label="Insyder home">
              <Logo size={40} /> insyder
            </Link>
            <p className="ft-tag">
              Account intelligence for revenue teams. Know who to call, and what to say.
            </p>
            <Link className="btn b-hi ft-cta" href="/demo">
              Book a demo
            </Link>
          </div>
          {groups.map((g) => (
            <nav className="ft-col" key={g.title} aria-label={g.title}>
              <h4>{g.title}</h4>
              <ul>
                {g.links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="ft-base">
          <span>© {new Date().getFullYear()} Insyder. All rights reserved.</span>
          <nav className="ft-legal" aria-label="Legal">
            <Link href="/privacy">Privacy policy</Link>
            <Link href="/terms">Terms</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
