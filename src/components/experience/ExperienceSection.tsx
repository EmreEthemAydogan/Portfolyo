import { Reveal } from "@/components/motion/Reveal";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { cn } from "@/lib/cn";
import { experiences, type CompactExperience, type Experience, type FeaturedExperience } from "@/data/experience";
import { experienceIntro } from "@/data/site";

function Period({ entry }: { entry: Experience }) {
  return (
    <p className="font-display text-[0.9375rem] tabular-nums text-heading">
      <time dateTime={entry.start.dateTime}>{entry.start.label}</time>{" "}
      {/* Dar kolonda satır tirenin önünden kırılır: "Temmuz 2025 / – Şubat 2026" */}
      <span className="whitespace-nowrap">
        <span aria-hidden="true" className="pr-1.5 text-muted">
          –
        </span>
        <span className="sr-only">ile </span>
        <time dateTime={entry.end.dateTime}>{entry.end.label}</time>
      </span>
    </p>
  );
}

function StackTags({ items }: { items: readonly string[] }) {
  return (
    <ul aria-label="Kullanılan teknolojiler" className="mt-8 flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-heading/15 px-3 py-1 font-display text-[0.8125rem] font-medium text-heading/85"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function FeaturedBody({ entry }: { entry: FeaturedExperience }) {
  return (
    <>
      <p className="mt-6 max-w-[46rem] text-lead text-heading/90">{entry.lead}</p>
      <div className="mt-10 grid gap-x-8 gap-y-8 md:grid-cols-3">
        {entry.groups.map((group) => (
          <div key={group.title}>
            <h4 className="eyebrow text-accent">{group.title}</h4>
            <ul className="mt-4 space-y-3 border-t border-heading/10 pt-4">
              {group.items.map((item) => (
                <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed">
                  <span aria-hidden="true" className="mt-[0.8em] h-px w-3 shrink-0 bg-accent/60" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

function CompactBody({ entry }: { entry: CompactExperience }) {
  return (
    <>
      <p className="mt-5 max-w-[44rem] text-[1.0625rem] leading-relaxed text-heading/85">{entry.summary}</p>
      <ul className="mt-5 max-w-[44rem] space-y-2.5">
        {entry.items.map((item) => (
          <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed">
            <span aria-hidden="true" className="mt-[0.8em] h-px w-3 shrink-0 bg-heading/30" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export function ExperienceSection() {
  return (
    <section id="deneyim" aria-labelledby="deneyim-baslik" className="relative isolate overflow-x-clip">
      <div className="experience-light" aria-hidden="true" />

      <SectionIntro
        headingId="deneyim-baslik"
        index={experienceIntro.index}
        eyebrow={experienceIntro.eyebrow}
        titleLines={experienceIntro.titleLines}
        description={experienceIntro.description}
        className="pt-24 sm:pt-28 lg:pt-32"
      />

      <div className="shell pb-20 pt-14 sm:pb-24 lg:pb-28 lg:pt-20">
        <ol className="timeline">
          {experiences.map((entry) => (
            <li key={entry.id} className={cn("timeline__item", entry.featured && "timeline__item--featured")}>
              <span aria-hidden="true" className="timeline__node" />
              <Reveal className="grid gap-x-8 gap-y-5 lg:grid-cols-12">
                <div className="lg:col-span-3">
                  <p className={cn("eyebrow", entry.featured ? "text-accent" : "text-muted")}>{entry.kind}</p>
                  <div className="mt-3">
                    <Period entry={entry} />
                  </div>
                </div>

                <div className="lg:col-span-9">
                  <h3
                    id={`${entry.id}-baslik`}
                    className={cn(
                      "font-display font-semibold",
                      entry.featured
                        ? "text-project"
                        : "text-[1.75rem] leading-tight tracking-[-0.03em] sm:text-[2.125rem]",
                    )}
                  >
                    {entry.company}
                  </h3>
                  <p className="mt-2 font-display text-lg text-heading/70">{entry.role}</p>
                  {entry.featured ? <FeaturedBody entry={entry} /> : <CompactBody entry={entry} />}
                  <StackTags items={entry.stack} />
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
