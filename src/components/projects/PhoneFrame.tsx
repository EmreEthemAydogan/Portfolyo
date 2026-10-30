import Image from "next/image";
import { cn } from "@/lib/cn";
import type { MediaImage } from "@/data/types";

type PhoneFrameProps = {
  image: MediaImage;
  sizes: string;
  className?: string;
};

/** Gerçek mobil ekran görüntüsü için ince, koyu çerçeve. */
export function PhoneFrame({ image, sizes, className }: PhoneFrameProps) {
  return (
    <figure
      className={cn(
        "rounded-[1.5rem] bg-espresso-950 p-1.5 shadow-frame-cream ring-1 ring-black/10 sm:rounded-[1.75rem] sm:p-2",
        className,
      )}
    >
      <div className="overflow-hidden rounded-[1.125rem] sm:rounded-[1.375rem]">
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
    </figure>
  );
}
