// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: '/~howard/Activity/KoreaStudyTour2026/',
  vite: {
    plugins: [tailwindcss()]
  }
});
