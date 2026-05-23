import HeroShell from "@/components/hero-shell";
import { IconGlyph } from "@/components/icon-glyph";

const solutionTracks = [
  {
    title: "Digital Core Modernization",
    icon: "workflow" as const,
    description: "Modernize legacy application landscapes with phased, low-risk architecture upgrades.",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Data & AI Foundation",
    icon: "layers" as const,
    description: "Build governed data platforms and AI-ready pipelines for decision velocity.",
    image:
      "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Cloud Transformation",
    icon: "cloud" as const,
    description: "Migrate and optimize workloads using secure, cost-aware cloud operating models.",
    image:
      "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Secure Delivery",
    icon: "shield" as const,
    description: "Embed security controls across architecture, QA, infrastructure, and release pipelines.",
    image:
      "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export default function SolutionsPage() {
  return (
    <HeroShell
      title="Integrated solutions for business transformation"
      titleClassName="solutions-hero-title-fit"
      subtitle="We combine consulting, engineering, and staffing into practical solution blueprints."
      align="center"
      tone="solutions"
    >
      <section className="pro-block reveal">
        <div className="services-grid pro-services-grid section-balanced-grid">
          {solutionTracks.map((track) => (
            <article className="service-card service-card-fancy" key={track.title}>
              <div className="page-card-media" style={{ backgroundImage: `url(${track.image})` }} aria-hidden="true" />
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
