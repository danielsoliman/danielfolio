// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwind from '@tailwindcss/vite'; // Use only one Tailwind import

// https://astro.build/config
export default defineConfig({
  site: 'https://danny.miami',
  integrations: [
    mdx(),
    sitemap(),
  ],
  vite: {
    plugins: [tailwind()],
  },
  output: 'server',
  adapter: vercel(),
});