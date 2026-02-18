// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: '/apps/steincares/quiz_metoject',
  outDir: 'apps/steincares/quiz_metoject',
  vite: {
    plugins: [tailwindcss()]
  }
});