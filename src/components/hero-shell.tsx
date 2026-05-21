import React from "react";

interface HeroShellProps {
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center" | "right";
  children?: React.ReactNode;
  eyebrow?: string;
  titleClassName?: string;
  tone?: "about" | "services" | "industries" | "solutions" | "case-studies" | "clients" | "careers" | "contact";
}

export default function HeroShell({
  title,
  subtitle,
  align = "center",
  children,
  eyebrow,
  titleClassName,
  tone,
}: HeroShellProps) {
  return (
    <main>
      <section className="page-hero pro-page-hero">
        <div className="container">
          <div className={`page-hero-shell pro-page-hero-shell align-${align}${tone ? ` hero-tone-${tone}` : ""}`}>
            {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
            <h1 className={titleClassName}>{title}</h1>
            {subtitle ? <p>{subtitle}</p> : null}
          </div>
        </div>
      </section>
      <section className="section pro-page-content">
        <div className="container pro-page-content-inner">
          {children}
        </div>
      </section>
    </main>
  );
}
