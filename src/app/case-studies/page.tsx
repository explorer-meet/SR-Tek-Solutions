import HeroShell from "@/components/hero-shell";
import { SectionHeading } from "@/components/section-heading";
import { IconGlyph } from "@/components/icon-glyph";

const caseStudies = [
  {
    title: "Healthcare Data Platform",
    icon: "headset" as const,
    impact: "Reduced reporting cycle time by 45% through governed data pipelines and BI automation.",
  },
  {
    title: "Retail Cloud Migration",
    icon: "cloud" as const,
    impact: "Improved release speed by 2.3x with cloud-native architecture and CI/CD rollout.",
  },
  {
    title: "Financial Risk Operations",
    icon: "shield" as const,
    impact: "Strengthened compliance visibility with real-time controls and secure workflow automation.",
  },
];

export default function CaseStudiesPage() {
  return (
    <HeroShell
      eyebrow="Case Studies"
      title="Proof of delivery across real-world programs"
      titleClassName="hero-title-single-line"
      subtitle="A snapshot of the execution outcomes we help clients achieve."
      align="center"
      tone="case-studies"
    >
      <section className="pro-block reveal">
        <SectionHeading
          title="Recent client impact stories"
          description="Examples of measurable improvements delivered through SR Tek teams and solution tracks."
          align="center"
        />
        <div className="values-grid pro-case-grid section-balanced-grid">
          {caseStudies.map((study) => (
            <article className="card value-card pro-case-card" key={study.title}>
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
