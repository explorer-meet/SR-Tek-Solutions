import {
  Atom,
  BadgeCheck,
  Beaker,
  Blocks,
  BriefcaseBusiness,
  Building2,
  CircuitBoard,
  CloudCog,
  Code2,
  Database,
  Headset,
  Layers3,
  Network,
  ShieldCheck,
  Sparkles,
  Telescope,
  Truck,
  Workflow,
} from "lucide-react";

const iconMap = {
  sparkles: Sparkles,
  workflow: Workflow,
  shield: ShieldCheck,
  board: CircuitBoard,
  briefcase: BriefcaseBusiness,
  cloud: CloudCog,
  layers: Layers3,
  headset: Headset,
  building: Building2,
  badge: BadgeCheck,
  telescope: Telescope,
  truck: Truck,
  flask: Beaker,
  react: Atom,
  node: Network,
  python: Code2,
  database: Database,
  java: Blocks,
  kubernetes: CloudCog,
} as const;

export type IconName = keyof typeof iconMap;

export function IconGlyph({ name, className }: { name: IconName; className?: string }) {
  const Icon = iconMap[name];
  return <Icon className={className} aria-hidden="true" />;
}
