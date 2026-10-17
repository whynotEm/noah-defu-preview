import type { APIRoute } from 'astro';
import { rootPath } from '../data/paths';

export const GET: APIRoute = ({ site }) => {
  const body = ['User-agent: *', `Allow: ${rootPath()}`];
  if (site) body.push(`Sitemap: ${new URL(`${rootPath()}sitemap-index.xml`, site).href}`);
  return new Response(body.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
