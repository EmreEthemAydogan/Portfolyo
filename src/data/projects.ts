import type { MediaImage } from "./types";

/*
 * Proje içerikleri. Metinler, proje sahibinin brief'i ve CV'siyle sınırlıdır.
 * Doğruluk kuralları için CLAUDE.md, bölüm 5.
 */

const AYDOGAN = "/images/projects/aydogan-canta";
const HEALTH = "/images/projects/health-assistant";

export const aydoganCanta = {
  id: "proje-aydogan-canta",
  index: "01",
  title: "Aydoğan Çanta",
  categories: ["Full Stack", "E-Ticaret", "Yönetim Sistemleri"],
  status: "Canlı ortamda",
  summary:
    // ‑: bölünmeyen tire; "e-ticaret" satır sonunda ikiye ayrılmaz.
    "Bir çanta atölyesi için geliştirdiğim, canlı ortamda çalışan e‑ticaret uygulaması. Kullanıcılar ürünleri inceleyip sipariş verebiliyor ve ödeme yapabiliyor. Atölye tarafı ise siparişleri, stokları ve üretim taleplerini yönetim panelinden takip edebiliyor.",
  contributionsTitle: "Neler yaptım",
  contributions: [
    "ASP.NET Core Web API, Entity Framework Core ve PostgreSQL ile backend iskeletini ve katmanlı yapıyı kurdum.",
    "Kayıt ve giriş işlemlerini geliştirdim. Ürün, sepet, sipariş, stok ve ödeme süreçlerini uygulamaya aktardım.",
    "Müşteri ve sipariş bilgilerinin takip edildiği yönetim panelini oluşturdum.",
    "React arayüzünü API katmanına bağladım, ödeme ve e-posta servislerini entegre ettim.",
    "Uygulamayı canlı ortama taşıyıp kullanıma açtım.",
  ],
  aiApproach: {
    title: "Yapay zekâyla geliştirdim, kararları ben verdim.",
    text: "ChatGPT’yi mimariyi değerlendirmek ve geliştirme adımlarını planlamak için, Claude Code’u geliştirme, hata giderme, kod inceleme ve güvenlik testlerinde kullandım. Araçlara hangi görevi vereceğimi ben belirledim. Proje hedeflerini, geliştirme kurallarını ve teknik kararları Markdown dosyalarında belgeledim.",
  },
  stack: ["React", "JavaScript", "ASP.NET Core", "Entity Framework Core", "PostgreSQL"],
  live: {
    label: "Canlı Siteyi Ziyaret Et",
    href: "https://www.aydogancanta.com/",
    display: "aydogancanta.com",
  },
  /** Kaynak kod deposu özeldir; repository bağlantısı verilmez. */
  sourceNote: "Özel depo",
  images: {
    homepage: {
      src: `${AYDOGAN}/homepage.png`,
      width: 1895,
      height: 863,
      alt: "Aydoğan Çanta mağazasının masaüstü ana sayfası: krem zemin üzerinde büyük serif logo, “Sıradan üretim değil. Gerçek işçilik.” sloganı ve mağaza butonları.",
    },
    mobile: {
      src: `${AYDOGAN}/mobile.png`,
      width: 290,
      height: 511,
      alt: "Aydoğan Çanta ana sayfasının mobil görünümü.",
    },
    adminDashboard: {
      src: `${AYDOGAN}/admin-dashboard-demo.png`,
      width: 1682,
      height: 766,
      alt: "Yönetim paneli genel bakış ekranı: sipariş durumlarını özetleyen kartlar ve son siparişler tablosu. Görseldeki veriler temsilidir.",
    },
    adminProfile: {
      src: `${AYDOGAN}/admin-profile-demo.png`,
      width: 1372,
      height: 762,
      alt: "Yönetici hesabı sayfası: operasyon özeti, son siparişler ve hesap bilgileri. Görseldeki veriler temsilidir.",
    },
  } satisfies Record<string, MediaImage>,
  admin: {
    eyebrow: "Yönetim paneli",
    title: "Operasyonun arka yüzü",
    description:
      "Siparişlerin, ürünlerin, mesajların ve üretim taleplerinin tek bir yerden yönetildiği arayüz.",
    captions: {
      dashboard: "Genel bakış",
      profile: "Yönetici hesabı ve operasyon özeti",
    },
    disclaimer:
      "Yönetim paneli görsellerinde müşteri gizliliğini korumak amacıyla temsili veriler kullanılmıştır.",
  },
} as const;

export const healthAssistant = {
  id: "proje-saglik-asistani",
  index: "02",
  title: "Bulut Tabanlı Sağlık Sistemi",
  titleLines: ["Bulut Tabanlı", "Sağlık Sistemi"],
  categories: ["Yapay Zekâ", "RAG", "Makine Öğrenmesi"],
  badges: ["Hackathon birinciliği", "Ekip projesi"],
  summary:
    "Üniversite bitirme projesi olarak başladığımız bu çalışmada, diyabet ve kalp krizi riskini tahmin eden yapay sinir ağı modellerini, sağlık sorularına bağlama uygun yanıt veren RAG tabanlı bir chatbotla birleştirdik.",
  story:
    "Projeyi hackathon sürecinde uçtan uca çalışan bir uygulamaya dönüştürdük ve ekip olarak birincilik kazandık.",
  contributionsTitle: "Benim katkım",
  /** Ekip çalışmasındaki kişisel katkılar yalnızca bunlardır (CLAUDE.md, bölüm 5). */
  contributions: [
    "RAG tabanlı chatbotun mimarisini Python ile tasarlayıp geliştirdim.",
    "Yapay zekâ bileşenlerini uygulamaya entegre ettim.",
    "Risk tahmini için kullanılan yapay sinir ağı modellerinin geliştirilmesinde ana sorumluluğu üstlendim.",
    "Risk tahminlerini temel alarak kullanıcıya değerlendirme sunan chatbot sistemini geliştirdim.",
  ],
  stack: ["Python", "Flask", "RAG", "LangChain", "OpenAI API", "TensorFlow/Keras", "React", "Docker"],
  repo: {
    label: "Kaynak Kodu GitHub’da İncele",
    href: "https://github.com/EmreEthemAydogan/rag-health-bot",
  },
  note: "Akademik bir ekip çalışmasıdır. Risk tahminleri klinik olarak doğrulanmamıştır ve tıbbi tavsiye yerine geçmez.",
  images: {
    app: {
      src: `${HEALTH}/app-screenshot.png`,
      width: 1252,
      height: 767,
      alt: "Sağlık sisteminin risk analizi ekranı: düşük risk sonucu, risk çubuğu, asistanın yorumu, PDF indirme butonu ve geçmiş tahminler listesi.",
    },
    award: {
      src: `${HEALTH}/hackathon-award.png`,
      width: 872,
      height: 647,
      alt: "Hackathon ödül töreninde birincilik plaketiyle çekilmiş grup fotoğrafı. Arkadaki ekranda “Hackathon yarışması 1. olan takım” yazıyor.",
    },
    team: {
      src: `${HEALTH}/hackathon-team.png`,
      width: 483,
      height: 652,
      alt: "İki ekip üyesi hackathon birincilik plaketiyle poz veriyor.",
    },
    poster: {
      src: `${HEALTH}/video-poster.png`,
      width: 1423,
      height: 767,
      alt: "",
    },
  } satisfies Record<string, MediaImage>,
  captions: {
    app: "Risk analizi ekranı",
    appNote: "Sunum için hazırlanmış görünüm",
    video: "Uygulama demosu",
    award: "Hackathon birinciliği",
    team: "Ekip üyeleri, birincilik plaketiyle",
  },
  video: {
    src: "/videos/health-assistant/demo.mp4",
    title: "Sağlık sistemi uygulama demosu",
    durationLabel: "0:41",
    durationText: "41 saniye",
  },
} as const;
