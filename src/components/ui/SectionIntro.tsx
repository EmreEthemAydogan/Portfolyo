import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";
import { SectionEyebrow } from "./SectionEyebrow";

type SectionIntroProps = {
  /** Bölümün `aria-labelledby` ile bağlandığı başlık kimliği. */
  headingId: string;
  index: string;
  eyebrow: string;
  titleLines: readonly [string, string];
  description: string;
  className?: string;
};

/**
 * Bölüm açılışı: numaralı etiket, iki satırlı başlık ve kısa açıklama.
 * İkinci satır başlık boyutuna göre içeri kayar; tüm bölümlerde aynı ritim korunur.
 */
export function SectionIntro({ headingId, index, eyebrow, titleLines, description, className }: SectionIntroProps) {
  const [firstLine, secondLine] = titleLines;

  return (
    <div className={cn("shell", className)}>
      <SectionEyebrow index={index} label={eyebrow} className="text-accent" />
      <Reveal className="mt-7 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-8">
        <h2 id={headingId} className="font-display text-section font-semibold lg:col-span-7">
          <span className="block">{firstLine}</span>{" "}
          <span className="block pl-[1.5em]">
            {secondLine}
            <span className="text-accent">.</span>
          </span>
        </h2>
        <p className="max-w-[30rem] text-[1.0625rem] leading-relaxed lg:col-span-4 lg:col-start-9 lg:pb-1.5">
          {description}
        </p>
      </Reveal>
    </div>
  );
}
