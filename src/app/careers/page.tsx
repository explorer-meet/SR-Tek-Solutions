import HeroShell from "@/components/hero-shell";
import { SectionHeading } from "@/components/section-heading";
import { IconGlyph } from "@/components/icon-glyph";
import { careersInfo, techStack } from "@/lib/site-data";

const openRoles = [
  {
    title: "Senior Full Stack Engineer",
    location: "Edison, NJ / Hybrid",
    type: "Full-time",
    summary: "Build enterprise web platforms using React, Node.js, and cloud-native delivery pipelines.",
  },
  {
    title: "Data Engineer",
    location: "Remote / US",
    type: "Contract",
    summary: "Design scalable data pipelines and analytics models across modern data platforms.",
  },
  {
    title: "QA Automation Engineer",
    location: "Franklin, NJ / Hybrid",
    type: "Full-time",
    summary: "Drive quality engineering with automation frameworks, CI integration, and release validation.",
  },
];

export default function CareersPage() {
  return (
    <HeroShell
      eyebrow="Careers"
      title="Grow your career with high-impact technology programs"
      subtitle="Join teams solving complex enterprise problems across engineering, cloud, data, and consulting."
      align="center"
      tone="careers"
    >
      <section className="pro-block reveal">
        <SectionHeading
          eyebrow="Why SR Tek"
          title="A culture focused on growth and delivery excellence"
          description="We invest in capability building, meaningful project ownership, and collaborative execution."
          align="center"
        />
        <div className="values-grid section-balanced-grid">
          {careersInfo.highlights.map((item) => (
            <article className="card value-card" key={item}>
              <IconGlyph name="badge" className="value-icon" />
              <h3>{item}</h3>
              <p>Structured support and transparent communication across every step of your journey.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pro-block reveal">
        <SectionHeading
          eyebrow="Open Roles"
          title="Current opportunities"
          description="Apply to roles aligned with your strengths and preferred delivery model."
          align="center"
        />
        <div className="services-grid pro-services-grid section-balanced-grid">
          {openRoles.map((role) => (
            <article className="service-card service-card-fancy" key={role.title}>
              <div className="service-topline">
                <span className="service-tag">{role.type}</span>
                <IconGlyph name="briefcase" className="service-icon" />
              </div>
              <h3>{role.title}</h3>
              <p>{role.summary}</p>
              <span className="service-card-kicker">{role.location}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="pro-block reveal">
        <SectionHeading
          eyebrow="Technology"
          title="Platforms and tools you will work with"
          description="Exposure to enterprise-grade stacks across frontend, backend, cloud, and data."
          align="center"
        />
        <div className="values-grid pro-case-grid section-balanced-grid">
          {techStack.map((tech) => (
            <article className="card value-card pro-case-card" key={tech.name}>
              <IconGlyph name={tech.icon} className="value-icon" />
              <h3>{tech.name}</h3>
              <p>Used in active client engagements and internal accelerators.</p>
            </article>
          ))}
        </div>
      </section>
    </HeroShell>
  );
}
