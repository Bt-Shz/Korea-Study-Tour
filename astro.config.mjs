// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import { siteBase } from './src/config/base.mjs';
import { rehypeBasePath } from './src/utils/rehype-base-path.mjs';
import { remarkBasePath } from './src/utils/remark-base-path.mjs';

// https://astro.build/config
export default defineConfig({
  base: siteBase,
  markdown: {
    remarkPlugins: [[remarkBasePath, { base: siteBase }]],
    rehypePlugins: [[rehypeBasePath, { base: siteBase }]],
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
