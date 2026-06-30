const storageKeys = {
  notes: "nanstar-note-notes",
  activeNote: "nanstar-note-active",
  syncToken: "nanstar-note-sync-token",
  lastSyncAt: "nanstar-note-last-sync-at"
};

const templates = {
  blank: {
    title: "未命名笔记",
    tags: ["inbox"],
    body: ""
  },
  command: {
    title: "命令速查",
    tags: ["命令", "速查"],
    body: `## 场景

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
    tags: ["客户现场", "流程"],
    body: `## 现场目标

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
    tags: ["排查", "debug"],
    body: `## 现象

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
    tags: ["daily"],
    body: `## 今日处理

- 

## 重要信息

- 

## 待跟进

- [ ] 
`
  }
};

const defaultNotes = [
  {
    id: createId(),
    title: "wk_note 速查",
    tags: ["wk", "编译", "客户现场"],
    body: `## 拉取代码

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
    favorite: true,
    createdAt: Date.now() - 1000 * 60 * 60 * 24,
    updatedAt: Date.now() - 1000 * 60 * 15
  },
  {
    id: createId(),
    title: "客户电脑离场检查",
    tags: ["安全", "客户现场"],
    body: `## 退出时记得

- [ ] 退出微软账号、OneDrive、微信、钉钉、飞书
- [ ] 删除微信聊天记录、钉钉、OneDrive 挂载目录等临时痕迹
- [ ] 卸载临时软件
- [ ] 资料转移与删除，回收站删除
- [ ] 关闭无痕窗口

## 推荐方式

客户电脑只使用浏览器无痕窗口访问 NanStar Note，不安装客户端，不同步本地文件夹。
`,
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
  query: "",
  saveTimer: null
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const elements = {
  newNoteButton: $("#newNoteButton"),
  syncButton: $("#syncButton"),
  searchInput: $("#searchInput"),
  noteList: $("#noteList"),
  tagList: $("#tagList"),
  clearTagButton: $("#clearTagButton"),
  listStatus: $("#listStatus"),
  allCount: $("#allCount"),
  favoriteCount: $("#favoriteCount"),
  recentCount: $("#recentCount"),
  titleInput: $("#titleInput"),
  tagsInput: $("#tagsInput"),
  bodyInput: $("#bodyInput"),
  previewContent: $("#previewContent"),
  favoriteButton: $("#favoriteButton"),
  saveStatus: $("#saveStatus"),
  wordCount: $("#wordCount"),
  createdAt: $("#createdAt"),
  updatedAt: $("#updatedAt"),
  syncState: $("#syncState"),
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

  decodeSharedNote();
  bindEvents();
  ensureActiveNote();
  renderAll();
}

function bindEvents() {
  elements.newNoteButton.addEventListener("click", () => createNote("blank"));
  elements.searchInput.addEventListener("input", (event) => {
    state.query = event.target.value.trim().toLowerCase();
    renderLists();
  });

  $$(".filter-item").forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      $$(".filter-item").forEach((item) => item.classList.toggle("active", item === button));
      renderLists();
    });
  });

  $$(".quick-chip").forEach((button) => {
    button.addEventListener("click", () => {
      $$(".quick-chip").forEach((item) => item.classList.toggle("active", item === button));
      createNote(button.dataset.template || "blank");
    });
  });

  elements.clearTagButton.addEventListener("click", () => {
    state.selectedTag = "";
    renderLists();
  });

  elements.titleInput.addEventListener("input", updateActiveFromInputs);
  elements.tagsInput.addEventListener("input", updateActiveFromInputs);
  elements.bodyInput.addEventListener("input", updateActiveFromInputs);

  elements.favoriteButton.addEventListener("click", () => {
    const note = activeNote();
    if (!note) return;
    note.favorite = !note.favorite;
    note.updatedAt = Date.now();
    persistAndRender("已更新星标");
  });

  elements.deleteButton.addEventListener("click", deleteActiveNote);
  elements.duplicateButton.addEventListener("click", duplicateActiveNote);
  elements.copyMarkdownButton.addEventListener("click", copyActiveMarkdown);
  elements.downloadNoteButton.addEventListener("click", downloadActiveNote);
  elements.exportButton.addEventListener("click", exportAllNotes);
  elements.importButton.addEventListener("click", () => elements.importFileInput.click());
  elements.importFileInput.addEventListener("change", importFile);
  elements.shareButton.addEventListener("click", createShareLink);

  elements.syncButton.addEventListener("click", () => {
    elements.syncDialog.showModal();
    elements.syncTokenInput.focus();
  });
  elements.pushCloudButton.addEventListener("click", pushCloud);
  elements.pullCloudButton.addEventListener("click", pullCloud);
  elements.logoutCloudButton.addEventListener("click", clearSyncToken);
  elements.syncTokenInput.addEventListener("input", () => {
    localStorage.setItem(storageKeys.syncToken, elements.syncTokenInput.value.trim());
  });

  $$(".toolbar button").forEach((button) => {
    button.addEventListener("click", () => applyToolbarAction(button));
  });

  window.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "s") {
      event.preventDefault();
      saveNotes();
      setSaveStatus("已保存本地");
      showToast("已保存到浏览器本地");
    }
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "n") {
      event.preventDefault();
      createNote("blank");
    }
  });
}

function loadNotes() {
  try {
    const raw = localStorage.getItem(storageKeys.notes);
    if (!raw) return [...defaultNotes];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) return [...defaultNotes];
    return parsed.map(normalizeNote);
  } catch {
    return [...defaultNotes];
  }
}

function normalizeNote(note) {
  return {
    id: note.id || createId(),
    title: note.title || "未命名笔记",
    tags: Array.isArray(note.tags) ? note.tags : parseTags(note.tags || ""),
    body: note.body || "",
    favorite: Boolean(note.favorite),
    createdAt: Number(note.createdAt) || Date.now(),
    updatedAt: Number(note.updatedAt) || Date.now()
  };
}

function saveNotes() {
  localStorage.setItem(storageKeys.notes, JSON.stringify(state.notes));
  if (state.activeId) localStorage.setItem(storageKeys.activeNote, state.activeId);
}

function scheduleSave(message = "已保存本地") {
  setSaveStatus("保存中...");
  clearTimeout(state.saveTimer);
  state.saveTimer = setTimeout(() => {
    saveNotes();
    setSaveStatus(message);
  }, 260);
}

function updateActiveFromInputs() {
  const note = activeNote();
  if (!note) return;
  note.title = elements.titleInput.value.trimStart() || "未命名笔记";
  note.tags = parseTags(elements.tagsInput.value);
  note.body = elements.bodyInput.value;
  note.updatedAt = Date.now();
  scheduleSave();
  renderPreview();
  renderLists();
  renderInspector();
}

function parseTags(value) {
  if (Array.isArray(value)) return value.map((tag) => String(tag).trim()).filter(Boolean);
  return String(value)
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
    state.notes.push(createNoteObject("blank"));
  }
  if (!activeNote()) {
    state.activeId = state.notes[0].id;
  }
}

function renderAll() {
  renderEditor();
  renderPreview();
  renderLists();
  renderInspector();
}

function renderEditor() {
  const note = activeNote();
  if (!note) return;
  elements.titleInput.value = note.title;
  elements.tagsInput.value = note.tags.join(", ");
  elements.bodyInput.value = note.body;
  elements.favoriteButton.textContent = note.favorite ? "★" : "☆";
  elements.favoriteButton.classList.toggle("active", note.favorite);
}

function renderPreview() {
  const note = activeNote();
  const body = note?.body || "";
  elements.previewContent.innerHTML = renderMarkdown(body);
  elements.wordCount.textContent = `${countWords(body)} 字`;
}

function renderInspector() {
  const note = activeNote();
  if (!note) return;
  elements.createdAt.textContent = formatDate(note.createdAt);
  elements.updatedAt.textContent = formatDate(note.updatedAt);
  const lastSync = localStorage.getItem(storageKeys.lastSyncAt);
  elements.syncState.textContent = lastSync ? `已同步 ${formatDate(Number(lastSync))}` : "本地";
}

function renderLists() {
  renderCounts();
  renderTags();
  renderNoteList();
}

function renderCounts() {
  elements.allCount.textContent = state.notes.length;
  elements.favoriteCount.textContent = state.notes.filter((note) => note.favorite).length;
  elements.recentCount.textContent = state.notes.filter((note) => Date.now() - note.updatedAt < 1000 * 60 * 60 * 24 * 7).length;
}

function renderTags() {
  const counts = new Map();
  state.notes.forEach((note) => {
    note.tags.forEach((tag) => counts.set(tag, (counts.get(tag) || 0) + 1));
  });

  const tags = [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "zh-CN"));
  elements.tagList.innerHTML = tags.length
    ? tags
        .map(
          ([tag, count]) =>
            `<button class="tag-pill ${tag === state.selectedTag ? "active" : ""}" type="button" data-tag="${escapeAttribute(tag)}">${escapeHtml(tag)} ${count}</button>`
        )
        .join("")
    : `<div class="empty-state">还没有标签</div>`;

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
      return `
        <button class="note-item ${note.id === state.activeId ? "active" : ""}" type="button" data-id="${note.id}">
          <span class="note-item-head">
            <h3>${escapeHtml(note.title)}</h3>
            <span>${note.favorite ? "★" : ""}</span>
          </span>
          <p>${escapeHtml(excerpt(note.body))}</p>
          <span class="note-item-meta">
            <span class="note-item-tags">${tags}</span>
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
    });
  });
}

function filteredNotes() {
  const now = Date.now();
  return state.notes
    .filter((note) => {
      if (state.filter === "favorite" && !note.favorite) return false;
      if (state.filter === "recent" && now - note.updatedAt > 1000 * 60 * 60 * 24 * 7) return false;
      if (state.selectedTag && !note.tags.includes(state.selectedTag)) return false;
      if (!state.query) return true;
      const haystack = `${note.title}\n${note.tags.join(" ")}\n${note.body}`.toLowerCase();
      return haystack.includes(state.query);
    })
    .sort((a, b) => b.updatedAt - a.updatedAt);
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
  const template = templates[templateName] || templates.blank;
  const now = Date.now();
  return {
    id: createId(),
    title: template.title,
    tags: [...template.tags],
    body: template.body,
    favorite: false,
    createdAt: now,
    updatedAt: now
  };
}

function deleteActiveNote() {
  const note = activeNote();
  if (!note) return;
  const confirmed = window.confirm(`删除「${note.title}」？这个操作只会删除本地数据。`);
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
  const copy = {
    ...note,
    id: createId(),
    title: `${note.title} 副本`,
    createdAt: now,
    updatedAt: now
  };
  state.notes.unshift(copy);
  state.activeId = copy.id;
  persistAndRender("已复制为新笔记");
}

function copyActiveMarkdown() {
  const note = activeNote();
  if (!note) return;
  const markdown = `# ${note.title}\n\n${note.tags.map((tag) => `#${tag}`).join(" ")}\n\n${note.body}`;
  navigator.clipboard.writeText(markdown).then(
    () => showToast("已复制 Markdown"),
    () => showToast("当前浏览器不允许复制")
  );
}

function downloadActiveNote() {
  const note = activeNote();
  if (!note) return;
  const content = `# ${note.title}\n\n${note.tags.map((tag) => `#${tag}`).join(" ")}\n\n${note.body}`;
  downloadText(`${safeFileName(note.title)}.md`, content, "text/markdown");
}

function exportAllNotes() {
  const payload = {
    app: "NanStar Note",
    version: 1,
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
        const note = {
          id: createId(),
          title: file.name.replace(/\.(md|txt)$/i, "") || "导入笔记",
          tags: ["import"],
          body: text,
          favorite: false,
          createdAt: now,
          updatedAt: now
        };
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
  const map = new Map(state.notes.map((note) => [note.id, note]));
  incoming.forEach((note) => {
    const existing = map.get(note.id);
    if (!existing || note.updatedAt >= existing.updatedAt) {
      map.set(note.id, note);
    }
  });
  state.notes = [...map.values()].sort((a, b) => b.updatedAt - a.updatedAt);
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

async function pushCloud() {
  const token = elements.syncTokenInput.value.trim();
  if (!token) {
    showSyncMessage("请先填写同步 Token。");
    return;
  }
  localStorage.setItem(storageKeys.syncToken, token);
  showSyncMessage("正在推送到云端...");
  try {
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
    renderInspector();
    showSyncMessage("已推送到云端。");
    showToast("云同步推送完成");
  } catch (error) {
    showSyncMessage(`推送失败：${cloudErrorText(error)}`);
  }
}

async function pullCloud() {
  const token = elements.syncTokenInput.value.trim();
  if (!token) {
    showSyncMessage("请先填写同步 Token。");
    return;
  }
  localStorage.setItem(storageKeys.syncToken, token);
  showSyncMessage("正在从云端拉取...");
  try {
    const response = await fetch("./api/notes", {
      headers: { authorization: `Bearer ${token}` }
    });
    if (!response.ok) throw new Error(await response.text());
    const payload = await response.json();
    mergeNotes((payload.notes || []).map(normalizeNote));
    localStorage.setItem(storageKeys.lastSyncAt, String(Date.now()));
    renderInspector();
    showSyncMessage("已从云端拉取并合并。");
    showToast("云同步拉取完成");
  } catch (error) {
    showSyncMessage(`拉取失败：${cloudErrorText(error)}`);
  }
}

function clearSyncToken() {
  elements.syncTokenInput.value = "";
  localStorage.removeItem(storageKeys.syncToken);
  showSyncMessage("已清除本地 Token。");
}

function showSyncMessage(message) {
  elements.syncMessage.textContent = message;
}

function cloudErrorText(error) {
  const text = String(error?.message || error || "未知错误");
  if (text.includes("Failed to fetch")) return "接口不可用。Cloudflare Pages Functions 配好后才能使用。";
  if (text.includes("Missing KV")) return "Cloudflare KV 还没有绑定 NANSTAR_NOTES。";
  if (text.includes("Unauthorized")) return "Token 不正确。";
  return text.slice(0, 160);
}

function persistAndRender(message) {
  saveNotes();
  renderAll();
  setSaveStatus("已保存本地");
  if (message) showToast(message);
}

function setSaveStatus(message) {
  elements.saveStatus.textContent = message;
}

function applyToolbarAction(button) {
  const textarea = elements.bodyInput;
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const selected = textarea.value.slice(start, end);

  if (button.dataset.wrap) {
    const mark = button.dataset.wrap;
    replaceSelection(textarea, `${mark}${selected || "内容"}${mark}`);
  } else if (button.dataset.prefix) {
    const prefix = button.dataset.prefix;
    const replacement = (selected || "内容")
      .split("\n")
      .map((line) => `${prefix}${line}`)
      .join("\n");
    replaceSelection(textarea, replacement);
  } else if (button.dataset.block === "code") {
    replaceSelection(textarea, `\`\`\`bash\n${selected || ""}\n\`\`\``);
  } else if (button.dataset.block === "callout") {
    replaceSelection(textarea, `> [!note]\n> ${selected || "提示内容"}`);
  }

  textarea.dispatchEvent(new Event("input", { bubbles: true }));
  textarea.focus();
}

function replaceSelection(textarea, replacement) {
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  textarea.setRangeText(replacement, start, end, "select");
}

function renderMarkdown(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const html = [];
  let inCode = false;
  let codeLines = [];
  let inList = false;
  let listType = "";
  let tableBuffer = [];

  const closeList = () => {
    if (inList) {
      html.push(`</${listType}>`);
      inList = false;
      listType = "";
    }
  };

  const flushTable = () => {
    if (!tableBuffer.length) return;
    if (tableBuffer.length >= 2 && /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(tableBuffer[1])) {
      const rows = tableBuffer.filter((_, index) => index !== 1).map(parseTableRow);
      html.push("<table>");
      rows.forEach((row, index) => {
        html.push(index === 0 ? "<thead><tr>" : index === 1 ? "<tbody><tr>" : "<tr>");
        row.forEach((cell) => html.push(index === 0 ? `<th>${inlineMarkdown(cell)}</th>` : `<td>${inlineMarkdown(cell)}</td>`));
        html.push(index === 0 ? "</tr></thead>" : "</tr>");
      });
      if (rows.length > 1) html.push("</tbody>");
      html.push("</table>");
    } else {
      tableBuffer.forEach((line) => html.push(`<p>${inlineMarkdown(line)}</p>`));
    }
    tableBuffer = [];
  };

  lines.forEach((rawLine) => {
    const line = rawLine;

    if (line.trim().startsWith("```")) {
      flushTable();
      closeList();
      if (!inCode) {
        inCode = true;
        codeLines = [];
      } else {
        html.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
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

    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      closeList();
      const level = heading[1].length;
      html.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`);
      return;
    }

    const quote = line.match(/^>\s?(.*)$/);
    if (quote) {
      closeList();
      const content = quote[1].replace(/^\[!note\]\s*/, "");
      html.push(`<blockquote>${inlineMarkdown(content)}</blockquote>`);
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
  if (inCode) html.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
  return html.join("\n") || `<p class="empty-state">开始写笔记后，这里会实时预览。</p>`;
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
  return String(value).replace(/[#>*`\-[\]]/g, " ").replace(/\s+/g, " ").trim().slice(0, 120) || "空白笔记";
}

function countWords(value) {
  return String(value).replace(/\s+/g, "").length;
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

function createId() {
  if (crypto?.randomUUID) return crypto.randomUUID();
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
  showToast.timer = setTimeout(() => elements.toast.classList.remove("show"), 2400);
}
