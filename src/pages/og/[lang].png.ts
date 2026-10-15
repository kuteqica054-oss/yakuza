import type { APIRoute } from 'astro';
import { renderOg } from '../../lib/og';
import { SITE_URL } from '../../config/site';
import { t, LANGS, type Lang } from '../../i18n';

export const getStaticPaths = () => LANGS.map((lang) => ({ params: { lang } }));

/** OG images (1200×630) rendered to PNG at build time with satori + resvg. */
export const GET: APIRoute = async ({ params }) => {
  const lang = params.lang as Lang;
  const m = t(lang).meta;
  const png = await renderOg({ title: m.ogTitle, sub: m.ogSub, lang, host: new URL(SITE_URL).host });
  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};
