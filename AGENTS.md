# AGENTS.md

本仓库是 **HarukiBot NEO 帮助文档** 站点，用 [VitePress](https://vitepress.dev/) 构建，内容全部为中文 Markdown。仓库里没有业务代码，文档描述的是 Haruki Cloud（Bot 指令）、Haruki Client、HarukiProxy 与 Haruki 工具箱的用法。

## 目录结构

- `docs/index.md`：首页（`layout: home`），hero 按钮链接到 Bot 帮助、两个更新日志页和 Haruki Client 部署文档。
- `docs/bot-help/`：Bot 指令帮助。侧边栏只为这个目录配置，顺序写在 `docs/.vitepress/config.mjs` 的 `themeConfig.sidebar['/bot-help/']`；新增页面时要同步加进去。
  - `new-features.md`：新功能速递，按日期（`## YYYY-MM-DD`）倒序追加。
  - `components/`：`ChatBox.vue`（页面内 `<script setup>` 里自行 import）、`CollapseBox.vue` 和 `ClassicCollapseBox.vue`（在主题里全局注册）。
- `docs/changelog/`：`cloud.md`（只记录到 v2.0.9，之后指向 Haruki Cloud 的 GitHub Releases）和 `client.md`。
- `docs/haruki-client/`：自建 Bot 的客户端部署文档；`user_written_tutorial.md` 是群友写的详细版。
- `docs/haruki-proxy/`：HarukiProxy PC（`index.md`，含更新记录）与 Android（`android.md`）抓包教程。
- `docs/toolbox-tutorial/`：工具箱相关教程（iOS 模块、QQ 官方 Bot 绑定、账号验证）。
- `docs/licence/`、`docs/privacy/`：使用条款与隐私条款。
- `docs/examples/`：VitePress 脚手架/组件示例页，不在任何导航里，但仍会被构建发布。
- `docs/assets/`：文档图片，页面里用相对路径引用（如 `../assets/haruki-proxy-pc/xxx.png`）。
- `docs/.vitepress/config.mjs`：站点配置（`lang: 'zh'`、`base: "/"`、本地搜索、侧边栏）。
- `docs/.vitepress/theme/`：在默认主题上扩展，`layout-bottom` 插槽放 `SidebarToggle`，`home-hero-before` 插槽放 `SponsorBanner`。

## 常用命令

包管理器是 Bun（锁文件 `bun.lock`，CI 用 Bun 1.3.14）。

```sh
bun install --frozen-lockfile   # 安装依赖（与 CI 相同）
bun run docs:dev                # 本地预览，vitepress dev docs
bun run docs:build              # 构建，产物在 docs/.vitepress/dist
bun run docs:preview            # 预览构建产物
```

仓库没有 lint 或测试；改完至少跑一次 `bun run docs:build`，死链会导致构建失败。

## CI 与发布

- `.github/workflows/docs.yml` 调用共享模板 `seiunx-dev/ci-templates/.github/workflows/pages.yml@v1`：对 `master` 的 push、PR 和手动触发都会执行 `bun install --frozen-lockfile` + `bun run docs:build`；只有 push 到 `master` 时才上传产物并部署到 GitHub Pages。
- `.github/dependabot.yml`：每周四 10:00（Asia/Shanghai）检查 `bun` 与 `github-actions` 依赖，提交前缀为 `[Chore] `。

## 约定

- 默认分支是 `master`。
- 提交标题使用 `[Docs] ...`、`[CI] ...`、`[Chore] ...` 这类前缀（历史上也有 `docs: ...` 形式）。
- 文档语言为中文，语气面向普通用户；VitePress 提示块用 `::: info` / `::: warning` 或 `> [!warning]` 两种写法均可，跟随所在页面已有写法。
- 部分 Markdown 文件是 CRLF 或混合换行（如 `docs/bot-help/` 下的 `account.md`、`misc.md`、`music.md`、`sk.md`），编辑时保留原有换行，不要整文件改换行符。

## 内容准确性

- Bot 指令名以 Haruki Cloud 的指令注册为准（`Team-Haruki/Haruki-Cloud` 的 `internal/pjsk/handler/*.go` 中各 handler 的 `Commands`）。指令按前缀匹配，文档里写的触发词必须是已注册的指令，否则用户发送后不会有回复。
- 客户端相关内容（配置项、日志、`/haruki_info` 回复格式）以 Haruki Client 当前发布版本为准；配置项说明见发布包内的 `configs.yaml`。
- HarukiProxy 下载链接指向 `dist.haruki.seiunx.com` 镜像，改版本号前先确认镜像上已有对应文件。
- 本仓库是公开仓库，不要写入内部服务器、内网地址、令牌或其他凭据。
