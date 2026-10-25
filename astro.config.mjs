import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages: https://am2locacoes.github.io/
// Com domínio próprio, use SITE=https://seu.dominio
export default defineConfig({
  site: process.env.SITE ?? 'https://am2locacoes.github.io',
  base: process.env.BASE_PATH ?? '/',
  vite: { plugins: [tailwindcss()] },
});
