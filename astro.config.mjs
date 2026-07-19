import { unified } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import pagefind from 'astro-pagefind';
import { defineConfig } from 'astro/config';
import remarkGlobalComponents from './src/remark/global-components.mjs';

export default defineConfig({
    site: 'https://jack-liang.com',
    output: 'static',
    devToolbar: {
        enabled: false
    },
    markdown: {
        processor: unified({
            remarkPlugins: [remarkGlobalComponents]
        })
    },
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