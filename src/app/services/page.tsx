import HeroShell from "@/components/hero-shell";
import { SectionHeading } from "@/components/section-heading";
import { IconGlyph } from "@/components/icon-glyph";
import { capabilityPillars, services } from "@/lib/site-data";

const engagementModels = [
  {
    title: "Project Squads",
    icon: "workflow" as const,
    description: "Cross-functional teams with clear scope, velocity metrics, and milestone ownership.",
  },
  {
    title: "Staff Augmentation",
    icon: "briefcase" as const,
    description: "High-fit engineers and analysts embedded into your internal teams quickly.",
  },
  {
    title: "Managed Services",
    icon: "shield" as const,
    description: "Outcome-focused support for platforms, cloud, operations, and quality management.",
  },
  {
    title: "Advisory & Architecture",
    icon: "telescope" as const,
    description: "Strategic direction for modernization, governance, and technology investments.",
  },
];

export default function ServicesPage() {
  return (
    <HeroShell
      eyebrow="What We Do"
      title="Service lines designed for enterprise delivery"
      titleClassName="services-hero-title-fit"
      subtitle="From AI to cloud and staffing, we combine specialist expertise with disciplined execution."
      align="center"
      tone="services"
    >
      <section className="pro-block reveal">
        <div className="pillar-grid">
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
          eyebrow="Service Portfolio"
          title="Core delivery capabilities"
          description="Each lane can be delivered as a standalone engagement or blended into a multi-track program."
          align="center"
        />
        <div className="services-grid pro-services-grid section-balanced-grid">
          {services.map((service) => (
            <article className="service-card service-card-fancy" key={service.title}>
              <div className="service-topline">
                <span className="service-tag">{service.category}</span>
                <IconGlyph name={service.icon} className="service-icon" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-card-kicker">Enterprise-ready delivery model</span>
            </article>
          ))}
        </div>
      </section>

      <section className="pro-block reveal">
        <SectionHeading
          eyebrow="Engagement Models"
          title="Flexible commercial options"
          description="Select the structure that matches your program risk profile and timeline."
          align="center"
        />
        <div className="timeline pro-timeline-grid section-balanced-grid">
          {engagementModels.map((item) => (
            <article className="timeline-item" key={item.title}>
              <div className="timeline-kicker">
                <IconGlyph name={item.icon} className="timeline-icon" />
                <span>{item.title}</span>
              </div>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </HeroShell>
  );
}
