import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { ArrowUpRight } from "@/components/ui/icons";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { TechList } from "@/components/ui/TechList";
import { aydoganCanta as project } from "@/data/projects";
import type { MediaImage } from "@/data/types";
import { BrowserFrame } from "./BrowserFrame";
import { PhoneFrame } from "./PhoneFrame";

function AdminShot({ image, caption, sizes }: { image: MediaImage; caption: string; sizes: string }) {
  return (
    <figure>
      <div className="overflow-hidden rounded-lg shadow-frame-dark ring-1 ring-cream-50/10">
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt}
          sizes={sizes}
          quality={85}
          className="block h-auto w-full"
        />
      </div>
      <figcaption className="mt-3 flex items-center gap-3 text-sm text-cream-300">
        <span aria-hidden="true" className="h-px w-5 bg-gold-500" />
        {caption}
      </figcaption>
    </figure>
  );
}

export function AydoganCantaShowcase() {
  const { images, admin, aiApproach } = project;
  const titleId = `${project.id}-baslik`;
  const adminTitleId = `${project.id}-yonetim`;

  return (
    <article
      id={project.id}
      aria-labelledby={titleId}
      className="theme-cream relative isolate overflow-x-clip bg-cream-100 text-espresso-700"
    >
      <div className="shell pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-28">
        <header className="grid gap-x-8 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionEyebrow index={project.index} label={project.categories.join(" · ")} className="text-gold-700" />
            <h3 id={titleId} className="mt-6 font-display text-project font-semibold text-espresso-900">
              {project.title}
            </h3>
            <p className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-espresso-900/15 py-1.5 pl-3 pr-3.5 text-sm font-medium text-espresso-800">
              <span aria-hidden="true" className="size-2 rounded-full bg-live" />
              {project.status}
            </p>
            <p className="mt-7 max-w-[34rem] text-lg leading-relaxed">{project.summary}</p>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <h4 className="eyebrow text-gold-700">{project.contributionsTitle}</h4>
            <ol className="mt-5 border-t border-espresso-900/10">
              {project.contributions.map((contribution, index) => (
                <li
                  key={contribution}
                  className="flex gap-4 border-b border-espresso-900/10 py-3.5 text-[0.9375rem] leading-relaxed text-espresso-800"
                >
                  <span className="pt-0.5 font-display text-xs tabular-nums text-gold-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{contribution}</span>
                </li>
              ))}
            </ol>
            <ExternalLink href={project.live.href} className="btn btn-espresso mt-8 w-full sm:w-auto">
              {project.live.label}
              <ArrowUpRight />
            </ExternalLink>
          </div>
        </header>

        {/* Masaüstü ve mobil görünüm birlikte */}
        <Reveal className="relative mt-14 pb-[18%] sm:mt-16 sm:pb-[11%] lg:mt-20 lg:pb-[7%]">
          <BrowserFrame
            image={images.homepage}
            address={project.live.display}
            sizes="(min-width: 1440px) 1100px, (min-width: 1024px) 78vw, 88vw"
            className="w-[90%] lg:w-[84%]"
          />
          <PhoneFrame
            image={images.mobile}
            sizes="(min-width: 1024px) 15rem, 30vw"
            className="absolute bottom-0 right-0 w-[30%] sm:w-[24%] lg:w-[18%]"
          />
        </Reveal>

        {/* Çalışma biçimi ve teknik künye */}
        <div className="mt-14 grid gap-x-8 gap-y-10 border-t border-espresso-900/10 pt-10 lg:mt-20 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h4 className="max-w-[30rem] font-display text-xl font-medium leading-snug tracking-[-0.02em] text-espresso-900 sm:text-2xl">
              {aiApproach.title}
            </h4>
            <p className="mt-4 max-w-[40rem] leading-relaxed">{aiApproach.text}</p>
          </div>
          <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:col-span-4 lg:col-start-9 lg:grid-cols-1">
            <div>
              <dt className="eyebrow text-gold-700">Teknolojiler</dt>
              <dd className="mt-3">
                <TechList items={project.stack} className="font-display text-lg text-espresso-900" />
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-gold-700">Kaynak kod</dt>
              <dd className="mt-3 font-display text-lg text-espresso-900">{project.sourceNote}</dd>
            </div>
          </dl>
        </div>

        {/* Yönetim paneli: ayrı, koyu bir katman */}
        <section
          aria-labelledby={adminTitleId}
          className="theme-espresso relative mt-16 overflow-clip rounded-[1.5rem] bg-espresso-900 text-cream-200 sm:rounded-[2rem] lg:mt-20"
        >
          <div className="grid gap-12 px-5 py-12 sm:px-10 sm:py-16 lg:grid-cols-12 lg:gap-8 lg:px-14 lg:py-20">
            <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start lg:pr-4">
              <p className="eyebrow text-gold-500">{admin.eyebrow}</p>
              <h4
                id={adminTitleId}
                className="mt-5 font-display text-[2rem] font-medium leading-[1.05] tracking-[-0.03em] text-cream-50 lg:text-[2.5rem]"
              >
                {admin.title}
              </h4>
              <p className="mt-5 leading-relaxed text-cream-300">{admin.description}</p>
              <p className="mt-10 border-l border-gold-500 pl-4 text-sm leading-relaxed text-cream-200">
                <span className="font-semibold text-cream-50">Not: </span>
                {admin.disclaimer}
              </p>
            </div>

            <div className="flex flex-col gap-10 lg:col-span-8">
              <Reveal>
                <AdminShot
                  image={images.adminDashboard}
                  caption={admin.captions.dashboard}
                  sizes="(min-width: 1440px) 820px, (min-width: 1024px) 58vw, 90vw"
                />
              </Reveal>
              <Reveal delay={0.08} className="sm:ml-[14%]">
                <AdminShot
                  image={images.adminProfile}
                  caption={admin.captions.profile}
                  sizes="(min-width: 1440px) 700px, (min-width: 1024px) 50vw, 90vw"
                />
              </Reveal>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
