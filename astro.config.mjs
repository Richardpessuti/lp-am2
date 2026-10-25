import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: { plugins: [tailwindcss()] },
  // Link curto para mandar direto aos clientes.
  redirects: { '/portfolio': 'https://www.canva.com/design/DAFUoLwEPOs/UK69-jgbZAzcHrJEa8Jw-A/view' },
});
