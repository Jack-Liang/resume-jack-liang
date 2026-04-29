import heroAvatar from '../assets/images/avatar.jpg';
import heroBackground from '../assets/images/hero.webp';
import logoUrl from '../assets/images/logo.svg?url';
import defaultSocial from '../assets/images/ovidius-preview.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    logo: {
        src: logoUrl,
        alt: 'Jack-Liang logo'
    },
    title: 'Jack-Liang',
    description: 'Jack-Liang 的个人网站',
    image: {
        src: defaultSocial,
        alt: 'Jack-Liang - 个人社交媒体链接'
    },
    primaryNavLinks: [
        {
            text: '首页',
            href: '/'
        },
        {
            text: '文章',
            href: '/blog'
        },
        {
            text: '关于我',
            href: '/about'
        },
        {
            text: '联系',
            href: '/contact'
        },
        // {
        //     text: 'Download Theme',
        //     href: 'https://github.com/JustGoodUI/ovidius-astro-theme'
        // }
    ],
    secondaryNavLinks: [
        {
            text: '关于我',
            href: '/about'
        },
        {
            text: '服务条款',
            href: '/terms'
        },
        {
            text: '和我联系',
            href: '/contact'
        },
        // {
        //     text: '下载主题',
        //     href: 'https://github.com/JustGoodUI/ovidius-astro-theme'
        // }
    ],
    socialLinks: [
        {
            text: 'GitHub 主页',
            href: 'https://github.com/Jack-Liang',
            icon: 'github'
        },
        {
            text: '知乎专栏',
            href: 'https://www.zhihu.com/column/c_1553466158648614912',
            icon: 'zhihu'
        },
        // {
        //     text: '关注 Instagram',
        //     href: 'https://instagram.com/',
        //     icon: 'instagram'
        // },
        // {
        //     text: '关注 Bluesky',
        //     href: 'https://bsky.app/profile/justgoodui.com',
        //     icon: 'bluesky'
        // },
        {
            text: '关注 Bilibili',
            href: 'https://space.bilibili.com/26855033',
            icon: 'bilibili'
        }
    ],
    hero: {
        title: '你好!',
        text: "我是 Jack-Liang，一个 ABAP 开发者。我很高兴能认识你。",
        avatar: {
            src: heroAvatar,
            alt: 'Jack-Liang'
        },
        backgroundImage: {
            src: heroBackground
        }
    },
    subscribe: {
        enabled: true,
        title: '订阅 Ovidius 新闻letter',
        text: '每周更新一次，直接在您的收件箱中接收最新新闻。',
        form: {
            action: 'https://justgoodthemes.us3.list-manage.com/subscribe/post?u=78f1bab16028354caeb23aecd&amp;id=4a7330d117&amp;f_id=005c48e2f0',
            emailFieldName: 'EMAIL',
            honeypotFieldName: 'b_78f1bab16028354caeb23aecd_4a7330d117'
        }
    },
    postsPerPage: 5
};

export default siteConfig;
