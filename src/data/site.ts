import type { LinkItem, MediaImage } from "./types";

/*
 * Site genelindeki metinler ve bağlantılar.
 * Bağlantıların tek doğru kaynağı burasıdır; bileşenler URL yazmaz.
 * Metinler proje sahibinin brief'i ve CV'siyle sınırlıdır (CLAUDE.md, bölüm 5).
 */

export const siteMeta = {
  title: "Emre Ethem Aydoğan · Bilgisayar Mühendisi",
  description:
    "İhtiyacı anlayıp canlıda çalışan sistemlere dönüştüren bilgisayar mühendisi Emre Ethem Aydoğan'ın portföyü: full stack web, ERP ve RAG tabanlı yapay zekâ projeleri.",
  /** globals.css içindeki --color-ink-900 ile aynı değer. */
  themeColor: "#0b1020",
} as const;

export const person = {
  name: "Emre Ethem Aydoğan",
  monogram: "EEA",
  role: "Bilgisayar Mühendisi",
  email: "emreethemaydogan.dev@gmail.com",
  portrait: {
    src: "/images/profile/emre-portrait.png",
    width: 527,
    height: 572,
    alt: "Emre Ethem Aydoğan'ın portre fotoğrafı. Koyu lacivert gömlek giymiş, beyaz fon önünde kameraya bakıyor.",
  } satisfies MediaImage,
} as const;

/** Adresler CV'deki (public/files/emre-ethem-aydogan-cv.pdf) bağlantılarla aynıdır. */
export const socialLinks = {
  github: { label: "GitHub", href: "https://github.com/EmreEthemAydogan", external: true },
  linkedin: { label: "LinkedIn", href: "https://www.linkedin.com/in/emreethemaydogan/", external: true },
} as const satisfies Record<string, LinkItem>;

export const navItems: readonly LinkItem[] = [
  { label: "Projeler", href: "#projeler" },
  { label: "Deneyim", href: "#deneyim" },
  { label: "CV", href: "#cv" },
  { label: "İletişim", href: "#iletisim" },
  socialLinks.github,
  socialLinks.linkedin,
];

export const hero = {
  eyebrow: "Bilgisayar Mühendisi",
  nameLines: ["Emre Ethem", "Aydoğan"],
  tagline: "Yazılım geliştirirken önce ihtiyacı anlamaya odaklanırım.",
  description:
    "Önce kullanıcıyı dinler, ihtiyacı netleştiririm. Ardından bu ihtiyaca uygun, günlük işlerde kullanılabilecek uygulamalar geliştiririm. Web uygulamaları, ERP sistemleri ve yapay zekâ entegrasyonları üzerine çalışıyorum.",
  primaryCta: { label: "Projelerimi İncele", href: "#projeler" },
  secondaryCta: { label: "GitHub Profilim", href: socialLinks.github.href },
  focusAreas: ["Full stack web uygulamaları", "ERP ve kurumsal sistemler", "RAG ve yapay zekâ entegrasyonu"],
} as const;

export const projectsIntro = {
  index: "01",
  eyebrow: "Projeler",
  titleLines: ["Seçili", "projeler"],
  description:
    // ‑: bölünmeyen tire; "e-ticaret" satır sonunda ikiye ayrılmaz.
    "İki proje, iki farklı sınav. Biri kullanıcıların sipariş verip ödeme yapabildiği, canlıdaki bir e‑ticaret sistemi. Diğeri ekip olarak hackathon birinciliği kazandığımız bir yapay zekâ uygulaması.",
} as const;

export const experienceIntro = {
  index: "02",
  eyebrow: "Deneyim",
  titleLines: ["Sahada", "öğrendiklerim"],
  description:
    "ERP danışmanlığından bankacılık temalı bir RAG projesine kadar farklı ekiplerde çalıştım. Her rolde yazılımı biraz daha işin içinden, kullanıcının gözünden görmeyi öğrendim.",
} as const;

/** Deneyimden ayrı tutulur: bootcamp profesyonel iş deneyimi değildir. İçerik `education.ts` içinde. */
export const educationIntro = {
  index: "03",
  eyebrow: "Eğitim",
  titleLines: ["Eğitim ve", "Bootcamp"],
} as const;

export const cvSection = {
  index: "04",
  eyebrow: "Özgeçmiş",
  titleLines: ["Hepsi", "tek belgede"],
  description:
    "Deneyimlerim, teknik yetkinliklerim ve proje geçmişimin kısa bir özeti. Tarayıcıda açıp göz atabilir ya da PDF olarak indirebilirsiniz.",
  contentsLabel: "Belgede neler var",
  /** CV'nin gerçek bölüm başlıklarından derlendi. */
  contents: ["Profesyonel deneyim ve stajlar", "Teknik yetkinlikler", "Projeler ve başarılar", "Eğitim ve yabancı dil"],
  openLabel: "CV’yi Aç",
  downloadLabel: "PDF İndir",
  file: {
    href: "/files/emre-ethem-aydogan-cv.pdf",
    name: "emre-ethem-aydogan-cv.pdf",
    downloadName: "Emre-Ethem-Aydogan-CV.pdf",
    /** PDF değişirse sayfa sayısını ve boyutu güncelle. */
    details: "PDF · 2 sayfa · 130 KB",
  },
  /** PDF sayfalarının birebir render'ı (pypdfium2, ölçek 2). */
  preview: {
    front: {
      src: "/images/cv/cv-page-1.png",
      width: 1191,
      height: 1685,
      alt: "Özgeçmişin ilk sayfası: özet, teknik yetkinlikler, profesyonel deneyim ve staj deneyimleri.",
    },
    back: {
      src: "/images/cv/cv-page-2.png",
      width: 1191,
      height: 1685,
      alt: "",
    },
  } satisfies Record<string, MediaImage>,
} as const;

export const contact = {
  index: "05",
  eyebrow: "İletişim",
  titleLines: ["Fikriniz varsa,", "konuşalım"],
  description:
    "Yeni bir proje, bir iş fırsatı ya da teknik bir soru. Bana e-postayla ya da LinkedIn üzerinden ulaşabilirsiniz.",
  emailLabel: "E-posta",
  sendLabel: "E-posta Gönder",
} as const;
