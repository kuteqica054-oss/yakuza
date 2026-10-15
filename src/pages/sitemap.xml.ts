import type { APIRoute } from 'astro';
import { SITE_URL } from '../config/site';
import { routes, LANGS, locales, type PageId } from '../i18n';

/** Sitemap with both language versions and hreflang alternates (slugs differ per language). */
const indexable: PageId[] = ['home', 'turnkey', 'equipment', 'themes', 'arcade', 'about', 'contact'];
export const GET: APIRoute = () => {
  const abs = (p: string) => new URL(p, SITE_URL).href;
  const urls = indexable.flatMap((page) => LANGS.map((lang) => `  <url>
    <loc>${abs(routes[page][lang])}</loc>
${LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${locales[l].html}" href="${abs(routes[page][l])}"/>`).join('\n')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(routes[page].tr)}"/>
    <changefreq>monthly</changefreq>
    <priority>${page === 'home' ? '1.0' : '0.8'}</priority>
  </url>`));
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
