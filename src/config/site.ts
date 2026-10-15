/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONFIG — single place for brand, contacts, form and
 *  calculator settings. Everything marked TODO must be filled in.
 * ─────────────────────────────────────────────────────────────
 */

/** Brand. Change the name here and it updates the whole site (logo, meta, OG, schema). */
export const BRAND = {
  /** Short brand name used in logo, titles, OG images. */
  name: 'Yakuza Blade',
  /** Wordmark lines (write them already uppercased — no CSS uppercase is used anywhere). */
  wordmark: ['YAKUZA', 'BLADE'] as [string, string],
  /** Full legal name (unvan). */
  legalName: 'Yakuza Blade Oyun ve Eğlence Teknolojileri A.Ş.',
};

/** Production URL without trailing slash. TODO: set your real domain. */
export const SITE_URL = 'https://yakuzablade.com.tr';

/** Player age range shown on the site. TODO: confirm the final age range. */
export const AGE_RANGE = { min: 6, max: 14 };

/** Contacts & legal details. Leave '' until known — UI shows a TODO placeholder. */
export const CONTACT = {
  email: '', // TODO: e.g. teklif@alanadiniz.com
  phone: '+90 212 631 65 19',
  /** WhatsApp number in international format, digits only, e.g. 905xxxxxxxxx. TODO */
  whatsapp: '',
  address: 'Mahfil Çıkmazı 18, 34134 Fatih / İstanbul, Türkiye',
  taxOffice: '', // TODO: vergi dairesi
  taxNumber: '', // TODO: vergi no
  mersis: '', // TODO: MERSİS no
  kep: '', // TODO: KEP adresi (KVKK başvuruları için)
};

/** Company owners — shown on About and Contact pages. */
export const OWNERS = [
  {
    name: 'Birsen Gökkaya',
    address: ['Mahfil Çıkmazı 18', '34134 Fatih / İstanbul', 'Türkiye'],
    phone: '0212 631 65 19',
    tel: '+902126316519',
  },
  {
    name: 'Gülden Uygur',
    address: ['Şehit Sami Akbulut Caddesi 183A', '35980 Dikili / İzmir', 'Türkiye'],
    phone: '0232 671 909', // TODO: number has only 10 digits (TR landlines have 11) — verify
    tel: '+90232671909',
  },
];

/** Social links. TODO: replace '#' with real profile URLs. */
export const SOCIAL = {
  instagram: '#', // TODO
  youtube: '#', // TODO
  linkedin: '#', // TODO
  tiktok: '#', // TODO
  x: 'https://x.com/theyakuzablade',
};

/**
 * Quote form delivery.
 *  - 'netlify'   → Netlify Forms (works automatically when deployed on Netlify)
 *  - 'formspree' → set formspreeEndpoint (works on Vercel / any host)
 *  - 'php'       → /teklif.php on PHP hosting (Hostinger): emails the request to
 *                  phpRecipient and also appends it to ../teklifler.csv (outside public_html).
 */
export const FORM = {
  provider: 'php' as 'netlify' | 'formspree' | 'php',
  formspreeEndpoint: 'https://formspree.io/f/TODO',
  name: 'teklif',
  /** Where /teklif.php sends requests. TODO: e.g. teklif@yakuzablade.com.tr (empty = only CSV log). */
  phpRecipient: '',
};

/**
 * Investor calculator coefficients. ALL VALUES ARE PLACEHOLDERS — TODO: replace
 * with figures that match your real equipment and market data.
 */
export const CALC = {
  /** m² of arena needed per simultaneous player. TODO */
  m2PerPlayer: 8,
  /** Max simultaneous players the system supports in one game. TODO */
  maxPlayers: 20,
  /** One game slot in minutes, incl. briefing & gear-up. TODO */
  slotMinutes: 20,
  /** Operating days per month. TODO */
  daysPerMonth: 30,
  area: { min: 60, max: 1000, step: 10, default: 200 },
  hours: { min: 4, max: 16, step: 1, default: 10 },
  occupancy: { min: 5, max: 100, step: 5, default: 35 },
  /** Price per player per game, by site language. TODO: realistic defaults. */
  price: {
    tr: { currency: 'TRY', min: 50, max: 2000, step: 10, default: 300 },
    en: { currency: 'EUR', min: 2, max: 50, step: 1, default: 10 },
  },
};

/** Date used as "last updated" on legal drafts. */
export const LEGAL_UPDATED = '2026-10-15';
