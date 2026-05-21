import type { IconName } from "@/components/icon-glyph";

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
export const techStack = [
  { name: "AWS", icon: "cloud" as IconName },
  { name: "Azure", icon: "cloud" as IconName },
  { name: "Snowflake", icon: "database" as IconName },
  { name: "Databricks", icon: "database" as IconName },
  { name: "React", icon: "react" as IconName },
  { name: "Node.js", icon: "node" as IconName },
  { name: "SAP", icon: "building" as IconName },
  { name: "Salesforce", icon: "cloud" as IconName },
  { name: "Python", icon: "python" as IconName },
  { name: "Java", icon: "java" as IconName },
  { name: "Kubernetes", icon: "kubernetes" as IconName },
];
export const careersInfo = {
  highlights: [
    "Open roles",
    "Hiring process",
    "Company culture",
    "Visa sponsorship if applicable",
    "Benefits",
  ],
};

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
