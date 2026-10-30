import { ExternalLink } from "@/components/ui/ExternalLink";
import { ArrowDown, ArrowUpRight } from "@/components/ui/icons";
import { cssVar } from "@/lib/css-var";
import { hero } from "@/data/site";
import { HeroPortrait } from "./HeroPortrait";

export function Hero() {
  const [firstLine, lastLine] = hero.nameLines;

  return (
    <section
      id="top"
      aria-labelledby="hero-baslik"
      className="relative isolate flex min-h-svh flex-col overflow-x-clip"
    >
      <div className="hero-atmosphere" aria-hidden="true" />

      <div className="shell grid flex-1 grid-cols-1 content-center gap-y-14 pb-14 pt-28 sm:pt-32 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0 lg:pb-16 lg:pt-32">
        {/* İsim — mobilde fotoğrafın üstünde, masaüstünde sol kolonda */}
        <div className="lg:col-span-6 lg:row-start-1 lg:self-end">
          <p className="eyebrow intro-fade flex items-center gap-3 text-accent">
            <span aria-hidden="true" className="h-px w-8 bg-accent/60" />
            {hero.eyebrow}
          </p>
          <h1 id="hero-baslik" className="mt-6 font-display text-hero font-semibold lg:mt-7">
            <span className="intro-line">
              <span style={cssVar("--d", "80ms")}>{firstLine}</span>
            </span>{" "}
            <span className="intro-line">
              <span style={cssVar("--d", "180ms")}>
                {lastLine}
                <span className="text-accent">.</span>
              </span>
            </span>
          </h1>
        </div>

        {/* Portre — masaüstünde sağ kolonda iki satırı kaplar */}
        <div
          className="intro-fade lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:self-center"
          style={cssVar("--d", "260ms")}
        >
          <HeroPortrait />
        </div>

        {/* Slogan, açıklama ve eylemler */}
        <div className="lg:col-span-6 lg:row-start-2 lg:self-start lg:pt-8">
          <p
            className="intro-fade max-w-[28rem] text-balance font-display text-lead font-medium text-heading"
            style={cssVar("--d", "340ms")}
          >
            {hero.tagline}
          </p>
          <p className="intro-fade mt-5 max-w-[34rem] text-[1.0625rem] leading-relaxed" style={cssVar("--d", "420ms")}>
            {hero.description}
          </p>
          <div className="intro-fade mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap" style={cssVar("--d", "500ms")}>
            <a href={hero.primaryCta.href} className="btn btn-primary">
              {hero.primaryCta.label}
              <ArrowDown />
            </a>
            <ExternalLink href={hero.secondaryCta.href} className="btn btn-ghost">
              {hero.secondaryCta.label}
              <ArrowUpRight />
            </ExternalLink>
          </div>
        </div>
      </div>

      {/* Odak alanları şeridi */}
      <div className="shell hidden pb-8 md:block">
        <div className="intro-fade flex items-center justify-between gap-8 border-t border-heading/10 pt-5" style={cssVar("--d", "640ms")}>
          <ul className="flex flex-wrap gap-x-8 gap-y-2 lg:gap-x-10" aria-label="Odak alanları">
            {hero.focusAreas.map((area, index) => (
              <li key={area} className="flex items-baseline gap-3 text-sm">
                <span className="font-display text-xs tabular-nums text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-body">{area}</span>
              </li>
            ))}
          </ul>
          <a href="#projeler" className="eyebrow link-underline hidden shrink-0 py-1 text-muted hover:text-heading lg:inline-block">
            Projelere geç
          </a>
        </div>
      </div>
    </section>
  );
}
