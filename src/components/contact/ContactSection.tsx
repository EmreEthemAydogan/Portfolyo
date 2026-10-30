import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { EmailText } from "@/components/ui/EmailText";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { ArrowRight, ArrowUpRight } from "@/components/ui/icons";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { contact, person, socialLinks } from "@/data/site";
import { CopyEmailButton } from "./CopyEmailButton";

export function ContactSection() {
  const mailto = `mailto:${person.email}`;
  const [firstLine, secondLine] = contact.titleLines;
  const profiles = [socialLinks.github, socialLinks.linkedin];

  return (
    <section id="iletisim" aria-labelledby="iletisim-baslik" className="relative isolate overflow-x-clip">
      <div className="contact-light" aria-hidden="true" />

      <div className="shell pb-20 pt-24 sm:pb-24 sm:pt-28 lg:pb-28 lg:pt-36">
        <SectionEyebrow index={contact.index} label={contact.eyebrow} className="text-accent" />

        <Reveal>
          <h2 id="iletisim-baslik" className="mt-7 font-display text-closing font-semibold">
            <span className="block">{firstLine}</span>{" "}
            <span className="block pl-[1.5em]">
              {secondLine}
              <span className="text-accent">.</span>
            </span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-6">
            <p className="max-w-[32rem] text-lead">{contact.description}</p>
            {/* İmza: mesajın bir kişiden geldiğini hissettirir. Ad yanında yazdığı için görsel dekoratif. */}
            <div className="mt-8 flex items-center gap-4">
              <Image
                src={person.portrait.src}
                width={56}
                height={56}
                alt=""
                sizes="56px"
                className="size-14 rounded-full bg-white object-cover object-[50%_22%] ring-1 ring-heading/15"
              />
              <div>
                <p className="font-display font-medium text-heading">{person.name}</p>
                <p className="text-sm text-muted">{person.role}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:col-span-6 lg:justify-end">
            <a href={mailto} className="btn btn-primary">
              {contact.sendLabel}
              <ArrowRight />
            </a>
            <CopyEmailButton email={person.email} />
          </div>
        </div>

        <div className="mt-16 border-t border-heading/10 pt-8 lg:mt-20">
          <p className="eyebrow text-muted">{contact.emailLabel}</p>
          <a
            href={mailto}
            className="link-underline mt-4 inline-block max-w-full font-display text-email font-medium text-heading"
          >
            <EmailText email={person.email} />
          </a>
        </div>

        <ul aria-label="Profiller" className="mt-12 grid border-t border-heading/10 sm:grid-cols-2 sm:gap-x-8">
          {profiles.map((profile) => (
            <li key={profile.href} className="border-b border-heading/10">
              <ExternalLink
                href={profile.href}
                className="group flex items-center justify-between gap-4 py-6 font-display text-2xl font-medium tracking-[-0.02em] text-heading sm:text-3xl"
              >
                {profile.label}
                <ArrowUpRight className="size-6 text-muted transition-transform duration-500 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </ExternalLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
