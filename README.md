# Jack-Liang Blog

基于 [Ovidius](https://justgoodui.com/astro-themes/ovidius/) 主题修改的个人博客，使用 **Astro 7** 和 Tailwind CSS 4 构建。

## ✨ 主题特性

- 精选文章支持
- 订阅表单 (Mailchimp)
- **Tailwind CSS 4**
- **深色模式** (Dark Mode)
- SEO 优化 (canonical URLs, OpenGraph)
- 站点地图
- RSS 订阅
- Markdown & MDX 支持
- 标签筛选与排序
- 站内搜索 (Pagefind)
- 手绘标注效果 (Rough Notation)
- Cloudflare Pages 部署

## 📦 集成包

| 包名 | 用途 |
|------|------|
| `astro` | 框架核心 |
| `@astrojs/mdx` | MDX 支持 |
| `@astrojs/sitemap` | 站点地图生成 |
| `@astrojs/rss` | RSS 订阅 |
| `@tailwindcss/vite` | Tailwind CSS 集成 |
| `@tailwindcss/typography` | 文档样式 |
| `astro-pagefind` | 静态站点搜索 |
| `rough-notation` | 手绘标注效果 |

## ⚙️ 配置说明

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

- 站点图片使用外部 CDN (`https://img.jack-liang.com/`)
- 本地静态资源放在 `public/` 目录

## 📁 项目结构

```text
├── public/                    # 静态资源
├── src/
│   ├── assets/               # 资源文件
│   ├── components/           # 组件
│   │   └── Notation.astro    # 手绘标注组件
│   ├── content/
│   │   ├── blog/             # 博客文章
│   │   └── pages/            # 静态页面
│   ├── data/
│   ├── layouts/              # 布局组件
│   ├── pages/                # 页面路由
│   ├── remark/               # Remark 插件
│   ├── styles/               # 全局样式
│   ├── utils/                # 工具函数
│   ├── content.config.ts     # 内容配置
│   └── types.ts              # 类型定义
├── astro.config.mjs          # Astro 配置
├── package.json
├── pnpm-lock.yaml            # pnpm 依赖锁
├── wrangler.toml             # Cloudflare 配置
└── tsconfig.json
```

## 🚀 命令

| 命令 | 说明 |
|------|------|
| `pnpm install` | 安装依赖 |
| `pnpm run dev` | 启动开发服务器 (`localhost:4321`) |
| `pnpm run build` | 构建生产版本 (`dist/`) |
| `pnpm run preview` | 本地预览构建结果 |
| `pnpm run astro ...` | 运行 Astro CLI 命令 |

## 🌐 部署

项目通过 Git 集成自动部署到 Cloudflare Pages。提交到 `main` 分支后，Cloudflare 会自动拉取代码并部署。

### Cloudflare Pages 构建配置

在 Cloudflare Pages 项目设置中配置：

- **Build command**: `pnpm run build`
- **Build output directory**: `dist`
- **Node.js version**: 22

### 本地构建

```bash
pnpm run build  # 构建到 dist/
pnpm exec wrangler deploy  # 部署到 Cloudflare
```

## 🎨 深色模式

项目支持深色模式切换，配置在 `src/styles/global.css`：

- 自动检测系统偏好
- 手动切换按钮
- 状态持久化到 localStorage

## 📝 Notation 组件

用于添加手绘风格标注效果，支持 7 种标注类型：

- `underline` - 下划线
- `box` - 方框
- `circle` - 圆圈
- `highlight` - 高亮
- `strike-through` - 删除线
- `crossed-off` - 划掉
- `bracket` - 括号

## 📊 构建性能

| 指标 | 升级前 (Astro 6) | 升级后 (Astro 7) | 提升 |
|------|------------------|------------------|------|
| 构建时间 | ~6.02s | ~1.93s | ~68% |

## 📄 License

基于 [GPL-3.0](LICENSE) 许可证。