// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import { config as loadDotenv } from 'dotenv';

// ① Only load .env when NODE_ENV !== 'production'
if (process.env.NODE_ENV !== 'production') {
  loadDotenv();
}

// ② Now process.env.PUBLIC_* is available:
const DOMAIN = process.env.PUBLIC_SITE_DOMAIN;
if (!DOMAIN) {
  throw new Error(
    '🚨 PUBLIC_SITE_DOMAIN is not defined! Add it to your .env (dev) or Kinsta dashboard (prod).'
  );
}

export default defineConfig({
  site: `https://${DOMAIN}`,
  server: {
    port: Number(process.env.PUBLIC_DEV_PORT) || 4000,
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (
              id.includes('node_modules/react') ||
              id.includes('node_modules/react-dom')
            ) {
              return 'react-vendor';
            }
          },
        },
      },
    },
  },
  integrations: [mdx(), react()],
});
