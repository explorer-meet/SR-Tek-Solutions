import type { IconName } from "@/components/icon-glyph";
import type { TechnologyLogoName } from "@/components/technology-logo";

export const siteMeta = {
  name: "SR Tek Solutions",
  shortName: "SR Tek",
  email: "hr@srteksolutions.com",
  phones: ["201-905-3550", "732-640-7972"],
  socialLinks: {
    linkedin: "https://www.linkedin.com/company/sr-tek-solutions/",
    facebook: "https://www.facebook.com/srteksolutions",
    instagram: "https://www.instagram.com/srteksolutions",
    youtube: "https://www.youtube.com/@srteksolutions",
  },
  addresses: [
    "43 W Lake Court, Franklin, NJ 08873",
    "1581 RT 27, Suite 101, Edison, NJ 08817",
  ],
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/solutions", label: "Solutions" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  { title: "AI & Machine Learning", category: "AI/ML", icon: "sparkles" as IconName, description: "Custom AI solutions, predictive analytics, and automation for business transformation." },
  { title: "Custom Software Development", category: "Development", icon: "board" as IconName, description: "End-to-end web, mobile, and enterprise app development tailored to your needs." },
  { title: "Cloud & DevOps", category: "Cloud", icon: "cloud" as IconName, description: "Cloud migration, infrastructure automation, and CI/CD for scalable delivery." },
  { title: "Data Engineering", category: "Data", icon: "layers" as IconName, description: "Data pipelines, warehousing, and analytics for actionable insights." },
  { title: "ERP / CRM Solutions", category: "ERP/CRM", icon: "workflow" as IconName, description: "Implementation and integration of leading ERP and CRM platforms." },
  { title: "IT Staffing", category: "Staffing", icon: "briefcase" as IconName, description: "Flexible staffing solutions to scale your IT teams quickly and efficiently." },
  { title: "QA Automation", category: "Quality", icon: "badge" as IconName, description: "Automated and manual testing to ensure software quality and reliability." },
  { title: "Cybersecurity", category: "Security", icon: "shield" as IconName, description: "Security assessments, monitoring, and compliance for enterprise protection." },
  { title: "Product Engineering", category: "Engineering", icon: "board" as IconName, description: "Design, build, and evolve digital products with scalable architecture and user-focused delivery." },
];

export const capabilityPillars = [
  {
    title: "Strategy",
    icon: "telescope" as IconName,
    description: "Advisory, planning, and operating model clarity before delivery begins.",
  },
  {
    title: "Talent",
    icon: "briefcase" as IconName,
    description: "High-fit consultants and analysts sourced for skill, pace, and culture.",
  },
  {
    title: "Execution",
    icon: "workflow" as IconName,
    description: "Disciplined implementation with reporting, quality checks, and momentum.",
  },
  {
    title: "Trust",
    icon: "shield" as IconName,
    description: "Reliable delivery expectations, clear communication, and accountability.",
  },
];

export const values = [
  {
    title: "Integrity",
    description: "We uphold high ethical standards in every decision and engagement.",
  },
  {
    title: "Respect",
    description: "We value diverse ideas, backgrounds, and collaborative problem solving.",
  },
  {
    title: "Trust",
    description: "We earn confidence through delivery discipline and open communication.",
  },
  {
    title: "Teamwork",
    description: "We act as one team across our consultants, clients, and partners.",
  },
  {
    title: "Mission-Driven Approach",
    description: "We prioritize customer success and practical outcomes over buzzwords.",
  },
  {
    title: "Continuous Improvement",
    description: "We learn fast, refine the process, and compound the quality of every outcome.",
  },
];

export const industries = [
  { title: "Healthcare", icon: "headset" as IconName, description: "Digital health, EHR, and compliance-driven solutions." },
  { title: "Banking & Financial Services", icon: "shield" as IconName, description: "Secure platforms, fintech, and regulatory compliance." },
  { title: "Retail & E-Commerce", icon: "board" as IconName, description: "Omnichannel commerce, POS, and digital retail innovation." },
  { title: "Logistics", icon: "truck" as IconName, description: "Supply chain, fleet management, and logistics automation." },
  { title: "Manufacturing", icon: "workflow" as IconName, description: "Smart factory, IoT, and process optimization." },
  { title: "Pharma", icon: "flask" as IconName, description: "Pharma IT, R&D, and regulatory data management." },
  { title: "Telecom", icon: "layers" as IconName, description: "OSS/BSS, network automation, and telecom analytics." },
];
export const techStack: Array<{ name: string; logo: TechnologyLogoName }> = [
  { name: "Amazon Web Services", logo: "aws" },
  { name: "Microsoft Azure", logo: "azure" },
  { name: "Snowflake", logo: "snowflake" },
  { name: "Databricks", logo: "databricks" },
  { name: "React", logo: "react" },
  { name: "Node.js", logo: "nodejs" },
  { name: "SAP", logo: "sap" },
  { name: "Salesforce", logo: "salesforce" },
  { name: "Python", logo: "python" },
  { name: "Java", logo: "java" },
  { name: "Kubernetes", logo: "kubernetes" },
  { name: "TypeScript", logo: "typescript" },
  { name: "Docker", logo: "docker" },
  { name: "PostgreSQL", logo: "postgresql" },
  { name: "Terraform", logo: "terraform" },
  { name: "Google Cloud", logo: "googlecloud" },
  { name: "Apache Kafka", logo: "apachekafka" },
  { name: "MongoDB", logo: "mongodb" },
];

export type CareerRole = {
  slug: string;
  title: string;
  country: string;
  location: string;
  type: string;
  workModel: string;
  department: string;
  experience: string;
  summary: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
};

export const openRoles: CareerRole[] = [
  {
    slug: "senior-full-stack-engineer",
    title: "Senior Full Stack Engineer",
    country: "United States",
    location: "Edison, NJ",
    type: "Full-time",
    workModel: "Hybrid",
    department: "Engineering",
    experience: "6+ years",
    summary: "Build enterprise web platforms using React, Node.js, and cloud-native delivery pipelines.",
    overview: "You will lead end-to-end feature delivery across modern application stacks, work closely with solution architects, and help shape reliable release practices for enterprise client programs.",
    responsibilities: [
      "Own full-stack feature delivery across React, Next.js, Node.js, and API integrations.",
      "Translate business requirements into scalable technical designs with clear delivery milestones.",
      "Collaborate with QA, DevOps, and product stakeholders to maintain release quality and speed.",
      "Mentor engineers through code reviews, architecture guidance, and delivery planning.",
    ],
    requirements: [
      "Strong hands-on experience with React, TypeScript, Node.js, and relational databases.",
      "Experience designing APIs, handling authentication flows, and integrating enterprise systems.",
      "Comfort working in Agile delivery environments with direct stakeholder collaboration.",
      "Ability to balance technical quality with delivery timelines in client-facing programs.",
    ],
  },
  {
    slug: "data-engineer",
    title: "Data Engineer",
    country: "United States",
    location: "Remote",
    type: "Contract",
    workModel: "Remote",
    department: "Data Engineering",
    experience: "4+ years",
    summary: "Design scalable data pipelines and analytics models across modern data platforms.",
    overview: "You will build ingestion, transformation, and warehousing pipelines across cloud environments while partnering with analytics and business teams on trusted reporting foundations.",
    responsibilities: [
      "Develop and optimize batch and streaming pipelines across modern cloud data platforms.",
      "Build curated data models for analytics, reporting, and downstream integrations.",
      "Improve pipeline observability, cost efficiency, and reliability across environments.",
      "Partner with analysts and architects to align data structures with business outcomes.",
    ],
    requirements: [
      "Hands-on experience with SQL, Python, ETL frameworks, and cloud data services.",
      "Experience with data warehousing concepts, transformation layers, and orchestration tooling.",
      "Strong debugging skills for pipeline failures, performance bottlenecks, and schema issues.",
      "Ability to document data flows and communicate tradeoffs clearly with stakeholders.",
    ],
  },
  {
    slug: "qa-automation-engineer",
    title: "QA Automation Engineer",
    country: "United States",
    location: "Franklin, NJ",
    type: "Full-time",
    workModel: "Hybrid",
    department: "Quality Engineering",
    experience: "4+ years",
    summary: "Drive quality engineering with automation frameworks, CI integration, and release validation.",
    overview: "You will build test automation coverage across web applications and service layers, strengthen regression confidence, and help delivery teams release with lower operational risk.",
    responsibilities: [
      "Create and maintain automation suites for UI, API, and regression testing.",
      "Integrate test execution into CI pipelines and release workflows.",
      "Collaborate with developers to resolve defects early and improve testability.",
      "Track quality metrics and highlight release risks with actionable recommendations.",
    ],
    requirements: [
      "Experience with test automation frameworks for UI and API validation.",
      "Familiarity with CI/CD tooling and test reporting workflows.",
      "Strong understanding of QA processes, defect triage, and release readiness.",
      "Clear communication skills for working across distributed engineering teams.",
    ],
  },
  {
    slug: "cloud-devops-engineer",
    title: "Cloud DevOps Engineer",
    country: "Canada",
    location: "Toronto, ON",
    type: "Full-time",
    workModel: "Hybrid",
    department: "Cloud Platform",
    experience: "5+ years",
    summary: "Automate cloud delivery environments and strengthen deployment reliability across active programs.",
    overview: "You will design secure infrastructure patterns, improve deployment automation, and support engineering teams with resilient platform foundations across multi-environment delivery pipelines.",
    responsibilities: [
      "Build and maintain infrastructure as code across cloud environments.",
      "Improve CI/CD pipelines, deployment rollback practices, and environment consistency.",
      "Harden monitoring, secrets management, and operational visibility across services.",
      "Partner with developers to remove release friction and improve runtime stability.",
    ],
    requirements: [
      "Strong experience with AWS or Azure, containerization, and infrastructure automation.",
      "Hands-on familiarity with Kubernetes, Terraform, and CI/CD tooling.",
      "Operational understanding of monitoring, logging, and incident response workflows.",
      "Ability to document platform patterns and guide delivery teams through adoption.",
    ],
  },
  {
    slug: "salesforce-technical-lead",
    title: "Salesforce Technical Lead",
    country: "United Kingdom",
    location: "London",
    type: "Full-time",
    workModel: "Hybrid",
    department: "CRM Solutions",
    experience: "7+ years",
    summary: "Lead Salesforce solution delivery across enterprise service, sales, and integration initiatives.",
    overview: "You will guide CRM architecture decisions, drive implementation quality, and coordinate closely with business stakeholders on scalable platform design and rollout planning.",
    responsibilities: [
      "Lead Salesforce configuration and custom development decisions across client programs.",
      "Define integration patterns between Salesforce and surrounding enterprise systems.",
      "Oversee code quality, release planning, and environment governance.",
      "Coordinate with product owners and business teams on roadmap execution.",
    ],
    requirements: [
      "Strong Salesforce platform experience across custom objects, flows, and integrations.",
      "Experience leading delivery teams in enterprise CRM implementations.",
      "Ability to translate business workflows into maintainable technical solutions.",
      "Strong stakeholder management and delivery ownership skills.",
    ],
  },
  {
    slug: "sap-integration-consultant",
    title: "SAP Integration Consultant",
    country: "Germany",
    location: "Frankfurt",
    type: "Contract",
    workModel: "On-site",
    department: "ERP Solutions",
    experience: "6+ years",
    summary: "Support SAP integration programs with strong process alignment and enterprise system connectivity.",
    overview: "You will work with business and technical teams to align SAP processes, define integration flows, and improve reliability across complex ERP-driven delivery landscapes.",
    responsibilities: [
      "Map business process requirements to SAP integration and enhancement strategies.",
      "Coordinate interfaces between SAP modules and third-party enterprise platforms.",
      "Support testing, deployment planning, and production readiness activities.",
      "Document process dependencies, risks, and solution decisions clearly.",
    ],
    requirements: [
      "Experience in SAP implementation or integration-focused roles.",
      "Understanding of enterprise process flows across finance, operations, or supply chain.",
      "Ability to coordinate across business users, technical teams, and delivery managers.",
      "Strong documentation and analytical problem-solving skills.",
    ],
  },
  {
    slug: "business-analyst-banking-platforms",
    title: "Business Analyst - Banking Platforms",
    country: "India",
    location: "Hyderabad",
    type: "Full-time",
    workModel: "Hybrid",
    department: "Consulting",
    experience: "5+ years",
    summary: "Bridge business requirements and delivery teams across banking modernization programs.",
    overview: "You will define requirements, coordinate stakeholders, and support solution shaping for financial services initiatives involving digital platforms, workflows, and reporting improvements.",
    responsibilities: [
      "Gather and document business requirements, user journeys, and process maps.",
      "Support backlog refinement, acceptance criteria, and release scope alignment.",
      "Facilitate communication between business teams, vendors, and delivery squads.",
      "Track dependencies, risks, and change requests across program workstreams.",
    ],
    requirements: [
      "Experience as a business analyst on banking or financial services technology programs.",
      "Strong requirements documentation and stakeholder facilitation skills.",
      "Ability to work across product, delivery, QA, and architecture teams.",
      "Comfort with Agile planning, process mapping, and reporting structures.",
    ],
  },
  {
    slug: "aiml-engineer",
    title: "AI/ML Engineer",
    country: "United States",
    location: "Remote",
    type: "Full-time",
    workModel: "Remote",
    department: "AI & Data",
    experience: "5+ years",
    summary: "Build applied AI solutions that connect model development with production-ready delivery.",
    overview: "You will prototype, productionize, and optimize AI workflows for enterprise use cases while coordinating with data engineering and application teams on reliable deployment patterns.",
    responsibilities: [
      "Develop ML and generative AI solutions aligned to business use cases and guardrails.",
      "Collaborate with data engineers to operationalize training and inference workflows.",
      "Evaluate model quality, latency, and cost tradeoffs for production deployment.",
      "Document experiments, decisions, and operational considerations for cross-team reuse.",
    ],
    requirements: [
      "Strong Python experience and practical exposure to ML or AI frameworks.",
      "Understanding of production deployment patterns for models and data pipelines.",
      "Experience measuring model quality and balancing technical tradeoffs.",
      "Ability to communicate complex concepts clearly to delivery stakeholders.",
    ],
  },
];

export function getCareerRoleBySlug(slug: string) {
  return openRoles.find((role) => role.slug === slug);
}

export const heroSignals = [
  { label: "Talent speed", value: "48h", icon: "sparkles" as IconName },
  { label: "Delivery lanes", value: "6", icon: "workflow" as IconName },
  { label: "Client trust", value: "20+ yrs", icon: "badge" as IconName },
];

export const clientLogos = [
  "/brand/clients/client-1.svg",
  "/brand/clients/client-2.svg",
  "/brand/clients/client-3.svg",
  "/brand/clients/client-4.svg",
  "/brand/clients/client-5.svg",
  "/brand/clients/client-6.svg",
];
