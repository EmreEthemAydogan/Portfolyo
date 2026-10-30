# TASKS.md — Aşama Takibi

Son güncelleme: **29 Ekim 2026**

Kurallar ve tasarım sistemi için `CLAUDE.md`. Bu dosyada **yalnızca gerçekten
tamamlanmış** işler işaretlidir. Bir işi bitirmeden `[x]` yapma.

Durum anahtarı: `[ ]` yapılmadı · `[~]` kısmen · `[x]` tamamlandı ve doğrulandı

---

## Genel Durum

| Aşama | Kapsam | Durum |
| --- | --- | --- |
| Hazırlık | Proje dokümantasyonu | Tamamlandı |
| Aşama 1 | Medya düzeni, kurulum, hero, proje vitrinleri | Tamamlandı |
| Revizyon 1 | Tipografi, hero ışığı, metin tonu, Deneyim, CV, iletişim, bağlantılar | **Tamamlandı, geri bildirim bekleniyor** |
| Aşama 2 | Proje detay sayfaları | Beklemede |
| Aşama 3 | Hakkımda, yetkinlikler (deneyim ve CV Revizyon 1'de yapıldı) | Beklemede |
| Aşama 4 | Optimizasyon, SEO, erişilebilirlik, dağıtım | Beklemede |

---

## Hazırlık — Dokümantasyon

- [x] `CLAUDE.md` oluşturuldu; Aşama 1 ve Revizyon 1 sonunda güncellendi
- [x] `TASKS.md` oluşturuldu

---

## Medya Envanteri (doğrulandı, 29 Ekim 2026)

Aşama 1'deki 10 dosya SHA-256 ile doğrulanarak taşındı. Revizyon 1'de proje sahibi CV'yi
ekledi; CV'nin iki sayfası önizleme için render edildi. Kaynak PDF değiştirilmedi.

| Dosya | Konum | Piksel / Bilgi |
| --- | --- | --- |
| `emre-portrait.png` | `public/images/profile/` | 527 × 572 |
| `homepage.png` | `public/images/projects/aydogan-canta/` | 1895 × 863 |
| `mobile.png` | `public/images/projects/aydogan-canta/` | 290 × 511 |
| `admin-dashboard-demo.png` | `public/images/projects/aydogan-canta/` | 1682 × 766 |
| `admin-profile-demo.png` | `public/images/projects/aydogan-canta/` | 1372 × 762 |
| `app-screenshot.png` | `public/images/projects/health-assistant/` | 1252 × 767 |
| `hackathon-award.png` | `public/images/projects/health-assistant/` | 872 × 647 |
| `hackathon-team.png` | `public/images/projects/health-assistant/` | 483 × 652 |
| `video-poster.png` | `public/images/projects/health-assistant/` | 1423 × 767 |
| `demo.mp4` | `public/videos/health-assistant/` | 854 × 480, 41 sn, H.264 + AAC |
| `emre-ethem-aydogan-cv.pdf` | `public/files/` | 2 sayfa, 133 580 bayt (proje sahibi ekledi) |
| `cv-page-1.png`, `cv-page-2.png` | `public/images/cv/` | 1191 × 1685, PDF'in birebir render'ı |

---

## Aşama 1 — Temel Site (tamamlandı)

- [x] Medya düzeni, `Public` → `public`, SHA-256 doğrulaması
- [x] Next.js 16.4.3, TypeScript strict, Tailwind CSS 4, Motion 14, `next/font` (latin-ext)
- [x] Tasarım tokenları, `prefers-reduced-motion` altyapısı
- [~] Boşluk ve kenar yarıçapı: gölgeler token, boşluk ve yarıçap Tailwind varsayılanı
- [x] Navigasyon, mobil menü (`<dialog>`), hero, iki proje vitrini, iletişim kapanışı
- [x] Video: ilk yüklemede 0 istek, kontroller ve tam ekran çalışıyor

---

## Revizyon 1 — Tasarım ve İçerik

### Tipografi ve ölçek
- [x] Hero başlığı küçültüldü: 1440 px'te ~118 → ~89 px
- [x] Bölüm başlıkları dengelendi: "Seçili projeler" ~130 → ~60 px, iletişim ~166 → ~72 px
- [x] Tek ölçek sistemi: `text-hero`, `text-closing`, `text-section`, `text-project`, `text-lead`
- [x] Satır kırılımları 360–1440 px arasında kontrol edildi ("e-ticaret" ve tarih aralıkları bölünmüyor)

### Hero
- [x] Portre kemer formlu çerçevede; fotoğraf dosyası değişmedi, yalnızca yanlardan ~%4 kırpılıyor
- [x] Mor, mavi-mor ve soğuk mavi aura, dönen ışık halkası, sağ üstten hüzmeler
- [x] İnce SVG yörüngeler ve üzerinde dolaşan ışık; krom halka, cam panel ve küre yeniden renklendi
- [x] Masaüstünde düşük yoğunluklu hareket; mobilde ve hareket azaltmada durağan
- [x] Dekoratif katmanlar metnin üzerine binmiyor (mobilde hüzme alanı daraltıldı)

### Metin tonu
- [x] Hero: "Yazılıma koddan değil, ihtiyaçtan başlarım." ve kişisel açıklama
- [x] Proje girişi, Aydoğan Çanta özeti, Sağlık Asistanı katkıları birinci tekil şahısla
- [x] Aydoğan Çanta: "Neler yaptım" listesi ve yapay zekâ çalışma biçimi (kaynak: CV)
- [x] Temsili veri ibaresi, tıbbi not, ekip ve kişisel katkı ayrımı korundu

### Deneyim bölümü
- [x] Ekstrem Yazılım, Intertech, Softtech; tarihler ve roller CV ile aynı
- [x] Zaman çizgisi üzerinde editoryal satırlar; Ekstrem giriş metni ve üç başlıklı sorumlulukla öne çıkıyor

### CV bölümü
- [x] `public/files/emre-ethem-aydogan-cv.pdf` mevcut (fallback gerekmedi)
- [x] İki gerçek sayfayla katmanlı, perspektifli belge sahnesi; yeşil aura, ışık konisi, cam panel
- [x] "CV’yi Aç" yeni sekmede açıyor; "PDF İndir" `download` özniteliğiyle indiriyor
- [x] PDF sunucudan 200, `application/pdf` olarak dönüyor

### İletişim
- [x] Başlık: "Fikriniz varsa, konuşalım." Kişisel açıklama ve portreli imza
- [x] mailto, adresi kopyalama, GitHub ve LinkedIn çalışıyor

### Bağlantılar
- [x] Menüye Deneyim ve CV eklendi; bütün iç bağlantılar hedef bölüme gidiyor
- [x] Dış bağlantıların hepsinde `target="_blank"` ve `rel="noopener noreferrer"`
- [x] GitHub profili ve depo GitHub API ile doğrulandı; canlı site 200
- [~] LinkedIn adresi CV'deki adresle aynı; LinkedIn otomatik kontrolü engellediği için elle doğrulanmalı

### Kalite kontrolü (production build üzerinde)
- [x] `npx next typegen && npx tsc --noEmit` hatasız
- [x] `npm run lint` hatasız
- [x] `npm run build` başarılı, ana sayfa statik
- [x] 1440 / 1024 / 768 / 390 / 360 px: yatay taşma yok, konsol hatası yok
- [x] 12/12 görsel yükleniyor, `alt` eksiği yok, başlık sırası h1 → h4 düzgün
- [x] Mobil menü, klavye odağı, video, kopyalama, hareket azaltma tarayıcıda test edildi
- [x] İlk yükleme: 1440 px'te ~422 KB, 390 px'te ~406 KB (CV görselleri tembel yükleniyor)
- [ ] Gerçek telefonda test (yalnızca tarayıcı emülasyonu yapıldı)

**Revizyon 1 tamamlandı. Aşama 2'ye geçmeden önce geri bildirim bekleniyor.**

---

## Aşama 2 — Proje Detay Sayfaları (beklemede)

- [ ] Aydoğan Çanta detay sayfası
- [ ] Sağlık Asistanı detay sayfası
- [ ] Geliştirme süreci anlatımları
- [ ] Yönetim paneli görsel galerisi (temsili veri ibaresiyle)
- [ ] Hackathon başarı hikâyesi
- [ ] Demo videosunun detay sayfasına entegrasyonu
- [ ] Navigasyondaki `#` bağlantılarını alt sayfalarda da çalışacak hale getir

## Aşama 3 — Hakkımda (beklemede)

- [x] Ekstrem Yazılım, Intertech, Softtech deneyimleri (Revizyon 1)
- [x] CV bağlantısı (Revizyon 1)
- [ ] Hakkımda bölümü
- [ ] Teknik yetkinlikler
- [~] AI destekli çalışma yaklaşımı: hero ve Aydoğan Çanta'da var, ayrı bölüm yok

## Aşama 4 — Cila ve Dağıtım (beklemede)

- [ ] Görsel iyileştirmeler
- [ ] Animasyon optimizasyonu
- [ ] Performans: yazı tipi ağırlığı (~170 KB) ve JS paketi (~190 KB) incelenmeli
- [ ] SEO, Open Graph görseli ve metadata
- [ ] Mobil ve erişilebilirlik testleri (ekran okuyucu ile)
- [ ] Git deposu ve Vercel dağıtım hazırlığı

---

## Kullanıcı Kararı Bekleyen Notlar

- **LinkedIn elle kontrol edilmeli.** Adres CV ile aynı, ama otomatik doğrulanamıyor.
- **"DenizBank temalı" ifadesi.** Brief'te bu ifade var, CV'de "bankacılık alanında" yazıyor.
  Kurum adının açıkça yazılmasında sakınca varsa "bankacılık temalı" yapılabilir.
- **CV'de telefon numarası var.** PDF ve önizleme görseli herkese açık olacak.
- **İletişim başlığı alternatifleri:** "İletişime geçelim.", "Yeni bir proje ya da fırsat
  için konuşabiliriz." (`site.ts` → `contact.titleLines`)
- **Portre çözünürlüğü düşük (527 px).** En az 1200 px genişliğinde bir portre önerilir.
- **`mobile.png` küçük (290 px).** Daha büyük bir görüntü daha net olur.
- **Video kapağında kişisel Gmail adresi görünüyor** (giriş formunda).
- **Eklenen metinler onaylanmalı:** sağlık asistanı tıbbi notu, "Sunum için hazırlanmış
  görünüm" altyazısı, "Yapay Zekâ · RAG · Makine Öğrenmesi" kategorisi.
- Aydoğan Çanta kaynak kodu özel. Repo bağlantısı aranmayacak, uydurulmayacak.
