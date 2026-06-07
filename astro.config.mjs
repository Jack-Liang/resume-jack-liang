import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import pagefind from 'astro-pagefind';
import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://jack-liang.com',
    output: 'hybrid',
    adapter: cloudflare(),
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [import heroAvatar from '../assets/images/avatar.jpg';

    hero: {
        avatar: {
            src: heroAvatar,
            alt: 'Jack-Liang'
        }
    }
        mdx(),
    sitemap(),
    pagefind({
        indexConfig: {
            excludeSelectors: ['[data-pagefind-ignore]', '[data-pagefind-ignore] *']
}
        })
    ]
});