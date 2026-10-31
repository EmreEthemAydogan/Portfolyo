import { ContactSection } from "@/components/contact/ContactSection";
import { CvSection } from "@/components/cv/CvSection";
import { EducationSection } from "@/components/education/EducationSection";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { Hero } from "@/components/hero/Hero";
import { ProjectsSection } from "@/components/projects/ProjectsSection";

export default function HomePage() {
  return (
    <main id="icerik">
      <Hero />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <CvSection />
      <ContactSection />
    </main>
  );
}
