import Link from "next/link";
import { IconGlyph } from "@/components/icon-glyph";
import { SectionHeading } from "@/components/section-heading";
import { heroSignals, industries, services, siteMeta } from "@/lib/site-data";
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
              <Link className="btn btn-primary" href="/services" prefetch>
                Explore Services
              </Link>
              <Link className="btn btn-secondary" href="/about" prefetch>
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

      <section className="section landing-services">
        <div className="container">
          <SectionHeading
            eyebrow="Services"
            title="Specialized services for high-stakes programs"
            description="A portfolio built for enterprise delivery across engineering, data, cloud, and staffing."
            action={
              <Link className="btn btn-secondary" href="/services" prefetch>
                View All Services
              </Link>
            }
          />
          <div className="services-grid pro-services-grid section-balanced-grid">
            {services.slice(0, 6).map((service) => (
              <article className="service-card service-card-fancy reveal" key={service.title}>
                <div className="service-topline">
                  <span className="service-tag">{service.category}</span>
                  <IconGlyph name={service.icon} className="service-icon" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section landing-industries">
        <div className="container">
          <SectionHeading
            eyebrow="Industries"
            title="Domain-aligned expertise"
            description="We adapt teams and solution patterns to the operational reality of each sector."
            action={
              <Link className="btn btn-secondary" href="/industries" prefetch>
                Explore Industries
              </Link>
            }
          />
          <div className="values-grid pro-industry-grid section-balanced-grid">
            {industries.slice(0, 6).map((industry) => (
              <article className="card industry-card pro-industry-card reveal" key={industry.title}>
                <div className="industry-card-head">
                  <IconGlyph name={industry.icon} className="industry-icon" />
                  <span className="industry-card-chip">Industry lane</span>
                </div>
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section landing-contact">
        <div className="container">
          <div className="cta pro-contact-cta reveal">
            <div>
              <h3>Need the right team for your next initiative?</h3>
              <p>
                Connect with SR Tek for delivery planning, specialist staffing, and execution support.
              </p>
              <div className="landing-contact-points">
                <span>
                  <IconGlyph name="briefcase" className="signal-icon" />
                  {siteMeta.phones[0]}
                </span>
                <span>
                  <IconGlyph name="sparkles" className="signal-icon" />
                  {siteMeta.email}
                </span>
              </div>
            </div>
            <Link className="btn btn-primary" href="/contact" prefetch>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
