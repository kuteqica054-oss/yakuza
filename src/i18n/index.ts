import tr from './tr';
import en from './en';
import { locales, type Lang } from './routes';

export const dicts = { tr, en };
export const t = (lang: Lang) => dicts[lang];

export const fmtNumber = (lang: Lang, n: number, opts: Intl.NumberFormatOptions = {}) =>
  new Intl.NumberFormat(locales[lang].intl, opts).format(n);

/** 15 Ekim 2026 / 15 October 2026 */
export const fmtDate = (lang: Lang, iso: string) =>
  new Intl.DateTimeFormat(locales[lang].intl, { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(iso));

export * from './routes';
