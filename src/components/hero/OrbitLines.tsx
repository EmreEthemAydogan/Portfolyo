import type { CSSProperties } from "react";

/** SVG gradyan durağı için tema rengini CSS değişkeninden alır; bileşende sabit renk yazılmaz. */
function stop(color: string, opacity: number): CSSProperties {
  return { stopColor: `var(${color})`, stopOpacity: opacity };
}

/**
 * Portrenin arkasından geçen iki ince yörünge ve birinin üzerinde dolaşan ışık.
 * Işık (comet) yalnızca masaüstünde ve hareket azaltma tercihi yokken hareket eder.
 */
export function OrbitLines() {
  return (
    <svg className="orbit-lines" viewBox="0 0 400 400" fill="none" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="orbit-a" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" style={stop("--color-violet-300", 0.8)} />
          <stop offset="0.5" style={stop("--color-violet-400", 0.3)} />
          <stop offset="1" style={stop("--color-accent", 0.65)} />
        </linearGradient>
        <linearGradient id="orbit-b" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" style={stop("--color-accent", 0.1)} />
          <stop offset="0.55" style={stop("--color-indigo-400", 0.5)} />
          <stop offset="1" style={stop("--color-violet-300", 0.7)} />
        </linearGradient>
        <linearGradient id="orbit-comet" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" style={stop("--color-violet-200", 1)} />
          <stop offset="1" style={stop("--color-white", 1)} />
        </linearGradient>
      </defs>

      <ellipse cx="200" cy="214" rx="190" ry="56" transform="rotate(12 200 214)" stroke="url(#orbit-a)" strokeWidth="0.6" />
      <ellipse cx="205" cy="150" rx="150" ry="34" transform="rotate(-22 205 150)" stroke="url(#orbit-b)" strokeWidth="0.5" />

      {/* pathLength=100: tire uzunlukları yörüngenin yüzdesi olarak yazılır */}
      <ellipse
        className="orbit-lines__comet"
        cx="200"
        cy="214"
        rx="190"
        ry="56"
        transform="rotate(12 200 214)"
        pathLength={100}
        stroke="url(#orbit-comet)"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeDasharray="5 95"
      />

      <circle className="orbit-lines__node" cx="29" cy="158" r="2.2" />
      <circle className="orbit-lines__node" cx="371" cy="270" r="2.6" />
      <circle className="orbit-lines__node" cx="344" cy="94" r="1.8" />
    </svg>
  );
}
