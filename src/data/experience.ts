import type { MonthStamp } from "./types";

/*
 * İş deneyimleri. Kaynak: proje sahibinin brief'i ve CV'si
 * (public/files/emre-ethem-aydogan-cv.pdf). Metinler bu iki kaynağın dışına çıkmaz.
 */

type ExperienceBase = {
  id: string;
  company: string;
  role: string;
  kind: string;
  start: MonthStamp;
  end: MonthStamp;
  stack: readonly string[];
};

/** Öne çıkan deneyim: giriş metni ve başlıklara ayrılmış sorumluluklar. */
export type FeaturedExperience = ExperienceBase & {
  featured: true;
  lead: string;
  groups: readonly { title: string; items: readonly string[] }[];
};

/** Kısa deneyim: tek cümlelik özet ve madde listesi. */
export type CompactExperience = ExperienceBase & {
  featured: false;
  summary: string;
  items: readonly string[];
};

export type Experience = FeaturedExperience | CompactExperience;

export const experiences: readonly Experience[] = [
  {
    id: "deneyim-ekstrem",
    featured: true,
    company: "Ekstrem Yazılım",
    role: "Yazılım Danışmanı",
    kind: "Profesyonel deneyim",
    start: { label: "Temmuz 2025", dateTime: "2025-07" },
    end: { label: "Şubat 2026", dateTime: "2026-02" },
    lead: "Bu rolde yazılımı kullanıcının tarafından da gördüm. Müşterilerle birebir görüşüp ihtiyaçlarını dinledim, bunları ERP modüllerinde teknik çözümlere dönüştürdüm. Canlı sistemde bir sorun çıktığında kök nedenine inmek de işimin bir parçasıydı.",
    groups: [
      {
        title: "Analiz ve iletişim",
        items: [
          "Kullanıcıların ve iş birimlerinin ihtiyaçlarını analiz ettim.",
          "Müşterilerle birebir görüşerek ihtiyaçlarını anladım.",
          "Bu ihtiyaçları yazılım gereksinimlerine dönüştürdüm.",
        ],
      },
      {
        title: "Geliştirme",
        items: [
          "C# ve SQL ile ERP sisteminin muhasebe, stok ve üretim modüllerinde geliştirme ve iyileştirme çalışmalarında yer aldım.",
          "Gereksinimlere karşılık gelen teknik çözümler geliştirdim.",
        ],
      },
      {
        title: "Canlı sistem ve destek",
        items: [
          "Yazılım ve veri kaynaklı sorunların kök nedenini analiz edip hataları giderdim.",
          "Test, versiyon geçişi ve canlıya alma süreçlerinde teknik ekiple birlikte çalıştım.",
          "Son kullanıcılara teknik destek ve ERP modülleri için eğitim verdim.",
        ],
      },
    ],
    stack: ["C#", "SQL", "ERP"],
  },
  {
    id: "deneyim-intertech",
    featured: false,
    company: "Intertech",
    role: "Yapay Zekâ & Backend Yazılım Stajyeri",
    kind: "Staj",
    start: { label: "Haziran 2024", dateTime: "2024-06" },
    end: { label: "Ağustos 2024", dateTime: "2024-08" },
    summary:
      "DenizBank temalı, kullanıcı şikâyetlerini analiz edip sınıflandırmaya yönelik RAG tabanlı bir chatbot projesinde görev aldım.",
    items: [
      "Dokümanlardan ilgili bilgiyi alıp bağlama uygun yanıt üreten servisler üzerinde çalıştım.",
      "Python ve REST API kullanarak chatbotun uygulama bileşenleriyle entegrasyonuna katkı sağladım.",
      "API testleri, bileşenler arası iletişim ve performans iyileştirme çalışmalarında yer aldım.",
    ],
    stack: ["Python", "REST API", "RAG"],
  },
  {
    id: "deneyim-softtech",
    featured: false,
    company: "Softtech",
    role: "Yazılım Geliştirme Stajyeri",
    kind: "Staj",
    start: { label: "Temmuz 2023", dateTime: "2023-07" },
    end: { label: "Eylül 2023", dateTime: "2023-09" },
    summary: "Çevik bir ekipte, canlı ortamda kullanılan kurumsal sistemler üzerinde çalıştım.",
    items: [
      "SQL ile veri işleme, sorgulama ve raporlama çalışmalarında görev aldım.",
      "Kurumsal sistemlerin geliştirme, test ve iyileştirme süreçlerinde yer aldım.",
    ],
    stack: ["SQL"],
  },
];
