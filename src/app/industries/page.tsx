import HeroShell from "@/components/hero-shell";
import { SectionHeading } from "@/components/section-heading";
import { IconGlyph } from "@/components/icon-glyph";
import { industries } from "@/lib/site-data";

export default function IndustriesPage() {
  return (
    <HeroShell
      eyebrow="Industry Expertise"
      title="Built for sector-specific complexity"
      titleClassName="hero-title-single-line"
      subtitle="We shape digital delivery models that fit the operational and compliance realities of each industry."
      align="center"
      tone="industries"
    >
      <section className="pro-block reveal">
        <SectionHeading
          eyebrow="Coverage"
          title="Sectors we support"
          description="Specialized teams and solution playbooks tailored for each domain."
          align="center"
        />
        <div className="values-grid pro-industry-grid section-balanced-grid">
          {industries.map((industry) => (
            <article className="card industry-card pro-industry-card" key={industry.title}>
              <div className="industry-card-head">
                <IconGlyph name={industry.icon} className="industry-icon" />
                <span className="industry-card-chip">Sector expertise</span>
              </div>
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pro-block reveal">
        <div className="cta pro-inline-cta">
          <div>
            <h3>Need a domain-focused implementation team?</h3>
            <p>We can assemble specialists aligned to your industry workflows and delivery standards.</p>
          </div>
          <span className="eyebrow">Advisory + execution + staffing</span>
        </div>
      </section>
    </HeroShell>
  );
}
