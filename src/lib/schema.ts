import { t, type Lang } from '../i18n';
const strip = (s: string) => s.replace(/\s*TODO[^.]*\.?/g, '').trim();
/** FAQPage JSON-LD. Answers that are still pure TODO are left out. */
export const faqSchema = (lang: Lang) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: lang,
  mainEntity: t(lang).faq.items
    .filter((i) => strip(i.a).length > 20)
    .map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: strip(i.a) } })),
});
