import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), tailwind()],
  site: 'https://co.flujooficial.com',
  i18n: {
    defaultLocale: 'es-CO',
    locales: ['es-CO'],
  },
});
