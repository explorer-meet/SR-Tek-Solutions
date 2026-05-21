import Link from "next/link";
import { ArrowRight, MapPin, Phone, Sparkles } from "lucide-react";
import { siteMeta, services } from "@/lib/site-data";
import { IconGlyph } from "@/components/icon-glyph";

function SocialIcon({ name }: { name: "LinkedIn" | "Facebook" | "Instagram" | "YouTube" }) {
  if (name === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46a2.48 2.48 0 0 0-.02-4.96ZM3 9h4v12H3zM9 9h3.83v1.71h.05c.53-1.01 1.84-2.08 3.79-2.08 4.06 0 4.81 2.67 4.81 6.13V21h-4v-5.38c0-1.28-.03-2.92-1.78-2.92-1.78 0-2.06 1.39-2.06 2.83V21H9z" />
      </svg>
    );
  }

  if (name === "Facebook") {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.87.24-1.46 1.49-1.46H17V5.1A28.6 28.6 0 0 0 14.6 5c-2.37 0-4 1.45-4 4.1V11H8v3h2.6v8z" />
      </svg>
    );
  }

  if (name === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95Zm8.95 1.35a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M21.6 7.2a2.99 2.99 0 0 0-2.1-2.12C17.63 4.5 12 4.5 12 4.5s-5.62 0-7.5.58A2.99 2.99 0 0 0 2.4 7.2 31.2 31.2 0 0 0 2 12a31.2 31.2 0 0 0 .4 4.8 2.99 2.99 0 0 0 2.1 2.12c1.88.58 7.5.58 7.5.58s5.63 0 7.5-.58a2.99 2.99 0 0 0 2.1-2.12A31.2 31.2 0 0 0 22 12a31.2 31.2 0 0 0-.4-4.8ZM10 15.5v-7l6 3.5Z" />
    </svg>
  );
}

export function SiteFooter() {
  const officeLocations = siteMeta.phones.map((phone, index) => ({
    phone,
    address: siteMeta.addresses[index],
  }));

  const socialItems = [
    { label: "LinkedIn" as const, href: siteMeta.socialLinks.linkedin },
    { label: "Facebook" as const, href: siteMeta.socialLinks.facebook },
    { label: "Instagram" as const, href: siteMeta.socialLinks.instagram },
    { label: "YouTube" as const, href: siteMeta.socialLinks.youtube },
  ];

  return (
    <footer className="site-footer">
      <div className="container footer-cta">
        <div>
          <span className="eyebrow footer-eyebrow">
            <Sparkles size={14} />
            Start a conversation
          </span>
          <h3>Need a sharper staffing or solution team?</h3>
          <p>We can help shape the right delivery model and connect you with the right people quickly.</p>
        </div>
        <Link className="btn btn-primary footer-button" href="/contact">
          Contact SR Tek <ArrowRight size={16} />
        </Link>
      </div>

      <div className="container footer-grid">
        <div className="footer-brand">
          <h4>{siteMeta.name}</h4>
          <p>
            A tier 1 technology staffing, consulting, and solutions partner providing enterprise-ready talent,
            advisory, and execution support.
          </p>
          <ul className="footer-brand-points">
            <li>Enterprise-ready talent delivery</li>
            <li>Advisory with execution ownership</li>
            <li>Flexible engagement at scale</li>
          </ul>
          <div className="footer-socials">
            {socialItems.map((item) => {
              return (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
                  <SocialIcon name={item.label} />
                </a>
              );
            })}
          </div>
        </div>
        <div className="footer-column">
          <h4>Our Services</h4>
          <ul className="footer-service-list">
            {services.slice(0, 5).map((service) => (
              <li key={service.title} className="footer-service-item">
                <span className="footer-service-icon-wrap">
                  <IconGlyph name={service.icon} className="footer-service-icon" />
                </span>
                <span>{service.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-column footer-contact">
          <h4>Reach Us</h4>
          <div className="footer-office-list">
            {officeLocations.map((office, index) => (
              <div key={office.phone} className="footer-office-card">
                <strong>Office {index + 1}</strong>
                <Link href={`tel:${office.phone}`} className="footer-contact-link">
                  <Phone size={14} />
                  <span>{office.phone}</span>
                </Link>
                <p className="footer-address-line">
                  <MapPin size={14} />
                  <span>{office.address}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 SR Tek Solutions</span>
      </div>
    </footer>
  );
}
