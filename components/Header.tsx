"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" }
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header id="banner">
      <div className="top_bar">
        <div className="wrapper top_bar_con">
          <div className="top_meta">
            <a href="tel:+6332XXXXXXX">Tel: +63 32 XXX XXXX</a>
            <a href="mailto:info@apexbuild.ph">info@apexbuild.ph</a>
          </div>
          <span>PCAB Licensed · Serving Cebu</span>
        </div>
      </div>
      <div className="wrapper header_con">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          <span className="logo_mark">A</span>
          <span className="logo_text">
            <strong>Apex Build</strong>
            <span>Philippines</span>
          </span>
        </Link>
        <button
          className="menu_toggle"
          type="button"
          aria-expanded={open}
          aria-controls="nav_area"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
        <nav id="nav_area" className={`page_nav${open ? " open" : ""}`}>
          <ul>
            {links.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={pathname === item.href ? "active" : ""}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="nav_cta" onClick={() => setOpen(false)}>
                Get a Quote
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
