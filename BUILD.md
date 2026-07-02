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

# 可选：手动指定 App 版本
$env:ANDROID_VERSION_CODE="12"
$env:ANDROID_VERSION_NAME="1.0.12"
npm run android:debug

# 首次添加平台
npm run build && cap add android
```

GitHub Actions 会在推送到 `main` 后自动构建 APK，并发布到：

```txt
https://github.com/ggbondgh/nanstar-note/releases/latest/download/nanstar-note.apk
https://github.com/ggbondgh/nanstar-note/releases/latest/download/update.json
```

App 内的 Android App 面板会读取 `update.json` 来检查更新。`android/app/nanstar-debug.keystore` 用于固定调试包签名，保证后续 APK 可以覆盖安装更新。

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
