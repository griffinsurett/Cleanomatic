// astro.config.mjs
import 'dotenv/config';                 // ① load .env into process.env
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

export default defineConfig({
  // Pull directly from process.env now
  site: `https://${process.env.PUBLIC_SITE_DOMAIN}`,

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

  integrations: [
    mdx(), 
    react(),   // ← this must land here, after dotenv loaded
  ],
});
