import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nzm.vercel.app',
  integrations: [sitemap()],
});
