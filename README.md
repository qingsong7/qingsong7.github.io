# qingsong7.github.io

这是我的个人主页仓库，现已迁移为基于 Jekyll 的 GitHub Pages 学术主页结构。

个人网页地址：[https://qingsong7.github.io/](https://qingsong7.github.io/)

## 主要内容位置

- 站点基础配置：`_config.yml`
- 首页内容：`_pages/about.md`
- 顶部导航：`_data/navigation.yml`
- 图片与图标：`images/`

## 日常更新

1. 编辑 `_pages/about.md` 更新个人简介、研究、教学和联系方式。
2. 如果需要补充邮箱、GitHub、Google Scholar、ORCID 等侧边栏信息，编辑 `_config.yml`。
3. 修改完成后提交并推送：

```bash
git add .
git commit -m "update homepage"
git push
```

## 本地预览

当前仓库使用 Jekyll。本机已经有 Ruby，但还缺 `bundler 2.3.24`，所以如果要本地预览，需要先安装对应依赖，再运行：

```bash
bash run_server.sh
```

如果只是发布到 GitHub Pages，也可以直接推送到 `main` 分支。

## 参考模板

当前页面结构参考并改造自：

- `tangjyan/zh-cn`
- `RayeRen/acad-homepage.github.io`
