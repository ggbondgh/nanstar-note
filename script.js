const storageKeys = {
  notes: "nanstar-note-notes",
  activeNote: "nanstar-note-active",
  syncToken: "nanstar-note-sync-token",
  syncMeta: "nanstar-note-sync-meta",
  crdtUpdateId: "nanstar-note-crdt-update-id",
  crdtPendingUpdates: "nanstar-note-crdt-pending-updates",
  lastSyncAt: "nanstar-note-last-sync-at",
  autoSync: "nanstar-note-auto-sync",
  splitRatio: "nanstar-note-split-ratio",
  sidebarWidth: "nanstar-note-sidebar-width",
  sidebarCollapsed: "nanstar-note-sidebar-collapsed",
  folderSectionCollapsed: "nanstar-note-folder-section-collapsed",
  language: "nanstar-note-language"
};

const i18n = {
  zh: {
    workspaceTitle: "内容工作台",
    newNote: "新建笔记",
    titlePlaceholder: "写一个清晰的标题",
    folderPlaceholder: "文件夹，例如：WK / 客户现场",
    editorPlaceholder: "纯文本适合放路径、账号检查清单、命令备忘；Markdown 适合结构化文档。Ctrl+Z / Ctrl+Y 保持浏览器原生编辑习惯。",
    sync: "同步",
    installDesktop: "安装到桌面",
    import: "导入",
    exportCurrent: "导出当前",
    exportMenu: "导出",
    exportDialogTitle: "导出",
    exportCurrentTitle: "导出当前笔记",
    exportCurrentCopy: "下载当前打开的 TXT/MD 文件",
    exportFolderTitle: "导出文件夹",
    exportFolderCopy: "选择一个文件夹并下载 ZIP",
    exportAllTitle: "导出全部笔记",
    exportAllCopy: "按文件夹打包下载 ZIP",
    exportFolderConfirm: "导出",
    exportAllZip: "导出全部 ZIP",
    exportFolder: "导出文件夹",
    exportAllFolders: "导出全部 ZIP",
    exportEmpty: "没有可导出的笔记",
    exportDone: "已生成导出文件",
    folderNewNote: "在此新建笔记",
    moveTo: "移动到",
    noOtherFolders: "无其他文件夹",
    pinNote: "置顶",
    unpinNote: "取消置顶",
    favoriteNote: "星标",
    unfavoriteNote: "取消星标",
    folderCreated: "已创建文件夹「{name}」",
    folderRenamed: "已重命名为「{name}」",
    folderDeleted: "已删除文件夹「{name}」",
    inboxLockedRename: "默认文件夹不能重命名。",
    inboxLockedDelete: "默认文件夹不能删除。",
    share: "分享",
    delete: "删除",
    selectedCount: "已选 {count}",
    selectNote: "选择笔记",
    multiSelect: "多选",
    exitMultiSelect: "退出多选",
    selectAll: "全选",
    clearSelectionAction: "取消",
    confirmDeleteSelected: "确定要删除选中的 {count} 条笔记吗？",
    selectedDeleted: "已删除 {count} 条笔记",
    copyCurrent: "复制当前内容",
    backupAll: "备份全部 JSON",
    duplicate: "复制为新笔记",
    allNotes: "全部笔记",
    pinned: "置顶",
    favorite: "星标",
    recent: "最近编辑",
    files: "文件夹",
    outline: "目录",
    noteListTitle: "笔记列表",
    editorTitle: "编辑",
    previewTitle: "预览",
    editorTools: "编辑工具",
    moreActions: "更多操作与状态",
    backupAllJson: "导出全部 ZIP",
    noteCreated: "创建",
    noteUpdated: "更新",
    clearSearch: "清除搜索",
    clearAll: "全部",
    searchPlaceholder: "搜索标题、正文、文件夹",
    editorSearchPlaceholder: "查找当前笔记内容",
    searchCount: "{current} / {total}",
    searchNoMatch: "0 / 0",
    searchPrev: "上一个匹配",
    searchNext: "下一个匹配",
    searchClose: "关闭搜索",
    currentLine: "当前行",
    lines: "行",
    characters: "字",
    noSearchMatch: "未找到匹配项",
    markdownMode: "Markdown 结构化模式",
    txtMode: "TXT 纯文本模式",
    showPreview: "显示预览",
    hidePreview: "隐藏预览",
    undo: "撤回 Ctrl+Z",
    redo: "重做 Ctrl+Y",
    bold: "加粗",
    inlineCode: "行内代码",
    unorderedList: "无序列表",
    orderedList: "有序列表",
    taskList: "任务清单",
    quote: "引用",
    codeBlock: "代码块",
    insertSnippets: "插入片段",
    insertPathSnippet: "路径片段",
    insertCommandSnippet: "命令片段",
    insertChecklistSnippet: "检查清单",
    focusPreview: "专注预览",
    exitFocus: "退出专注",
    collapseSidebar: "收起侧栏",
    expandSidebar: "展开侧栏",
    collapseSection: "收起",
    expandSection: "展开",
    expanded: "展开",
    collapsed: "折叠",
    noNotes: "没有匹配的笔记，试试其他关键词或",
    txtOutlineEmpty: "TXT 模式不显示目录",
    noHeadings: "暂无标题",
    cloudAuto: "云同步 / 自动",
    cloudReady: "云同步已配置",
    localMode: "本地模式",
    local: "本地",
    cloudUnsynced: "云端未同步",
    synced: "已同步",
    syncChecking: "正在检查云端...",
    syncPushing: "正在同步到云端...",
    syncPulling: "正在拉取云端...",
    syncFailed: "同步失败",
    syncRetry: "待重试",
    syncPending: "本地已保存，等待同步",
    syncPendingShort: "待同步",
    saving: "保存中...",
    savedLocal: "已保存本地",
    syncRefreshing: "正在从云端刷新并覆盖本地...",
    syncRefreshedAt: "已从云端刷新 {time}",
    syncPushedAt: "已同步到云端 {time}",
    syncPulledAt: "已从云端更新 {time}",
    syncCheckedAt: "已检查云端 {time}",
    syncBlockedDirty: "云端有更新，本地正在编辑，已保留本地",
    syncNoChange: "云端暂无更新",
    transferAssistantTitle: "文件传输助手",
    transferAssistantBody: "",
    transferAssistantExcerpt: "跨设备临时传文件",
    transferPanelTitle: "文件传输",
    transferPanelMeta: "最多 {count} 个文件，单文件 {fileSize}，总量 {totalSize}。",
    transferDropTitle: "拖放文件到这里，或点击上传。",
    transferDropHint: "文件会保存到 Cloudflare R2，不占用笔记正文空间。",
    transferNoToken: "配置同步 Token 后可使用文件传输。",
    transferEmpty: "暂无文件。",
    transferLoading: "正在读取文件列表...",
    transferUpload: "上传文件",
    transferRefresh: "刷新",
    transferDownload: "下载",
    transferCopyImage: "复制图片",
    transferDelete: "删除",
    transferUploading: "正在上传...",
    transferUploaded: "文件已上传",
    transferDeleted: "文件已删除",
    transferTooLarge: "文件太大，单文件上限 {size}。",
    transferCountLimit: "最多保存 {count} 个文件。",
    transferTotalLimit: "文件总量不能超过 {size}。",
    transferMissingBinding: "Cloudflare R2 绑定 NANSTAR_NOTE_FILES 还未生效，请重新部署。",
    transferFailed: "文件传输失败",
    transferCopiedImage: "图片已复制",
    transferBadToken: "Token 不正确。",
    transferApiUnavailable: "文件接口不可用，部署到 Cloudflare 后才能使用。",
    transferClipboardDenied: "当前浏览器不允许复制图片。",
    imageTooLarge: "图片太大，已跳过。建议单张图片小于 900KB。",
    imagePasteFailed: "图片粘贴失败",
    imagePasted: "已插入图片",
    inputComposing: "正在确认中文输入，确认后再同步。",
    codeCopy: "复制",
    markdownEmpty: "开始写 Markdown 后，这里会实时预览。",
    syncSettings: "同步设置",
    syncCopy: "使用 Cloudflare Pages Functions + D1 保存云端笔记。客户电脑建议使用无痕窗口，离开时清除 Token。",
    syncToken: "同步 Token",
    autoSync: "自动同步：打开页面和停留时检查云端；离开笔记或 Ctrl+S 时同步到云端",
    pushCloud: "立即同步",
    pullCloud: "检查云端更新",
    clearToken: "清除 Token",
    syncLocalReady: "未连接云同步，本地编辑可正常使用。",
    tokenCleared: "已清除本地 Token。",
    editorSearchLabel: "查找",
    modeTxt: "TXT",
    modeMd: "MD",
    items: "条",
    inbox: "默认文件夹",
    newFolder: "新建文件夹",
    renameFolder: "重命名文件夹",
    deleteFolder: "删除",
    folderNamePrompt: "输入文件夹名称",
    folderRenamePrompt: "输入新名称",
    confirmDeleteFolder: "确定要删除文件夹「{name}」吗？其中的笔记将移回默认文件夹。",
    folderExists: "文件夹已存在",
    outlineTitle: "目录",
    outlineEmpty: "暂无标题",
    newNoteDialogTitle: "新建笔记",
    newNoteFolderLabel: "文件夹",
    create: "创建",
    searchPlaceholderShort: "搜索笔记...",
    backup: "备份全部 JSON",
    allNotesTab: "全部",
    favoritesTab: "★ 收藏",
  },
  en: {
    workspaceTitle: "Content Desk",
    newNote: "New Note",
    titlePlaceholder: "Write a clear title",
    folderPlaceholder: "Folder, e.g. WK / Client Site",
    editorPlaceholder: "Plain text works well for paths, checklists, and command notes; Markdown is better for structured docs. Ctrl+Z / Ctrl+Y keep the browser's native editing flow.",
    sync: "Sync",
    installDesktop: "Install App",
    import: "Import",
    exportCurrent: "Export Current",
    exportMenu: "Export",
    exportDialogTitle: "Export",
    exportCurrentTitle: "Export Current Note",
    exportCurrentCopy: "Download the current TXT/MD file",
    exportFolderTitle: "Export Folder",
    exportFolderCopy: "Choose a folder and download a ZIP",
    exportAllTitle: "Export All Notes",
    exportAllCopy: "Download a folder-based ZIP",
    exportFolderConfirm: "Export",
    exportAllZip: "Export All ZIP",
    exportFolder: "Export Folder",
    exportAllFolders: "Export All ZIP",
    exportEmpty: "No notes to export",
    exportDone: "Export file created",
    folderNewNote: "New note here",
    moveTo: "Move to",
    noOtherFolders: "No other folders",
    pinNote: "Pin",
    unpinNote: "Unpin",
    favoriteNote: "Favorite",
    unfavoriteNote: "Remove Favorite",
    folderCreated: "Folder created: {name}",
    folderRenamed: "Renamed to: {name}",
    folderDeleted: "Folder deleted: {name}",
    inboxLockedRename: "Default Folder cannot be renamed.",
    inboxLockedDelete: "Default Folder cannot be deleted.",
    share: "Share",
    delete: "Delete",
    selectedCount: "{count} selected",
    selectNote: "Select note",
    multiSelect: "Select",
    exitMultiSelect: "Exit Select",
    selectAll: "Select All",
    clearSelectionAction: "Clear",
    confirmDeleteSelected: "Delete {count} selected notes?",
    selectedDeleted: "{count} notes deleted",
    copyCurrent: "Copy Current",
    backupAll: "Backup JSON",
    duplicate: "Duplicate Note",
    allNotes: "All Notes",
    pinned: "Pinned",
    favorite: "Favorites",
    recent: "Recent",
    files: "Folders",
    outline: "Outline",
    noteListTitle: "Notes",
    editorTitle: "Editor",
    previewTitle: "Preview",
    editorTools: "Editor Tools",
    moreActions: "More Actions & Status",
    backupAllJson: "Export All ZIP",
    noteCreated: "Created",
    noteUpdated: "Updated",
    clearSearch: "Clear Search",
    clearAll: "All",
    searchPlaceholder: "Search title, body, folder",
    editorSearchPlaceholder: "Find in current note",
    searchCount: "{current} / {total}",
    searchNoMatch: "0 / 0",
    searchPrev: "Previous match",
    searchNext: "Next match",
    searchClose: "Close search",
    currentLine: "Current line",
    lines: "lines",
    characters: "chars",
    noSearchMatch: "No matches",
    markdownMode: "Markdown mode",
    txtMode: "Plain text mode",
    showPreview: "Show preview",
    hidePreview: "Hide preview",
    undo: "Undo Ctrl+Z",
    redo: "Redo Ctrl+Y",
    bold: "Bold",
    inlineCode: "Inline code",
    unorderedList: "Bulleted list",
    orderedList: "Numbered list",
    taskList: "Task list",
    quote: "Quote",
    codeBlock: "Code block",
    insertSnippets: "Insert snippets",
    insertPathSnippet: "Path snippet",
    insertCommandSnippet: "Command snippet",
    insertChecklistSnippet: "Checklist",
    focusPreview: "Focus preview",
    exitFocus: "Exit focus",
    collapseSidebar: "Collapse sidebar",
    expandSidebar: "Expand sidebar",
    collapseSection: "Collapse",
    expandSection: "Expand",
    expanded: "Open",
    collapsed: "Collapsed",
    noNotes: "No matching notes",
    txtOutlineEmpty: "No outline in TXT mode",
    noHeadings: "No headings",
    cloudAuto: "Cloud sync / auto",
    cloudReady: "Cloud sync ready",
    localMode: "Local mode",
    local: "Local",
    cloudUnsynced: "Cloud not synced",
    synced: "Synced",
    syncChecking: "Checking cloud...",
    syncPushing: "Syncing to cloud...",
    syncPulling: "Pulling cloud updates...",
    syncFailed: "Sync failed",
    syncRetry: "Retry pending",
    syncPending: "Local saved, waiting to sync",
    syncPendingShort: "Pending sync",
    saving: "Saving...",
    savedLocal: "Saved locally",
    syncRefreshing: "Refreshing from cloud and overwriting local...",
    syncRefreshedAt: "Refreshed from cloud {time}",
    syncPushedAt: "Synced to cloud {time}",
    syncPulledAt: "Updated from cloud {time}",
    syncCheckedAt: "Checked cloud {time}",
    syncBlockedDirty: "Cloud changed, local edit kept",
    syncNoChange: "No cloud changes",
    transferAssistantTitle: "File Transfer",
    transferAssistantBody: "",
    transferAssistantExcerpt: "Temporary cross-device files",
    transferPanelTitle: "File Transfer",
    transferPanelMeta: "Up to {count} files, {fileSize} each, {totalSize} total.",
    transferDropTitle: "Drop files here, or click upload.",
    transferDropHint: "Files are stored in Cloudflare R2, not inside note content.",
    transferNoToken: "Configure the sync token to use file transfer.",
    transferEmpty: "No files yet.",
    transferLoading: "Loading files...",
    transferUpload: "Upload File",
    transferRefresh: "Refresh",
    transferDownload: "Download",
    transferCopyImage: "Copy Image",
    transferDelete: "Delete",
    transferUploading: "Uploading...",
    transferUploaded: "File uploaded",
    transferDeleted: "File deleted",
    transferTooLarge: "File is too large. Limit: {size}.",
    transferCountLimit: "Keep at most {count} files.",
    transferTotalLimit: "Total files cannot exceed {size}.",
    transferMissingBinding: "Cloudflare R2 binding NANSTAR_NOTE_FILES is not active. Redeploy the Pages project.",
    transferFailed: "File transfer failed",
    transferCopiedImage: "Image copied",
    transferBadToken: "Token is incorrect.",
    transferApiUnavailable: "File API is unavailable. It works after Cloudflare deployment.",
    transferClipboardDenied: "This browser does not allow copying images.",
    imageTooLarge: "Image is too large and was skipped. Keep each image under 900KB.",
    imagePasteFailed: "Failed to paste image",
    imagePasted: "Image inserted",
    inputComposing: "Finish IME input before syncing.",
    codeCopy: "Copy",
    markdownEmpty: "Start writing Markdown to preview it here.",
    syncSettings: "Sync Settings",
    syncCopy: "Use Cloudflare Pages Functions + D1 to store notes in the cloud. On client computers, use an incognito window and clear the token when leaving.",
    syncToken: "Sync Token",
    autoSync: "Auto check on open and while active; sync on note switch or Ctrl+S",
    pushCloud: "Sync Now",
    pullCloud: "Check Cloud Updates",
    clearToken: "Clear Token",
    syncLocalReady: "Cloud sync is not connected. Local editing still works.",
    tokenCleared: "Local token cleared.",
    editorSearchLabel: "Find",
    modeTxt: "TXT",
    modeMd: "MD",
    items: "items",
    inbox: "Default Folder",
    newFolder: "New Folder",
    renameFolder: "Rename Folder",
    deleteFolder: "Delete",
    folderNamePrompt: "Enter folder name",
    folderRenamePrompt: "Enter new name",
    confirmDeleteFolder: 'Delete folder "{name}"? Notes will move to Default Folder.',
    folderExists: "Folder already exists",
    outlineTitle: "Outline",
    outlineEmpty: "No headings",
    newNoteDialogTitle: "New Note",
    newNoteFolderLabel: "Folder",
    create: "Create",
    searchPlaceholderShort: "Search notes...",
    backup: "Backup JSON",
    allNotesTab: "All",
    favoritesTab: "★ Favorites",
  }
};

const templates = {
  txt: {
    title: "未命名 TXT",
    mode: "txt",
    folder: "默认文件夹",
    body: ""
  },
  md: {
    title: "未命名 Markdown",
    mode: "md",
    folder: "Docs",
    body: `# 标题

这里写正文。

## 小节

- 要点一
- 要点二
`
  },
  command: {
    title: "命令速查",
    mode: "md",
    folder: "技术速查",
    body: `# 命令速查

## 场景

这里写这个命令什么时候用。

## 命令

\`\`\`bash

\`\`\`

## 注意

- 执行目录：
- 前置条件：
- 退出现场前检查：
`
  },
  client: {
    title: "客户现场记录",
    mode: "md",
    folder: "客户现场",
    body: `# 客户现场记录

## 现场目标

- 

## 环境信息

| 项目 | 内容 |
| --- | --- |
| 客户 |  |
| 设备 |  |
| 路径 |  |

## 操作步骤

1. 
2. 
3. 

## 退出前检查

- [ ] 退出微信、钉钉、飞书、OneDrive 等账号
- [ ] 清理下载和临时文件
- [ ] 删除浏览器访问痕迹或关闭无痕窗口
`
  },
  debug: {
    title: "问题排查记录",
    mode: "md",
    folder: "问题排查",
    body: `# 问题排查记录

## 现象

描述问题现象。

## 结论

> 暂无。

## 排查过程

1. 

## 命令与日志

\`\`\`bash

\`\`\`

## 后续

- [ ] 
`
  },
  daily: {
    title: "日常记录",
    mode: "md",
    folder: "Daily",
    body: `# 日常记录

## 今日处理

- 

## 重要信息

- 

## 待跟进

- [ ] 
`
  }
};

templates.blank = templates.txt;

const defaultNotes = [
  {
    id: createId(),
    title: "wk_note 速查",
    mode: "md",
    folder: "技术速查",
    body: `# wk_note 速查

## 拉取代码

在路径下 cmd 执行该命令：

\`\`\`bash
git clone --recurse-submodules http://192.168.14.105:10086/technology_r_d_center/project_center/hisilicon/hi3321/project/WK-TG0732-1.git
\`\`\`

在 \`WK-TG0732-1\` 路径下执行：

\`\`\`bash
python3 git_auto_pull.py
python3 wk_build_menu.py
\`\`\`

## 烧录包路径

本地路径：

\`\`\`txt
\\WK-TG0732-1\\hisilicon_sdk\\tools\\pkg\\fwpkg\\brandy
\`\`\`

服务器绝对路径：

\`\`\`txt
Y:\\20260116\\WK-TG0732-1\\hisilicon_sdk\\tools\\pkg\\fwpkg\\brandy
Z:\\20260116\\WK-TG0732-1\\hisilicon_sdk\\output\\brandy\\acore\\brandy-ssb-native-js
Z:\\lyq\\20260508\\WK-TG0732-1\\hisilicon_sdk\\tools\\pkg\\fwpkg\\brandy
\`\`\`

## 编译报错

1. 清理文件系统：删除目录 \`WK-TG0732-1/hisilicon_sdk/build/config/target_config/brandy/mk_fs_image/fs\`
2. 清理编译缓存：删除目录 \`WK-TG0732-1/hisilicon_sdk/output\`

## API Key 配置

建议不要把真实 key 放进临时登录的笔记平台。这里只保留配置文件路径：

\`\`\`bash
vim ~/.codex/config.toml
vim ~/.codex/auth.json
\`\`\`
`,
    pinned: true,
    favorite: true,
    createdAt: Date.now() - 1000 * 60 * 60 * 24,
    updatedAt: Date.now() - 1000 * 60 * 15
  },
  {
    id: createId(),
    title: "客户电脑离场检查",
    mode: "txt",
    folder: "客户现场",
    body: `退出时记得

[ ] 退出微软账号、OneDrive、微信、钉钉、飞书
[ ] 删除微信聊天记录、钉钉、OneDrive 挂载目录等临时痕迹
[ ] 卸载临时软件
[ ] 资料转移与删除，回收站删除
[ ] 关闭无痕窗口

推荐方式

客户电脑只使用浏览器无痕窗口访问 NanStar Note，不安装客户端，不同步本地文件夹。
`,
    pinned: false,
    favorite: false,
    createdAt: Date.now() - 1000 * 60 * 60 * 8,
    updatedAt: Date.now() - 1000 * 60 * 60
  }
];

const state = {
  notes: [],
  activeId: null,
  selectedFolder: "",
  selectionMode: false,
  selectedNoteIds: new Set(),
  query: "",
  viewFilter: localStorage.getItem("nanstar-note-view") || "all",
  language: localStorage.getItem(storageKeys.language) === "en" ? "en" : "zh",
  previewFocus: false,
  editorSearch: {
    open: false,
    query: "",
    matches: [],
    activeIndex: -1
  },
  currentLine: 1,
  sidebarCollapsed: localStorage.getItem(storageKeys.sidebarCollapsed) === "1",
  folderSectionCollapsed: localStorage.getItem(storageKeys.folderSectionCollapsed) !== "0",
  localStateSource: localStorage.getItem(storageKeys.notes) ? "stored" : "default",
  saveTimer: null,
  savePendingNoteId: null,
  autoSyncTimer: null,
  syncStartupTimer: null,
  syncPollTimer: null,
  syncInFlight: false,
  syncQueue: [],
  syncAction: "",
  crdtDoc: null,
  crdtNotes: null,
  crdtFolders: null,
  crdtApplying: false,
  crdtSeedIsDefault: false,
  crdtPendingUpdates: [],
  noteInputComposing: false,
  transferFiles: [],
  transferUploads: [],
  transferLoading: false,
  transferError: "",
  transferLastFetchAt: 0,
  transferLimits: null,
  lastCloudPullAt: 0,
  dirtyNoteIds: new Set(),
  contextMenuFolder: null,
  contextMenuNoteId: null
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));
const DEFAULT_SPLIT_RATIO = 52;
const DEFAULT_SIDEBAR_WIDTH = 280;
const SYNC_POLL_INTERVAL = 15000;
const SYNC_PUSH_DELAY = 1200;
const TRANSFER_NOTE_ID = "nanstar-transfer-assistant";
const FOLDER_REGISTRY_NOTE_ID = "nanstar-folder-registry";
const INBOX_FOLDER = "默认文件夹";
const DEFAULT_FOLDER_ALIASES = new Set([
  INBOX_FOLDER,
  "收件箱",
  "Inbox",
  "inbox",
  "Default",
  "default",
  "Default Folder",
  "default folder",
  "默认",
  "未分类",
  "Uncategorized",
  "uncategorized",
  "Import",
  "import"
]);
const MAX_PASTE_IMAGE_BYTES = 900 * 1024;
const MAX_TRANSFER_IMAGES = 4;
const TRANSFER_MAX_FILES = 5;
const TRANSFER_MAX_FILE_BYTES = 20 * 1024 * 1024;
const TRANSFER_MAX_TOTAL_BYTES = 50 * 1024 * 1024;

function folderManagementEnabled() {
  return Boolean(getSyncToken());
}

function canonicalFolderName(folder) {
  const value = String(folder || "").trim();
  if (!value || DEFAULT_FOLDER_ALIASES.has(value)) return INBOX_FOLDER;
  return value;
}

function canonicalSelectedFolder(folder) {
  const value = String(folder || "").trim();
  return value ? canonicalFolderName(value) : "";
}

function normalizedStoredFolderNames(names) {
  const seen = new Set();
  const folders = [];
  (names || []).forEach((name) => {
    const folder = canonicalFolderName(name);
    if (!folder || folder === INBOX_FOLDER || seen.has(folder)) return;
    seen.add(folder);
    folders.push(folder);
  });
  return folders.sort((a, b) => a.localeCompare(b, "zh-CN"));
}

function normalizeFolderName(folder) {
  const value = canonicalFolderName(folder);
  return folderManagementEnabled() ? value : INBOX_FOLDER;
}

const elements = {
  appShell: $(".app-shell"),
  sidebar: $(".sidebar"),
  sidebarResizer: $("#sidebarResizer"),
  cloudStatus: $("#cloudStatus"),
  sidebarToggleButton: $("#sidebarToggleButton"),
  sidebarQuickNewButton: $("#sidebarQuickNewButton"),
  newNoteButton: $("#newNoteButton"),
  syncRefreshButton: $("#syncRefreshButton"),
  topSyncButton: $("#topSyncButton"),
  topbarMenu: $(".topbar-menu"),
  searchInput: $("#searchInput"),
  searchClearButton: $("#searchClearButton"),
  languageToggleButton: $("#languageToggleButton"),
  folderSection: $("#folderSection"),
  folderSectionSummary: $("#folderSectionSummary"),
  folderSectionCount: $("#folderSectionCount"),
  folderList: $("#folderList"),
  folderAddButton: $("#folderAddButton"),
  folderContextMenu: $("#folderContextMenu"),
  noteContextMenu: $("#noteContextMenu"),
  folderDatalist: $("#folderDatalist"),
  filterTabs: $$(".filter-tab"),
  newNoteDialog: $("#newNoteDialog"),
  newNoteFolderSelect: $("#newNoteFolderSelect"),
  newNoteConfirmBtn: $("#newNoteConfirmBtn"),
  floatingOutline: $("#floatingOutline"),
  outlinePanel: $("#outlinePanel"),
  outlineDots: $("#outlineDots"),
  outlinePanelBody: $("#outlinePanelBody"),
  noteList: $("#noteList"),
  listStatus: $("#listStatus"),
  multiSelectButton: $("#multiSelectButton"),
  bulkActionBar: $("#bulkActionBar"),
  bulkSelectionCount: $("#bulkSelectionCount"),
  bulkSelectAllButton: $("#bulkSelectAllButton"),
  bulkDeleteButton: $("#bulkDeleteButton"),
  bulkClearButton: $("#bulkClearButton"),
  editorCard: $("#editorCard"),
  editorSection: $("#editorSection"),
  editorSectionState: $("#editorSectionState"),
  editorTitle: $("#editorTitle"),
  previewTitle: $("#previewTitle"),
  titleInput: $("#titleInput"),
  modeButtons: $$(".mode-button"),
  folderInput: $("#folderInput"),
  editorFindBar: $("#editorFindBar"),
  editorSearchInput: $("#editorSearchInput"),
  editorSearchCount: $("#editorSearchCount"),
  editorSearchPrevButton: $("#editorSearchPrevButton"),
  editorSearchNextButton: $("#editorSearchNextButton"),
  editorSearchCloseButton: $("#editorSearchCloseButton"),
  toolbar: $(".toolbar"),
  togglePreviewButton: $("#togglePreviewButton"),
  splitEditor: $("#splitEditor"),
  splitter: $("#splitter"),
  lineNumbers: $("#lineNumbers"),
  lineNumbersTrack: $("#lineNumbersTrack"),
  editorLineHighlight: $("#editorLineHighlight"),
  textShell: $("#textShell"),
  bodyInput: $("#bodyInput"),
  previewPane: $("#previewPane"),
  previewContent: $("#previewContent"),
  previewFocusButton: $("#previewFocusButton"),
  modeHint: $("#modeHint"),
  transferPanel: $("#transferPanel"),
  transferPanelTitle: $("#transferPanelTitle"),
  transferPanelMeta: $("#transferPanelMeta"),
  transferDropzone: $("#transferDropzone"),
  transferDropTitle: $("#transferDropTitle"),
  transferDropHint: $("#transferDropHint"),
  transferRefreshButton: $("#transferRefreshButton"),
  transferUploadButton: $("#transferUploadButton"),
  transferFileInput: $("#transferFileInput"),
  transferFileList: $("#transferFileList"),
  saveStatus: $("#saveStatus"),
  syncState: $("#syncState"),
  wordCount: $("#wordCount"),
  createdAt: $("#createdAt"),
  updatedAt: $("#updatedAt"),
  importButton: $("#importButton"),
  exportButton: $("#exportButton"),
  exportDialog: $("#exportDialog"),
  exportCurrentButton: $("#exportCurrentButton"),
  exportFolderSelect: $("#exportFolderSelect"),
  exportFolderButton: $("#exportFolderButton"),
  exportAllButton: $("#exportAllButton"),
  shareButton: $("#shareButton"),
  deleteButton: $("#deleteButton"),
  copyMarkdownButton: $("#copyMarkdownButton"),
  duplicateButton: $("#duplicateButton"),
  importFileInput: $("#importFileInput"),
  syncDialog: $("#syncDialog"),
  syncTokenInput: $("#syncTokenInput"),
  autoSyncToggle: $("#autoSyncToggle"),
  pushCloudButton: $("#pushCloudButton"),
  pullCloudButton: $("#pullCloudButton"),
  logoutCloudButton: $("#logoutCloudButton"),
  syncMessage: $("#syncMessage"),
  toast: $("#toast")
};

init();

function init() {
  const startedWithDefaultNotes = state.localStateSource === "default";
  state.notes = loadNotes();
  state.activeId = localStorage.getItem(storageKeys.activeNote) || state.notes[0]?.id || null;
  restoreDirtyNotes();
  elements.syncTokenInput.value = localStorage.getItem(storageKeys.syncToken) || "";
  elements.autoSyncToggle.checked = localStorage.getItem(storageKeys.autoSync) !== "0";
  migrateFolderState();
  saveNotes();
  initCrdtFromState({ clearPending: startedWithDefaultNotes });
  applyLanguage(state.language, true);
  applySidebarWidth(readSidebarWidth());
  applySplitRatio(readSplitRatio());
  applySidebarCollapsed(state.sidebarCollapsed);
  applyFolderSectionCollapsed(state.folderSectionCollapsed);
  applyFolderSectionVisibility();

  decodeSharedNote();
  bindEvents();
  ensureActiveNote();
  renderAll();
  setSaveStatus("已保存本地");
  startCloudSync();
}

function bindEvents() {
  elements.newNoteButton.addEventListener("click", () => openNewNoteDialog());
  elements.sidebarToggleButton.addEventListener("click", toggleSidebar);
  elements.sidebarQuickNewButton?.addEventListener("click", () => openNewNoteDialog());
  elements.languageToggleButton?.addEventListener("click", toggleLanguage);
  elements.folderSectionSummary?.addEventListener("click", (event) => {
    if (event.target.closest("button")) return;
    event.preventDefault();
    toggleFolderSection();
  });
  let searchComposing = false;
  const updateSearchClearButton = () => {
    if (elements.searchClearButton) elements.searchClearButton.hidden = !(elements.searchInput.value || searchComposing);
  };
  const updateSearchQuery = () => {
    state.query = elements.searchInput.value.trim().toLowerCase();
    updateSearchClearButton();
    renderLists();
  };
  elements.searchInput.addEventListener("input", updateSearchQuery);
  elements.searchInput.addEventListener("compositionstart", () => {
    searchComposing = true;
    updateSearchClearButton();
  });
  elements.searchInput.addEventListener("compositionupdate", (event) => {
    searchComposing = Boolean(event.data || elements.searchInput.value);
    updateSearchClearButton();
  });
  elements.searchInput.addEventListener("compositionend", () => {
    searchComposing = false;
    updateSearchQuery();
  });
  updateSearchClearButton();
  if (elements.searchClearButton) {
    elements.searchClearButton.addEventListener("mousedown", (event) => {
      event.preventDefault();
    });
    elements.searchClearButton.addEventListener("click", () => {
      searchComposing = false;
      elements.searchInput.value = "";
      state.query = "";
      elements.searchClearButton.hidden = true;
      renderLists();
      elements.searchInput.focus();
    });
  }

  elements.filterTabs.forEach((button) => {
    button.addEventListener("click", () => {
      state.viewFilter = button.dataset.filter || "all";
      state.selectedFolder = "";
      state.selectionMode = false;
      state.selectedNoteIds.clear();
      localStorage.setItem("nanstar-note-view", state.viewFilter);
      renderFilterState();
      renderLists();
    });
  });

  $$(".quick-chip").forEach((button) => {
    button.addEventListener("click", () => {
      $$(".quick-chip").forEach((item) => item.classList.toggle("active", item === button));
      createNote(button.dataset.template || "txt");
    });
  });

  if (elements.folderAddButton) elements.folderAddButton.addEventListener("click", createFolder);
  if (elements.multiSelectButton) elements.multiSelectButton.addEventListener("click", toggleSelectionMode);
  if (elements.bulkSelectAllButton) elements.bulkSelectAllButton.addEventListener("click", selectAllVisibleNotes);
  if (elements.bulkDeleteButton) elements.bulkDeleteButton.addEventListener("click", deleteSelectedNotes);
  if (elements.bulkClearButton) elements.bulkClearButton.addEventListener("click", exitSelectionMode);

  // Folder context menu
  if (elements.folderContextMenu) {
    elements.folderContextMenu.querySelectorAll(".context-menu-item").forEach(item => {
      item.addEventListener("click", () => {
        const action = item.dataset.action;
        const folder = state.contextMenuFolder;
        hideFolderContextMenu();
        if (!folder) return;
        if (action === "rename") renameFolder(folder);
        else if (action === "delete") deleteFolder(folder);
        else if (action === "new-note") createNoteInFolder(folder);
      });
    });
  }
  document.addEventListener("click", (event) => {
    if (!event.target.closest("#folderContextMenu")) hideFolderContextMenu();
    if (!event.target.closest("#noteContextMenu")) hideNoteContextMenu();
    if (!event.target.closest(".topbar-menu")) elements.topbarMenu?.removeAttribute("open");
    if (!event.target.closest(".toolbar-menu")) document.querySelectorAll(".toolbar-menu[open]").forEach((menu) => menu.removeAttribute("open"));
  });
  window.addEventListener("scroll", () => { hideFolderContextMenu(); hideNoteContextMenu(); }, { capture: true });

  // Note context menu
  if (elements.noteContextMenu) {
    elements.noteContextMenu.querySelectorAll(".context-menu-item").forEach(item => {
      item.addEventListener("click", () => {
        const action = item.dataset.action;
        const noteId = state.contextMenuNoteId;
        hideNoteContextMenu();
        if (!noteId) return;
        const note = state.notes.find(n => n.id === noteId && !isDeletedNote(n));
        if (!note) return;
        if (action === "pin") { note.pinned = !note.pinned; note.updatedAt = Date.now(); persistAndRender(note.pinned ? "已置顶" : "已取消置顶", { dirtyNoteId: note.id }); }
        else if (action === "favorite") { note.favorite = !note.favorite; note.updatedAt = Date.now(); persistAndRender(note.favorite ? "已加星标" : "已取消星标", { dirtyNoteId: note.id }); }
        else if (action === "duplicate") duplicateNoteById(noteId);
        else if (action === "export") exportNoteById(noteId);
        else if (action === "delete") deleteNoteById(noteId);
      });
    });
  }

  document.querySelectorAll(".nav-section").forEach((section) => {
    section.open = false;
  });

  bindNoteInput(elements.titleInput);
  bindNoteInput(elements.folderInput);
  bindNoteInput(elements.bodyInput);
  elements.bodyInput.addEventListener("paste", handleEditorPaste);
  elements.bodyInput.addEventListener("scroll", syncLineNumberScroll);
  elements.bodyInput.addEventListener("keyup", handleEditorCursorChange);
  elements.bodyInput.addEventListener("click", handleEditorCursorChange);
  elements.bodyInput.addEventListener("select", handleEditorCursorChange);
  document.addEventListener("selectionchange", () => {
    if (document.activeElement === elements.bodyInput) handleEditorCursorChange();
  });
  elements.editorSection.addEventListener("toggle", handleEditorSectionToggle);
  elements.editorSearchInput.addEventListener("input", handleEditorSearchInput);
  elements.editorSearchInput.addEventListener("keydown", handleEditorSearchKeydown);
  elements.editorSearchPrevButton.addEventListener("click", () => moveEditorSearch(-1));
  elements.editorSearchNextButton.addEventListener("click", () => moveEditorSearch(1));
  elements.editorSearchCloseButton.addEventListener("click", closeEditorSearch);

  if (elements.pinButton) elements.pinButton.addEventListener("click", togglePinned);
  if (elements.favoriteButton) elements.favoriteButton.addEventListener("click", toggleFavorite);

  elements.modeButtons.forEach((button) => {
    button.addEventListener("click", () => changeMode(button.dataset.mode));
  });

  elements.togglePreviewButton.addEventListener("click", togglePreview);
  elements.previewFocusButton.addEventListener("click", togglePreviewFocus);
  elements.toolbar.addEventListener("mousedown", (event) => {
    if (event.target.closest("button")) event.preventDefault();
  });
  elements.toolbar.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (button) {
      applyToolbarAction(button);
      button.closest(".toolbar-menu")?.removeAttribute("open");
    }
  });
  bindSplitter();
  bindSidebarResizer();

  // New note dialog
  if (elements.newNoteConfirmBtn) {
    elements.newNoteConfirmBtn.addEventListener("click", () => {
      const folder = elements.newNoteFolderSelect?.value || INBOX_FOLDER;
      const tpl = document.querySelector('#newNoteTxtBtn.active, #newNoteMDBtn.active')?.dataset?.tpl || "txt";
      elements.newNoteDialog.close();
      createNote(tpl, folder);
    });
    document.querySelectorAll('#newNoteTxtBtn, #newNoteMDBtn').forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelectorAll('#newNoteTxtBtn, #newNoteMDBtn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  }

  elements.deleteButton.addEventListener("click", deleteActiveNote);
  if (elements.duplicateButton) elements.duplicateButton.addEventListener("click", duplicateActiveNote);
  if (elements.copyMarkdownButton) elements.copyMarkdownButton.addEventListener("click", copyActiveContent);
  elements.exportButton.addEventListener("click", openExportDialog);
  elements.exportCurrentButton?.addEventListener("click", () => {
    exportCurrentNote();
    elements.exportDialog?.close();
  });
  elements.exportFolderButton?.addEventListener("click", exportSelectedFolderFromDialog);
  elements.exportAllButton?.addEventListener("click", () => {
    exportAllNotesZip();
    elements.exportDialog?.close();
  });
  elements.importButton.addEventListener("click", () => elements.importFileInput.click());
  elements.importFileInput.addEventListener("change", importFile);
  elements.shareButton.addEventListener("click", createShareLink);
  [elements.importButton, elements.exportButton, elements.shareButton, elements.deleteButton].forEach((button) => {
    button?.addEventListener("click", () => elements.topbarMenu?.removeAttribute("open"));
  });
  bindTransferPanelEvents();

  elements.previewContent.addEventListener("click", (event) => {
    const button = event.target.closest(".code-copy");
    if (button) {
      const code = button.closest(".code-card")?.querySelector("code")?.innerText || "";
      navigator.clipboard.writeText(code).then(
        () => showToast("已复制代码块"),
        () => showToast("当前浏览器不允许复制")
      );
      return;
    }
    const imageButton = event.target.closest(".preview-copy-image");
    if (!imageButton) return;
    const src = imageButton.dataset.src || "";
    copyPreviewImage(src).then(
      () => showToast("已复制图片"),
      () => showToast(t("imagePasteFailed"))
    );
  });
  elements.bodyInput.addEventListener("scroll", syncPreviewScroll);
  elements.previewContent.addEventListener("scroll", syncEditorScroll);

  // Floating outline scroll tracking
  if (elements.previewContent) elements.previewContent.addEventListener("scroll", updateOutlineActiveHeading);
  if (elements.bodyInput) elements.bodyInput.addEventListener("scroll", updateOutlineActiveHeading);
  if (elements.outlineRail) elements.outlineRail.addEventListener("click", (event) => {
    if (event.target.closest(".outline-dot")) return;
    elements.floatingOutline.classList.toggle("expanded");
  });

  if (elements.topSyncButton) {
    elements.topSyncButton.addEventListener("click", () => {
      elements.syncDialog.showModal();
      elements.syncTokenInput.focus();
      elements.syncTokenInput.select();
    });
  }

  elements.pushCloudButton.addEventListener("click", () => syncCloud({ manual: true, forcePush: true, reason: "manual-push" }));
  elements.pullCloudButton.addEventListener("click", () => syncCloud({ manual: true, pullOnly: true, reason: "manual-pull" }));
  elements.syncRefreshButton?.addEventListener("click", () => {
    forcePullCloud();
  });
  elements.logoutCloudButton.addEventListener("click", clearSyncToken);
  elements.syncTokenInput.addEventListener("input", () => {
    const token = elements.syncTokenInput.value.trim();
    if (token) localStorage.setItem(storageKeys.syncToken, token);
    else localStorage.removeItem(storageKeys.syncToken);
    resetTransferState();
    applyFolderSectionVisibility();
    renderFolderDatalist();
    renderLists();
    renderTransferPanel();
    renderSyncMeta();
    startCloudSync();
  });
  elements.autoSyncToggle.addEventListener("change", () => {
    localStorage.setItem(storageKeys.autoSync, elements.autoSyncToggle.checked ? "1" : "0");
    renderSyncMeta();
    if (elements.autoSyncToggle.checked) startCloudSync();
    else stopCloudSync();
  });
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) syncCloud({ silent: true, pullOnly: true, reason: "check" });
  });

  window.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    if ((event.ctrlKey || event.metaKey) && key === "f") {
      event.preventDefault();
      openEditorSearch(elements.bodyInput.value.slice(elements.bodyInput.selectionStart, elements.bodyInput.selectionEnd) || state.editorSearch.query || "");
      return;
    }
    if ((event.ctrlKey || event.metaKey) && key === "g" && state.editorSearch.open) {
      event.preventDefault();
      moveEditorSearch(event.shiftKey ? -1 : 1);
      return;
    }
    if (key === "escape" && state.previewFocus) {
      event.preventDefault();
      togglePreviewFocus();
      return;
    }
    if (key === "escape" && state.editorSearch.open) {
      event.preventDefault();
      closeEditorSearch();
      return;
    }
    if ((event.ctrlKey || event.metaKey) && key === "s") {
      event.preventDefault();
      if (state.noteInputComposing || event.isComposing) {
        showToast(t("inputComposing"));
        return;
      }
      syncCurrentNoteNow();
      return;
    }
    if ((event.ctrlKey || event.metaKey) && key === "n") {
      event.preventDefault();
      createNote("txt");
    }
  });

  window.addEventListener("beforeunload", () => flushPendingSave(state.activeId));
}

function bindNoteInput(input) {
  if (!input) return;
  input.addEventListener("compositionstart", () => {
    state.noteInputComposing = true;
  });
  input.addEventListener("compositionend", () => {
    state.noteInputComposing = false;
    window.setTimeout(() => updateActiveFromInputs({ force: true }), 0);
  });
  input.addEventListener("blur", () => {
    if (!state.noteInputComposing) return;
    state.noteInputComposing = false;
    window.setTimeout(() => updateActiveFromInputs({ force: true }), 0);
  });
  input.addEventListener("input", handleNoteInput);
}

function handleNoteInput(event) {
  if (event?.isComposing || event?.inputType === "insertCompositionText" || state.noteInputComposing) {
    updateDraftInputUi();
    return;
  }
  updateActiveFromInputs();
}

function updateDraftInputUi() {
  updateCurrentLineIndicator();
  updateLineNumbers();
  syncEditorSearchState();
}

function bindTransferPanelEvents() {
  elements.transferUploadButton?.addEventListener("click", () => {
    if (!transferEnabled()) {
      showToast(t("transferNoToken"));
      return;
    }
    elements.transferFileInput?.click();
  });
  elements.transferRefreshButton?.addEventListener("click", () => fetchTransferFiles({ manual: true }));
  elements.transferFileInput?.addEventListener("change", () => {
    uploadTransferFiles(Array.from(elements.transferFileInput.files || []));
    elements.transferFileInput.value = "";
  });
  elements.transferDropzone?.addEventListener("click", () => {
    if (!transferEnabled()) {
      showToast(t("transferNoToken"));
      return;
    }
    elements.transferFileInput?.click();
  });
  elements.transferDropzone?.addEventListener("dragover", (event) => {
    event.preventDefault();
    elements.transferDropzone.classList.add("dragging");
  });
  elements.transferDropzone?.addEventListener("dragleave", () => {
    elements.transferDropzone.classList.remove("dragging");
  });
  elements.transferDropzone?.addEventListener("drop", (event) => {
    event.preventDefault();
    elements.transferDropzone.classList.remove("dragging");
    uploadTransferFiles(Array.from(event.dataTransfer?.files || []));
  });
  elements.transferFileList?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-transfer-action]");
    if (!button) return;
    const id = button.dataset.id || "";
    const action = button.dataset.transferAction;
    if (action === "download") downloadTransferFile(id);
    if (action === "copy-image") copyTransferImage(id);
    if (action === "delete") deleteTransferFile(id);
  });
}

function transferEnabled() {
  return Boolean(getSyncToken());
}

function resetTransferState() {
  state.transferFiles = [];
  state.transferUploads = [];
  state.transferLoading = false;
  state.transferError = "";
  state.transferLastFetchAt = 0;
  state.transferLimits = null;
}

function transferLimits() {
  const limits = state.transferLimits || {};
  return {
    maxFiles: Number(limits.maxFiles) || TRANSFER_MAX_FILES,
    maxFileBytes: Number(limits.maxFileBytes) || TRANSFER_MAX_FILE_BYTES,
    maxTotalBytes: Number(limits.maxTotalBytes) || TRANSFER_MAX_TOTAL_BYTES
  };
}

function renderTransferPanel() {
  if (!elements.transferPanel) return;
  const activeTransfer = isTransferAssistant(activeNote());
  elements.transferPanel.hidden = !activeTransfer;
  if (!activeTransfer) return;

  const limits = transferLimits();
  if (elements.transferPanelTitle) elements.transferPanelTitle.textContent = t("transferPanelTitle");
  if (elements.transferPanelMeta) {
    elements.transferPanelMeta.textContent = t("transferPanelMeta")
      .replace("{count}", String(limits.maxFiles))
      .replace("{fileSize}", formatBytes(limits.maxFileBytes))
      .replace("{totalSize}", formatBytes(limits.maxTotalBytes));
  }
  if (elements.transferDropTitle) elements.transferDropTitle.textContent = t("transferDropTitle");
  if (elements.transferDropHint) elements.transferDropHint.textContent = t("transferDropHint");
  if (elements.transferUploadButton) elements.transferUploadButton.textContent = t("transferUpload");
  if (elements.transferRefreshButton) elements.transferRefreshButton.textContent = t("transferRefresh");

  const enabled = transferEnabled();
  const uploading = state.transferUploads.some((item) => item.status === "uploading");
  if (elements.transferUploadButton) elements.transferUploadButton.disabled = !enabled || uploading;
  if (elements.transferRefreshButton) elements.transferRefreshButton.disabled = !enabled || state.transferLoading;
  elements.transferDropzone?.classList.toggle("disabled", !enabled);

  if (!enabled) {
    elements.transferFileList.innerHTML = `<div class="transfer-empty">${t("transferNoToken")}</div>`;
    return;
  }

  if (!state.transferLastFetchAt && !state.transferLoading) {
    fetchTransferFiles({ silent: true });
  }

  const uploadRows = state.transferUploads.map(renderTransferUploadRow);
  const fileRows = state.transferFiles.map(renderTransferFileRow);
  const rows = [...uploadRows, ...fileRows];

  if (state.transferLoading && !rows.length) {
    elements.transferFileList.innerHTML = `<div class="transfer-empty">${t("transferLoading")}</div>`;
    return;
  }
  if (state.transferError && !rows.length) {
    elements.transferFileList.innerHTML = `<div class="transfer-error">${escapeHtml(state.transferError)}</div>`;
    return;
  }
  elements.transferFileList.innerHTML = rows.length
    ? rows.join("")
    : `<div class="transfer-empty">${t("transferEmpty")}</div>`;
}

function renderTransferUploadRow(upload) {
  const failed = upload.status === "error";
  const status = failed ? upload.error || t("transferFailed") : t("transferUploading");
  return `
    <div class="transfer-file ${failed ? "failed" : "uploading"}" ${failed ? "" : 'aria-busy="true"'}>
      <div>
        <div class="transfer-file-name">${escapeHtml(upload.name)}</div>
        <div class="transfer-file-meta">${formatBytes(upload.size)} · ${escapeHtml(status)}</div>
      </div>
      <div class="transfer-upload-status">${failed ? t("transferFailed") : t("transferUploading")}</div>
    </div>
  `;
}

function renderTransferFileRow(file) {
  const image = isTransferImage(file);
  return `
    <div class="transfer-file" data-file-id="${escapeAttribute(file.id)}">
      <div>
        <div class="transfer-file-name">${escapeHtml(file.name)}</div>
        <div class="transfer-file-meta">${escapeHtml(file.mimeType || "file")} · ${formatBytes(file.size)} · ${formatShortDate(file.createdAt)}</div>
      </div>
      <div class="transfer-file-actions">
        <button class="ghost-button" type="button" data-transfer-action="download" data-id="${escapeAttribute(file.id)}">${t("transferDownload")}</button>
        ${image ? `<button class="ghost-button" type="button" data-transfer-action="copy-image" data-id="${escapeAttribute(file.id)}">${t("transferCopyImage")}</button>` : ""}
        <button class="danger-button" type="button" data-transfer-action="delete" data-id="${escapeAttribute(file.id)}">${t("transferDelete")}</button>
      </div>
    </div>
  `;
}

async function fetchTransferFiles(options = {}) {
  if (!transferEnabled()) {
    state.transferFiles = [];
    state.transferError = "";
    renderTransferPanel();
    return;
  }
  state.transferLoading = true;
  state.transferError = "";
  state.transferLastFetchAt = Date.now();
  renderTransferPanel();
  try {
    const payload = await fetchTransferJson("./api/files");
    state.transferFiles = Array.isArray(payload.files) ? payload.files.map(normalizeTransferFile) : [];
    state.transferLimits = payload.limits || state.transferLimits;
    state.transferLastFetchAt = Date.now();
  } catch (error) {
    state.transferError = transferErrorText(error);
    if (options.manual) showToast(state.transferError);
  } finally {
    state.transferLoading = false;
    renderTransferPanel();
  }
}

async function uploadTransferFiles(files) {
  if (!files.length) return;
  if (!transferEnabled()) {
    showToast(t("transferNoToken"));
    return;
  }
  const limits = transferLimits();
  let count = state.transferFiles.length + state.transferUploads.filter((item) => item.status !== "error").length;
  let total = state.transferFiles.reduce((sum, file) => sum + Number(file.size || 0), 0)
    + state.transferUploads.filter((item) => item.status !== "error").reduce((sum, file) => sum + Number(file.size || 0), 0);

  for (const file of files) {
    if (count >= limits.maxFiles) {
      showToast(t("transferCountLimit").replace("{count}", String(limits.maxFiles)));
      break;
    }
    if (file.size > limits.maxFileBytes) {
      showToast(t("transferTooLarge").replace("{size}", formatBytes(limits.maxFileBytes)));
      continue;
    }
    if (total + file.size > limits.maxTotalBytes) {
      showToast(t("transferTotalLimit").replace("{size}", formatBytes(limits.maxTotalBytes)));
      continue;
    }
    count += 1;
    total += file.size;
    uploadSingleTransferFile(file);
  }
}

async function uploadSingleTransferFile(file) {
  const upload = {
    id: createId(),
    name: file.name || "file",
    size: file.size || 0,
    status: "uploading",
    error: ""
  };
  state.transferUploads.unshift(upload);
  renderTransferPanel();
  try {
    const formData = new FormData();
    formData.append("file", file, file.name || "file");
    const result = await fetchTransferJson("./api/files", {
      method: "POST",
      body: formData
    });
    state.transferUploads = state.transferUploads.filter((item) => item.id !== upload.id);
    if (result.file) {
      state.transferFiles = [normalizeTransferFile(result.file), ...state.transferFiles.filter((item) => item.id !== result.file.id)];
    }
    state.transferLastFetchAt = Date.now();
    showToast(t("transferUploaded"));
  } catch (error) {
    upload.status = "error";
    upload.error = transferErrorText(error);
    showToast(upload.error);
  } finally {
    renderTransferPanel();
  }
}

async function downloadTransferFile(id) {
  const file = state.transferFiles.find((item) => item.id === id);
  if (!file) return;
  try {
    const blob = await fetchTransferBlob(`./api/files?id=${encodeURIComponent(id)}`);
    downloadBlob(file.name, blob);
  } catch (error) {
    showToast(transferErrorText(error));
  }
}

async function copyTransferImage(id) {
  const file = state.transferFiles.find((item) => item.id === id);
  if (!file || !isTransferImage(file)) return;
  try {
    const blob = await fetchTransferBlob(`./api/files?id=${encodeURIComponent(id)}`);
    if (!navigator.clipboard?.write || !globalThis.ClipboardItem) throw new Error("clipboard");
    await navigator.clipboard.write([new ClipboardItem({ [blob.type || file.mimeType || "image/png"]: blob })]);
    showToast(t("transferCopiedImage"));
  } catch (error) {
    showToast(transferErrorText(error));
  }
}

async function deleteTransferFile(id) {
  const file = state.transferFiles.find((item) => item.id === id);
  if (!file) return;
  if (!window.confirm(`${t("transferDelete")}「${file.name}」？`)) return;
  try {
    await fetchTransferJson(`./api/files?id=${encodeURIComponent(id)}`, { method: "DELETE" });
    state.transferFiles = state.transferFiles.filter((item) => item.id !== id);
    showToast(t("transferDeleted"));
    renderTransferPanel();
  } catch (error) {
    showToast(transferErrorText(error));
  }
}

async function fetchTransferJson(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    cache: "no-store",
    headers: {
      ...(options.headers || {}),
      authorization: `Bearer ${getSyncToken()}`
    }
  });
  const contentType = response.headers.get("content-type") || "";
  const text = await response.text();
  if (!response.ok) throw new Error(text);
  if (!contentType.includes("application/json")) throw new Error("Not found");
  return text ? JSON.parse(text) : {};
}

async function fetchTransferBlob(url) {
  const response = await fetch(url, {
    cache: "no-store",
    headers: {
      authorization: `Bearer ${getSyncToken()}`
    }
  });
  if (!response.ok) throw new Error(await response.text());
  return response.blob();
}

function normalizeTransferFile(file) {
  return {
    id: String(file.id || ""),
    name: String(file.name || "file"),
    mimeType: String(file.mimeType || "application/octet-stream"),
    size: Number(file.size) || 0,
    createdAt: Number(file.createdAt) || Date.now()
  };
}

function isTransferImage(file) {
  return /^image\//i.test(file?.mimeType || "");
}

function transferErrorText(error) {
  const raw = String(error?.message || error || "");
  let text = raw;
  try {
    const parsed = JSON.parse(raw);
    text = parsed.error || raw;
  } catch {}
  if (text.includes("Missing R2") || text.includes("NANSTAR_NOTE_FILES")) return t("transferMissingBinding");
  if (text.includes("Unauthorized")) return t("transferBadToken");
  if (text.includes("Too many files")) return t("transferCountLimit").replace("{count}", String(transferLimits().maxFiles));
  if (text.includes("Total file size")) return t("transferTotalLimit").replace("{size}", formatBytes(transferLimits().maxTotalBytes));
  if (text.includes("File is too large")) return t("transferTooLarge").replace("{size}", formatBytes(transferLimits().maxFileBytes));
  if (text.includes("Failed to fetch") || text.includes("Not found")) return t("transferApiUnavailable");
  if (text.includes("clipboard")) return t("transferClipboardDenied");
  return `${t("transferFailed")}：${text.slice(0, 120)}`;
}

function loadNotes() {
  try {
    const raw = localStorage.getItem(storageKeys.notes);
    if (!raw) return withSystemNotes(defaultNotes.map(normalizeNote));
    const parsed = JSON.parse(raw);
    let notes;
    let folders = null;
    if (Array.isArray(parsed)) {
      notes = parsed;
    } else if (parsed && typeof parsed === "object") {
      notes = Array.isArray(parsed.notes) ? parsed.notes : [];
      folders = Array.isArray(parsed.folders) ? parsed.folders : null;
    } else {
      return withSystemNotes(defaultNotes.map(normalizeNote));
    }
    if (!Array.isArray(notes) || notes.length === 0) return withSystemNotes(defaultNotes.map(normalizeNote));
    const merged = withSystemNotes(notes.map(normalizeNote));
    if (folders) {
      const registry = merged.find(isFolderRegistry);
      if (registry) {
        registry.body = JSON.stringify(normalizedStoredFolderNames(folders));
      }
    }
    return merged;
  } catch {
    return withSystemNotes(defaultNotes.map(normalizeNote));
  }
}

function normalizeNote(note) {
  const body = String(note.body || "");
  return {
    id: note.id || createId(),
    title: note.title || "未命名笔记",
    mode: normalizeMode(note.mode, body),
    folder: canonicalFolderName(note.folder),
    body,
    pinned: Boolean(note.pinned),
    favorite: Boolean(note.favorite),
    system: note.system || "",
    editorSectionOpen: typeof note.editorSectionOpen === "boolean" ? note.editorSectionOpen : normalizeMode(note.mode, body) === "md",
    previewVisible: note.previewVisible !== false,
    createdAt: Number(note.createdAt) || Date.now(),
    updatedAt: Number(note.updatedAt) || Date.now(),
    deletedAt: Number(note.deletedAt) || 0
  };
}

function createTransferAssistantNote() {
  const now = Date.now();
  return normalizeNote({
    id: TRANSFER_NOTE_ID,
    title: t("transferAssistantTitle"),
    mode: "md",
    folder: INBOX_FOLDER,
    body: t("transferAssistantBody"),
    pinned: true,
    favorite: false,
    system: "transfer",
    editorSectionOpen: true,
    previewVisible: true,
    deletedAt: 0,
    createdAt: now,
    updatedAt: now
  });
}

function createFolderRegistryNote() {
  const now = Date.now();
  return normalizeNote({
    id: FOLDER_REGISTRY_NOTE_ID,
    title: "__folders__",
    mode: "txt",
    folder: INBOX_FOLDER,
    body: "[]",
    pinned: false,
    favorite: false,
    system: "folders",
    editorSectionOpen: false,
    previewVisible: false,
    deletedAt: 0,
    createdAt: now,
    updatedAt: now
  });
}

function isTransferAssistant(note) {
  return note?.id === TRANSFER_NOTE_ID || note?.system === "transfer";
}

function isFolderRegistry(note) {
  return note?.id === FOLDER_REGISTRY_NOTE_ID || note?.system === "folders";
}

function withSystemNotes(notes) {
  const normalized = notes.map(normalizeNote);
  const transfer = normalized.find(isTransferAssistant);
  const registry = normalized.find(isFolderRegistry);
  let transferNote = transfer || null;
  let registryNote = registry || null;
  if (transfer) {
    transfer.id = TRANSFER_NOTE_ID;
    transfer.system = "transfer";
    transfer.mode = "md";
    transfer.pinned = true;
    transfer.favorite = false;
    transfer.deletedAt = 0;
    transfer.folder = INBOX_FOLDER;
    transfer.body = "";
    transfer.previewVisible = true;
    transfer.editorSectionOpen = true;
    if (!transfer.title || transfer.title === "File Transfer" || transfer.title === "文件传输助手") {
      transfer.title = t("transferAssistantTitle");
    }
  }
  if (registry) {
    registry.id = FOLDER_REGISTRY_NOTE_ID;
    registry.system = "folders";
    registry.title = "__folders__";
    registry.mode = "txt";
    registry.folder = INBOX_FOLDER;
    registry.pinned = false;
    registry.favorite = false;
    registry.deletedAt = 0;
    registry.previewVisible = false;
    registry.editorSectionOpen = false;
  }
  const filtered = normalized.filter((note) => !isTransferAssistant(note) && !isFolderRegistry(note));
  if (!registryNote) registryNote = createFolderRegistryNote();
  if (!transferNote) transferNote = createTransferAssistantNote();
  return [...filtered, registryNote, transferNote];
}

function folderRegistryNote(notes = state.notes) {
  return notes.find(isFolderRegistry) || null;
}

function storedFolders(notes = state.notes) {
  const registry = folderRegistryNote(notes);
  if (!registry?.body) return [INBOX_FOLDER];
  try {
    const parsed = JSON.parse(registry.body);
    return [INBOX_FOLDER, ...normalizedStoredFolderNames(Array.isArray(parsed) ? parsed : [])];
  } catch {
    return [INBOX_FOLDER];
  }
}

function setStoredFolders(names) {
  const registry = state.notes.find(isFolderRegistry) || createFolderRegistryNote();
  const nextBody = JSON.stringify(normalizedStoredFolderNames(names));
  if (registry.body !== nextBody || registry.deletedAt) {
    registry.body = nextBody;
    registry.updatedAt = Date.now();
    registry.deletedAt = 0;
  }
  if (!state.notes.some((note) => note.id === registry.id)) state.notes.unshift(registry);
  return registry;
}

function migrateFolderState() {
  let changed = false;
  const registry = folderRegistryNote() || createFolderRegistryNote();
  const registryFolders = (() => {
    try {
      const parsed = JSON.parse(registry.body || "[]");
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  })();

  state.notes.forEach((note) => {
    if (isFolderRegistry(note)) return;
    const nextFolder = isTransferAssistant(note) ? INBOX_FOLDER : canonicalFolderName(note.folder);
    if (note.folder !== nextFolder) {
      note.folder = nextFolder;
      changed = true;
    }
  });

  const noteFolders = state.notes
    .filter((note) => !isDeletedNote(note) && !isTransferAssistant(note) && !isFolderRegistry(note))
    .map((note) => note.folder);
  const nextRegistryBody = JSON.stringify(normalizedStoredFolderNames([...registryFolders, ...noteFolders]));
  if (registry.body !== nextRegistryBody || registry.deletedAt) {
    registry.body = nextRegistryBody;
    registry.updatedAt = Date.now();
    registry.deletedAt = 0;
    changed = true;
  }
  if (!state.notes.some((note) => note.id === registry.id)) {
    state.notes.unshift(registry);
    changed = true;
  }

  const nextSelectedFolder = canonicalSelectedFolder(state.selectedFolder);
  if (state.selectedFolder !== nextSelectedFolder) {
    state.selectedFolder = nextSelectedFolder;
  }
  if (changed) saveNotes();
  return changed;
}

function isDeletedNote(note) {
  return Boolean(Number(note?.deletedAt) || 0);
}

function visibleNotes() {
  return state.notes.filter((note) => !isDeletedNote(note) && !isFolderRegistry(note));
}

function regularNotes() {
  return visibleNotes().filter((note) => !isTransferAssistant(note));
}

function firstVisibleNote() {
  return visibleNotes()[0] || null;
}

function noteVersion(note) {
  return Math.max(Number(note?.updatedAt) || 0, Number(note?.deletedAt) || 0, Number(note?.createdAt) || 0);
}

function syncableNotes() {
  return withSystemNotes(state.notes).map(normalizeNote).sort((a, b) => a.id.localeCompare(b.id));
}

function notesSignature(notes = state.notes) {
  return JSON.stringify(notes.map(normalizeNote).sort((a, b) => a.id.localeCompare(b.id)));
}

function noteSignatureById(noteId) {
  const note = state.notes.find((item) => item.id === noteId);
  return note ? notesSignature([note]) : "";
}

function isDefaultSeedState(notes = state.notes) {
  const visible = notes.map(normalizeNote).filter((note) => !isDeletedNote(note) && !isTransferAssistant(note) && !isFolderRegistry(note));
  if (visible.length !== defaultNotes.length) return false;
  return defaultNotes.every((seed) => visible.some((note) => note.title === seed.title && note.body === seed.body));
}

function normalizeMode(mode, body) {
  if (mode === "md" || mode === "markdown") return "md";
  if (mode === "txt" || mode === "text") return "txt";
  return looksLikeMarkdown(body) ? "md" : "txt";
}

function looksLikeMarkdown(body) {
  return /(^|\n)\s{0,3}#{1,4}\s+\S/.test(body)
    || /(^|\n)\s*[-*]\s+\[[ xX]\]\s+/.test(body)
    || /(^|\n)```/.test(body)
    || /(^|\n)\|.+\|/.test(body);
}

function saveNotes() {
  writeStateToCrdt();
  localStorage.setItem(storageKeys.notes, JSON.stringify({
    notes: state.notes,
    folders: storedFolders()
  }));
  if (state.activeId) localStorage.setItem(storageKeys.activeNote, state.activeId);
  state.localStateSource = "stored";
}

function scheduleSave(message = "已保存本地") {
  setSaveStatus(t("saving"));
  clearTimeout(state.saveTimer);
  state.savePendingNoteId = state.activeId;
  markNoteDirty(state.savePendingNoteId);
  state.saveTimer = window.setTimeout(() => {
    saveNotes();
    setSaveStatus(getSyncToken() ? t("syncPending") : message);
    markSyncPending(state.savePendingNoteId);
    state.savePendingNoteId = null;
  }, 240);
}

function flushPendingSave(noteId = state.activeId) {
  const pendingNoteId = state.savePendingNoteId || noteId;
  if (state.saveTimer) {
    clearTimeout(state.saveTimer);
    state.saveTimer = null;
    saveNotes();
    markNoteDirty(pendingNoteId);
    markSyncPending(pendingNoteId);
    state.savePendingNoteId = null;
    setSaveStatus(getSyncToken() ? t("syncPending") : t("savedLocal"));
    return true;
  }
  saveNotes();
  return Boolean(pendingNoteId && isDirtyNoteId(pendingNoteId));
}

function isDirtyNoteId(noteId) {
  return Boolean(noteId && state.dirtyNoteIds.has(noteId));
}

function hasDirtyNotes() {
  return state.dirtyNoteIds.size > 0 || state.crdtPendingUpdates.length > 0 || Boolean(readSyncMeta().pending);
}

function markNoteDirty(noteId = state.activeId) {
  if (noteId) state.dirtyNoteIds.add(noteId);
}

function markAllNotesDirty() {
  visibleNotes().forEach((note) => state.dirtyNoteIds.add(note.id));
}

function restoreDirtyNotes() {
  const dirtyIds = readSyncMeta().dirtyNoteIds;
  state.dirtyNoteIds = new Set(Array.isArray(dirtyIds) ? dirtyIds.filter(Boolean) : []);
}

function dirtyNoteIds() {
  return [...state.dirtyNoteIds].filter(Boolean);
}

function crdtAvailable() {
  return Boolean(window.Y && state.crdtDoc && state.crdtNotes && state.crdtFolders);
}

function bytesToBase64(bytes) {
  let binary = "";
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
  }
  return btoa(binary);
}

function base64ToBytes(text) {
  const binary = atob(text);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function readCrdtPendingUpdates() {
  try {
    const updates = JSON.parse(localStorage.getItem(storageKeys.crdtPendingUpdates) || "[]");
    return Array.isArray(updates) ? updates.filter((item) => typeof item === "string" && item) : [];
  } catch {
    return [];
  }
}

function writeCrdtPendingUpdates() {
  localStorage.setItem(storageKeys.crdtPendingUpdates, JSON.stringify(state.crdtPendingUpdates));
}

function initCrdtFromState(options = {}) {
  if (!window.Y) return;
  createCrdtDoc();
  state.crdtPendingUpdates = readCrdtPendingUpdates();
  if (options.clearPending && state.crdtPendingUpdates.length) {
    state.crdtPendingUpdates = [];
    writeCrdtPendingUpdates();
  }
  state.crdtApplying = true;
  writeStateToCrdt({ force: true, origin: "seed" });
  state.crdtApplying = false;
  state.crdtSeedIsDefault = isDefaultSeedState(state.notes)
    && state.crdtPendingUpdates.length === 0
    && dirtyNoteIds().length === 0
    && !readSyncMeta().pending;
}

function createCrdtDoc() {
  const YLib = window.Y;
  state.crdtDoc?.destroy?.();
  state.crdtDoc = new YLib.Doc();
  state.crdtNotes = state.crdtDoc.getMap("notes");
  state.crdtFolders = state.crdtDoc.getMap("folders");
  state.crdtDoc.on("update", (update, origin) => {
    if (state.crdtApplying || origin === "remote" || origin === "seed") return;
    state.crdtSeedIsDefault = false;
    state.crdtPendingUpdates.push(bytesToBase64(update));
    writeCrdtPendingUpdates();
    writeSyncMeta({ pending: true, dirtyNoteIds: dirtyNoteIds(), lastError: "" });
    renderSyncMeta();
    scheduleAutoSync();
  });
}

function getCrdtNoteMap(noteId, create = false) {
  if (!crdtAvailable() || !noteId) return null;
  let noteMap = state.crdtNotes.get(noteId);
  if (!noteMap && create) {
    noteMap = new window.Y.Map();
    noteMap.set("body", new window.Y.Text());
    state.crdtNotes.set(noteId, noteMap);
  }
  return noteMap || null;
}

function syncYText(yText, nextValue) {
  if (!yText) return;
  const next = String(nextValue || "");
  const current = yText.toString();
  if (current === next) return;
  let start = 0;
  while (start < current.length && start < next.length && current[start] === next[start]) start += 1;
  let currentEnd = current.length;
  let nextEnd = next.length;
  while (currentEnd > start && nextEnd > start && current[currentEnd - 1] === next[nextEnd - 1]) {
    currentEnd -= 1;
    nextEnd -= 1;
  }
  if (currentEnd > start) yText.delete(start, currentEnd - start);
  if (nextEnd > start) yText.insert(start, next.slice(start, nextEnd));
}

function writeStateToCrdt(options = {}) {
  if (!crdtAvailable() || (state.crdtApplying && !options.force)) return;
  const noteIds = new Set(state.notes.filter((note) => !isFolderRegistry(note)).map((note) => note.id));
  state.crdtDoc.transact(() => {
    state.notes.forEach((note) => {
      if (isFolderRegistry(note)) return;
      const normalized = normalizeNote(note);
      const noteMap = getCrdtNoteMap(normalized.id, true);
      if (!noteMap) return;
      const body = noteMap.get("body") instanceof window.Y.Text ? noteMap.get("body") : new window.Y.Text();
      if (noteMap.get("body") !== body) noteMap.set("body", body);
      [
        "id", "title", "mode", "folder", "createdAt", "updatedAt", "deletedAt",
        "pinned", "favorite", "kind", "editorSectionOpen"
      ].forEach((key) => {
        if (normalized[key] !== undefined && noteMap.get(key) !== normalized[key]) noteMap.set(key, normalized[key]);
      });
      syncYText(body, normalized.body);
    });

    Array.from(state.crdtNotes.keys()).forEach((id) => {
      if (!noteIds.has(id)) state.crdtNotes.delete(id);
    });

    const folders = new Set(storedFolders().map(canonicalFolderName));
    folders.forEach((folder) => state.crdtFolders.set(folder, true));
    Array.from(state.crdtFolders.keys()).forEach((folder) => {
      if (!folders.has(canonicalFolderName(folder))) state.crdtFolders.delete(folder);
    });
  }, options.origin || "local");
}

function readStateFromCrdt() {
  if (!crdtAvailable()) return { notes: state.notes, folders: storedFolders() };
  const notes = [];
  state.crdtNotes.forEach((noteMap) => {
    if (!(noteMap instanceof window.Y.Map)) return;
    const body = noteMap.get("body");
    notes.push(normalizeNote({
      id: noteMap.get("id"),
      title: noteMap.get("title"),
      body: body instanceof window.Y.Text ? body.toString() : String(body || ""),
      mode: noteMap.get("mode"),
      folder: noteMap.get("folder"),
      createdAt: noteMap.get("createdAt"),
      updatedAt: noteMap.get("updatedAt"),
      deletedAt: noteMap.get("deletedAt"),
      pinned: noteMap.get("pinned"),
      favorite: noteMap.get("favorite"),
      kind: noteMap.get("kind"),
      editorSectionOpen: noteMap.get("editorSectionOpen")
    }));
  });
  const folders = Array.from(state.crdtFolders.keys()).map(canonicalFolderName);
  return { notes, folders };
}

function applyCrdtToState({ render = true } = {}) {
  if (!crdtAvailable()) return;
  const snapshot = readStateFromCrdt();
  state.crdtApplying = true;
  state.notes = snapshot.notes.sort((a, b) => Number(b.pinned) - Number(a.pinned) || noteVersion(b) - noteVersion(a));
  setStoredFolders(snapshot.folders);
  ensureActiveNote();
  saveNotes();
  state.crdtApplying = false;
  if (render) renderAll();
}

function resetCrdtFromUpdates(updates) {
  if (!window.Y) return;
  createCrdtDoc();
  state.crdtSeedIsDefault = false;
  state.crdtApplying = true;
  updates.forEach((item) => {
    const update = typeof item === "string" ? item : item?.update;
    if (update) window.Y.applyUpdate(state.crdtDoc, base64ToBytes(update), "remote");
  });
  state.crdtApplying = false;
  applyCrdtToState();
}

function mergeCloudNotesSafely(incomingNotes) {
  const dirty = new Set(dirtyNoteIds());
  let blocked = false;
  let changed = false;
  const map = new Map(state.notes.map((note) => [note.id, normalizeNote(note)]));

  incomingNotes.forEach((note) => {
    const existing = map.get(note.id);
    if (dirty.has(note.id)) {
      if (!existing || notesSignature([existing]) !== notesSignature([note])) blocked = true;
      return;
    }
    if (!existing || noteVersion(note) >= noteVersion(existing)) {
      if (!existing || notesSignature([existing]) !== notesSignature([note])) changed = true;
      map.set(note.id, note);
    }
  });

  if (changed) {
    state.notes = [...map.values()].sort((a, b) => Number(b.pinned) - Number(a.pinned) || noteVersion(b) - noteVersion(a));
    if (!activeNote()) state.activeId = firstVisibleNote()?.id || null;
    ensureActiveNote();
    saveNotes();
    renderAll();
    setSaveStatus(t("savedLocal"));
  }

  return { changed, blocked };
}

function clearDirtyNotes() {
  state.dirtyNoteIds.clear();
}

function clearSyncedDirtyNotes(snapshots) {
  if (!snapshots) {
    clearDirtyNotes();
    return;
  }
  Object.entries(snapshots).forEach(([noteId, signature]) => {
    if (noteSignatureById(noteId) === signature) state.dirtyNoteIds.delete(noteId);
  });
}

function scheduleAutoSync() {
  clearTimeout(state.autoSyncTimer);
  if (!elements.autoSyncToggle.checked || !getSyncToken()) return;
  if (state.syncInFlight) {
    const hasLocalChanges = state.crdtPendingUpdates.length > 0 || dirtyNoteIds().length > 0 || Boolean(readSyncMeta().pending);
    if (hasLocalChanges && !state.syncQueue.some((item) => item?.reason === "auto-push")) {
      state.syncQueue.push({ silent: true, reason: "auto-push" });
    }
    return;
  }
  state.autoSyncTimer = window.setTimeout(() => {
    const hasLocalChanges = state.crdtPendingUpdates.length > 0 || dirtyNoteIds().length > 0 || Boolean(readSyncMeta().pending);
    syncCloud(hasLocalChanges
      ? { silent: true, reason: "auto-push" }
      : { silent: true, pullOnly: true, reason: "check" });
  }, SYNC_PUSH_DELAY);
}

function syncCloudInBackground(options = {}) {
  window.setTimeout(() => {
    syncCloud(options).catch((error) => {
      console.error("Background sync failed", error);
    });
  }, 0);
}

function updateActiveFromInputs(options = {}) {
  if (state.noteInputComposing && !options.force) {
    updateDraftInputUi();
    return;
  }
  const note = activeNote();
  if (!note) return;
  note.title = elements.titleInput.value.trimStart() || "未命名笔记";
  if (elements.folderInput) note.folder = normalizeFolderName(elements.folderInput.value);
  note.body = elements.bodyInput.value;
  note.updatedAt = Date.now();

  scheduleSave();
  updateCurrentLineIndicator();
  updateLineNumbers();
  renderPreview();
  renderFloatingOutline();
  renderFolderDatalist();
  renderLists();
  renderSyncMeta();
  syncEditorSearchState();
}

function activeNote() {
  return state.notes.find((note) => note.id === state.activeId && !isDeletedNote(note)) || null;
}

function ensureActiveNote() {
  if (!visibleNotes().length) {
    state.notes.push(createNoteObject("txt"));
  }
  if (!activeNote()) {
    state.activeId = firstVisibleNote()?.id || null;
  }
}

function renderAll() {
  renderFilterState();
  renderEditor();
  renderPreview();
  renderFloatingOutline();
  renderLists();
  renderFolderDatalist();
  renderExportFolderSelect();
  renderSyncMeta();
}

function renderEditor() {
  const note = activeNote();
  if (!note) return;
  const transferMode = isTransferAssistant(note);
  elements.editorCard.classList.toggle("transfer-mode", transferMode);
  if (elements.transferPanel) elements.transferPanel.hidden = !transferMode;
  if (transferMode) {
    state.previewFocus = false;
    document.body.classList.remove("preview-focus-mode");
    document.body.dataset.noteMode = "transfer";
    elements.editorCard.dataset.mode = "transfer";
    renderTransferPanel();
    return;
  }
  if (note.mode !== "md") state.previewFocus = false;

  elements.titleInput.value = note.title;
  if (elements.folderInput) {
    elements.folderInput.value = folderManagementEnabled() ? canonicalFolderName(note.folder) : INBOX_FOLDER;
    elements.folderInput.disabled = !folderManagementEnabled();
  }
  elements.bodyInput.value = note.body;

  if (elements.pinButton) {
    elements.pinButton.classList.toggle("active", note.pinned);
    elements.pinButton.textContent = note.pinned ? `📌 ${t("unpinNote")}` : `📌 ${t("pinNote")}`;
    elements.pinButton.title = note.pinned ? t("unpinNote") : t("pinNote");
  }
  if (elements.favoriteButton) {
    elements.favoriteButton.classList.toggle("active", note.favorite);
    elements.favoriteButton.textContent = note.favorite ? `★ ${t("unfavoriteNote")}` : `★ ${t("favoriteNote")}`;
    elements.favoriteButton.title = note.favorite ? t("unfavoriteNote") : t("favoriteNote");
  }

  elements.modeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === note.mode);
  });

  renderModeState();
  updateCurrentLineIndicator();
  updateLineNumbers();
  handleEditorCursorChange();
}

function renderModeState() {
  const note = activeNote();
  if (!note) return;
  const isMarkdown = note.mode === "md";
  const previewVisible = isMarkdown && note.previewVisible !== false;
  const focused = isMarkdown && state.previewFocus;
  if (!isMarkdown) state.previewFocus = false;
  if (typeof note.editorSectionOpen !== "boolean") note.editorSectionOpen = isMarkdown;

  elements.editorCard.dataset.mode = note.mode;
  elements.editorCard.classList.toggle("preview-hidden", !previewVisible && !focused);
  elements.splitEditor.classList.toggle("preview-hidden", !previewVisible && !focused);
  elements.splitEditor.classList.toggle("preview-focus", focused);
  document.body.dataset.noteMode = note.mode;
  document.body.classList.toggle("preview-focus-mode", focused);

  if (elements.modeHint) elements.modeHint.textContent = isMarkdown ? t("markdownMode") : t("txtMode");
  elements.togglePreviewButton.textContent = previewVisible && !focused ? "◫" : "◨";
  elements.togglePreviewButton.title = previewVisible && !focused ? t("hidePreview") : t("showPreview");
  elements.togglePreviewButton.setAttribute("aria-label", previewVisible && !focused ? t("hidePreview") : t("showPreview"));
  elements.togglePreviewButton.classList.toggle("active", previewVisible && !focused);
  elements.togglePreviewButton.disabled = !isMarkdown;
  elements.toolbar.querySelectorAll(".md-tool, [data-insert]").forEach((button) => {
    button.hidden = !isMarkdown;
  });
  elements.togglePreviewButton.hidden = !isMarkdown;
  elements.previewFocusButton.hidden = !isMarkdown;
  elements.previewFocusButton.textContent = focused ? "✕" : "⤢";
  elements.previewFocusButton.title = focused ? t("exitFocus") : t("focusPreview");
  elements.previewFocusButton.setAttribute("aria-label", focused ? t("exitFocus") : t("focusPreview"));
  elements.previewPane.hidden = !previewVisible && !focused;
  elements.editorSection.open = Boolean(note.editorSectionOpen);
  if (elements.editorSectionState) elements.editorSectionState.textContent = isMarkdown
    ? `${t("modeMd")} · ${elements.editorSection.open ? t("collapseSection") : t("expandSection")}`
    : `${t("modeTxt")} · ${elements.editorSection.open ? t("collapseSection") : t("expandSection")}`;
  elements.splitEditor.style.setProperty("--split-ratio", `${readSplitRatio()}%`);
  syncScrollState();
  syncEditorSearchState();
}

function renderPreview() {
  const note = activeNote();
  const body = note?.body || "";
  if (note && isTransferAssistant(note)) {
    if (elements.wordCount) elements.wordCount.textContent = "";
    elements.previewContent.innerHTML = "";
    return;
  }
  if (elements.wordCount) elements.wordCount.textContent = `${countWords(body)} ${t("characters")} / ${countLines(body)} ${t("lines")}`;

  if (!note || note.mode !== "md") {
    elements.previewContent.innerHTML = "";
    return;
  }

  elements.previewContent.innerHTML = renderMarkdown(body);
  if (note && note.mode === "md") {
    window.setTimeout(updateOutlineActiveHeading, 100);
  }
}

function renderFloatingOutline() {
  if (!elements.floatingOutline || !elements.outlineDots || !elements.outlinePanelBody) return;
  const note = activeNote();
  if (!note || note.mode !== "md") {
    elements.floatingOutline.hidden = true;
    return;
  }

  const headings = extractHeadings(note.body);
  elements.floatingOutline.hidden = false;

  if (headings.length) {
    elements.outlineDots.innerHTML = headings
      .map(h => `<span class="outline-dot level-${h.level}" data-line="${h.line}" data-target="${h.id}" title="${escapeAttribute(h.text)}"></span>`)
      .join("");
  } else {
    elements.outlineDots.innerHTML = '<span class="outline-dot" style="opacity:0.3"></span>';
  }

  if (headings.length) {
    elements.outlinePanelBody.innerHTML = headings
      .map(h => `
        <button class="outline-heading-item level-${h.level}" type="button"
                data-line="${h.line}" data-target="${h.id}">
          ${escapeHtml(h.text)}
        </button>
      `)
      .join("");
  } else {
    elements.outlinePanelBody.innerHTML = `<div class="empty-state compact" style="margin:8px;">${t("outlineEmpty")}</div>`;
  }

  elements.outlineDots.querySelectorAll(".outline-dot").forEach(dot => {
    dot.addEventListener("click", () => jumpToLine(Number(dot.dataset.line || 0), dot.dataset.target));
  });
  elements.outlinePanelBody.querySelectorAll(".outline-heading-item").forEach(btn => {
    btn.addEventListener("click", () => jumpToLine(Number(btn.dataset.line || 0), btn.dataset.target));
  });

  updateOutlineActiveHeading();
}

function updateOutlineActiveHeading() {
  if (!elements.floatingOutline || !elements.outlineDots || !elements.outlinePanelBody) return;
  const note = activeNote();
  if (!note || note.mode !== "md" || elements.floatingOutline.hidden) return;

  const headings = extractHeadings(note.body);
  if (!headings.length) return;

  let activeIdx = -1;
  for (let i = headings.length - 1; i >= 0; i--) {
    const el = document.getElementById(headings[i].id);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.35) {
        activeIdx = i;
        break;
      }
    }
  }
  if (activeIdx < 0) activeIdx = 0;

  setActiveOutlineHeading(activeIdx);
}

function setActiveOutlineHeading(idx) {
  elements.outlineDots.querySelectorAll(".outline-dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === idx);
  });
  elements.outlinePanelBody.querySelectorAll(".outline-heading-item").forEach((item, i) => {
    item.classList.toggle("active", i === idx);
  });
  const activeItem = elements.outlinePanelBody.querySelector(".outline-heading-item.active");
  if (activeItem) {
    activeItem.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }
}

/* ---- Folder Management ---- */

function getFolderNames() {
  if (!folderManagementEnabled()) return [INBOX_FOLDER];
  const names = new Set([INBOX_FOLDER, ...storedFolders()]);
  regularNotes().forEach((note) => names.add(canonicalFolderName(note.folder)));
  const custom = [...names].filter((name) => name !== INBOX_FOLDER);
  return [INBOX_FOLDER, ...custom.sort((a, b) => a.localeCompare(b, "zh-CN"))];
}

function renderFolderDatalist() {
  if (!elements.folderDatalist) return;
  if (!folderManagementEnabled()) {
    elements.folderDatalist.innerHTML = `<option value="${INBOX_FOLDER}">${escapeHtml(displayFolderLabel(INBOX_FOLDER))}</option>`;
    return;
  }
  elements.folderDatalist.innerHTML = getFolderNames()
    .map(name => `<option value="${escapeAttribute(name)}">${escapeHtml(displayFolderLabel(name))}</option>`)
    .join("");
}

function displayFolderLabel(folder) {
  return canonicalFolderName(folder) === INBOX_FOLDER ? t("inbox") : folder;
}

function createFolder() {
  if (!folderManagementEnabled()) return;
  let name = canonicalFolderName(window.prompt(t("folderNamePrompt"), "") || "");
  if (!name) return;
  if (getFolderNames().includes(name)) {
    showToast(t("folderExists"));
    return;
  }
  const registry = setStoredFolders([...storedFolders(), name]);
  saveNotes();
  markSyncPending(registry.id);
  state.selectedFolder = name;
  renderLists();
  renderFolderDatalist();
  showToast(t("folderCreated").replace("{name}", name));
}

function renameFolder(oldName) {
  if (!folderManagementEnabled()) return;
  oldName = canonicalFolderName(oldName);
  if (oldName === INBOX_FOLDER) {
    showToast(t("inboxLockedRename"));
    return;
  }
  const newName = canonicalFolderName(window.prompt(t("folderRenamePrompt"), oldName) || "");
  if (!newName || newName === oldName) return;
  const otherNames = getFolderNames().filter(n => canonicalFolderName(n) !== oldName);
  if (otherNames.includes(newName)) {
    showToast(t("folderExists"));
    return;
  }
  const changedIds = [];
  state.notes.forEach(note => {
    if (canonicalFolderName(note.folder) === oldName && !isDeletedNote(note)) {
      note.folder = newName;
      note.updatedAt = Date.now();
      changedIds.push(note.id);
    }
  });
  const registry = setStoredFolders(storedFolders().filter((name) => canonicalFolderName(name) !== oldName).concat(newName));
  if (state.selectedFolder === oldName) state.selectedFolder = newName;
  saveNotes();
  markSyncPending(registry.id);
  changedIds.forEach((id) => markSyncPending(id));
  renderLists();
  renderFolderDatalist();
  renderEditor();
  showToast(t("folderRenamed").replace("{name}", newName));
}

function deleteFolder(name) {
  if (!folderManagementEnabled()) return;
  name = canonicalFolderName(name);
  if (name === INBOX_FOLDER) {
    showToast(t("inboxLockedDelete"));
    return;
  }
  const confirmed = window.confirm(
    t("confirmDeleteFolder").replace("{name}", name)
  );
  if (!confirmed) return;
  const changedIds = [];
  state.notes.forEach(note => {
    if (canonicalFolderName(note.folder) === name && !isDeletedNote(note)) {
      note.folder = INBOX_FOLDER;
      note.updatedAt = Date.now();
      changedIds.push(note.id);
    }
  });
  const registry = setStoredFolders(storedFolders().filter((folder) => canonicalFolderName(folder) !== name));
  if (state.selectedFolder === name) state.selectedFolder = "";
  saveNotes();
  markSyncPending(registry.id);
  changedIds.forEach((id) => markSyncPending(id));
  renderAll();
  renderFolderDatalist();
  showToast(t("folderDeleted").replace("{name}", name));
}

function showFolderContextMenu(x, y) {
  if (!folderManagementEnabled()) return;
  const menu = elements.folderContextMenu;
  if (!menu) return;
  const newNoteBtn = menu.querySelector('[data-action="new-note"]');
  const exportBtn = menu.querySelector('[data-action="export"]');
  const renameBtn = menu.querySelector('[data-action="rename"]');
  const deleteBtn = menu.querySelector('[data-action="delete"]');
  if (newNoteBtn) newNoteBtn.textContent = t("folderNewNote");
  if (exportBtn) exportBtn.textContent = t("exportFolder");
  if (renameBtn) renameBtn.textContent = t("renameFolder");
  if (deleteBtn) deleteBtn.textContent = t("delete");
  menu.hidden = false;
  menu.style.left = `${Math.min(x, window.innerWidth - 160)}px`;
  menu.style.top = `${Math.min(y, window.innerHeight - 100)}px`;
  const isInbox = canonicalFolderName(state.contextMenuFolder) === INBOX_FOLDER;
  if (renameBtn) {
    renameBtn.disabled = isInbox;
    renameBtn.style.opacity = isInbox ? "0.4" : "1";
  }
  if (deleteBtn) {
    deleteBtn.disabled = isInbox;
    deleteBtn.style.opacity = isInbox ? "0.4" : "1";
  }
}

function hideFolderContextMenu() {
  if (!elements.folderContextMenu) return;
  elements.folderContextMenu.hidden = true;
  state.contextMenuFolder = null;
}

function showNoteContextMenu(x, y) {
  const menu = elements.noteContextMenu;
  if (!menu) return;
  menu.querySelector('[data-action="pin"]').textContent = `📌 ${t("pinNote")}`;
  menu.querySelector('[data-action="favorite"]').textContent = `★ ${t("favoriteNote")}`;
  menu.querySelector('.move-trigger').textContent = `${t("moveTo")} ▸`;
  menu.querySelector('[data-action="duplicate"]').textContent = t("duplicate");
  menu.querySelector('[data-action="export"]').textContent = t("exportCurrent");
  menu.querySelector('[data-action="delete"]').textContent = t("delete");
  menu.hidden = false;
  menu.style.left = `${Math.min(x, window.innerWidth - 170)}px`;
  menu.style.top = `${Math.min(y, window.innerHeight - 260)}px`;
  const note = state.notes.find(n => n.id === state.contextMenuNoteId && !isDeletedNote(n));
  if (note) {
    const pinItem = menu.querySelector('[data-action="pin"]');
    if (pinItem) pinItem.textContent = note.pinned ? `📌 ${t("unpinNote")}` : `📌 ${t("pinNote")}`;
    const favItem = menu.querySelector('[data-action="favorite"]');
    if (favItem) favItem.textContent = note.favorite ? `★ ${t("unfavoriteNote")}` : `★ ${t("favoriteNote")}`;
  }
  // Populate move submenu
  const moveList = document.getElementById('noteMoveList');
  const moveTrigger = document.querySelector('.move-trigger');
  if (moveList && moveTrigger) {
    const folders = getFolderNames().filter(f => note && f !== canonicalFolderName(note.folder));
    moveList.innerHTML = folders.length
      ? folders.map(f => `<button class="context-menu-item" data-action="move-to" data-folder="${escapeAttribute(f)}" type="button">📁 ${escapeHtml(displayFolderLabel(f))}</button>`).join("")
      : `<span style="padding:6px 12px;color:var(--muted);font-size:12px;">${t("noOtherFolders")}</span>`;
    // Click trigger to toggle submenu
    moveTrigger.onclick = (e) => {
      e.stopPropagation();
      moveList.classList.toggle('open');
    };
    moveList.querySelectorAll('[data-action="move-to"]').forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const tf = btn.dataset.folder;
        moveList.classList.remove('open');
        hideNoteContextMenu();
        moveNoteToFolder(state.contextMenuNoteId, tf);
      });
    });
  }
}

function hideNoteContextMenu() {
  if (!elements.noteContextMenu) return;
  elements.noteContextMenu.hidden = true;
  state.contextMenuNoteId = null;
}

function moveNoteToFolder(noteId, targetFolder) {
  const note = state.notes.find(n => n.id === noteId && !isDeletedNote(n));
  const folder = normalizeFolderName(targetFolder);
  if (!note || canonicalFolderName(note.folder) === folder) return;
  note.folder = folder;
  note.updatedAt = Date.now();
  persistAndRender(`已移至「${displayFolderLabel(folder)}」`, { dirtyNoteId: note.id });
}

function exportableNotes() {
  return visibleNotes().filter((note) => !isTransferAssistant(note));
}

function notesInFolder(folder) {
  if (!folder) return exportableNotes();
  const targetFolder = canonicalFolderName(folder);
  return exportableNotes().filter((note) => canonicalFolderName(note.folder) === targetFolder);
}

function uniqueExportPath(path, usedPaths) {
  if (!usedPaths.has(path)) {
    usedPaths.add(path);
    return path;
  }
  const slashIndex = path.lastIndexOf("/");
  const dir = slashIndex >= 0 ? path.slice(0, slashIndex + 1) : "";
  const base = slashIndex >= 0 ? path.slice(slashIndex + 1) : path;
  const dotIndex = base.lastIndexOf(".");
  const stem = dotIndex >= 0 ? base.slice(0, dotIndex) : base;
  const ext = dotIndex >= 0 ? base.slice(dotIndex) : "";
  let index = 2;
  let next = "";
  do {
    next = `${dir}${stem} (${index})${ext}`;
    index += 1;
  } while (usedPaths.has(next));
  usedPaths.add(next);
  return next;
}

function sanitizeZipSegment(value) {
  return safeFileName(value).replace(/\s+/g, " ").trim() || "folder";
}

function fileNameForNote(note) {
  const ext = note.mode === "md" ? "md" : "txt";
  return `${sanitizeZipSegment(note.title)}.${ext}`;
}

function buildZipEntries(structure, rootPrefix = "") {
  const entries = [];
  const usedPaths = new Set();
  const walk = (node, prefix = "") => {
    if (!node) return;
    if (Array.isArray(node)) {
      node.forEach((item) => walk(item, prefix));
      return;
    }
    if (node.type === "folder") {
      const name = sanitizeZipSegment(node.name);
      const nextPrefix = `${prefix}${name}/`;
      if (node.includeDirectory !== false) {
        const dirPath = uniqueExportPath(nextPrefix, usedPaths);
        entries.push({ path: dirPath, directory: true, data: new Uint8Array(0) });
      }
      (node.children || []).forEach((child) => walk(child, nextPrefix));
      return;
    }
    if (node.type === "file") {
      const path = uniqueExportPath(`${prefix}${sanitizeZipSegment(node.name)}`, usedPaths);
      const data = typeof node.data === "string"
        ? new TextEncoder().encode(node.data)
        : (node.data instanceof Uint8Array ? node.data : new Uint8Array(node.data || []));
      entries.push({ path, directory: false, data });
    }
  };
  walk(structure, rootPrefix);
  return entries;
}

function crc32(bytes) {
  let crc = 0xffffffff;
  for (let i = 0; i < bytes.length; i += 1) {
    crc ^= bytes[i];
    for (let j = 0; j < 8; j += 1) {
      const mask = -(crc & 1);
      crc = (crc >>> 1) ^ (0xedb88320 & mask);
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function getDosDateTime(date = new Date()) {
  const year = Math.max(1980, date.getFullYear());
  const dosTime = ((date.getHours() & 0x1f) << 11) | ((date.getMinutes() & 0x3f) << 5) | Math.floor(date.getSeconds() / 2);
  const dosDate = (((year - 1980) & 0x7f) << 9) | ((date.getMonth() + 1) << 5) | date.getDate();
  return { dosTime, dosDate };
}

function concatUint8Arrays(chunks) {
  const total = chunks.reduce((sum, chunk) => sum + chunk.length, 0);
  const merged = new Uint8Array(total);
  let offset = 0;
  chunks.forEach((chunk) => {
    merged.set(chunk, offset);
    offset += chunk.length;
  });
  return merged;
}

function createZipBlob(entries) {
  const encoder = new TextEncoder();
  const files = entries.filter((entry) => !entry.directory);
  const directories = entries.filter((entry) => entry.directory);
  const allEntries = [...directories, ...files];
  const localParts = [];
  const centralParts = [];
  let offset = 0;
  const now = new Date();
  const { dosTime, dosDate } = getDosDateTime(now);

  allEntries.forEach((entry) => {
    const name = entry.path.replace(/\\/g, "/");
    const nameBytes = encoder.encode(name);
    const data = entry.data instanceof Uint8Array ? entry.data : new Uint8Array(entry.data || []);
    const crc = crc32(data);
    const isDir = Boolean(entry.directory || name.endsWith("/"));
    const localHeader = new ArrayBuffer(30);
    const localView = new DataView(localHeader);
    localView.setUint32(0, 0x04034b50, true);
    localView.setUint16(4, 20, true);
    localView.setUint16(6, 0x0800, true);
    localView.setUint16(8, 0, true);
    localView.setUint16(10, dosTime, true);
    localView.setUint16(12, dosDate, true);
    localView.setUint32(14, crc, true);
    localView.setUint32(18, data.length, true);
    localView.setUint32(22, data.length, true);
    localView.setUint16(26, nameBytes.length, true);
    localView.setUint16(28, 0, true);
    localParts.push(new Uint8Array(localHeader), nameBytes, data);

    const centralHeader = new ArrayBuffer(46);
    const centralView = new DataView(centralHeader);
    centralView.setUint32(0, 0x02014b50, true);
    centralView.setUint16(4, 20, true);
    centralView.setUint16(6, 20, true);
    centralView.setUint16(8, 0x0800, true);
    centralView.setUint16(10, 0, true);
    centralView.setUint16(12, dosTime, true);
    centralView.setUint16(14, dosDate, true);
    centralView.setUint32(16, crc, true);
    centralView.setUint32(20, data.length, true);
    centralView.setUint32(24, data.length, true);
    centralView.setUint16(28, nameBytes.length, true);
    centralView.setUint16(30, 0, true);
    centralView.setUint16(32, 0, true);
    centralView.setUint16(34, 0, true);
    centralView.setUint16(36, 0, true);
    centralView.setUint32(38, isDir ? 0x10 : 0, true);
    centralView.setUint32(42, offset, true);
    centralParts.push(new Uint8Array(centralHeader), nameBytes);

    offset += 30 + nameBytes.length + data.length;
  });

  const centralDir = concatUint8Arrays(centralParts);
  const localDir = concatUint8Arrays(localParts);
  const end = new ArrayBuffer(22);
  const endView = new DataView(end);
  endView.setUint32(0, 0x06054b50, true);
  endView.setUint16(4, 0, true);
  endView.setUint16(6, 0, true);
  endView.setUint16(8, allEntries.length, true);
  endView.setUint16(10, allEntries.length, true);
  endView.setUint32(12, centralDir.length, true);
  endView.setUint32(16, localDir.length, true);
  endView.setUint16(20, 0, true);

  return new Blob([localDir, centralDir, new Uint8Array(end)], { type: "application/zip" });
}

function downloadBlob(filename, blob) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function exportFolderZip(folder) {
  const targetFolder = canonicalSelectedFolder(folder);
  const notes = notesInFolder(targetFolder);
  if (!notes.length) {
    showToast(t("exportEmpty"));
    return;
  }
  const folderName = targetFolder ? displayFolderLabel(targetFolder) : t("allNotes");
  const root = sanitizeZipSegment(folderName);
  const entries = notes.map((note) => ({
    type: "file",
    name: fileNameForNote(note),
    data: note.mode === "md" ? formatMarkdownExport(note) : note.body
  }));
  const zip = createZipBlob(buildZipEntries([{ type: "folder", name: root, children: entries }]));
  downloadBlob(`${safeFileName(folderName)}-${formatFileDate(Date.now())}.zip`, zip);
  showToast(t("exportDone"));
}

function exportAllNotesZip() {
  const notes = exportableNotes();
  if (!notes.length) {
    showToast(t("exportEmpty"));
    return;
  }
  const folderMap = new Map();
  notes.forEach((note) => {
    const key = canonicalFolderName(note.folder);
    if (!folderMap.has(key)) folderMap.set(key, []);
    folderMap.get(key).push(note);
  });
  const children = [...folderMap.entries()]
    .sort((a, b) => {
      if (a[0] === INBOX_FOLDER) return -1;
      if (b[0] === INBOX_FOLDER) return 1;
      return a[0].localeCompare(b[0], "zh-CN");
    })
    .map(([folder, items]) => ({
      type: "folder",
      name: folder,
      includeDirectory: true,
      children: items.map((note) => ({
        type: "file",
        name: fileNameForNote(note),
        data: note.mode === "md" ? formatMarkdownExport(note) : note.body
      }))
    }));
  const zip = createZipBlob(buildZipEntries([{ type: "folder", name: `NanStar Note ${formatFileDate(Date.now())}`, children }]));
  downloadBlob(`nanstar-note-${formatFileDate(Date.now())}.zip`, zip);
  showToast(t("exportDone"));
}

function duplicateNoteById(id) {
  const note = state.notes.find(n => n.id === id && !isDeletedNote(n));
  if (!note) return;
  const now = Date.now();
  const copy = normalizeNote({...note, id: createId(), title: `${note.title} 副本`, pinned: false, createdAt: now, updatedAt: now});
  state.notes.unshift(copy);
  state.activeId = copy.id;
  persistAndRender("已复制为新笔记");
}

function exportNoteById(id) {
  const note = state.notes.find(n => n.id === id && !isDeletedNote(n));
  if (!note) return;
  const isMarkdown = note.mode === "md";
  const ext = isMarkdown ? "md" : "txt";
  const type = isMarkdown ? "text/markdown" : "text/plain";
  const content = isMarkdown ? formatMarkdownExport(note) : note.body;
  downloadText(`${safeFileName(note.title)}.${ext}`, content, type);
  showToast("已导出笔记");
}

function markNoteDeleted(note) {
  if (isTransferAssistant(note)) {
    note.deletedAt = 0;
    note.pinned = true;
    note.favorite = false;
    return;
  }
  const now = Date.now();
  note.deletedAt = now;
  note.updatedAt = now;
  note.pinned = false;
  note.favorite = false;
}

function deleteNoteById(id) {
  const note = state.notes.find(n => n.id === id && !isDeletedNote(n));
  if (!note) return;
  const confirmed = window.confirm(`删除「${note.title}」？`);
  if (!confirmed) return;
  markNoteDeleted(note);
  if (state.activeId === id) state.activeId = firstVisibleNote()?.id || null;
  ensureActiveNote();
  persistAndRender("已删除笔记", { dirtyNoteId: id });
}

function renderLists() {
  renderCounts();
  renderFolders();
  renderNoteList();
}

function renderFilterState() {
  elements.filterTabs.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.filter === state.viewFilter);
  });
}

function renderCounts() {
  if (elements.listStatus) elements.listStatus.textContent = `${visibleNotes().length} ${t("items")}`;
}

function sortedNotes() {
  return visibleNotes()
    .filter((note) => {
      if (state.viewFilter === "favorite" && !note.favorite) return false;
      if (state.selectedFolder && canonicalFolderName(note.folder) !== state.selectedFolder) return false;
      if (!state.query) return true;
      const haystack = `${note.title}\n${displayFolderLabel(note.folder)}\n${note.body}`.toLowerCase();
      return haystack.includes(state.query);
    })
    .sort((a, b) => {
      if (isTransferAssistant(a) && !isTransferAssistant(b)) return -1;
      if (!isTransferAssistant(a) && isTransferAssistant(b)) return 1;
      // Pinned always first
      if (a.pinned && !b.pinned) return -1;
      if (!a.pinned && b.pinned) return 1;
      return b.updatedAt - a.updatedAt;
    });
}

function renderFolders() {
  if (!folderManagementEnabled()) {
    if (elements.folderSectionCount) elements.folderSectionCount.textContent = "1";
    elements.folderList.innerHTML = `
      <div class="folder-row active" data-folder="${escapeAttribute(INBOX_FOLDER)}">
        <button class="folder-item" type="button" data-folder="${escapeAttribute(INBOX_FOLDER)}">
          <span class="folder-dot" aria-hidden="true"></span>
          <span class="folder-name">${escapeHtml(displayFolderLabel(INBOX_FOLDER))}</span>
          <strong>${regularNotes().length}</strong>
        </button>
      </div>
    `;
    elements.folderList.querySelectorAll(".folder-item").forEach((button) => {
      button.addEventListener("click", () => {
        state.selectedFolder = "";
        state.selectionMode = false;
        state.selectedNoteIds.clear();
        renderLists();
      });
    });
    return;
  }
  const counts = new Map();
  regularNotes().forEach((note) => {
    const folder = canonicalFolderName(note.folder);
    counts.set(folder, (counts.get(folder) || 0) + 1);
  });

  const folderItems = getFolderNames()
    .map((folder) => [folder, counts.get(folder) || 0])
    .sort((a, b) => {
      if (a[0] === INBOX_FOLDER) return -1;
      if (b[0] === INBOX_FOLDER) return 1;
      return b[1] - a[1] || a[0].localeCompare(b[0], "zh-CN");
    });

  if (state.selectedFolder && !folderItems.some(([folder]) => folder === state.selectedFolder)) {
    state.selectedFolder = "";
  }

  const html = folderItems
    .map(([folder, count]) => `
      <div class="folder-row ${folder === state.selectedFolder ? "active" : ""}" data-folder="${escapeAttribute(folder)}">
        <button class="folder-item" type="button" data-folder="${escapeAttribute(folder)}">
          <span class="folder-dot" aria-hidden="true"></span>
          <span class="folder-name">${escapeHtml(displayFolderLabel(folder))}</span>
          <strong>${count}</strong>
        </button>
      </div>
    `)
    .join("");

  elements.folderList.innerHTML = html;
  if (elements.folderSectionCount) {
    elements.folderSectionCount.textContent = String(folderItems.length);
  }

  elements.folderList.querySelectorAll(".folder-item").forEach((button) => {
    button.addEventListener("click", () => {
      const f = canonicalSelectedFolder(button.dataset.folder || "");
      state.selectedFolder = f;
      state.selectionMode = false;
      state.selectedNoteIds.clear();
      renderLists();
    });
  });
  elements.folderList.querySelectorAll(".folder-row").forEach((row) => {
    row.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      const f = canonicalSelectedFolder(row.dataset.folder || "");
      state.contextMenuFolder = f;
      showFolderContextMenu(event.clientX, event.clientY);
    });
  });
}

function renderNoteList() {
  const notes = sortedNotes();
  if (elements.listStatus) elements.listStatus.textContent = `${notes.length} ${t("items")}`;
  pruneNoteSelection();
  renderBulkActionBar();

  if (!notes.length) {
    elements.noteList.innerHTML = `<div class="empty-state">
      <p>${t("noNotes")}</p>
      <button class="ghost-button" onclick="document.getElementById('newNoteButton').click()" style="margin-top:8px;">＋ ${t("newNote")}</button>
    </div>`;
    return;
  }

  elements.noteList.innerHTML = notes
    .map((note) => {
      const transfer = isTransferAssistant(note);
      const mode = note.mode === "md" ? "MD" : "TXT";
      const flags = transfer ? "" : `${note.pinned ? "📌" : ""}${note.favorite ? "★" : ""}`;
      const title = transfer ? t("transferAssistantTitle") : note.title;
      const body = transfer ? "" : excerpt(note.body);
      const classes = ["note-item"];
      const rowClasses = ["note-row"];
      const selectable = !transfer;
      const selected = selectable && state.selectedNoteIds.has(note.id);
      if (note.id === state.activeId) classes.push("active");
      if (transfer) classes.push("transfer-assistant");
      if (state.selectionMode) rowClasses.push("selection-mode");
      if (selected) rowClasses.push("selected");
      return `
        <div class="${rowClasses.join(" ")}">
          ${state.selectionMode && selectable ? `
            <label class="note-select" title="${t("selectNote")}">
              <input class="note-select-checkbox" type="checkbox" data-select-note="${note.id}" ${selected ? "checked" : ""} />
              <span aria-hidden="true"></span>
            </label>
          ` : state.selectionMode ? `<span class="note-select-spacer" aria-hidden="true"></span>` : ""}
          <button class="${classes.join(" ")}" type="button" data-id="${note.id}">
            <span class="note-item-head">
              <h3>${escapeHtml(title)}</h3>
              <span class="note-flags-text">${flags}</span>
            </span>
            ${transfer ? "" : `<p>${escapeHtml(body)}</p>`}
            ${transfer ? "" : `<span class="note-item-meta">
              <span class="note-item-mode">${mode}</span>
              <time>${formatShortDate(note.updatedAt)}</time>
            </span>`}
          </button>
        </div>
      `;
    })
    .join("");

  elements.noteList.querySelectorAll(".note-select-checkbox").forEach((checkbox) => {
    checkbox.addEventListener("click", (event) => event.stopPropagation());
    checkbox.addEventListener("change", () => {
      toggleNoteSelection(checkbox.dataset.selectNote, checkbox.checked);
    });
  });

  elements.noteList.querySelectorAll(".note-item").forEach((button) => {
    button.addEventListener("click", () => {
      if (state.selectionMode) {
        const noteId = button.dataset.id;
        const note = state.notes.find((item) => item.id === noteId && !isDeletedNote(item));
        if (note && !isTransferAssistant(note)) {
          toggleNoteSelection(noteId, !state.selectedNoteIds.has(noteId));
        }
        return;
      }
      switchToNote(button.dataset.id);
    });
    button.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      state.contextMenuNoteId = button.dataset.id;
      showNoteContextMenu(event.clientX, event.clientY);
    });
  });
}

function pruneNoteSelection() {
  const selectableIds = new Set(visibleNotes().filter((note) => !isTransferAssistant(note)).map((note) => note.id));
  state.selectedNoteIds.forEach((id) => {
    if (!selectableIds.has(id)) state.selectedNoteIds.delete(id);
  });
}

function renderBulkActionBar() {
  const count = state.selectedNoteIds.size;
  const selectableCount = sortedNotes().filter((note) => !isTransferAssistant(note)).length;
  if (elements.bulkActionBar) elements.bulkActionBar.hidden = !state.selectionMode;
  if (elements.bulkSelectionCount) {
    elements.bulkSelectionCount.textContent = t("selectedCount").replace("{count}", count);
  }
  if (elements.multiSelectButton) {
    elements.multiSelectButton.textContent = state.selectionMode ? t("exitMultiSelect") : t("multiSelect");
    elements.multiSelectButton.classList.toggle("active", state.selectionMode);
    elements.multiSelectButton.hidden = selectableCount === 0;
  }
  if (elements.bulkSelectAllButton) {
    elements.bulkSelectAllButton.textContent = t("selectAll");
    elements.bulkSelectAllButton.disabled = selectableCount === 0 || count === selectableCount;
  }
  if (elements.bulkDeleteButton) elements.bulkDeleteButton.textContent = t("delete");
  if (elements.bulkDeleteButton) elements.bulkDeleteButton.disabled = count === 0;
  if (elements.bulkClearButton) elements.bulkClearButton.textContent = t("clearSelectionAction");
}

function toggleSelectionMode() {
  if (state.selectionMode) exitSelectionMode();
  else {
    state.selectionMode = true;
    state.selectedNoteIds.clear();
    renderLists();
  }
}

function exitSelectionMode() {
  state.selectionMode = false;
  state.selectedNoteIds.clear();
  renderLists();
}

function selectAllVisibleNotes() {
  state.selectionMode = true;
  sortedNotes().forEach((note) => {
    if (!isTransferAssistant(note)) state.selectedNoteIds.add(note.id);
  });
  renderLists();
}

function toggleNoteSelection(noteId, selected) {
  if (!noteId) return;
  const note = state.notes.find((item) => item.id === noteId && !isDeletedNote(item));
  if (!note || isTransferAssistant(note)) return;
  if (selected) state.selectedNoteIds.add(noteId);
  else state.selectedNoteIds.delete(noteId);
  renderLists();
}

function clearNoteSelection() {
  state.selectedNoteIds.clear();
  renderLists();
}

function deleteSelectedNotes() {
  const ids = [...state.selectedNoteIds].filter((id) => {
    const note = state.notes.find((item) => item.id === id && !isDeletedNote(item));
    return note && !isTransferAssistant(note);
  });
  if (!ids.length) return;
  const confirmed = window.confirm(t("confirmDeleteSelected").replace("{count}", ids.length));
  if (!confirmed) return;
  ids.forEach((id) => {
    const note = state.notes.find((item) => item.id === id && !isDeletedNote(item));
    if (note) markNoteDeleted(note);
  });
  if (ids.includes(state.activeId)) state.activeId = firstVisibleNote()?.id || null;
  state.selectionMode = false;
  state.selectedNoteIds.clear();
  ensureActiveNote();
  saveNotes();
  ids.forEach((id) => markSyncPending(id));
  renderAll();
  setSaveStatus(getSyncToken() ? t("syncPending") : t("savedLocal"));
  showToast(t("selectedDeleted").replace("{count}", ids.length));
}

function switchToNote(nextId) {
  if (!nextId || nextId === state.activeId) {
    if (nextId) syncCloudInBackground({ silent: true, pullOnly: true, reason: "open-note", noteId: nextId });
    return;
  }

  const previousId = state.activeId;
  flushPendingSave(previousId);
  const shouldPushPrevious = isDirtyNoteId(previousId);

  state.activeId = nextId;
  saveNotes();
  renderAll();
  elements.bodyInput.focus();
  if (shouldPushPrevious) {
    syncCloudInBackground({ silent: false, forcePush: true, reason: "leave-note", noteId: previousId });
  }
  syncCloudInBackground({ silent: true, pullOnly: true, reason: "open-note", noteId: nextId });
}

async function syncCurrentNoteNow() {
  const noteId = state.activeId;
  flushPendingSave(noteId);
  markSyncPending(noteId);
  await syncCloud({ manual: true, forcePush: true, reason: "ctrl-s", noteId });
}

function renderSyncMeta() {
  const token = getSyncToken();
  const lastSync = localStorage.getItem(storageKeys.lastSyncAt);
  const auto = elements.autoSyncToggle.checked;
  const syncMeta = readSyncMeta();

  if (!token) {
    elements.cloudStatus.textContent = t("localMode");
    elements.syncState.textContent = t("local");
  } else if (state.syncInFlight) {
    const label = state.syncAction === "pulling" ? t("syncPulling") : t("syncPushing");
    elements.cloudStatus.textContent = label;
    elements.syncState.textContent = label;
  } else if (syncMeta.lastError) {
    elements.cloudStatus.textContent = t("syncFailed");
    elements.syncState.textContent = t("syncRetry");
  } else if (syncMeta.pending) {
    elements.cloudStatus.textContent = t("syncPending");
    elements.syncState.textContent = t("syncPendingShort");
  } else if (syncMeta.lastPushAt) {
    elements.cloudStatus.textContent = auto ? t("cloudAuto") : t("cloudReady");
    elements.syncState.textContent = t("syncPushedAt").replace("{time}", formatTime(Number(syncMeta.lastPushAt)));
  } else if (syncMeta.lastPullAt) {
    elements.cloudStatus.textContent = auto ? t("cloudAuto") : t("cloudReady");
    elements.syncState.textContent = t("syncPulledAt").replace("{time}", formatTime(Number(syncMeta.lastPullAt)));
  } else {
    elements.cloudStatus.textContent = auto ? t("cloudAuto") : t("cloudReady");
    elements.syncState.textContent = lastSync
      ? `${t("synced")} ${formatDate(Number(lastSync))}`
      : t("cloudUnsynced");
  }
  const note = activeNote();
  if (elements.createdAt) {
    elements.createdAt.textContent = note ? `${t("noteCreated")} ${formatDate(Number(note.createdAt) || Date.now())}` : t("noteCreated");
  }
  if (elements.updatedAt) {
    elements.updatedAt.textContent = note ? `${t("noteUpdated")} ${formatDate(Number(note.updatedAt) || Date.now())}` : t("noteUpdated");
  }
}

function openNewNoteDialog() {
  if (!elements.newNoteFolderSelect || !elements.newNoteDialog) return;
  const folders = getFolderNames();
  const defaultFolder = canonicalSelectedFolder(state.selectedFolder) || INBOX_FOLDER;
  elements.newNoteFolderSelect.innerHTML = folders.length
    ? folders.map(f => `<option value="${escapeAttribute(f)}" ${f === defaultFolder ? "selected" : ""}>${escapeHtml(displayFolderLabel(f))}</option>`).join("")
    : `<option value="${INBOX_FOLDER}">${INBOX_FOLDER}</option>`;
  elements.newNoteFolderSelect.disabled = !folderManagementEnabled();
  elements.newNoteDialog.showModal();
}

function createNote(templateName, folder) {
  const note = createNoteObject(templateName);
  note.folder = folderManagementEnabled() ? normalizeFolderName(folder || state.selectedFolder || note.folder) : INBOX_FOLDER;
  state.notes.unshift(note);
  state.activeId = note.id;
  persistAndRender("已创建笔记");
  elements.titleInput.focus();
  elements.titleInput.select();
}

function createNoteInFolder(folder) {
  createNote("txt", folder);
}

function createNoteObject(templateName) {
  const template = templates[templateName] || templates.txt;
  const now = Date.now();
  const isBaseTemplate = templateName === "txt" || templateName === "md" || templateName === "blank";
  return normalizeNote({
    id: createId(),
    title: template.title,
    mode: template.mode,
    folder: isBaseTemplate ? INBOX_FOLDER : normalizeFolderName(template.folder),
    body: template.body,
    pinned: false,
    favorite: false,
    createdAt: now,
    updatedAt: now
  });
}

function togglePinned() {
  const note = activeNote();
  if (!note) return;
  note.pinned = !note.pinned;
  note.updatedAt = Date.now();
  persistAndRender(note.pinned ? "已置顶" : "已取消置顶");
}

function toggleFavorite() {
  const note = activeNote();
  if (!note) return;
  note.favorite = !note.favorite;
  note.updatedAt = Date.now();
  persistAndRender(note.favorite ? "已加入星标" : "已取消星标");
}

function changeMode(mode) {
  const note = activeNote();
  if (!note || !["txt", "md"].includes(mode) || note.mode === mode) return;
  note.mode = mode;
  note.previewVisible = mode === "md";
  note.editorSectionOpen = mode === "md";
  state.previewFocus = false;
  note.updatedAt = Date.now();
  persistAndRender(mode === "md" ? "已切换到 Markdown" : "已切换到 TXT");
  elements.bodyInput.focus();
}

function togglePreview() {
  const note = activeNote();
  if (!note || note.mode !== "md") return;
  note.previewVisible = note.previewVisible === false;
  state.previewFocus = false;
  note.updatedAt = Date.now();
  saveNotes();
  markSyncPending(note.id);
  renderModeState();
  renderPreview();
}

function togglePreviewFocus() {
  const note = activeNote();
  if (!note || note.mode !== "md") return;
  state.previewFocus = !state.previewFocus;
  if (state.previewFocus) note.previewVisible = true;
  note.updatedAt = Date.now();
  saveNotes();
  markSyncPending(note.id);
  renderModeState();
  renderPreview();
}

function handleEditorSectionToggle() {
  const note = activeNote();
  if (!note) return;
  const nextOpen = Boolean(elements.editorSection.open);
  if (note.editorSectionOpen === nextOpen) return;
  note.editorSectionOpen = nextOpen;
  note.updatedAt = Date.now();
  saveNotes();
  markSyncPending(note.id);
  renderModeState();
}

function toggleSidebar() {
  state.sidebarCollapsed = !state.sidebarCollapsed;
  applySidebarCollapsed(state.sidebarCollapsed);
}

function toggleFolderSection() {
  applyFolderSectionCollapsed(!state.folderSectionCollapsed);
}

function applySidebarCollapsed(collapsed) {
  const isCollapsed = Boolean(collapsed);
  state.sidebarCollapsed = isCollapsed;
  document.body.classList.toggle("sidebar-collapsed", isCollapsed);
  localStorage.setItem(storageKeys.sidebarCollapsed, isCollapsed ? "1" : "0");
  const toggleIcon = elements.sidebarToggleButton?.querySelector(".toggle-icon");
  if (toggleIcon) toggleIcon.textContent = isCollapsed ? "\u2630" : "\u25C0";
  if (elements.sidebarToggleButton) {
    const label = isCollapsed ? t("expandSidebar") : t("collapseSidebar");
    elements.sidebarToggleButton.title = label;
    elements.sidebarToggleButton.setAttribute("aria-label", label);
  }
}

function applyFolderSectionCollapsed(collapsed) {
  const isCollapsed = Boolean(collapsed);
  state.folderSectionCollapsed = isCollapsed;
  if (elements.folderSection) {
    elements.folderSection.open = !isCollapsed;
  }
  localStorage.setItem(storageKeys.folderSectionCollapsed, isCollapsed ? "1" : "0");
  const mark = elements.folderSectionSummary?.querySelector(".summary-mark");
  if (mark) mark.textContent = isCollapsed ? "▶" : "▼";
  if (elements.folderSectionSummary) {
    elements.folderSectionSummary.setAttribute("aria-expanded", String(!isCollapsed));
  }
}

function readSidebarWidth() {
  const stored = Number(localStorage.getItem(storageKeys.sidebarWidth));
  if (!stored || Number.isNaN(stored)) return DEFAULT_SIDEBAR_WIDTH;
  return Math.max(240, Math.min(420, stored));
}

function applySidebarWidth(value) {
  const width = Math.max(240, Math.min(420, Number(value) || DEFAULT_SIDEBAR_WIDTH));
  if (elements.appShell) {
    elements.appShell.style.setProperty("--sidebar-width", `${width}px`);
  }
  localStorage.setItem(storageKeys.sidebarWidth, String(width));
}

function bindSidebarResizer() {
  let dragging = false;

  const move = (event) => {
    if (!dragging) return;
    const rect = elements.appShell.getBoundingClientRect();
    const width = event.clientX - rect.left;
    applySidebarWidth(width);
  };

  const stop = () => {
    dragging = false;
    document.body.classList.remove("is-dragging-split");
  };

  elements.sidebarResizer?.addEventListener("mousedown", (event) => {
    if (window.innerWidth <= 1020 || state.previewFocus || state.sidebarCollapsed) return;
    dragging = true;
    document.body.classList.add("is-dragging-split");
    event.preventDefault();
  });

  window.addEventListener("mousemove", move);
  window.addEventListener("mouseup", stop);
}

function deleteActiveNote() {
  const note = activeNote();
  if (!note) return;
  if (isTransferAssistant(note)) {
    showToast(t("transferAssistantTitle"));
    return;
  }
  const confirmed = window.confirm(`删除「${note.title}」？下次推送到云端时会同步这个删除结果。`);
  if (!confirmed) return;
  const deletedId = note.id;
  markNoteDeleted(note);
  state.activeId = firstVisibleNote()?.id || null;
  ensureActiveNote();
  persistAndRender("已删除笔记", { dirtyNoteId: deletedId });
}

function duplicateActiveNote() {
  const note = activeNote();
  if (!note) return;
  const now = Date.now();
  const copy = normalizeNote({
    ...note,
    id: createId(),
    title: `${note.title} 副本`,
    pinned: false,
    createdAt: now,
    updatedAt: now
  });
  state.notes.unshift(copy);
  state.activeId = copy.id;
  persistAndRender("已复制为新笔记");
}

function copyActiveContent() {
  const note = activeNote();
  if (!note) return;
  const content = note.mode === "md" ? formatMarkdownExport(note) : note.body;
  navigator.clipboard.writeText(content).then(
    () => showToast("已复制当前内容"),
    () => showToast("当前浏览器不允许复制")
  );
}

function downloadActiveNote() {
  exportCurrentNote();
}

function exportAllNotes() {
  const payload = {
    app: "NanStar Note",
    version: 2,
    exportedAt: new Date().toISOString(),
    notes: state.notes
  };
  downloadText(`nanstar-note-${formatFileDate(Date.now())}.json`, JSON.stringify(payload, null, 2), "application/json");
}

function exportBackupJson() {
  exportAllNotes();
}

function exportCurrentNote() {
  const note = activeNote();
  if (!note) return;
  const isMarkdown = note.mode === "md";
  const extension = isMarkdown ? "md" : "txt";
  const type = isMarkdown ? "text/markdown" : "text/plain";
  const content = isMarkdown ? formatMarkdownExport(note) : note.body;
  downloadText(`${safeFileName(note.title)}.${extension}`, content, type);
}

function openExportDialog() {
  renderExportFolderSelect();
  elements.exportDialog?.showModal();
}

function renderExportFolderSelect() {
  if (!elements.exportFolderSelect) return;
  const folders = getFolderNames();
  const current = canonicalSelectedFolder(state.selectedFolder) || canonicalFolderName(activeNote()?.folder);
  elements.exportFolderSelect.innerHTML = folders
    .map((folder) => `<option value="${escapeAttribute(folder)}" ${folder === current ? "selected" : ""}>${escapeHtml(displayFolderLabel(folder))}</option>`)
    .join("");
  if (elements.exportFolderButton) elements.exportFolderButton.disabled = folders.length === 0;
}

function exportSelectedFolderFromDialog() {
  const folder = canonicalSelectedFolder(elements.exportFolderSelect?.value || "");
  if (!folder) return;
  exportFolderZip(folder);
  elements.exportDialog?.close();
}

function importFile(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    const text = String(reader.result || "");
    try {
      if (file.name.toLowerCase().endsWith(".json")) {
        const parsed = JSON.parse(text);
        const incoming = Array.isArray(parsed) ? parsed : parsed.notes;
        if (!Array.isArray(incoming)) throw new Error("Invalid notes file");
        mergeNotes(incoming.map(normalizeNote));
        showToast(`已导入 ${incoming.length} 条笔记`);
      } else {
        const now = Date.now();
        const mode = file.name.toLowerCase().endsWith(".md") ? "md" : "txt";
        const note = normalizeNote({
          id: createId(),
          title: file.name.replace(/\.(md|txt)$/i, "") || "导入笔记",
          mode,
          folder: "Import",
          body: text,
          createdAt: now,
          updatedAt: now
        });
        state.notes.unshift(note);
        state.activeId = note.id;
        persistAndRender("已导入文本笔记");
      }
    } catch {
      showToast("导入失败：文件格式不正确");
    } finally {
      event.target.value = "";
    }
  };
  reader.readAsText(file, "utf-8");
}

function mergeNotes(incoming, options = {}) {
  const before = notesSignature();
  const incomingNotes = incoming.map(normalizeNote);
  const map = new Map(state.notes.map((note) => [note.id, normalizeNote(note)]));
  incomingNotes.forEach((note) => {
    const existing = map.get(note.id);
    if (!existing || noteVersion(note) >= noteVersion(existing)) {
      map.set(note.id, note);
    }
  });
  state.notes = [...map.values()].sort((a, b) => Number(b.pinned) - Number(a.pinned) || noteVersion(b) - noteVersion(a));
  if (Array.isArray(options.folders)) setStoredFolders(options.folders);
  if (!activeNote()) state.activeId = firstVisibleNote()?.id || null;
  ensureActiveNote();
  const changed = before !== notesSignature();
  saveNotes();
  renderAll();
  setSaveStatus("已保存本地");
  if (options.scheduleSync !== false) {
    markSyncPending();
  }
  if (!options.silent) {
    showToast("已合并笔记");
  }
  return changed;
}

function applyCloudNotes(remotePayload, options = {}) {
  const before = notesSignature();
  const remoteNotes = Array.isArray(remotePayload?.notes) ? remotePayload.notes : [];
  const incomingNotes = remoteNotes.map(normalizeNote);
  const incomingFolders = Array.isArray(remotePayload?.folders) ? remotePayload.folders : null;
  const localWasDefault = state.localStateSource === "default";
  const hasRemoteVisibleNotes = incomingNotes.some((note) => !isDeletedNote(note));
  const allowReplace = options.allowReplace === true;
  const hasLocalDirty = hasDirtyNotes();

  if ((allowReplace || localWasDefault || isDefaultSeedState()) && hasRemoteVisibleNotes && !hasLocalDirty) {
    replaceNotesFromCloud(incomingNotes, { keepActiveId: true, folders: incomingFolders });
    return { changed: before !== notesSignature(), blocked: false };
  } else if (hasLocalDirty) {
    return mergeCloudNotesSafely(incomingNotes);
  } else {
    mergeNotes(incomingNotes, { silent: true, scheduleSync: false, folders: incomingFolders });
    return { changed: before !== notesSignature(), blocked: false };
  }
}

function createShareLink() {
  const note = activeNote();
  if (!note) return;
  const data = btoa(unescape(encodeURIComponent(JSON.stringify(note))));
  const url = `${location.origin}${location.pathname}#note=${data}`;
  navigator.clipboard.writeText(url).then(
    () => showToast("已复制分享链接。链接包含当前笔记内容，请谨慎发送。"),
    () => showToast("复制失败，请手动复制地址栏链接")
  );
  history.replaceState(null, "", `#note=${data}`);
}

function decodeSharedNote() {
  const match = location.hash.match(/^#note=(.+)$/);
  if (!match) return;
  try {
    const note = normalizeNote(JSON.parse(decodeURIComponent(escape(atob(match[1])))));
    note.id = createId();
    note.title = `${note.title} 分享导入`;
    note.createdAt = Date.now();
    note.updatedAt = Date.now();
    state.notes.unshift(note);
    state.activeId = note.id;
    saveNotes();
    history.replaceState(null, "", location.pathname);
    showToast("已导入分享笔记");
  } catch {
    showToast("分享链接无法解析");
  }
}

async function pushCloud(options = {}) {
  return syncCloud({ manual: !options.silent, silent: Boolean(options.silent), forcePush: true, reason: "push" });
}

async function pullCloud() {
  return syncCloud({ manual: true, pullOnly: true, reason: "pull" });
}

async function forcePullCloud() {
  if (crdtAvailable()) {
    return syncCloud({ manual: true, pullOnly: true, forcePull: true, reason: "force-pull" });
  }

  const token = getSyncToken();
  if (!token) {
    showSyncMessage("请先填写同步 Token。");
    return false;
  }
  if (state.saveTimer) {
    clearTimeout(state.saveTimer);
    state.saveTimer = null;
  }
  state.savePendingNoteId = null;
  state.dirtyNoteIds.clear();
  writeSyncMeta({ pending: false, dirtyNoteIds: [], lastError: "" });
  if (!elements.autoSyncToggle.checked && !state.syncInFlight) {
    clearTimeout(state.autoSyncTimer);
  }
  localStorage.setItem(storageKeys.syncToken, token);
  state.syncInFlight = true;
  state.syncAction = "pulling";
  renderSyncMeta();
  showSyncMessage(t("syncRefreshing"));
  try {
    const remotePayload = await fetchCloudState(token);
    const remoteNotes = Array.isArray(remotePayload.notes) ? remotePayload.notes.map(normalizeNote) : [];
    const remoteFolders = Array.isArray(remotePayload.folders) ? remotePayload.folders : null;
    replaceNotesFromCloud(remoteNotes, { keepActiveId: true, folders: remoteFolders });
    const now = Date.now();
    clearSyncPending(Number(remotePayload.updatedAt) || now, { lastPullAt: now, lastCheckedAt: now });
    showSyncMessage(t("syncRefreshedAt").replace("{time}", formatTime(now)));
    showToast(t("syncRefreshedAt").replace("{time}", formatTime(now)));
    return true;
  } catch (error) {
    const message = `${t("syncFailed")}：${cloudErrorText(error)}`;
    writeSyncMeta({ lastError: message });
    renderSyncMeta();
    showSyncMessage(message);
    showToast(message);
    return false;
  } finally {
    state.syncInFlight = false;
    state.syncAction = "";
    renderSyncMeta();
    if (state.syncQueue.length) {
      const queued = state.syncQueue.shift();
      window.setTimeout(() => syncCloud(queued), 120);
    }
  }
}

function readSyncMeta() {
  try {
    return JSON.parse(localStorage.getItem(storageKeys.syncMeta) || "{}") || {};
  } catch {
    return {};
  }
}

function writeSyncMeta(patch) {
  const next = { ...readSyncMeta(), ...patch };
  localStorage.setItem(storageKeys.syncMeta, JSON.stringify(next));
  return next;
}

function markSyncPending(noteId = state.activeId) {
  if (!getSyncToken()) {
    renderSyncMeta();
    return;
  }
  markNoteDirty(noteId);
  writeSyncMeta({ pending: true, dirtyNoteIds: dirtyNoteIds(), lastError: "" });
  renderSyncMeta();
  scheduleAutoSync();
}

function clearSyncPending(remoteUpdatedAt = Date.now(), patch = {}, syncedSnapshots = null) {
  const now = Date.now();
  localStorage.setItem(storageKeys.lastSyncAt, String(now));
  clearSyncedDirtyNotes(syncedSnapshots);
  writeSyncMeta({
    pending: state.dirtyNoteIds.size > 0,
    dirtyNoteIds: dirtyNoteIds(),
    lastError: "",
    remoteUpdatedAt: Number(remoteUpdatedAt) || now,
    lastSyncedAt: now,
    ...patch
  });
}

function startCloudSync() {
  stopCloudSync();
  if (!getSyncToken() || !elements.autoSyncToggle.checked) {
    renderSyncMeta();
    return;
  }
  renderSyncMeta();
  state.syncStartupTimer = window.setTimeout(() => syncCloud({ silent: true, reason: "startup" }), 300);
  state.syncPollTimer = window.setInterval(() => {
    if (!document.hidden) syncCloud({ silent: true, pullOnly: true, reason: "poll" });
  }, SYNC_POLL_INTERVAL);
}

function stopCloudSync() {
  clearTimeout(state.autoSyncTimer);
  clearTimeout(state.syncStartupTimer);
  state.syncStartupTimer = null;
  if (state.syncPollTimer) {
    clearInterval(state.syncPollTimer);
    state.syncPollTimer = null;
  }
}

function cloudHeaders(token, includeBody = false) {
  const headers = { authorization: `Bearer ${token}` };
  if (includeBody) headers["content-type"] = "application/json";
  return headers;
}

async function fetchCloudState(token) {
  const response = await fetch(`./api/notes?t=${Date.now()}`, {
    cache: "no-store",
    headers: cloudHeaders(token)
  });
  if (!response.ok) throw new Error(await response.text());
  return response.json();
}

async function fetchCrdtState(token, since = 0) {
  const response = await fetch(`./api/notes?crdt=1&since=${Number(since) || 0}&t=${Date.now()}`, {
    cache: "no-store",
    headers: cloudHeaders(token)
  });
  if (!response.ok) throw new Error(await response.text());
  return response.json();
}

async function fetchAllCrdtState(token, since = 0) {
  let cursor = Math.max(0, Number(since) || 0);
  let mergedPayload = null;
  const allUpdates = [];

  for (let page = 0; page < 50; page += 1) {
    const payload = await fetchCrdtState(token, cursor);
    const updates = Array.isArray(payload.updates) ? payload.updates : [];
    mergedPayload = payload;
    allUpdates.push(...updates);

    const latestId = Number(payload.latestId) || 0;
    const lastId = Number(updates[updates.length - 1]?.id) || cursor;
    if (!updates.length || lastId >= latestId || lastId <= cursor) break;
    cursor = lastId;
  }

  return {
    ...(mergedPayload || { version: 2, latestId: 0, legacy: null }),
    updates: allUpdates
  };
}

async function postCrdtUpdates(token, updates) {
  const response = await fetch("./api/notes", {
    method: "POST",
    cache: "no-store",
    headers: cloudHeaders(token, true),
    body: JSON.stringify({ updates })
  });
  if (!response.ok) throw new Error(await response.text());
  return response.json();
}

async function putCloudState(token) {
  const response = await fetch("./api/notes", {
    method: "PUT",
    cache: "no-store",
    headers: cloudHeaders(token, true),
    body: JSON.stringify({ notes: syncableNotes(), folders: storedFolders(), updatedAt: Date.now() })
  });
  if (!response.ok) throw new Error(await response.text());
  return response.json();
}

function replaceNotesFromCloud(notes, options = {}) {
  const keepActiveId = options.keepActiveId !== false ? state.activeId : null;
  state.notes = notes.map(normalizeNote).sort((a, b) => Number(b.pinned) - Number(a.pinned) || noteVersion(b) - noteVersion(a));
  if (Array.isArray(options.folders)) setStoredFolders(options.folders);
  state.activeId = keepActiveId && state.notes.some((note) => note.id === keepActiveId && !isDeletedNote(note))
    ? keepActiveId
    : firstVisibleNote()?.id || null;
  ensureActiveNote();
  saveNotes();
  renderAll();
}

function legacyPayloadHasNotes(payload) {
  return Array.isArray(payload?.notes) && payload.notes.some((note) => !isDeletedNote(normalizeNote(note)));
}

function replaceStateFromLegacyPayload(payload) {
  state.crdtApplying = true;
  state.notes = Array.isArray(payload?.notes)
    ? payload.notes.map(normalizeNote).sort((a, b) => Number(b.pinned) - Number(a.pinned) || noteVersion(b) - noteVersion(a))
    : [];
  setStoredFolders(Array.isArray(payload?.folders) ? payload.folders : []);
  ensureActiveNote();
  saveNotes();
  state.crdtApplying = false;
  createCrdtDoc();
  state.crdtApplying = true;
  writeStateToCrdt({ force: true, origin: "seed" });
  state.crdtApplying = false;
  renderAll();
}

function fullCrdtUpdateBase64() {
  return bytesToBase64(window.Y.encodeStateAsUpdate(state.crdtDoc));
}

async function syncCrdtCloud(options = {}) {
  const token = getSyncToken();
  const manual = Boolean(options.manual);
  const silent = Boolean(options.silent);
  const forcePull = Boolean(options.forcePull);
  const pullOnly = Boolean(options.pullOnly) || forcePull;
  const reason = options.reason || (pullOnly ? "check" : "sync");

  if (!token) {
    if (manual) showSyncMessage("请先填写同步 Token。");
    renderSyncMeta();
    return;
  }
  if (!manual && !elements.autoSyncToggle.checked) return;
  if (state.syncInFlight) {
    state.syncQueue.push(options);
    return;
  }

  clearTimeout(state.autoSyncTimer);
  localStorage.setItem(storageKeys.syncToken, token);
  state.syncInFlight = true;
  state.syncAction = pullOnly ? "pulling" : "pushing";
  renderSyncMeta();
  if (!silent) showSyncMessage(forcePull ? t("syncRefreshing") : pullOnly ? t("syncPulling") : t("syncPushing"));

  let pushed = false;
  let pulled = false;
  try {
    if (forcePull) {
      state.crdtPendingUpdates = [];
      writeCrdtPendingUpdates();
      state.dirtyNoteIds.clear();
      writeSyncMeta({ pending: false, dirtyNoteIds: [], lastError: "" });
    }

    const since = forcePull ? 0 : Number(localStorage.getItem(storageKeys.crdtUpdateId) || 0);
    const remotePayload = await fetchAllCrdtState(token, since);
    const updates = Array.isArray(remotePayload.updates) ? remotePayload.updates : [];
    const latestId = Number(remotePayload.latestId) || 0;
    const localHasChanges = state.crdtPendingUpdates.length > 0 || dirtyNoteIds().length > 0 || Boolean(readSyncMeta().pending);

    if (forcePull) {
      if (updates.length) {
        resetCrdtFromUpdates(updates);
        localStorage.setItem(storageKeys.crdtUpdateId, String(latestId));
        pulled = true;
      } else if (legacyPayloadHasNotes(remotePayload.legacy)) {
        replaceStateFromLegacyPayload(remotePayload.legacy);
        const result = await postCrdtUpdates(token, [fullCrdtUpdateBase64()]);
        localStorage.setItem(storageKeys.crdtUpdateId, String(Number(result.latestId) || latestId));
        pushed = true;
        pulled = true;
      }
    } else {
      if (updates.length) {
        if (since === 0 && state.crdtSeedIsDefault && !localHasChanges) {
          resetCrdtFromUpdates(updates);
        } else {
          state.crdtApplying = true;
          updates.forEach((item) => {
            if (item?.update) window.Y.applyUpdate(state.crdtDoc, base64ToBytes(item.update), "remote");
          });
          state.crdtApplying = false;
          applyCrdtToState();
        }
        state.crdtSeedIsDefault = false;
        localStorage.setItem(storageKeys.crdtUpdateId, String(Number(updates[updates.length - 1]?.id) || latestId));
        pulled = true;
      } else if (since === 0 && latestId === 0 && legacyPayloadHasNotes(remotePayload.legacy)) {
        replaceStateFromLegacyPayload(remotePayload.legacy);
        state.crdtSeedIsDefault = false;
        state.crdtPendingUpdates = [fullCrdtUpdateBase64()];
        writeCrdtPendingUpdates();
        pulled = true;
      } else if (since === 0 && latestId === 0 && state.crdtPendingUpdates.length > 0) {
        state.crdtPendingUpdates = [fullCrdtUpdateBase64()];
        writeCrdtPendingUpdates();
      } else if (since === 0 && latestId === 0 && state.crdtPendingUpdates.length === 0 && !state.crdtSeedIsDefault) {
        state.crdtPendingUpdates = [fullCrdtUpdateBase64()];
        writeCrdtPendingUpdates();
      }
    }

    if (!pullOnly && state.crdtPendingUpdates.length) {
      const pending = [...state.crdtPendingUpdates];
      const result = await postCrdtUpdates(token, pending);
      state.crdtPendingUpdates = [];
      writeCrdtPendingUpdates();
      localStorage.setItem(storageKeys.crdtUpdateId, String(Number(result.latestId) || latestId));
      clearSyncPending(Number(result.updatedAt) || Date.now(), { lastPushAt: Date.now(), lastPullAt: pulled ? Date.now() : readSyncMeta().lastPullAt || 0 });
      pushed = true;
    } else if (forcePull || pulled) {
      clearSyncPending(Date.now(), { lastPullAt: Date.now(), lastCheckedAt: Date.now() });
    } else {
      writeSyncMeta({ pending: state.crdtPendingUpdates.length > 0, dirtyNoteIds: dirtyNoteIds(), lastError: "", lastCheckedAt: Date.now() });
    }

    renderSyncMeta();
    if (forcePull) {
      const message = t("syncRefreshedAt").replace("{time}", formatTime(Date.now()));
      showSyncMessage(message);
      showToast(message);
    } else if (pushed) {
      const message = t("syncPushedAt").replace("{time}", formatTime(Date.now()));
      showSyncMessage(message);
      if (!silent) showToast(message);
    } else if (pulled) {
      const message = t("syncPulledAt").replace("{time}", formatTime(Date.now()));
      showSyncMessage(message);
      if (!silent) showToast(message);
    } else if (manual) {
      const message = t("syncNoChange");
      showSyncMessage(message);
      showToast(message);
    }
  } catch (error) {
    const message = `${t("syncFailed")}：${cloudErrorText(error)}`;
    writeSyncMeta({ pending: state.crdtPendingUpdates.length > 0 || state.dirtyNoteIds.size > 0, dirtyNoteIds: dirtyNoteIds(), lastError: message });
    renderSyncMeta();
    if (!silent) {
      showSyncMessage(message);
      showToast(message);
    }
  } finally {
    state.syncInFlight = false;
    state.syncAction = "";
    renderSyncMeta();
    if (state.syncQueue.length) {
      const queued = state.syncQueue.shift();
      window.setTimeout(() => syncCloud(queued), 120);
    }
  }
}

async function syncCloud(options = {}) {
  if (crdtAvailable()) return syncCrdtCloud(options);

  const token = getSyncToken();
  const manual = Boolean(options.manual);
  const silent = Boolean(options.silent);
  const forcePush = Boolean(options.forcePush);
  const pullOnly = Boolean(options.pullOnly) && !forcePush;
  const reason = options.reason || (pullOnly ? "check" : "sync");

  if (!token) {
    if (manual) showSyncMessage("请先填写同步 Token。");
    renderSyncMeta();
    return;
  }
  if (!manual && !elements.autoSyncToggle.checked) return;
  if (state.syncInFlight) {
    state.syncQueue.push(options);
    return;
  }

  clearTimeout(state.autoSyncTimer);
  localStorage.setItem(storageKeys.syncToken, token);
  if (forcePush && !hasDirtyNotes()) markAllNotesDirty();
  const pendingBefore = hasDirtyNotes() || forcePush;
  const dirtySnapshot = Object.fromEntries(dirtyNoteIds().map((id) => [id, noteSignatureById(id)]));
  state.syncInFlight = true;
  state.syncAction = pullOnly ? "pulling" : "pushing";
  renderSyncMeta();
  if (!silent) showSyncMessage(pullOnly ? t("syncPulling") : t("syncPushing"));

  try {
    const remotePayload = await fetchCloudState(token);
    const remoteNotes = Array.isArray(remotePayload.notes) ? remotePayload.notes.map(normalizeNote) : [];
    const remoteFolders = Array.isArray(remotePayload.folders) ? remotePayload.folders : null;
    const remoteSignature = notesSignature(remoteNotes);
    let remoteUpdatedAt = Number(remotePayload.updatedAt) || Date.now();
    let pulled = false;
    let pushed = false;
    let blocked = false;

    if (pullOnly) {
      const result = applyCloudNotes(remotePayload, { allowReplace: reason === "startup" || reason === "open-note" || reason === "manual-pull" });
      pulled = result.changed;
      blocked = result.blocked;
    } else if (!pendingBefore && notesSignature() !== remoteSignature) {
      const result = applyCloudNotes(remotePayload, { allowReplace: reason === "startup" || reason === "open-note" });
      pulled = result.changed;
      blocked = result.blocked;
    }

    if (!pullOnly && !blocked && hasDirtyNotes()) {
      const pulledBeforePush = applyCloudNotes(remotePayload, { allowReplace: false });
      blocked = pulledBeforePush.blocked;
      const pushResult = await putCloudState(token);
      remoteUpdatedAt = Number(pushResult.updatedAt) || Date.now();
      pushed = true;
    }

    const now = Date.now();
    if (pushed) {
      clearSyncPending(remoteUpdatedAt, { lastPushAt: now, lastPullAt: pulled ? now : readSyncMeta().lastPullAt || 0 }, dirtySnapshot);
    } else if (pulled) {
      writeSyncMeta({ lastError: "", lastPullAt: now, remoteUpdatedAt, lastSyncedAt: now });
      localStorage.setItem(storageKeys.lastSyncAt, String(now));
    } else if (blocked) {
      writeSyncMeta({ pending: true, dirtyNoteIds: dirtyNoteIds(), lastError: "", remoteUpdatedAt });
    } else {
      writeSyncMeta({ lastError: "", remoteUpdatedAt, lastCheckedAt: now });
    }

    renderSyncMeta();
    if (blocked) {
      const message = t("syncBlockedDirty");
      showSyncMessage(message);
      if (!silent) showToast(message);
    } else if (pushed) {
      const message = t("syncPushedAt").replace("{time}", formatTime(Date.now()));
      showSyncMessage(message);
      showToast(message);
    } else if (pulled) {
      const message = t("syncPulledAt").replace("{time}", formatTime(Date.now()));
      showSyncMessage(message);
      showToast(message);
    } else if (manual) {
      const message = t("syncNoChange");
      showSyncMessage(message);
      showToast(message);
    } else if (!silent) {
      showSyncMessage(t("syncCheckedAt").replace("{time}", formatTime(Date.now())));
    }
  } catch (error) {
    const message = `${t("syncFailed")}：${cloudErrorText(error)}`;
    if (pendingBefore || forcePush) writeSyncMeta({ pending: true, dirtyNoteIds: dirtyNoteIds(), lastError: message });
    else writeSyncMeta({ lastError: message });
    renderSyncMeta();
    if (!silent) {
      showSyncMessage(message);
      showToast(message);
    }
  } finally {
    state.syncInFlight = false;
    state.syncAction = "";
    renderSyncMeta();
    if (state.syncQueue.length) {
      const queued = state.syncQueue.shift();
      window.setTimeout(() => syncCloud(queued), 120);
    }
  }
}

function clearSyncToken() {
  elements.syncTokenInput.value = "";
  stopCloudSync();
  localStorage.removeItem(storageKeys.syncToken);
  localStorage.removeItem(storageKeys.syncMeta);
  localStorage.removeItem(storageKeys.lastSyncAt);
  localStorage.setItem(storageKeys.autoSync, "0");
  elements.autoSyncToggle.checked = false;
  applyFolderSectionVisibility();
  renderFolderDatalist();
  renderExportFolderSelect();
  renderLists();
  renderSyncMeta();
  showSyncMessage(t("tokenCleared"));
}

function applyFolderSectionVisibility() {
  const enabled = folderManagementEnabled();
  if (elements.folderSection) {
    elements.folderSection.hidden = false;
  }
  if (elements.folderAddButton) elements.folderAddButton.hidden = !enabled;
  if (elements.folderInput) elements.folderInput.disabled = !enabled;
  state.selectedFolder = enabled ? canonicalSelectedFolder(state.selectedFolder) : "";
}

function getSyncToken() {
  return (elements.syncTokenInput.value || localStorage.getItem(storageKeys.syncToken) || "").trim();
}

function showSyncMessage(message) {
  elements.syncMessage.textContent = message;
}

function cloudErrorText(error) {
  const text = String(error?.message || error || "未知错误");
  if (text.includes("Failed to fetch")) return "接口不可用。Cloudflare Pages Functions 配好后才能使用。";
  if (text.includes("Missing D1")) return "Cloudflare D1 还没有绑定 NANSTAR_NOTES_DB。";
  if (text.includes("Missing NOTE_SYNC_TOKEN")) return "Cloudflare 环境变量 NOTE_SYNC_TOKEN 还没有配置。";
  if (text.includes("Unauthorized")) return "Token 不正确。";
  if (text.includes("Not found")) return "本地静态预览没有 /api/notes，部署到 Cloudflare 后可同步。";
  return text.slice(0, 160);
}

function persistAndRender(message, options = {}) {
  const dirtyId = options.dirtyNoteId || state.activeId;
  saveNotes();
  renderAll();
  setSaveStatus(getSyncToken() ? t("syncPending") : t("savedLocal"));
  markSyncPending(dirtyId);
  if (message) showToast(message);
}

function setSaveStatus(message) {
  elements.saveStatus.textContent = message;
}

function t(key) {
  return i18n[state.language]?.[key] || i18n.zh[key] || key;
}

function applyLanguage(language, initial = false) {
  const next = language === "en" ? "en" : "zh";
  state.language = next;
  localStorage.setItem(storageKeys.language, next);
  document.documentElement.lang = next === "en" ? "en" : "zh-CN";

  if (elements.languageToggleButton) {
    elements.languageToggleButton.textContent = next === "en" ? "中" : "EN";
    elements.languageToggleButton.title = next === "en" ? "切换到中文" : "Switch to English";
    elements.languageToggleButton.setAttribute("aria-label", next === "en" ? "切换到中文" : "Switch to English");
  }
  if (elements.searchInput) elements.searchInput.placeholder = t("searchPlaceholderShort");
  const newNoteTitle = document.getElementById("newNoteDialogTitle");
  if (newNoteTitle) newNoteTitle.textContent = t("newNoteDialogTitle");
  const newNoteFolderLabel = document.getElementById("newNoteFolderLabel");
  if (newNoteFolderLabel) newNoteFolderLabel.textContent = t("newNoteFolderLabel");
  if (elements.newNoteConfirmBtn) elements.newNoteConfirmBtn.textContent = t("create");
  if (elements.createdAt) elements.createdAt.textContent = t("noteCreated");
  if (elements.updatedAt) elements.updatedAt.textContent = t("noteUpdated");
  // Update filter tabs
  document.querySelectorAll('.filter-tab[data-filter="all"]').forEach(b => { b.childNodes[0].textContent = t("allNotesTab"); });
  document.querySelectorAll('.filter-tab[data-filter="favorite"]').forEach(b => { b.childNodes[0].textContent = t("favoritesTab"); });
  if (elements.editorSearchInput) elements.editorSearchInput.placeholder = t("editorSearchPlaceholder");
  if (elements.editorSearchPrevButton) {
    elements.editorSearchPrevButton.title = t("searchPrev");
    elements.editorSearchPrevButton.setAttribute("aria-label", t("searchPrev"));
  }
  if (elements.editorSearchNextButton) {
    elements.editorSearchNextButton.title = t("searchNext");
    elements.editorSearchNextButton.setAttribute("aria-label", t("searchNext"));
  }
  if (elements.editorSearchCloseButton) {
    elements.editorSearchCloseButton.title = t("searchClose");
    elements.editorSearchCloseButton.setAttribute("aria-label", t("searchClose"));
  }
  if (elements.newNoteButton) elements.newNoteButton.querySelector("span:last-child").textContent = t("newNote");
  if (elements.titleInput) elements.titleInput.placeholder = t("titlePlaceholder");
  if (elements.folderInput) elements.folderInput.placeholder = t("folderPlaceholder");
  if (elements.bodyInput) elements.bodyInput.placeholder = t("editorPlaceholder");
  if (elements.sidebarQuickNewButton) elements.sidebarQuickNewButton.title = t("newNote");
  if (elements.sidebarQuickNewButton) elements.sidebarQuickNewButton.setAttribute("aria-label", t("newNote"));
  if (elements.syncRefreshButton) {
    elements.syncRefreshButton.title = next === "en" ? "Refresh and overwrite local" : "从云端刷新并覆盖本地";
    elements.syncRefreshButton.setAttribute("aria-label", next === "en" ? "Refresh and overwrite local" : "从云端刷新并覆盖本地");
  }
  if (elements.topSyncButton) elements.topSyncButton.textContent = t("sync");
  const topbarMenuButton = document.querySelector(".topbar-menu-button");
  if (topbarMenuButton) {
    topbarMenuButton.title = t("moreActions");
    topbarMenuButton.setAttribute("aria-label", t("moreActions"));
  }
  applySidebarCollapsed(state.sidebarCollapsed);
  setMenuItemLabel(document.getElementById("topInstallButton"), t("installDesktop"));
  setMenuItemLabel(elements.importButton, t("import"));
  setMenuItemLabel(elements.exportButton, t("exportMenu"));
  setMenuItemLabel(elements.shareButton, t("share"));
  setMenuItemLabel(elements.deleteButton, t("delete"));
  setToolbarTitle('[data-command="undo"]', t("undo"));
  setToolbarTitle('[data-command="redo"]', t("redo"));
  setToolbarTitle('[data-wrap="**"]', t("bold"));
  setToolbarTitle('[data-wrap="`"]', t("inlineCode"));
  setToolbarTitle('[data-prefix="- "]', t("unorderedList"));
  setToolbarTitle('[data-prefix="1. "]', t("orderedList"));
  setToolbarTitle('[data-prefix="- [ ] "]', t("taskList"));
  setToolbarTitle('[data-prefix="> "]', t("quote"));
  setToolbarTitle('[data-block="code"]', t("codeBlock"));
  const insertMenu = document.querySelector(".toolbar-menu > summary");
  if (insertMenu) {
    insertMenu.title = t("insertSnippets");
    insertMenu.setAttribute("aria-label", t("insertSnippets"));
  }
  setMenuItemLabel(document.querySelector('[data-insert="path"]'), t("insertPathSnippet"));
  setMenuItemLabel(document.querySelector('[data-insert="command"]'), t("insertCommandSnippet"));
  setMenuItemLabel(document.querySelector('[data-insert="checklist"]'), t("insertChecklistSnippet"));
  if (elements.copyMarkdownButton) elements.copyMarkdownButton.textContent = t("copyCurrent");
  if (elements.duplicateButton) elements.duplicateButton.textContent = t("duplicate");
  if (elements.listStatus) elements.listStatus.textContent = `${sortedNotes().length} ${t("items")}`;
  const folderTitle = document.getElementById("folderSectionTitle");
  if (folderTitle) folderTitle.textContent = t("files");
  if (elements.folderAddButton) {
    elements.folderAddButton.title = t("newFolder");
    elements.folderAddButton.setAttribute("aria-label", t("newFolder"));
  }
  updateExportDialogText();
  renderBulkActionBar();
  const outlineHead = elements.outlinePanel?.querySelector(".outline-panel-head span");
  if (outlineHead) outlineHead.textContent = t("outlineTitle");
  const editorToolsTitle = document.getElementById("editorToolsTitle");
  if (editorToolsTitle) editorToolsTitle.textContent = t("editorTools");
  if (elements.editorTitle) elements.editorTitle.textContent = t("editorTitle");
  if (elements.previewTitle) elements.previewTitle.textContent = t("previewTitle");
  if (elements.pushCloudButton) elements.pushCloudButton.textContent = t("pushCloud");
  if (elements.pullCloudButton) elements.pullCloudButton.textContent = t("pullCloud");
  if (elements.logoutCloudButton) elements.logoutCloudButton.textContent = t("clearToken");
  if (elements.noteListTitle) {
    const title = document.getElementById("noteListTitle");
    if (title) title.textContent = t("noteListTitle");
  }
  const topTitle = document.querySelector(".topbar-title h2");
  if (topTitle) topTitle.textContent = t("workspaceTitle");
  const eyebrow = document.querySelector(".topbar-title .eyebrow");
  if (eyebrow) eyebrow.textContent = next === "en" ? "NanStar Note / Content Desk" : "NanStar Note / 内容工作台";
  const brandState = elements.cloudStatus;
  if (brandState && !localStorage.getItem(storageKeys.syncToken)) {
    brandState.textContent = t("localMode");
  }
  if (elements.searchClearButton) elements.searchClearButton.title = t("clearSearch");
  if (elements.searchClearButton) elements.searchClearButton.setAttribute("aria-label", t("clearSearch"));
  const syncModalEyebrow = document.getElementById("syncModalEyebrow");
  if (syncModalEyebrow) syncModalEyebrow.textContent = next === "en" ? "Cloudflare Sync" : "Cloudflare Sync";
  const syncModalTitle = document.getElementById("syncModalTitle");
  if (syncModalTitle) syncModalTitle.textContent = t("syncSettings");
  const syncModalCopy = document.getElementById("syncModalCopy");
  if (syncModalCopy) syncModalCopy.textContent = t("syncCopy");
  const syncTokenLabel = document.getElementById("syncTokenLabel");
  if (syncTokenLabel) syncTokenLabel.textContent = t("syncToken");
  const autoSyncLabel = document.getElementById("autoSyncLabel");
  if (autoSyncLabel) autoSyncLabel.textContent = t("autoSync");
  if (elements.syncMessage && !getSyncToken()) elements.syncMessage.textContent = t("syncLocalReady");
  renderFolderDatalist();
  renderLists();
  renderSystemNoteTitles();
  if (!initial) {
    renderAll();
    showToast(next === "en" ? "Switched to English" : "已切换为中文");
  }
}

function renderSystemNoteTitles() {
  const transfer = state.notes.find(isTransferAssistant);
  if (!transfer) return;
  transfer.title = t("transferAssistantTitle");
}

function toggleLanguage() {
  applyLanguage(state.language === "zh" ? "en" : "zh");
}

function updateExportDialogText() {
  const exportDialogTitle = document.getElementById("exportDialogTitle");
  if (exportDialogTitle) exportDialogTitle.textContent = t("exportDialogTitle");
  const exportCurrentTitle = document.getElementById("exportCurrentTitle");
  if (exportCurrentTitle) exportCurrentTitle.textContent = t("exportCurrentTitle");
  const exportCurrentCopy = document.getElementById("exportCurrentCopy");
  if (exportCurrentCopy) exportCurrentCopy.textContent = t("exportCurrentCopy");
  const exportFolderTitle = document.getElementById("exportFolderTitle");
  if (exportFolderTitle) exportFolderTitle.textContent = t("exportFolderTitle");
  const exportFolderCopy = document.getElementById("exportFolderCopy");
  if (exportFolderCopy) exportFolderCopy.textContent = t("exportFolderCopy");
  const exportAllTitle = document.getElementById("exportAllTitle");
  if (exportAllTitle) exportAllTitle.textContent = t("exportAllTitle");
  const exportAllCopy = document.getElementById("exportAllCopy");
  if (exportAllCopy) exportAllCopy.textContent = t("exportAllCopy");
  if (elements.exportFolderButton) elements.exportFolderButton.textContent = t("exportFolderConfirm");
}

function setMenuItemLabel(button, label) {
  if (!button) return;
  const textNode = button.querySelector("span:last-child");
  if (textNode) {
    textNode.textContent = label;
  } else {
    button.textContent = label;
  }
}

function setToolbarTitle(selector, label) {
  const button = document.querySelector(selector);
  if (!button) return;
  button.title = label;
  button.setAttribute("aria-label", label);
}

function readSplitRatio() {
  const stored = Number(localStorage.getItem(storageKeys.splitRatio));
  if (!stored || stored === 58) return DEFAULT_SPLIT_RATIO;
  return stored;
}

function openEditorSearch(query = "") {
  state.editorSearch.open = true;
  elements.editorFindBar.hidden = false;
  elements.editorSearchInput.value = query;
  state.editorSearch.query = query;
  refreshEditorSearchMatches();
  elements.editorSearchInput.focus();
  elements.editorSearchInput.select();
}

function closeEditorSearch() {
  state.editorSearch.open = false;
  state.editorSearch.query = "";
  state.editorSearch.matches = [];
  state.editorSearch.activeIndex = -1;
  elements.editorFindBar.hidden = true;
  elements.editorSearchInput.value = "";
  updateLineNumbers();
  elements.bodyInput.focus();
}

function handleEditorSearchInput() {
  state.editorSearch.query = elements.editorSearchInput.value;
  refreshEditorSearchMatches();
}

function handleEditorSearchKeydown(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    moveEditorSearch(event.shiftKey ? -1 : 1);
    return;
  }
  if (event.key === "Escape") {
    event.preventDefault();
    closeEditorSearch();
  }
}

function moveEditorSearch(direction) {
  if (!state.editorSearch.matches.length) return;
  const total = state.editorSearch.matches.length;
  const nextIndex = state.editorSearch.activeIndex === -1
    ? (direction > 0 ? 0 : total - 1)
    : (state.editorSearch.activeIndex + direction + total) % total;
  state.editorSearch.activeIndex = nextIndex;
  selectMatch(state.editorSearch.matches[nextIndex]);
  renderEditorSearchCount();
}

function refreshEditorSearchMatches() {
  const query = state.editorSearch.query.trim();
  const text = elements.bodyInput.value || "";
  const matches = [];

  if (query) {
    const source = text.toLowerCase();
    const needle = query.toLowerCase();
    let index = 0;
    while (index <= source.length) {
      const hit = source.indexOf(needle, index);
      if (hit === -1) break;
      matches.push({ start: hit, end: hit + query.length, line: getLineFromIndex(text, hit) });
      index = hit + Math.max(needle.length, 1);
    }
  }

  state.editorSearch.matches = matches;
  if (!matches.length) {
    state.editorSearch.activeIndex = -1;
  } else if (state.editorSearch.activeIndex < 0 || state.editorSearch.activeIndex >= matches.length) {
    state.editorSearch.activeIndex = 0;
  }
  updateLineNumbers();
  renderEditorSearchCount();
}

function renderEditorSearchCount() {
  if (!state.editorSearch.open) {
    elements.editorSearchCount.textContent = t("searchNoMatch");
    return;
  }
  const total = state.editorSearch.matches.length;
  if (!total) {
    elements.editorSearchCount.textContent = t("searchNoMatch");
    return;
  }
  const current = state.editorSearch.activeIndex >= 0 ? state.editorSearch.activeIndex + 1 : 1;
  elements.editorSearchCount.textContent = t("searchCount").replace("{current}", current).replace("{total}", total);
}

function selectMatch(match) {
  if (!match) return;
  const textarea = elements.bodyInput;
  textarea.focus();
  textarea.setSelectionRange(match.start, match.end);
  const lineHeight = parseFloat(getComputedStyle(textarea).lineHeight) || 22;
  textarea.scrollTop = Math.max(0, (match.line - 1) * lineHeight - textarea.clientHeight / 3);
  updateCurrentLineIndicator();
  syncLineNumberScroll();
}

function handleEditorCursorChange() {
  updateCurrentLineIndicator();
  if (!state.editorSearch.query.trim()) {
    renderEditorSearchCount();
  }
}

function updateCurrentLineIndicator() {
  const text = elements.bodyInput.value;
  const position = elements.bodyInput.selectionStart || 0;
  state.currentLine = getLineFromIndex(text, position);
  renderCurrentLineDecoration();
}

function updateLineNumberStyles() {
  const items = elements.lineNumbersTrack.querySelectorAll(".line-number");
  const hitLines = new Set(state.editorSearch.matches.map((match) => match.line));
  items.forEach((item) => {
    const line = Number(item.dataset.line || 0);
    item.classList.toggle("current", line === state.currentLine);
    item.classList.toggle("search-hit", hitLines.has(line));
  });
}

function syncEditorSearchState() {
  if (!elements.editorFindBar) return;
  if (!state.editorSearch.open) {
    elements.editorFindBar.hidden = true;
    elements.editorSearchCount.textContent = t("searchNoMatch");
    return;
  }
  elements.editorFindBar.hidden = false;
  renderEditorSearchCount();
}

function getLineStates() {
  const lines = elements.bodyInput.value.replace(/\r\n/g, "\n").split("\n");
  const hitLines = new Set(state.editorSearch.matches.map((match) => match.line));
  return lines.map((_, index) => ({
    searchHit: hitLines.has(index + 1)
  }));
}

function getLineFromIndex(text, index) {
  return text.slice(0, Math.max(0, index)).split("\n").length;
}

function applyToolbarAction(button) {
  if (button.dataset.command) {
    runNativeHistoryCommand(button.dataset.command);
    return;
  }

  if (button.dataset.insert) {
    insertSnippet(button.dataset.insert);
    return;
  }

  const textarea = elements.bodyInput;
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const value = textarea.value;
  const selected = value.slice(start, end);

  if (button.dataset.wrap) {
    const mark = button.dataset.wrap;
    toggleWrap(mark, mark);
  } else if (button.dataset.prefix) {
    toggleLinePrefix(button.dataset.prefix);
  } else if (button.dataset.block === "code") {
    toggleCodeBlock();
  } else if (button.dataset.block === "table") {
    insertTable();
  }

  window.setTimeout(updateActiveFromInputs, 0);
  textarea.focus();
}

/** Smart toggle: if selection is wrapped with mark, unwrap; else wrap */
function toggleWrap(prefix, suffix) {
  const textarea = elements.bodyInput;
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const value = textarea.value;

  // Expand selection to include word if nothing selected
  let selStart = start;
  let selEnd = end;
  if (selStart === selEnd) {
    const wordMatch = value.slice(0, selStart).match(/(\S+)$/);
    if (wordMatch) selStart -= wordMatch[1].length;
    const nextWord = value.slice(selEnd).match(/^(\S+)/);
    if (nextWord) selEnd += nextWord[1].length;
    if (selStart === selEnd) {
      // Nothing to wrap, just insert marks and place cursor
      replaceRange(selStart, selEnd, prefix + suffix);
      textarea.setSelectionRange(selStart + prefix.length, selStart + prefix.length);
      return;
    }
  } else {
    // Check if selection has wrapping whitespace - trim it
    const inner = value.slice(selStart, selEnd);
    const trimmed = inner.trim();
    const leading = inner.length - inner.trimStart().length;
    const trailing = inner.length - inner.trimEnd().length;
    selStart += leading;
    selEnd -= trailing;
  }

  const inner = value.slice(selStart, selEnd);
  const before = value.slice(0, selStart);
  const after = value.slice(selEnd);

  // Check if already wrapped
  const hasPrefix = before.endsWith(prefix);
  const hasSuffix = after.startsWith(suffix);

  if (hasPrefix && hasSuffix) {
    // Unwrap
    replaceRange(selStart - prefix.length, selEnd + suffix.length, inner);
    textarea.setSelectionRange(selStart - prefix.length, selEnd - prefix.length);
  } else {
    // Wrap
    replaceRange(selStart, selEnd, prefix + inner + suffix);
    textarea.setSelectionRange(selStart + prefix.length, selStart + prefix.length + inner.length);
  }
}

/** Toggle line prefix: if all selected lines start with prefix, remove it; else prepend it */
function toggleLinePrefix(prefix) {
  const textarea = elements.bodyInput;
  let start = textarea.selectionStart;
  let end = textarea.selectionEnd;
  const value = textarea.value;

  // Expand to line boundaries
  start = value.lastIndexOf("\n", start - 1) + 1;
  const nextBreak = value.indexOf("\n", end);
  if (start === end && nextBreak === -1) {
    // Single line, no selection
  }
  if (nextBreak !== -1) end = nextBreak;
  else end = value.length;

  const block = value.slice(start, end);
  const lines = block.split("\n");

  // Check if ALL non-empty lines already have the prefix
  const allHavePrefix = lines.every(line => line === "" || line.startsWith(prefix));
  let replacement;

  if (allHavePrefix) {
    // Remove prefix from all lines
    replacement = lines.map(line => line === "" ? line : line.slice(prefix.length)).join("\n");
  } else {
    // Add prefix to all non-empty lines
    replacement = lines.map(line => line === "" ? line : prefix + line).join("\n");
  }

  replaceRange(start, end, replacement);

  // Preserve selection
  const delta = replacement.length - block.length;
  textarea.setSelectionRange(start, start + replacement.length);
}

/** Toggle code block: wrap/unwrap selection with ```bash ... ``` */
function toggleCodeBlock() {
  const textarea = elements.bodyInput;
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const value = textarea.value;

  const selected = value.slice(start, end).trim() || "";

  // Check if selection is already inside a code block
  const before = value.slice(0, start);
  const after = value.slice(end);
  const codeFence = "```";

  // Check if preceded and followed by ``` on their own lines
  const fenceBefore = before.match(/(?:^|\n)```(?:\S*)\s*$/);
  const fenceAfter = after.match(/^\s*\n```/);

  if (fenceBefore && fenceAfter) {
    // Unwrap: remove the fences
    const fenceBeforeStart = start - fenceBefore[0].length + (fenceBefore[0].startsWith("\n") ? 0 : 0);
    const fenceBeforeText = fenceBefore[0];
    let cutStart = fenceBeforeStart;
    let cutEnd = end + fenceAfter[0].length;
    if (before.charAt(fenceBeforeStart - 1) === "\n") cutStart = fenceBeforeStart - 1;
    // Find actual fence positions
    const beforeLines = before.split("\n");
    let fenceLine = -1;
    for (let i = beforeLines.length - 1; i >= 0; i--) {
      if (beforeLines[i].startsWith("```")) { fenceLine = i; break; }
    }
    if (fenceLine >= 0) {
      const prefixLen = beforeLines.slice(0, fenceLine).join("\n").length + (fenceLine > 0 ? 1 : 0);
      cutStart = prefixLen;
    }
    const afterIdx = after.indexOf("\n```");
    if (afterIdx >= 0) {
      const extra = after.slice(afterIdx + 4).startsWith("\n") ? 5 : 4;
      cutEnd = end + afterIdx + extra;
    }
    replaceRange(cutStart, cutEnd, selected);
    textarea.setSelectionRange(cutStart, cutStart + selected.length);
  } else {
    // Wrap
    const lang = "bash";
    const wrap = `\n${codeFence}${lang}\n${selected}\n${codeFence}\n`;
    replaceRange(start, end, wrap);
    textarea.setSelectionRange(start + codeFence.length + lang.length + 2, start + codeFence.length + lang.length + 2 + selected.length);
  }
}

function handleEditorPaste(event) {
  const note = activeNote();
  const items = Array.from(event.clipboardData?.items || []);
  const imageItem = items.find((item) => item.kind === "file" && item.type.startsWith("image/"));
  if (!note || !imageItem) return;

  const file = imageItem.getAsFile();
  if (!file) return;
  event.preventDefault();

  if (file.size > MAX_PASTE_IMAGE_BYTES) {
    showToast(t("imageTooLarge"));
    return;
  }
  if (countMarkdownImages(note.body) >= MAX_TRANSFER_IMAGES) {
    showToast(`文件传输助手最多保存 ${MAX_TRANSFER_IMAGES} 张图片`);
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    const dataUrl = String(reader.result || "");
    if (!dataUrl.startsWith("data:image/")) {
      showToast(t("imagePasteFailed"));
      return;
    }
    if (note.mode !== "md") {
      note.mode = "md";
      note.previewVisible = true;
      note.editorSectionOpen = true;
    }
    const stamp = formatImageStamp(Date.now());
    const prefix = elements.bodyInput.selectionStart > 0 && !elements.bodyInput.value.slice(0, elements.bodyInput.selectionStart).endsWith("\n") ? "\n\n" : "";
    replaceRange(elements.bodyInput.selectionStart, elements.bodyInput.selectionEnd, `${prefix}![pasted image ${stamp}](${dataUrl})\n\n`);
    renderModeState();
    showToast(t("imagePasted"));
  };
  reader.onerror = () => showToast(t("imagePasteFailed"));
  reader.readAsDataURL(file);
}

function countMarkdownImages(value) {
  return String(value).match(/!\[[^\]]*\]\((?:data:image\/[^)]+|https?:\/\/[^)]+)\)/g)?.length || 0;
}

/** Replace a range in the textarea and fire input event */
function replaceRange(from, to, text) {
  const textarea = elements.bodyInput;
  textarea.setRangeText(text, from, to, "end");
  textarea.dispatchEvent(new Event("input", { bubbles: true }));
}

function updateLineNumbers() {
  const states = getLineStates();
  const total = Math.max(1, states.length);
  elements.lineNumbersTrack.innerHTML = Array.from({ length: total }, (_, index) => {
    const lineNumber = index + 1;
    const classes = ["line-number"];
    if (lineNumber === state.currentLine) classes.push("current");
    if (states[index]?.searchHit) classes.push("search-hit");
    return `<div class="${classes.join(" ")}" data-line="${lineNumber}">${lineNumber}</div>`;
  }).join("");
  syncLineNumberScroll();
  renderEditorSearchCount();
}

function syncLineNumberScroll() {
  const scrollTop = elements.bodyInput.scrollTop || 0;
  elements.lineNumbersTrack.style.transform = `translateY(${-scrollTop}px)`;
  renderCurrentLineDecoration();
}

function syncScrollState() {
  const note = activeNote();
  if (!note || note.mode !== "md" || state.previewFocus) return;
  syncPreviewScroll();
}

function syncPreviewScroll() {
  const note = activeNote();
  if (!note || note.mode !== "md" || state.previewFocus) return;
  const editorScrollable = elements.bodyInput.scrollHeight - elements.bodyInput.clientHeight;
  const previewScrollable = elements.previewContent.scrollHeight - elements.previewContent.clientHeight;
  if (editorScrollable <= 0 || previewScrollable <= 0) return;
  elements.previewContent.scrollTop = (elements.bodyInput.scrollTop / editorScrollable) * previewScrollable;
}

function syncEditorScroll() {
  const note = activeNote();
  if (!note || note.mode !== "md" || state.previewFocus) return;
  const editorScrollable = elements.bodyInput.scrollHeight - elements.bodyInput.clientHeight;
  const previewScrollable = elements.previewContent.scrollHeight - elements.previewContent.clientHeight;
  if (editorScrollable <= 0 || previewScrollable <= 0) return;
  elements.bodyInput.scrollTop = (elements.previewContent.scrollTop / previewScrollable) * editorScrollable;
  syncLineNumberScroll();
}

function bindSplitter() {
  let dragging = false;

  const move = (event) => {
    if (!dragging) return;
    const rect = elements.splitEditor.getBoundingClientRect();
    const percent = ((event.clientX - rect.left) / rect.width) * 100;
    applySplitRatio(percent);
  };

  const stop = () => {
    dragging = false;
    document.body.classList.remove("is-dragging-split");
  };

  elements.splitter.addEventListener("mousedown", (event) => {
    const note = activeNote();
    if (!note || note.mode !== "md" || state.previewFocus) return;
    dragging = true;
    document.body.classList.add("is-dragging-split");
    event.preventDefault();
  });

  window.addEventListener("mousemove", move);
  window.addEventListener("mouseup", stop);
}

function applySplitRatio(value) {
  const ratio = Math.max(32, Math.min(68, Number(value) || DEFAULT_SPLIT_RATIO));
  elements.splitEditor.style.setProperty("--split-ratio", `${ratio}%`);
  localStorage.setItem(storageKeys.splitRatio, String(ratio));
}

function jumpToLine(lineIndex, targetId) {
  const textarea = elements.bodyInput;
  const lines = textarea.value.replace(/\r\n/g, "\n").split("\n");
  const start = lines.slice(0, lineIndex).join("\n").length + (lineIndex > 0 ? 1 : 0);
  textarea.focus();
  textarea.setSelectionRange(start, start);
  const metrics = getEditorMetrics();
  textarea.scrollTop = Math.max(0, metrics.paddingTop + lineIndex * metrics.lineHeight - textarea.clientHeight / 3);
  updateCurrentLineIndicator();
  syncLineNumberScroll();

  if (targetId) {
    const target = document.getElementById(targetId);
    if (target) target.scrollIntoView({ block: "center", behavior: "smooth" });
  }
}

function getEditorMetrics() {
  const style = getComputedStyle(elements.bodyInput);
  const lineHeight = parseFloat(style.lineHeight) || 24;
  const paddingTop = parseFloat(style.paddingTop) || 0;
  const paddingBottom = parseFloat(style.paddingBottom) || 0;
  return { lineHeight, paddingTop, paddingBottom };
}

function renderCurrentLineDecoration() {
  const metrics = getEditorMetrics();
  const offset = Math.max(0, metrics.paddingTop + (state.currentLine - 1) * metrics.lineHeight - elements.bodyInput.scrollTop);
  elements.editorLineHighlight.style.transform = `translateY(${offset}px)`;
  elements.editorLineHighlight.style.height = `${metrics.lineHeight}px`;
  elements.editorLineHighlight.style.display = elements.bodyInput.value ? "block" : "none";
  updateLineNumberStyles();
}

function extractHeadings(markdown) {
  const counters = new Map();
  return markdown
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line, lineIndex) => {
      const match = line.match(/^(#{1,4})\s+(.+)$/);
      if (!match) return null;
      const text = match[2].trim();
      const slug = slugify(text);
      const seen = counters.get(slug) || 0;
      counters.set(slug, seen + 1);
      return {
        level: match[1].length,
        text,
        line: lineIndex,
        id: `heading-${slug}-${seen}`
      };
    })
    .filter(Boolean);
}

function renderMarkdown(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const headings = extractHeadings(markdown);
  const headingByLine = new Map(headings.map((heading) => [heading.line, heading]));
  const html = [];
  let inCode = false;
  let codeLanguage = "";
  let codeLines = [];
  let inList = false;
  let listType = "";
  let tableBuffer = [];

  const closeList = () => {
    if (!inList) return;
    html.push(`</${listType}>`);
    inList = false;
    listType = "";
  };

  const flushTable = () => {
    if (!tableBuffer.length) return;
    if (tableBuffer.length >= 2 && /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(tableBuffer[1])) {
      const rows = tableBuffer.filter((_, index) => index !== 1).map(parseTableRow);
      html.push("<table>");
      rows.forEach((row, index) => {
        if (index === 0) html.push("<thead><tr>");
        else if (index === 1) html.push("<tbody><tr>");
        else html.push("<tr>");
        row.forEach((cell) => html.push(index === 0 ? `<th>${inlineMarkdown(cell)}</th>` : `<td>${inlineMarkdown(cell)}</td>`));
        if (index === 0) html.push("</tr></thead>");
        else html.push("</tr>");
      });
      if (rows.length > 1) html.push("</tbody>");
      html.push("</table>");
    } else {
      tableBuffer.forEach((line) => html.push(`<p>${inlineMarkdown(line)}</p>`));
    }
    tableBuffer = [];
  };

  const flushCode = () => {
    const code = escapeHtml(codeLines.join("\n"));
    const label = escapeHtml(codeLanguage || "code");
    html.push(`
      <div class="code-card">
        <div class="code-head"><span>${label}</span><button class="code-copy" type="button">${t("codeCopy")}</button></div>
        <pre><code>${code}</code></pre>
      </div>
    `);
    codeLines = [];
    codeLanguage = "";
  };

  lines.forEach((rawLine, lineIndex) => {
    const line = rawLine;
    const fence = line.trim().match(/^```(\S*)/);
    if (fence) {
      flushTable();
      closeList();
      if (!inCode) {
        inCode = true;
        codeLanguage = fence[1] || "code";
      } else {
        flushCode();
        inCode = false;
      }
      return;
    }

    if (inCode) {
      codeLines.push(line);
      return;
    }

    if (/^\s*\|.+\|\s*$/.test(line)) {
      closeList();
      tableBuffer.push(line);
      return;
    }
    flushTable();

    if (!line.trim()) {
      closeList();
      return;
    }

    const heading = headingByLine.get(lineIndex);
    if (heading) {
      closeList();
      const level = Math.min(heading.level, 4);
      html.push(`<h${level} id="${heading.id}">${inlineMarkdown(heading.text)}</h${level}>`);
      return;
    }

    const quote = line.match(/^>\s?(.*)$/);
    if (quote) {
      closeList();
      html.push(`<blockquote>${inlineMarkdown(quote[1])}</blockquote>`);
      return;
    }

    const task = line.match(/^\s*-\s+\[( |x|X)\]\s+(.+)$/);
    if (task) {
      if (!inList || listType !== "ul") {
        closeList();
        html.push("<ul>");
        inList = true;
        listType = "ul";
      }
      const checked = task[1].toLowerCase() === "x" ? "checked" : "";
      html.push(`<li class="task"><input type="checkbox" disabled ${checked}> ${inlineMarkdown(task[2])}</li>`);
      return;
    }

    const unordered = line.match(/^\s*[-*]\s+(.+)$/);
    if (unordered) {
      if (!inList || listType !== "ul") {
        closeList();
        html.push("<ul>");
        inList = true;
        listType = "ul";
      }
      html.push(`<li>${inlineMarkdown(unordered[1])}</li>`);
      return;
    }

    const ordered = line.match(/^\s*\d+\.\s+(.+)$/);
    if (ordered) {
      if (!inList || listType !== "ol") {
        closeList();
        html.push("<ol>");
        inList = true;
        listType = "ol";
      }
      html.push(`<li>${inlineMarkdown(ordered[1])}</li>`);
      return;
    }

    closeList();
    html.push(`<p>${inlineMarkdown(line)}</p>`);
  });

  flushTable();
  closeList();
  if (inCode) flushCode();
  return html.join("\n") || `<p class="empty-state compact">${t("markdownEmpty")}</p>`;
}

function inlineMarkdown(text) {
  const images = [];
  const links = [];
  let html = escapeHtml(text);

  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_, alt, url) => {
    if (!isSafeImageUrl(url)) return _;
    const token = `@@NANSTAR_IMAGE_${images.length}@@`;
    images.push(`
      <figure class="preview-image-card">
        <button class="preview-copy-image" type="button" data-src="${escapeAttribute(url)}" title="复制图片" aria-label="复制图片"></button>
        <img src="${escapeAttribute(url)}" alt="${escapeAttribute(alt)}" loading="lazy" />
      </figure>
    `);
    return token;
  });

  html = html.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, (_, label, url) => {
    const token = `@@NANSTAR_LINK_${links.length}@@`;
    links.push(`<a href="${url}" target="_blank" rel="noreferrer">${label}</a>`);
    return token;
  });
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noreferrer">$1</a>');
  images.forEach((image, index) => {
    html = html.replace(`@@NANSTAR_IMAGE_${index}@@`, image);
  });
  links.forEach((link, index) => {
    html = html.replace(`@@NANSTAR_LINK_${index}@@`, link);
  });
  return html;
}

function isSafeImageUrl(url) {
  return /^data:image\/(?:png|jpe?g|gif|webp);base64,[a-z0-9+/=]+$/i.test(url)
    || /^https?:\/\/[^\s<>"']+$/i.test(url);
}

async function copyPreviewImage(src) {
  if (!src) throw new Error("empty");
  if (src.startsWith("data:image/")) {
    const blob = dataUrlToBlob(src);
    if (navigator.clipboard?.write && globalThis.ClipboardItem) {
      await navigator.clipboard.write([new ClipboardItem({ [blob.type || "image/png"]: blob })]);
      return;
    }
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(src);
      return;
    }
    throw new Error("clipboard");
  }
  try {
    const response = await fetch(src, { mode: "cors" });
    if (!response.ok) throw new Error("fetch failed");
    const blob = await response.blob();
    if (!blob.type.startsWith("image/")) throw new Error("not image");
    if (navigator.clipboard?.write && globalThis.ClipboardItem) {
      await navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);
      return;
    }
  } catch {
    // fall through to text copy
  }
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(src);
    return;
  }
  throw new Error("clipboard");
}

function dataUrlToBlob(dataUrl) {
  const [meta, base64] = dataUrl.split(",");
  const mime = (meta.match(/data:([^;]+)/)?.[1]) || "image/png";
  const binary = atob(base64 || "");
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return new Blob([bytes], { type: mime });
}

function formatMarkdownExport(note) {
  const parts = [];
  parts.push(`# ${note.title}`);
  if (note.folder) parts.push(`> 文件夹：${note.folder}`);
  parts.push("");
  parts.push(note.body.trimEnd());
  return parts.join("\n").trim() + "\n";
}

function parseTableRow(line) {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/`/g, "&#096;");
}

function excerpt(value) {
  return String(value)
    .replace(/[#>*`\-[\]]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 120) || "空白笔记";
}

function countWords(value) {
  return String(value).replace(/\s+/g, "").length;
}

function countLines(value) {
  return String(value).split(/\r\n|\r|\n/).length;
}

function formatDate(value) {
  return new Intl.DateTimeFormat("zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(value));
}

function formatTime(value) {
  return new Intl.DateTimeFormat("zh-CN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }).format(new Date(value));
}

function formatBytes(value) {
  const bytes = Math.max(0, Number(value) || 0);
  if (bytes < 1024) return `${bytes} B`;
  const units = ["KB", "MB", "GB"];
  let size = bytes / 1024;
  let unitIndex = 0;
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex += 1;
  }
  const digits = size >= 10 || Number.isInteger(size) ? 0 : 1;
  return `${size.toFixed(digits)} ${units[unitIndex]}`;
}

function formatShortDate(value) {
  const date = new Date(value);
  const now = new Date();
  if (date.toDateString() === now.toDateString()) {
    return new Intl.DateTimeFormat("zh-CN", { hour: "2-digit", minute: "2-digit" }).format(date);
  }
  return new Intl.DateTimeFormat("zh-CN", { month: "2-digit", day: "2-digit" }).format(date);
}

function formatFileDate(value) {
  const date = new Date(value);
  const pad = (number) => String(number).padStart(2, "0");
  return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}-${pad(date.getHours())}${pad(date.getMinutes())}`;
}

function formatImageStamp(value) {
  const date = new Date(value);
  const pad = (number) => String(number).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}-${pad(date.getMinutes())}-${pad(date.getSeconds())}`;
}

function safeFileName(value) {
  return String(value).replace(/[\\/:*?"<>|]/g, "_").slice(0, 80) || "note";
}

function slugify(value) {
  const slug = String(value)
    .trim()
    .toLowerCase()
    .replace(/[^\w\u4e00-\u9fa5]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug || "section";
}

function createId() {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
  return `note-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function downloadText(filename, text, type) {
  const blob = new Blob([text], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => elements.toast.classList.remove("show"), 2400);
}
