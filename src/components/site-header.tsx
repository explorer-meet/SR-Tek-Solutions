"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Mail, Menu, Phone, Sparkles, X } from "lucide-react";
import { navItems, siteMeta } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-topbar">
        <div className="container topbar-inner">
          <div className="topbar-pill">
            <Sparkles size={14} />
            <span>20+ years of delivery experience</span>
          </div>
          <div className="topbar-links">
            <Link href={`tel:${siteMeta.phones[0]}`} className="topbar-link">
              <Phone size={14} />
              <span>{siteMeta.phones[0]}</span>
            </Link>
            <Link href={`mailto:${siteMeta.email}`} className="topbar-link">
              <Mail size={14} />
              <span>{siteMeta.email}</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="container header-inner">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          <Image src="/brand/logo.svg" alt={`${siteMeta.name} logo`} width={170} height={42} priority />
        </Link>
        <button
          className="menu-btn"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
        <nav className={`site-nav ${open ? "open" : ""}`}>
          <ul className="nav-list">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`nav-link ${active ? "active" : ""}`}
                    prefetch
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="header-cta">
          <Link className="btn btn-secondary" href="/contact" prefetch>
            Talk to Team <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </header>
  );
}
