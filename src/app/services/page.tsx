import { SectionHeading } from "@/components/section-heading";
import { IconGlyph } from "@/components/icon-glyph";
import { services } from "@/lib/site-data";

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-shell">
            <span className="eyebrow">Our Services</span>
            <h1>Technology staffing and implementation services for enterprise scale.</h1>
            <p>We provide specialized teams and end-to-end support across data, applications, and operations.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container services-grid">
          {services.map((service) => (
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
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Delivery options"
            title="Flexible engagement model"
            description="Choose the support format aligned with your timeline and budget."
          />
          <div className="timeline">
            <article className="timeline-item reveal">
              <div className="timeline-kicker">
                <IconGlyph name="workflow" className="timeline-icon" />
                <span>Project-Based Teams</span>
              </div>
              <p>Cross-functional squads for outcomes with defined scope and deadlines.</p>
            </article>
            <article className="timeline-item reveal">
              <div className="timeline-kicker">
                <IconGlyph name="briefcase" className="timeline-icon" />
                <span>Staff Augmentation</span>
              </div>
              <p>Fast access to certified specialists who integrate with your internal teams.</p>
            </article>
            <article className="timeline-item reveal">
              <div className="timeline-kicker">
                <IconGlyph name="shield" className="timeline-icon" />
                <span>Managed Services</span>
              </div>
              <p>Ongoing support for platforms, infrastructure, and mission-critical operations.</p>
            </article>
            <article className="timeline-item reveal">
              <div className="timeline-kicker">
                <IconGlyph name="telescope" className="timeline-icon" />
                <span>Consulting Advisory</span>
              </div>
              <p>Strategic guidance for architecture, governance, and transformation planning.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
