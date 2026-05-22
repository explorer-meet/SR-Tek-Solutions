import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BriefcaseBusiness, Globe2, Layers3, MapPin, TimerReset } from "lucide-react";
import HeroShell from "@/components/hero-shell";
import { getCareerRoleBySlug, openRoles } from "@/lib/site-data";

export function generateStaticParams() {
  return openRoles.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const role = getCareerRoleBySlug(slug);

  if (!role) {
    return {
      title: "Role Not Found | SR Tek Solutions",
    };
  }

  return {
    title: `${role.title} | SR Tek Solutions`,
    description: role.summary,
  };
}

export default async function CareerRolePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const role = getCareerRoleBySlug(slug);

  if (!role) {
    notFound();
  }

  return (
    <HeroShell
      eyebrow={role.department}
      title={role.title}
      subtitle={role.summary}
      align="center"
      tone="careers"
    >
      <section className="pro-block reveal">
        <div className="career-detail-layout">
          <article className="card career-detail-main">
            <div className="career-detail-section">
              <h2>Role overview</h2>
              <p>{role.overview}</p>
            </div>

            <div className="career-detail-section">
              <h2>Responsibilities</h2>
              <ul className="career-detail-list">
                {role.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="career-detail-section">
              <h2>Requirements</h2>
              <ul className="career-detail-list">
                {role.requirements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>

          <aside className="career-detail-sidebar">
            <article className="card career-detail-facts">
              <h3>Position details</h3>
              <div className="career-fact-list">
                <span>
                  <Globe2 size={16} />
                  {role.country}
                </span>
                <span>
                  <MapPin size={16} />
                  {role.location}
                </span>
                <span>
                  <BriefcaseBusiness size={16} />
                  {role.type}
                </span>
                <span>
                  <Layers3 size={16} />
                  {role.workModel}
                </span>
                <span>
                  <TimerReset size={16} />
                  {role.experience}
                </span>
              </div>
            </article>

            <article className="card career-detail-cta">
              <h3>Interested in this role?</h3>
              <p>Reach out with your resume and the role title so the team can guide the next step quickly.</p>
              <Link className="btn btn-primary" href="/contact" prefetch>
                Apply for This Role <ArrowRight size={16} />
              </Link>
              <Link className="btn btn-secondary" href="/careers" prefetch>
                Back to Open Positions
              </Link>
            </article>
          </aside>
        </div>
      </section>
    </HeroShell>
  );
}
