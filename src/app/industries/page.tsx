import HeroShell from "@/components/hero-shell";
import { IconGlyph } from "@/components/icon-glyph";
import { industries } from "@/lib/site-data";

const industryImages: Record<string, string> = {
  Healthcare:
    "https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "Banking & Financial Services":
    "https://images.pexels.com/photos/4386372/pexels-photo-4386372.jpeg?auto=compress&cs=tinysrgb&w=1200",
  Telecom:
    "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "Retail & E-Commerce":
    "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1200",
  Logistics:
    "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1200",
  Manufacturing:
    "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1200",
  Pharma:
    "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

export default function IndustriesPage() {
  return (
    <HeroShell
      title="Built for sector-specific complexity"
      titleClassName="hero-title-consistent"
      subtitle="We shape digital delivery models that fit the operational and compliance realities of each industry."
      align="center"
      tone="industries"
    >
      <section className="pro-block reveal">
        <div className="values-grid pro-industry-grid section-balanced-grid">
          {industries.map((industry) => (
            <article className="card industry-card pro-industry-card" key={industry.title}>
              <div
                className="page-card-media"
                style={{ backgroundImage: `url(${industryImages[industry.title]})` }}
                aria-hidden="true"
              />
              <h3 className="tile-title-row">
                <IconGlyph name={industry.icon} className="industry-icon tile-title-icon" />
                <span>{industry.title}</span>
              </h3>
              <p>{industry.description}</p>
            </article>
          ))}
        </div>
      </section>
    </HeroShell>
  );
}
