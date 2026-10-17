# NOAH DEFU — 三语言诊所网站

这是华沙 NOAH DEFU 诺亚中医馆的静态官网 V1.0，提供波兰语、英语和简体中文页面。项目使用 Astro、TypeScript 和原生 CSS，无数据库或运行时后端。首屏和诊疗室图片是**概念示意图**，并非诊所实景；医师及证书为明确占位。

预览：[桌面截图](docs/preview-desktop.png) · [600px 中文截图](docs/preview-mobile.png)。概念图生成提示词见 [图片说明](docs/image-prompts.md)。

## 本地运行

需要 Node.js 20.3 或更新版本以及 npm。在 Windows 和 macOS 终端中运行：

```sh
npm install
npm run dev
```

打开终端显示的本地地址。`/` 会跳转到波兰语版；也可以直接访问 `/pl/`、`/en/`、`/zh/`。

```sh
npm run check
npm run build
npm run preview
```

`npm run build` 的静态输出在 `dist/`。本机 PowerShell 若拦截 `npm.ps1`，可将命令中的 `npm` 改为 `npm.cmd`；这不影响项目在其他系统运行。

## 内容与资料位置

| 需要修改的内容 | 文件 |
| --- | --- |
| 三语言文案、SEO 标题与描述、图片说明 | `src/i18n/pl.ts`、`en.ts`、`zh.ts` |
| 品牌、地址、邮箱、电话、社交链接 | `src/data/site.ts` 的 `clinic` |
| 医师姓名、身份、经历、专业方向与照片 | `src/data/site.ts` 的 `doctor` |
| 三张证书的标题、颁发机构、年份与图片 | `src/data/site.ts` 的 `certificates` |
| 图片文件名 | `src/data/site.ts` 的 `images` |
| 颜色、版式、响应式规则 | `src/styles/global.css` |
| 页首与页脚文字品牌标记 | `src/components/Header.astro`、`Footer.astro`；图标样式在 `global.css` |

图片均放在 `public/images/`。把真实诊所照片放入此目录，再更改 `images.hero`、`images.about`、`images.entrancePlaceholder` 的文件名。更换医师正式照片时，设置 `doctor.image` 文件名，并填入真实、已确认的资料。证书图片和数据在 `certificates` 数组中一一对应。替换概念图片后，请同步修改三语言的图片说明，避免把真实照片误标为概念图，或把概念图误标为实景。Logo 目前是 CSS 文字标记；取得正式 Logo 后可在 Header 与 Footer 的 `.brand-mark` 位置替换。`public/favicon.svg` 也应更新。

Instagram 地址未提供，`clinic.instagram` 当前为 `null`，因此页面不显示可点击入口。提供真实 URL 后设置该字段即可。电话目前使用本地 `tel:224284056`；确认国际拨号格式后更新 `clinic.phoneHref`。

## SEO 与部署准备

默认构建不假设正式域名，因此**不输出 canonical 和 sitemap URL**。域名或 GitHub Pages 地址确认后，在构建环境设置：

```sh
SITE_URL=https://example.pl npm run build
```

以上是类 Unix shell 示例；PowerShell 可先运行 `$env:SITE_URL='https://example.pl'`，再运行 `npm.cmd run build`。此时构建会生成绝对 canonical、hreflang、`sitemap-index.xml` 和带 sitemap 地址的 `robots.txt`。未配置域名时，hreflang 使用站内相对路径。请用真实地址替换示例，不要把示例域名用于上线构建。

GitHub Pages 仓库子路径部署时，还需设置 `BASE_PATH=/repository-name`；所有站内链接及图片路径会随之加上该前缀。仓库内的 `.github/workflows/deploy.yml` 已按 [Astro 官方 GitHub Pages 指南](https://docs.astro.build/en/guides/deploy/github/) 配好：推送到 `main` 后构建并发布，默认使用 `https://<GitHub 用户名>.github.io/<仓库名>/`。首次发布前，在仓库 Settings → Pages 将 Source 设为 **GitHub Actions**。

以后绑定自定义域名时，在 GitHub 仓库 Variables 中设置 `SITE_URL=https://你的域名` 和 `BASE_PATH=/`，按 GitHub Pages 要求配置 DNS 与 `public/CNAME`，并在仓库 Settings → Pages 配置域名。仅添加 CNAME 文件不会自动完成 GitHub Pages 域名设置。

结构化数据的预留位置在 `src/layouts/BaseLayout.astro`。加入前请核实法定名称、营业时间、身份和其他字段。

## 上线前诊所需补充或确认

- 正式 Logo、诊所接待区与诊疗室照片、入口照片。
- 专业人员正式照片、姓名、身份、经历和专业方向；核对对外使用的头衔。
- 真实证书原件、名称、颁发机构及年份。
- Instagram 真实 URL，以及电话国际拨号前缀。
- 正式域名、法律主体信息、隐私政策及其他适用法律文本。
- 三语言文案的诊所最终审核，尤其是服务说明与医疗相关表述。

## 当前验证范围

项目支持静态构建、三语言页面与锚点导航；证书占位图可在原生对话框中放大，支持关闭、Escape 和焦点返回。图片在运行时不依赖第三方服务。最终上线仍需使用真实资料进行内容审核和域名配置。
