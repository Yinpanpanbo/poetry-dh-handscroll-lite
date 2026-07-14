# GitHub Pages 部署说明

本项目是纯静态网站，不需要安装依赖或执行前端构建。仓库中的 GitHub Actions 工作流会自动收集正式网页所需文件并部署到 GitHub Pages。

## 首次部署

1. 在 GitHub 新建一个公开仓库，例如 `poetry-dh-handscroll`。
2. 将当前项目提交并推送到仓库的 `main` 分支。
3. 打开仓库的 **Settings → Pages**。
4. 在 **Build and deployment** 中将 Source 设为 **GitHub Actions**。
5. 打开 **Actions** 页面，等待 `Deploy static site to GitHub Pages` 工作流完成。
6. 工作流成功后，Pages 页面会显示正式网址，通常形如：

   `https://你的用户名.github.io/poetry-dh-handscroll/`

## 后续更新

修改网页后重新提交并推送到 `main`。工作流会自动发布新版本，不需要手工上传文件。

## 部署内容

工作流只发布：

- `index.html`（英文主入口）
- `zh.html`（中文入口）
- `style.css` 与 `style-en.css`
- `app.js` 与 `app-en.js`
- 原创 `autumn-mountain-scroll.svg` 与蓝铜矿 CC0 图片
- 主题评审 PDF

课件、原型、规划日志和本地截图不会进入正式网站，以减少下载体积。

## 提交前检查

- 直接打开 `index.html` 时页面正常。
- 图片和链接均使用相对路径。
- 长卷使用本项目原创 SVG，不加载旧《千里江山图》位图。
- 英文主入口与中文入口可以互相切换。
- 桌面端和移动端均能浏览六个停驻点。
- GitHub Actions 中没有红色失败状态。

## 常见问题

- **页面显示 404：**确认 Pages Source 已选择 GitHub Actions，并检查 Actions 是否成功。
- **图片不显示：**检查文件名大小写；GitHub Pages 区分大小写。
- **更新没有出现：**等待工作流完成后强制刷新浏览器。
- **仓库不是 `main` 分支：**修改 `.github/workflows/pages.yml` 中监听的分支名称。
