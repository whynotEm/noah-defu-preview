import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Set SITE_URL only after the public URL is confirmed. BASE_PATH is for a
// GitHub Pages repository subpath, e.g. /noah-defu (omit for a custom domain).
const siteUrl = process.env.SITE_URL?.trim();
const basePath = process.env.BASE_PATH?.trim() || '/';

export default defineConfig({
  output: 'static',
  site: siteUrl || undefined,
  base: basePath,
  trailingSlash: 'always',
  integrations: siteUrl ? [sitemap({
    // The root is only a redirect to /pl/; indexing it duplicates Polish.
    filter: (page) => new URL(page).pathname.replace(/\/$/, '') !== basePath.replace(/\/$/, ''),
    i18n: { defaultLocale: 'pl', locales: { pl: 'pl-PL', en: 'en-US', zh: 'zh-CN' } },
  })] : [],
});
