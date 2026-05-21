import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CircuitBoard,
  CloudCog,
  Headset,
  Layers3,
  ShieldCheck,
  Sparkles,
  Telescope,
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
} as const;

export type IconName = keyof typeof iconMap;

export function IconGlyph({ name, className }: { name: IconName; className?: string }) {
  const Icon = iconMap[name];
  return <Icon className={className} aria-hidden="true" />;
}
