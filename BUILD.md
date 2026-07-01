# NanStar Note - 打包指南

## 网页版
直接用浏览器打开 `index.html`，或部署到 Cloudflare Pages。

## PWA 安装
Chrome/Edge 打开网页，地址栏会出现安装按钮，也可用底部横幅一键安装。

## Android APK
```bash
# 1. 安装依赖
npm install

# 2. 构建 + 编译 APK
npm run android:debug

# APK 输出: android/app/build/outputs/apk/debug/app-debug.apk

# 首次添加平台
npm run build && cap add android
```

## Windows EXE (Electron)
```bash
npm install
npm run electron:start    # 预览
npm run electron:build     # 打包为 .exe
```

## 开发
```bash
npm run serve    # 本地开发 http://localhost:3000
```
