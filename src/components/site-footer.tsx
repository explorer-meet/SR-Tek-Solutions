import Link from "next/link";
import { ArrowRight, MapPin, Phone, Sparkles } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { siteMeta, services } from "@/lib/site-data";
import { IconGlyph } from "@/components/icon-glyph";

export function SiteFooter() {
  const officeLocations = siteMeta.phones.map((phone, index) => ({
    phone,
    address: siteMeta.addresses[index],
  }));

  const socialItems = [
    { label: "LinkedIn" as const, href: siteMeta.socialLinks.linkedin, Icon: FaLinkedinIn },
    { label: "Facebook" as const, href: siteMeta.socialLinks.facebook, Icon: FaFacebookF },
    { label: "Instagram" as const, href: siteMeta.socialLinks.instagram, Icon: FaInstagram },
    { label: "YouTube" as const, href: siteMeta.socialLinks.youtube, Icon: FaYoutube },
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
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className={`footer-social-link footer-social-${item.label.toLowerCase()}`}
                >
                  <item.Icon aria-hidden="true" focusable="false" className="footer-social-icon" />
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
