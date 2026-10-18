// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Static portfolio demo. No adapter / deploy config in repo.
// Set SITE_URL at build time when a host is approved (used for canonical + og:image).
export default defineConfig({
  site: process.env.SITE_URL || 'http://127.0.0.1:4322',
  integrations: [tailwind({ applyBaseStyles: false })],
  server: { host: '127.0.0.1' },
  preview: { host: '127.0.0.1', port: 4322 },
});
