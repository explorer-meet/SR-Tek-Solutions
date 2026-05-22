import type { IconType } from "react-icons";
import { FaAws, FaJava } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import {
  SiApachekafka,
  SiDatabricks,
  SiDocker,
  SiGooglecloud,
  SiKubernetes,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSalesforce,
  SiSap,
  SiSnowflake,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";

type TechnologyIcon = {
  icon: IconType;
  color: string;
};

const technologyIconMap = {
  aws: { icon: FaAws, color: "#FF9900" },
  azure: { icon: VscAzure, color: "#0078D4" },
  snowflake: { icon: SiSnowflake, color: "#29B5E8" },
  databricks: { icon: SiDatabricks, color: "#FF3621" },
  react: { icon: SiReact, color: "#61DAFB" },
  nodejs: { icon: SiNodedotjs, color: "#5FA04E" },
  sap: { icon: SiSap, color: "#0FAAFF" },
  salesforce: { icon: SiSalesforce, color: "#00A1E0" },
  python: { icon: SiPython, color: "#3776AB" },
  java: { icon: FaJava, color: "#E76F00" },
  kubernetes: { icon: SiKubernetes, color: "#326CE5" },
  typescript: { icon: SiTypescript, color: "#3178C6" },
  docker: { icon: SiDocker, color: "#2496ED" },
  postgresql: { icon: SiPostgresql, color: "#4169E1" },
  terraform: { icon: SiTerraform, color: "#844FBA" },
  googlecloud: { icon: SiGooglecloud, color: "#4285F4" },
  apachekafka: { icon: SiApachekafka, color: "#231F20" },
  mongodb: { icon: SiMongodb, color: "#47A248" },
} as const satisfies Record<string, TechnologyIcon>;

export type TechnologyLogoName = keyof typeof technologyIconMap;

export function TechnologyLogo({ name, className }: { name: TechnologyLogoName; className?: string }) {
  const icon = technologyIconMap[name];
  const Icon = icon.icon;

  return (
    <span className={className} aria-hidden="true">
      <Icon style={{ color: icon.color }} />
    </span>
  );
}