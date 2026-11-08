import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://www.naobasounds.com',
  build: { inlineStylesheets: 'always', format: 'file' }
});
