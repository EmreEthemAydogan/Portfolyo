import Image from "next/image";
import { cn } from "@/lib/cn";
import type { MediaImage } from "@/data/types";

type BrowserFrameProps = {
  image: MediaImage;
  /** Adres çubuğunda gösterilecek gerçek alan adı. */
  address: string;
  sizes: string;
  className?: string;
};

/** Gerçek masaüstü ekran görüntüsü için sade tarayıcı çerçevesi (krem tema). */
export function BrowserFrame({ image, address, sizes, className }: BrowserFrameProps) {
  return (
    <figure className={cn("overflow-hidden rounded-xl bg-cream-50 shadow-frame-cream ring-1 ring-espresso-900/10", className)}>
      <div
        aria-hidden="true"
        className="flex h-8 items-center gap-3 border-b border-espresso-900/10 px-3 text-espresso-500 sm:h-9 sm:px-4"
      >
        <span className="flex w-10 gap-1.5">
          <span className="size-2 rounded-full bg-current opacity-30" />
          <span className="size-2 rounded-full bg-current opacity-30" />
          <span className="size-2 rounded-full bg-current opacity-30" />
        </span>
        <span className="mx-auto truncate rounded-full bg-espresso-900/5 px-3 py-0.5 text-[0.6875rem] tracking-wide">
          {address}
        </span>
        <span className="w-10" />
      </div>
      <Image
        src={image.src}
        width={image.width}
        height={image.height}
        alt={image.alt}
        sizes={sizes}
        quality={85}
        className="block h-auto w-full"
      />
    </figure>
  );
}
