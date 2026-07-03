import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import pagefind from 'astro-pagefind';
import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://jack-liang.com',
    output: 'static',
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [
        mdx(),
        sitemap(),
        pagefind({
            indexConfig: {
                excludeSelectors: ['[data-pagefind-ignore]', '[data-pagefind-ignore] *']
            }
        })
    ]
});
