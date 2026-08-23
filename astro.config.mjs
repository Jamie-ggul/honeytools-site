import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// www is the actual production domain in Vercel (myhoneytip.com 308-redirects to it) —
// this must match so canonical tags / sitemap / RSS all point at the real serving domain.
const SITE_URL = process.env.SITE_URL || 'https://www.myhoneytip.com';

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
});
