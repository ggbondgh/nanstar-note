const storageKeys = {
  notes: "nanstar-note-notes",
  activeNote: "nanstar-note-active",
  syncToken: "nanstar-note-sync-token",
  lastSyncAt: "nanstar-note-last-sync-at",
  autoSync: "nanstar-note-auto-sync"
};

const templates = {
  txt: {
    title: "未命名 TXT",
    mode: "txt",
    folder: "Inbox",
    tags: ["txt"],
    body: ""
  },
  md: {
    title: "未命名 Markdown",
    mode: "md",
    folder: "Docs",
    tags: ["markdown"],
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
    tags: ["命令", "速查"],
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
    tags: ["客户现场", "流程"],
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
    tags: ["排查", "debug"],
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
    tags: ["daily"],
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
    tags: ["wk", "编译", "客户现场"],
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
    tags: ["安全", "客户现场"],
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
  filter: "all",
  selectedTag: "",
  selectedFolder: "",
  query: "",
  saveTimer: null,
  autoSyncTimer: null,
  syncInFlight: false
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const elements = {
  appShell: $(".app-shell"),
  cloudStatus: $("#cloudStatus"),
  newNoteButton: $("#newNoteButton"),
  syncButton: $("#syncButton"),
  topSyncButton: $("#topSyncButton"),
  searchInput: $("#searchInput"),
  filterItems: $$(".filter-item"),
  folderList: $("#folderList"),
  clearFolderButton: $("#clearFolderButton"),
  tagList: $("#tagList"),
  clearTagButton: $("#clearTagButton"),
  outlineList: $("#outlineList"),
  outlineStatus: $("#outlineStatus"),
  noteList: $("#noteList"),
  listStatus: $("#listStatus"),
  allCount: $("#allCount"),
  pinnedCount: $("#pinnedCount"),
  favoriteCount: $("#favoriteCount"),
  recentCount: $("#recentCount"),
  editorCard: $("#editorCard"),
  titleInput: $("#titleInput"),
  pinButton: $("#pinButton"),
  favoriteButton: $("#favoriteButton"),
  modeButtons: $$(".mode-button"),
  folderInput: $("#folderInput"),
  tagsInput: $("#tagsInput"),
  toolbar: $(".toolbar"),
  togglePreviewButton: $("#togglePreviewButton"),
  splitEditor: $("#splitEditor"),
  lineNumbers: $("#lineNumbers"),
  textShell: $("#textShell"),
  bodyInput: $("#bodyInput"),
  previewPane: $("#previewPane"),
  previewContent: $("#previewContent"),
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

  decodeSharedNote();
  bindEvents();
  ensureActiveNote();
  renderAll();
  setSaveStatus("已保存本地");
}

function bindEvents() {
  elements.newNoteButton.addEventListener("click", () => createNote("txt"));
  elements.searchInput.addEventListener("input", (event) => {
    state.query = event.target.value.trim().toLowerCase();
    renderLists();
  });

  elements.filterItems.forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter || "all";
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

  elements.clearFolderButton.addEventListener("click", () => {
    state.selectedFolder = "";
    renderLists();
  });

  elements.clearTagButton.addEventListener("click", () => {
    state.selectedTag = "";
    renderLists();
  });

  elements.titleInput.addEventListener("input", updateActiveFromInputs);
  elements.folderInput.addEventListener("input", updateActiveFromInputs);
  elements.tagsInput.addEventListener("input", updateActiveFromInputs);
  elements.bodyInput.addEventListener("input", updateActiveFromInputs);
  elements.bodyInput.addEventListener("scroll", syncLineNumberScroll);

  elements.pinButton.addEventListener("click", togglePinned);
  elements.favoriteButton.addEventListener("click", toggleFavorite);

  elements.modeButtons.forEach((button) => {
    button.addEventListener("click", () => changeMode(button.dataset.mode));
  });

  elements.togglePreviewButton.addEventListener("click", togglePreview);
  elements.toolbar.addEventListener("mousedown", (event) => {
    if (event.target.closest("button")) event.preventDefault();
  });
  elements.toolbar.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (button) applyToolbarAction(button);
  });

  elements.deleteButton.addEventListener("click", deleteActiveNote);
  elements.duplicateButton.addEventListener("click", duplicateActiveNote);
  elements.copyMarkdownButton.addEventListener("click", copyActiveContent);
  elements.downloadNoteButton.addEventListener("click", downloadActiveNote);
  elements.exportButton.addEventListener("click", exportAllNotes);
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
    folder: String(note.folder || "Inbox").trim() || "Inbox",
    tags: parseTags(note.tags || ""),
    body,
    pinned: Boolean(note.pinned),
    favorite: Boolean(note.favorite),
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
  note.folder = elements.folderInput.value.trim() || "Inbox";
  note.tags = parseTags(elements.tagsInput.value);
  note.body = elements.bodyInput.value;
  note.updatedAt = Date.now();

  scheduleSave();
  updateLineNumbers();
  renderPreview();
  renderOutline();
  renderLists();
  renderSyncMeta();
}

function parseTags(value) {
  const source = Array.isArray(value) ? value.join(",") : String(value);
  return source
    .split(/[,，\s]+/)
    .map((tag) => tag.trim())
    .filter(Boolean)
    .filter((tag, index, all) => all.indexOf(tag) === index);
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
  renderOutline();
  renderLists();
  renderSyncMeta();
}

function renderEditor() {
  const note = activeNote();
  if (!note) return;

  elements.titleInput.value = note.title;
  elements.folderInput.value = note.folder;
  elements.tagsInput.value = note.tags.join(", ");
  elements.bodyInput.value = note.body;

  elements.pinButton.textContent = note.pinned ? "⌃" : "⌄";
  elements.pinButton.classList.toggle("active", note.pinned);
  elements.pinButton.title = note.pinned ? "取消置顶" : "置顶";
  elements.favoriteButton.textContent = note.favorite ? "★" : "☆";
  elements.favoriteButton.classList.toggle("active", note.favorite);

  elements.modeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === note.mode);
  });

  renderModeState();
  updateLineNumbers();
}

function renderModeState() {
  const note = activeNote();
  if (!note) return;
  const isMarkdown = note.mode === "md";
  const previewVisible = isMarkdown && note.previewVisible !== false;

  elements.editorCard.dataset.mode = note.mode;
  elements.editorCard.classList.toggle("preview-hidden", !previewVisible);
  elements.splitEditor.classList.toggle("preview-hidden", !previewVisible);
  document.body.dataset.noteMode = note.mode;

  elements.modeHint.textContent = isMarkdown ? "Markdown 结构化模式" : "TXT 纯文本模式";
  elements.outlineStatus.textContent = isMarkdown ? "MD" : "TXT";
  elements.togglePreviewButton.textContent = previewVisible ? "隐藏预览" : "显示预览";
  elements.togglePreviewButton.classList.toggle("active", previewVisible);
  elements.togglePreviewButton.disabled = !isMarkdown;
  elements.toolbar.querySelectorAll(".md-tool, [data-insert]").forEach((button) => {
    button.hidden = !isMarkdown;
  });
  elements.togglePreviewButton.hidden = !isMarkdown;
}

function renderPreview() {
  const note = activeNote();
  const body = note?.body || "";
  elements.wordCount.textContent = `${countWords(body)} 字 / ${countLines(body)} 行`;

  if (!note || note.mode !== "md") {
    elements.previewContent.innerHTML = "";
    return;
  }

  elements.previewContent.innerHTML = renderMarkdown(body);
}

function renderOutline() {
  const note = activeNote();
  if (!note || note.mode !== "md") {
    elements.outlineList.innerHTML = `<div class="empty-state compact">TXT 模式不显示目录</div>`;
    return;
  }

  const headings = extractHeadings(note.body);
  if (!headings.length) {
    elements.outlineList.innerHTML = `<div class="empty-state compact">暂无标题</div>`;
    return;
  }

  elements.outlineList.innerHTML = headings
    .map((heading) => `
      <button class="outline-item level-${heading.level}" type="button" data-line="${heading.line}" data-target="${heading.id}">
        ${escapeHtml(heading.text)}
      </button>
    `)
    .join("");

  elements.outlineList.querySelectorAll(".outline-item").forEach((button) => {
    button.addEventListener("click", () => jumpToLine(Number(button.dataset.line || 0), button.dataset.target));
  });
}

function renderLists() {
  renderCounts();
  renderFolders();
  renderTags();
  renderNoteList();
}

function renderFilterState() {
  elements.filterItems.forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === state.filter);
  });
}

function renderCounts() {
  const now = Date.now();
  elements.allCount.textContent = state.notes.length;
  elements.pinnedCount.textContent = state.notes.filter((note) => note.pinned).length;
  elements.favoriteCount.textContent = state.notes.filter((note) => note.favorite).length;
  elements.recentCount.textContent = state.notes.filter((note) => now - note.updatedAt < 1000 * 60 * 60 * 24 * 7).length;
}

function renderFolders() {
  const counts = new Map();
  state.notes.forEach((note) => {
    counts.set(note.folder, (counts.get(note.folder) || 0) + 1);
  });

  const folders = [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "zh-CN"));
  elements.folderList.innerHTML = folders.length
    ? folders
      .map(([folder, count]) => `
        <button class="folder-item ${folder === state.selectedFolder ? "active" : ""}" type="button" data-folder="${escapeAttribute(folder)}">
          <span>${escapeHtml(folder)}</span>
          <strong>${count}</strong>
        </button>
      `)
      .join("")
    : `<div class="empty-state compact">还没有文件夹</div>`;

  elements.folderList.querySelectorAll(".folder-item").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedFolder = button.dataset.folder || "";
      renderLists();
    });
  });
}

function renderTags() {
  const counts = new Map();
  state.notes.forEach((note) => {
    note.tags.forEach((tag) => counts.set(tag, (counts.get(tag) || 0) + 1));
  });

  const tags = [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "zh-CN"));
  elements.tagList.innerHTML = tags.length
    ? tags
      .map(([tag, count]) => `
        <button class="tag-pill ${tag === state.selectedTag ? "active" : ""}" type="button" data-tag="${escapeAttribute(tag)}">
          ${escapeHtml(tag)} ${count}
        </button>
      `)
      .join("")
    : `<div class="empty-state compact">还没有标签</div>`;

  elements.tagList.querySelectorAll(".tag-pill").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedTag = button.dataset.tag || "";
      renderLists();
    });
  });
}

function renderNoteList() {
  const notes = filteredNotes();
  elements.listStatus.textContent = `${notes.length} 条`;

  if (!notes.length) {
    elements.noteList.innerHTML = `<div class="empty-state">没有匹配的笔记</div>`;
    return;
  }

  elements.noteList.innerHTML = notes
    .map((note) => {
      const tags = note.tags.slice(0, 3).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");
      const mode = note.mode === "md" ? "MD" : "TXT";
      const flags = `${note.pinned ? "⌃" : ""}${note.favorite ? "★" : ""}`;
      return `
        <button class="note-item ${note.id === state.activeId ? "active" : ""}" type="button" data-id="${note.id}">
          <span class="note-item-head">
            <h3>${escapeHtml(note.title)}</h3>
            <span class="note-flags-text">${flags}</span>
          </span>
          <p>${escapeHtml(excerpt(note.body))}</p>
          <span class="note-item-meta">
            <span class="note-item-tags"><em>${mode}</em>${tags}</span>
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
  });
}

function filteredNotes() {
  const now = Date.now();
  return state.notes
    .filter((note) => {
      if (state.filter === "pinned" && !note.pinned) return false;
      if (state.filter === "favorite" && !note.favorite) return false;
      if (state.filter === "recent" && now - note.updatedAt > 1000 * 60 * 60 * 24 * 7) return false;
      if (state.selectedFolder && note.folder !== state.selectedFolder) return false;
      if (state.selectedTag && !note.tags.includes(state.selectedTag)) return false;
      if (!state.query) return true;
      const haystack = `${note.title}\n${note.folder}\n${note.tags.join(" ")}\n${note.body}`.toLowerCase();
      return haystack.includes(state.query);
    })
    .sort((a, b) => Number(b.pinned) - Number(a.pinned) || b.updatedAt - a.updatedAt);
}

function renderSyncMeta() {
  const token = getSyncToken();
  const lastSync = localStorage.getItem(storageKeys.lastSyncAt);
  const auto = elements.autoSyncToggle.checked;

  elements.cloudStatus.textContent = token ? (auto ? "云同步 / 自动" : "云同步已配置") : "本地模式";
  elements.syncState.textContent = token
    ? lastSync
      ? `已同步 ${formatDate(Number(lastSync))}`
      : "云端未同步"
    : "本地";
}

function createNote(templateName) {
  const note = createNoteObject(templateName);
  state.notes.unshift(note);
  state.activeId = note.id;
  persistAndRender("已创建笔记");
  elements.titleInput.focus();
  elements.titleInput.select();
}

function createNoteObject(templateName) {
  const template = templates[templateName] || templates.txt;
  const now = Date.now();
  return normalizeNote({
    id: createId(),
    title: template.title,
    mode: template.mode,
    folder: template.folder,
    tags: [...template.tags],
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
  note.updatedAt = Date.now();
  persistAndRender(mode === "md" ? "已切换到 Markdown" : "已切换到 TXT");
  elements.bodyInput.focus();
}

function togglePreview() {
  const note = activeNote();
  if (!note || note.mode !== "md") return;
  note.previewVisible = note.previewVisible === false;
  note.updatedAt = Date.now();
  saveNotes();
  renderModeState();
  renderPreview();
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
  const note = activeNote();
  if (!note) return;
  const extension = note.mode === "md" ? "md" : "txt";
  const type = note.mode === "md" ? "text/markdown" : "text/plain";
  const content = note.mode === "md" ? formatMarkdownExport(note) : note.body;
  downloadText(`${safeFileName(note.title)}.${extension}`, content, type);
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
          tags: ["import"],
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
  const selected = textarea.value.slice(textarea.selectionStart, textarea.selectionEnd);

  if (button.dataset.wrap) {
    const mark = button.dataset.wrap;
    replaceSelection(`${mark}${selected || "内容"}${mark}`);
  } else if (button.dataset.prefix) {
    replaceSelectedLines(button.dataset.prefix);
  } else if (button.dataset.block === "code") {
    replaceSelection(`\`\`\`bash\n${selected || ""}\n\`\`\``);
  }

  window.setTimeout(updateActiveFromInputs, 0);
  textarea.focus();
}

function runNativeHistoryCommand(command) {
  elements.bodyInput.focus();
  try {
    document.execCommand(command);
  } finally {
    window.setTimeout(updateActiveFromInputs, 0);
  }
}

function insertSnippet(type) {
  const note = activeNote();
  const isMarkdown = note?.mode === "md";
  const snippets = {
    path: isMarkdown
      ? "\n\n```txt\nD:\\\\project\\\\path\n\\\\server\\\\share\\\\path\n```\n"
      : "\n路径：D:\\\\project\\\\path\n共享路径：\\\\server\\\\share\\\\path\n",
    command: isMarkdown
      ? "\n\n```bash\n# 在这里写命令\n```\n"
      : "\n命令：\n执行目录：\n注意：\n",
    checklist: isMarkdown
      ? "\n- [ ] 前置条件\n- [ ] 执行步骤\n- [ ] 退出前检查\n"
      : "\n[ ] 前置条件\n[ ] 执行步骤\n[ ] 退出前检查\n"
  };
  replaceSelection(snippets[type] || "");
  window.setTimeout(updateActiveFromInputs, 0);
  elements.bodyInput.focus();
}

function replaceSelection(replacement) {
  const textarea = elements.bodyInput;
  textarea.focus();
  if (document.queryCommandSupported?.("insertText")) {
    document.execCommand("insertText", false, replacement);
    return;
  }
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  textarea.setRangeText(replacement, start, end, "end");
  textarea.dispatchEvent(new Event("input", { bubbles: true }));
}

function replaceSelectedLines(prefix) {
  const textarea = elements.bodyInput;
  const value = textarea.value;
  let start = textarea.selectionStart;
  let end = textarea.selectionEnd;

  if (start === end) {
    start = value.lastIndexOf("\n", start - 1) + 1;
    const nextBreak = value.indexOf("\n", end);
    end = nextBreak === -1 ? value.length : nextBreak;
  }

  const selected = value.slice(start, end) || "内容";
  const replacement = selected
    .split("\n")
    .map((line) => `${prefix}${line}`)
    .join("\n");

  textarea.setSelectionRange(start, end);
  replaceSelection(replacement);
}

function updateLineNumbers() {
  const lines = countLines(elements.bodyInput.value);
  let html = "";
  for (let index = 1; index <= lines; index += 1) {
    html += `${index}<br>`;
  }
  elements.lineNumbers.innerHTML = html || "1";
  syncLineNumberScroll();
}

function syncLineNumberScroll() {
  elements.lineNumbers.scrollTop = elements.bodyInput.scrollTop;
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
  if (note.tags.length) parts.push(`> 标签：${note.tags.map((tag) => `#${tag}`).join(" ")}`);
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
