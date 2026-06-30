const storageKeys = {
  notes: "nanstar-note-notes",
  activeNote: "nanstar-note-active",
  syncToken: "nanstar-note-sync-token",
  lastSyncAt: "nanstar-note-last-sync-at",
  autoSync: "nanstar-note-auto-sync",
  splitRatio: "nanstar-note-split-ratio",
  sidebarCollapsed: "nanstar-note-sidebar-collapsed",
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
    import: "导入",
    exportCurrent: "导出当前",
    share: "分享",
    delete: "删除",
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
    clearAll: "全部",
    searchPlaceholder: "搜索标题、正文、文件夹",
    editorSearchPlaceholder: "查找当前笔记内容",
    searchCount: "{current} / {total}",
    searchNoMatch: "0 / 0",
    currentLine: "当前行",
    lines: "行",
    characters: "字",
    noSearchMatch: "未找到匹配项",
    markdownMode: "Markdown 结构化模式",
    txtMode: "TXT 纯文本模式",
    showPreview: "显示预览",
    hidePreview: "隐藏预览",
    focusPreview: "专注预览",
    exitFocus: "退出专注",
    collapseSection: "收起",
    expandSection: "展开",
    expanded: "展开",
    collapsed: "折叠",
    noNotes: "没有匹配的笔记",
    txtOutlineEmpty: "TXT 模式不显示目录",
    noHeadings: "暂无标题",
    cloudAuto: "云同步 / 自动",
    cloudReady: "云同步已配置",
    localMode: "本地模式",
    local: "本地",
    cloudUnsynced: "云端未同步",
    synced: "已同步",
    syncSettings: "同步设置",
    syncCopy: "使用 Cloudflare Pages Functions + D1 保存云端笔记。客户电脑建议使用无痕窗口，离开时清除 Token。",
    syncToken: "同步 Token",
    autoSync: "编辑后自动推送到云端",
    pushCloud: "推送到云端",
    pullCloud: "从云端拉取并合并",
    clearToken: "清除 Token",
    editorSearchLabel: "查找",
    modeTxt: "TXT",
    modeMd: "MD",
    items: "条",
    inbox: "收件箱",
    newFolder: "新建文件夹",
    renameFolder: "重命名文件夹",
    deleteFolder: "删除",
    folderNamePrompt: "输入文件夹名称",
    folderRenamePrompt: "输入新名称",
    confirmDeleteFolder: "确定要删除文件夹「{name}」吗？其中的笔记将移回收件箱。",
    folderExists: "文件夹已存在",
    outlineTitle: "目录",
    outlineEmpty: "暂无标题",
  },
  en: {
    workspaceTitle: "Content Desk",
    newNote: "New Note",
    titlePlaceholder: "Write a clear title",
    folderPlaceholder: "Folder, e.g. WK / Client Site",
    editorPlaceholder: "Plain text works well for paths, checklists, and command notes; Markdown is better for structured docs. Ctrl+Z / Ctrl+Y keep the browser's native editing flow.",
    sync: "Sync",
    import: "Import",
    exportCurrent: "Export Current",
    share: "Share",
    delete: "Delete",
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
    clearAll: "All",
    searchPlaceholder: "Search title, body, folder",
    editorSearchPlaceholder: "Find in current note",
    searchCount: "{current} / {total}",
    searchNoMatch: "0 / 0",
    currentLine: "Current line",
    lines: "lines",
    characters: "chars",
    noSearchMatch: "No matches",
    markdownMode: "Markdown mode",
    txtMode: "Plain text mode",
    showPreview: "Show preview",
    hidePreview: "Hide preview",
    focusPreview: "Focus preview",
    exitFocus: "Exit focus",
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
    syncSettings: "Sync Settings",
    syncCopy: "Use Cloudflare Pages Functions + D1 to store notes in the cloud. On client computers, use an incognito window and clear the token when leaving.",
    syncToken: "Sync Token",
    autoSync: "Auto push after editing",
    pushCloud: "Push to Cloud",
    pullCloud: "Pull & Merge",
    clearToken: "Clear Token",
    editorSearchLabel: "Find",
    modeTxt: "TXT",
    modeMd: "MD",
    items: "items",
    inbox: "Inbox",
    newFolder: "New Folder",
    renameFolder: "Rename Folder",
    deleteFolder: "Delete",
    folderNamePrompt: "Enter folder name",
    folderRenamePrompt: "Enter new name",
    confirmDeleteFolder: 'Delete folder "{name}"? Notes will move to Inbox.',
    folderExists: "Folder already exists",
    outlineTitle: "Outline",
    outlineEmpty: "No headings",
  }
};

const templates = {
  txt: {
    title: "未命名 TXT",
    mode: "txt",
    folder: "收件箱",
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
  saveTimer: null,
  autoSyncTimer: null,
  syncInFlight: false,
  contextMenuFolder: null,
  contextMenuNoteId: null
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const elements = {
  appShell: $(".app-shell"),
  sidebar: $(".sidebar"),
  cloudStatus: $("#cloudStatus"),
  sidebarToggleButton: $("#sidebarToggleButton"),
  sidebarQuickNewButton: $("#sidebarQuickNewButton"),
  newNoteButton: $("#newNoteButton"),
  syncButton: $("#syncButton"),
  topSyncButton: $("#topSyncButton"),
  searchInput: $("#searchInput"),
  languageToggleButton: $("#languageToggleButton"),
  folderSection: $("#folderSection"),
  folderList: $("#folderList"),
  folderAddButton: $("#folderAddButton"),
  folderContextMenu: $("#folderContextMenu"),
  noteContextMenu: $("#noteContextMenu"),
  folderDatalist: $("#folderDatalist"),
  filterTabs: $$(".filter-tab"),
  searchClearButton: $("#searchClearButton"),
  newNoteDialog: $("#newNoteDialog"),
  newNoteFolderSelect: $("#newNoteFolderSelect"),
  newNoteConfirmBtn: $("#newNoteConfirmBtn"),
  floatingOutline: $("#floatingOutline"),
  outlinePanel: $("#outlinePanel"),
  outlineDots: $("#outlineDots"),
  outlinePanelBody: $("#outlinePanelBody"),
  noteList: $("#noteList"),
  listStatus: $("#listStatus"),
  editorCard: $("#editorCard"),
  editorSection: $("#editorSection"),
  editorSectionState: $("#editorSectionState"),
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
  editorLineHighlight: $("#editorLineHighlight"),
  textShell: $("#textShell"),
  bodyInput: $("#bodyInput"),
  previewPane: $("#previewPane"),
  previewContent: $("#previewContent"),
  previewFocusButton: $("#previewFocusButton"),
  modeHint: $("#modeHint"),
  saveStatus: $("#saveStatus"),
  syncState: $("#syncState"),
  wordCount: $("#wordCount"),
  createdAt: $("#createdAt"),
  updatedAt: $("#updatedAt"),
  importButton: $("#importButton"),
  exportButton: $("#exportButton"),
  shareButton: $("#shareButton"),
  deleteButton: $("#deleteButton"),
  copyMarkdownButton: $("#copyMarkdownButton"),
  downloadNoteButton: $("#downloadNoteButton"),
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
  state.notes = loadNotes();
  state.activeId = localStorage.getItem(storageKeys.activeNote) || state.notes[0]?.id || null;
  elements.syncTokenInput.value = localStorage.getItem(storageKeys.syncToken) || "";
  elements.autoSyncToggle.checked = localStorage.getItem(storageKeys.autoSync) === "1";
  applyLanguage(state.language, true);
  applySplitRatio(Number(localStorage.getItem(storageKeys.splitRatio)) || 58);
  applySidebarCollapsed(state.sidebarCollapsed);

  decodeSharedNote();
  bindEvents();
  ensureActiveNote();
  renderAll();
  setSaveStatus("已保存本地");
}

function bindEvents() {
  elements.newNoteButton.addEventListener("click", () => openNewNoteDialog());
  elements.sidebarToggleButton.addEventListener("click", toggleSidebar);
  elements.sidebarQuickNewButton?.addEventListener("click", () => openNewNoteDialog());
  elements.languageToggleButton?.addEventListener("click", toggleLanguage);
  elements.searchInput.addEventListener("input", (event) => {
    state.query = event.target.value.trim().toLowerCase();
    if (elements.searchClearButton) elements.searchClearButton.hidden = !state.query;
    renderLists();
  });
  if (elements.searchClearButton) {
    elements.searchClearButton.addEventListener("click", () => {
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
  if (elements.folderSection) elements.folderSection.addEventListener("toggle", () => {
    if (elements.folderSection.open) renderFolderDatalist();
  });

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
        const note = state.notes.find(n => n.id === noteId);
        if (!note) return;
        if (action === "pin") { note.pinned = !note.pinned; persistAndRender(note.pinned ? "已置顶" : "已取消置顶"); }
        else if (action === "favorite") { note.favorite = !note.favorite; persistAndRender(note.favorite ? "已加星标" : "已取消星标"); }
        else if (action === "duplicate") duplicateNoteById(noteId);
        else if (action === "export") exportNoteById(noteId);
        else if (action === "delete") deleteNoteById(noteId);
      });
    });
  }

  document.querySelectorAll(".nav-section").forEach((section) => {
    section.open = false;
  });

  elements.titleInput.addEventListener("input", updateActiveFromInputs);
  elements.folderInput.addEventListener("input", updateActiveFromInputs);
  elements.bodyInput.addEventListener("input", updateActiveFromInputs);
  elements.bodyInput.addEventListener("scroll", syncLineNumberScroll);
  elements.bodyInput.addEventListener("keyup", handleEditorCursorChange);
  elements.bodyInput.addEventListener("click", handleEditorCursorChange);
  elements.bodyInput.addEventListener("select", handleEditorCursorChange);
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
    if (button) applyToolbarAction(button);
  });
  bindSplitter();

  // New note dialog
  if (elements.newNoteConfirmBtn) {
    elements.newNoteConfirmBtn.addEventListener("click", () => {
      const folder = elements.newNoteFolderSelect?.value || "收件箱";
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
  elements.downloadNoteButton.addEventListener("click", exportBackupJson);
  elements.exportButton.addEventListener("click", exportCurrentNote);
  elements.importButton.addEventListener("click", () => elements.importFileInput.click());
  elements.importFileInput.addEventListener("change", importFile);
  elements.shareButton.addEventListener("click", createShareLink);

  elements.previewContent.addEventListener("click", (event) => {
    const button = event.target.closest(".code-copy");
    if (!button) return;
    const code = button.closest(".code-card")?.querySelector("code")?.innerText || "";
    navigator.clipboard.writeText(code).then(
      () => showToast("已复制代码块"),
      () => showToast("当前浏览器不允许复制")
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

  [elements.syncButton, elements.topSyncButton].forEach((button) => {
    button.addEventListener("click", () => {
      elements.syncDialog.showModal();
      elements.syncTokenInput.focus();
      elements.syncTokenInput.select();
    });
  });

  elements.pushCloudButton.addEventListener("click", () => pushCloud());
  elements.pullCloudButton.addEventListener("click", pullCloud);
  elements.logoutCloudButton.addEventListener("click", clearSyncToken);
  elements.syncTokenInput.addEventListener("input", () => {
    localStorage.setItem(storageKeys.syncToken, elements.syncTokenInput.value.trim());
    renderSyncMeta();
  });
  elements.autoSyncToggle.addEventListener("change", () => {
    localStorage.setItem(storageKeys.autoSync, elements.autoSyncToggle.checked ? "1" : "0");
    renderSyncMeta();
    if (elements.autoSyncToggle.checked) scheduleAutoSync();
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
      saveNotes();
      setSaveStatus("已保存本地");
      showToast("已保存到浏览器本地");
    }
    if ((event.ctrlKey || event.metaKey) && key === "n") {
      event.preventDefault();
      createNote("txt");
    }
  });

  window.addEventListener("beforeunload", saveNotes);
}

function loadNotes() {
  try {
    const raw = localStorage.getItem(storageKeys.notes);
    if (!raw) return defaultNotes.map(normalizeNote);
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) return defaultNotes.map(normalizeNote);
    return parsed.map(normalizeNote);
  } catch {
    return defaultNotes.map(normalizeNote);
  }
}

function normalizeNote(note) {
  const body = String(note.body || "");
  return {
    id: note.id || createId(),
    title: note.title || "未命名笔记",
    mode: normalizeMode(note.mode, body),
    folder: String(note.folder || "收件箱").trim() || "收件箱",
    body,
    pinned: Boolean(note.pinned),
    favorite: Boolean(note.favorite),
    editorSectionOpen: typeof note.editorSectionOpen === "boolean" ? note.editorSectionOpen : normalizeMode(note.mode, body) === "md",
    previewVisible: note.previewVisible !== false,
    createdAt: Number(note.createdAt) || Date.now(),
    updatedAt: Number(note.updatedAt) || Date.now()
  };
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
  localStorage.setItem(storageKeys.notes, JSON.stringify(state.notes));
  if (state.activeId) localStorage.setItem(storageKeys.activeNote, state.activeId);
}

function scheduleSave(message = "已保存本地") {
  setSaveStatus("保存中...");
  clearTimeout(state.saveTimer);
  state.saveTimer = window.setTimeout(() => {
    saveNotes();
    setSaveStatus(message);
    scheduleAutoSync();
  }, 240);
}

function scheduleAutoSync() {
  clearTimeout(state.autoSyncTimer);
  if (!elements.autoSyncToggle.checked || !getSyncToken() || state.syncInFlight) return;
  state.autoSyncTimer = window.setTimeout(() => {
    pushCloud({ silent: true });
  }, 1800);
}

function updateActiveFromInputs() {
  const note = activeNote();
  if (!note) return;
  note.title = elements.titleInput.value.trimStart() || "未命名笔记";
  note.folder = elements.folderInput.value.trim() || "收件箱";
  note.body = elements.bodyInput.value;
  note.updatedAt = Date.now();

  scheduleSave();
  updateLineNumbers();
  renderPreview();
  renderFloatingOutline();
  renderFolderDatalist();
  renderLists();
  renderSyncMeta();
  syncEditorSearchState();
}

function activeNote() {
  return state.notes.find((note) => note.id === state.activeId) || null;
}

function ensureActiveNote() {
  if (!state.notes.length) {
    state.notes.push(createNoteObject("txt"));
  }
  if (!activeNote()) {
    state.activeId = state.notes[0].id;
  }
}

function renderAll() {
  renderFilterState();
  renderEditor();
  renderPreview();
  renderFloatingOutline();
  renderLists();
  renderFolderDatalist();
  renderSyncMeta();
}

function renderEditor() {
  const note = activeNote();
  if (!note) return;
  if (note.mode !== "md") state.previewFocus = false;

  elements.titleInput.value = note.title;
  elements.folderInput.value = note.folder;
  elements.bodyInput.value = note.body;

  if (elements.pinButton) {
    elements.pinButton.classList.toggle("active", note.pinned);
    elements.pinButton.textContent = note.pinned ? "📌 已置顶" : "📌 置顶";
    elements.pinButton.title = note.pinned ? "取消置顶" : "置顶";
  }
  if (elements.favoriteButton) {
    elements.favoriteButton.classList.toggle("active", note.favorite);
    elements.favoriteButton.textContent = note.favorite ? "★ 已收藏" : "★ 收藏";
    elements.favoriteButton.title = note.favorite ? "取消星标" : "星标";
  }

  elements.modeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === note.mode);
  });

  renderModeState();
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
  elements.togglePreviewButton.textContent = previewVisible && !focused ? t("hidePreview") : t("showPreview");
  elements.togglePreviewButton.classList.toggle("active", previewVisible && !focused);
  elements.togglePreviewButton.disabled = !isMarkdown;
  elements.toolbar.querySelectorAll(".md-tool, [data-insert]").forEach((button) => {
    button.hidden = !isMarkdown;
  });
  elements.togglePreviewButton.hidden = !isMarkdown;
  elements.previewFocusButton.hidden = !isMarkdown;
  elements.previewFocusButton.textContent = focused ? "✕" : "⤢";
  elements.previewFocusButton.title = focused ? t("exitFocus") : t("focusPreview");
  elements.previewPane.hidden = !previewVisible && !focused;
  elements.editorSection.open = Boolean(note.editorSectionOpen);
  if (elements.editorSectionState) elements.editorSectionState.textContent = isMarkdown
    ? `${t("modeMd")} · ${elements.editorSection.open ? t("collapseSection") : t("expandSection")}`
    : `${t("modeTxt")} · ${elements.editorSection.open ? t("collapseSection") : t("expandSection")}`;
  elements.splitEditor.style.setProperty("--split-ratio", `${Number(localStorage.getItem(storageKeys.splitRatio)) || 58}%`);
  syncScrollState();
  syncEditorSearchState();
}

function renderPreview() {
  const note = activeNote();
  const body = note?.body || "";
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
  const names = new Set(state.notes.map(n => n.folder));
  return [...names].sort((a, b) => a.localeCompare(b, "zh-CN"));
}

function renderFolderDatalist() {
  if (!elements.folderDatalist) return;
  elements.folderDatalist.innerHTML = getFolderNames()
    .map(name => `<option value="${escapeAttribute(name)}"></option>`)
    .join("");
}

function createFolder() {
  let name = (window.prompt(t("folderNamePrompt"), "") || "").trim();
  if (!name) return;
  if (getFolderNames().includes(name)) {
    showToast(t("folderExists"));
    return;
  }
  state.selectedFolder = name;
  renderLists();
  renderFolderDatalist();
  showToast(`已创建文件夹「${name}」`);
}

function renameFolder(oldName) {
  const newName = (window.prompt(t("folderRenamePrompt"), oldName) || "").trim();
  if (!newName || newName === oldName) return;
  const otherNames = getFolderNames().filter(n => n !== oldName);
  if (otherNames.includes(newName)) {
    showToast(t("folderExists"));
    return;
  }
  state.notes.forEach(note => {
    if (note.folder === oldName) note.folder = newName;
  });
  if (state.selectedFolder === oldName) state.selectedFolder = newName;
  saveNotes();
  renderLists();
  renderFolderDatalist();
  renderEditor();
  showToast(`已重命名为「${newName}」`);
}

function deleteFolder(name) {
  if (name === "收件箱") {
    showToast("收件箱是默认文件夹，不能删除。");
    return;
  }
  const confirmed = window.confirm(
    t("confirmDeleteFolder").replace("{name}", name)
  );
  if (!confirmed) return;
  state.notes.forEach(note => {
    if (note.folder === name) note.folder = "收件箱";
  });
  if (state.selectedFolder === name) state.selectedFolder = "";
  saveNotes();
  renderAll();
  renderFolderDatalist();
  showToast(`已删除文件夹「${name}」`);
}

function showFolderContextMenu(x, y) {
  const menu = elements.folderContextMenu;
  if (!menu) return;
  menu.hidden = false;
  menu.style.left = `${Math.min(x, window.innerWidth - 160)}px`;
  menu.style.top = `${Math.min(y, window.innerHeight - 100)}px`;
  const deleteBtn = menu.querySelector('[data-action="delete"]');
  if (deleteBtn) {
    const isInbox = state.contextMenuFolder === "收件箱";
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
  menu.hidden = false;
  menu.style.left = `${Math.min(x, window.innerWidth - 170)}px`;
  menu.style.top = `${Math.min(y, window.innerHeight - 260)}px`;
  const note = state.notes.find(n => n.id === state.contextMenuNoteId);
  if (note) {
    const pinItem = menu.querySelector('[data-action="pin"]');
    if (pinItem) pinItem.textContent = note.pinned ? '📌 取消置顶' : '📌 置顶';
    const favItem = menu.querySelector('[data-action="favorite"]');
    if (favItem) favItem.textContent = note.favorite ? '★ 取消星标' : '★ 星标';
  }
  // Populate move submenu
  const moveList = document.getElementById('noteMoveList');
  const moveTrigger = document.querySelector('.move-trigger');
  if (moveList && moveTrigger) {
    const folders = getFolderNames().filter(f => note && f !== note.folder);
    moveList.innerHTML = folders.length
      ? folders.map(f => `<button class="context-menu-item" data-action="move-to" data-folder="${escapeAttribute(f)}" type="button">📁 ${escapeHtml(f)}</button>`).join("")
      : '<span style="padding:6px 12px;color:var(--muted);font-size:12px;">无其他文件夹</span>';
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
  const note = state.notes.find(n => n.id === noteId);
  if (!note || note.folder === targetFolder) return;
  note.folder = targetFolder;
  note.updatedAt = Date.now();
  persistAndRender(`已移至「${targetFolder}」`);
}

function duplicateNoteById(id) {
  const note = state.notes.find(n => n.id === id);
  if (!note) return;
  const now = Date.now();
  const copy = normalizeNote({...note, id: createId(), title: `${note.title} 副本`, pinned: false, createdAt: now, updatedAt: now});
  state.notes.unshift(copy);
  state.activeId = copy.id;
  persistAndRender("已复制为新笔记");
}

function exportNoteById(id) {
  const note = state.notes.find(n => n.id === id);
  if (!note) return;
  const isMarkdown = note.mode === "md";
  const ext = isMarkdown ? "md" : "txt";
  const type = isMarkdown ? "text/markdown" : "text/plain";
  const content = isMarkdown ? formatMarkdownExport(note) : note.body;
  downloadText(`${safeFileName(note.title)}.${ext}`, content, type);
  showToast("已导出笔记");
}

function deleteNoteById(id) {
  const note = state.notes.find(n => n.id === id);
  if (!note) return;
  const confirmed = window.confirm(`删除「${note.title}」？`);
  if (!confirmed) return;
  state.notes = state.notes.filter(n => n.id !== id);
  if (state.activeId === id) state.activeId = state.notes[0]?.id || null;
  ensureActiveNote();
  persistAndRender("已删除笔记");
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
  if (elements.listStatus) elements.listStatus.textContent = `${state.notes.length} ${t("items")}`;
}

function sortedNotes() {
  return state.notes
    .filter((note) => {
      if (state.viewFilter === "favorite" && !note.favorite) return false;
      if (state.selectedFolder && note.folder !== state.selectedFolder) return false;
      if (!state.query) return true;
      const haystack = `${note.title}\n${note.folder}\n${note.body}`.toLowerCase();
      return haystack.includes(state.query);
    })
    .sort((a, b) => {
      // Pinned always first
      if (a.pinned && !b.pinned) return -1;
      if (!a.pinned && b.pinned) return 1;
      return b.updatedAt - a.updatedAt;
    });
}

function renderFolders() {
  const counts = new Map();
  state.notes.forEach((note) => {
    counts.set(note.folder, (counts.get(note.folder) || 0) + 1);
  });

  // 所有笔记 always first
  const allTotal = state.notes.length;
  let html = `<button class="folder-item ${!state.selectedFolder || state.selectedFolder === "所有笔记" ? "active" : ""}" type="button" data-folder="所有笔记">
    <span>📋 所有笔记</span>
    <strong>${allTotal}</strong>
  </button>`;

  // Other folders: sort by count desc, hide empty ones (but always show 收件箱)
  const others = [...counts.entries()]
    .filter(([name, count]) => count > 0 || name === "收件箱")
    .sort((a, b) => {
      if (a[0] === "收件箱") return -1;
      if (b[0] === "收件箱") return 1;
      return b[1] - a[1] || a[0].localeCompare(b[0], "zh-CN");
    });

  html += others
    .map(([folder, count]) => `
      <button class="folder-item ${folder === state.selectedFolder ? "active" : ""}" type="button" data-folder="${escapeAttribute(folder)}">
        <span>${escapeHtml(folder)}</span>
        <strong>${count}</strong>
      </button>
    `)
    .join("");

  elements.folderList.innerHTML = html;

  elements.folderList.querySelectorAll(".folder-item").forEach((button) => {
    button.addEventListener("click", () => {
      const f = button.dataset.folder || "";
      state.selectedFolder = f === "所有笔记" ? "" : f;
      renderLists();
    });
    button.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      const f = button.dataset.folder || "";
      if (f === "所有笔记") return; // no context menu for 所有笔记
      state.contextMenuFolder = f;
      showFolderContextMenu(event.clientX, event.clientY);
    });
  });
}

function renderNoteList() {
  const notes = sortedNotes();
  if (elements.listStatus) elements.listStatus.textContent = `${notes.length} ${t("items")}`;

  if (!notes.length) {
    elements.noteList.innerHTML = `<div class="empty-state">${t("noNotes")}</div>`;
    return;
  }

  elements.noteList.innerHTML = notes
    .map((note) => {
      const mode = note.mode === "md" ? "MD" : "TXT";
      const flags = `${note.pinned ? "📌" : ""}${note.favorite ? "★" : ""}`;
      return `
        <button class="note-item ${note.id === state.activeId ? "active" : ""}" type="button" data-id="${note.id}">
          <span class="note-item-head">
            <h3>${escapeHtml(note.title)}</h3>
            <span class="note-flags-text">${flags}</span>
          </span>
          <p>${escapeHtml(excerpt(note.body))}</p>
          <span class="note-item-meta">
            <span class="note-item-mode">${mode}</span>
            <time>${formatShortDate(note.updatedAt)}</time>
          </span>
        </button>
      `;
    })
    .join("");

  elements.noteList.querySelectorAll(".note-item").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeId = button.dataset.id;
      saveNotes();
      renderAll();
      elements.bodyInput.focus();
    });
    button.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      state.contextMenuNoteId = button.dataset.id;
      showNoteContextMenu(event.clientX, event.clientY);
    });
  });
}

function renderSyncMeta() {
  const token = getSyncToken();
  const lastSync = localStorage.getItem(storageKeys.lastSyncAt);
  const auto = elements.autoSyncToggle.checked;

  elements.cloudStatus.textContent = token ? (auto ? t("cloudAuto") : t("cloudReady")) : t("localMode");
  elements.syncState.textContent = token
    ? lastSync
      ? `${t("synced")} ${formatDate(Number(lastSync))}`
      : t("cloudUnsynced")
    : t("local");
}

function openNewNoteDialog() {
  if (!elements.newNoteFolderSelect || !elements.newNoteDialog) return;
  const folders = getFolderNames();
  const defaultFolder = (state.selectedFolder && state.selectedFolder !== "所有笔记") ? state.selectedFolder : "收件箱";
  elements.newNoteFolderSelect.innerHTML = folders.length
    ? folders.map(f => `<option value="${escapeAttribute(f)}" ${f === defaultFolder ? "selected" : ""}>${escapeHtml(f)}</option>`).join("")
    : `<option value="收件箱">收件箱</option>`;
  elements.newNoteDialog.showModal();
}

function createNote(templateName, folder) {
  const note = createNoteObject(templateName);
  if (folder) note.folder = folder;
  else if (state.selectedFolder && state.selectedFolder !== "所有笔记") note.folder = state.selectedFolder;
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
  return normalizeNote({
    id: createId(),
    title: template.title,
    mode: template.mode,
    folder: template.folder,
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
  renderModeState();
  renderPreview();
}

function handleEditorSectionToggle() {
  const note = activeNote();
  if (!note) return;
  note.editorSectionOpen = elements.editorSection.open;
  note.updatedAt = Date.now();
  saveNotes();
  renderModeState();
}

function toggleSidebar() {
  state.sidebarCollapsed = !state.sidebarCollapsed;
  applySidebarCollapsed(state.sidebarCollapsed);
}

function applySidebarCollapsed(collapsed) {
  const isCollapsed = Boolean(collapsed);
  state.sidebarCollapsed = isCollapsed;
  document.body.classList.toggle("sidebar-collapsed", isCollapsed);
  localStorage.setItem(storageKeys.sidebarCollapsed, isCollapsed ? "1" : "0");
  const toggleIcon = elements.sidebarToggleButton?.querySelector(".toggle-icon");
  if (toggleIcon) toggleIcon.textContent = isCollapsed ? "›" : "‹";
  if (elements.sidebarToggleButton) {
    elements.sidebarToggleButton.title = isCollapsed ? "展开侧栏" : "收起侧栏";
    elements.sidebarToggleButton.setAttribute("aria-label", isCollapsed ? "展开侧栏" : "收起侧栏");
  }
}

function deleteActiveNote() {
  const note = activeNote();
  if (!note) return;
  const confirmed = window.confirm(`删除「${note.title}」？下次推送到云端时会同步这个删除结果。`);
  if (!confirmed) return;
  state.notes = state.notes.filter((item) => item.id !== note.id);
  state.activeId = state.notes[0]?.id || null;
  ensureActiveNote();
  persistAndRender("已删除笔记");
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

function mergeNotes(incoming) {
  const map = new Map(state.notes.map((note) => [note.id, normalizeNote(note)]));
  incoming.map(normalizeNote).forEach((note) => {
    const existing = map.get(note.id);
    if (!existing || note.updatedAt >= existing.updatedAt) {
      map.set(note.id, note);
    }
  });
  state.notes = [...map.values()].sort((a, b) => Number(b.pinned) - Number(a.pinned) || b.updatedAt - a.updatedAt);
  state.activeId = incoming[0]?.id || state.activeId;
  persistAndRender("已合并笔记");
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
  const token = getSyncToken();
  const silent = Boolean(options.silent);
  if (!token) {
    showSyncMessage("请先填写同步 Token。");
    return;
  }

  localStorage.setItem(storageKeys.syncToken, token);
  state.syncInFlight = true;
  if (!silent) showSyncMessage("正在推送到云端...");
  elements.cloudStatus.textContent = "正在同步...";

  try {
    saveNotes();
    const response = await fetch("./api/notes", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ notes: state.notes, updatedAt: Date.now() })
    });
    if (!response.ok) throw new Error(await response.text());
    localStorage.setItem(storageKeys.lastSyncAt, String(Date.now()));
    renderSyncMeta();
    if (!silent) {
      showSyncMessage("已推送到云端。");
      showToast("云同步推送完成");
    }
  } catch (error) {
    const message = `推送失败：${cloudErrorText(error)}`;
    showSyncMessage(message);
    if (!silent) showToast(message);
    elements.cloudStatus.textContent = "同步失败";
  } finally {
    state.syncInFlight = false;
  }
}

async function pullCloud() {
  const token = getSyncToken();
  if (!token) {
    showSyncMessage("请先填写同步 Token。");
    return;
  }

  localStorage.setItem(storageKeys.syncToken, token);
  state.syncInFlight = true;
  showSyncMessage("正在从云端拉取...");
  elements.cloudStatus.textContent = "正在同步...";

  try {
    const response = await fetch("./api/notes", {
      headers: { authorization: `Bearer ${token}` }
    });
    if (!response.ok) throw new Error(await response.text());
    const payload = await response.json();
    mergeNotes((payload.notes || []).map(normalizeNote));
    localStorage.setItem(storageKeys.lastSyncAt, String(Date.now()));
    renderSyncMeta();
    showSyncMessage("已从云端拉取并合并。");
    showToast("云同步拉取完成");
  } catch (error) {
    const message = `拉取失败：${cloudErrorText(error)}`;
    showSyncMessage(message);
    showToast(message);
    elements.cloudStatus.textContent = "同步失败";
  } finally {
    state.syncInFlight = false;
  }
}

function clearSyncToken() {
  elements.syncTokenInput.value = "";
  localStorage.removeItem(storageKeys.syncToken);
  localStorage.setItem(storageKeys.autoSync, "0");
  elements.autoSyncToggle.checked = false;
  renderSyncMeta();
  showSyncMessage("已清除本地 Token。");
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

function persistAndRender(message) {
  saveNotes();
  renderAll();
  setSaveStatus("已保存本地");
  scheduleAutoSync();
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
  if (elements.searchInput) elements.searchInput.placeholder = t("searchPlaceholder");
  if (elements.editorSearchInput) elements.editorSearchInput.placeholder = t("editorSearchPlaceholder");
  if (elements.newNoteButton) elements.newNoteButton.querySelector("span:last-child").textContent = t("newNote");
  if (elements.titleInput) elements.titleInput.placeholder = t("titlePlaceholder");
  if (elements.folderInput) elements.folderInput.placeholder = t("folderPlaceholder");
  if (elements.bodyInput) elements.bodyInput.placeholder = t("editorPlaceholder");
  if (elements.sidebarQuickNewButton) elements.sidebarQuickNewButton.title = t("newNote");
  if (elements.sidebarQuickNewButton) elements.sidebarQuickNewButton.setAttribute("aria-label", t("newNote"));
  if (elements.syncButton) elements.syncButton.title = t("sync");
  if (elements.topSyncButton) elements.topSyncButton.textContent = t("sync");
  if (elements.importButton) elements.importButton.textContent = t("import");
  if (elements.exportButton) elements.exportButton.textContent = t("exportCurrent");
  if (elements.shareButton) elements.shareButton.textContent = t("share");
  if (elements.deleteButton) elements.deleteButton.textContent = t("delete");
  if (elements.copyMarkdownButton) elements.copyMarkdownButton.textContent = t("copyCurrent");
  if (elements.downloadNoteButton) elements.downloadNoteButton.textContent = t("backupAll");
  if (elements.duplicateButton) elements.duplicateButton.textContent = t("duplicate");
  if (elements.listStatus) elements.listStatus.textContent = `${sortedNotes().length} ${t("items")}`;
  const folderTitle = document.getElementById("folderSectionTitle");
  if (folderTitle) folderTitle.textContent = t("files");
  const outlineHead = elements.outlinePanel?.querySelector(".outline-panel-head span");
  if (outlineHead) outlineHead.textContent = t("outlineTitle");
  const editorToolsTitle = document.getElementById("editorToolsTitle");
  if (editorToolsTitle) editorToolsTitle.textContent = t("editorTools");
  const utilityDrawerTitle = document.getElementById("utilityDrawerTitle");
  if (utilityDrawerTitle) utilityDrawerTitle.textContent = t("moreActions");
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
  if (!initial) {
    renderAll();
    showToast(next === "en" ? "Switched to English" : "已切换为中文");
  }
}

function toggleLanguage() {
  applyLanguage(state.language === "zh" ? "en" : "zh");
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
  const lineHeight = parseFloat(getComputedStyle(elements.bodyInput).lineHeight) || 22;
  const paddingTop = parseFloat(getComputedStyle(elements.bodyInput).paddingTop) || 0;
  const offset = Math.max(0, paddingTop + (state.currentLine - 1) * lineHeight - elements.bodyInput.scrollTop);
  elements.editorLineHighlight.style.transform = `translateY(${offset}px)`;
  elements.editorLineHighlight.style.height = `${Math.max(lineHeight, 22)}px`;
  elements.editorLineHighlight.style.display = text ? "block" : "none";
  updateLineNumberStyles();
}

function updateLineNumberStyles() {
  const items = elements.lineNumbers.querySelectorAll(".line-number");
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

/** Replace a range in the textarea and fire input event */
function replaceRange(from, to, text) {
  const textarea = elements.bodyInput;
  textarea.setRangeText(text, from, to, "end");
  textarea.dispatchEvent(new Event("input", { bubbles: true }));
}

function updateLineNumbers() {
  const states = getLineStates();
  const total = Math.max(1, states.length);
  elements.lineNumbers.innerHTML = Array.from({ length: total }, (_, index) => {
    const lineNumber = index + 1;
    const classes = ["line-number"];
    if (lineNumber === state.currentLine) classes.push("current");
    if (states[index]?.searchHit) classes.push("search-hit");
    return `<div class="${classes.join(" ")}" data-line="${lineNumber}">${lineNumber}</div>`;
  }).join("");
  elements.lineNumbers.scrollTop = elements.bodyInput.scrollTop;
  renderEditorSearchCount();
}

function syncLineNumberScroll() {
  elements.lineNumbers.scrollTop = elements.bodyInput.scrollTop;
  // Keep highlight visible at top of viewport during scroll
  const lineHeight = 24;
  const paddingTop = 14;
  const lineNum = Math.max(1, Math.floor(elements.bodyInput.scrollTop / lineHeight) + 1);
  if (state.currentLine !== lineNum) {
    state.currentLine = lineNum;
    updateLineNumberStyles();
  }
  const offset = Math.max(0, paddingTop + (lineNum - 1) * lineHeight - elements.bodyInput.scrollTop);
  elements.editorLineHighlight.style.transform = `translateY(${offset}px)`;
  elements.editorLineHighlight.style.height = `${lineHeight}px`;
  elements.editorLineHighlight.style.display = "block";
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
  const ratio = Math.max(32, Math.min(68, Number(value) || 58));
  elements.splitEditor.style.setProperty("--split-ratio", `${ratio}%`);
  localStorage.setItem(storageKeys.splitRatio, String(ratio));
}

function jumpToLine(lineIndex, targetId) {
  const textarea = elements.bodyInput;
  const lines = textarea.value.replace(/\r\n/g, "\n").split("\n");
  const start = lines.slice(0, lineIndex).join("\n").length + (lineIndex > 0 ? 1 : 0);
  textarea.focus();
  textarea.setSelectionRange(start, start);
  const lineHeight = parseFloat(getComputedStyle(textarea).lineHeight) || 22;
  textarea.scrollTop = Math.max(0, lineIndex * lineHeight - textarea.clientHeight / 3);
  syncLineNumberScroll();

  if (targetId) {
    const target = document.getElementById(targetId);
    if (target) target.scrollIntoView({ block: "center", behavior: "smooth" });
  }
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
        <div class="code-head"><span>${label}</span><button class="code-copy" type="button">复制</button></div>
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
  return html.join("\n") || `<p class="empty-state compact">开始写 Markdown 后，这里会实时预览。</p>`;
}

function inlineMarkdown(text) {
  const links = [];
  let html = escapeHtml(text);
  html = html.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, (_, label, url) => {
    const token = `@@NANSTAR_LINK_${links.length}@@`;
    links.push(`<a href="${url}" target="_blank" rel="noreferrer">${label}</a>`);
    return token;
  });
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noreferrer">$1</a>');
  links.forEach((link, index) => {
    html = html.replace(`@@NANSTAR_LINK_${index}@@`, link);
  });
  return html;
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
