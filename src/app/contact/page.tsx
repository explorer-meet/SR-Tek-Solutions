import HeroShell from "@/components/hero-shell";
import { ContactForm } from "@/components/contact-form";
import { IconGlyph } from "@/components/icon-glyph";
import { siteMeta } from "@/lib/site-data";

export default function ContactPage() {
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "https://calendly.com";

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

              <article className="contact-item contact-item-accent contact-book-now">
                <div className="contact-label">
                  <IconGlyph name="badge" className="contact-icon" />
                  <h3>Book instantly</h3>
                </div>
                <p>Schedule a calendar slot directly with our team.</p>
                <a className="btn btn-primary contact-book-now-btn" href={bookingUrl} target="_blank" rel="noreferrer">
                  Book Instantly
                </a>
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
