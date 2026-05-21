import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { IconGlyph } from "@/components/icon-glyph";
import { siteMeta } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container reveal">
          <span className="eyebrow">Contact Us</span>
          <h1>Get started with your next project.</h1>
          <p>Share your staffing or consulting needs and our team will respond with a tailored engagement plan.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-panel reveal">
            <div className="contact-stack">
              <article className="contact-item contact-item-accent reveal">
                <div className="contact-label">
                  <IconGlyph name="briefcase" className="contact-icon" />
                  <h3>Phone</h3>
                </div>
                {siteMeta.phones.map((phone) => (
                  <p key={phone}>{phone}</p>
                ))}
              </article>
              <article className="contact-item reveal">
                <div className="contact-label">
                  <IconGlyph name="sparkles" className="contact-icon" />
                  <h3>Email</h3>
                </div>
                <p>{siteMeta.email}</p>
              </article>
              <article className="contact-item reveal">
                <div className="contact-label">
                  <IconGlyph name="building" className="contact-icon" />
                  <h3>Locations</h3>
                </div>
                {siteMeta.addresses.map((address) => (
                  <p key={address}>{address}</p>
                ))}
              </article>
              <article className="contact-item contact-note reveal">
                <IconGlyph name="shield" className="contact-icon large" />
                <div>
                  <h3>Fast response</h3>
                  <p>We route every inquiry to the right team and respond with a focused next step.</p>
                </div>
              </article>
            </div>
          </div>

          <div className="contact-form-wrap reveal">
            <SectionHeading
              eyebrow="Inquiry"
              title="Send a project brief"
              description="A clean form with a dependable backend hook for local testing or live submissions."
            />
            <div className="contact-form-glow" />
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
