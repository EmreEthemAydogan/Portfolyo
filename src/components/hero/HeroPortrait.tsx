"use client";

import Image from "next/image";
import { useEffect } from "react";
import { m, useMotionValue, useSpring, useTransform, type MotionValue } from "motion/react";
import { useMediaQuery } from "@/lib/use-media-query";
import { person } from "@/data/site";
import { OrbitLines } from "./OrbitLines";

const SPRING = { stiffness: 60, damping: 20, mass: 0.9 };

/** İmleç konumunu (-0.5…0.5) katmana özgü piksel kaymasına çevirir. */
function useDepth(source: MotionValue<number>, depth: number) {
  return useTransform(source, (value) => value * depth);
}

/**
 * Portre ve arkasındaki ışık kompozisyonu: aura, hüzmeler, yörüngeler,
 * krom halka, cam panel ve küre. Fotoğraf her zaman en öndedir.
 * Derinlik efekti yalnızca masaüstünde, hassas imleçte ve
 * hareket azaltma tercihi yokken çalışır.
 */
export function HeroPortrait() {
  const interactive = useMediaQuery(
    "(min-width: 64rem) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
  );

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, SPRING);
  const y = useSpring(pointerY, SPRING);

  useEffect(() => {
    if (!interactive) {
      pointerX.set(0);
      pointerY.set(0);
      return;
    }

    const onPointerMove = (event: PointerEvent) => {
      pointerX.set(event.clientX / window.innerWidth - 0.5);
      pointerY.set(event.clientY / window.innerHeight - 0.5);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, [interactive, pointerX, pointerY]);

  // Uzaktaki katman daha çok, öndeki portre daha az ve ters yönde hareket eder.
  // Işık katmanları en uzaktadır ama sakin kalsın diye az kayar.
  const auraX = useDepth(x, -8);
  const auraY = useDepth(y, -6);
  const beamX = useDepth(x, -16);
  const beamY = useDepth(y, -10);
  const orbitX = useDepth(x, -30);
  const orbitY = useDepth(y, -20);
  const glassX = useDepth(x, -20);
  const glassY = useDepth(y, -14);
  const sphereX = useDepth(x, -12);
  const sphereY = useDepth(y, -10);
  const plateX = useDepth(x, 8);
  const plateY = useDepth(y, 6);
  const tiltY = useDepth(x, 5);
  const tiltX = useDepth(y, -4);

  return (
    <div className="portrait">
      <m.div className="portrait__layer" style={{ x: auraX, y: auraY }} aria-hidden="true">
        <div className="portrait__aura" />
        <div className="portrait__halo" />
      </m.div>

      <m.div className="portrait__layer" style={{ x: beamX, y: beamY }} aria-hidden="true">
        <div className="portrait__grid" />
        <div className="portrait__beams">
          <span className="beam beam--1" />
          <span className="beam beam--2" />
          <span className="beam beam--3" />
        </div>
      </m.div>

      <m.div className="portrait__layer" style={{ x: orbitX, y: orbitY }} aria-hidden="true">
        <OrbitLines />
        <div className="orbit orbit--metal">
          <div className="orbit__ring" />
        </div>
      </m.div>

      <m.div className="portrait__layer" style={{ x: glassX, y: glassY }} aria-hidden="true">
        <div className="glass-slab" />
      </m.div>

      <m.div className="portrait__layer" style={{ x: sphereX, y: sphereY }} aria-hidden="true">
        <div className="chrome-sphere" />
      </m.div>

      <m.figure
        className="portrait__plate"
        style={{ x: plateX, y: plateY, rotateX: tiltX, rotateY: tiltY, transformPerspective: 1200 }}
      >
        <Image
          src={person.portrait.src}
          width={person.portrait.width}
          height={person.portrait.height}
          alt={person.portrait.alt}
          sizes="(min-width: 1024px) 26rem, (min-width: 640px) 21rem, 72vw"
          preload
          className="portrait__image"
        />
        <span className="portrait__tint" aria-hidden="true" />
      </m.figure>
    </div>
  );
}
