import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://guilhermeadelima.github.io',
  base: '/Educacao-Acessivel',
  integrations: [
    tailwind(),
    sitemap(),
  ],
  output: 'static',
});