# Repository Guidelines

## Project Structure & Module Organization

NanStar Note is a mostly static web app. Root files are the primary surface: `index.html` for markup, `script.js` for behavior, `styles.css` for UI, and `sw.js` for the PWA service worker. `assets/` contains shared static assets, including the vendored Yjs bundle. `functions/api/` contains Cloudflare Pages Functions: `notes.js` for D1-backed CRDT sync, `files.js` for R2 file transfer, and `assets.js` for DOC image assets. `tools/` holds build and release helpers. `electron.js` wraps desktop builds, `capacitor.config.json` points Android builds at `dist/`, and `android/` is the native project. Do not edit `dist/` directly; regenerate it.

## Build, Test, and Development Commands

- `npm ci`: install dependencies from `package-lock.json`.
- `node serve.js`: run the local static preview at `http://localhost:4327`.
- `npm run serve`: serve the repository with `npx serve .` for quick browser checks.
- `npm run build`: copy web assets into `dist/` for Capacitor.
- `npm run cap:sync`: rebuild web assets and sync the Android project.
- `npm run android:debug`: build a debug APK at `android/app/build/outputs/apk/debug/app-debug.apk`.
- `npm run electron:start`: launch the Electron wrapper locally.
- `npm run electron:build`: package the desktop app.

## Coding Style & Naming Conventions

Use plain JavaScript, HTML, and CSS; there is no framework or configured formatter. Match the existing style: two-space indentation, semicolons, `const`/`let`, early guard returns, and small helpers near related logic. Use kebab-case for tool filenames, lowercase route filenames in `functions/api/`, and descriptive CSS class names. Preserve UTF-8 text in `script.js`, especially localized strings in `i18n`.

## Testing Guidelines

No automated test runner is configured. Before a PR, run `npm run build` and manually exercise affected flows via `node serve.js`. For UI work, check desktop and mobile widths. For sync, file transfer, or DOC image changes, test the matching Pages Function path with D1/R2 bindings and `NOTE_SYNC_TOKEN`.

## Commit & Pull Request Guidelines

Recent history uses Conventional Commit prefixes such as `fix:`, `feat:`, and `style:`; keep subjects short and imperative, for example `fix: restore doc toolbar layout`. Pull requests should include a concise summary, manual test steps, screenshots for visible UI changes, and notes for Cloudflare binding, schema, or Android build impact.

## Security & Configuration Tips

Keep `NOTE_SYNC_TOKEN` in environment configuration or `.dev.vars`; never commit secrets. Binding names must match `wrangler.toml` and the README: `NANSTAR_NOTES_DB` and `NANSTAR_NOTE_FILES`. The app is single-owner, so avoid storing passwords, API keys, or customer secrets without encryption.
