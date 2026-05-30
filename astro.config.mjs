import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import pagefind from 'astro-pagefind';
import cloudflare from '@astrojs/cloudflare';
import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://jack-liang.com',
    output: 'static',
    adapter: cloudflare({
        platformProxy: {
            enabled: true
        }
    }),
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