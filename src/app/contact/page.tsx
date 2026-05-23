import HeroShell from "@/components/hero-shell";
import { ContactForm } from "@/components/contact-form";
import { IconGlyph } from "@/components/icon-glyph";
import { siteMeta } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <HeroShell
      eyebrow="Contact"
      title="Talk to our delivery and talent team"
      titleClassName="hero-title-single-line"
      subtitle="Share your goals and we will map a focused next step with the right specialists."
      align="center"
      tone="contact"
    >
      <section className="pro-block reveal">
        <div className="contact-grid pro-contact-grid">
          <aside className="contact-panel">
            <div className="contact-panel-header contact-panel-header-compact">
              <h3>Direct channels</h3>
              <p>Phone, email, and office details are below.</p>
            </div>

            <div className="contact-stack">
              <article className="contact-item contact-item-accent">
                <div className="contact-label">
                  <IconGlyph name="briefcase" className="contact-icon" />
                  <h3>Phone</h3>
                </div>
                {siteMeta.phones.map((phone) => (
                  <p key={phone}>{phone}</p>
                ))}
              </article>

              <article className="contact-item">
                <div className="contact-label">
                  <IconGlyph name="sparkles" className="contact-icon" />
                  <h3>Email</h3>
                </div>
                <p>{siteMeta.email}</p>
              </article>

              <article className="contact-item">
                <div className="contact-label">
                  <IconGlyph name="building" className="contact-icon" />
                  <h3>Locations</h3>
                </div>
                {siteMeta.addresses.map((address) => (
                  <p key={address}>{address}</p>
                ))}
              </article>
            </div>
          </aside>

          <div className="contact-form-wrap">
            <div className="contact-form-glow" aria-hidden="true" />
            <article className="form pro-form-card contact-form-card">
              <ContactForm />
            </article>
          </div>
        </div>
      </section>
    </HeroShell>
  );
}
