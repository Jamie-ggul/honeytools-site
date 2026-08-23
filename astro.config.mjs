import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Replace with the real production domain before deploying.
const SITE_URL = process.env.SITE_URL || 'https://myhoneytip.com';

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
});
