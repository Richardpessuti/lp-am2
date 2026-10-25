import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages: https://richardpessuti.github.io/lp-am2/
// Com domínio próprio, use SITE=https://seu.dominio e BASE_PATH=/
export default defineConfig({
  site: process.env.SITE ?? 'https://richardpessuti.github.io',
  base: process.env.BASE_PATH ?? '/lp-am2',
  vite: { plugins: [tailwindcss()] },
});
