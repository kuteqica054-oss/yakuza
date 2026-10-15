import type { APIRoute } from 'astro';
import { readFileSync } from 'node:fs';
import { svgToPng } from '../lib/og';

/** 32×32 PNG generated from public/favicon.svg at build time. */
export const GET: APIRoute = () => {
  let svg = readFileSync('public/favicon.svg', 'utf8');
  if (0) svg = svg.replace('rx="18"', 'rx="0"');
  return new Response(svgToPng(svg, 32), { headers: { 'Content-Type': 'image/png' } });
};
