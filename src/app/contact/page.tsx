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

              <article className="contact-item contact-note">
                <IconGlyph name="shield" className="contact-icon large" />
                <div>
                  <h3>Response commitment</h3>
                  <p>Every inquiry is routed to the right specialist for a clear and fast response.</p>
                </div>
              </article>
            </div>
          </aside>

          <div className="contact-form-wrap">
            <div className="contact-form-glow" aria-hidden="true" />
            <article className="form pro-form-card">
              <h3>Send a project brief</h3>
              <p>Tell us about your timeline, team needs, and expected outcomes.</p>
              <ContactForm />
            </article>
          </div>
        </div>
      </section>
    </HeroShell>
  );
}
