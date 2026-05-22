import HeroShell from "@/components/hero-shell";
import { CareersOpenings } from "@/components/careers-openings";
import { SectionHeading } from "@/components/section-heading";

export default function CareersPage() {
  return (
    <HeroShell
      eyebrow="Careers"
      title="Grow your career with high-impact technology programs"
      subtitle="Browse current openings and narrow the list by country, location, and title to find the right fit faster."
      align="center"
      tone="careers"
    >
      <section className="pro-block reveal">
        <SectionHeading
          eyebrow="Open Roles"
          title="Current opportunities"
          description="Use the filters below to refine active roles, then open any position for the full job details."
          align="center"
        />
        <CareersOpenings />
      </section>
    </HeroShell>
  );
}
