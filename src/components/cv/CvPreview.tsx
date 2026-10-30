import Image from "next/image";
import { cvSection } from "@/data/site";

const SHEET_SIZES = "(min-width: 1024px) 20rem, (min-width: 640px) 19rem, 58vw";

/**
 * CV'nin iki gerçek sayfasıyla kurulan katmanlı belge sahnesi.
 * Işık, cam ve perspektif yalnızca CSS ile; hover'da ön sayfa hafifçe doğrulur.
 */
export function CvPreview() {
  const { front, back } = cvSection.preview;

  return (
    <div className="cv-stage">
      <div className="cv-aura" aria-hidden="true" />
      <div className="cv-beam" aria-hidden="true" />
      <div className="cv-glass" aria-hidden="true" />

      <div className="cv-sheets">
        <div className="cv-sheet cv-sheet--back" aria-hidden="true">
          <Image src={back.src} width={back.width} height={back.height} alt="" sizes={SHEET_SIZES} className="block h-auto w-full" />
        </div>
        <div className="cv-sheet cv-sheet--front">
          <Image
            src={front.src}
            width={front.width}
            height={front.height}
            alt={front.alt}
            sizes={SHEET_SIZES}
            quality={85}
            className="block h-auto w-full"
          />
        </div>
      </div>

      <span className="cv-chip" aria-hidden="true">
        <span className="cv-chip__dot" />
        {cvSection.file.name}
      </span>
    </div>
  );
}
