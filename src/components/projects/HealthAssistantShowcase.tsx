import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { ArrowUpRight } from "@/components/ui/icons";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { TechList } from "@/components/ui/TechList";
import { healthAssistant as project } from "@/data/projects";
import { DemoVideo } from "./DemoVideo";

export function HealthAssistantShowcase() {
  const { images, captions, video } = project;
  const titleId = `${project.id}-baslik`;
  const [titleFirst, titleSecond] = project.titleLines;

  return (
    <article
      id={project.id}
      aria-labelledby={titleId}
      className="theme-abyss relative isolate overflow-x-clip bg-abyss-900"
    >
      <div className="abyss-light" aria-hidden="true" />

      <div className="shell py-16 sm:py-20 lg:py-28">
        <header className="grid gap-x-8 gap-y-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionEyebrow index={project.index} label={project.categories.join(" · ")} className="text-cyan-300" />
            <h3 id={titleId} className="mt-6 font-display text-project font-semibold">
              <span className="block">{titleFirst}</span>{" "}
              <span className="block">{titleSecond}</span>
            </h3>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <ul aria-label="Öne çıkanlar" className="flex flex-wrap gap-2">
              {project.badges.map((badge) => (
                <li
                  key={badge}
                  className="rounded-full border border-cyan-300/30 px-3.5 py-1.5 font-display text-[0.8125rem] font-medium text-cyan-200"
                >
                  {badge}
                </li>
              ))}
            </ul>
            <p className="mt-6 leading-relaxed">{project.summary}</p>
            <p className="mt-4 leading-relaxed">{project.story}</p>
          </div>
        </header>

        {/* Uygulama görüntüsü: vitrinin baskın görseli */}
        <Reveal className="mt-14 lg:mt-20 lg:ml-[16.5%]">
          <figure>
            <div className="overflow-hidden rounded-2xl bg-abyss-800 shadow-frame-dark ring-1 ring-cyan-300/15">
              <Image
                src={images.app.src}
                width={images.app.width}
                height={images.app.height}
                alt={images.app.alt}
                sizes="(min-width: 1440px) 1100px, (min-width: 1024px) 80vw, 92vw"
                quality={85}
                className="block h-auto w-full"
              />
            </div>
            <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-1 text-sm">
              <span className="text-body">{captions.app}</span>
              <span className="text-muted">{captions.appNote}</span>
            </figcaption>
          </figure>
        </Reveal>

        {/* Demo videosu (birincil) ve ödül fotoğrafı (ikincil) */}
        <div className="mt-14 grid gap-x-8 gap-y-12 lg:mt-20 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <figure>
              <DemoVideo
                src={video.src}
                poster={images.poster}
                title={video.title}
                durationLabel={video.durationLabel}
                durationText={video.durationText}
                sizes="(min-width: 1440px) 760px, (min-width: 1024px) 56vw, 92vw"
              />
              <figcaption className="mt-4 text-sm text-body">{captions.video}</figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <figure>
              <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
                <Image
                  src={images.award.src}
                  width={images.award.width}
                  height={images.award.height}
                  alt={images.award.alt}
                  sizes="(min-width: 1440px) 420px, (min-width: 1024px) 32vw, 92vw"
                  className="block h-auto w-full"
                />
              </div>
              <figcaption className="mt-4 text-sm text-body">{captions.award}</figcaption>
            </figure>
          </Reveal>
        </div>

        {/* Ekip ve kişisel katkı ayrımı */}
        <div className="mt-16 grid gap-x-8 gap-y-12 border-t border-white/10 pt-12 lg:mt-24 lg:grid-cols-12 lg:pt-14">
          <Reveal className="max-w-[15rem] sm:max-w-[20rem] lg:col-span-4 lg:max-w-none xl:col-span-3">
            <figure>
              <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
                <Image
                  src={images.team.src}
                  width={images.team.width}
                  height={images.team.height}
                  alt={images.team.alt}
                  sizes="(min-width: 1280px) 300px, (min-width: 1024px) 30vw, 22rem"
                  className="block h-auto w-full"
                />
              </div>
              <figcaption className="mt-4 text-sm text-body">{captions.team}</figcaption>
            </figure>
          </Reveal>

          <div className="lg:col-span-8 lg:col-start-5">
            <h4 className="eyebrow text-cyan-300">{project.contributionsTitle}</h4>
            <ol className="mt-6 grid border-t border-white/10 sm:grid-cols-2 sm:gap-x-8">
              {project.contributions.map((contribution, index) => (
                <li key={contribution} className="flex gap-5 border-b border-white/10 py-5">
                  <span className="pt-1 font-display text-sm tabular-nums text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-lg leading-snug text-heading">{contribution}</span>
                </li>
              ))}
            </ol>

            <div className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-8">
              <div>
                <h4 className="eyebrow text-muted">Teknolojiler</h4>
                <TechList items={project.stack} className="mt-4 font-display text-lg text-heading" />
              </div>
              <div>
                <ExternalLink href={project.repo.href} className="btn btn-cyan w-full sm:w-auto">
                  {project.repo.label}
                  <ArrowUpRight />
                </ExternalLink>
                <p className="mt-6 text-sm leading-relaxed text-muted">{project.note}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
