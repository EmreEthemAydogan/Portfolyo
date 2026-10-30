import { SectionIntro } from "@/components/ui/SectionIntro";
import { projectsIntro } from "@/data/site";
import { AydoganCantaShowcase } from "./AydoganCantaShowcase";
import { HealthAssistantShowcase } from "./HealthAssistantShowcase";

export function ProjectsSection() {
  return (
    <section id="projeler" aria-labelledby="projeler-baslik">
      <SectionIntro
        headingId="projeler-baslik"
        index={projectsIntro.index}
        eyebrow={projectsIntro.eyebrow}
        titleLines={projectsIntro.titleLines}
        description={projectsIntro.description}
        className="pb-14 pt-24 sm:pb-16 sm:pt-28 lg:pb-20 lg:pt-32"
      />

      <AydoganCantaShowcase />
      <HealthAssistantShowcase />
    </section>
  );
}
