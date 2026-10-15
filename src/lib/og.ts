import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { BRAND } from '../config/site';

const require = createRequire(import.meta.url);
const font = (pkg: string, file: string) => readFileSync(require.resolve(`${pkg}/files/${file}`));

/** Fonts for satori (woff, latin + latin-ext so Turkish ğ ş ı İ render). */
const fonts = [
  { name: 'Unbounded', data: font('@fontsource/unbounded', 'unbounded-latin-700-normal.woff'), weight: 700 as const },
  { name: 'UnboundedExt', data: font('@fontsource/unbounded', 'unbounded-latin-ext-700-normal.woff'), weight: 700 as const },
  { name: 'Figtree', data: font('@fontsource/figtree', 'figtree-latin-600-normal.woff'), weight: 600 as const },
  { name: 'FigtreeExt', data: font('@fontsource/figtree', 'figtree-latin-ext-600-normal.woff'), weight: 600 as const },
];

const bg = `data:image/svg+xml;base64,${Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0c1a3d"/>
  <defs><pattern id="g" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#9fb0d9" stroke-opacity=".08"/></pattern>
  <radialGradient id="c" cx="0" cy="1" r="1"><stop offset="0" stop-color="#ff5a4e" stop-opacity=".25"/><stop offset=".6" stop-color="#ff5a4e" stop-opacity="0"/></radialGradient>
  <radialGradient id="t" cx="1" cy="0" r="1"><stop offset="0" stop-color="#1fd6c8" stop-opacity=".22"/><stop offset=".6" stop-color="#1fd6c8" stop-opacity="0"/></radialGradient></defs>
  <rect width="1200" height="630" fill="url(#g)"/><rect width="1200" height="630" fill="url(#c)"/><rect width="1200" height="630" fill="url(#t)"/>
  <line x1="640" y1="630" x2="1200" y2="120" stroke="#ff5a4e" stroke-width="4"/>
  <line x1="700" y1="0" x2="1200" y2="520" stroke="#1fd6c8" stroke-width="4"/>
  <circle cx="985" cy="314" r="58" fill="#0c1a3d" stroke="#ffc93c" stroke-width="10"/>
  <circle cx="985" cy="314" r="26" fill="#ffc93c"/>
  <circle cx="985" cy="314" r="92" fill="none" stroke="#ffc93c" stroke-opacity=".35" stroke-width="3"/>
  <rect x="60" y="60" width="54" height="54" rx="16" fill="#13254f"/>
  <path d="M70 104 L104 70" stroke="#ff5a4e" stroke-width="5" stroke-linecap="round"/><path d="M70 70 L104 104" stroke="#1fd6c8" stroke-width="5" stroke-linecap="round"/>
  <circle cx="87" cy="87" r="8" fill="#ffc93c" stroke="#0c1a3d" stroke-width="3"/>
</svg>`).toString('base64')}`;

const h = (type: string, style: Record<string, unknown>, children?: unknown) => ({ type, props: { style, children } });

export async function renderOg(o: { title: string; sub: string; lang: string; host: string }) {
  const tree = h('div', { width: 1200, height: 630, display: 'flex', position: 'relative', fontFamily: 'Figtree, FigtreeExt' }, [
    { type: 'img', props: { src: bg, width: 1200, height: 630, style: { position: 'absolute', top: 0, left: 0 } } },
    h('div', { position: 'absolute', top: 66, left: 134, display: 'flex', fontFamily: 'Unbounded, UnboundedExt', fontSize: 26, color: '#fbf8f2', letterSpacing: 1 }, BRAND.name.toLocaleUpperCase(o.lang)),
    h('div', { position: 'absolute', left: 60, top: 200, width: 720, display: 'flex', flexDirection: 'column' }, [
      h('div', { fontFamily: 'Unbounded, UnboundedExt', fontSize: 60, lineHeight: 1.08, color: '#fbf8f2', letterSpacing: -1 }, o.title),
      h('div', { marginTop: 28, fontSize: 30, lineHeight: 1.35, color: '#c9d3ee' }, o.sub),
    ]),
    h('div', { position: 'absolute', left: 60, bottom: 54, display: 'flex', alignItems: 'center', gap: 14 }, [
      h('div', { width: 14, height: 14, borderRadius: 7, background: '#ff5a4e' }),
      h('div', { width: 14, height: 14, borderRadius: 7, background: '#1fd6c8' }),
      h('div', { width: 14, height: 14, borderRadius: 7, background: '#ffc93c' }),
      h('div', { marginLeft: 8, fontSize: 24, color: '#9fb0d9' }, o.host),
    ]),
  ]);
  const svg = await satori(tree as any, { width: 1200, height: 630, fonts });
  return new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
}

export function svgToPng(svg: string, size: number) {
  return new Resvg(svg, { fitTo: { mode: 'width', value: size } }).render().asPng();
}
