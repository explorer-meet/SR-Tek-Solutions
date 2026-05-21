import type { IconName } from "@/components/icon-glyph";

export const siteMeta = {
  name: "SR Tek Solutions",
  shortName: "SR Tek",
  email: "hr@srteksolutions.com",
  phones: ["201-905-3550", "732-640-7972"],
  addresses: [
    "43 W Lake Court, Franklin, NJ 08873",
    "1581 RT 27, Suite 101, Edison, NJ 08817",
  ],
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/clients", label: "Clients" },
  { href: "/contact", label: "Contact Us" },
];

export const services = [
  {
    title: "Data Warehousing and Business Intelligence",
    category: "Data",
    icon: "layers" as IconName,
    description:
      "Data architecture, pipelines, and reporting models that improve strategic decisions.",
  },
  {
    title: "Functional Business Analysts",
    category: "Business",
    icon: "workflow" as IconName,
    description:
      "Requirements, process mapping, and stakeholder alignment for delivery clarity.",
  },
  {
    title: "Healthcare Services",
    category: "Healthcare",
    icon: "headset" as IconName,
    description:
      "Domain-specific staffing and solution execution aligned to compliance needs.",
  },
  {
    title: "System and Database Administration",
    category: "Infrastructure",
    icon: "shield" as IconName,
    description:
      "Secure operations, proactive monitoring, and high-availability administration.",
  },
  {
    title: "Web App and Enterprise Portals",
    category: "Web",
    icon: "board" as IconName,
    description:
      "Enterprise web experiences built for scale, security, and productivity.",
  },
  {
    title: "Development and Testing",
    category: "Quality",
    icon: "badge" as IconName,
    description:
      "Robust engineering execution with automation and quality gates.",
  },
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
  { title: "Healthcare", icon: "headset" as IconName, description: "Clinical systems, operations, and compliance-aware delivery." },
  { title: "Financial Services", icon: "shield" as IconName, description: "Governed data, risk-aware platforms, and secure operations." },
  { title: "Retail and E-commerce", icon: "board" as IconName, description: "Digital commerce experiences designed for scale." },
  { title: "Manufacturing", icon: "workflow" as IconName, description: "Operational systems and analytics that simplify complexity." },
  { title: "Public Sector", icon: "building" as IconName, description: "Mission-focused transformation for agency needs." },
  { title: "Telecom and Media", icon: "layers" as IconName, description: "Reliability, data, and platform performance under load." },
];

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
