import HeroShell from "@/components/hero-shell";
import { SectionHeading } from "@/components/section-heading";
import { IconGlyph } from "@/components/icon-glyph";

const solutionTracks = [
  {
    title: "Digital Core Modernization",
    icon: "workflow" as const,
    description: "Modernize legacy application landscapes with phased, low-risk architecture upgrades.",
  },
  {
    title: "Data & AI Foundation",
    icon: "layers" as const,
    description: "Build governed data platforms and AI-ready pipelines for decision velocity.",
  },
  {
    title: "Cloud Transformation",
    icon: "cloud" as const,
    description: "Migrate and optimize workloads using secure, cost-aware cloud operating models.",
  },
  {
    title: "Secure Delivery",
    icon: "shield" as const,
    description: "Embed security controls across architecture, QA, infrastructure, and release pipelines.",
  },
];

export default function SolutionsPage() {
  return (
    <HeroShell
      eyebrow="Solutions"
      title="Integrated solutions for business transformation"
      subtitle="We combine consulting, engineering, and staffing into practical solution blueprints."
      align="center"
      tone="solutions"
    >
      <section className="pro-block reveal">
        <SectionHeading
          title="Where we create impact"
          description="Structured offerings that connect business goals to measurable execution."
          align="center"
        />
        <div className="services-grid pro-services-grid section-balanced-grid">
          {solutionTracks.map((track) => (
            <article className="service-card service-card-fancy" key={track.title}>
              <h3 className="tile-title-row">
                <IconGlyph name={track.icon} className="service-icon tile-title-icon" />
                <span>{track.title}</span>
              </h3>
              <p>{track.description}</p>
            </article>
          ))}
        </div>
      </section>
    </HeroShell>
  );
}
