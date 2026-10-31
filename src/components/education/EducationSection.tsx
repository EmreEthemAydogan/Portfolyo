import { Reveal } from "@/components/motion/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { TechList } from "@/components/ui/TechList";
import { bootcamp } from "@/data/education";
import { educationIntro } from "@/data/site";
import { BackendScene } from "./BackendScene";

export function EducationSection() {
  const [firstLine, secondLine] = educationIntro.titleLines;

  return (
    <section id="egitim" aria-labelledby="egitim-baslik" className="relative isolate overflow-clip">
      <div className="education-light" aria-hidden="true" />

      <div className="shell py-24 sm:py-28 lg:py-32">
        <SectionEyebrow index={educationIntro.index} label={educationIntro.eyebrow} className="text-accent" />
        <Reveal>
          <h2 id="egitim-baslik" className="mt-7 font-display text-section font-semibold">
            <span className="block">{firstLine}</span>{" "}
            <span className="block pl-[1.5em]">
              {secondLine}
              <span className="text-accent">.</span>
            </span>
          </h2>
        </Reveal>

        {/* Mobilde sıra: başlık, sahne, program. Masaüstünde sahne solda, program sağda. */}
        <div className="mt-10 grid gap-x-8 gap-y-10 sm:mt-12 lg:mt-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <BackendScene />
          </div>

          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8 xl:col-span-4 xl:col-start-9">
            <p className="eyebrow flex items-center gap-2.5 text-accent">
              <span aria-hidden="true" className="edu-status-dot" />
              {bootcamp.status}
            </p>
            <h3
              id={`${bootcamp.id}-baslik`}
              className="mt-4 font-display text-[1.75rem] font-semibold leading-tight tracking-[-0.03em] sm:text-[2.125rem]"
            >
              {bootcamp.institution}
            </h3>
            <p className="mt-2 font-display text-lg text-heading/70">{bootcamp.program}</p>

            <ul aria-label="Program bilgileri" className="mt-6 flex flex-wrap gap-2">
              {bootcamp.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-accent/30 px-3.5 py-1.5 font-display text-[0.8125rem] font-medium text-accent-strong"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <p className="mt-6 max-w-[40rem] text-[1.0625rem] leading-relaxed">{bootcamp.description}</p>

            <h4 className="eyebrow mt-10 text-muted">{bootcamp.topicsTitle}</h4>
            <TechList
              items={bootcamp.topics}
              label={bootcamp.topicsTitle}
              className="mt-4 font-display text-lg text-heading"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
