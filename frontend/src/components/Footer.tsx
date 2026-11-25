import Link from "next/link";
import Logo from "./Logo";
import { productLinks } from "./nav";

export default function Footer() {
  return (
    <footer className="ft dk">
      <div className="w">
        <div className="ft-in">
          <div>
            <Link className="logo" href="/" aria-label="Insyder home">
              <Logo size={28} /> insyder
            </Link>
            <p style={{ marginTop: "12px", maxWidth: "22em", lineHeight: "1.5" }}>
              Account intelligence for revenue teams. Know who to call, and what to say.
            </p>
          </div>
          <div>
            <h4>Product</h4>
            <ul>
              {productLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Solutions</h4>
            <ul>
              <li><Link href="/solutions">Solutions by Teams</Link></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/demo">Book a demo</Link></li>
              <li><Link href="/privacy">Privacy policy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="ft-base">
          <span>© {new Date().getFullYear()} Insyder</span>
        </div>
      </div>
    </footer>
  );
}
