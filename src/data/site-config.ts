import logoUrl from '../assets/images/logo.svg?url';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    logo: {
        src: logoUrl,
        alt: 'Jack Liang logo'
    },
    title: 'Jack-Liang',
    description: 'ABAP 开发者 · 记录代码与生活的点滴',
    image: {
        src: 'https://img.jack-liang.com/00-headImage/avatar.jpg',
        alt: 'Jack Liang - 个人社交媒体链接'
    },
    primaryNavLinks: [
        { text: '首页', href: '/' },
        { text: '随想', href: '/notes' },
        { text: '文章', href: '/blog' },
        { text: '关于我', href: '/about' },
        { text: '和我联系', href: '/contact' }
    ],
    secondaryNavLinks: [
        { text: '关于我', href: '/about' },
        { text: '服务条款', href: '/terms' },
        { text: '和我联系', href: '/contact' }
    ],
    socialLinks: [
        { text: 'GitHub 主页', href: 'https://github.com/Jack-Liang', icon: 'github' },
        { text: '知乎专栏', href: 'https://www.zhihu.com/column/c_1553466158648614912', icon: 'zhihu' },
        { text: '关注 Bilibili', href: 'https://space.bilibili.com/26855033', icon: 'bilibili' },
        { text: '小红书', href: 'https://xhslink.com/m/2RMZVLwWhzE', icon: 'xiaohongshu' }
    ],
    hero: {
        title: '你好！',
        text: "我是 Jack Liang，一个 ABAP 开发者。很高兴能认识你。",
        avatar: {
            src: 'https://img.jack-liang.com/00-headImage/avatar.jpg',
            alt: 'Jack-Liang'
        },
        backgroundImage: {
            src: 'https://img.jack-liang.com/00-headImage/hero.webp'
        }
    },
    subscribe: {
        enabled: true,
        title: '订阅更新',
        text: '有新文章或随想时，邮件通知你。',
        form: {
            // Buttondown 订阅端点：注册 https://buttondown.com 后，
            // 把用户名换成你自己的（后台 Settings → Embedding → Form 里有现成的 action 地址）
            action: 'https://buttondown.com/api/emails/embed-subscribe/YOUR_BUTTONDOWN_USERNAME',
            emailFieldName: 'email',
            honeypotFieldName: ''
        }
    },
    postsPerPage: 5
};

export default siteConfig;