// astro.config.mjs
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

export default defineConfig(({ mode }) => {
  // 1. load your .env and .env.[mode] in dev
  //    '' means “load ALL vars, not just those prefixed with VITE_”
  const env = loadEnv(mode, process.cwd(), '');

  // 2. for deploy builds, process.env.PUBLIC_SITE_DOMAIN
  //    will come from your hosting provider’s ENV settings
  const SITE_DOMAIN = env.PUBLIC_SITE_DOMAIN || process.env.PUBLIC_SITE_DOMAIN;

  return {
    site: SITE_DOMAIN ? `https://${SITE_DOMAIN}` : undefined,

    server: {
      port: Number(env.PUBLIC_DEV_PORT) || Number(process.env.PUBLIC_DEV_PORT) || 4000,
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

    integrations: [
      mdx(),
      react(),
    ],
  };
});
