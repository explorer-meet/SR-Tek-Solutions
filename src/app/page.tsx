import Link from "next/link";
import { IconGlyph } from "@/components/icon-glyph";
import { SectionHeading } from "@/components/section-heading";
import { TechnologyLogo } from "@/components/technology-logo";
import { heroSignals, industries, services, siteMeta, techStack } from "@/lib/site-data";

const solutionPreview = [
  {
    title: "Digital Core Modernization",
    description: "Modernize legacy landscapes with phased architecture upgrades.",
    icon: "workflow" as const,
  },
  {
    title: "Data & AI Foundation",
    description: "Build governed data platforms and AI-ready pipelines.",
    icon: "layers" as const,
  },
  {
    title: "Cloud Transformation",
    description: "Migrate and optimize workloads with secure cloud operations.",
    icon: "cloud" as const,
  },
  {
    title: "Secure Delivery",
    description: "Embed security controls across architecture and release flow.",
    icon: "shield" as const,
  },
];

const caseStudyPreview = [
  {
    title: "Healthcare Data Platform",
    impact: "Reporting cycle time reduced by 45% with governed pipelines.",
    icon: "headset" as const,
  },
  {
    title: "Retail Cloud Migration",
    impact: "Release speed improved 2.3x through cloud-native delivery.",
    icon: "cloud" as const,
  },
  {
    title: "Financial Risk Operations",
    impact: "Compliance visibility strengthened with real-time controls.",
    icon: "shield" as const,
  },
];

const careersPreview = [
  {
    title: "Open roles",
    description: "Engineering, data, QA, and cloud opportunities.",
    icon: "briefcase" as const,
  },
  {
    title: "Growth path",
    description: "Structured mentorship, ownership, and skill acceleration.",
    icon: "telescope" as const,
  },
  {
    title: "Modern stack",
    description: "Hands-on work with enterprise-grade tools and platforms.",
    icon: "badge" as const,
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Technology Staffing and Consulting</span>
            <h1>You are building the future. We build the teams and platforms behind it.</h1>
            <p className="hero-lead">
              High-fit IT talent and delivery expertise across ERP, CRM, cloud, security, and modern apps.
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
            <div className="hero-stage-glow hero-stage-glow-a" />
            <div className="hero-stage-glow hero-stage-glow-b" />
            <div className="hero-stage-glow hero-stage-glow-c" />

            <div className="hero-command-card">
              <div className="hero-card-label">
                <IconGlyph name="sparkles" className="card-icon" />
                <span>Delivery command center</span>
              </div>
              <h3>Execution visibility at every phase</h3>
              <p>From strategy to deployment, every lane has accountable owners and clear momentum.</p>

              <div className="hero-command-metrics">
                <div className="hero-command-metric">
                  <strong>24h</strong>
                  <span>Staffing response</span>
                </div>
                <div className="hero-command-metric">
                  <strong>97%</strong>
                  <span>Sprint reliability</span>
                </div>
                <div className="hero-command-metric">
                  <strong>2.3x</strong>
                  <span>Delivery velocity</span>
                </div>
              </div>
            </div>

            <div className="hero-track-grid">
              <div className="hero-track-row">
                <div className="hero-track-label">
                  <IconGlyph name="telescope" className="card-icon" />
                  <span>Strategy</span>
                </div>
                <div className="hero-track-bar">
                  <span style={{ width: "86%" }} />
                </div>
              </div>
              <div className="hero-track-row">
                <div className="hero-track-label">
                  <IconGlyph name="workflow" className="card-icon" />
                  <span>Execution</span>
                </div>
                <div className="hero-track-bar">
                  <span style={{ width: "92%" }} />
                </div>
              </div>
              <div className="hero-track-row">
                <div className="hero-track-label">
                  <IconGlyph name="shield" className="card-icon" />
                  <span>Governance</span>
                </div>
                <div className="hero-track-bar">
                  <span style={{ width: "88%" }} />
                </div>
              </div>
            </div>

            <div className="hero-status-row">
              <span className="hero-status-live">Live delivery sync</span>
              <span className="hero-status-chip">Weekly roadmap checkpoints</span>
            </div>

            <div className="hero-gridline" />
          </aside>
        </div>
      </section>

      <section className="section landing-services">
        <div className="container">
          <div className="landing-shell landing-shell-services">
            <SectionHeading
              eyebrow="Services"
              title="Specialized services for high-stakes programs"
              titleClassName="services-title-single-line"
              action={
                <Link className="btn btn-secondary" href="/services" prefetch>
                  View All Services
                </Link>
              }
            />
            <div className="services-grid pro-services-grid section-balanced-grid">
              {services.slice(0, 6).map((service) => (
                <article className="service-card service-card-fancy reveal" key={service.title}>
                  <h3 className="tile-title-row">
                    <IconGlyph name={service.icon} className="service-icon tile-title-icon" />
                    <span>{service.title}</span>
                  </h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section landing-industries">
        <div className="container">
          <div className="landing-shell landing-shell-industries">
            <SectionHeading
              eyebrow="Industries"
              title="Domain-aligned expertise"
              action={
                <Link className="btn btn-secondary" href="/industries" prefetch>
                  Explore Industries
                </Link>
              }
            />
            <div className="values-grid pro-industry-grid section-balanced-grid">
              {industries.slice(0, 6).map((industry) => (
                <article className="card industry-card pro-industry-card reveal" key={industry.title}>
                  <h3 className="tile-title-row">
                    <IconGlyph name={industry.icon} className="industry-icon tile-title-icon" />
                    <span>{industry.title}</span>
                  </h3>
                  <p>{industry.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section landing-solutions">
        <div className="container">
          <div className="landing-shell landing-shell-solutions">
            <SectionHeading
              eyebrow="Solutions"
              title="Integrated tracks for transformation"
              titleClassName="landing-heading-single-line"
              action={
                <Link className="btn btn-secondary" href="/solutions" prefetch>
                  Explore Solutions
                </Link>
              }
            />
            <div className="services-grid pro-services-grid section-balanced-grid">
              {solutionPreview.map((track) => (
                <article className="service-card service-card-fancy reveal" key={track.title}>
                  <h3 className="tile-title-row">
                    <IconGlyph name={track.icon} className="service-icon tile-title-icon" />
                    <span>{track.title}</span>
                  </h3>
                  <p>{track.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section landing-case-studies">
        <div className="container">
          <div className="landing-shell landing-shell-case-studies">
            <SectionHeading
              eyebrow="Case Studies"
              title="Proof from real delivery programs"
              titleClassName="landing-heading-single-line"
              action={
                <Link className="btn btn-secondary" href="/case-studies" prefetch>
                  View Case Studies
                </Link>
              }
            />
            <div className="values-grid pro-case-grid section-balanced-grid">
              {caseStudyPreview.map((study) => (
                <article className="card value-card pro-case-card reveal" key={study.title}>
                  <h3 className="tile-title-row">
                    <IconGlyph name={study.icon} className="value-icon tile-title-icon" />
                    <span>{study.title}</span>
                  </h3>
                  <p>{study.impact}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section landing-careers">
        <div className="container">
          <div className="landing-shell landing-shell-careers">
            <SectionHeading
              eyebrow="Careers"
              title="Build your career on high-impact work"
              titleClassName="landing-heading-single-line"
              action={
                <Link className="btn btn-secondary" href="/careers" prefetch>
                  Explore Careers
                </Link>
              }
            />
            <div className="values-grid pro-case-grid section-balanced-grid">
              {careersPreview.map((item) => (
                <article className="card value-card pro-case-card reveal" key={item.title}>
                  <h3 className="tile-title-row">
                    <IconGlyph name={item.icon} className="value-icon tile-title-icon" />
                    <span>{item.title}</span>
                  </h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section landing-technologies">
        <div className="container">
          <div className="landing-shell landing-shell-technologies">
            <SectionHeading
              eyebrow="Technologies"
              title="Tools used across active delivery programs"
              titleClassName="landing-heading-single-line"
              action={
                <Link className="btn btn-secondary" href="/careers" prefetch>
                  Explore Careers
                </Link>
              }
            />
            <div className="values-grid pro-case-grid section-balanced-grid">
              {techStack.map((tech) => (
                <article className="card value-card pro-case-card tech-stack-card reveal" key={tech.name}>
                  <h3 className="tile-title-row">
                    <TechnologyLogo name={tech.logo} className="tech-logo-icon" />
                    <span>{tech.name}</span>
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section landing-contact">
        <div className="container">
          <div className="landing-shell landing-shell-contact">
            <SectionHeading
              eyebrow="Contact"
              title="Start a focused conversation"
              titleClassName="landing-heading-single-line"
              description="Talk to our team for staffing strategy, solution planning, and execution support."
              action={
                <Link className="btn btn-primary" href="/contact" prefetch>
                  Contact Us
                </Link>
              }
            />
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
        </div>
      </section>

    </main>
  );
}
