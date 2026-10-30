# CLAUDE.md — Emre Ethem Aydoğan | Kişisel Portföy

Bu dosya projenin kalıcı kurallarını tanımlar. Sonraki Claude Code oturumları işe
başlamadan önce bunu okumalı. Aşama durumu ve güncel iş listesi için `TASKS.md`.

---

## 1. Proje Amacı

Emre Ethem Aydoğan (bilgisayar mühendisi) için **premium kişisel portföy sitesi**.
Sıradan bir geliştirici şablonu değil; uluslararası tasarım stüdyosu kalitesine
yaklaşan, güçlü görsel kimliği olan özgün bir site.

- Kullanım: iş başvuruları, freelance projeler, iş birlikleri, kişisel markalaşma.
- Hedef: ziyaretçi ilk saniyelerde profesyonel bir tasarımla karşılaşsın, ardından
  gerçek projeleri ve teknik katkıları kolayca inceleyebilsin.
- **Sitenin tüm içeriği Türkçedir.** Kod ve değişken adları İngilizce olabilir.
- Az sayıda gerçekten kaliteli bölüm > çok sayıda sıradan bölüm.

---

## 2. Teknoloji ve Mimari

| Alan | Seçim |
| --- | --- |
| Framework | Next.js (güncel kararlı sürüm, App Router) |
| Dil | TypeScript, `strict` mode |
| Stil | Tailwind CSS |
| Animasyon | Motion for React |
| Görsel / Font | `next/image`, `next/font` |
| 3D (opsiyonel) | Three.js + React Three Fiber |

Kurallar:

- **İhtiyaç duyulmayan kütüphaneyi kurma.** Her bağımlılığın bir gerekçesi olmalı.
- 3D'de temkinli ol. Aynı etki CSS + Motion ile yapılabiliyorsa WebGL sahnesi kurma.
  WebGL kullanılacaksa **lazy-load + statik fallback** zorunlu.
- Component yapısı temiz ve modüler olsun. İçerik metinleri, proje verileri ve linkler
  **merkezi veri dosyalarında** tutulur, JSX içine gömülmez.
- Vercel'e sorunsuz dağıtılabilir olmalı.

### Next.js 16.4 notları

Kurulu sürüm eğitim verisindeki Next.js'ten farklı. Kod yazmadan önce
`node_modules/next/dist/docs/` altındaki ilgili belgeyi oku (bkz. `AGENTS.md`).

- `next/image`: `priority` kaldırıldı, yerine `preload` kullanılır. `quality` değeri
  `next.config.ts` içindeki `images.qualities` listesinde olmalı (şu an 75 ve 85).
- `cacheComponents` açık. Sunucu bileşeninde `new Date()` veya `Math.random()` build'i kırar.
- Tailwind v4, PostCSS yerine `@tailwindcss/turbopack` yükleyicisiyle çalışır.
- `LayoutProps` gibi global tipler `.next/types` içinde üretilir. Tek başına `tsc`
  çalıştırmadan önce `npx next typegen` gerekir.
- `next lint` yok; lint için `npm run lint` (ESLint 9, flat config).

### Kod yapısı

```text
src/app/          layout, sayfa, globals.css (tüm tokenlar, hero ve CV sahne stilleri), icon.svg
src/components/   layout/ · hero/ · projects/ · experience/ · cv/ · contact/ · motion/ · ui/
src/data/         site.ts (kişi, bağlantılar, bölüm metinleri, CV) · projects.ts · experience.ts
src/lib/          küçük yardımcılar (cn, cssVar, useMediaQuery)
```

Sayfa sırası: Hero → Projeler (01) → Deneyim (02) → CV (03) → İletişim (04).
Bölüm açılışları `ui/SectionIntro` ile aynı ritmi paylaşır.

### Frontend-only kısıtı (kesin)

Bu proje yalnızca frontend'dir. Aşağıdakiler **geliştirilmeyecek**:

backend servis · veritabanı · authentication · API sunucusu veya route handler ·
CMS · admin paneli · sunucu taraflı iletişim formu

İletişim yalnızca `mailto:` bağlantısı ile çalışır.

---

## 3. Tasarım Sistemi — "Midnight Engineering"

Konsept: **Dark Cinematic + Premium Editorial + Controlled 3D**.
Teknoloji odaklı, ama bilimkurgu oyunu arayüzü gibi değil.

### Renk paleti

| Rol | Hex |
| --- | --- |
| Ana zemin | `#0B1020` |
| İkincil yüzey | `#172237` |
| Mavi vurgu | `#90BDFC` |
| Başlık metni | `#F5F6F8` |
| Açıklama metni | `#A6B1C3` |

Bu değerler başlangıç noktasıdır; uyumlu ara tonlar türetilebilir. Tüm renkler
`src/app/globals.css` içindeki `@theme` bloğunda token olarak tanımlıdır. Bileşen içine
sabit hex yazılmaz. Varsayılan Tailwind paleti kapatıldı (`--color-*: initial`).

Proje vitrinleri kendi sıcaklığını taşıyabilir:
Aydoğan Çanta → krem / bej / espresso · Sağlık Asistanı → koyu lacivert / turkuaz.
Hero ışığı mor, mavi-mor ve soğuk mavidir (`violet-*`, `indigo-400`, yalnızca ışık ve dekor).
CV vitrini yeşil ve mavi-yeşil ışık kullanır (`jade-*`).

### Tipografi

- Başlık: **Space Grotesk**
- Gövde: **Inter**
- Güçlü ama kontrollü ölçek. Büyük başlık içerik alanını ezmez.
- Tokenlar (1440 px'te yaklaşık): `text-hero` 89 · `text-closing` 72 · `text-section` 60 ·
  `text-project` 56 · `text-lead` 24 · `text-email` 48 px. Yeni bölüm bunların dışına çıkmaz.

### Tasarım ilkeleri

Dengeli negatif alan · asimetrik ama düzenli kompozisyon · yumuşak ve kontrollü
animasyon · zarif etkileşim · büyük gerçek proje görselleri · kaliteli mobil deneyim.

**Kaçınılacaklar:** hazır şablon görünümü · birbirinin aynı küçük proje kartları ·
gereksiz glassmorphism kutuları · aşırı neon ve glow · çok fazla hareketli 3D obje ·
gereksiz ikon · metin üzerine binen dekoratif şekiller · okunabilirliği bozan animasyon.

### Animasyon, responsive, erişilebilirlik

- `prefers-reduced-motion` desteği **zorunlu**. Mobilde hareket ve 3D sadeleştirilir.
- Hero kompozisyonu WebGL değil, CSS, SVG ve Motion ile kuruldu: aura, ışık hüzmeleri,
  ince yörüngeler, krom halka, cam panel. Tüm öğeler fotoğrafın arkasında kalır ve metne
  uzanmaz. Portre kemer formlu çerçevede durur; fotoğraf dosyasına dokunulmaz.
  WebGL'e geçmek için güçlü bir gerekçe gerekir.
- Kontrol edilecek genişlikler: **1440 · 1024 · 768 · 390 · 360 px**. Yatay taşma olmaz.
- Dokunmatik ekranda hover'a bağımlı işlev kurulmaz.
- Semantik HTML, klavye erişimi, görünür focus, yeterli kontrast, anlamlı `alt` metni.

---

## 4. Medya Klasörleri

Koddan referans verilecek **kanonik yollar**:

```text
public/
├── files/emre-ethem-aydogan-cv.pdf
├── images/
│   ├── profile/emre-portrait.png
│   ├── cv/cv-page-{1,2}.png          ← PDF sayfalarının birebir render'ı
│   └── projects/
│       ├── aydogan-canta/{homepage,mobile,admin-dashboard-demo,admin-profile-demo}.png
│       └── health-assistant/{app-screenshot,hackathon-award,hackathon-team,video-poster}.png
└── videos/
    └── health-assistant/demo.mp4
```

Kurallar:

- Klasör adı Next.js için küçük harfli `public` olmalı (Windows'ta büyük/küçük harf
  farkı sessizce sorun yaratır; Vercel'in Linux dosya sistemi affetmez).
- Gerçek görsel veya videoyu **silme, üzerine yazma, kopyasını çoğaltma**.
- Profil fotoğrafı eksikse bildir; **stok insan fotoğrafı koyma**, estetik bir
  fallback kullan.
- Video ilk sayfa yüklemesinde indirilmez: `preload="none"` + poster görseli.
- Yeni görsel eklerken gerçek piksel boyutunu ve anlamlı `alt` metnini `src/data/`
  içindeki ilgili kayda yaz.
- CV PDF'i değişirse `cv-page-1.png` ve `cv-page-2.png` yeniden render edilmeli
  (pypdfium2, ölçek 2) ve `site.ts` içindeki `cvSection.file.details` (sayfa, boyut) güncellenmeli.

---

## 5. Gerçek Projelere İlişkin Doğruluk Kuralları

Bu portföy gerçek işleri temsil eder. **Hiçbir iddia şişirilmez, hiçbir bağlantı
uydurulmaz.**

### Genel

- İçeriğin kaynağı yalnızca proje sahibinin brief'leri ve CV'sidir
  (`public/files/emre-ethem-aydogan-cv.pdf`). Bu iki kaynakta olmayan iddia yazılmaz.
- Kaynak kod, özel müşteri verisi veya hassas bilgi portföye dahil edilmez.
- Var olmayan bağlantı üretilmez; boş veya kırık link bırakılmaz.
- Doğrulanmamış metrik, oran veya başarı sayısı yazılmaz.

### Aydoğan Çanta (Full Stack · E-Ticaret)

- React, JavaScript, ASP.NET Core, Entity Framework Core, PostgreSQL. Canlı ortamda.
- Kaynak kod deposu **özeldir** → GitHub repository bağlantısı **uydurulmaz**.
- Yönetim paneli görselleri temsili verilerle hazırlanmıştır. Görsellerin yanında
  şu ibare bulunmalı:
  > Yönetim paneli görsellerinde müşteri gizliliğini korumak amacıyla temsili
  > veriler kullanılmıştır.
- Demo verileri gerçek ticari başarı metriği gibi sunulmaz.

### RAG Tabanlı Sağlık Asistanı (AI · RAG · ML)

- Python, Flask, RAG, LangChain, TensorFlow/Keras, React. **Ekip projesidir**;
  üniversite bitirme projesi olarak başladı, hackathon'da birincilik aldı.
- Ekip çalışmasının tamamı tek kişinin başarısı gibi sunulmaz.
- Emre'nin kişisel katkıları yalnızca şunlardır: RAG mimarisinin Python ile
  geliştirilmesi · yapay zekâ bileşenlerinin uygulamaya entegrasyonu · yapay sinir
  ağları çalışmalarına katkı · risk tahminlerine dayalı chatbot değerlendirme
  sisteminin geliştirilmesine katkı.
- **Tıbbi başarı oranı, klinik doğruluk veya doğrulanmamış model performansı
  iddiasında bulunulmaz.**
- Sunum için düzenlenmiş görseller, birebir değiştirilmemiş ekran görüntüsü olarak
  tanıtılmaz; gerektiğinde düzenlendiği belirtilir.

### Deneyim

| Kurum | Rol | Dönem |
| --- | --- | --- |
| Ekstrem Yazılım | Yazılım Danışmanı | Temmuz 2025 – Şubat 2026 |
| Intertech | Yapay Zekâ & Backend Yazılım Stajyeri | Haziran 2024 – Ağustos 2024 |
| Softtech | Yazılım Geliştirme Stajyeri | Temmuz 2023 – Eylül 2023 |

- Ekstrem Yazılım öne çıkarılır: müşteri görüşmesi, ihtiyaç analizi, C# ve SQL ile ERP
  modülleri, canlı sistemde kök neden analizi, test ve canlıya alma, son kullanıcı eğitimi.
- Stajlarda "görev aldım", "katkı sağladım" gibi ölçülü ifadeler korunur.

### Bağlantılar (tek doğru kaynak)

| Hedef | URL |
| --- | --- |
| GitHub profili | https://github.com/EmreEthemAydogan |
| LinkedIn | https://www.linkedin.com/in/emreethemaydogan/ (CV ile aynı; otomatik doğrulanamaz) |
| Aydoğan Çanta (canlı) | https://www.aydogancanta.com/ |
| Sağlık Asistanı deposu | https://github.com/EmreEthemAydogan/rag-health-bot |
| E-posta | emreethemaydogan.dev@gmail.com |

---

## 6. Aşamalı Geliştirme Prensipleri

Proje kontrollü aşamalara bölünmüştür:

1. **Aşama 1** — Medya düzeni, Next.js kurulumu, tasarım tokenları, navbar, premium
   hero, iki proje vitrini, basit iletişim kapanışı.
   **Revizyon 1** — Tipografi ölçeği, hero ışık kompozisyonu, kişisel metin tonu,
   Deneyim ve CV bölümleri, iletişim metni. (Aşama 3'ün deneyim ve CV maddeleri burada yapıldı.)
2. **Aşama 2** — Proje detay sayfaları, geliştirme süreci anlatımları, yönetim paneli
   galerisi, hackathon hikâyesi, demo videosunun detay sayfasına entegrasyonu.
3. **Aşama 3** — Hakkımda, teknik yetkinlikler, AI destekli çalışma yaklaşımı.
4. **Aşama 4** — Görsel ve animasyon iyileştirmeleri, performans, SEO, mobil ve
   erişilebilirlik testleri, Vercel dağıtım hazırlığı.

Prensipler:

- **Bir aşama bitince dur ve geri bildirim bekle.** Kendiliğinden sonraki aşamaya geçme.
- Mevcut proje kodunu **incelemeden üzerine yazma**.
- Her aşamanın sonunda TypeScript kontrolü, lint ve production build çalıştır.
- **Çalıştırılamayan bir kontrolü yapılmış gibi raporlama.** Eksik veya sorunlu medya
  varsa açıkça bildir.
- Tamamlanan işler `TASKS.md` içinde işaretlenir; yalnızca gerçekten bitmiş işler.

---

## 7. Komutlar

```bash
npm install                          # bağımlılıklar
npm run dev                          # geliştirme sunucusu, http://localhost:3000
npm run build && npm run start       # production build ve yerel sunum
npm run lint                         # ESLint
npx next typegen && npx tsc --noEmit # tip kontrolü
```
