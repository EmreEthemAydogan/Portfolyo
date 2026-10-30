"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { EmailText } from "@/components/ui/EmailText";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { ArrowUpRight } from "@/components/ui/icons";
import { cssVar } from "@/lib/css-var";
import { contact, navItems, person } from "@/data/site";
import type { LinkItem } from "@/data/types";

const MENU_ID = "mobil-menu";

// Masaüstünde bölüm bağlantıları ile dış profiller ayrı gruplarda durur.
const sectionLinks = navItems.filter((item) => !item.external);
const profileLinks = navItems.filter((item) => item.external);

function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

const readScrolled = () => window.scrollY > 24;
const readScrolledOnServer = () => false;

function Monogram() {
  return (
    <>
      {person.monogram}
      <span className="text-accent">.</span>
    </>
  );
}

function DesktopNavLink({ item }: { item: LinkItem }) {
  const className =
    "link-underline inline-flex items-center gap-1.5 py-2 font-display text-[0.9375rem] font-medium text-heading/80 hover:text-heading";

  if (item.external) {
    return (
      <ExternalLink href={item.href} className={className}>
        {item.label}
        <ArrowUpRight className="size-3.5 opacity-70" />
      </ExternalLink>
    );
  }

  return (
    <a href={item.href} className={className}>
      {item.label}
    </a>
  );
}

export function SiteHeader() {
  const scrolled = useSyncExternalStore(subscribeToScroll, readScrolled, readScrolledOnServer);
  const menuRef = useRef<HTMLDialogElement>(null);

  // Masaüstü genişliğe geçilirse açık mobil menüyü kapat.
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 64rem)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) menuRef.current?.close();
    };
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  const openMenu = () => menuRef.current?.showModal();
  const closeMenu = () => menuRef.current?.close();

  const menuLinkClass =
    "flex items-center gap-5 py-4 font-display text-[2.25rem] font-medium leading-none tracking-[-0.03em] text-heading";

  return (
    <>
      <header
        data-scrolled={scrolled ? "" : undefined}
        className="site-header fixed inset-x-0 top-0 z-40"
      >
        <div className="shell flex h-16 items-center justify-between lg:h-20">
          <a href="#top" className="monogram" aria-label={`${person.name}, sayfanın başına dön`}>
            <Monogram />
          </a>

          <nav aria-label="Ana menü" className="hidden lg:flex lg:items-center">
            <ul className="flex items-center gap-8">
              {sectionLinks.map((item) => (
                <li key={item.href}>
                  <DesktopNavLink item={item} />
                </li>
              ))}
            </ul>
            <ul className="ml-8 flex items-center gap-8 border-l border-heading/15 pl-8">
              {profileLinks.map((item) => (
                <li key={item.href}>
                  <DesktopNavLink item={item} />
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className="menu-toggle lg:hidden"
            aria-haspopup="dialog"
            aria-controls={MENU_ID}
            onClick={openMenu}
          >
            Menü
          </button>
        </div>
      </header>

      <dialog id={MENU_ID} ref={menuRef} aria-label="Site menüsü" className="menu-dialog">
        <div className="shell flex h-16 shrink-0 items-center justify-between">
          <span className="monogram" aria-hidden="true">
            <Monogram />
          </span>
          <button type="button" className="menu-toggle" onClick={closeMenu}>
            Kapat
          </button>
        </div>

        <nav aria-label="Mobil menü" className="shell mt-8 sm:mt-14">
          <ul className="border-t border-heading/10">
            {navItems.map((item, index) => {
              const content = (
                <>
                  <span className="w-6 font-display text-sm tabular-nums text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">{item.label}</span>
                  {item.external ? <ArrowUpRight className="size-6 text-muted" /> : null}
                </>
              );

              return (
                <li key={item.href} className="menu-item border-b border-heading/10" style={cssVar("--i", index)}>
                  {item.external ? (
                    <ExternalLink href={item.href} className={menuLinkClass}>
                      {content}
                    </ExternalLink>
                  ) : (
                    <a href={item.href} className={menuLinkClass} onClick={closeMenu}>
                      {content}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="menu-item shell mt-auto pb-10 pt-12" style={cssVar("--i", navItems.length)}>
          <p className="eyebrow text-muted">{contact.emailLabel}</p>
          <a href={`mailto:${person.email}`} className="mt-3 inline-block font-display text-lg text-heading">
            <EmailText email={person.email} />
          </a>
        </div>
      </dialog>
    </>
  );
}
