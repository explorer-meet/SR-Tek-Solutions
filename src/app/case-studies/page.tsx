import HeroShell from "@/components/hero-shell";
import { IconGlyph } from "@/components/icon-glyph";
import { caseStudyPreview } from "@/lib/site-data";

export default function CaseStudiesPage() {
  return (
    <HeroShell
      title="Proof of delivery across real-world programs"
      titleClassName="hero-title-consistent"
      subtitle="A snapshot of the execution outcomes we help clients achieve."
      align="center"
      tone="case-studies"
    >
      <section className="pro-block reveal">
        <div className="values-grid pro-case-grid section-balanced-grid">
          {caseStudyPreview.map((study) => (
            <article className="card value-card pro-case-card" key={study.title}>
              <div className="page-card-media" style={{ backgroundImage: `url(${study.image})` }} aria-hidden="true" />
              <h3 className="tile-title-row">
                <IconGlyph name={study.icon} className="value-icon tile-title-icon" />
                <span>{study.title}</span>
              </h3>
              <p>{study.impact}</p>
            </article>
          ))}
        </div>
      </section>
    </HeroShell>
  );
}
