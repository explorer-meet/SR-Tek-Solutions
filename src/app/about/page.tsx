import { SectionHeading } from "@/components/section-heading";
import { IconGlyph } from "@/components/icon-glyph";
import { values } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-shell">
            <span className="eyebrow">About SR Tek</span>
            <h1>Mission-driven staffing and consulting built on trust.</h1>
            <p>
              We align businesses with exceptional technology talent and practical solutions that deliver measurable
              outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container columns-2">
          <article className="card story-card reveal">
            <div className="story-flag">
              <IconGlyph name="building" className="story-icon" />
              <span>Why clients choose us</span>
            </div>
            <h3>Who We Are</h3>
            <p>
              SR Tek Solutions was founded on the principle of matching organizations with the right people and
              capabilities. Our understanding of labor markets, business priorities, and modern technology helps us
              deliver quality placements that accelerate delivery.
            </p>
            <p>
              As companies scale, culture and productivity can diverge. We work closely with leadership teams to build
              workforce plans that preserve quality while driving growth.
            </p>
          </article>
          <div className="stats">
            <article className="stat reveal">
              <strong>20+</strong>
              <span>Years serving enterprise clients</span>
            </article>
            <article className="stat reveal">
              <strong>5+</strong>
              <span>Core service practice areas</span>
            </article>
            <article className="stat reveal">
              <strong>2</strong>
              <span>New Jersey offices</span>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Culture"
            title="Our Mission and Values"
            description="These principles mirror the foundation of the original SR Tek message, but are presented in a more polished and scannable format."
          />
          <div className="values-grid">
            {values.map((value) => (
              <article className="card value-card reveal" key={value.title}>
                <IconGlyph name="badge" className="value-icon" />
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
