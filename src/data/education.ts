/*
 * Eğitim ve bootcamp bilgileri. Kaynak: proje sahibinin brief'i ve CV'si
 * (public/files/emre-ethem-aydogan-cv.pdf). Profesyonel deneyim gibi sunulmaz.
 * Tarih ve sertifika bilgisi iki kaynakta da olmadığı için yazılmaz.
 */

export const bootcamp = {
  id: "egitim-acunmedya",
  institution: "Acunmedya Akademi",
  program: "C# Backend Bootcamp",
  /** CV: "Acunmedya Akademi – C# Backend Bootcamp | Tamamlandı" */
  status: "Tamamlandı",
  tags: ["4 ay", "Uygulamalı eğitim"],
  description:
    // ‑: bölünmeyen tire; "e-ticaret" satır sonunda ikiye ayrılmaz.
    "Dört ay boyunca e‑ticaret odaklı uygulamalar üzerinden C# ile backend geliştirme eğitimi aldım. Temel kavramlardan başlayarak bir e‑ticaret uygulamasının backend geliştirme sürecini adım adım çalıştım ve öğrendiklerimi uygulamaya döktüm.",
  topicsTitle: "Çalıştığım konular",
  /** CV: "… üzerine uygulamalı çalışmalar gerçekleştirdim." */
  topics: ["ASP.NET Core Web API", "Entity Framework Core", "SQL", "REST API", "Katmanlı mimari"],
} as const;
