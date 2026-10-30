import { ContactSection } from "@/components/contact/ContactSection";
import { CvSection } from "@/components/cv/CvSection";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { Hero } from "@/components/hero/Hero";
import { ProjectsSection } from "@/components/projects/ProjectsSection";

export default function HomePage() {
  return (
    <main id="icerik">
      <Hero />
      <ProjectsSection />
      <ExperienceSection />
      <CvSection />
      <ContactSection />
    </main>
  );
}
