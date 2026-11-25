"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import Logo from "./Logo";
import { PORTAL_LOGIN_URL, productLinks } from "./nav";

export default function Header() {
  const pathname = usePathname();
  const [ddOpen, setDdOpen] = useState(false);
  const [mobOpen, setMobOpen] = useState(false);
  const ddRef = useRef<HTMLDivElement>(null);
  const ddBtn = useRef<HTMLButtonElement>(null);

  const onProduct = productLinks.some((l) => l.href === pathname);
  const cur = (href: string) => (pathname === href ? "page" : undefined);

  // close menus on navigation
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setDdOpen(false);
    setMobOpen(false);
  }

  // close dropdown on outside click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ddRef.current && !ddRef.current.contains(e.target as Node)) setDdOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // focus the first link when the dropdown opens
  useEffect(() => {
    if (ddOpen) ddRef.current?.querySelector<HTMLAnchorElement>(".dd-m a")?.focus();
  }, [ddOpen]);

  // lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobOpen]);

  return (
    <header className="hd dk">
      <div className="w hd-in">
        <Link className="logo" href="/" aria-label="Insyder home">
          <Logo size={28} /> insyder
        </Link>
        <nav className="nav" aria-label="Main">
          <Link href="/about" className={pathname === "/about" ? "cur" : undefined} aria-current={cur("/about")}>
            About
          </Link>
          <div
            className="dd"
            ref={ddRef}
            onKeyDown={(e) => {
              if (e.key === "Escape" && ddOpen) {
                setDdOpen(false);
                ddBtn.current?.focus();
              }
            }}
            onBlur={(e) => {
              if (e.relatedTarget && !e.currentTarget.contains(e.relatedTarget as Node)) setDdOpen(false);
            }}
          >
            <button
              ref={ddBtn}
              type="button"
              className={`dd-b${onProduct ? " cur" : ""}`}
              aria-expanded={ddOpen}
              aria-controls="dd-product"
              onClick={(e) => {
                e.stopPropagation();
                setDdOpen((o) => !o);
              }}
            >
              Product <FiChevronDown size={12} aria-hidden="true" />
            </button>
            <div className="dd-m" id="dd-product" hidden={!ddOpen}>
              {productLinks.map((l) => (
                <Link key={l.href} href={l.href} aria-current={cur(l.href)}>
                  <b>{l.label}</b>
                  <span>{l.desc}</span>
                </Link>
              ))}
            </div>
          </div>
          <Link href="/solutions" className={pathname === "/solutions" ? "cur" : undefined} aria-current={cur("/solutions")}>
            Solutions by Teams
          </Link>
        </nav>
        <div className="hd-r">
          <a className="btn b-ln" style={{ minHeight: "44px" }} href={PORTAL_LOGIN_URL} target="_blank" rel="noopener noreferrer">
            Sign in
          </a>
          <Link className="btn b-hi" style={{ minHeight: "44px" }} href="/demo">
            Book a demo
          </Link>
        </div>
        <button
          type="button"
          className="mbtn"
          aria-expanded={mobOpen}
          aria-controls="mob-nav"
          aria-label={mobOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobOpen((o) => !o)}
        >
          {mobOpen ? <FiX size={20} aria-hidden="true" /> : <FiMenu size={20} aria-hidden="true" />}
        </button>
      </div>
      <nav className="mnav" id="mob-nav" aria-label="Mobile" hidden={!mobOpen}>
        <Link className="ml" href="/" aria-current={cur("/")}>Home</Link>
        <Link className="ml" href="/about" aria-current={cur("/about")}>About</Link>
        <span className="grp">Product</span>
        {productLinks.map((l) => (
          <Link key={l.href} className="sub" href={l.href} aria-current={cur(l.href)}>
            {l.label}
          </Link>
        ))}
        <Link className="ml" href="/solutions" aria-current={cur("/solutions")}>Solutions by Teams</Link>
        <a className="btn b-ln" href={PORTAL_LOGIN_URL} target="_blank" rel="noopener noreferrer">Sign in</a>
        <Link className="btn b-hi" href="/demo" style={{ marginTop: "6px" }}>Book a demo</Link>
      </nav>
    </header>
  );
}
