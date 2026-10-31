"use client";

import type { PointerEvent } from "react";
import { m, useMotionValue, useSpring, useTransform, type MotionValue, type Variants } from "motion/react";
import { cssVar } from "@/lib/css-var";
import { useMediaQuery } from "@/lib/use-media-query";

const SPRING = { stiffness: 60, damping: 20, mass: 0.9 };
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

type Layer = "data" | "logic" | "api";

/** Katmanlar alttan üste dizilir. Şekiller soyut bir backend fikridir; eğitimin içeriğini temsil etmez. */
const LAYERS: readonly Layer[] = ["data", "logic", "api"];

/** Katmanlar arası ışık iplikleri: plaka üzerindeki konum (%) ve alttaki katmanın sırası. */
const LINKS = [
  { x: 28, y: 30, from: 0 },
  { x: 72, y: 72, from: 0 },
  { x: 50, y: 52, from: 1 },
  { x: 72, y: 28, from: 1 },
] as const;

/**
 * Hüzmedeki ışık zerreleri: sahnedeki konum (%), boyut (px), gecikme (sn).
 * Hüzme ekseni boyunca, üst plakanın üzerine binmeyecek yükseklikte durur. Mobilde ilk üçü kalır.
 */
const SPARKS = [
  { x: 69, y: 5, size: 3, delay: 0 },
  { x: 63, y: 10, size: 2, delay: -2.4 },
  { x: 75, y: 13, size: 2.5, delay: -4.1 },
  { x: 58, y: 4, size: 2, delay: -1.3 },
  { x: 80, y: 7, size: 1.5, delay: -3.2 },
  { x: 83, y: 24, size: 1.5, delay: -5 },
  { x: 51, y: 9, size: 2, delay: -0.6 },
] as const;

const rise: Variants = {
  hidden: { opacity: 0, z: -56 },
  visible: (order: number) => ({
    opacity: 1,
    z: 0,
    transition: { duration: 1.2, ease: EASE_OUT_EXPO, delay: 0.1 + order * 0.16 },
  }),
};

const fade: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number) => ({ opacity: 1, transition: { duration: 1.4, ease: EASE_OUT_EXPO, delay } }),
};

/** İmleç konumunu (-0.5…0.5) katmana özgü kaymaya ya da açıya çevirir. */
function useDepth(source: MotionValue<number>, depth: number) {
  return useTransform(source, (value) => value * depth);
}

/** Plaka yüzeyindeki soyut işaretler: kayıt hücreleri, bağlı düğümler, yönlendirme satırları. */
function Motif({ layer }: { layer: Layer }) {
  return (
    <svg className="edu-motif" viewBox="0 0 100 100" fill="none" aria-hidden="true" focusable="false">
      {layer === "data" &&
        [20, 36, 52, 68].map((y) =>
          [18, 41, 64].map((x) => (
            <rect
              key={`${x}-${y}`}
              className={y === 36 ? "edu-motif__cell edu-motif__cell--on" : "edu-motif__cell"}
              x={x}
              y={y}
              width="18"
              height="10"
              rx="2"
            />
          )),
        )}

      {layer === "logic" && (
        <>
          <path className="edu-motif__line" d="M28 30 L50 52 L72 28 M50 52 L28 74 M50 52 L72 72 M28 30 L72 28" />
          {[
            [28, 30],
            [72, 28],
            [28, 74],
            [72, 72],
          ].map(([x, y]) => (
            <circle key={`${x}-${y}`} className="edu-motif__node" cx={x} cy={y} r="4" />
          ))}
          <circle className="edu-motif__node edu-motif__node--on" cx="50" cy="52" r="5.5" />
        </>
      )}

      {layer === "api" &&
        [26, 50, 74].map((y, row) => (
          <g key={y}>
            <rect
              className={row === 0 ? "edu-motif__cell edu-motif__cell--on" : "edu-motif__cell"}
              x="16"
              y={y - 4}
              width="16"
              height="8"
              rx="4"
            />
            <path className="edu-motif__line" d={`M38 ${y} H${[76, 66, 82][row]} m-4 -4 l4 4 l-4 4`} />
          </g>
        ))}
    </svg>
  );
}

/**
 * Backend fikrini anlatan katmanlı sahne: perspektifte üst üste duran üç plaka,
 * aralarındaki ışık iplikleri, sağ üstten düşen hüzme ve ışık zerreleri. Tamamen dekoratiftir.
 * Eğim ve paralaks yalnızca masaüstünde, hassas imleçte ve hareket azaltma tercihi yokken çalışır.
 */
export function BackendScene() {
  const interactive = useMediaQuery(
    "(min-width: 64rem) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
  );

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, SPRING);
  const y = useSpring(pointerY, SPRING);

  // Sahne imlece doğru birkaç derece eğilir; ışık katmanları ters yönde birkaç piksel kayar.
  const tiltX = useDepth(y, -6);
  const tiltY = useDepth(x, 8);
  const glowX = useDepth(x, -8);
  const glowY = useDepth(y, -6);
  const beamX = useDepth(x, -12);
  const beamY = useDepth(y, -8);
  const sparkX = useDepth(x, -20);
  const sparkY = useDepth(y, -14);

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!interactive) return;
    const box = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - box.left) / box.width - 0.5);
    pointerY.set((event.clientY - box.top) / box.height - 0.5);
  };

  const onPointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <m.div
      className="edu-stage"
      aria-hidden="true"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <m.div className="edu-layer" variants={fade} custom={0} data-reveal="" style={{ x: glowX, y: glowY }}>
        <div className="edu-aura" />
      </m.div>

      <m.div className="edu-tilt" style={{ rotateX: tiltX, rotateY: tiltY }}>
        <div className="edu-stack">
          <m.div className="edu-floor" variants={fade} custom={0.1} data-reveal="" />

          {LAYERS.map((layer, order) => (
            <m.div
              key={layer}
              className={`edu-plate edu-plate--${layer}`}
              style={cssVar("--level", order)}
              variants={rise}
              custom={order}
              data-reveal=""
            >
              <Motif layer={layer} />
            </m.div>
          ))}

          {LINKS.map((link, index) => (
            <m.span
              key={`link-${link.x}-${link.y}`}
              className="edu-link"
              style={{ left: `${link.x}%`, top: `${link.y}%`, ...cssVar("--from", link.from) }}
              variants={fade}
              custom={0.75 + index * 0.08}
              data-reveal=""
            />
          ))}

          {LINKS.map((link, index) => (
            <span
              key={`pulse-${link.x}-${link.y}`}
              className="edu-pulse"
              style={{
                left: `${link.x}%`,
                top: `${link.y}%`,
                animationDelay: `${index * -0.9}s`,
                ...cssVar("--from", link.from),
              }}
            />
          ))}
        </div>
      </m.div>

      <m.div className="edu-layer edu-layer--beam" variants={fade} custom={0.35} data-reveal="" style={{ x: beamX, y: beamY }}>
        <div className="edu-beam" />
      </m.div>

      <m.div className="edu-layer" variants={fade} custom={0.6} data-reveal="" style={{ x: sparkX, y: sparkY }}>
        {SPARKS.map((spark) => (
          <span
            key={`${spark.x}-${spark.y}`}
            className="edu-spark"
            style={{
              left: `${spark.x}%`,
              top: `${spark.y}%`,
              width: spark.size,
              height: spark.size,
              animationDelay: `${spark.delay}s`,
            }}
          />
        ))}
      </m.div>
    </m.div>
  );
}
