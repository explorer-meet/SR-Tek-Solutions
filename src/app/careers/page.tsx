import HeroShell from "@/components/hero-shell";
import { BriefcaseBusiness, Globe2, Handshake, Heart } from "lucide-react";
import { CareersOpenings } from "@/components/careers-openings";
import { openRoles } from "@/lib/site-data";

const countryCount = new Set(openRoles.map((role) => role.country)).size;
const locationCount = new Set(openRoles.map((role) => role.location)).size;

export default function CareersPage() {
  return (
    <HeroShell
      title="Grow your career with high-impact technology programs"
      titleClassName="hero-title-consistent"
      subtitle="Browse current openings and find the right fit faster with simple filters."
      align="center"
      tone="careers"
    >
      <section className="pro-block reveal careers-highlights-shell" aria-label="Careers highlights">
        <div className="careers-highlights-head">
          <span className="eyebrow">Career experience</span>
          <h2>What to expect at SR Tek</h2>
          <p>Clear hiring flow, strong team culture, relocation support where applicable, and practical benefits.</p>
        </div>

        <div className="careers-info-grid">
          <article className="careers-info-card careers-info-process">
            <div className="careers-info-visual" aria-hidden="true" />
            <div className="careers-info-body">
              <div className="careers-info-head">
                <span className="career-opening-icon" aria-hidden="true">
                  <BriefcaseBusiness size={18} />
                </span>
                <h3>Hiring process</h3>
              </div>
              <ul className="careers-info-list">
                <li>Application review and recruiter connect</li>
                <li>Technical or role-based assessment</li>
                <li>Final interview and offer discussion</li>
              </ul>
            </div>
          </article>

          <article className="careers-info-card careers-info-culture">
            <div className="careers-info-visual" aria-hidden="true" />
            <div className="careers-info-body">
              <div className="careers-info-head">
                <span className="career-opening-icon" aria-hidden="true">
                  <Handshake size={18} />
                </span>
                <h3>Company culture</h3>
              </div>
              <ul className="careers-info-list">
                <li>Collaborative teams with ownership mindset</li>
                <li>Mentorship and continuous learning focus</li>
                <li>Respectful, inclusive, and outcome-driven work</li>
              </ul>
            </div>
          </article>

          <article className="careers-info-card careers-info-visa">
            <div className="careers-info-visual" aria-hidden="true" />
            <div className="careers-info-body">
              <div className="careers-info-head">
                <span className="career-opening-icon" aria-hidden="true">
                  <Globe2 size={18} />
                </span>
                <h3>Visa sponsorship</h3>
              </div>
              <ul className="careers-info-list">
                <li>Available for select roles where sponsorship is applicable</li>
                <li>Evaluated by role location, project needs, and legal eligibility</li>
                <li>Guidance provided on documentation and process timelines</li>
              </ul>
            </div>
          </article>

          <article className="careers-info-card careers-info-benefits">
            <div className="careers-info-visual" aria-hidden="true" />
            <div className="careers-info-body">
              <div className="careers-info-head">
                <span className="career-opening-icon" aria-hidden="true">
                  <Heart size={18} />
                </span>
                <h3>Benefits</h3>
              </div>
              <ul className="careers-info-list">
                <li>Competitive compensation and growth paths</li>
                <li>Flexible work models by role and location</li>
                <li>Health, leave, and wellbeing support programs</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="pro-block reveal careers-merged-shell">
        <div className="careers-merged-hero">
          <div className="careers-merged-copy">
            <span className="eyebrow">Open roles</span>
            <h2>Current opportunities</h2>
            <p>Use the filters below to refine active roles, then open any position for the full job details.</p>
          </div>

          <div className="careers-merged-signals">
            <div className="careers-merged-signal">
              <strong>{openRoles.length}</strong>
              <span>open roles</span>
            </div>
            <div className="careers-merged-signal">
              <strong>{countryCount}</strong>
              <span>countries</span>
            </div>
            <div className="careers-merged-signal">
              <strong>{locationCount}</strong>
              <span>locations</span>
            </div>
          </div>
        </div>

        <CareersOpenings />
      </section>
    </HeroShell>
  );
}
