import HeroShell from "@/components/hero-shell";
import { SectionHeading } from "@/components/section-heading";
import { IconGlyph } from "@/components/icon-glyph";
import { capabilityPillars, values } from "@/lib/site-data";

const capabilityImages: Record<string, string> = {
  Strategy: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1200",
  Talent: "https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg?auto=compress&cs=tinysrgb&w=1200",
  Execution: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200",
  Trust: "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

const valueImages: Record<string, string> = {
  Integrity: "https://images.pexels.com/photos/3182743/pexels-photo-3182743.jpeg?auto=compress&cs=tinysrgb&w=1200",
  Respect: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200",
  Trust: "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1200",
  Teamwork: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "Mission-Driven Approach": "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "Continuous Improvement": "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

export default function AboutPage() {
  return (
    <HeroShell
      title="Mission-driven staffing and consulting, built on trust."
      titleClassName="about-hero-title-fit"
      subtitle="We align business goals, delivery speed, and high-fit talent so your technology programs move with confidence."
      align="center"
      tone="about"
    >
      <section className="pro-block reveal">
        <SectionHeading
          title="How delivery is structured"
          description="A clear four-part model that keeps programs readable, controlled, and outcome-focused."
          align="center"
        />
        <div className="about-operating-grid">
          {capabilityPillars.map((pillar) => (
            <article className="pillar-card" key={pillar.title}>
              <div
                className="page-card-media"
                style={{ backgroundImage: `url(${capabilityImages[pillar.title]})` }}
                aria-hidden="true"
              />
              <h3 className="tile-title-row">
                <IconGlyph name={pillar.icon} className="pillar-icon tile-title-icon" />
                <span>{pillar.title}</span>
              </h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pro-block reveal">
        <SectionHeading
          title="How we work with clients"
          description="These principles shape every engagement and every team we build."
          align="center"
        />
        <div className="values-grid section-balanced-grid">
          {values.map((value) => (
            <article className="card value-card" key={value.title}>
              <div
                className="page-card-media"
                style={{ backgroundImage: `url(${valueImages[value.title]})` }}
                aria-hidden="true"
              />
              <h3 className="tile-title-row">
                <IconGlyph name="badge" className="value-icon tile-title-icon" />
                <span>{value.title}</span>
              </h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>
    </HeroShell>
  );
}
