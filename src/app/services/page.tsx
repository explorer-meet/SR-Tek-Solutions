import HeroShell from "@/components/hero-shell";
import { IconGlyph } from "@/components/icon-glyph";
import { services } from "@/lib/site-data";

const serviceImages: Record<string, string> = {
  "AI & Machine Learning":
    "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "Custom Software Development":
    "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "Cloud & DevOps":
    "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "Data Engineering":
    "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "ERP / CRM Solutions":
    "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "IT Staffing":
    "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "QA Automation":
    "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200",
  Cybersecurity:
    "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "Product Engineering":
    "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

export default function ServicesPage() {
  return (
    <HeroShell
      title="Service lines designed for enterprise delivery"
      titleClassName="hero-title-consistent"
      subtitle="From AI to cloud and staffing, we combine specialist expertise with disciplined execution."
      align="center"
      tone="services"
    >
      <section className="pro-block reveal">
        <div className="services-grid pro-services-grid section-balanced-grid">
          {services.map((service) => (
            <article className="service-card service-card-fancy" key={service.title}>
              <div
                className="page-card-media"
                style={{ backgroundImage: `url(${serviceImages[service.title]})` }}
                aria-hidden="true"
              />
              <h3 className="tile-title-row">
                <IconGlyph name={service.icon} className="service-icon tile-title-icon" />
                <span>{service.title}</span>
              </h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>
    </HeroShell>
  );
}
