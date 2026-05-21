import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { IconGlyph } from "@/components/icon-glyph";
import { capabilityPillars, services } from "@/lib/site-data";

const proofTiles = [
  {
    title: "Promise clarity",
    caption: "A clean opening statement with aligned value signals and business context.",
    icon: "sparkles" as const,
  },
  {
    title: "Capability mapping",
    caption: "Services grouped by domain so buyers can quickly see where SR Tek fits.",
    icon: "workflow" as const,
  },
  {
    title: "Delivery proof",
    caption: "Concrete service examples and engagement options that demonstrate execution depth.",
    icon: "layers" as const,
  },
  {
    title: "Action confidence",
    caption: "A direct path to connect, with clear contact and next-step intent.",
    icon: "badge" as const,
  },
];

export function HomeScrollStory() {
  return (
    <>
      <section className="section story-intro">
        <div className="container story-intro-grid">
          <div className="story-intro-copy">
            <span className="eyebrow">Proof framework</span>
            <h2>Designed to move from promise to proof.</h2>
            <p>
              A strong homepage should communicate credibility without relying on scrolling choreography. These tiles
              keep the message direct, structured, and easier to trust.
            </p>
          </div>
          <div className="story-intro-panel">
            <div className="story-illustration">
              <div className="story-illustration-grid" />
              <div className="story-illustration-orbit orbit-a" />
              <div className="story-illustration-orbit orbit-b" />
              <div className="story-illustration-orbit orbit-c" />
              <div className="story-illustration-core">
                <IconGlyph name="sparkles" className="story-illustration-icon" />
                <strong>SR Tek Motion Lab</strong>
                <span>Scroll-driven narrative systems</span>
              </div>
              <div className="story-illustration-node node-a">
                <IconGlyph name="workflow" className="story-node-icon" />
                <span>Strategy</span>
              </div>
              <div className="story-illustration-node node-b">
                <IconGlyph name="layers" className="story-node-icon" />
                <span>Services</span>
              </div>
              <div className="story-illustration-node node-c">
                <IconGlyph name="shield" className="story-node-icon" />
                <span>Trust</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section story-section">
        <div className="container story-shell">
          <div className="story-brief-grid">
            <div className="story-brief-card">
              <span className="eyebrow">Proof tiles</span>
              <h2>Each tile builds buyer confidence.</h2>
              <p>
                Each tile highlights one phase of buyer confidence, from first impression to service depth and final
                action.
              </p>
            </div>
          </div>

          <div className="story-tiles-grid">
            {proofTiles.map((step, index) => (
              <article
                key={step.title}
                className={`story-card-shell story-tile-card phase-${index + 1}`}
              >
                <div className="story-parallax-layer story-parallax-a" />
                <div className="story-parallax-layer story-parallax-b" />
                <div className="story-card-shell-head">
                  <IconGlyph name={step.icon} className="story-shell-icon" />
                </div>
                <span className="story-tile-kicker">Phase {String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.caption}</p>
                {index === 1 ? (
                  <>
                    <p className="story-subsection-title">Core pillars</p>
                    <div className="story-fact-row">
                      {capabilityPillars.map((pillar) => (
                        <div className="story-fact" key={pillar.title}>
                          <IconGlyph name={pillar.icon} className="story-fact-icon" />
                          <span>{pillar.title}</span>
                        </div>
                      ))}
                    </div>
                  </>
                ) : null}
                {index === 2 ? (
                  <>
                    <p className="story-subsection-title">Service lanes</p>
                    <div className="story-service-samples">
                      {services.slice(0, 4).map((service) => (
                        <div className="story-service-sample" key={service.title}>
                          <IconGlyph name={service.icon} className="story-service-icon" />
                          <div>
                            <strong>{service.category}</strong>
                            <span>{service.title}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : null}
                {index === 3 ? (
                  <Link className="story-cta-chip" href="/contact" prefetch>
                    <Sparkles size={16} />
                    <span>Review the proof, then connect</span>
                    <ArrowUpRight size={16} />
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
