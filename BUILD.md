# NanStar Note - 打包指南

## 网页版 (PWA)
直接用浏览器打开 `index.html`，或部署到任意静态托管（Cloudflare Pages、Vercel 等）。
支持 PWA 安装：Chrome/Edge 地址栏右侧会出现安装按钮。

## Windows 桌面版 (EXE)
```bash
npm install
npm run electron:start    # 开发预览
npm run electron:build     # 打包为 .exe
```

## Android 移动版 (APK)
```bash
npm install
npm run cap:add:android    # 添加 Android 平台（首次）
npm run cap:sync           # 同步 web 文件到 Android
# 然后使用 Android Studio 打开 android/ 目录编译 APK
# 或命令行: cd android && ./gradlew assembleDebug
```

## 开发
```bash
npm run serve    # 启动本地开发服务器 (http://localhost:3000)
```
