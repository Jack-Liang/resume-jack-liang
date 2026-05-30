# Jack-Liang Blog

基于 [Ovidius](https://justgoodui.com/astro-themes/ovidius/) 主题修改的个人博客，使用 Astro.js 和 Tailwind CSS 构建。

![Preview](public/ovidius-preview.jpg)

## 主题特性

- ✅ 精选文章支持
- ✅ 订阅表单 (Mailchimp)
- ✅ Tailwind CSS
- ✅ SEO 优化 (canonical URLs, OpenGraph)
- ✅ 站点地图
- ✅ RSS 订阅
- ✅ Markdown & MDX 支持
- ✅ 图片优化 (Astro Image)
- ✅ 标签筛选与排序
- ✅ 站内搜索 (Pagefind)
- ✅ Cloudflare Pages 部署

## 集成包

- `@astrojs/tailwind` - Tailwind CSS 集成
- `@astrojs/sitemap` - 站点地图生成
- `@astrojs/mdx` - MDX 支持
- `@astrojs/rss` - RSS 订阅
- `@astrojs/cloudflare` - Cloudflare Pages 部署
- `astro-pagefind` - 静态站点搜索

## 配置说明

### `astro.config.mjs`

设置部署域名：

```javascript
export default defineConfig({
    site: 'https://jack-liang.com'
});
```

### `site-config.ts`

所有站点配置在 `src/data/site-config.ts`：

- 站点信息 - 标题、描述、Logo
- 导航链接
- 社交链接
- Hero 区域 - 头像、背景图
- 分页设置

### 图片

- 内容图片：放在 `src/assets/`
- 配置图片：可从 `src/assets/` 导入或使用 `public/` 目录

## 项目结构

```text
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   │   ├── blog/      # 博客文章
│   │   └── pages/     # 静态页面
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   ├── content.config.ts
│   └── types.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 命令

| 命令                   | 说明                                    |
| :--------------------- | :-------------------------------------- |
| `npm install`          | 安装依赖                                |
| `npm run dev`          | 启动开发服务器 (`localhost:4321`)      |
| `npm run build`        | 构建生产版本 (`dist/client/`)          |
| `npm run preview`      | 本地预览构建结果                        |
| `npm run astro ...`    | 运行 Astro CLI 命令                     |

## 部署

### Cloudflare Pages (推荐)

```bash
# 安装 Wrangler CLI
npm install -g wrangler

# 部署
wrangler pages deploy dist/client/
```

### Git 集成

在 GitHub 仓库设置 Cloudflare Pages，连接到 `main` 分支。

## License

基于 [GPL-3.0](LICENSE) 许可证。