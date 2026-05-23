import HeroShell from "@/components/hero-shell";
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
