export type Lang = 'tr' | 'en';
export const LANGS: Lang[] = ['tr', 'en'];
export const DEFAULT_LANG: Lang = 'tr';

/** Every page exists in both languages. Keys are stable page ids. */
export const routes = {
  home: { tr: '/', en: '/en/' },
  turnkey: { tr: '/anahtar-teslim/', en: '/en/turnkey/' },
  equipment: { tr: '/ekipman/', en: '/en/equipment/' },
  themes: { tr: '/arena-temalari/', en: '/en/arena-themes/' },
  arcade: { tr: '/oyun-makineleri/', en: '/en/arcade-machines/' },
  about: { tr: '/hakkimizda/', en: '/en/about/' },
  contact: { tr: '/iletisim/', en: '/en/contact/' },
  privacy: { tr: '/kvkk/', en: '/en/privacy/' },
  terms: { tr: '/kullanim-kosullari/', en: '/en/terms/' },
  thanks: { tr: '/tesekkurler/', en: '/en/thank-you/' },
} as const;

export type PageId = keyof typeof routes;

export const path = (page: PageId, lang: Lang) => routes[page][lang];

export const locales: Record<Lang, { html: string; og: string; intl: string; label: string; name: string }> = {
  tr: { html: 'tr', og: 'tr_TR', intl: 'tr-TR', label: 'TR', name: 'Türkçe' },
  en: { html: 'en', og: 'en_US', intl: 'en-GB', label: 'EN', name: 'English' },
};
