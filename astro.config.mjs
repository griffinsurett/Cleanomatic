// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

const SITE_DOMAIN = process.env.PUBLIC_SITE_DOMAIN;
if (!SITE_DOMAIN) {
  throw new Error('PUBLIC_SITE_DOMAIN is not defined! ⚠️');
}

export default defineConfig({
  site: `https://${SITE_DOMAIN}`,
  server: {
    port: Number(process.env.PUBLIC_DEV_PORT) || 4000,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx(), react()],
});
