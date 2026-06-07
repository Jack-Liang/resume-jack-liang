# Jack-Liang Blog

基于 Astro.js 的个人博客项目，部署在 Cloudflare Workers 上。

## 技术栈

- **框架**: Astro.js v6
- **样式**: Tailwind CSS v4
- **部署**: Cloudflare Workers + Pages
- **适配器**: @astrojs/cloudflare

## 构建

```bash
# 开发
npm run dev # localhost:4321

# 构建 (用于本地测试)
npm run build # 输出到 dist/client/
```

**部署**: 提交到 Git 后，Cloudflare Pages 会自动拉取代码并部署。

## 目录结构

```
src/
├── assets/images/   # 本地静态图片 (logo.svg)
├── components/      # Astro 组件
├── content/         # 博客文章和页面内容
├── data/            # 站点配置 (site-config.ts)
├── layouts/         # 布局组件
└── pages/           # 页面路由
```

## 配置文件

| 文件 | 用途 |
|------|------|
| `astro.config.mjs` | Astro 配置，包含 Cloudflare 适配器 |
| `wrangler.toml` | Workers部署配置 |
| `src/data/site-config.ts` | 站点内容配置 |
| `.prettierrc` | 代码格式化配置 |

## 图片

- 使用外部 CDN (`https://img.jack-liang.com/`) 托管图片
- 本地静态资源放在 `public/` 目录

## 代码规范

- 使用 Prettier 格式化代码
- 运行 `npm run dev` 后自动格式化