import Link from "next/link";
import { IconGlyph } from "@/components/icon-glyph";
import { heroSignals } from "@/lib/site-data";
import { HomeScrollStory } from "@/components/home-scroll-story";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Technology Staffing and Consulting</span>
            <h1>You are building the future. We build the teams and platforms behind it.</h1>
            <p className="hero-lead">
              SR Tek Solutions provides on-demand access to high-performance IT talent and implementation expertise
              across ERP, CRM, e-commerce, security, and enterprise applications.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/services">
                Explore Services
              </Link>
              <Link className="btn btn-secondary" href="/about">
                About SR Tek
              </Link>
            </div>
            <div className="signal-strip">
              {heroSignals.map((signal) => (
                <div className="signal-pill" key={signal.label}>
                  <IconGlyph name={signal.icon} className="signal-icon" />
                  <div>
                    <strong>{signal.value}</strong>
                    <span>{signal.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="hero-art" aria-label="Visual summary">
            <div className="orb orb-a" />
            <div className="orb orb-b" />
            <div className="orb orb-c" />
            <div className="hero-card hero-card-main">
              <div className="hero-card-label">
                  <IconGlyph name="sparkles" className="card-icon" />
                <span>Delivery pulse</span>
              </div>
              <h3>Fast, focused, reliable</h3>
              <p>Capability-led teams aligned to your roadmap and business language.</p>
            </div>
            <div className="hero-card hero-card-floating hero-card-left">
              <IconGlyph name="telescope" className="card-icon" />
              <span>Strategy</span>
            </div>
            <div className="hero-card hero-card-floating hero-card-right">
              <IconGlyph name="workflow" className="card-icon" />
              <span>Execution</span>
            </div>
            <div className="hero-gridline" />
          </aside>
        </div>
      </section>

      <HomeScrollStory />

      <section className="section">
        <div className="container cta">
          <div>
            <h3>Ready to scale with confidence?</h3>
            <p>Let us design the right staffing and solutions model for your next initiative.</p>
          </div>
          <Link className="btn btn-secondary" href="/contact">
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
