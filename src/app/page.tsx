import Link from "next/link";
import { IconGlyph } from "@/components/icon-glyph";
import { TechnologyLogo } from "@/components/technology-logo";
import { caseStudyPreview, heroSignals, industries, services, techStack } from "@/lib/site-data";

const serviceImages: Record<string, string> = {
  "AI & Machine Learning":
    "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "Custom Software Development":
    "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "Cloud & DevOps":
    "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "Data Engineering":
    "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

const defaultServiceImage =
  "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1200";

const industryImages: Record<string, string> = {
  Healthcare:
    "https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=900",
  "Banking & Financial Services":
    "https://images.pexels.com/photos/4386372/pexels-photo-4386372.jpeg?auto=compress&cs=tinysrgb&w=900",
  Telecom:
    "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=900",
  "Retail & E-Commerce":
    "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=900",
  Logistics:
    "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=900",
  Manufacturing:
    "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=900",
  Pharma:
    "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=900",
};

const featureBanners = [
  {
    title: "Clients-First Delivery",
    description: "Focused collaboration and transparent execution from day one.",
    image:
      "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1800",
  },
  {
    title: "Engineering Teams That Scale",
    description: "High-fit talent aligned with your roadmap and release pace.",
    image:
      "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1800",
  },
  {
    title: "Transformation With Measurable Outcomes",
    description: "Modern cloud and data programs with clear business impact.",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1800",
  },
];

const defaultIndustryImage =
  "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=900";

const whatWeDoItems = [
  {
    title: "Software Development Company",
    description: "Custom web, mobile, and enterprise product delivery with scalable architecture.",
    icon: "board",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "IT Consulting Services",
    description: "Roadmaps, solution planning, and execution strategy aligned to business priorities.",
    icon: "telescope",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "AI Consulting",
    description: "Use-case discovery, model strategy, and AI rollout support for measurable value.",
    icon: "sparkles",
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Cloud Migration Services",
    description: "Secure cloud transition planning, modernization, and platform reliability engineering.",
    icon: "cloud",
    image:
      "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Staffing Solutions",
    description: "On-demand technical talent aligned to delivery pace, skill fit, and team culture.",
    icon: "briefcase",
    image:
      "https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Enterprise Application Development",
    description: "Business-critical platform development for ERP, CRM, workflow, and integration needs.",
    icon: "workflow",
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
] as const;

export default function HomePage() {
  return (
    <main className="home-compact-main">
      <section className="section home-feature-gallery-section">
        <div className="container">
          <div className="home-feature-slider" aria-label="Client-first image banners">
            <div className="home-feature-slider-track">
              {[...featureBanners, featureBanners[0]].map((banner, index) => (
                <article
                  className="home-feature-banner-card"
                  key={`${banner.title}-${index}`}
                  style={{ backgroundImage: `url(${banner.image})` }}
                >
                  <div className="home-feature-card-overlay" />
                  <div className="home-feature-card-copy">
                    <h3>{banner.title}</h3>
                    <p>{banner.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="hero home-hero-refined">
        <div className="container">
          <div className="home-hero-refined-shell">
            <div className="home-hero-refined-copy">
              <span className="eyebrow">Technology Staffing and Consulting</span>
              <h1>Built for faster delivery and stronger client confidence.</h1>
              <p className="hero-lead">
                IT talent and engineering leadership across cloud, ERP, CRM, data, security, and modern product teams.
              </p>
              <div className="hero-actions">
                <Link className="btn btn-primary" href="/services" prefetch>
                  Explore Services
                </Link>
                <Link className="btn btn-secondary" href="/contact" prefetch>
                  Start a Project
                </Link>
              </div>
            </div>

            <div className="home-hero-signal-row">
              {heroSignals.map((signal) => (
                <div className="home-hero-signal-pill" key={signal.label}>
                  <IconGlyph name={signal.icon} className="signal-icon" />
                  <div>
                    <strong>{signal.value}</strong>
                    <span>{signal.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section home-what-we-do-section">
        <div className="container">
          <div className="home-immersive-shell">
            <div className="home-immersive-head">
              <span className="eyebrow">What we do</span>
              <h2>End-to-end technology services designed for faster, cleaner delivery.</h2>
              <p>
                From engineering and consulting to cloud, AI, and staffing support, we help teams move from planning to
                production with confidence.
              </p>
            </div>

            <div className="values-grid pro-services-grid section-balanced-grid home-what-do-grid">
              {whatWeDoItems.map((item) => (
                <article className="card value-card pro-service-card" key={item.title}>
                  <div className="page-card-media" style={{ backgroundImage: `url(${item.image})` }} aria-hidden="true" />
                  <h3 className="tile-title-row">
                    <IconGlyph name={item.icon} className="value-icon tile-title-icon" />
                    <span>{item.title}</span>
                  </h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section home-immersive-section">
        <div className="container">
          <div className="home-immersive-shell">
            <div className="home-immersive-head">
              <span className="eyebrow">Experience Layers</span>
              <h2>Visual-first sections with clear, readable content.</h2>
              <p>
                Services, industries, and delivery proof are now separated into dedicated horizontal panels for better
                image clarity and easier reading.
              </p>
            </div>

            <div className="home-split-stack">
              <article className="home-immersive-card home-split-panel home-service-lane">
                <h3>Service lanes</h3>
                <div className="home-service-mini-grid">
                  {services.slice(0, 4).map((service) => (
                    <div className="home-mini-tile" key={service.title}>
                      <div
                        className="home-mini-tile-media"
                        style={{ backgroundImage: `url(${serviceImages[service.title] || defaultServiceImage})` }}
                        aria-hidden="true"
                      />
                      <span>{service.title}</span>
                    </div>
                  ))}
                </div>
                <Link className="home-inline-link" href="/services" prefetch>
                  See all services
                </Link>
              </article>

              <article className="home-immersive-card home-split-panel home-industry-lane">
                <h3>Industry snapshots</h3>
                <div className="home-industry-grid">
                  {industries.slice(0, 6).map((industry) => (
                    <article key={industry.title} className="home-industry-item">
                      <div
                        className="home-industry-media"
                        style={{ backgroundImage: `url(${industryImages[industry.title] || defaultIndustryImage})` }}
                        aria-hidden="true"
                      />
                      <span>{industry.title}</span>
                    </article>
                  ))}
                </div>
                <Link className="home-inline-link" href="/industries" prefetch>
                  Browse industries
                </Link>
              </article>

              <article className="home-immersive-card home-split-panel home-proof-lane">
                <h3>Delivery proof</h3>
                <div className="values-grid pro-case-grid section-balanced-grid">
                  {caseStudyPreview.map((study) => (
                    <article className="card value-card pro-case-card" key={study.title}>
                      <div className="page-card-media" style={{ backgroundImage: `url(${study.image})` }} aria-hidden="true" />
                      <h3 className="tile-title-row">
                        <IconGlyph name={study.icon} className="value-icon tile-title-icon" />
                        <span>{study.title}</span>
                      </h3>
                      <p>{study.impact}</p>
                    </article>
                  ))}
                </div>
                <Link className="home-inline-link" href="/case-studies" prefetch>
                  View case studies
                </Link>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section home-tech-section">
        <div className="container">
          <div className="home-tech-shell">
            <div className="home-tech-head">
              <span className="eyebrow">Technology Stack</span>
              <h2>Modern platforms used in active client programs.</h2>
            </div>
            <div className="home-tech-marquee" aria-label="Technology logos">
              <div className="home-tech-track">
                {[...techStack.slice(0, 10), ...techStack.slice(0, 10)].map((tech, index) => (
                  <article className="home-tech-item" key={`${tech.name}-${index}`}>
                    <TechnologyLogo name={tech.logo} className="tech-logo-icon" />
                    <span>{tech.name}</span>
                  </article>
                ))}
              </div>
            </div>
            <div className="home-cta-strip">
              <Link className="home-inline-link" href="/careers" prefetch>
                Explore Careers
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section home-bottom-cta">
        <div className="container">
          <div className="home-bottom-shell">
            <div>
              <span className="eyebrow">Next Step</span>
              <h2>Tell us your delivery target. We assemble the team and execution path.</h2>
            </div>
            <div className="home-bottom-actions">
              <Link className="btn btn-primary" href="/contact" prefetch>
                Book a Discovery Call
              </Link>
              <Link className="btn btn-secondary" href="/about" prefetch>
                Why SR Tek
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
