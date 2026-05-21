import HeroShell from "@/components/hero-shell";
import { SectionHeading } from "@/components/section-heading";
import { IconGlyph } from "@/components/icon-glyph";
import { capabilityPillars, values } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <HeroShell
      eyebrow="About SR Tek"
      title="Mission-driven staffing and consulting, built on trust."
      subtitle="We align business goals, delivery speed, and high-fit talent so your technology programs move with confidence."
      align="center"
    >
      <section className="pro-block reveal">
        <SectionHeading
          eyebrow="Who we are"
          title="A practical partner for real outcomes"
          description="SR Tek Solutions combines workforce strategy and engineering execution so organizations can scale without losing quality."
          align="center"
        />
        <article className="card story-card about-story-intro">
          <div className="story-flag">
            <IconGlyph name="building" className="story-icon" />
            <span>Our approach</span>
          </div>
          <div className="about-story-layout">
            <div className="about-story-copy">
              <p>
                We partner with leadership teams to design the right staffing and delivery model, then execute with
                clear ownership and measurable checkpoints.
              </p>
              <p>
                From specialist staffing to full engagement squads, we keep programs aligned to business priorities,
                budget, and timeline.
              </p>
            </div>
            <div className="about-story-points">
              <div className="about-story-point">
                <IconGlyph name="workflow" className="story-icon" />
                <div>
                  <strong>Delivery alignment</strong>
                  <p>Operating plans mapped to your roadmap, scope, and business targets.</p>
                </div>
              </div>
              <div className="about-story-point">
                <IconGlyph name="shield" className="story-icon" />
                <div>
                  <strong>Execution governance</strong>
                  <p>Clear accountability, quality checkpoints, and transparent reporting cadence.</p>
                </div>
              </div>
              <div className="about-story-point">
                <IconGlyph name="briefcase" className="story-icon" />
                <div>
                  <strong>Flexible engagement</strong>
                  <p>Scale from specialist staffing to full squads without losing momentum.</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="pro-block reveal">
        <SectionHeading
          eyebrow="Operating model"
          title="How delivery is structured"
          description="A clear four-part model that keeps programs readable, controlled, and outcome-focused."
          align="center"
        />
        <div className="about-operating-grid">
          {capabilityPillars.map((pillar) => (
            <article className="pillar-card" key={pillar.title}>
              <IconGlyph name={pillar.icon} className="pillar-icon" />
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pro-block reveal">
        <SectionHeading
          eyebrow="Values"
          title="How we work with clients"
          description="These principles shape every engagement and every team we build."
          align="center"
        />
        <div className="values-grid section-balanced-grid">
          {values.map((value) => (
            <article className="card value-card" key={value.title}>
              <IconGlyph name="badge" className="value-icon" />
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>
    </HeroShell>
  );
}
