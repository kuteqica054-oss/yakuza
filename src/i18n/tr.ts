import { BRAND, AGE_RANGE } from '../config/site';

const age = `${AGE_RANGE.min}–${AGE_RANGE.max}`;

/**
 * Türkçe metinler. Bu dosyanın yapısı en.ts için şablondur —
 * bir anahtar eklerseniz İngilizce dosyaya da eklemeniz gerekir (TypeScript uyarır).
 */
const tr = {
  meta: {
    siteName: BRAND.name,
    pages: {
      home: {
        title: `Anahtar Teslim Çocuk Lazer Tag Arenası | ${BRAND.name}`,
        description:
          "AVM ve aile eğlence merkezleri için anahtar teslim çocuk lazer tag arenası kurulumu: tasarım, tema, ekipman, montaj, personel eğitimi ve servis tek elden. Teklif alın.",
      },
      turnkey: {
        title: `Lazer Tag Arena Kurulumu: Anahtar Teslim Süreç | ${BRAND.name}`,
        description:
          "Keşiften açılışa 7 adımda lazer tag arena kurulumu. Her aşamada ne yapıldığını, sizden ne beklendiğini ve teslimata nelerin dahil olduğunu görün.",
      },
      equipment: {
        title: `Çocuk Lazer Tag Ekipmanı: Blaster, Yelek, Hedef | ${BRAND.name}`,
        description:
          "Çocuklar için tasarlanmış lazer tag ekipmanı: hafif blasterlar, sensörlü yelek ve kafa bantları, interaktif hedefler, baz istasyonları, şarj ve oyun yönetim sistemi.",
      },
      themes: {
        title: `Lazer Tag Arena Temaları: Uzay, Orman, Okyanus | ${BRAND.name}`,
        description:
          "Uzay İstasyonu, Kayıp Orman, Okyanus Altı, Neon Şehir ve Robot Fabrikası: çocuk lazer tag arenanız için tema konseptleri ve markanıza özel tasarım.",
      },
      arcade: {
        title: `Çocuk Oyun Makineleri ve AVM Çocuk Oyun Alanı | ${BRAND.name}`,
        description:
          "Lazer tag arenanızın yanına çocuk oyun makineleri ve interaktif oyunlar ekleyin; bekleme alanını da gelire dönüştürün.",
      },
      about: {
        title: `Hakkımızda | ${BRAND.name}`,
        description: `${BRAND.name}: çocuklar için lazer tag arenalarını anahtar teslim tasarlayan ve kuran ekip.`,
      },
      contact: {
        title: `İletişim ve Teklif Talebi | ${BRAND.name}`,
        description:
          "Çocuk lazer tag arenası projeniz için teklif isteyin. Alanınızı ve hedeflerinizi anlatın, proje ekibimiz size dönsün.",
      },
      privacy: {
        title: `KVKK Aydınlatma Metni | ${BRAND.name}`,
        description: "Kişisel verilerin işlenmesine ilişkin aydınlatma metni (taslak).",
      },
      terms: {
        title: `Kullanım Koşulları | ${BRAND.name}`,
        description: "Web sitesi kullanım koşulları (taslak).",
      },
      thanks: {
        title: `Teşekkürler | ${BRAND.name}`,
        description: "Teklif talebiniz bize ulaştı.",
      },
      notFound: {
        title: `Sayfa bulunamadı | ${BRAND.name}`,
        description: "Aradığınız sayfa bulunamadı.",
      },
    },
    ogAlt: "Anahtar teslim çocuk lazer tag arenası",
    ogTitle: "Anahtar teslim çocuk lazer tag arenası",
    ogSub: "Projeden ilk oyuna kadar: tasarım, ekipman, kurulum, eğitim ve servis.",
  },

  nav: {
    items: [
      { page: "turnkey", label: "Anahtar Teslim" },
      { page: "equipment", label: "Ekipman" },
      { page: "themes", label: "Arena Temaları" },
      { page: "arcade", label: "Oyun Makineleri" },
      { page: "about", label: "Hakkımızda" },
      { page: "contact", label: "İletişim" },
    ],
    cta: "Teklif alın",
    menu: "Menü",
    close: "Kapat",
    skip: "İçeriğe geç",
    lang: "Dil seçimi",
    switchTo: "Switch to English",
    home: "Ana sayfa",
  },

  common: {
    getQuote: "Teklif alın",
    howItWorks: "Nasıl çalışıyoruz?",
    learnMore: "Detayları görün",
    todo: "TODO",
    duration: "Süre",
    photoSlot: "Fotoğraf alanı",
    prev: "Önceki",
    next: "Sonraki",
    whatsapp: "WhatsApp ile yazın",
    whatsappTodo: "WhatsApp numarası eklenecek",
    backHome: "Ana sayfaya dön",
  },

  hero: {
    eyebrow: "Çocuklar için lazer tag arenaları",
    titleBefore: "Projeden ilk oyuna kadar",
    titleHighlight: "anahtar teslim",
    titleAfter: "çocuk lazer tag arenası",
    sub: "AVM'ler, aile eğlence merkezleri ve oteller için tasarım, tema, ekipman, kurulum ve eğitim tek elden. Siz alanı ayırın; ışığı, sesi ve oyun programını biz kuralım, çocuklar oynasın.",
    chips: [`${age} yaş için oyun modları`, "Tasarımdan servise tek muhatap", "Türkiye geneli ve yurt dışı kurulum"],
    sceneAlt:
      "Yukarıdan görünen bir lazer tag arenası: labirent bölmeleri, parlayan hedefler ve mercan ile turkuaz takımlarının kesişen ışınları.",
    live: "Canlı oyun",
  },

  audience: {
    label: "Kimler için?",
    items: ["AVM'ler", "Aile eğlence merkezleri", "Oteller ve tatil köyleri", "Çocuk parkları", "Franchise yatırımcıları"],
  },

  why: {
    eyebrow: "İşletmeci gözüyle",
    title: "Neden çocuk lazer tag?",
    sub: "Aileyi mekâna getiren, orada tutan ve tekrar getiren bir cazibe merkezi.",
    items: [
      {
        icon: "Users",
        title: "Aileleri mekâna çeker",
        text: "Çocuk oynamak istediğinde bütün aile gelir. Ebeveynler beklerken alışveriş yapar, kafede oturur; arena yalnızca kendi bileti için değil, bütün kat için trafik üretir.",
      },
      {
        icon: "Cake",
        title: "Doğum günleri ve grup rezervasyonları",
        text: "Doğum günü partileri, okul gezileri, spor kulüpleri… Lazer tag grupla oynanır; bu da önceden planlanan, paket olarak satılabilen rezervasyonlar demek.",
      },
      {
        icon: "Repeat",
        title: "Tekrar tekrar gelinir",
        text: "Her oyun farklı biter. Yeni görevler, skor tablosu ve takım sıralaması çocukların çıkışta \"bir daha!\" demesini sağlar.",
      },
      {
        icon: "Sun",
        title: "Dört mevsim çalışır",
        text: "Kapalı alanda, havadan ve sezondan bağımsız. Yaz tatilinde de, yağmurlu bir kasım hafta sonunda da aynı arena.",
      },
      {
        icon: "LayoutGrid",
        title: "Alanı verimli kullanır",
        text: "Labirent düzeni sayesinde aynı metrekarede çok sayıda çocuk aynı anda oynar. Büyük mekanik aletlere kıyasla yerleşim çok daha esnektir.",
      },
      {
        icon: "Gauge",
        title: "Yönetimi kolay",
        text: "Oyunlar panelden başlatılır, süre ve puanlar otomatik tutulur. Eğitmen ekranla değil, çocuklarla ilgilenir.",
      },
    ],
  },

  process: {
    eyebrow: "Anahtar teslim",
    title: "Yedi adımda açılış",
    sub: "Tek proje ekibi, tek muhatap. Her adımın sonunda neyin onaylandığını ve sırada ne olduğunu bilirsiniz.",
    steps: [
      {
        icon: "Ruler",
        title: "Keşif ve ölçüm",
        text: "Alanınızı yerinde inceliyoruz: ölçüler, tavan yüksekliği, kolonlar, elektrik, havalandırma ve kaçış yolları.",
        duration: "1–3 gün",
      },
      {
        icon: "Compass",
        title: "Konsept ve tema",
        text: "Ziyaretçi profilinize ve mekânınızın kimliğine uyan temayı birlikte seçiyoruz. Markanıza özel tema da mümkün.",
        duration: "1 hafta",
      },
      {
        icon: "PenTool",
        title: "Proje ve 3D tasarım",
        text: "Labirent yerleşimi, ışık ve ses planı, oyuncu akışı. Arenayı daha kurulmadan 3D görselleştirmede gezersiniz.",
        duration: "1–2 hafta",
      },
      {
        icon: "Package",
        title: "Üretim ve tedarik",
        text: "Bölmeler, tematik dekor, ekipman ve elektronik üretilir, test edilir ve sevkiyata hazırlanır.",
        duration: "4–6 hafta",
      },
      {
        icon: "Hammer",
        title: "Kurulum",
        text: "Ekibimiz montajı, kablolamayı, ışık ve ses sistemini kurar; her ekipmanı sahada tek tek test eder.",
        duration: "1–2 hafta",
      },
      {
        icon: "GraduationCap",
        title: "Personel eğitimi",
        text: "Eğitmenleriniz oyun yönetimini, güvenlik kurallarını, ekipman bakımını ve misafir karşılamayı uygulamalı öğrenir.",
        duration: "2–3 gün",
      },
      {
        icon: "Rocket",
        title: "Açılış ve servis",
        text: "İlk oyunlarda yanınızdayız. Sonrasında garanti, yedek parça ve uzaktan destekle birlikte çalışmaya devam ederiz.",
        duration: "Açılış günü ve sonrası",
      },
    ],
    cta: "Süreci detaylı inceleyin",
  },

  themes: {
    eyebrow: "Arena temaları",
    title: "Bir salon değil, içine girilen bir hikâye",
    sub: "Tema; dekoru, ışığı, sesi ve görevleri birlikte belirler. Çocuk kapıdan girdiği anda oyun başlar.",
    paletteLabel: "Renk paleti",
    missionsLabel: "Örnek görevler",
    cta: "Tüm temaları görün",
    items: [
      {
        id: "space",
        name: "Uzay İstasyonu",
        tagline: "Yörüngede iki ekip, tek enerji çekirdeği",
        text: "Mavi-beyaz paneller, yıldızlı tavan ve hava kilidi kapıları. Ekipler istasyonun enerji çekirdeğini korumak için yarışır.",
        missions: ["Enerji çekirdeğini koru", "Uydu sinyallerini topla", "Hava kilidini aç"],
        alt: "Uzay istasyonu teması: halkalı gezegen, yıldızlar ve altıgen paneller.",
      },
      {
        id: "jungle",
        name: "Kayıp Orman",
        tagline: "Sarmaşıkların arasında saklı tapınak",
        text: "Yeşilin tonları, yaprak siluetleri ve bulunmayı bekleyen parlayan taşlar. Keşif seven çocuklar için.",
        missions: ["Parlayan taşları bul", "Tapınak kapısını aç", "Totemleri savun"],
        alt: "Kayıp orman teması: büyük yapraklar, sarmaşıklar ve parlayan taşlar.",
      },
      {
        id: "ocean",
        name: "Okyanus Altı",
        tagline: "Mercanlar, kabarcıklar ve batık bir gemi",
        text: "Turkuaz ve mercan tonlarında sakin ama heyecanlı bir dünya. Küçük yaş grupları için de çok uygun.",
        missions: ["İnci avı", "Batık gemiyi keşfet", "Mercan resifini koru"],
        alt: "Okyanus altı teması: mercanlar, kabarcıklar ve balık siluetleri.",
      },
      {
        id: "neon",
        name: "Neon Şehir",
        tagline: "Gece vakti, ışıl ışıl çatılar",
        text: "Renkli tabelalar, ışık şeritleri ve ekiplerin kendi rengine boyamaya çalıştığı kuleler. Büyük yaş grubunun favorisi.",
        missions: ["Kuleleri kendi rengine boya", "Işık şifresini çöz", "Çatı yarışı"],
        alt: "Neon şehir teması: gece silueti, renkli pencereler ve ışık tabelaları.",
      },
      {
        id: "robot",
        name: "Robot Fabrikası",
        tagline: "Dişliler dönüyor, dost robotlar uyanıyor",
        text: "Taşıma bantları, dev dişliler ve uyanmayı bekleyen sevimli robotlar. Ekipler doğru parçaları toplayıp robotu çalıştırır.",
        missions: ["Robot parçalarını topla", "Bandı çalıştır", "Kontrol odasını koru"],
        alt: "Robot fabrikası teması: dişliler, taşıma bandı ve gülümseyen bir robot.",
      },
      {
        id: "custom",
        name: "Size özel tema",
        tagline: "Markanız, maskotunuz, hikâyeniz",
        text: "AVM'nizin maskotu, otelinizin konsepti ya da bir lisanslı karakter: temayı sizin hikâyenize göre baştan tasarlarız.",
        missions: ["Maskotlu karşılama alanı", "Markalı skor ekranı", "Size özel görev hikâyesi"],
        alt: "Size özel tema: logonuz ve renklerinizle tasarlanacak boş bir şablon.",
      },
    ],
  },

  equipment: {
    eyebrow: "Ekipman",
    title: "Çocuk eline göre, işletme temposuna göre",
    sub: "Görünüşü oyuncak gibi, dayanıklılığı her gün onlarca oyuna göre. Tüm ekipman tek sistemde konuşur.",
    specsLabel: "Teknik özellikler",
    paramLabel: "Özellik",
    valueLabel: "Değer",
    cta: "Tüm ekipmanı inceleyin",
    items: [
      {
        id: "blaster",
        name: "Oyun blasteri",
        short: "Hafif, yuvarlak hatlı, takım renginde yanan",
        text: "Küçük ellere göre tasarlanmış hafif gövde, yumuşak kenarlar ve takım renginde yanan ışıklar. Üstteki mini ekran kalan enerjiyi ve puanı gösterir.",
        features: ["Takım rengine göre değişen ışık", "Işık ve sesle anında geri bildirim", "Darbeye dayanıklı gövde"],
        specs: [
          ["Ağırlık", "Yaklaşık 700 g"],
          ["Etkin oyun mesafesi", "15–30 m (moda göre ayarlanabilir)"],
          ["Sinyal tipi", "Kızılötesi (IR LED)"],
          ["Pil kullanım süresi", "8–10 saat"],
          ["Şarj süresi", "3–4 saat"],
          ["Gövde malzemesi", "Darbeye dayanıklı ABS"],
          ["Ekran", "Renkli mini LCD"],
          ["Geri bildirim", "Işık, ses ve titreşim"],
        ],
        alt: "Yuvarlak hatlı, oyuncak görünümlü fütüristik oyun blasteri; ön tarafında parlayan turkuaz lens.",
      },
      {
        id: "vest",
        name: "Sensörlü yelek ve kafa bandı",
        short: "İsabeti algılar, takım rengini gösterir",
        text: "Ayarlanabilir, hafif ve silinebilir yüzeyli. Sensörler isabeti algılar ve oyuncunun takım rengini gösterir. Küçük yaş grubu için kafa bandı seçeneği vardır.",
        features: ["Tek beden ayarlanabilir kayışlar", "Takım renginde parlayan sensörler", "Kafa bandı alternatifi"],
        specs: [
          ["Sensör sayısı", "8 (göğüs, sırt, omuzlar)"],
          ["Beden aralığı", "6–14 yaş, ayarlanabilir kayışlar"],
          ["Ağırlık", "Yaklaşık 600 g"],
          ["Yüzey ve temizlik", "Su itici, silinebilir kumaş"],
          ["Blaster bağlantısı", "Kablosuz"],
          ["Pil kullanım süresi", "8–10 saat"],
        ],
        alt: "Göğüs ve omuzlarında parlayan mercan rengi sensörler olan çocuk yeleği ve yanında sensörlü kafa bandı.",
      },
      {
        id: "target",
        name: "İnteraktif hedef",
        short: "Vurulduğunda renk değiştirir, ses verir",
        text: "Duvara ya da dekora monte edilen, isabet aldığında renk değiştiren ve ses çıkaran hedefler. Isınma oyunlarının, puan avlarının ve görevlerin kalbi.",
        features: ["Duvar ve dekor montajı", "Oyun moduna göre renk ve efekt", "Görevlere bağlanabilir"],
        specs: [
          ["Çap", "30 cm"],
          ["Montaj", "Duvar, bölme veya dekor üzeri"],
          ["Güç beslemesi", "12 V adaptör veya şarjlı pil"],
          ["Işık efektleri", "RGB LED, moda göre renk ve animasyon"],
          ["Desteklenen oyun modları", "Puan avı, görev, ısınma, takım hedefi"],
        ],
        alt: "İç içe halkalı, kenarında ışıklar bulunan yuvarlak interaktif hedef.",
      },
      {
        id: "base",
        name: "Baz istasyonu",
        short: "Ele geçirilecek ya da korunacak merkez",
        text: "Ekiplerin ele geçirmeye ya da savunmaya çalıştığı merkez nokta. Oyuna strateji katar; ışığıyla hangi takımın önde olduğunu herkes görür.",
        features: ["Takım rengine dönen ışık halkası", "Ele geçirme ve savunma modları", "Arenaya tema uyumlu kaplama"],
        specs: [
          ["Yükseklik", "Yaklaşık 120 cm"],
          ["Güç beslemesi", "220 V şebeke (12 V adaptör)"],
          ["Oyun modları", "Ele geçirme, savunma, yeniden doğma noktası"],
          ["Kaplama / tema uyarlaması", "Temaya özel kaplama ve renk"],
        ],
        alt: "Tepesinde kubbe ve ışık halkaları olan, altıgen tabanlı baz istasyonu.",
      },
      {
        id: "charger",
        name: "Şarj istasyonu",
        short: "Düzenli, güvenli, kablo karmaşası yok",
        text: "Blasterlar ve yelekler oyun aralarında düzenli şekilde şarj olur. Hangi ünitenin hazır olduğu ışıklardan anlaşılır; kablolar ortada kalmaz.",
        features: ["Şarj durumu göstergesi", "Duvar ya da zemin montajı", "Kilitlenebilir kapak seçeneği"],
        specs: [
          ["Kapasite", "10 ünite (modüler, genişletilebilir)"],
          ["Tam şarj süresi", "3–4 saat"],
          ["Güç gereksinimi", "220 V, standart priz"],
          ["Ölçüler", "Duvar tipi yaklaşık 120 × 60 cm"],
        ],
        alt: "Dört yuvasında şarj olan blasterlar ve yeşil şarj göstergeleri bulunan raf.",
      },
      {
        id: "control",
        name: "Oyun yönetim sistemi ve skor ekranı",
        short: "Tek panelden başlat, sonuçlar ekranda",
        text: "Eğitmen oyunu tabletten ya da bilgisayardan başlatır, modu, süreyi ve yaş grubunu seçer. Oyun bittiğinde skorlar ekrana gelir; çocuklar sonuçlarını hemen görür.",
        features: ["Hazır oyun modları ve görevler", "Yaş grubuna göre ayarlar", "Uzaktan güncelleme ve destek"],
        specs: [
          ["Platform", "Tablet (Android) ve Windows PC"],
          ["Hazır oyun modu sayısı", "10+"],
          ["Arayüz dilleri", "Türkçe, İngilizce (diğerleri istek üzerine)"],
          ["Skor ekranı", "TV veya monitör, HDMI bağlantı"],
          ["Yazılım güncellemesi", "İnternet üzerinden, uzaktan"],
          ["Uzaktan destek", "Var, internet bağlantısıyla"],
        ],
        alt: "Takım puanlarını ve oyun süresini gösteren tablet ve skor ekranı.",
      },
    ],
  },

  scoreboard: {
    title: "Skor tablosu",
    mission: "Görev: Enerji çekirdeğini koru",
    time: "Kalan süre",
    teams: [
      { name: "Mercan Takımı", score: 1240, color: "coral" },
      { name: "Turkuaz Takımı", score: 1180, color: "cyan" },
    ],
    playersTitle: "Haftanın yıldızları",
    players: [
      { name: "Roket", team: "coral", score: 420 },
      { name: "Pırıl", team: "cyan", score: 395 },
      { name: "Kuyrukluyıldız", team: "coral", score: 370 },
      { name: "Bulut", team: "cyan", score: 340 },
    ],
    demo: "Demo verisi",
    points: "puan",
  },

  control: {
    title: "Oyun paneli",
    arena: "Arena 1",
    mode: "Oyun modu",
    modes: ["Takım görevi", "Puan avı", "Bazı ele geçir"],
    ageGroup: "Yaş grubu",
    ages: ["6–9", "10–14"],
    duration: "Süre",
    durationValue: "10 dk",
    players: "Oyuncu",
    playersValue: "16 / 20",
    ready: "Ekipman hazır",
    start: "Oyunu başlat",
    pause: "Duraklat",
    lights: "Salon ışıkları",
  },

  safety: {
    eyebrow: "Güvenlik",
    title: "Önce çocuklar",
    sub: "Ebeveynin içi rahat olmalı, işletmecinin de. Güvenlik tasarımın ilk satırında başlar.",
    items: [
      {
        icon: "Eye",
        title: "Göz için güvenli sinyal",
        text: "Adı \"lazer\" olsa da blasterlar kızılötesi (IR) sinyal kullanır; tıpkı TV kumandaları gibi. Ekipmanın göz güvenliğine ilişkin teknik belgeleri teslimatta sizinle paylaşılır.",
        todo: "",
      },
      {
        icon: "ShieldCheck",
        title: "Yumuşak bölmeler, yuvarlak köşeler",
        text: "Labirent bölmeleri darbe emici malzemelerle ve yuvarlatılmış kenarlarla tasarlanır; koşan çocuklar için keskin köşe bırakmayız.",
        todo: "",
      },
      {
        icon: "DoorOpen",
        title: "Acil çıkışlar hep görünür",
        text: "Oyun ışığı ne olursa olsun acil çıkış ve yönlendirme ışıkları görünür kalır. Salon ışıkları tek tuşla açılır.",
        todo: "",
      },
      {
        icon: "Baby",
        title: "Yaşa göre oyun modları",
        text: "Küçükler için daha sakin tempolu, puan odaklı oyunlar; büyükler için takım stratejisi gerektiren görevler.",
        todo: "",
      },
      {
        icon: "UserCheck",
        title: "Eğitmen kontrolünde oyun",
        text: "Her oyun kısa bir brifingle başlar. Eğitmen oyunu izler, kuralları hatırlatır ve gerektiğinde tek tuşla durdurur.",
        todo: "",
      },
      {
        icon: "Droplets",
        title: "Kolay temizlenen ekipman",
        text: "Yelek ve bantların yüzeyleri silinebilir. Oyunlar arası temizlik rutini personel eğitiminin bir parçasıdır.",
        todo: "",
      },
    ],
    briefing: {
      title: "Oyun öncesi brifing",
      rules: ["Arenada koşmak yok, hızlı yürümek serbest", "Blaster yalnızca yeleklere ve hedeflere", "Eğitmenin düdüğünde herkes durur", "Takım arkadaşına yardım etmek puan kazandırır"],
    },
  },

  plan: {
    eyebrow: "Arena planı",
    title: "Tipik bir arenada neler var?",
    sub: "Yerleşim her mekâna göre yeniden çizilir. Bu plan, ziyaretçinin girişten skor ekranına kadar izlediği yolu gösterir.",
    zones: {
      entrance: "Giriş ve karşılama",
      briefing: "Brifing alanı",
      charging: "Şarj ve ekipman",
      field: "Oyun alanı",
      score: "Skor ekranı",
      exit: "Acil çıkış",
      base: "Baz",
      target: "Hedef",
    },
    flow: "Ziyaretçi akışı",
    needsTitle: "Neye ihtiyaç var?",
    needs: [
      ["Önerilen alan", "80 m²'den başlayan"],
      ["Tavan yüksekliği", "En az 2,6 m"],
      ["Elektrik", "220 V, 3–5 kW"],
      ["Aynı anda oyuncu", "20 kişiye kadar"],
      ["Personel", "Vardiya başına 2–3 kişi"],
    ],
    alt: "Arenanın yukarıdan planı: giriş, brifing alanı, şarj bölümü, labirentli oyun alanı ve skor ekranı.",
  },

  calc: {
    eyebrow: "Yatırımcı için",
    title: "Kendi rakamlarınızla kaba bir hesap",
    sub: "Alanınızı, çalışma saatlerinizi, fiyatınızı ve beklediğiniz doluluğu girin; aylık ciro potansiyelini görün.",
    area: "Oyun alanı",
    areaUnit: "m²",
    hours: "Günlük çalışma süresi",
    hoursUnit: "saat",
    price: "Kişi başı oyun fiyatı",
    occupancy: "Ortalama doluluk",
    capacity: "Aynı anda oyuncu",
    slots: "Günlük oyun seansı",
    monthly: "Tahmini aylık ciro",
    yearly: "Tahmini yıllık ciro",
    players: "kişi",
    sessions: "seans",
    assumptions: "Varsayımlar: bir seans {slot} dakika (brifing dahil), oyuncu başına {m2} m², oyun başına en fazla {max} oyuncu, ayda {days} çalışma günü.",
    disclaimer:
      "Bu hesap yalnızca bir tahmindir; gelir taahhüdü değildir. Giderler (kira, personel, enerji, vergi) dahil edilmemiştir. Gerçek sonuç konuma, ziyaretçi trafiğine, fiyatlamaya, sezona ve işletme yönetimine göre değişir.",
    cta: "Projeniz için detaylı hesap isteyin",
  },

  arcade: {
    eyebrow: "Aynı alana ek gelir",
    title: "Çocuk oyun makineleri ve interaktif oyunlar",
    text: "Arenanın yanına oyun makineleri ve interaktif oyunlar ekleyin: sırasını bekleyen çocuklar oyalanır, kardeşler de eğlenir, bekleme alanı gelire dönüşür.",
    cta: "Oyun makinelerine bakın",
  },

  service: {
    eyebrow: "Servis ve destek",
    title: "Açılıştan sonra da yanınızdayız",
    sub: "Bir arena her gün çalışır. Biz de öyle planlarız.",
    termsLabel: "Koşullar",
    items: [
      { icon: "ShieldCheck", title: "Garanti", text: "Ekipman ve elektronik için garanti kapsamı.", terms: "12 ay, tüm ekipman ve elektronik" },
      { icon: "Package", title: "Yedek parça", text: "Sık kullanılan parçalar için stok ve hızlı gönderim.", terms: "Sık kullanılan parçalar stokta, Türkiye içi 2–3 iş günü" },
      { icon: "Headset", title: "Uzaktan destek", text: "Yazılım ve sistem sorunlarında uzaktan bağlanıp çözüm.", terms: "Hafta içi 09:00–18:00; telefon, e-posta, WhatsApp" },
      { icon: "RefreshCw", title: "Senaryo güncellemeleri", text: "Yeni oyun modları ve görevlerle arena tazelenir, çocuklar yeniden gelir.", terms: "Yılda en az 2 güncelleme, garanti süresince ücretsiz" },
      { icon: "Wrench", title: "Periyodik bakım", text: "Ekipman ve arenanın düzenli kontrolü.", terms: "6 ayda bir kontrol ziyareti" },
      { icon: "GraduationCap", title: "Yeni personel eğitimi", text: "Ekibiniz değiştiğinde yeni eğitmenler için eğitim.", terms: "Uzaktan ücretsiz; yerinde eğitim teklif ile" },
    ],
  },

  faq: {
    eyebrow: "Sık sorulan sorular",
    title: "Aklınızdaki sorular",
    sub: "Burada olmayan bir sorunuz varsa form ya da WhatsApp üzerinden yazın.",
    items: [
      {
        q: "Anahtar teslim bir çocuk lazer tag arenasının maliyeti ne kadar?",
        a: "Maliyet; alanın büyüklüğüne, temaya, dekorun kapsamına ve ekipman sayısına göre değişir. Keşif ve ölçümden sonra kalem kalem fiyatlandırılmış bir teklif hazırlıyoruz.",
      },
      {
        q: "Ne kadar alana ihtiyaç var?",
        a: "Çocuk arenası için önerdiğimiz alan 80 m²'den başlar. Alan büyüdükçe labirent zenginleşir ve aynı anda daha fazla çocuk oynar. Tavan yüksekliği ve kolon yerleşimi de planı etkiler; bunlara keşifte birlikte bakıyoruz.",
      },
      {
        q: "Arena ne kadar sürede açılır?",
        a: "Sözleşmeden açılışa tipik süre 8–12 haftadır. Süre; tema kapsamına, üretim takvimine ve mekânın hazır olmasına bağlıdır. Takvim proje başında adım adım netleşir.",
      },
      {
        q: "Hangi yaş grubu için uygun?",
        a: `Oyun modlarımız yaklaşık ${age} yaş için tasarlanır. Küçükler için daha sakin, puan odaklı oyunlar; büyükler için takım stratejisi içeren görevler vardır.`,
      },
      {
        q: "Aynı anda kaç çocuk oynayabilir?",
        a: "Sistem tek oyunda 20 oyuncuya kadar destekler. Pratikte sayı arenanın büyüklüğüne ve seçilen oyun moduna göre belirlenir.",
      },
      {
        q: "Personel gerekiyor mu, kaç kişi?",
        a: "Evet, her oyunu eğitimli bir eğitmenin yönetmesi gerekir. Tipik bir vardiyada 2–3 kişi yeterlidir: karşılama ve kasa, brifing ve oyun yönetimi. Kesin sayı yoğunluğa göre değişir.",
      },
      {
        q: "Personel eğitimini siz mi veriyorsunuz?",
        a: "Evet. Açılıştan önce sahada uygulamalı eğitim veriyoruz: oyun yönetim yazılımı, güvenlik kuralları, brifing, ekipman bakımı ve misafir deneyimi. Yeni personel için uzaktan eğitim ücretsizdir; yerinde eğitim ayrıca planlanır.",
      },
      {
        q: "Garanti ve servis nasıl işliyor?",
        a: "Ekipman 12 ay garanti kapsamındadır. Yedek parça, uzaktan destek ve gerektiğinde yerinde servis sağlıyoruz. Garanti koşulları sözleşmede ayrıntılı olarak yer alır.",
      },
      {
        q: "Arenayı markamıza göre özelleştirebilir miyiz?",
        a: "Evet. Renkler, logo, maskot, giriş cephesi, skor ekranı ve görev hikâyeleri markanıza göre tasarlanabilir.",
      },
      {
        q: "Türkiye geneli ve yurt dışında çalışıyor musunuz?",
        a: "Türkiye'nin her şehrinde proje üstleniyoruz. Yurt dışında özellikle Orta Doğu, Kafkasya, Balkanlar ve Orta Asya'daki projelere odaklanıyoruz; lojistik, kurulum ve eğitim planını her ülke için ayrıca hazırlıyoruz.",
      },
      {
        q: "Taksit veya leasing imkânı var mı?",
        a: "Projeye göre peşinat ve ara ödemelerden oluşan esnek bir ödeme planı sunuyoruz. Taksit ve leasing seçenekleri için finansman kuruluşlarıyla birlikte çözüm üretiyoruz; ayrıntılar teklif aşamasında netleşir.",
      },
    ],
  },

  form: {
    eyebrow: "Teklif alın",
    title: "Arenanızı birlikte planlayalım",
    sub: "Birkaç bilgi yeterli. Proje ekibimiz talebinizi inceleyip size dönsün.",
    required: "zorunlu",
    fields: {
      name: "Ad soyad",
      company: "Şirket",
      position: "Pozisyon",
      phone: "Telefon",
      email: "E-posta",
      country: "Ülke",
      city: "Şehir",
      venue: "Mekân türü",
      area: "Kullanılabilir alan (m²)",
      opening: "Planlanan açılış tarihi",
      interest: "İlgilendiğiniz konu",
      message: "Mesajınız",
    },
    placeholders: {
      name: "Adınız ve soyadınız",
      company: "Şirket adı",
      position: "ör. İşletme müdürü",
      phone: "+90 5__ ___ __ __",
      email: "ornek@sirket.com",
      country: "Türkiye",
      city: "ör. İzmir",
      area: "ör. 250",
      message: "Mekânınızdan, hedeflerinizden ve aklınızdaki temadan bahsedin.",
    },
    venueOptions: [
      { value: "avm", label: "AVM" },
      { value: "fec", label: "Aile eğlence merkezi" },
      { value: "hotel", label: "Otel / tatil köyü" },
      { value: "park", label: "Çocuk parkı" },
      { value: "other", label: "Diğer" },
    ],
    selectPlaceholder: "Seçin",
    interestOptions: [
      { value: "lasertag", label: "Lazer tag arenası" },
      { value: "arcade", label: "Oyun makineleri" },
      { value: "both", label: "İkisi de" },
    ],
    consentBefore: "Kişisel verilerimin, talebime dönüş yapılması amacıyla ",
    consentLink: "KVKK Aydınlatma Metni",
    consentAfter: " kapsamında işlenmesini kabul ediyorum.",
    submit: "Teklif talebini gönder",
    sending: "Gönderiliyor…",
    errors: {
      name: "Lütfen adınızı ve soyadınızı yazın.",
      company: "Lütfen şirket adını yazın.",
      phone: "Telefon numarası eksik görünüyor.",
      email: "Geçerli bir e-posta adresi girin.",
      venue: "Lütfen mekân türünü seçin.",
      consent: "Devam etmek için onay kutusunu işaretleyin.",
      summary: "Formda düzeltilmesi gereken alanlar var.",
      network: "Talebiniz gönderilemedi. Lütfen tekrar deneyin ya da bize WhatsApp'tan yazın.",
    },
    thanks: {
      title: "Teşekkürler, talebiniz bize ulaştı!",
      text: "Proje ekibimiz talebinizi inceleyip 1 iş günü içinde sizinle iletişime geçecek. Bu arada arena temalarına göz atabilirsiniz.",
      cta: "Arena temalarını görün",
    },
    privacyNote: "Bilgileriniz yalnızca teklif hazırlamak için kullanılır.",
  },

  footer: {
    tagline: "Çocuklar için anahtar teslim lazer tag arenaları: tasarım, ekipman, kurulum, eğitim ve servis.",
    pages: "Sayfalar",
    company: "Kurumsal",
    contact: "İletişim",
    legal: "Yasal",
    privacy: "KVKK Aydınlatma Metni",
    terms: "Kullanım Koşulları",
    social: "Sosyal medya",
    email: "E-posta",
    phone: "Telefon",
    address: "Adres",
    taxInfo: "Vergi dairesi / no",
    mersis: "MERSİS",
    rights: "Tüm hakları saklıdır.",
    todoValue: "TODO",
  },

  photo: {
    hint: "Fotoğraf eklenecek",
  },

  pages: {
    turnkey: {
      eyebrow: "Anahtar teslim süreç",
      title: "Keşiften ilk oyuna, her adım tek ekipte",
      sub: "Bir arena projesinde mimari, elektronik, dekor, yazılım ve insan bir araya gelir. Biz bunları tek takvimde, tek sorumlulukla yönetiriz.",
      stepLabels: { we: "Biz ne yapıyoruz", you: "Sizden beklenen", out: "Çıktı" },
      details: [
        { you: "Alanın planı (varsa), erişim izni, hedef açılış tarihi.", out: "Keşif raporu ve ön yerleşim önerisi." },
        { you: "Ziyaretçi profiliniz, marka kılavuzunuz, bütçe çerçeveniz.", out: "Onaylanmış tema ve konsept panosu." },
        { you: "Tasarım geri bildirimleri ve onay.", out: "Uygulama projesi, 3D görseller ve kesin teklif." },
        { you: "Mekân tarafında elektrik hattı ve zemin hazırlığı (ayrıntılı liste projeyle birlikte verilir).", out: "Test edilmiş ekipman ve dekor, sevkiyat planı." },
        { you: "Kurulum günlerinde alana erişim.", out: "Çalışan arena ve test raporu." },
        { you: "Eğitime katılacak personel.", out: "Eğitimli ekip ve işletme el kitabı." },
        { you: "Açılış tarihi ve iletişim planınız.", out: "Açılış desteği, garanti ve servis başlangıcı." },
      ],
      includedTitle: "Teslimata neler dahil?",
      included: [
        "Mekâna özel arena projesi ve 3D görselleştirme",
        "Labirent bölmeleri ve tematik dekor",
        "Blasterlar, sensörlü yelek veya kafa bantları",
        "İnteraktif hedefler ve baz istasyonları",
        "Şarj istasyonu",
        "Oyun yönetim yazılımı ve skor ekranı",
        "Tema ışığı, efekt aydınlatması ve ses sistemi",
        "Montaj, kablolama ve saha testleri",
        "Personel eğitimi ve işletme el kitabı",
        "Garanti, yedek parça ve uzaktan destek",
      ],
      includedNote: "Kapsam projeye göre değişebilir; kesin liste teklifte yer alır.",
      yourTitle: "Mekân tarafında neler gerekir?",
      your: [
        "Uygun ölçüde boş alan (en az 80 m², tavan yüksekliği en az 2,6 m)",
        "Yeterli elektrik altyapısı (220 V, 3–5 kW)",
        "Havalandırma ve iklimlendirme",
        "Yasal izinler ve yangın güvenliği onayları",
      ],
      photoTitle: "Kurulumdan kareler",
      photoNote: "Kurulum ve teslim fotoğrafları için ayrılmış alan.",
    },
    equipment: {
      eyebrow: "Ekipman",
      title: "Oyuncak gibi görünen, işletme gibi çalışan ekipman",
      sub: "Blasterdan skor ekranına kadar tüm parçalar aynı sistemin parçası. Tasarımı çocuklar için, dayanıklılığı yoğun hafta sonları için.",
      systemTitle: "Hepsi tek sistemde",
      systemText: "Eğitmen oyunu panelden başlatır; blasterlar, yelekler, hedefler ve baz istasyonları aynı anda devreye girer. Oyun bittiğinde skorlar ekranda.",
      note: "Değerler tipik konfigürasyona aittir; projenize göre değişebilir.",
    },
    themes: {
      eyebrow: "Arena temaları",
      title: "Çocukların içinde kaybolmak isteyeceği dünyalar",
      sub: "Her tema bir dekor paketi değil; ışığı, sesi, görevleri ve skor ekranıyla birlikte tasarlanmış bir oyun dünyası.",
      changesTitle: "Tema neleri değiştirir?",
      changes: [
        { icon: "Sparkles", title: "Dekor", text: "Bölme kaplamaları, giriş cephesi, tavan ve zemin grafikleri." },
        { icon: "Lightbulb", title: "Işık", text: "Temaya özel renkler, efektler ve oyun anına göre değişen sahneler." },
        { icon: "Volume2", title: "Ses", text: "Ortam sesi, görev anonsları ve isabet efektleri." },
        { icon: "Gamepad2", title: "Görevler", text: "Temaya bağlı oyun hikâyeleri ve hedeflerin rolü." },
      ],
    },
    arcade: {
      eyebrow: "Oyun makineleri",
      title: "Arenanın yanına oyun makineleri",
      sub: "Lazer tag ile aynı alanda çalışan çocuk oyun makineleri ve interaktif oyunlar. Ürün yelpazesini şu an netleştiriyoruz.",
      todoNote: "Güncel modeller, teknik bilgiler ve fiyatlar için bize yazın.",
      categoriesTitle: "Planlanan kategoriler",
      categories: [
        { icon: "Ticket", title: "Ödüllü oyun makineleri", text: "Bilet ve ödül sistemiyle çalışan beceri oyunları." },
        { icon: "Gauge", title: "Yarış ve sürüş oyunları", text: "Çocuk boyuna uygun yarış ve sürüş makineleri." },
        { icon: "Sparkles", title: "İnteraktif zemin ve duvar", text: "Projeksiyonla çalışan, hareketle oynanan oyunlar." },
        { icon: "Zap", title: "Refleks ve beceri oyunları", text: "Kısa süreli, tekrar oynatan oyunlar." },
        { icon: "Baby", title: "Küçükler için", text: "Daha küçük yaş grubu için sade ve güvenli oyunlar." },
      ],
      whyTitle: "Neden lazer tag ile birlikte?",
      why: [
        "Sırasını bekleyen çocuklar ve kardeşler için oyalanacak bir alan",
        "Doğum günü paketlerine eklenebilen ek oyunlar",
        "Tek proje, tek kurulum, tek servis muhatabı",
      ],
    },
    about: {
      eyebrow: "Hakkımızda",
      title: "Çocukların gerçekten eğlendiği alanlar kuruyoruz",
      intro: [
        "Biz, çocuklar için lazer tag arenaları tasarlayan ve kuran bir ekibiz. İşimiz bir salonu bölmelerle doldurmak değil; çocukların arkadaşlarıyla takım kurduğu, güldüğü, koştuğu ve çıkışta \"bir daha!\" dediği bir oyun dünyası yaratmak.",
        "İşletmeci tarafını da unutmuyoruz: güvenli, kolay yönetilen, uzun yıllar çalışacak ve ziyaretçiyi geri getirecek bir arena. Bu yüzden tasarımı, ekipmanı, kurulumu ve servisi tek elde topluyoruz.",
      ],
      valuesTitle: "Nasıl çalışıyoruz?",
      values: [
        { title: "Önce çocuk", text: "Her kararın ilk sorusu: Bu, bir çocuk için güvenli ve eğlenceli mi?" },
        { title: "Hikâyesi olan oyun", text: "Işık, ses ve görevler birlikte tasarlanınca oyun gerçekten akılda kalır." },
        { title: "İşletmeci için sade", text: "Panel kolay, bakım net, eğitim uygulamalı. Ekibiniz ilk günden rahat eder." },
        { title: "Açık takvim, açık iletişim", text: "Her adımda ne yapıldığını ve sırada ne olduğunu bilirsiniz." },
      ],
      companyTitle: "Şirket bilgileri",
      ownersTitle: "Şirket sahipleri",
      legalName: "Unvan",
      photoNote: "Ekip ve atölye fotoğrafı için ayrılmış alan.",
    },
    contact: {
      eyebrow: "İletişim",
      title: "Projenizi konuşalım",
      sub: "Formu doldurun ya da doğrudan yazın. Alanınızın ölçülerini ve planlanan açılış tarihini paylaşırsanız daha hızlı ilerleriz.",
      directTitle: "Doğrudan iletişim",
      nextTitle: "Formdan sonra ne olur?",
      next: [
        { title: "Talebinizi inceleriz", text: "Alan, mekân türü ve hedeflerinize bakarız." },
        { title: "Kısa bir görüşme yaparız", text: "Sorularınızı yanıtlar, ihtiyaçlarınızı netleştiririz." },
        { title: "Keşif ve teklif", text: "Yerinde keşif sonrası kalem kalem teklif hazırlarız." },
      ],
    },
    thanks: {
      title: "Teşekkürler, talebiniz bize ulaştı!",
      text: "Proje ekibimiz 1 iş günü içinde sizinle iletişime geçecek.",
    },
    notFound: {
      title: "Bu sayfa labirentte kayboldu",
      text: "Aradığınız sayfayı bulamadık. Ana sayfadan devam edebilirsiniz.",
    },
  },

  legal: {
    draft: "Taslak — hukuki inceleme gerekir",
    updated: "Son güncelleme",
    privacy: {
      title: "KVKK Aydınlatma Metni",
      sections: [
        {
          h: "1. Veri sorumlusu",
          p: [
            `6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca kişisel verileriniz, veri sorumlusu sıfatıyla ${BRAND.legalName} ("Şirket") tarafından aşağıda açıklanan kapsamda işlenmektedir.`,
            "Adres: Mahfil Çıkmazı 18, 34134 Fatih / İstanbul · E-posta: info@yakuzablade.com.tr",
          ],
        },
        {
          h: "2. İşlenen kişisel veriler",
          p: [
            "Kimlik bilgileri: ad, soyad. İletişim bilgileri: telefon, e-posta, ülke, şehir. Mesleki bilgiler: şirket, pozisyon. Talep bilgileri: mekân türü, alan, planlanan açılış tarihi, mesaj içeriği. İşlem güvenliği bilgileri: IP adresi ve teknik log kayıtları.",
          ],
        },
        {
          h: "3. İşleme amaçları",
          p: [
            "Teklif ve bilgi taleplerinizin alınması ve yanıtlanması, sizinle iletişime geçilmesi, teklif hazırlanması, sözleşme öncesi süreçlerin yürütülmesi, web sitesinin güvenliğinin sağlanması ve yasal yükümlülüklerin yerine getirilmesi.",
          ],
        },
        {
          h: "4. Hukuki sebepler",
          p: [
            "Kişisel verileriniz KVKK m. 5/2 (c) bir sözleşmenin kurulmasıyla doğrudan ilgili olması, (ç) hukuki yükümlülüğün yerine getirilmesi ve (f) meşru menfaat hukuki sebeplerine dayanılarak işlenir. Açık rıza gerektiren işlemler için ayrıca onayınız alınır.",
          ],
        },
        {
          h: "5. Aktarım",
          p: [
            "Kişisel verileriniz; form ve e-posta altyapısı, barındırma ve bilgi teknolojileri hizmeti aldığımız tedarikçilere ve yetkili kamu kurumlarına, KVKK m. 8 ve 9'a uygun olarak aktarılabilir. Yurt dışında bulunan hizmet sağlayıcılar kullanılması halinde aktarım KVKK m. 9 hükümlerine göre yapılır. Web sitesinin barındırma hizmeti Hostinger tarafından sağlanmaktadır.",
          ],
        },
        {
          h: "6. Toplama yöntemi",
          p: ["Kişisel verileriniz web sitemizdeki teklif formu, e-posta, telefon ve WhatsApp üzerinden elektronik ortamda toplanır."],
        },
        {
          h: "7. Saklama süresi",
          p: ["Verileriniz işleme amacının gerektirdiği süre ve ilgili mevzuatta öngörülen süreler boyunca saklanır, ardından silinir, yok edilir veya anonim hale getirilir; teklif talepleri, talebin sonuçlanmasından itibaren en fazla 2 yıl saklanır."],
        },
        {
          h: "8. Haklarınız",
          p: [
            "KVKK m. 11 uyarınca; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme, aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmişse düzeltilmesini, şartları oluştuğunda silinmesini veya yok edilmesini isteme, bu işlemlerin aktarılan üçüncü kişilere bildirilmesini isteme, otomatik sistemlerle analiz sonucu aleyhinize bir sonuca itiraz etme ve kanuna aykırı işleme nedeniyle zarara uğramanız halinde zararın giderilmesini talep etme haklarına sahipsiniz.",
          ],
        },
        {
          h: "9. Başvuru",
          p: ["Haklarınıza ilişkin taleplerinizi info@yakuzablade.com.tr adresine e-posta ile ya da Mahfil Çıkmazı 18, 34134 Fatih / İstanbul adresine yazılı olarak iletebilirsiniz. Başvurular en geç 30 gün içinde ücretsiz olarak sonuçlandırılır."],
        },
      ],
    },
    terms: {
      title: "Kullanım Koşulları",
      sections: [
        { h: "1. Kapsam", p: [`Bu web sitesi ${BRAND.legalName} tarafından işletilmektedir. Siteyi kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız.`] },
        { h: "2. Bilgilerin niteliği", p: ["Sitedeki bilgiler genel bilgilendirme amaçlıdır ve teklif niteliği taşımaz. Ürün özellikleri, görseller ve tema konseptleri önceden haber verilmeksizin değiştirilebilir."] },
        { h: "3. Yatırım hesaplayıcısı", p: ["Sitedeki hesaplayıcı yalnızca kullanıcının girdiği değerlere dayalı kaba bir tahmin sunar. Gelir, kâr veya geri dönüş taahhüdü değildir; yatırım kararları için tek başına esas alınamaz."] },
        { h: "4. Fikri mülkiyet", p: ["Sitedeki metin, illüstrasyon, logo ve tasarımların tüm hakları Şirket'e aittir. İzinsiz kopyalanamaz, çoğaltılamaz ve ticari amaçla kullanılamaz."] },
        { h: "5. Üçüncü taraf bağlantıları", p: ["Sitede yer alan üçüncü taraf bağlantılarının içeriğinden Şirket sorumlu değildir."] },
        { h: "6. Sorumluluğun sınırlandırılması", p: ["Şirket, sitenin kesintisiz veya hatasız çalışacağını garanti etmez. Yürürlükteki mevzuatın izin verdiği ölçüde, sitenin kullanımından doğabilecek dolaylı zararlardan sorumlu tutulamaz."] },
        { h: "7. Uygulanacak hukuk", p: ["Bu koşullar Türkiye Cumhuriyeti hukukuna tabidir. Uyuşmazlıklarda İstanbul (Merkez) mahkemeleri ve icra daireleri yetkilidir."] },
        { h: "8. İletişim", p: ["Sorularınız için: info@yakuzablade.com.tr · Mahfil Çıkmazı 18, 34134 Fatih / İstanbul."] },
      ],
    },
  },
};

export default tr;
export type Dict = typeof tr;
