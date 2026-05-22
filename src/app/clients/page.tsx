import Image from "next/image";
import { IconGlyph } from "@/components/icon-glyph";
import { clientLogos, industries } from "@/lib/site-data";
import HeroShell from "@/components/hero-shell";

export default function ClientsPage() {
  return (
    <HeroShell
      title="Client Focus"
      subtitle="Trusted by organizations building large-scale digital programs."
      align="center"
      tone="clients"
    >
      <div className="prose mx-auto text-center mt-8">
        <p>We support global and regional enterprises across mission-critical programs where talent quality and execution speed are non-negotiable.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
        {industries.map((industry) => (
          <div key={industry.title} className="bg-white/5 rounded-xl p-8 flex flex-col text-left shadow-lg">
            <h3 className="tile-title-row font-bold text-lg mb-2">
              <IconGlyph name={industry.icon} className="industry-icon tile-title-icon" />
              <span>{industry.title}</span>
            </h3>
            <p className="text-muted-foreground text-sm">{industry.description}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8 mt-16 items-center">
        {clientLogos.map((logo, index) => (
          <div key={logo} className="flex items-center justify-center">
            <Image src={logo} alt={`Client logo ${index + 1}`} width={140} height={44} />
          </div>
        ))}
      </div>
    </HeroShell>
  );
}
