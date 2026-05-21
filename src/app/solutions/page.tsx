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
    >
      <section className="pro-block reveal">
        <SectionHeading
          eyebrow="Solution Tracks"
          title="Where we create impact"
          description="Structured offerings that connect business goals to measurable execution."
          align="center"
        />
        <div className="services-grid pro-services-grid section-balanced-grid">
          {solutionTracks.map((track) => (
            <article className="service-card service-card-fancy" key={track.title}>
              <div className="service-topline">
                <span className="service-tag">Solution lane</span>
                <IconGlyph name={track.icon} className="service-icon" />
              </div>
              <h3>{track.title}</h3>
              <p>{track.description}</p>
            </article>
          ))}
        </div>
      </section>
    </HeroShell>
  );
}
