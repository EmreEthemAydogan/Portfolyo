"use client";

import { m } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Saniye cinsinden gecikme. */
  delay?: number;
  /** Başlangıçtaki dikey kayma (px). */
  y?: number;
};

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

/** Görünür alana girince bir kez, yumuşakça beliren sarmalayıcı. */
export function Reveal({ children, className, delay = 0, y = 32 }: RevealProps) {
  return (
    <m.div
      data-reveal=""
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1.1, ease: EASE_OUT_EXPO, delay }}
    >
      {children}
    </m.div>
  );
}
