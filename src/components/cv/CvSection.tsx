import { Reveal } from "@/components/motion/Reveal";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { ArrowUpRight, Download } from "@/components/ui/icons";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { cvSection as cv } from "@/data/site";
import { CvPreview } from "./CvPreview";

export function CvSection() {
  const [firstLine, secondLine] = cv.titleLines;

  return (
    <section id="cv" aria-labelledby="cv-baslik" className="theme-jade relative isolate overflow-clip bg-ink-950">
      <div className="cv-light" aria-hidden="true" />

      {/* Mobilde sıra: metin, belge, eylemler. Masaüstünde belge sağ kolonda iki satırı kaplar. */}
      <div className="shell grid gap-x-8 gap-y-12 py-24 sm:py-28 lg:grid-cols-12 lg:gap-y-10 lg:py-32">
        <div className="lg:col-span-5 lg:row-start-1 lg:self-end">
          <SectionEyebrow index={cv.index} label={cv.eyebrow} className="text-jade-300" />
          <h2 id="cv-baslik" className="mt-7 font-display text-section font-semibold">
            <span className="block">{firstLine}</span>{" "}
            <span className="block pl-[1.5em]">
              {secondLine}
              <span className="text-jade-300">.</span>
            </span>
          </h2>
          <p className="mt-7 max-w-[30rem] text-[1.0625rem] leading-relaxed">{cv.description}</p>

          <h3 className="eyebrow mt-10 text-muted">{cv.contentsLabel}</h3>
          <ul className="mt-4 grid border-t border-heading/10 sm:grid-cols-2 sm:gap-x-6">
            {cv.contents.map((item) => (
              <li key={item} className="flex items-center gap-3 border-b border-heading/10 py-3 text-[0.9375rem] text-heading/85">
                <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-jade-300" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <Reveal className="lg:col-span-6 lg:col-start-7 lg:row-span-2 lg:row-start-1 lg:self-center">
          <CvPreview />
        </Reveal>

        <div className="lg:col-span-5 lg:row-start-2 lg:self-start">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ExternalLink href={cv.file.href} className="btn btn-jade">
              {cv.openLabel}
              <ArrowUpRight />
            </ExternalLink>
            <a href={cv.file.href} download={cv.file.downloadName} className="btn btn-ghost">
              {cv.downloadLabel}
              <Download />
            </a>
          </div>
          <p className="mt-4 font-display text-sm text-muted">{cv.file.details}</p>
        </div>
      </div>
    </section>
  );
}
