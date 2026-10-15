import type { APIRoute } from 'astro';
import { BRAND } from '../config/site';
export const GET: APIRoute = () =>
  new Response(JSON.stringify({
    name: BRAND.name, short_name: BRAND.name, start_url: '/', display: 'browser',
    background_color: '#fbf8f2', theme_color: '#08122c',
    icons: [{ src: '/icon-192.png', sizes: '192x192', type: 'image/png' }, { src: '/icon-512.png', sizes: '512x512', type: 'image/png' }],
  }), { headers: { 'Content-Type': 'application/manifest+json' } });
