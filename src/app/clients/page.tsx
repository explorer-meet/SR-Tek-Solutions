import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { IconGlyph } from "@/components/icon-glyph";
import { clientLogos, industries } from "@/lib/site-data";

export default function ClientsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-shell">
            <span className="eyebrow">Client Focus</span>
            <h1>Trusted by organizations building large-scale digital programs.</h1>
            <p>
              We support global and regional enterprises across mission-critical programs where talent quality and
              execution speed are non-negotiable.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Industry coverage"
            title="Industries we serve"
            description="The same reach, presented as a sharper industry map with iconography and short descriptive copy."
          />
          <div className="services-grid">
            {industries.map((industry) => (
              <article className="card industry-card reveal" key={industry.title}>
                <IconGlyph name={industry.icon} className="industry-icon" />
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Portfolio"
            title="Representative client portfolio"
            description="Replace placeholder logos in public/brand/clients with your approved client identities."
          />
          <div className="clients-grid">
            {clientLogos.map((logo, index) => (
              <article key={logo} className="client-logo reveal">
                <Image src={logo} alt={`Client logo ${index + 1}`} width={140} height={44} />
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
