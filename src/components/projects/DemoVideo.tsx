"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PlayIcon } from "@/components/ui/icons";
import type { MediaImage } from "@/data/types";

type DemoVideoProps = {
  src: string;
  poster: MediaImage;
  title: string;
  durationLabel: string;
  durationText: string;
  sizes: string;
};

/**
 * Kapak görselli video alanı.
 * `preload="none"` sayesinde kullanıcı oynat'a basana kadar video verisi indirilmez.
 * Oynatma, iOS dahil tüm tarayıcılarda kullanıcı hareketinin içinde başlatılır.
 */
export function DemoVideo({ src, poster, title, durationLabel, durationText, sizes }: DemoVideoProps) {
  const [active, setActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (active) videoRef.current?.focus();
  }, [active]);

  const start = () => {
    setActive(true);
    videoRef.current?.play().catch(() => {
      // Oynatma engellenirse yerel kontroller görünür kalır; kullanıcı elle başlatabilir.
    });
  };

  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl bg-abyss-950 shadow-frame-dark ring-1 ring-cyan-300/15">
      <Image src={poster.src} alt="" fill sizes={sizes} className="object-cover" />

      <video
        ref={videoRef}
        src={src}
        preload="none"
        playsInline
        controls={active}
        aria-label={title}
        className={active ? "absolute inset-0 size-full bg-abyss-950 object-contain" : "invisible absolute inset-0 size-full"}
      >
        Tarayıcınız bu videoyu oynatamıyor. <a href={src}>Videoyu indirin</a>.
      </video>

      {active ? null : (
        <button
          type="button"
          onClick={start}
          className="group absolute inset-0 flex items-end justify-between gap-4 bg-linear-to-t from-abyss-950/90 via-abyss-950/10 to-transparent p-5 text-left sm:p-7"
        >
          <span className="sr-only">{`${title}: oynat, süre ${durationText}`}</span>
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-cyan-300 text-abyss-900 shadow-frame-dark transition-transform duration-500 ease-out-expo group-hover:scale-[1.06] group-active:scale-95 sm:size-[4.5rem]"
          >
            <PlayIcon className="ml-0.5 size-6" />
          </span>
          <span aria-hidden="true" className="font-display text-sm font-medium text-heading">
            Demoyu izle
          </span>
          <span aria-hidden="true" className="font-display text-sm tabular-nums text-body">
            {durationLabel}
          </span>
        </button>
      )}
    </div>
  );
}
