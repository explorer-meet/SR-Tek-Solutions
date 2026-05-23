import HeroShell from "@/components/hero-shell";
import { IconGlyph } from "@/components/icon-glyph";

const caseStudies = [
  {
    title: "Healthcare Data Platform",
    icon: "headset" as const,
    impact: "Reduced reporting cycle time by 45% through governed data pipelines and BI automation.",
    image:
      "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Retail Cloud Migration",
    icon: "cloud" as const,
    impact: "Improved release speed by 2.3x with cloud-native architecture and CI/CD rollout.",
    image:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Financial Risk Operations",
    icon: "shield" as const,
    impact: "Strengthened compliance visibility with real-time controls and secure workflow automation.",
    image:
      "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export default function CaseStudiesPage() {
  return (
    <HeroShell
      title="Proof of delivery across real-world programs"
      titleClassName="hero-title-single-line"
      subtitle="A snapshot of the execution outcomes we help clients achieve."
      align="center"
      tone="case-studies"
    >
      <section className="pro-block reveal">
        <div className="values-grid pro-case-grid section-balanced-grid">
          {caseStudies.map((study) => (
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
