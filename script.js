const storageKeys = {
  notes: "nanstar-note-notes",
  activeNote: "nanstar-note-active",
  syncToken: "nanstar-note-sync-token",
  syncMeta: "nanstar-note-sync-meta",
  crdtUpdateId: "nanstar-note-crdt-update-id",
  crdtPendingUpdates: "nanstar-note-crdt-pending-updates",
  crdtDocState: "nanstar-note-crdt-doc-state",
  crdtStateVersion: "nanstar-note-crdt-state-version",
  lastSyncAt: "nanstar-note-last-sync-at",
  autoSync: "nanstar-note-auto-sync",
  splitRatio: "nanstar-note-split-ratio",
  sidebarWidth: "nanstar-note-sidebar-width",
  youdaoRailWidth: "nanstar-note-youdao-rail-width",
  youdaoListWidth: "nanstar-note-youdao-list-width",
  youdaoLayout: "nanstar-note-youdao-layout",
  youdaoPreviousLayout: "nanstar-note-youdao-previous-layout",
  sidebarCollapsed: "nanstar-note-sidebar-collapsed",
  folderSectionCollapsed: "nanstar-note-folder-section-collapsed",
  language: "nanstar-note-language"
};

const i18n = {
  zh: {
    workspaceTitle: "内容工作台",
    overviewCurrentNote: "当前笔记",
    overviewSyncStatus: "同步状态",
    overviewContentStats: "内容统计",
    overviewLibrary: "笔记库",
    overviewNoNote: "暂无打开笔记",
    overviewDefaultFolder: "默认文件夹",
    overviewNotConnected: "未连接云同步",
    overviewAllNotes: "全部笔记",
    overviewCurrentLine: "当前行",
    mobileNotes: "笔记",
    openNotes: "打开笔记列表",
    closeNotes: "关闭笔记列表",
    newNote: "新建笔记",
    titlePlaceholder: "写一个清晰的标题",
    folderPlaceholder: "文件夹，例如：WK / 客户现场",
    editorPlaceholder: "TXT 适合路径、账号、命令、清单；MD 适合结构化技术笔记；DOC 适合带格式的文档。Ctrl+Z / Ctrl+Y 保持浏览器原生编辑习惯。",
    docPlaceholder: "像微信收藏/飞书文档一样编辑：标题、加粗、斜体、颜色、高亮、列表。",
    sync: "同步",
    installDesktop: "安装到桌面",
    androidApp: "Android APP",
    androidAppTitle: "安装与更新",
    androidAppCopy: "手机端可以下载 APK 安装。后续 GitHub Release 生成新版本后，这里可以检查并打开最新安装包。",
    androidDownload: "下载 Android APK",
    androidCheckUpdate: "检查更新",
    androidVersionLoading: "正在读取版本信息...",
    androidWebVersion: "当前环境：网页版",
    androidCurrentVersion: "当前 App：{version} ({build})",
    androidUpdateReady: "发现新版本 {version}，可下载更新包。",
    androidUpdateLatest: "已是最新版本：{version}",
    androidUpdateChecking: "正在检查新版本...",
    androidUpdateFailed: "检查失败，可以直接下载最新安装包。",
    androidUpdateUnavailable: "暂时无法确认版本，可以直接下载最新安装包。",
    androidDownloadOpening: "正在打开 Android 安装包下载链接...",
    androidDownloadInstalling: "正在下载 APK，完成后会打开系统安装器...",
    androidDownloadReadyToInstall: "APK 已下载，请在系统安装器中确认安装。",
    androidDownloadProgress: "APK 下载进度",
    androidUnknownSourceBlocked: "请允许 NanStar Note 安装未知应用，返回后再点一次下载。",
    androidUpdatePrompt: "发现新版本 {version}，现在下载安装包？",
    androidUnknownVersion: "未知版本",
    androidPanelReady: "可以下载或检查 NanStar Note Android 安装包。",
    import: "导入",
    exportCurrent: "导出当前",
    exportMenu: "导出",
    exportDialogTitle: "导出",
    exportCurrentTitle: "导出当前笔记",
    exportCurrentCopy: "TXT 导出 .txt；MD 导出 .md/.txt/PDF；DOC 导出 .txt/.html/PDF",
    exportDefault: "默认",
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
    docMode: "DOC 文档模式",
    showPreview: "显示预览",
    hidePreview: "隐藏预览",
    undo: "撤回 Ctrl+Z",
    redo: "重做 Ctrl+Y",
    bold: "加粗",
    italic: "斜体",
    inlineCode: "行内代码",
    unorderedList: "无序列表",
    orderedList: "有序列表",
    taskList: "任务清单",
    quote: "引用",
    codeBlock: "代码块",
    underline: "下划线",
    strikethrough: "删除线",
    heading: "标题",
    paragraphStyle: "段落样式",
    fontFamily: "字体",
    fontSize: "字号",
    defaultFont: "默认字体",
    paragraphBody: "正文",
    heading1: "标题 1",
    heading2: "标题 2",
    heading3: "标题 3",
    textColor: "文字颜色",
    highlightColor: "高亮颜色",
    defaultTextColor: "默认文字",
    clearHighlight: "取消高亮",
    customColor: "自定义",
    insertMenu: "插入",
    moreButton: "更多",
    moreFormat: "更多格式",
    alignLeft: "左对齐",
    alignCenter: "居中",
    alignRight: "右对齐",
    decreaseIndent: "减少缩进",
    increaseIndent: "增加缩进",
    insertLink: "链接",
    removeLink: "取消链接",
    clearFormat: "清除格式",
    insertImage: "插入图片",
    docImageSize: "图片大小",
    docImageOriginal: "原始",
    docImageRemove: "删除图片",
    docImageResize: "拖动调整图片大小",
    docImageUploading: "图片上传中...",
    docImageUploaded: "图片已插入",
    docImageTokenRequired: "配置同步 Token 后才能插入图片。",
    docImageTooLarge: "图片太大，单张上限 {size}。",
    docImageTypeUnsupported: "仅支持 JPG、PNG、WebP、GIF、AVIF 图片。",
    docImageCountLimit: "每篇 DOC 最多插入 {count} 张图片。",
    docImageTotalLimit: "DOC 图片总量不能超过 {size}。",
    docImageUploadFailed: "图片上传失败",
    linkPrompt: "输入链接地址",
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
    cloudAuto: "实时同步",
    cloudReady: "实时同步已连接",
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
    titleSaved: "已保存",
    titleUnsaved: "未保存",
    syncRefreshing: "正在从云端恢复...",
    syncRefreshedAt: "已从云端刷新 {time}",
    syncPushedAt: "已同步到云端 {time}",
    syncPulledAt: "已从云端更新 {time}",
    syncCheckedAt: "已检查云端 {time}",
    syncVerifying: "已上传，正在校验云端...",
    syncVerifiedAt: "已同步并校验 {time}",
    syncTimeout: "云端响应超时，已保留本地内容",
    syncOfflineEditing: "离线编辑，联网后自动同步",
    syncConnecting: "正在连接云端...",
    syncVerifyFailed: "云端校验未通过，已保留待同步",
    syncDiagnostics: "待同步 {dirty} · 最近校验 {time}",
    syncDiagnosticsNever: "无",
    syncBlockedDirty: "云端有更新，本地正在编辑，已保留本地",
    syncNoChange: "云端暂无更新",
    syncBusy: "正在同步，请稍后再试",
    saveNote: "保存",
    saveNoteShortcut: "保存 Ctrl+S",
    syncNote: "同步",
    saveAll: "上传待同步内容",
    syncAll: "从云端恢复",
    noteSavedToCloud: "当前笔记已保存到云端 {time}",
    notePulledFromCloud: "当前笔记已从云端更新 {time}",
    cloudNoteMissing: "云端没有找到这篇笔记",
    syncStatusSynced: "已和云端一致",
    syncStatusDirty: "本地未保存到云端",
    syncStatusOffline: "未连接云同步",
    syncForcePullConfirm: "将用云端版本刷新本地内容，可能覆盖尚未同步的修改。确定继续吗？",
    transferAssistantTitle: "文件传输助手",
    transferAssistantBody: "",
    transferAssistantExcerpt: "跨设备临时传文件",
    transferPanelTitle: "文件传输助手",
    transferPanelMeta: "文字、图片和文件会按时间混合显示，适合跨设备临时中转。",
    transferInfo: "查看传输说明",
    transferStreamTitle: "消息",
    transferStreamHint: "文字、图片和文件会按时间混合显示。",
    transferTextTitle: "文本传输",
    transferTextHint: "把临时文本发到这里，其他设备同步后可直接复制。",
    transferTextLimits: "单条最大 {size}，最近保留 {count} 条。",
    transferTextPlaceholder: "粘贴要同步到其他设备的文本...",
    transferTextSendHint: "Enter 换行，Ctrl+Enter 发送；也可以粘贴图片或拖入文件。",
    transferTextSend: "发送",
    transferTextRefresh: "刷新",
    transferTextClear: "清空",
    transferClearAll: "清空",
    transferTextCopy: "复制",
    transferTextDelete: "删除",
    transferTextNoToken: "配置同步 Token 后可使用文本传输。",
    transferTextEmpty: "暂无文本消息。",
    transferTextLoading: "正在读取文本消息...",
    transferTextSending: "正在发送...",
    transferTextCopied: "文本已复制",
    transferTextCopyDenied: "当前浏览器不允许复制文本。",
    transferTextDeleted: "文本已删除",
    transferTextCleared: "文本已清空",
    transferTextTooLarge: "文本太长，单条上限 {size}。",
    transferTextClearConfirm: "清空所有文本消息？",
    transferClearAllConfirm: "清空全部文本、图片和文件？",
    transferCleared: "全部消息和文件已清空",
    transferClearFailed: "清空失败，请稍后重试",
    transferTextFailed: "文本传输失败",
    transferTextApiUnavailable: "文本接口不可用，部署到 Cloudflare 后才能使用。",
    transferFileTitle: "文件传输",
    transferFileMeta: "最多保留 {count} 个文件，新上传时自动移除最早的文件；单文件最大 {fileSize}，总量最大 {totalSize}。",
    transferDropTitle: "拖放文件到这里，或点击上传。",
    transferDropHint: "也可以直接粘贴图片，或把图片和文件拖到消息区。",
    transferNoToken: "配置同步 Token 后可使用文件传输。",
    transferEmpty: "暂无文件。",
    transferLoading: "正在读取文件列表...",
    transferUpload: "上传文件",
    transferRefresh: "刷新",
    transferDownload: "下载",
    transferCopyImage: "复制图片",
    transferImageExpand: "放大图片",
    transferImageCollapse: "收起图片",
    transferDelete: "删除",
    transferUploading: "正在上传...",
    transferDownloading: "正在下载...",
    transferUploaded: "文件已上传",
    transferDownloaded: "文件已下载",
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
    imageTooLarge: "图片太大，已跳过。建议单张图片小于 2MB。",
    imagePasteFailed: "图片粘贴失败",
    imagePasted: "已插入图片",
    inputComposing: "正在确认中文输入，确认后再同步。",
    codeCopy: "复制",
    markdownEmpty: "开始写 Markdown 后，这里会实时预览。",
    syncSettings: "登录",
    clientDownload: "客户端下载",
    installDesktopClient: "安装到电脑端",
    layoutThree: "三栏视图",
    layoutTwo: "两栏视图",
    layoutOne: "内容视图",
    installPromptUnavailable: "当前浏览器暂未提供桌面安装入口。",
    syncCopy: "实时同步会自动上传和拉取云端更新；网络暂时不可用时，内容仍会保存在本地。",
    syncToken: "同步 Token",
    autoSync: "实时同步：自动上传和拉取",
    pushCloud: "上传待同步内容",
    pullCloud: "从云端恢复",
    clearToken: "清除 Token",
    syncLocalReady: "未连接云同步，本地编辑可正常使用。",
    tokenCleared: "已清除本地 Token。",
    editorSearchLabel: "查找",
    modeTxt: "TXT",
    modeMd: "MD",
    modeDoc: "DOC",
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
    newNoteTitleLabel: "笔记名",
    newNoteTitlePlaceholder: "留空则使用默认名称",
    newNoteTypeLabel: "笔记类型",
    newNoteTypeTxt: "TXT 纯文本",
    newNoteTypeMd: "MD Markdown",
    newNoteTypeDoc: "DOC 文档",
    newNoteFolderLabel: "文件夹",
    create: "创建",
    searchPlaceholderShort: "搜索笔记...",
    backup: "备份全部 JSON",
    allNotesTab: "全部",
    favoritesTab: "★ 收藏",
  },
  en: {
    workspaceTitle: "Content Desk",
    overviewCurrentNote: "Current Note",
    overviewSyncStatus: "Sync Status",
    overviewContentStats: "Content Stats",
    overviewLibrary: "Library",
    overviewNoNote: "No note open",
    overviewDefaultFolder: "Default folder",
    overviewNotConnected: "Cloud sync not connected",
    overviewAllNotes: "All notes",
    overviewCurrentLine: "Current line",
    mobileNotes: "Notes",
    openNotes: "Open notes",
    closeNotes: "Close notes",
    newNote: "New Note",
    titlePlaceholder: "Write a clear title",
    folderPlaceholder: "Folder, e.g. WK / Client Site",
    editorPlaceholder: "TXT is for paths, accounts, commands, and lists; MD is for structured technical notes; DOC is for formatted documents. Ctrl+Z / Ctrl+Y keep the browser's native editing flow.",
    docPlaceholder: "Edit like a lightweight document: headings, bold, italic, colors, highlights, and lists.",
    sync: "Sync",
    installDesktop: "Install App",
    androidApp: "Android App",
    androidAppTitle: "Install & Update",
    androidAppCopy: "Install the APK on Android. When GitHub Release publishes a newer build, this panel can check it and open the latest package.",
    androidDownload: "Download Android APK",
    androidCheckUpdate: "Check Update",
    androidVersionLoading: "Reading version...",
    androidWebVersion: "Current environment: web",
    androidCurrentVersion: "Current app: {version} ({build})",
    androidUpdateReady: "New version {version} is available.",
    androidUpdateLatest: "Already latest: {version}",
    androidUpdateChecking: "Checking for updates...",
    androidUpdateFailed: "Update check failed. You can download the latest APK directly.",
    androidUpdateUnavailable: "The current version could not be confirmed. You can download the latest APK directly.",
    androidDownloadOpening: "Opening Android APK download link...",
    androidDownloadInstalling: "Downloading APK. The Android installer will open when it finishes...",
    androidDownloadReadyToInstall: "APK downloaded. Confirm installation in the Android installer.",
    androidDownloadProgress: "APK download progress",
    androidUnknownSourceBlocked: "Allow NanStar Note to install unknown apps, then tap download again.",
    androidUpdatePrompt: "New version {version} is available. Download it now?",
    androidUnknownVersion: "Unknown version",
    androidPanelReady: "Download or check the NanStar Note Android package here.",
    import: "Import",
    exportCurrent: "Export Current",
    exportMenu: "Export",
    exportDialogTitle: "Export",
    exportCurrentTitle: "Export Current Note",
    exportCurrentCopy: "TXT exports .txt; MD exports .md/.txt/PDF; DOC exports .txt/.html/PDF",
    exportDefault: "Default",
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
    docMode: "DOC mode",
    showPreview: "Show preview",
    hidePreview: "Hide preview",
    undo: "Undo Ctrl+Z",
    redo: "Redo Ctrl+Y",
    bold: "Bold",
    italic: "Italic",
    inlineCode: "Inline code",
    unorderedList: "Bulleted list",
    orderedList: "Numbered list",
    taskList: "Task list",
    quote: "Quote",
    codeBlock: "Code block",
    underline: "Underline",
    strikethrough: "Strikethrough",
    heading: "Heading",
    paragraphStyle: "Paragraph style",
    fontFamily: "Font",
    fontSize: "Font size",
    defaultFont: "Default font",
    paragraphBody: "Body",
    heading1: "Heading 1",
    heading2: "Heading 2",
    heading3: "Heading 3",
    textColor: "Text color",
    highlightColor: "Highlight color",
    defaultTextColor: "Default text",
    clearHighlight: "Clear highlight",
    customColor: "Custom",
    insertMenu: "Insert",
    moreButton: "More",
    moreFormat: "More formats",
    alignLeft: "Align left",
    alignCenter: "Align center",
    alignRight: "Align right",
    decreaseIndent: "Decrease indent",
    increaseIndent: "Increase indent",
    insertLink: "Link",
    removeLink: "Remove link",
    clearFormat: "Clear format",
    insertImage: "Insert image",
    docImageSize: "Image size",
    docImageOriginal: "Original",
    docImageRemove: "Remove image",
    docImageResize: "Drag to resize image",
    docImageUploading: "Uploading image...",
    docImageUploaded: "Image inserted",
    docImageTokenRequired: "Configure the sync token before inserting images.",
    docImageTooLarge: "Image is too large. Limit: {size}.",
    docImageTypeUnsupported: "Only JPG, PNG, WebP, GIF, and AVIF images are supported.",
    docImageCountLimit: "Keep at most {count} images in each DOC note.",
    docImageTotalLimit: "DOC images cannot exceed {size} in total.",
    docImageUploadFailed: "Image upload failed",
    linkPrompt: "Enter link URL",
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
    cloudAuto: "Realtime sync",
    cloudReady: "Realtime sync connected",
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
    titleSaved: "Saved",
    titleUnsaved: "Unsaved",
    syncRefreshing: "Restoring from the cloud...",
    syncRefreshedAt: "Refreshed from cloud {time}",
    syncPushedAt: "Synced to cloud {time}",
    syncPulledAt: "Updated from cloud {time}",
    syncCheckedAt: "Checked cloud {time}",
    syncVerifying: "Uploaded, verifying cloud...",
    syncVerifiedAt: "Synced and verified {time}",
    syncTimeout: "Cloud response timed out; local content was kept",
    syncOfflineEditing: "Offline editing, will sync when connected",
    syncConnecting: "Connecting to cloud...",
    syncVerifyFailed: "Cloud verification failed; kept pending sync",
    syncDiagnostics: "Dirty notes {dirty} · last verify {time}",
    syncDiagnosticsNever: "never",
    syncBlockedDirty: "Cloud changed, local edit kept",
    syncNoChange: "No cloud changes",
    syncBusy: "Sync is already running",
    saveNote: "Save",
    saveNoteShortcut: "Save Ctrl+S",
    syncNote: "Sync",
    saveAll: "Upload pending changes",
    syncAll: "Restore from cloud",
    noteSavedToCloud: "Current note saved to cloud {time}",
    notePulledFromCloud: "Current note updated from cloud {time}",
    cloudNoteMissing: "This note was not found in cloud",
    syncStatusSynced: "Same as cloud",
    syncStatusDirty: "Local changes not saved to cloud",
    syncStatusOffline: "Cloud sync is not connected",
    syncForcePullConfirm: "This will refresh local content from the cloud and may overwrite unsynced changes. Continue?",
    transferAssistantTitle: "File Transfer",
    transferAssistantBody: "",
    transferAssistantExcerpt: "Temporary cross-device files",
    transferPanelTitle: "File Transfer Assistant",
    transferPanelMeta: "Text, images, and files appear together in chronological order.",
    transferInfo: "View transfer details",
    transferStreamTitle: "Messages",
    transferStreamHint: "Text, images, and files appear together in chronological order.",
    transferTextTitle: "Text Transfer",
    transferTextHint: "Send temporary text here and copy it from another device after sync.",
    transferTextLimits: "Max {size} per message, keeping the latest {count}.",
    transferTextPlaceholder: "Paste text to sync to other devices...",
    transferTextSendHint: "Enter for a new line, Ctrl+Enter to send; paste images or drop files too.",
    transferTextSend: "Send",
    transferTextRefresh: "Refresh",
    transferTextClear: "Clear",
    transferClearAll: "Clear all",
    transferTextCopy: "Copy",
    transferTextDelete: "Delete",
    transferTextNoToken: "Configure the sync token to use text transfer.",
    transferTextEmpty: "No text messages yet.",
    transferTextLoading: "Loading text messages...",
    transferTextSending: "Sending...",
    transferTextCopied: "Text copied",
    transferTextCopyDenied: "This browser does not allow copying text.",
    transferTextDeleted: "Text deleted",
    transferTextCleared: "Text cleared",
    transferTextTooLarge: "Text is too long. Limit: {size}.",
    transferTextClearConfirm: "Clear all text messages?",
    transferClearAllConfirm: "Clear all text messages, images, and files?",
    transferCleared: "All messages and files cleared",
    transferClearFailed: "Could not clear everything. Try again.",
    transferTextFailed: "Text transfer failed",
    transferTextApiUnavailable: "Text API is unavailable. It works after Cloudflare deployment.",
    transferFileTitle: "File Transfer",
    transferFileMeta: "Keep up to {count} files; new uploads replace the oldest file. Max {fileSize} per file, max {totalSize} total.",
    transferDropTitle: "Drop files here, or click upload.",
    transferDropHint: "You can also paste an image or drop images and files into the message area.",
    transferNoToken: "Configure the sync token to use file transfer.",
    transferEmpty: "No files yet.",
    transferLoading: "Loading files...",
    transferUpload: "Upload File",
    transferRefresh: "Refresh",
    transferDownload: "Download",
    transferCopyImage: "Copy Image",
    transferImageExpand: "Enlarge image",
    transferImageCollapse: "Collapse image",
    transferDelete: "Delete",
    transferUploading: "Uploading...",
    transferDownloading: "Downloading...",
    transferUploaded: "File uploaded",
    transferDownloaded: "File downloaded",
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
    imageTooLarge: "Image is too large and was skipped. Keep each image under 2MB.",
    imagePasteFailed: "Failed to paste image",
    imagePasted: "Image inserted",
    inputComposing: "Finish IME input before syncing.",
    codeCopy: "Copy",
    markdownEmpty: "Start writing Markdown to preview it here.",
    syncSettings: "Login",
    clientDownload: "Client Download",
    installDesktopClient: "Install Desktop App",
    layoutThree: "Three Columns",
    layoutTwo: "Two Columns",
    layoutOne: "Content Only",
    installPromptUnavailable: "The desktop install prompt is not available in this browser yet.",
    syncCopy: "Realtime sync automatically pushes and pulls cloud updates. Your content stays local while the network is unavailable.",
    syncToken: "Sync Token",
    autoSync: "Realtime sync: push and pull automatically",
    pushCloud: "Upload pending changes",
    pullCloud: "Restore from cloud",
    clearToken: "Clear Token",
    syncLocalReady: "Cloud sync is not connected. Local editing still works.",
    tokenCleared: "Local token cleared.",
    editorSearchLabel: "Find",
    modeTxt: "TXT",
    modeMd: "MD",
    modeDoc: "DOC",
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
    newNoteTitleLabel: "Name",
    newNoteTitlePlaceholder: "Leave empty to use the default name",
    newNoteTypeLabel: "Type",
    newNoteTypeTxt: "TXT Plain text",
    newNoteTypeMd: "MD Markdown",
    newNoteTypeDoc: "DOC Document",
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
  doc: {
    title: "未命名 DOC",
    mode: "doc",
    folder: "默认文件夹",
    body: "<p></p>"
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
  syncTokenTimer: null,
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
  transferDownloads: [],
  transferLoading: false,
  transferError: "",
  transferLastFetchAt: 0,
  transferLimits: null,
  transferMessages: [],
  transferTextLoading: false,
  transferTextSending: false,
  transferTextError: "",
  transferTextLastFetchAt: 0,
  transferTextLimits: null,
  transferImageUrls: {},
  transferImageLoading: new Set(),
  transferExpandedImages: new Set(),
  transferScrollToBottom: false,
  lastCloudPullAt: 0,
  dirtyNoteIds: new Set(),
  contextMenuFolder: null,
  contextMenuNoteId: null,
  docSelection: null,
  docHistory: {
    noteId: null,
    undo: [],
    redo: [],
    last: "",
    applying: false
  },
  docSelectedImage: null,
  docImageUploading: false,
  docImageResize: null
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));
const DEFAULT_SPLIT_RATIO = 52;
const DEFAULT_SIDEBAR_WIDTH = 280;
const DEFAULT_YOUDAO_RAIL_WIDTH = 210;
const DEFAULT_YOUDAO_LIST_WIDTH = 312;
const YOUDAO_RAIL_COLLAPSED_WIDTH = 84;
const YOUDAO_RAIL_WIDTH_MIN = 168;
const YOUDAO_RAIL_WIDTH_MAX = 286;
const YOUDAO_LIST_WIDTH_MIN = 260;
const YOUDAO_LIST_WIDTH_MAX = 480;
const SYNC_POLL_INTERVAL = 3000;
const SYNC_PUSH_DELAY = 500;
const SYNC_REQUEST_TIMEOUT = 12000;
const CRDT_STATE_VERSION = "2";
const NOTE_SYNC_ENGINE = "crdt";
const DOC_DEFAULT_TEXT_COLOR = "#111827";
const DOC_DEFAULT_HIGHLIGHT_COLOR = "#fef3c7";
const DOC_HISTORY_LIMIT = 40;
const DOC_FONT_SIZE_TO_COMMAND = new Map([
  ["12", "2"],
  ["14", "3"],
  ["16", "4"],
  ["18", "5"],
  ["24", "6"],
  ["32", "7"]
]);
const DOC_COMMAND_TO_FONT_SIZE = new Map([
  ["1", "10"],
  ["2", "12"],
  ["3", "14"],
  ["4", "16"],
  ["5", "18"],
  ["6", "24"],
  ["7", "32"]
]);
const DOC_FONT_FAMILIES = new Set(["Microsoft YaHei", "SimSun", "SimHei", "KaiTi", "Arial", "Times New Roman", "Consolas"]);
const DOC_FONT_FAMILY_ALIASES = new Map([
  ...Array.from(DOC_FONT_FAMILIES, (family) => [family.toLowerCase(), family]),
  ["microsoft yahei ui", "Microsoft YaHei"],
  ["微软雅黑", "Microsoft YaHei"],
  ["宋体", "SimSun"],
  ["黑体", "SimHei"],
  ["楷体", "KaiTi"],
  ["times", "Times New Roman"]
]);
const DOC_IMAGE_MAX_BYTES = 8 * 1024 * 1024;
const DOC_IMAGE_MAX_PER_NOTE = 20;
const DOC_IMAGE_MAX_TOTAL_BYTES = 250 * 1024 * 1024;
const DOC_IMAGE_TYPES = new Set(["image/png", "image/jpeg", "image/webp", "image/gif", "image/avif"]);
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
const MAX_PASTE_IMAGE_BYTES = 2 * 1024 * 1024;
const MAX_TRANSFER_IMAGES = 8;
const TRANSFER_MAX_FILES = 8;
const TRANSFER_MAX_FILE_BYTES = 35 * 1024 * 1024;
const TRANSFER_MAX_TOTAL_BYTES = 512 * 1024 * 1024;
const TRANSFER_TEXT_MAX_MESSAGES = 100;
const TRANSFER_TEXT_MAX_BYTES = 20 * 1024;
const MOBILE_LAYOUT_QUERY = "(max-width: 760px)";
const ANDROID_RELEASE_BASE_URL = "https://github.com/ggbondgh/nanstar-note/releases/latest/download";
const ANDROID_APK_URL = `${ANDROID_RELEASE_BASE_URL}/nanstar-note.apk`;
const ANDROID_UPDATE_URL = `${ANDROID_RELEASE_BASE_URL}/update.json`;
const ANDROID_RELEASE_API_URL = "https://api.github.com/repos/ggbondgh/nanstar-note/releases/latest";
const CLOUD_API_ORIGIN = "https://nanstar-note.pages.dev";
let appRuntimeInfoPromise = null;
let androidUpdateProgressListenerPromise = null;
let androidInstallPromise = null;
let androidWebDownloadStarted = false;
let editorLineMeasureNode = null;
let editorLineLayoutCache = null;
let editorLineLayoutFrame = 0;
let transferPanelRenderFrame = 0;
let transferUploadQueue = Promise.resolve();

function nativeRuntime() {
  const capacitor = window.Capacitor;
  return Boolean(
    capacitor?.isNativePlatform?.()
    || (typeof capacitor?.getPlatform === "function" && capacitor.getPlatform() !== "web")
    || window.location.protocol === "capacitor:"
  );
}

function getAndroidUpdaterPlugin() {
  const capacitor = window.Capacitor;
  if (!capacitor) return null;
  if (capacitor.Plugins?.NanStarUpdater) return capacitor.Plugins.NanStarUpdater;
  if (typeof capacitor.registerPlugin !== "function") return null;
  try {
    return capacitor.registerPlugin("NanStarUpdater");
  } catch (error) {
    console.warn("Android updater plugin registration failed", error);
    return null;
  }
}

function apiUrl(path) {
  const raw = String(path || "");
  if (/^https?:\/\//i.test(raw)) return raw;
  const cleaned = raw.replace(/^\.\//, "");
  const normalized = cleaned.startsWith("/") ? cleaned : `/${cleaned}`;
  return nativeRuntime() ? `${CLOUD_API_ORIGIN}${normalized}` : `.${normalized}`;
}

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

function mergeFolderLists(...lists) {
  return [INBOX_FOLDER, ...normalizedStoredFolderNames(lists.flat().filter(Boolean))];
}

function normalizeFolderName(folder) {
  const value = canonicalFolderName(folder);
  return folderManagementEnabled() ? value : INBOX_FOLDER;
}

const elements = {
  appShell: $(".app-shell"),
  sidebar: $(".sidebar"),
  sidebarResizer: $("#sidebarResizer"),
  youdaoRailResizer: $("#youdaoRailResizer"),
  youdaoFilterButtons: $$("[data-youdao-filter]"),
  youdaoLayoutButtons: $$("[data-youdao-layout]"),
  youdaoTransferButton: $("#youdaoTransferButton"),
  youdaoClientMenu: $("#youdaoClientMenu"),
  youdaoClientSummary: $("#youdaoClientSummary"),
  youdaoInstallDesktopButton: $("#youdaoInstallDesktopButton"),
  youdaoAndroidAppButton: $("#youdaoAndroidAppButton"),
  youdaoSyncSettingsButton: $("#youdaoSyncSettingsButton"),
  mobileNotesButton: $("#mobileNotesButton"),
  mobileSidebarBackdrop: $("#mobileSidebarBackdrop"),
  cloudStatus: $("#cloudStatus"),
  sidebarToggleButton: $("#sidebarToggleButton"),
  sidebarQuickNewButton: $("#sidebarQuickNewButton"),
  newNoteButton: $("#newNoteButton"),
  saveAllButton: $("#saveAllButton"),
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
  newNoteTitleInput: $("#newNoteTitleInput"),
  newNoteTypeSelect: $("#newNoteTypeSelect"),
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
  dashboardOverview: $("#dashboardOverview"),
  overviewNoteLabel: $("#overviewNoteLabel"),
  overviewSyncLabel: $("#overviewSyncLabel"),
  overviewContentLabel: $("#overviewContentLabel"),
  overviewLibraryLabel: $("#overviewLibraryLabel"),
  overviewNoteTitle: $("#overviewNoteTitle"),
  overviewNoteMeta: $("#overviewNoteMeta"),
  overviewSyncStatus: $("#overviewSyncStatus"),
  overviewSyncMeta: $("#overviewSyncMeta"),
  overviewContentStats: $("#overviewContentStats"),
  overviewContentMeta: $("#overviewContentMeta"),
  overviewLibraryStats: $("#overviewLibraryStats"),
  overviewLibraryMeta: $("#overviewLibraryMeta"),
  editorSection: $("#editorSection"),
  editorSectionState: $("#editorSectionState"),
  editorTitle: $("#editorTitle"),
  previewTitle: $("#previewTitle"),
  titleInput: $("#titleInput"),
  titleSaveStatus: $("#titleSaveStatus"),
  titleSaveStatusText: $("#titleSaveStatusText"),
  modeButtons: $$(".mode-button"),
  noteCloudActions: $("#noteCloudActions"),
  activeNoteSyncDot: $("#activeNoteSyncDot"),
  saveNoteButton: $("#saveNoteButton"),
  syncNoteButton: $("#syncNoteButton"),
  folderInput: $("#folderInput"),
  editorFindBar: $("#editorFindBar"),
  editorSearchInput: $("#editorSearchInput"),
  editorSearchCount: $("#editorSearchCount"),
  editorSearchPrevButton: $("#editorSearchPrevButton"),
  editorSearchNextButton: $("#editorSearchNextButton"),
  editorSearchCloseButton: $("#editorSearchCloseButton"),
  toolbar: $(".toolbar"),
  docBlockSelect: $("#docBlockSelect"),
  docFontSelect: $("#docFontSelect"),
  docFontSizeSelect: $("#docFontSizeSelect"),
  docTextColorSwatch: $("#docTextColorSwatch"),
  docHighlightSwatch: $("#docHighlightSwatch"),
  togglePreviewButton: $("#togglePreviewButton"),
  splitEditor: $("#splitEditor"),
  splitter: $("#splitter"),
  lineNumbers: $("#lineNumbers"),
  lineNumbersTrack: $("#lineNumbersTrack"),
  editorLineHighlight: $("#editorLineHighlight"),
  textShell: $("#textShell"),
  bodyInput: $("#bodyInput"),
  docInput: $("#docInput"),
  docImageInput: $("#docImageInput"),
  docImageSelectionFrame: $("#docImageSelectionFrame"),
  docImageControls: $("#docImageControls"),
  docImageControlLabel: $("#docImageControlLabel"),
  docImageOriginalButton: $("#docImageOriginalButton"),
  docImageRemoveButton: $("#docImageRemoveButton"),
  docImageResizeHandle: $("#docImageResizeHandle"),
  docImageUploadIndicator: $("#docImageUploadIndicator"),
  docImageUploadText: $("#docImageUploadText"),
  docTextColorInput: $("#docTextColorInput"),
  docHighlightInput: $("#docHighlightInput"),
  previewPane: $("#previewPane"),
  previewContent: $("#previewContent"),
  previewFocusButton: $("#previewFocusButton"),
  modeHint: $("#modeHint"),
  transferPanel: $("#transferPanel"),
  transferPanelTitle: $("#transferPanelTitle"),
  transferPanelMeta: $("#transferPanelMeta"),
  transferInfoButton: $("#transferInfoButton"),
  transferInfoPopover: $("#transferInfoPopover"),
  transferStreamTitle: $("#transferStreamTitle"),
  transferStreamHint: $("#transferStreamHint"),
  transferTextClearButton: $("#transferTextClearButton"),
  transferMessageList: $("#transferMessageList"),
  transferTextInput: $("#transferTextInput"),
  transferTextSendButton: $("#transferTextSendButton"),
  transferTextSendHint: $("#transferTextSendHint"),
  transferDropHint: $("#transferDropHint"),
  transferRefreshButton: $("#transferRefreshButton"),
  transferUploadButton: $("#transferUploadButton"),
  transferFileInput: $("#transferFileInput"),
  saveStatus: $("#saveStatus"),
  syncState: $("#syncState"),
  wordCount: $("#wordCount"),
  createdAt: $("#createdAt"),
  updatedAt: $("#updatedAt"),
  importButton: $("#importButton"),
  exportButton: $("#exportButton"),
  androidAppDialog: $("#androidAppDialog"),
  appVersionLabel: $("#appVersionLabel"),
  appUpdateStatus: $("#appUpdateStatus"),
  androidDownloadProgress: $("#androidDownloadProgress"),
  androidDownloadProgressFill: $("#androidDownloadProgressFill"),
  androidDownloadProgressText: $("#androidDownloadProgressText"),
  downloadAndroidAppButton: $("#downloadAndroidAppButton"),
  checkAppUpdateButton: $("#checkAppUpdateButton"),
  exportDialog: $("#exportDialog"),
  exportCurrentButton: $("#exportCurrentButton"),
  exportCurrentFormats: $("#exportCurrentFormats"),
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
  syncDiagnostics: $("#syncDiagnostics"),
  toast: $("#toast")
};

init();

function init() {
  state.notes = loadNotes();
  state.activeId = localStorage.getItem(storageKeys.activeNote) || state.notes[0]?.id || null;
  restoreDirtyNotes();
  elements.syncTokenInput.value = localStorage.getItem(storageKeys.syncToken) || "";
  const hasSyncToken = Boolean(elements.syncTokenInput.value.trim());
  localStorage.setItem(storageKeys.autoSync, hasSyncToken ? "1" : "0");
  elements.autoSyncToggle.checked = hasSyncToken;
  elements.autoSyncToggle.disabled = true;
  migrateFolderState();
  prepareCrdtStorage();
  saveNotes();
  initCrdtFromState();
  applyLanguage(state.language, true);
  applySidebarWidth(readSidebarWidth());
  applyYoudaoRailWidth(readYoudaoRailWidth());
  applyYoudaoListWidth(readYoudaoListWidth());
  applyYoudaoLayout(readYoudaoLayout(), { persist: false, toggle: false });
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
  hydrateAppUpdatePanel();
}

function bindEvents() {
  elements.newNoteButton.addEventListener("click", () => openNewNoteDialog());
  elements.sidebarToggleButton.addEventListener("click", toggleSidebar);
  elements.sidebarQuickNewButton?.addEventListener("click", () => openNewNoteDialog());
  elements.mobileNotesButton?.addEventListener("click", toggleMobileSidebar);
  elements.mobileSidebarBackdrop?.addEventListener("click", closeMobileSidebar);
  const mobileMedia = window.matchMedia?.(MOBILE_LAYOUT_QUERY);
  mobileMedia?.addEventListener?.("change", () => closeMobileSidebar());
  window.addEventListener("resize", () => {
    refreshEditorLineLayoutSoon();
    positionDocImageSelection();
  });
  window.visualViewport?.addEventListener?.("resize", refreshEditorLineLayoutSoon);
  window.visualViewport?.addEventListener?.("scroll", refreshEditorLineLayoutSoon);
  window.addEventListener("orientationchange", () => {
    window.setTimeout(refreshEditorLineLayoutSoon, 120);
  });
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
      applyNoteListScope({ viewFilter: button.dataset.filter || "all", selectedFolder: "" });
    });
  });

  elements.youdaoFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      applyNoteListScope({ viewFilter: button.dataset.youdaoFilter || "all", selectedFolder: "" });
    });
  });

  elements.youdaoTransferButton?.addEventListener("click", openTransferAssistant);
  elements.youdaoLayoutButtons.forEach((button) => {
    button.addEventListener("click", () => applyYoudaoLayout(button.dataset.youdaoLayout || "three"));
  });
  elements.youdaoInstallDesktopButton?.addEventListener("click", installDesktopClient);
  elements.youdaoAndroidAppButton?.addEventListener("click", openAndroidAppDialog);
  elements.youdaoClientSummary?.addEventListener("click", (event) => {
    if (!isMobileLayout()) return;
    event.preventDefault();
    openAndroidAppDialog();
  });
  elements.youdaoClientMenu?.addEventListener("toggle", () => {
    if (elements.youdaoClientMenu.open) window.requestAnimationFrame(positionClientMenu);
  });
  elements.youdaoSyncSettingsButton?.addEventListener("click", () => {
    elements.youdaoClientMenu?.removeAttribute("open");
    elements.syncDialog.showModal();
    elements.syncTokenInput.focus();
    elements.syncTokenInput.select();
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
    if (!event.target.closest("#youdaoClientMenu")) elements.youdaoClientMenu?.removeAttribute("open");
    if (!event.target.closest(".toolbar-menu")) closeToolbarMenus();
    if (!event.target.closest("#docInput, #docImageControls, #docImageResizeHandle")) clearDocImageSelection();
  });
  window.addEventListener("scroll", () => { hideFolderContextMenu(); hideNoteContextMenu(); closeToolbarMenus(); }, { capture: true });
  window.addEventListener("resize", () => positionOpenToolbarMenus());
  window.addEventListener("resize", positionClientMenu);

  // Note context menu
  if (elements.noteContextMenu) {
    elements.noteContextMenu.querySelectorAll(".context-menu-item").forEach(item => {
      item.addEventListener("click", (event) => {
        const action = item.dataset.action;
        if (action === "move" || action === "move-to") {
          event.preventDefault();
          event.stopPropagation();
          return;
        }
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
  bindNoteInput(elements.docInput);
  elements.bodyInput.addEventListener("paste", handleEditorPaste);
  elements.bodyInput.addEventListener("scroll", syncLineNumberScroll);
  elements.bodyInput.addEventListener("keyup", handleEditorCursorChange);
  elements.bodyInput.addEventListener("click", handleEditorCursorChange);
  elements.bodyInput.addEventListener("select", handleEditorCursorChange);
  elements.docInput?.addEventListener("paste", handleDocImagePaste);
  elements.docInput?.addEventListener("dragover", handleDocImageDragOver);
  elements.docInput?.addEventListener("dragleave", handleDocImageDragLeave);
  elements.docInput?.addEventListener("drop", handleDocImageDrop);
  elements.docInput?.addEventListener("scroll", positionDocImageSelection);
  elements.docInput?.addEventListener("click", handleDocTaskBoxClick);
  elements.docInput?.addEventListener("click", handleDocImageClick);
  elements.docInput?.addEventListener("keydown", handleDocImageKeydown);
  elements.docInput?.addEventListener("keydown", handleDocKeydown);
  elements.docInput?.addEventListener("beforeinput", handleDocBeforeInput);
  elements.docInput?.addEventListener("blur", normalizeDocInputHtml);
  ["keyup", "mouseup", "click"].forEach((eventName) => {
    elements.docInput?.addEventListener(eventName, () => {
      saveDocSelection();
      updateDocToolbarState();
    });
  });
  document.addEventListener("selectionchange", () => {
    if (document.activeElement === elements.bodyInput) handleEditorCursorChange();
    if (document.activeElement === elements.docInput) {
      saveDocSelection();
      updateDocToolbarState();
    }
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
    if (activeNote()?.mode === "doc") saveDocSelection();
    if (event.target.closest("button, summary")) event.preventDefault();
  });
  elements.toolbar.addEventListener("click", (event) => {
    const summary = event.target.closest(".toolbar-menu > summary");
    if (summary) {
      event.preventDefault();
      event.stopPropagation();
      toggleToolbarMenu(summary.closest(".toolbar-menu"));
      return;
    }
    const button = event.target.closest("button");
    if (button) {
      applyToolbarAction(button);
      closeToolbarMenu(button.closest(".toolbar-menu"));
    }
  });
  elements.toolbar.querySelectorAll("input[type='color']").forEach((input) => {
    input.addEventListener("click", (event) => event.stopPropagation());
  });
  elements.docBlockSelect?.addEventListener("change", () => applyDocBlock(elements.docBlockSelect.value, true));
  elements.docFontSelect?.addEventListener("change", () => applyDocFontFamily(elements.docFontSelect.value));
  elements.docFontSizeSelect?.addEventListener("change", () => applyDocFontSize(elements.docFontSizeSelect.value));
  elements.docTextColorInput?.addEventListener("input", () => applyDocColor("foreColor", elements.docTextColorInput.value));
  elements.docHighlightInput?.addEventListener("input", () => applyDocColor("hiliteColor", elements.docHighlightInput.value));
  elements.docImageInput?.addEventListener("change", () => {
    const files = Array.from(elements.docImageInput.files || []);
    elements.docImageInput.value = "";
    uploadAndInsertDocImages(files);
  });
  elements.docImageControls?.addEventListener("mousedown", (event) => event.preventDefault());
  elements.docImageControls?.addEventListener("click", handleDocImageControlClick);
  elements.docImageResizeHandle?.addEventListener("pointerdown", startDocImageResize);
  elements.docImageResizeHandle?.addEventListener("keydown", handleDocImageResizeKeydown);
  window.addEventListener("pointermove", continueDocImageResize);
  window.addEventListener("pointerup", finishDocImageResize);
  window.addEventListener("pointercancel", finishDocImageResize);
  bindSplitter();
  bindSidebarResizer();

  // New note dialog
  if (elements.newNoteConfirmBtn) {
    elements.newNoteConfirmBtn.addEventListener("click", () => {
      const folder = elements.newNoteFolderSelect?.value || INBOX_FOLDER;
      const title = elements.newNoteTitleInput?.value || "";
      const tpl = normalizeNewNoteType(elements.newNoteTypeSelect?.value);
      elements.newNoteDialog.close();
      createNote(tpl, folder, title);
      closeMobileSidebar();
    });
  }

  elements.deleteButton.addEventListener("click", deleteActiveNote);
  if (elements.duplicateButton) elements.duplicateButton.addEventListener("click", duplicateActiveNote);
  if (elements.copyMarkdownButton) elements.copyMarkdownButton.addEventListener("click", copyActiveContent);
  elements.exportButton.addEventListener("click", openExportDialog);
  elements.exportCurrentFormats?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-export-format]");
    if (!button || button.hidden || button.disabled) return;
    exportCurrentNote(button.dataset.exportFormat || "default");
    elements.exportDialog?.close();
  });
  elements.exportFolderButton?.addEventListener("click", exportSelectedFolderFromDialog);
  elements.exportAllButton?.addEventListener("click", () => {
    exportAllNotesZip();
    elements.exportDialog?.close();
  });
  elements.importButton.addEventListener("click", () => elements.importFileInput.click());
  elements.importFileInput.addEventListener("change", importFile);
  elements.downloadAndroidAppButton?.addEventListener("click", openAndroidDownload);
  elements.checkAppUpdateButton?.addEventListener("click", checkAndroidUpdate);
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

  elements.saveNoteButton?.addEventListener("click", () => saveCurrentNoteToCloud());
  elements.syncNoteButton?.addEventListener("click", () => syncCurrentNoteFromCloud());
  elements.saveAllButton?.addEventListener("click", () => syncCloud({ manual: true, forcePush: true, reason: "save-all" }));
  elements.pushCloudButton.addEventListener("click", () => syncCloud({ manual: true, forcePush: true, reason: "save-all" }));
  elements.pullCloudButton.addEventListener("click", confirmForcePullCloud);
  elements.syncRefreshButton?.addEventListener("click", () => {
    confirmForcePullCloud();
  });
  elements.logoutCloudButton.addEventListener("click", clearSyncToken);
  elements.syncTokenInput.addEventListener("input", handleSyncTokenInput);
  elements.autoSyncToggle.addEventListener("change", () => {
    localStorage.setItem(storageKeys.autoSync, elements.autoSyncToggle.checked ? "1" : "0");
    renderSyncMeta();
    if (elements.autoSyncToggle.checked) startCloudSync({ immediate: true });
    else stopCloudSync();
  });
  window.addEventListener("online", () => {
    writeSyncMeta({ connectionState: "checking", lastError: "" });
    renderSyncMeta();
    startCloudSync({ immediate: true });
  });
  window.addEventListener("offline", () => {
    writeSyncMeta({ connectionState: "offline" });
    renderSyncMeta();
    stopCloudSync();
  });
  window.addEventListener("focus", () => {
    if (document.visibilityState !== "hidden") {
      syncCloudInBackground({ silent: true, pullOnly: true, reason: "focus" });
    }
  });
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      syncCloudInBackground({ silent: true, pullOnly: true, reason: "visible" });
    }
  });

  window.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    if (handleDocEditorShortcut(event, key)) return;
    if ((event.ctrlKey || event.metaKey) && key === "f") {
      if (activeNote()?.mode === "doc") return;
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
    if (key === "escape" && document.body.classList.contains("mobile-sidebar-open")) {
      event.preventDefault();
      closeMobileSidebar();
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

function isMobileLayout() {
  return Boolean(window.matchMedia?.(MOBILE_LAYOUT_QUERY)?.matches || window.innerWidth <= 760);
}

function closeToolbarMenu(menu) {
  if (!menu) return;
  menu.removeAttribute("open");
  const panel = menu.querySelector(".toolbar-menu-panel");
  if (!panel) return;
  panel.classList.remove("toolbar-menu-panel-fixed");
  panel.style.position = "";
  panel.style.left = "";
  panel.style.right = "";
  panel.style.top = "";
  panel.style.bottom = "";
  panel.style.maxWidth = "";
  panel.style.maxHeight = "";
}

function closeToolbarMenus(except = null) {
  document.querySelectorAll(".toolbar-menu[open]").forEach((menu) => {
    if (menu !== except) closeToolbarMenu(menu);
  });
}

function toggleToolbarMenu(menu) {
  if (!menu) return;
  const shouldOpen = !menu.hasAttribute("open");
  closeToolbarMenus(menu);
  if (!shouldOpen) {
    closeToolbarMenu(menu);
    return;
  }
  menu.setAttribute("open", "");
  positionToolbarMenu(menu);
}

function positionOpenToolbarMenus() {
  document.querySelectorAll(".toolbar-menu[open]").forEach(positionToolbarMenu);
}

function positionToolbarMenu(menu) {
  const summary = menu?.querySelector("summary");
  const panel = menu?.querySelector(".toolbar-menu-panel");
  if (!summary || !panel) return;

  const gutter = isMobileLayout() ? 8 : 12;
  const rect = summary.getBoundingClientRect();
  const viewportWidth = document.documentElement.clientWidth || window.innerWidth;
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const maxWidth = Math.max(160, viewportWidth - gutter * 2);
  panel.classList.add("toolbar-menu-panel-fixed");
  panel.style.position = "fixed";
  panel.style.right = "auto";
  panel.style.maxWidth = `${maxWidth}px`;

  const measuredWidth = Math.min(panel.getBoundingClientRect().width || 220, maxWidth);
  const left = Math.min(Math.max(gutter, rect.left), Math.max(gutter, viewportWidth - measuredWidth - gutter));
  const belowTop = rect.bottom + 6;
  const belowSpace = viewportHeight - belowTop - gutter;
  const aboveSpace = rect.top - gutter;
  panel.style.left = `${left}px`;
  if (belowSpace < 150 && aboveSpace > belowSpace) {
    panel.style.top = "auto";
    panel.style.bottom = `${Math.max(gutter, viewportHeight - rect.top + 6)}px`;
    panel.style.maxHeight = `${Math.max(140, aboveSpace - 8)}px`;
  } else {
    panel.style.top = `${belowTop}px`;
    panel.style.bottom = "auto";
    panel.style.maxHeight = `${Math.max(140, belowSpace)}px`;
  }
}

function positionClientMenu() {
  const menu = elements.youdaoClientMenu;
  const summary = menu?.querySelector("summary");
  const panel = menu?.querySelector(".youdao-client-panel");
  if (!menu?.open || !summary || !panel) return;

  const gutter = isMobileLayout() ? 12 : 10;
  const viewportWidth = document.documentElement.clientWidth || window.innerWidth;
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const maxWidth = Math.max(160, viewportWidth - gutter * 2);
  const summaryRect = summary.getBoundingClientRect();

  panel.style.setProperty("position", "fixed", "important");
  panel.style.setProperty("left", "0px", "important");
  panel.style.setProperty("right", "auto", "important");
  panel.style.setProperty("top", "0px", "important");
  panel.style.setProperty("bottom", "auto", "important");
  panel.style.setProperty("width", `${Math.min(190, maxWidth)}px`, "important");
  panel.style.setProperty("max-width", `${maxWidth}px`, "important");
  panel.style.setProperty("max-height", `${Math.max(140, viewportHeight - gutter * 2)}px`, "important");

  const panelRect = panel.getBoundingClientRect();
  const width = Math.min(panelRect.width || 190, maxWidth);
  const height = panelRect.height;
  const left = Math.min(
    Math.max(gutter, summaryRect.right - width),
    Math.max(gutter, viewportWidth - width - gutter)
  );
  const belowTop = summaryRect.bottom + 8;
  const belowSpace = viewportHeight - belowTop - gutter;
  const aboveSpace = summaryRect.top - gutter;
  const placeAbove = aboveSpace >= height || aboveSpace > belowSpace;
  const top = placeAbove
    ? Math.max(gutter, summaryRect.top - height - 8)
    : Math.min(belowTop, Math.max(gutter, viewportHeight - height - gutter));

  panel.style.setProperty("left", `${left}px`, "important");
  panel.style.setProperty("top", `${top}px`, "important");
}

function setMobileSidebarOpen(open) {
  const shouldOpen = Boolean(open) && isMobileLayout();
  document.body.classList.toggle("mobile-sidebar-open", shouldOpen);
  if (elements.mobileNotesButton) {
    elements.mobileNotesButton.setAttribute("aria-expanded", String(shouldOpen));
    elements.mobileNotesButton.title = shouldOpen ? t("closeNotes") : t("openNotes");
    elements.mobileNotesButton.setAttribute("aria-label", shouldOpen ? t("closeNotes") : t("openNotes"));
  }
}

function toggleMobileSidebar() {
  setMobileSidebarOpen(!document.body.classList.contains("mobile-sidebar-open"));
}

function openMobileSidebar() {
  setMobileSidebarOpen(true);
}

function closeMobileSidebar() {
  setMobileSidebarOpen(false);
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
  if (activeNote()?.mode === "doc") {
    renderPreview();
    renderSyncMeta();
    return;
  }
  updateCurrentLineIndicator();
  updateLineNumbers();
  syncEditorSearchState();
}

function bindTransferPanelEvents() {
  elements.transferTextSendButton?.addEventListener("click", sendTransferText);
  elements.transferTextClearButton?.addEventListener("click", clearTransferMessages);
  elements.transferTextInput?.addEventListener("keydown", (event) => {
    if (event.isComposing || event.key !== "Enter" || !event.ctrlKey) return;
    event.preventDefault();
    sendTransferText();
  });
  elements.transferTextInput?.addEventListener("paste", handleTransferPaste);
  elements.transferTextInput?.addEventListener("input", scheduleTransferPanelRender);
  elements.transferMessageList?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-transfer-text-action]");
    if (button) {
      const id = button.dataset.id || "";
      const action = button.dataset.transferTextAction;
      if (action === "copy") copyTransferText(id);
      if (action === "delete") deleteTransferText(id);
      return;
    }
    const fileButton = event.target.closest("[data-transfer-action]");
    if (!fileButton) return;
    const id = fileButton.dataset.id || "";
    const action = fileButton.dataset.transferAction;
    if (action === "download") downloadTransferFile(id);
    if (action === "copy-image") copyTransferImage(id);
    if (action === "toggle-image") toggleTransferImage(id);
    if (action === "delete") deleteTransferFile(id);
  });
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
  elements.transferRefreshButton?.addEventListener("click", () => {
    fetchTransferMessages({ manual: true });
    fetchTransferFiles({ manual: true });
  });
  elements.transferMessageList?.addEventListener("dragover", (event) => {
    event.preventDefault();
    elements.transferMessageList.classList.add("dragging");
  });
  elements.transferMessageList?.addEventListener("dragleave", () => {
    elements.transferMessageList.classList.remove("dragging");
  });
  elements.transferMessageList?.addEventListener("drop", (event) => {
    event.preventDefault();
    elements.transferMessageList.classList.remove("dragging");
    uploadTransferFiles(Array.from(event.dataTransfer?.files || []));
  });
}

function transferEnabled() {
  return Boolean(getSyncToken());
}

function handleTransferPaste(event) {
  const imageFiles = Array.from(event.clipboardData?.items || [])
    .filter((item) => item.kind === "file" && /^image\//i.test(item.type || ""))
    .map((item) => item.getAsFile())
    .filter(Boolean);
  if (!imageFiles.length) return;
  event.preventDefault();
  uploadTransferFiles(imageFiles);
}

function resetTransferState() {
  Object.values(state.transferImageUrls).forEach((url) => URL.revokeObjectURL(url));
  state.transferFiles = [];
  state.transferUploads = [];
  state.transferDownloads = [];
  state.transferLoading = false;
  state.transferError = "";
  state.transferLastFetchAt = 0;
  state.transferLimits = null;
  state.transferMessages = [];
  state.transferTextLoading = false;
  state.transferTextSending = false;
  state.transferTextError = "";
  state.transferTextLastFetchAt = 0;
  state.transferTextLimits = null;
  state.transferImageUrls = {};
  state.transferImageLoading.clear();
  state.transferExpandedImages.clear();
  state.transferScrollToBottom = false;
}

function transferLimits() {
  const limits = state.transferLimits || {};
  return {
    maxFiles: Number(limits.maxFiles) || TRANSFER_MAX_FILES,
    maxFileBytes: Number(limits.maxFileBytes) || TRANSFER_MAX_FILE_BYTES,
    maxTotalBytes: Number(limits.maxTotalBytes) || TRANSFER_MAX_TOTAL_BYTES
  };
}

function transferTextLimits() {
  const limits = state.transferTextLimits || {};
  return {
    maxMessages: Number(limits.maxMessages) || TRANSFER_TEXT_MAX_MESSAGES,
    maxTextBytes: Number(limits.maxTextBytes) || TRANSFER_TEXT_MAX_BYTES
  };
}

function scheduleTransferPanelRender() {
  if (transferPanelRenderFrame) return;
  transferPanelRenderFrame = window.requestAnimationFrame(() => {
    transferPanelRenderFrame = 0;
    renderTransferPanel();
  });
}

function clampTransferPercent(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return 0;
  return Math.max(0, Math.min(100, Math.round(number)));
}

function transferProgressSnapshot(item) {
  const loaded = Math.max(0, Number(item?.loaded) || 0);
  const total = Math.max(0, Number(item?.total) || Number(item?.size) || 0);
  const percent = total > 0
    ? clampTransferPercent((loaded / total) * 100)
    : clampTransferPercent(item?.progress);
  return { loaded, total, percent };
}

function updateTransferProgress(item, snapshot = {}) {
  if (!item) return;
  item.loaded = Math.max(0, Number(snapshot.loaded) || 0);
  item.total = Math.max(0, Number(snapshot.total) || 0);
  item.progress = clampTransferPercent(snapshot.percent ?? transferProgressSnapshot(item).percent);
  scheduleTransferPanelRender();
}

function renderTransferPanel() {
  if (!elements.transferPanel) return;
  const activeTransfer = isTransferAssistant(activeNote());
  elements.transferPanel.hidden = !activeTransfer;
  if (!activeTransfer) return;

  const limits = transferLimits();
  const textLimits = transferTextLimits();
  if (elements.transferPanelTitle) elements.transferPanelTitle.textContent = t("transferPanelTitle");
  if (elements.transferPanelMeta) elements.transferPanelMeta.textContent = t("transferPanelMeta");
  if (elements.transferInfoButton) {
    elements.transferInfoButton.title = t("transferInfo");
    elements.transferInfoButton.setAttribute("aria-label", t("transferInfo"));
  }
  if (elements.transferInfoPopover) elements.transferInfoPopover.setAttribute("aria-label", t("transferInfo"));
  if (elements.transferStreamTitle) elements.transferStreamTitle.textContent = t("transferStreamTitle");
  if (elements.transferStreamHint) {
    elements.transferStreamHint.textContent = `${t("transferStreamHint")} ${t("transferTextLimits")
      .replace("{size}", formatBytes(textLimits.maxTextBytes))
      .replace("{count}", String(textLimits.maxMessages))}`;
  }
  if (elements.transferTextInput) elements.transferTextInput.placeholder = t("transferTextPlaceholder");
  if (elements.transferTextSendHint) elements.transferTextSendHint.textContent = t("transferTextSendHint");
  if (elements.transferTextSendButton) {
    elements.transferTextSendButton.textContent = state.transferTextSending ? t("transferTextSending") : t("transferTextSend");
  }
  if (elements.transferTextClearButton) {
    elements.transferTextClearButton.textContent = t("transferClearAll");
    elements.transferTextClearButton.title = t("transferClearAll");
    elements.transferTextClearButton.setAttribute("aria-label", t("transferClearAll"));
  }
  if (elements.transferDropHint) {
    elements.transferDropHint.textContent = `${t("transferDropHint")} ${t("transferFileMeta")
      .replace("{count}", String(limits.maxFiles))
      .replace("{fileSize}", formatBytes(limits.maxFileBytes))
      .replace("{totalSize}", formatBytes(limits.maxTotalBytes))}`;
  }
  if (elements.transferUploadButton) {
    const label = elements.transferUploadButton.querySelector("span:last-child");
    if (label) label.textContent = t("transferUpload");
  }
  if (elements.transferRefreshButton) elements.transferRefreshButton.textContent = t("transferRefresh");

  const enabled = transferEnabled();
  const uploading = state.transferUploads.some((item) => item.status === "uploading");
  const hasTransferRecords = Boolean(
    state.transferMessages.length
    || state.transferFiles.length
    || state.transferUploads.length
    || state.transferDownloads.length
  );
  const textInputValue = elements.transferTextInput?.value || "";
  if (elements.transferTextInput) elements.transferTextInput.disabled = !enabled || state.transferTextSending;
  if (elements.transferTextSendButton) {
    elements.transferTextSendButton.disabled = !enabled || state.transferTextSending || !textInputValue.trim();
  }
  if (elements.transferTextClearButton) {
    elements.transferTextClearButton.disabled = !enabled
      || state.transferTextLoading
      || state.transferLoading
      || uploading
      || !hasTransferRecords;
  }
  if (elements.transferUploadButton) elements.transferUploadButton.disabled = !enabled || uploading;
  if (elements.transferRefreshButton) elements.transferRefreshButton.disabled = !enabled || state.transferLoading || state.transferTextLoading;

  if (!enabled) {
    if (elements.transferMessageList) {
      elements.transferMessageList.innerHTML = `<div class="transfer-empty">${t("transferTextNoToken")}</div>`;
    }
    return;
  }

  if (!state.transferTextLastFetchAt && !state.transferTextLoading) {
    fetchTransferMessages({ silent: true });
  }
  if (!state.transferLastFetchAt && !state.transferLoading) {
    fetchTransferFiles({ silent: true });
  }

  if (!elements.transferMessageList) return;
  const items = transferStreamItems();
  const errorRows = [state.transferTextError, state.transferError]
    .filter(Boolean)
    .map((error) => `<div class="transfer-error compact">${escapeHtml(error)}</div>`)
    .join("");
  const loading = state.transferTextLoading || state.transferLoading;
  elements.transferMessageList.innerHTML = items.length
    ? `${errorRows}${items.map(renderTransferStreamItem).join("")}`
    : loading
      ? `<div class="transfer-empty">${t("transferLoading")}</div>`
      : `<div class="transfer-empty">${t("transferTextEmpty")}</div>`;
  if (state.transferScrollToBottom) {
    state.transferScrollToBottom = false;
    scrollTransferStreamToBottom();
  }
  hydrateTransferImagePreviews();
}

function scrollTransferStreamToBottom() {
  const list = elements.transferMessageList;
  if (!list) return;
  window.requestAnimationFrame(() => {
    list.scrollTop = list.scrollHeight;
  });
}

function transferStreamItems() {
  return [
    ...state.transferMessages.map((message) => ({
      kind: "text",
      createdAt: message.createdAt,
      item: message
    })),
    ...state.transferFiles.map((file) => ({
      kind: isTransferImage(file) ? "image" : "file",
      createdAt: file.createdAt,
      item: file
    })),
    ...state.transferUploads.map((upload) => ({
      kind: "upload",
      createdAt: upload.createdAt,
      item: upload
    })),
    ...state.transferDownloads.map((download) => ({
      kind: "download",
      createdAt: download.createdAt,
      item: download
    }))
  ].sort((a, b) => Number(a.createdAt || 0) - Number(b.createdAt || 0));
}

function renderTransferStreamItem(entry) {
  if (entry.kind === "text") return renderTransferMessageRow(entry.item);
  if (entry.kind === "image" || entry.kind === "file") return renderTransferFileRow(entry.item);
  return renderTransferTaskRow(
    entry.item,
    entry.kind === "download" ? "download" : "upload",
    entry.kind === "download" ? t("transferDownloading") : t("transferUploading"),
    entry.kind === "download" ? t("transferDownloaded") : t("transferUploaded")
  );
}

function renderTransferMessageRow(message) {
  const createdAt = Number(message.createdAt) || Date.now();
  return `
    <div class="transfer-message" data-transfer-text-id="${escapeAttribute(message.id)}">
      <div class="transfer-message-meta">
        <time datetime="${escapeAttribute(new Date(createdAt).toISOString())}">${formatShortDate(createdAt)}</time>
        <span>${formatBytes(message.sizeBytes || textByteLength(message.text))}</span>
      </div>
      <div class="transfer-message-body">${escapeHtml(message.text)}</div>
      <div class="transfer-message-actions">
        <button class="ghost-button" type="button" data-transfer-text-action="copy" data-id="${escapeAttribute(message.id)}">${t("transferTextCopy")}</button>
        <button class="danger-button" type="button" data-transfer-text-action="delete" data-id="${escapeAttribute(message.id)}">${t("transferTextDelete")}</button>
      </div>
    </div>
  `;
}

function hydrateTransferImagePreviews() {
  state.transferFiles
    .filter(isTransferImage)
    .forEach((file) => {
      if (state.transferImageUrls[file.id] || state.transferImageLoading.has(file.id)) return;
      state.transferImageLoading.add(file.id);
      fetchTransferBlob(`./api/files?id=${encodeURIComponent(file.id)}`, null)
        .then((blob) => {
          state.transferImageUrls[file.id] = URL.createObjectURL(blob);
        })
        .catch(() => {})
        .finally(() => {
          state.transferImageLoading.delete(file.id);
          scheduleTransferPanelRender();
        });
    });
}

async function fetchTransferMessages(options = {}) {
  if (!transferEnabled()) {
    state.transferMessages = [];
    state.transferTextError = "";
    renderTransferPanel();
    return;
  }
  state.transferTextLoading = true;
  state.transferTextError = "";
  state.transferTextLastFetchAt = Date.now();
  renderTransferPanel();
  try {
    const payload = await fetchTransferJson("./api/clipboard");
    state.transferMessages = Array.isArray(payload.messages)
      ? payload.messages.map(normalizeTransferMessage).sort(compareTransferMessages)
      : [];
    state.transferTextLimits = payload.limits || state.transferTextLimits;
    state.transferTextLastFetchAt = Date.now();
    state.transferScrollToBottom = true;
  } catch (error) {
    state.transferTextError = transferTextErrorText(error);
    if (options.manual) showToast(state.transferTextError);
  } finally {
    state.transferTextLoading = false;
    renderTransferPanel();
  }
}

async function sendTransferText() {
  if (!transferEnabled()) {
    showToast(t("transferTextNoToken"));
    return;
  }
  const input = elements.transferTextInput;
  const text = (input?.value || "").replace(/\r\n/g, "\n");
  if (!text.trim()) return;
  const limits = transferTextLimits();
  if (textByteLength(text) > limits.maxTextBytes) {
    showToast(t("transferTextTooLarge").replace("{size}", formatBytes(limits.maxTextBytes)));
    return;
  }

  state.transferTextSending = true;
  state.transferTextError = "";
  renderTransferPanel();
  try {
    const payload = await fetchTransferJson("./api/clipboard", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ text })
    });
    if (payload.message) {
      const message = normalizeTransferMessage(payload.message);
      state.transferMessages = [...state.transferMessages.filter((item) => item.id !== message.id), message]
        .sort(compareTransferMessages)
        .slice(-limits.maxMessages);
      state.transferScrollToBottom = true;
    } else {
      await fetchTransferMessages({ silent: true });
    }
    if (input) input.value = "";
  } catch (error) {
    state.transferTextError = transferTextErrorText(error);
    showToast(state.transferTextError);
  } finally {
    state.transferTextSending = false;
    renderTransferPanel();
  }
}

async function copyTransferText(id) {
  const message = state.transferMessages.find((item) => item.id === id);
  if (!message) return;
  try {
    await writeClipboardText(message.text);
    showToast(t("transferTextCopied"));
  } catch (error) {
    showToast(t("transferTextCopyDenied"));
  }
}

async function deleteTransferText(id) {
  const message = state.transferMessages.find((item) => item.id === id);
  if (!message) return;
  try {
    await fetchTransferJson(`./api/clipboard?id=${encodeURIComponent(id)}`, { method: "DELETE" });
    state.transferMessages = state.transferMessages.filter((item) => item.id !== id);
    showToast(t("transferTextDeleted"));
    renderTransferPanel();
  } catch (error) {
    showToast(transferTextErrorText(error));
  }
}

async function clearTransferMessages() {
  const hasTransferRecords = Boolean(
    state.transferMessages.length
    || state.transferFiles.length
    || state.transferUploads.length
    || state.transferDownloads.length
  );
  if (!hasTransferRecords) return;
  if (!window.confirm(t("transferClearAllConfirm"))) return;
  try {
    await Promise.all([
      fetchTransferJson("./api/clipboard?all=1", { method: "DELETE" }),
      fetchTransferJson("./api/files?all=1", { method: "DELETE" })
    ]);
    state.transferMessages = [];
    state.transferFiles = [];
    state.transferUploads = [];
    state.transferDownloads = [];
    Object.values(state.transferImageUrls).forEach((url) => URL.revokeObjectURL(url));
    state.transferImageUrls = {};
    state.transferImageLoading.clear();
    state.transferExpandedImages.clear();
    showToast(t("transferCleared"));
    renderTransferPanel();
  } catch (error) {
    showToast(t("transferClearFailed"));
  }
}

function renderTransferUploadRow(upload) {
  return renderTransferTaskRow(upload, "upload", t("transferUploading"), t("transferUploaded"));
}

function renderTransferDownloadRow(download) {
  return renderTransferTaskRow(download, "download", t("transferDownloading"), t("transferDownloaded"));
}

function renderTransferTaskRow(item, kind, actionLabel, doneLabel) {
  const failed = item.status === "error";
  const done = item.status === "done";
  const { loaded, total, percent } = transferProgressSnapshot(item);
  const currentPercent = failed ? 0 : done ? 100 : percent;
  const statusLabel = failed ? item.error || t("transferFailed") : done ? doneLabel : actionLabel;
  const metaText = formatBytes(item.size || total || loaded);
  const progressText = total > 0
    ? `${formatBytes(loaded)} / ${formatBytes(total)} · ${currentPercent}%`
    : `${formatBytes(loaded)} · ${currentPercent}%`;
  return `
    <div class="transfer-stream-item transfer-file ${failed ? "failed" : done ? "done" : kind === "download" ? "downloading" : "uploading"}" ${failed || done ? "" : 'aria-busy="true"'}>
      <div class="transfer-file-main">
        <div class="transfer-file-name">${escapeHtml(item.name)}</div>
        <div class="transfer-file-meta">${escapeHtml(metaText)} · ${escapeHtml(statusLabel)}</div>
        <div class="transfer-progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${currentPercent}" aria-label="${escapeAttribute(statusLabel)}">
          <div class="transfer-progress-track">
            <div class="transfer-progress-fill" style="width:${currentPercent}%"></div>
          </div>
          <div class="transfer-progress-text">
            <span>${escapeHtml(statusLabel)}</span>
            <span>${escapeHtml(progressText)}</span>
          </div>
        </div>
      </div>
      <div class="transfer-upload-status">${escapeHtml(failed ? t("transferFailed") : doneLabel)}</div>
    </div>
  `;
}

function renderTransferFileRow(file) {
  const image = isTransferImage(file);
  const downloadingTask = state.transferDownloads.find((item) => item.fileId === file.id && item.status !== "error" && item.status !== "done");
  const downloading = Boolean(downloadingTask);
  const previewUrl = image ? state.transferImageUrls[file.id] : "";
  const expanded = image && state.transferExpandedImages.has(file.id);
  return `
    <div class="transfer-stream-item transfer-file transfer-file-message ${image ? "is-image" : ""}" data-file-id="${escapeAttribute(file.id)}">
      ${image ? `
        <button
          class="transfer-image-preview${expanded ? " is-expanded" : ""}"
          type="button"
          data-transfer-action="toggle-image"
          data-id="${escapeAttribute(file.id)}"
          title="${escapeAttribute(t(expanded ? "transferImageCollapse" : "transferImageExpand"))}"
          aria-label="${escapeAttribute(t(expanded ? "transferImageCollapse" : "transferImageExpand"))}"
          aria-expanded="${expanded ? "true" : "false"}"
        >
          ${previewUrl
            ? `<img src="${escapeAttribute(previewUrl)}" alt="图片" loading="lazy" />`
            : `<span>${escapeHtml(t("transferLoading"))}</span>`}
        </button>
      ` : `
        <div class="transfer-file-main">
        <div class="transfer-file-name">${escapeHtml(file.name)}</div>
        <div class="transfer-file-meta">${escapeHtml(file.mimeType || "file")} · ${formatBytes(file.size)} · ${formatShortDate(file.createdAt)}</div>
        </div>
      `}
      <div class="transfer-file-actions">
        <button class="ghost-button" type="button" data-transfer-action="download" data-id="${escapeAttribute(file.id)}" ${downloading ? "disabled" : ""}>${downloading ? `${t("transferDownloading")} ${downloadingTask.progress ?? 0}%` : t("transferDownload")}</button>
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
    state.transferScrollToBottom = true;
  } catch (error) {
    state.transferError = transferErrorText(error);
    if (options.manual) showToast(state.transferError);
  } finally {
    state.transferLoading = false;
    renderTransferPanel();
  }
}

function uploadTransferFiles(files) {
  const nextFiles = Array.from(files || []);
  if (!nextFiles.length) return Promise.resolve();
  transferUploadQueue = transferUploadQueue
    .catch(() => {})
    .then(() => uploadTransferFilesInOrder(nextFiles));
  return transferUploadQueue;
}

async function uploadTransferFilesInOrder(files) {
  if (!transferEnabled()) {
    showToast(t("transferNoToken"));
    return;
  }
  const limits = transferLimits();

  for (const file of files) {
    if (file.size > limits.maxFileBytes) {
      showToast(t("transferTooLarge").replace("{size}", formatBytes(limits.maxFileBytes)));
      continue;
    }
    await uploadSingleTransferFile(file);
  }
}

async function uploadSingleTransferFile(file) {
  const upload = {
    id: createId(),
    name: file.name || "file",
    size: file.size || 0,
    createdAt: Date.now(),
    loaded: 0,
    total: file.size || 0,
    progress: 0,
    status: "uploading",
    error: ""
  };
  state.transferUploads.unshift(upload);
  renderTransferPanel();
  try {
    const result = await uploadTransferFileWithProgress(file, (snapshot) => {
      updateTransferProgress(upload, snapshot);
    });
    upload.status = "done";
    updateTransferProgress(upload, { loaded: file.size || 0, total: file.size || 0, percent: 100 });
    if (result.file) {
      state.transferFiles = [normalizeTransferFile(result.file), ...state.transferFiles.filter((item) => item.id !== result.file.id)];
      await fetchTransferFiles({ silent: true });
    }
    state.transferLastFetchAt = Date.now();
    state.transferScrollToBottom = true;
    showToast(t("transferUploaded"));
    window.setTimeout(() => {
      state.transferUploads = state.transferUploads.filter((item) => item.id !== upload.id);
      renderTransferPanel();
    }, 900);
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
  const task = {
    id: createId(),
    fileId: file.id,
    name: file.name || "file",
    size: file.size || 0,
    createdAt: Date.now(),
    loaded: 0,
    total: file.size || 0,
    progress: 0,
    status: "downloading",
    error: ""
  };
  state.transferDownloads.unshift(task);
  renderTransferPanel();
  try {
    const blob = await fetchTransferBlob(`./api/files?id=${encodeURIComponent(id)}`, (snapshot) => {
      updateTransferProgress(task, snapshot);
    });
    task.status = "done";
    updateTransferProgress(task, { loaded: file.size || task.size || 0, total: file.size || task.size || 0, percent: 100 });
    downloadBlob(file.name, blob);
    showToast(t("transferDownloaded"));
    window.setTimeout(() => {
      state.transferDownloads = state.transferDownloads.filter((item) => item.id !== task.id);
      renderTransferPanel();
    }, 900);
  } catch (error) {
    task.status = "error";
    task.error = transferErrorText(error);
    showToast(task.error);
    renderTransferPanel();
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

function toggleTransferImage(id) {
  if (!state.transferImageUrls[id]) return;
  if (state.transferExpandedImages.has(id)) {
    state.transferExpandedImages.delete(id);
  } else {
    state.transferExpandedImages.add(id);
  }
  renderTransferPanel();
}

async function deleteTransferFile(id) {
  const file = state.transferFiles.find((item) => item.id === id);
  if (!file) return;
  if (!window.confirm(`${t("transferDelete")}「${file.name}」？`)) return;
  try {
    await fetchTransferJson(`./api/files?id=${encodeURIComponent(id)}`, { method: "DELETE" });
    if (state.transferImageUrls[id]) {
      URL.revokeObjectURL(state.transferImageUrls[id]);
      delete state.transferImageUrls[id];
    }
    state.transferExpandedImages.delete(id);
    state.transferFiles = state.transferFiles.filter((item) => item.id !== id);
    showToast(t("transferDeleted"));
    renderTransferPanel();
  } catch (error) {
    showToast(transferErrorText(error));
  }
}

async function fetchTransferJson(url, options = {}) {
  const response = await fetch(apiUrl(url), {
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

function fetchTransferBlob(url, onProgress) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", apiUrl(url), true);
    xhr.responseType = "blob";
    xhr.setRequestHeader("authorization", `Bearer ${getSyncToken()}`);
    xhr.onprogress = (event) => {
      if (!onProgress) return;
      const total = event.lengthComputable ? Number(event.total) || 0 : 0;
      const loaded = Number(event.loaded) || 0;
      onProgress({
        loaded,
        total,
        progress: total > 0 ? (loaded / total) * 100 : 0
      });
    };
    xhr.onload = () => {
      if (xhr.status < 200 || xhr.status >= 300) {
        reject(new Error(xhr.responseText || xhr.statusText || `HTTP ${xhr.status}`));
        return;
      }
      resolve(xhr.response);
    };
    xhr.onerror = () => reject(new Error("Failed to fetch"));
    xhr.onabort = () => reject(new Error("Aborted"));
    xhr.send();
  });
}

function uploadTransferFileWithProgress(file, onProgress) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", apiUrl("./api/files"), true);
    xhr.responseType = "text";
    xhr.setRequestHeader("authorization", `Bearer ${getSyncToken()}`);
    xhr.setRequestHeader("content-type", file.type || "application/octet-stream");
    xhr.setRequestHeader("x-file-name", encodeURIComponent(file.name || "file"));
    xhr.setRequestHeader("x-file-size", String(file.size || 0));
    xhr.upload.onprogress = (event) => {
      if (!onProgress) return;
      const total = event.lengthComputable ? Number(event.total) || file.size || 0 : file.size || 0;
      const loaded = Number(event.loaded) || 0;
      onProgress({
        loaded,
        total,
        progress: total > 0 ? (loaded / total) * 100 : 0
      });
    };
    xhr.onload = () => {
      if (xhr.status < 200 || xhr.status >= 300) {
        reject(new Error(xhr.responseText || xhr.statusText || `HTTP ${xhr.status}`));
        return;
      }
      try {
        resolve(xhr.responseText ? JSON.parse(xhr.responseText) : {});
      } catch (error) {
        reject(error);
      }
    };
    xhr.onerror = () => reject(new Error("Failed to fetch"));
    xhr.onabort = () => reject(new Error("Aborted"));
    xhr.send(file);
  });
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

function normalizeTransferMessage(message) {
  const text = String(message?.text || "");
  return {
    id: String(message?.id || ""),
    text,
    sizeBytes: Number(message?.sizeBytes) || textByteLength(text),
    createdAt: Number(message?.createdAt) || Date.now()
  };
}

function compareTransferMessages(a, b) {
  return Number(a.createdAt || 0) - Number(b.createdAt || 0);
}

function isTransferImage(file) {
  return /^image\//i.test(file?.mimeType || "");
}

function textByteLength(value) {
  const text = String(value || "");
  if (typeof TextEncoder !== "undefined") return new TextEncoder().encode(text).length;
  return new Blob([text]).size;
}

async function writeClipboardText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.append(textarea);
  textarea.select();
  const ok = document.execCommand("copy");
  textarea.remove();
  if (!ok) throw new Error("clipboard");
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

function transferTextErrorText(error) {
  const raw = String(error?.message || error || "");
  let text = raw;
  try {
    const parsed = JSON.parse(raw);
    text = parsed.error || raw;
  } catch {}
  if (text.includes("Missing D1") || text.includes("NANSTAR_NOTES_DB")) return cloudErrorText(new Error("Missing D1"));
  if (text.includes("Missing NOTE_SYNC_TOKEN")) return cloudErrorText(new Error("Missing NOTE_SYNC_TOKEN"));
  if (text.includes("Unauthorized")) return t("transferBadToken");
  if (text.includes("Text is too large")) return t("transferTextTooLarge").replace("{size}", formatBytes(transferTextLimits().maxTextBytes));
  if (text.includes("Failed to fetch") || text.includes("Not found")) return t("transferTextApiUnavailable");
  return `${t("transferTextFailed")}：${text.slice(0, 120)}`;
}

async function hydrateAppUpdatePanel() {
  if (!elements.appVersionLabel && !elements.appUpdateStatus) return;
  if (elements.appVersionLabel) elements.appVersionLabel.textContent = t("androidVersionLoading");
  const info = await getAppRuntimeInfo();
  const versionName = info.versionName || t("androidUnknownVersion");
  const build = info.versionCode || "debug";
  if (elements.appVersionLabel) {
    elements.appVersionLabel.textContent = info.native
      ? t("androidCurrentVersion").replace("{version}", versionName).replace("{build}", build)
      : t("androidWebVersion");
  }
  if (elements.appUpdateStatus && !elements.appUpdateStatus.dataset.locked) {
    elements.appUpdateStatus.textContent = t("androidPanelReady");
  }
}

async function getAppRuntimeInfo() {
  if (appRuntimeInfoPromise) return appRuntimeInfoPromise;

  appRuntimeInfoPromise = (async () => {
    const capacitor = window.Capacitor;
    const native = Boolean(capacitor?.isNativePlatform?.());
    const appPlugin = capacitor?.Plugins?.App;

    if (native && appPlugin?.getInfo) {
      try {
        const info = await appPlugin.getInfo();
        return {
          native: true,
          versionName: info.version || "",
          versionCode: Number(info.build || 0)
        };
      } catch (error) {
        console.warn(error);
      }
    }

    return {
      native,
      versionName: "",
      versionCode: 0
    };
  })();

  return appRuntimeInfoPromise;
}

async function checkAndroidUpdate() {
  if (!elements.checkAppUpdateButton) return;
  elements.checkAppUpdateButton.disabled = true;
  setAppUpdateStatus(t("androidUpdateChecking"), true);

  try {
    const [current, latest] = await Promise.all([
      getAppRuntimeInfo(),
      fetchAndroidUpdateInfo()
    ]);

    const latestCode = Number(latest.versionCode || 0);
    const currentCode = Number(current.versionCode || 0);
    const latestName = latest.versionName || "Android App";
    if (!latestCode) throw new Error("Missing latest Android versionCode");
    const hasUpdate = !current.native || !currentCode || latestCode > currentCode;

    if (!hasUpdate) {
      const currentName = current.versionName || t("androidUnknownVersion");
      const message = t("androidUpdateLatest").replace("{version}", currentName);
      setAppUpdateStatus(message, true);
      showToast(message);
      return;
    }

    const message = t("androidUpdateReady").replace("{version}", latestName);
    setAppUpdateStatus(message, true);
    if (window.confirm(t("androidUpdatePrompt").replace("{version}", latestName))) {
      await installAndroidApk(latest.apkUrl || ANDROID_APK_URL);
    }
  } catch (error) {
    console.warn(error);
    setAppUpdateStatus(t("androidUpdateUnavailable"), true);
    showToast(t("androidUpdateUnavailable"));
  } finally {
    elements.checkAppUpdateButton.disabled = false;
  }
}

async function fetchAndroidUpdateInfo() {
  const manifestInfo = await fetchAndroidUpdateManifest();
  if (manifestInfo) return manifestInfo;

  try {
    const response = await fetch(apiUrl("/api/android-update"), { cache: "no-store" });
    if (response.ok) {
      return normalizeAndroidUpdateInfo(await response.json());
    }
  } catch {}

  const response = await fetch(ANDROID_RELEASE_API_URL, {
    cache: "no-store",
    headers: { Accept: "application/vnd.github+json" }
  });
  if (!response.ok) throw new Error(`GitHub Release query failed: ${response.status}`);

  const release = await response.json();
  let info = {};
  try {
    info = JSON.parse(release.body || "{}");
  } catch {
    info = {};
  }

  const apkAsset = Array.isArray(release.assets)
    ? release.assets.find((asset) => asset.name === "nanstar-note.apk")
    : null;

  return normalizeAndroidUpdateInfo(info, {
    versionName: release.name || "",
    apkUrl: apkAsset?.browser_download_url || ANDROID_APK_URL,
    releaseUrl: release.html_url || "https://github.com/ggbondgh/nanstar-note/releases/latest"
  });
}

async function fetchAndroidUpdateManifest() {
  try {
    const response = await fetch(freshUrl(ANDROID_UPDATE_URL), { cache: "no-store" });
    if (!response.ok) return null;
    const info = await response.json();
    return normalizeAndroidUpdateInfo(info);
  } catch {
    return null;
  }
}

function freshUrl(url) {
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}t=${Date.now()}`;
}

function normalizeAndroidUpdateInfo(info = {}, fallback = {}) {
  return {
    versionCode: Number(info.versionCode || fallback.versionCode || 0),
    versionName: info.versionName || fallback.versionName || "",
    apkUrl: info.apkUrl || fallback.apkUrl || ANDROID_APK_URL,
    releaseUrl: info.releaseUrl || fallback.releaseUrl || "https://github.com/ggbondgh/nanstar-note/releases/latest"
  };
}

function setAppUpdateStatus(message, locked = false) {
  if (!elements.appUpdateStatus) return;
  elements.appUpdateStatus.textContent = message;
  if (locked) elements.appUpdateStatus.dataset.locked = "1";
  else delete elements.appUpdateStatus.dataset.locked;
}

function setAndroidDownloadProgress({ loaded = 0, total = 0, state = "downloading" } = {}) {
  const progress = elements.androidDownloadProgress;
  const fill = elements.androidDownloadProgressFill;
  const text = elements.androidDownloadProgressText;
  if (!progress || !fill || !text) return;

  if (state === "failed") {
    progress.hidden = true;
    progress.classList.remove("indeterminate");
    return;
  }

  const safeLoaded = Math.max(0, Number(loaded) || 0);
  const safeTotal = Math.max(0, Number(total) || 0);
  const hasTotal = safeTotal > 0;
  const percent = hasTotal ? Math.min(100, Math.round((safeLoaded / safeTotal) * 100)) : -1;

  progress.hidden = false;
  progress.classList.toggle("indeterminate", !hasTotal);
  progress.setAttribute("aria-label", t("androidDownloadProgress"));
  if (hasTotal) {
    fill.style.width = `${percent}%`;
    progress.setAttribute("aria-valuenow", String(percent));
    text.textContent = `${percent}% · ${formatBytes(safeLoaded)} / ${formatBytes(safeTotal)}`;
  } else {
    fill.style.width = "34%";
    progress.removeAttribute("aria-valuenow");
    text.textContent = safeLoaded ? `${formatBytes(safeLoaded)}` : "…";
  }
}

async function ensureAndroidUpdateProgressListener() {
  const updaterPlugin = getAndroidUpdaterPlugin();
  if (!nativeRuntime() || !updaterPlugin?.addListener) return;
  if (!androidUpdateProgressListenerPromise) {
    androidUpdateProgressListenerPromise = Promise.resolve()
      .then(() => updaterPlugin.addListener("downloadProgress", (event = {}) => {
        setAndroidDownloadProgress(event);
      }))
      .catch((error) => {
        androidUpdateProgressListenerPromise = null;
        console.warn("Android update progress listener failed", error);
      });
  }
  await androidUpdateProgressListenerPromise;
}

function openAndroidDownload() {
  return installAndroidApk(ANDROID_APK_URL);
}

function openAndroidAppDialog() {
  elements.topbarMenu?.removeAttribute("open");
  elements.youdaoClientMenu?.removeAttribute("open");
  androidWebDownloadStarted = false;
  if (elements.downloadAndroidAppButton) elements.downloadAndroidAppButton.disabled = false;
  hydrateAppUpdatePanel();
  elements.androidAppDialog?.showModal();
}

async function installDesktopClient() {
  elements.youdaoClientMenu?.removeAttribute("open");
  const installed = await window.nanstarInstallApp?.();
  if (!installed) {
    showToast(t("installPromptUnavailable"));
  }
}

function installAndroidApk(url) {
  if (androidInstallPromise) return androidInstallPromise;
  if (!nativeRuntime() && androidWebDownloadStarted) return Promise.resolve();
  if (!nativeRuntime()) {
    androidWebDownloadStarted = true;
    if (elements.downloadAndroidAppButton) elements.downloadAndroidAppButton.disabled = true;
  }
  androidInstallPromise = installAndroidApkOnce(url).finally(() => {
    androidInstallPromise = null;
  });
  return androidInstallPromise;
}

async function installAndroidApkOnce(url) {
  const updaterPlugin = getAndroidUpdaterPlugin();
  if (nativeRuntime() && updaterPlugin?.installApk) {
    setAndroidDownloadProgress({ state: "downloading" });
    if (elements.downloadAndroidAppButton) elements.downloadAndroidAppButton.disabled = true;
    if (elements.checkAppUpdateButton) elements.checkAppUpdateButton.disabled = true;
    try {
      setAppUpdateStatus(t("androidDownloadInstalling"), true);
      await ensureAndroidUpdateProgressListener();
      await updaterPlugin.installApk({ url });
      setAppUpdateStatus(t("androidDownloadReadyToInstall"), true);
      showToast(t("androidDownloadReadyToInstall"));
      return;
    } catch (error) {
      const message = String(error?.code || error?.message || error || "");
      if (message.includes("unknown_sources")) {
        setAppUpdateStatus(t("androidUnknownSourceBlocked"), true);
        showToast(t("androidUnknownSourceBlocked"));
        return;
      }
      console.warn(error);
      setAndroidDownloadProgress({ state: "failed" });
      setAppUpdateStatus(t("androidUpdateFailed"), true);
      showToast(t("androidUpdateFailed"));
      return;
    } finally {
      if (elements.downloadAndroidAppButton) elements.downloadAndroidAppButton.disabled = false;
      if (elements.checkAppUpdateButton) elements.checkAppUpdateButton.disabled = false;
    }
  }

  setAndroidDownloadProgress({ state: "failed" });
  try {
    setAppUpdateStatus(t("androidDownloadOpening"), true);
    await openExternalUrl(url || ANDROID_APK_URL);
  } catch (error) {
    androidWebDownloadStarted = false;
    if (elements.downloadAndroidAppButton) elements.downloadAndroidAppButton.disabled = false;
    console.warn(error);
    setAppUpdateStatus(t("androidUpdateFailed"), true);
    showToast(t("androidUpdateFailed"));
  }
}

async function openExternalUrl(url) {
  const browserPlugin = window.Capacitor?.Plugins?.Browser;
  if (browserPlugin?.open) {
    await browserPlugin.open({ url });
    return;
  }

  window.location.assign(url);
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
  const rawBody = String(note.body || "");
  const mode = normalizeMode(note.mode, rawBody);
  const body = mode === "doc" ? sanitizeDocHtml(rawBody || "<p></p>") : rawBody;
  return {
    id: note.id || createId(),
    title: note.title || "未命名笔记",
    mode,
    folder: canonicalFolderName(note.folder),
    body,
    pinned: Boolean(note.pinned),
    favorite: Boolean(note.favorite),
    system: note.system || "",
    editorSectionOpen: typeof note.editorSectionOpen === "boolean" ? note.editorSectionOpen : mode === "md" || mode === "doc",
    previewVisible: note.previewVisible === true,
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

function foldersSignature(folders = storedFolders()) {
  return JSON.stringify([INBOX_FOLDER, ...normalizedStoredFolderNames(folders)].map(canonicalFolderName));
}

function snapshotSignature(notes = syncableNotes(), folders = storedFolders()) {
  const normalizedNotes = (Array.isArray(notes) ? notes : [])
    .map(normalizeNote)
    .filter((note) => !isTransferAssistant(note) && !isFolderRegistry(note))
    .sort((a, b) => a.id.localeCompare(b.id));
  return JSON.stringify({
    notes: normalizedNotes,
    folders: JSON.parse(foldersSignature(folders))
  });
}

function cloudSnapshotNotes(payload) {
  return Array.isArray(payload?.notes) ? payload.notes.map(normalizeNote) : [];
}

function cloudSnapshotFolders(payload) {
  if (Array.isArray(payload?.folders)) return payload.folders;
  return storedFolders(cloudSnapshotNotes(payload));
}

function cloudSnapshotSignature(payload) {
  return snapshotSignature(cloudSnapshotNotes(payload), cloudSnapshotFolders(payload));
}

function cloudNoteSignatures(notes = []) {
  return Object.fromEntries(
    (Array.isArray(notes) ? notes : [])
      .map(normalizeNote)
      .filter((note) => !isTransferAssistant(note) && !isFolderRegistry(note))
      .map((note) => [note.id, notesSignature([note])])
  );
}

function cloudSnapshotMetaPatch(notes = syncableNotes(), folders = storedFolders()) {
  return {
    cloudNoteSignatures: cloudNoteSignatures(notes),
    cloudFoldersSignature: foldersSignature(folders)
  };
}

function writeKnownCloudSnapshot(notes = syncableNotes(), folders = storedFolders(), patch = {}) {
  return writeSyncMeta({ ...cloudSnapshotMetaPatch(notes, folders), ...patch });
}

function writeKnownCloudNote(note, patch = {}) {
  const normalized = normalizeNote(note);
  const meta = readSyncMeta();
  const signatures = {
    ...(meta.cloudNoteSignatures && typeof meta.cloudNoteSignatures === "object" ? meta.cloudNoteSignatures : {})
  };
  signatures[normalized.id] = notesSignature([normalized]);
  return writeSyncMeta({
    cloudNoteSignatures: signatures,
    ...patch
  });
}

function noteCloudStatus(note, syncMeta = readSyncMeta()) {
  if (!note || isTransferAssistant(note) || isFolderRegistry(note)) return { status: "hidden", label: "" };
  if (!getSyncToken()) return { status: "offline", label: t("syncStatusOffline") };
  if (navigator.onLine === false || syncMeta.connectionState === "offline") {
    return {
      status: isDirtyNoteId(note.id) || Boolean(syncMeta.pending) ? "dirty" : "offline",
      label: t("syncOfflineEditing")
    };
  }
  if (state.syncInFlight && state.syncAction === "pushing" && note.id === state.activeId) {
    return { status: "saving", label: t("syncPushing") };
  }
  const pendingInput = state.savePendingNoteId === note.id;
  const knownSignature = syncMeta.cloudNoteSignatures?.[note.id] || "";
  const localSignature = notesSignature([note]);
  if (!pendingInput && knownSignature && knownSignature === localSignature && !isDirtyNoteId(note.id)) {
    return { status: "synced", label: t("syncStatusSynced") };
  }
  return { status: "dirty", label: t("syncStatusDirty") };
}

function isDefaultSeedState(notes = state.notes) {
  const visible = notes.map(normalizeNote).filter((note) => !isDeletedNote(note) && !isTransferAssistant(note) && !isFolderRegistry(note));
  if (visible.length !== defaultNotes.length) return false;
  return defaultNotes.every((seed) => visible.some((note) => note.title === seed.title && note.body === seed.body));
}

function normalizeMode(mode, body) {
  if (mode === "doc" || mode === "rich" || mode === "html") return "doc";
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
  clearTimeout(state.saveTimer);
  state.savePendingNoteId = state.activeId;
  markNoteDirty(state.savePendingNoteId);
  setSaveStatus(t("saving"));
  state.saveTimer = window.setTimeout(() => {
    saveNotes();
    setSaveStatus(getSyncToken() ? t("syncPending") : message);
    markSyncPending(state.savePendingNoteId);
    state.savePendingNoteId = null;
  }, 140);
}

function clearNotePendingState(noteId) {
  if (!noteId) return;
  if (state.savePendingNoteId === noteId) {
    clearTimeout(state.saveTimer);
    state.saveTimer = null;
    state.savePendingNoteId = null;
  }
  state.dirtyNoteIds.delete(noteId);
  const meta = readSyncMeta();
  const dirtyIds = Array.isArray(meta.dirtyNoteIds)
    ? meta.dirtyNoteIds.filter((id) => id && id !== noteId)
    : dirtyNoteIds();
  writeSyncMeta({
    pending: dirtyIds.length > 0,
    dirtyNoteIds: dirtyIds,
    lastError: ""
  });
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

function ensureCrdtPendingUpdatesForDirty() {
  if (!crdtAvailable()) return;
  const hasDirtyState = dirtyNoteIds().length > 0 || Boolean(readSyncMeta().pending);
  if (!hasDirtyState || state.crdtPendingUpdates.length) return;
  state.crdtPendingUpdates = [fullCrdtUpdateBase64()];
  writeCrdtPendingUpdates();
}

function prepareCurrentNoteForSync(options = {}) {
  const noteId = options.noteId || state.activeId;
  if (state.noteInputComposing && !options.allowComposing) return false;

  const pendingNoteId = state.savePendingNoteId || noteId;
  if (state.saveTimer) {
    clearTimeout(state.saveTimer);
    state.saveTimer = null;
    if (pendingNoteId) markNoteDirty(pendingNoteId);
    state.savePendingNoteId = null;
  }

  if (noteId && noteId === state.activeId) {
    const { changed } = applyActiveInputsToNote({ touchUpdatedAt: false });
    if (changed) markNoteDirty(noteId);
  }

  if (options.forcePush && !hasDirtyNotes()) markAllNotesDirty();
  saveNotes();

  if (hasDirtyNotes() && getSyncToken()) {
    writeSyncMeta({ pending: true, dirtyNoteIds: dirtyNoteIds(), lastError: "" });
    renderSyncMeta();
  }

  return true;
}

function isDirtyNoteId(noteId) {
  return Boolean(noteId && state.dirtyNoteIds.has(noteId));
}

function hasDirtyNotes() {
  return state.dirtyNoteIds.size > 0 || Boolean(readSyncMeta().pending);
}

function markNoteDirty(noteId = state.activeId) {
  if (noteId) state.dirtyNoteIds.add(noteId);
}

function markAllNotesDirty() {
  visibleNotes().forEach((note) => state.dirtyNoteIds.add(note.id));
  const registry = folderRegistryNote();
  if (registry) state.dirtyNoteIds.add(registry.id);
}

function restoreDirtyNotes() {
  const dirtyIds = readSyncMeta().dirtyNoteIds;
  state.dirtyNoteIds = new Set(Array.isArray(dirtyIds) ? dirtyIds.filter(Boolean) : []);
}

function dirtyNoteIds() {
  return [...state.dirtyNoteIds].filter(Boolean);
}

function crdtAvailable() {
  return NOTE_SYNC_ENGINE === "crdt" && Boolean(window.Y && state.crdtDoc && state.crdtNotes && state.crdtFolders);
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
  if (state.crdtPendingUpdates.length) {
    localStorage.setItem(storageKeys.crdtPendingUpdates, JSON.stringify(state.crdtPendingUpdates));
  } else {
    localStorage.removeItem(storageKeys.crdtPendingUpdates);
  }
}

function clearLegacyCrdtSyncState(options = {}) {
  state.crdtPendingUpdates = [];
  localStorage.removeItem(storageKeys.crdtPendingUpdates);
  localStorage.removeItem(storageKeys.crdtUpdateId);
  if (options.clearOrphanPending && !dirtyNoteIds().length && readSyncMeta().pending) {
    writeSyncMeta({ pending: false, dirtyNoteIds: [], lastError: "" });
  }
}

function prepareCrdtStorage() {
  const version = localStorage.getItem(storageKeys.crdtStateVersion);
  if (version === CRDT_STATE_VERSION) return;
  localStorage.removeItem(storageKeys.crdtDocState);
  localStorage.removeItem(storageKeys.crdtPendingUpdates);
  localStorage.removeItem(storageKeys.crdtUpdateId);
  localStorage.setItem(storageKeys.crdtStateVersion, CRDT_STATE_VERSION);
}

function readCrdtDocState() {
  return localStorage.getItem(storageKeys.crdtDocState) || "";
}

function writeCrdtDocState() {
  if (!state.crdtDoc || !window.Y) return;
  try {
    localStorage.setItem(storageKeys.crdtDocState, fullCrdtUpdateBase64());
  } catch {}
}

function initCrdtFromState(options = {}) {
  if (!window.Y) return;
  createCrdtDoc();
  state.crdtPendingUpdates = readCrdtPendingUpdates();
  if (options.clearPending && state.crdtPendingUpdates.length) {
    state.crdtPendingUpdates = [];
    writeCrdtPendingUpdates();
  }
  const storedDocState = readCrdtDocState();
  let restored = false;
  if (storedDocState) {
    try {
      state.crdtApplying = true;
      window.Y.applyUpdate(state.crdtDoc, base64ToBytes(storedDocState), "restore");
      state.crdtPendingUpdates.forEach((update) => {
        if (update) window.Y.applyUpdate(state.crdtDoc, base64ToBytes(update), "restore-pending");
      });
      state.crdtApplying = false;
      restored = true;
      applyCrdtToState({ render: false });
    } catch {
      state.crdtApplying = false;
      localStorage.removeItem(storageKeys.crdtDocState);
    }
  }
  if (!restored) {
    state.crdtApplying = true;
    writeStateToCrdt({ force: true, origin: "seed" });
    state.crdtApplying = false;
    writeCrdtDocState();
  }
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
    writeCrdtDocState();
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
        "pinned", "favorite", "system", "previewVisible", "editorSectionOpen"
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

function readStateFromCrdtDoc(doc) {
  if (!window.Y || !doc) return { notes: [], folders: [] };
  const crdtNotes = doc.getMap("notes");
  const crdtFolders = doc.getMap("folders");
  const notes = [];
  crdtNotes.forEach((noteMap) => {
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
      system: noteMap.get("system"),
      previewVisible: noteMap.get("previewVisible"),
      editorSectionOpen: noteMap.get("editorSectionOpen")
    }));
  });
  const folders = Array.from(crdtFolders.keys()).map(canonicalFolderName);
  return { notes, folders };
}

function readStateFromCrdt() {
  if (!crdtAvailable()) return { notes: state.notes, folders: storedFolders() };
  return readStateFromCrdtDoc(state.crdtDoc);
}

function snapshotFromCrdtUpdates(updates) {
  if (!window.Y) return { notes: [], folders: [] };
  const doc = new window.Y.Doc();
  try {
    (updates || []).forEach((item) => {
      const update = typeof item === "string" ? item : item?.update;
      if (update) window.Y.applyUpdate(doc, base64ToBytes(update), "verify");
    });
    return readStateFromCrdtDoc(doc);
  } finally {
    doc.destroy?.();
  }
}

function applyCrdtToState({ render = true } = {}) {
  if (!crdtAvailable()) return;
  const snapshot = readStateFromCrdt();
  state.crdtApplying = true;
  state.notes = snapshot.notes.sort((a, b) => Number(b.pinned) - Number(a.pinned) || noteVersion(b) - noteVersion(a));
  setStoredFolders(snapshot.folders);
  ensureActiveNote();
  saveNotes();
  writeCrdtDocState();
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
  if (NOTE_SYNC_ENGINE !== "crdt" || !getSyncToken() || !elements.autoSyncToggle.checked) return;
  state.autoSyncTimer = window.setTimeout(() => {
    state.autoSyncTimer = null;
    syncCloudInBackground({ silent: true, reason: "local-change" });
  }, SYNC_PUSH_DELAY);
}

function syncCloudInBackground(options = {}) {
  window.setTimeout(() => {
    syncCloud(options).catch((error) => {
      console.error("Background sync failed", error);
    });
  }, 0);
}

function queueSyncRequest(options = {}) {
  const queued = state.syncQueue[0];
  const incomingPush = !options.pullOnly || options.forcePush;
  const queuedPush = queued && (!queued.pullOnly || queued.forcePush);
  if (queuedPush && !incomingPush) return;
  state.syncQueue = [{
    ...(queued || {}),
    ...options,
    manual: Boolean(queued?.manual || options.manual),
    silent: Boolean(queued ? queued.silent && options.silent : options.silent),
    forcePush: Boolean(queued?.forcePush || options.forcePush),
    pullOnly: incomingPush ? false : Boolean(options.pullOnly)
  }];
}

function applyActiveInputsToNote(options = {}) {
  const note = activeNote();
  if (!note) return { note: null, changed: false };

  const nextTitle = elements.titleInput.value.trimStart() || "未命名笔记";
  const nextFolder = elements.folderInput ? normalizeFolderName(elements.folderInput.value) : note.folder;
  const nextBody = note.mode === "doc"
    ? sanitizeDocHtml(elements.docInput?.innerHTML || "")
    : elements.bodyInput.value;
  const changed = note.title !== nextTitle || note.folder !== nextFolder || note.body !== nextBody;

  note.title = nextTitle;
  note.folder = nextFolder;
  note.body = nextBody;
  if (changed || options.touchUpdatedAt !== false) note.updatedAt = Date.now();

  return { note, changed };
}

function updateActiveFromInputs(options = {}) {
  if (state.noteInputComposing && !options.force) {
    updateDraftInputUi();
    return;
  }
  const { note } = applyActiveInputsToNote({ touchUpdatedAt: true });
  if (!note) return;

  scheduleSave();
  if (note.mode !== "doc") {
    updateCurrentLineIndicator();
    updateLineNumbers();
  }
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
  clearDocImageSelection();
  if (!note) return;
  const transferMode = isTransferAssistant(note);
  elements.editorCard.classList.toggle("transfer-mode", transferMode);
  if (elements.transferPanel) elements.transferPanel.hidden = !transferMode;
  if (elements.noteCloudActions) elements.noteCloudActions.hidden = !showManualNoteCloudActions(note);
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
  elements.bodyInput.value = note.mode === "doc" ? docHtmlToText(note.body) : note.body;
  if (elements.docInput) elements.docInput.innerHTML = note.mode === "doc" ? sanitizeDocHtml(note.body || "<p></p>") : "";
  resetDocHistory(note);

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
  if (note.mode !== "doc") {
    updateCurrentLineIndicator();
    updateLineNumbers();
    handleEditorCursorChange();
  } else {
    state.currentLine = 1;
    renderCurrentLineDecoration();
  }
}

function renderModeState() {
  const note = activeNote();
  if (!note) return;
  const isMarkdown = note.mode === "md";
  const isDoc = note.mode === "doc";
  if (!isDoc) clearDocImageSelection();
  const previewVisible = isMarkdown && note.previewVisible !== false;
  const focused = isMarkdown && state.previewFocus;
  if (!isMarkdown) state.previewFocus = false;
  if (typeof note.editorSectionOpen !== "boolean") note.editorSectionOpen = isMarkdown || isDoc;

  elements.editorCard.dataset.mode = note.mode;
  elements.editorCard.classList.toggle("preview-hidden", !previewVisible && !focused);
  elements.splitEditor.classList.toggle("preview-hidden", !previewVisible && !focused);
  elements.splitEditor.classList.toggle("preview-focus", focused);
  document.body.dataset.noteMode = note.mode;
  document.body.classList.toggle("preview-focus-mode", focused);

  if (elements.modeHint) elements.modeHint.textContent = isMarkdown ? t("markdownMode") : isDoc ? t("docMode") : t("txtMode");
  elements.togglePreviewButton.textContent = previewVisible && !focused ? "◫" : "◨";
  elements.togglePreviewButton.title = previewVisible && !focused ? t("hidePreview") : t("showPreview");
  elements.togglePreviewButton.setAttribute("aria-label", previewVisible && !focused ? t("hidePreview") : t("showPreview"));
  elements.togglePreviewButton.classList.toggle("active", previewVisible && !focused);
  elements.togglePreviewButton.disabled = !isMarkdown;
  elements.toolbar.querySelectorAll(".md-tool, [data-insert]").forEach((button) => {
    button.hidden = !isMarkdown;
  });
  elements.toolbar.querySelectorAll(".doc-tool").forEach((item) => {
    item.hidden = !isDoc;
  });
  updateDocToolbarState();
  elements.togglePreviewButton.hidden = !isMarkdown;
  elements.previewFocusButton.hidden = !isMarkdown;
  elements.previewFocusButton.textContent = focused ? "✕" : "⤢";
  elements.previewFocusButton.title = focused ? t("exitFocus") : t("focusPreview");
  elements.previewFocusButton.setAttribute("aria-label", focused ? t("exitFocus") : t("focusPreview"));
  elements.previewPane.hidden = !previewVisible && !focused;
  elements.editorSection.open = Boolean(note.editorSectionOpen);
  const modeLabel = isMarkdown ? t("modeMd") : isDoc ? t("modeDoc") : t("modeTxt");
  if (elements.editorSectionState) elements.editorSectionState.textContent = `${modeLabel} · ${elements.editorSection.open ? t("collapseSection") : t("expandSection")}`;
  elements.splitEditor.style.setProperty("--split-ratio", `${readSplitRatio()}%`);
  refreshEditorLineLayoutSoon();
  syncScrollState();
  syncEditorSearchState();
  renderExportFormatButtons();
}

function renderPreview() {
  const note = activeNote();
  const body = note?.body || "";
  if (note && isTransferAssistant(note)) {
    if (elements.wordCount) elements.wordCount.textContent = "";
    elements.previewContent.innerHTML = "";
    return;
  }
  const plainBody = note?.mode === "doc" ? docHtmlToText(body) : body;
  if (elements.wordCount) elements.wordCount.textContent = `${countWords(plainBody)} ${t("characters")} / ${countLines(plainBody)} ${t("lines")}`;

  if (!note || note.mode !== "md") {
    elements.previewContent.innerHTML = "";
    return;
  }

  elements.previewContent.innerHTML = renderMarkdown(body);
  if (note && note.mode === "md") {
    window.setTimeout(updateOutlineActiveHeading, 100);
  }
}

function renderDashboardOverview() {
  const note = activeNote();
  const syncMeta = readSyncMeta();
  const noteTitle = note ? note.title : t("overviewNoNote");
  const folderLabel = note ? displayFolderLabel(canonicalFolderName(note.folder)) : displayFolderLabel(INBOX_FOLDER);
  const modeLabel = note ? (note.mode === "md" ? "MD" : note.mode === "doc" ? "DOC" : "TXT") : "TXT";
  const plainBody = note ? (note.mode === "doc" ? docHtmlToText(note.body || "") : note.body || "") : "";
  const charCount = countWords(plainBody);
  const lineCount = countLines(plainBody);
  const currentLine = note && note.mode === "doc" ? 1 : state.currentLine || 1;
  const noteCount = regularNotes().length;
  const folderCount = getFolderNames().length;
  const dirtyCount = dirtyNoteIds().length;
  const syncLabel = elements.cloudStatus?.textContent || t("localMode");
  const syncDetail = syncMeta.lastVerifiedAt
    ? `${t("syncVerifiedAt").replace("{time}", formatTime(Number(syncMeta.lastVerifiedAt)))}`
    : syncMeta.lastPushAt
      ? `${t("syncPushedAt").replace("{time}", formatTime(Number(syncMeta.lastPushAt)))}`
      : syncMeta.lastPullAt
        ? `${t("syncPulledAt").replace("{time}", formatTime(Number(syncMeta.lastPullAt)))}`
        : syncMeta.pending
          ? t("syncPending")
          : t("overviewNotConnected");

  if (elements.dashboardOverview) elements.dashboardOverview.hidden = false;
  if (elements.overviewNoteLabel) elements.overviewNoteLabel.textContent = t("overviewCurrentNote");
  if (elements.overviewSyncLabel) elements.overviewSyncLabel.textContent = t("overviewSyncStatus");
  if (elements.overviewContentLabel) elements.overviewContentLabel.textContent = t("overviewContentStats");
  if (elements.overviewLibraryLabel) elements.overviewLibraryLabel.textContent = t("overviewLibrary");
  if (elements.overviewNoteTitle) elements.overviewNoteTitle.textContent = noteTitle;
  if (elements.overviewNoteMeta) elements.overviewNoteMeta.textContent = `${modeLabel} · ${folderLabel}`;
  if (elements.overviewSyncStatus) elements.overviewSyncStatus.textContent = syncLabel;
  if (elements.overviewSyncMeta) elements.overviewSyncMeta.textContent = `${syncDetail}${dirtyCount ? ` · ${dirtyCount} ${t("items")}` : ""}`;
  if (elements.overviewContentStats) elements.overviewContentStats.textContent = `${charCount} ${t("characters")} / ${lineCount} ${t("lines")}`;
  if (elements.overviewContentMeta) elements.overviewContentMeta.textContent = `${t("overviewCurrentLine")} ${currentLine}`;
  if (elements.overviewLibraryStats) elements.overviewLibraryStats.textContent = `${noteCount} ${t("items")} / ${folderCount} ${t("files")}`;
  const scopeLabel = state.selectionMode
    ? t("multiSelect")
    : state.selectedFolder
      ? displayFolderLabel(state.selectedFolder)
      : t("overviewAllNotes");
  if (elements.overviewLibraryMeta) elements.overviewLibraryMeta.textContent = scopeLabel;
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
  const gutter = isMobileLayout() ? 12 : 8;
  menu.style.left = `${Math.max(gutter, x)}px`;
  menu.style.top = `${Math.max(gutter, y)}px`;
  window.requestAnimationFrame(() => {
    if (menu.hidden) return;
    const rect = menu.getBoundingClientRect();
    const left = Math.min(Math.max(gutter, x), Math.max(gutter, window.innerWidth - rect.width - gutter));
    const top = Math.min(Math.max(gutter, y), Math.max(gutter, window.innerHeight - rect.height - gutter));
    menu.style.left = `${left}px`;
    menu.style.top = `${top}px`;
  });
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
    moveList.classList.remove("open", "open-left");
    const folders = getFolderNames().filter(f => note && f !== canonicalFolderName(note.folder));
    moveList.innerHTML = folders.length
      ? folders.map(f => `<button class="context-menu-item" data-action="move-to" data-folder="${escapeAttribute(f)}" type="button">📁 ${escapeHtml(displayFolderLabel(f))}</button>`).join("")
      : `<span style="padding:6px 12px;color:var(--muted);font-size:12px;">${t("noOtherFolders")}</span>`;
    // Click trigger to toggle submenu
    moveTrigger.onclick = (e) => {
      e.stopPropagation();
      const opening = !moveList.classList.contains("open");
      if (opening && isMobileLayout()) {
        const menuRect = menu.getBoundingClientRect();
        moveList.classList.toggle("open-left", menuRect.right + 180 > window.innerWidth - 12);
      } else {
        moveList.classList.remove("open-left");
      }
      moveList.classList.toggle("open", opening);
    };
    moveList.querySelectorAll('[data-action="move-to"]').forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const noteId = state.contextMenuNoteId;
        const tf = btn.dataset.folder;
        moveList.classList.remove("open", "open-left");
        moveNoteToFolder(noteId, tf);
        hideNoteContextMenu();
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
  const ext = note.mode === "md" ? "md" : note.mode === "doc" ? "html" : "txt";
  return `${sanitizeZipSegment(note.title)}.${ext}`;
}

function exportDataForNote(note) {
  if (note.mode === "md") return formatMarkdownExport(note);
  if (note.mode === "doc") return formatDocHtmlExport(note);
  return note.body;
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
    data: exportDataForNote(note)
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
        data: exportDataForNote(note)
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
  const data = currentExportData(note, "default");
  if (data.kind === "pdf") {
    printNotePdf(note);
    return;
  }
  downloadText(`${safeFileName(note.title)}.${data.extension}`, data.content, data.type);
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

function applyNoteListScope({ viewFilter = state.viewFilter, selectedFolder = state.selectedFolder } = {}) {
  const nextFilter = viewFilter === "favorite" ? "favorite" : "all";
  const keepMobileSidebar = isMobileLayout();
  state.viewFilter = nextFilter;
  state.selectedFolder = canonicalSelectedFolder(selectedFolder || "");
  state.selectionMode = false;
  state.selectedNoteIds.clear();
  localStorage.setItem("nanstar-note-view", state.viewFilter);

  const scopedNotes = sortedNotes();
  const active = activeNote();
  const activeInScope = active && !isTransferAssistant(active) && scopedNotes.some((note) => note.id === active.id);
  if (!activeInScope && scopedNotes[0] && !keepMobileSidebar) {
    switchToNote(scopedNotes[0].id, { keepMobileSidebar });
    return;
  }

  renderFilterState();
  renderLists();
  if (!keepMobileSidebar) closeMobileSidebar();
}

function openTransferAssistant() {
  const transfer = state.notes.find((note) => isTransferAssistant(note) && !isDeletedNote(note));
  if (!transfer) return;
  state.selectionMode = false;
  state.selectedNoteIds.clear();
  state.selectedFolder = "";
  state.viewFilter = "all";
  localStorage.setItem("nanstar-note-view", state.viewFilter);
  if (transfer.id === state.activeId) {
    renderAll();
    closeMobileSidebar();
    return;
  }
  switchToNote(transfer.id);
}

function renderFilterState() {
  elements.filterTabs.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.filter === state.viewFilter);
  });
  const transferActive = !isMobileLayout() && isTransferAssistant(activeNote());
  elements.youdaoFilterButtons.forEach((button) => {
    const active = !transferActive && !state.selectedFolder && button.dataset.youdaoFilter === state.viewFilter;
    button.classList.toggle("active", active);
    button.setAttribute("aria-current", active ? "page" : "false");
  });
  if (elements.youdaoTransferButton) {
    elements.youdaoTransferButton.classList.toggle("active", transferActive);
    elements.youdaoTransferButton.setAttribute("aria-current", transferActive ? "page" : "false");
  }
}

function renderCounts() {
  if (elements.listStatus) elements.listStatus.textContent = `${regularNotes().length} ${t("items")}`;
}

function sortedNotes() {
  return regularNotes()
    .filter((note) => {
      if (state.viewFilter === "favorite" && !note.favorite) return false;
      if (state.selectedFolder && canonicalFolderName(note.folder) !== state.selectedFolder) return false;
      if (!state.query) return true;
      const body = note.mode === "doc" ? docHtmlToText(note.body) : note.body;
      const haystack = `${note.title}\n${displayFolderLabel(note.folder)}\n${body}`.toLowerCase();
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
        applyNoteListScope({ selectedFolder: "" });
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
      applyNoteListScope({ selectedFolder: f });
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

  const syncMeta = readSyncMeta();
  elements.noteList.innerHTML = notes
    .map((note) => {
      const transfer = isTransferAssistant(note);
      const mode = note.mode === "md" ? "MD" : note.mode === "doc" ? "DOC" : "TXT";
      const flags = transfer ? "" : `${note.pinned ? "📌" : ""}${note.favorite ? "★" : ""}`;
      const title = transfer ? t("transferAssistantTitle") : note.title;
      const body = transfer ? "" : excerpt(note.mode === "doc" ? docHtmlToText(note.body) : note.body);
      const syncState = transfer || !showPerNoteSyncIndicators() ? null : noteListSyncIndicatorState(note, syncMeta);
      const syncIndicator = transfer || !syncState
        ? ""
        : `<span class="note-sync-indicator ${syncState.syncClass}" title="${escapeAttribute(syncState.syncLabel)}" aria-label="${escapeAttribute(syncState.syncLabel)}"></span>`;
      const folder = canonicalFolderName(note.folder);
      const folderLabel = displayFolderLabel(folder);
      const folderTag = !transfer && folder !== INBOX_FOLDER
        ? `<span class="note-folder-tag" title="${escapeAttribute(folderLabel)}">${escapeHtml(folderLabel)}</span>`
        : "";
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
              <span class="note-item-side">
                <span class="note-flags-text">${flags}</span>
                ${syncIndicator}
              </span>
            </span>
            ${transfer ? "" : `<p>${escapeHtml(body)}</p>`}
            ${transfer ? "" : `<span class="note-item-meta">
              <span class="note-item-tags">
                <span class="note-item-mode">${mode}</span>
                ${folderTag}
              </span>
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
    let longPressTimer = 0;
    let longPressTriggered = false;
    let pressStartX = 0;
    let pressStartY = 0;
    const cancelLongPress = () => {
      if (!longPressTimer) return;
      window.clearTimeout(longPressTimer);
      longPressTimer = 0;
    };
    const finishLongPress = () => {
      cancelLongPress();
      if (longPressTriggered) window.setTimeout(() => { longPressTriggered = false; }, 0);
    };
    button.addEventListener("pointerdown", (event) => {
      if (!isMobileLayout() || event.pointerType === "mouse" || event.button !== 0) return;
      pressStartX = event.clientX;
      pressStartY = event.clientY;
      cancelLongPress();
      longPressTimer = window.setTimeout(() => {
        longPressTimer = 0;
        longPressTriggered = true;
        document.getSelection?.()?.removeAllRanges?.();
        state.contextMenuNoteId = button.dataset.id;
        showNoteContextMenu(pressStartX, pressStartY);
        navigator.vibrate?.(8);
      }, 520);
    });
    button.addEventListener("pointermove", (event) => {
      if (Math.hypot(event.clientX - pressStartX, event.clientY - pressStartY) > 10) {
        cancelLongPress();
      }
    });
    button.addEventListener("pointerup", finishLongPress);
    button.addEventListener("pointercancel", finishLongPress);
    button.addEventListener("click", (event) => {
      if (longPressTriggered) {
        longPressTriggered = false;
        event.preventDefault();
        event.stopPropagation();
        return;
      }
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

function noteListSyncIndicatorState(note, syncMeta = readSyncMeta()) {
  const status = noteCloudStatus(note, syncMeta);
  const syncClass = status.status === "synced" ? "synced" : "dirty";
  const syncLabel = status.label || (syncClass === "synced" ? t("syncStatusSynced") : t("syncStatusDirty"));
  return { syncClass, syncLabel };
}

function showPerNoteSyncIndicators() {
  return NOTE_SYNC_ENGINE !== "crdt" || !elements.autoSyncToggle?.checked;
}

function showManualNoteCloudActions(note = activeNote()) {
  return Boolean(note && !isTransferAssistant(note) && !isFolderRegistry(note) && showPerNoteSyncIndicators());
}

function updateNoteListSyncIndicators(syncMeta = readSyncMeta()) {
  if (!elements.noteList) return;
  if (!showPerNoteSyncIndicators()) {
    elements.noteList.querySelectorAll(".note-sync-indicator").forEach((indicator) => indicator.remove());
    return;
  }
  elements.noteList.querySelectorAll(".note-item[data-id]").forEach((item) => {
    const note = state.notes.find((candidate) => candidate.id === item.dataset.id && !isDeletedNote(candidate));
    if (!note || isTransferAssistant(note) || isFolderRegistry(note)) return;
    let indicator = item.querySelector(".note-sync-indicator");
    if (!indicator) {
      const side = item.querySelector(".note-item-side");
      if (!side) return;
      indicator = document.createElement("span");
      indicator.className = "note-sync-indicator";
      side.append(indicator);
    }
    const { syncClass, syncLabel } = noteListSyncIndicatorState(note, syncMeta);
    indicator.className = `note-sync-indicator ${syncClass}`;
    indicator.title = syncLabel;
    indicator.setAttribute("aria-label", syncLabel);
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

function switchToNote(nextId, { keepMobileSidebar = false } = {}) {
  if (!nextId || nextId === state.activeId) {
    if (!keepMobileSidebar) closeMobileSidebar();
    return;
  }

  const previousId = state.activeId;
  prepareCurrentNoteForSync({ noteId: previousId });

  state.activeId = nextId;
  saveNotes();
  renderAll();
  if (!keepMobileSidebar) closeMobileSidebar();
  if (!isMobileLayout()) elements.bodyInput.focus();
}

async function syncCurrentNoteNow() {
  await saveCurrentNoteToCloud();
}

function renderSyncMeta() {
  const token = getSyncToken();
  const lastSync = localStorage.getItem(storageKeys.lastSyncAt);
  const auto = elements.autoSyncToggle.checked;
  document.body.classList.toggle("realtime-sync-mode", Boolean(token) && auto);
  const syncMeta = readSyncMeta();
  const connectionState = syncMeta.connectionState || (navigator.onLine === false ? "offline" : "online");

  if (!token) {
    elements.cloudStatus.textContent = t("localMode");
    if (elements.syncState) elements.syncState.textContent = t("local");
  } else if (state.syncInFlight) {
    const label = state.syncAction === "pulling" ? t("syncPulling") : t("syncPushing");
    elements.cloudStatus.textContent = label;
    if (elements.syncState) elements.syncState.textContent = label;
  } else if (connectionState === "offline") {
    elements.cloudStatus.textContent = t("syncOfflineEditing");
    if (elements.syncState) elements.syncState.textContent = t("syncOfflineEditing");
  } else if (connectionState === "checking") {
    elements.cloudStatus.textContent = t("syncConnecting");
    if (elements.syncState) elements.syncState.textContent = t("syncConnecting");
  } else if (syncMeta.lastError) {
    elements.cloudStatus.textContent = t("syncFailed");
    if (elements.syncState) elements.syncState.textContent = t("syncRetry");
  } else if (syncMeta.pending) {
    elements.cloudStatus.textContent = t("syncPending");
    if (elements.syncState) elements.syncState.textContent = t("syncPendingShort");
  } else if (syncMeta.lastVerifiedAt) {
    elements.cloudStatus.textContent = auto ? t("cloudAuto") : t("cloudReady");
    if (elements.syncState) elements.syncState.textContent = t("syncVerifiedAt").replace("{time}", formatTime(Number(syncMeta.lastVerifiedAt)));
  } else if (syncMeta.lastPushAt) {
    elements.cloudStatus.textContent = auto ? t("cloudAuto") : t("cloudReady");
    if (elements.syncState) elements.syncState.textContent = t("syncPushedAt").replace("{time}", formatTime(Number(syncMeta.lastPushAt)));
  } else if (syncMeta.lastPullAt) {
    elements.cloudStatus.textContent = auto ? t("cloudAuto") : t("cloudReady");
    if (elements.syncState) elements.syncState.textContent = t("syncPulledAt").replace("{time}", formatTime(Number(syncMeta.lastPullAt)));
  } else {
    elements.cloudStatus.textContent = auto ? t("cloudAuto") : t("cloudReady");
    if (elements.syncState) {
      elements.syncState.textContent = lastSync
        ? `${t("synced")} ${formatDate(Number(lastSync))}`
        : t("cloudUnsynced");
    }
  }
  const note = activeNote();
  if (elements.createdAt) {
    elements.createdAt.textContent = note ? `${t("noteCreated")} ${formatDate(Number(note.createdAt) || Date.now())}` : t("noteCreated");
  }
  if (elements.updatedAt) {
    elements.updatedAt.textContent = note ? `${t("noteUpdated")} ${formatDate(Number(note.updatedAt) || Date.now())}` : t("noteUpdated");
  }
  if (elements.syncDiagnostics) {
    elements.syncDiagnostics.hidden = !token;
    if (token) {
      const lastVerifyTime = Number(syncMeta.lastVerifiedAt || syncMeta.lastCheckedAt || syncMeta.lastPullAt || syncMeta.lastPushAt || 0);
      elements.syncDiagnostics.textContent = t("syncDiagnostics")
        .replace("{dirty}", String(dirtyNoteIds().length))
        .replace("{time}", lastVerifyTime ? formatTime(lastVerifyTime) : t("syncDiagnosticsNever"));
    }
  }
  renderActiveNoteCloudStatus(syncMeta);
  updateNoteListSyncIndicators(syncMeta);
  updateTitleSaveStatusFromNote(syncMeta);
  renderDashboardOverview();
}

function renderActiveNoteCloudStatus(syncMeta = readSyncMeta()) {
  const note = activeNote();
  if (elements.activeNoteSyncDot) {
    elements.activeNoteSyncDot.hidden = !showPerNoteSyncIndicators();
    if (elements.activeNoteSyncDot.hidden) {
      elements.activeNoteSyncDot.removeAttribute("title");
      elements.activeNoteSyncDot.removeAttribute("aria-label");
    } else {
      const status = noteCloudStatus(note, syncMeta);
      elements.activeNoteSyncDot.className = `note-sync-indicator ${status.status}`;
      elements.activeNoteSyncDot.title = status.label;
      elements.activeNoteSyncDot.setAttribute("aria-label", status.label);
    }
  }
  const manualNoteActionsVisible = showManualNoteCloudActions(note);
  if (elements.noteCloudActions) elements.noteCloudActions.hidden = !manualNoteActionsVisible;
  const disabled = !manualNoteActionsVisible || state.syncInFlight;
  if (elements.saveNoteButton) elements.saveNoteButton.disabled = disabled;
  if (elements.syncNoteButton) elements.syncNoteButton.disabled = disabled;
  if (elements.saveAllButton) elements.saveAllButton.disabled = state.syncInFlight;
  if (elements.syncRefreshButton) elements.syncRefreshButton.disabled = state.syncInFlight;
}

function openNewNoteDialog() {
  if (!elements.newNoteFolderSelect || !elements.newNoteDialog) return;
  const folders = getFolderNames();
  const defaultFolder = canonicalSelectedFolder(state.selectedFolder) || INBOX_FOLDER;
  if (elements.newNoteTitleInput) elements.newNoteTitleInput.value = "";
  if (elements.newNoteTypeSelect) elements.newNoteTypeSelect.value = "txt";
  updateNewNoteTypeLabels();
  elements.newNoteFolderSelect.innerHTML = folders.length
    ? folders.map(f => `<option value="${escapeAttribute(f)}" ${f === defaultFolder ? "selected" : ""}>${escapeHtml(displayFolderLabel(f))}</option>`).join("")
    : `<option value="${INBOX_FOLDER}">${INBOX_FOLDER}</option>`;
  elements.newNoteFolderSelect.disabled = !folderManagementEnabled();
  elements.newNoteDialog.showModal();
  window.setTimeout(() => elements.newNoteTitleInput?.focus(), 0);
}

function normalizeNewNoteType(value) {
  return ["txt", "md", "doc"].includes(value) ? value : "txt";
}

function updateNewNoteTypeLabels() {
  const select = elements.newNoteTypeSelect;
  if (!select) return;
  const current = normalizeNewNoteType(select.value);
  const labels = {
    txt: t("newNoteTypeTxt"),
    md: t("newNoteTypeMd"),
    doc: t("newNoteTypeDoc")
  };
  select.querySelectorAll("option").forEach((option) => {
    const value = normalizeNewNoteType(option.value);
    option.textContent = labels[value];
  });
  select.value = current;
}

function createNote(templateName, folder, title = "") {
  const note = createNoteObject(templateName);
  const nextTitle = String(title || "").trim();
  if (nextTitle) note.title = nextTitle;
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
  const isBaseTemplate = templateName === "txt" || templateName === "md" || templateName === "doc" || templateName === "blank";
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
  if (!note || !["txt", "md", "doc"].includes(mode) || note.mode === mode) return;
  applyActiveInputsToNote({ touchUpdatedAt: false });
  const previousMode = note.mode;
  const plainBody = previousMode === "doc" ? docHtmlToText(note.body) : note.body;
  note.mode = mode;
  if (mode === "doc") {
    note.body = plainTextToDocHtml(plainBody);
  } else if (previousMode === "doc") {
    note.body = plainBody;
  }
  note.previewVisible = false;
  note.editorSectionOpen = mode === "md" || mode === "doc";
  state.previewFocus = false;
  note.updatedAt = Date.now();
  persistAndRender(`Mode: ${mode.toUpperCase()}`);
  window.setTimeout(() => {
    if (mode === "doc") focusDocEditorEnd();
    else elements.bodyInput.focus();
  }, 0);
}

function togglePreview() {
  const note = activeNote();
  if (!note || note.mode !== "md") return;
  note.previewVisible = note.previewVisible !== true;
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
  refreshEditorLineLayoutSoon();
}

function normalizeYoudaoLayout(layout) {
  return ["three", "two", "one"].includes(layout) ? layout : "three";
}

function normalizeYoudaoRestoreLayout(layout) {
  return ["three", "two"].includes(layout) ? layout : "three";
}

function readYoudaoLayout() {
  return normalizeYoudaoLayout(localStorage.getItem(storageKeys.youdaoLayout));
}

function readYoudaoPreviousLayout() {
  return normalizeYoudaoRestoreLayout(localStorage.getItem(storageKeys.youdaoPreviousLayout));
}

function currentYoudaoLayout() {
  return normalizeYoudaoLayout(document.body.dataset.youdaoLayout || readYoudaoLayout());
}

function applyYoudaoLayout(layout, options = {}) {
  const requested = normalizeYoudaoLayout(layout);
  const current = currentYoudaoLayout();
  let next = requested;
  if (options.toggle !== false && current === "one" && requested === "one") {
    next = readYoudaoPreviousLayout();
  }
  if (!(options.toggle === false && next === "one")) {
    if (next === "one") {
      localStorage.setItem(storageKeys.youdaoPreviousLayout, normalizeYoudaoRestoreLayout(current));
    } else {
      localStorage.setItem(storageKeys.youdaoPreviousLayout, next);
    }
  }
  document.body.dataset.youdaoLayout = next;
  if (options.persist !== false) localStorage.setItem(storageKeys.youdaoLayout, next);

  const labels = {
    three: t("layoutThree"),
    two: t("layoutTwo"),
    one: t("layoutOne")
  };
  const restoreLayout = readYoudaoPreviousLayout();
  elements.youdaoLayoutButtons.forEach((button) => {
    const active = button.dataset.youdaoLayout === next;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
    const label = next === "one" && button.dataset.youdaoLayout === "one"
      ? `${t("expandSection")} ${labels[restoreLayout]}`
      : labels[button.dataset.youdaoLayout] || "";
    if (label) {
      button.title = label;
      button.setAttribute("aria-label", label);
    }
  });

  closeMobileSidebar();
  refreshEditorLineLayoutSoon();
  positionDocImageSelection();
}

function clampColumnWidth(value, fallback, min, max) {
  const number = Number(value);
  if (!number || Number.isNaN(number)) return fallback;
  return Math.max(min, Math.min(max, number));
}

function readYoudaoRailWidth() {
  return clampColumnWidth(
    localStorage.getItem(storageKeys.youdaoRailWidth),
    DEFAULT_YOUDAO_RAIL_WIDTH,
    YOUDAO_RAIL_WIDTH_MIN,
    YOUDAO_RAIL_WIDTH_MAX
  );
}

function readYoudaoListWidth() {
  return clampColumnWidth(
    localStorage.getItem(storageKeys.youdaoListWidth),
    DEFAULT_YOUDAO_LIST_WIDTH,
    YOUDAO_LIST_WIDTH_MIN,
    YOUDAO_LIST_WIDTH_MAX
  );
}

function currentYoudaoRailWidth() {
  const value = parseFloat(elements.appShell?.style.getPropertyValue("--youdao-rail-width") || "");
  return clampColumnWidth(value, readYoudaoRailWidth(), YOUDAO_RAIL_WIDTH_MIN, YOUDAO_RAIL_WIDTH_MAX);
}

function currentYoudaoListWidth() {
  const value = parseFloat(elements.appShell?.style.getPropertyValue("--youdao-list-width") || "");
  return clampColumnWidth(value, readYoudaoListWidth(), YOUDAO_LIST_WIDTH_MIN, YOUDAO_LIST_WIDTH_MAX);
}

function syncYoudaoSidebarWidth(railWidth = currentYoudaoRailWidth(), listWidth = currentYoudaoListWidth()) {
  const total = railWidth + listWidth;
  elements.appShell?.style.setProperty("--youdao-sidebar-width", `${total}px`);
  elements.appShell?.style.setProperty("--sidebar-width", `${total}px`);
  localStorage.setItem(storageKeys.sidebarWidth, String(total));
}

function applyYoudaoRailWidth(value) {
  const width = clampColumnWidth(value, DEFAULT_YOUDAO_RAIL_WIDTH, YOUDAO_RAIL_WIDTH_MIN, YOUDAO_RAIL_WIDTH_MAX);
  elements.appShell?.style.setProperty("--youdao-rail-width", `${width}px`);
  localStorage.setItem(storageKeys.youdaoRailWidth, String(width));
  syncYoudaoSidebarWidth(width, currentYoudaoListWidth());
  refreshEditorLineLayoutSoon();
}

function applyYoudaoListWidth(value) {
  const width = clampColumnWidth(value, DEFAULT_YOUDAO_LIST_WIDTH, YOUDAO_LIST_WIDTH_MIN, YOUDAO_LIST_WIDTH_MAX);
  elements.appShell?.style.setProperty("--youdao-list-width", `${width}px`);
  localStorage.setItem(storageKeys.youdaoListWidth, String(width));
  syncYoudaoSidebarWidth(currentYoudaoRailWidth(), width);
  refreshEditorLineLayoutSoon();
}

function bindSidebarResizer() {
  let dragging = "";

  const move = (event) => {
    if (!dragging) return;
    const rect = elements.appShell.getBoundingClientRect();
    if (dragging === "rail") {
      applyYoudaoRailWidth(event.clientX - rect.left);
    } else if (dragging === "list") {
      if (currentYoudaoLayout() === "two") {
        applyYoudaoListWidth(event.clientX - rect.left - YOUDAO_RAIL_COLLAPSED_WIDTH);
      } else {
        applyYoudaoListWidth(event.clientX - rect.left - currentYoudaoRailWidth());
      }
    }
  };

  const stop = () => {
    dragging = "";
    document.body.classList.remove("is-dragging-split");
  };

  elements.youdaoRailResizer?.addEventListener("mousedown", (event) => {
    if (window.innerWidth <= 900 || state.previewFocus || state.sidebarCollapsed || currentYoudaoLayout() !== "three") return;
    dragging = "rail";
    document.body.classList.add("is-dragging-split");
    event.preventDefault();
  });

  elements.sidebarResizer?.addEventListener("mousedown", (event) => {
    if (window.innerWidth <= 900 || state.previewFocus || state.sidebarCollapsed || currentYoudaoLayout() === "one") return;
    dragging = "list";
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
  const content = note.mode === "md" ? formatMarkdownExport(note) : note.mode === "doc" ? docHtmlToText(note.body) : note.body;
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

function exportCurrentNote(format = "default") {
  const note = activeNote();
  if (!note) return;
  const data = currentExportData(note, format);
  if (data.kind === "pdf") {
    printNotePdf(note);
    return;
  }
  downloadText(`${safeFileName(note.title)}.${data.extension}`, data.content, data.type);
}

function openExportDialog() {
  renderExportFormatButtons();
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
  return syncCloud({ manual: true, pullOnly: true, forcePull: true, reason: "force-pull" });
}

function confirmForcePullCloud() {
  if (!window.confirm(t("syncForcePullConfirm"))) return;
  void forcePullCloud();
}

async function saveCurrentNoteToCloud() {
  const noteId = state.activeId;
  if (!prepareCurrentNoteForSync({ noteId })) {
    showToast(t("inputComposing"));
    return false;
  }
  if (NOTE_SYNC_ENGINE === "crdt") {
    return syncCloud({ manual: true, forcePush: true, noteId, reason: "save-note" });
  }
  return saveNoteToCloud(noteId);
}

async function saveNoteToCloud(noteId) {
  const token = getSyncToken();
  const note = state.notes.find((item) => item.id === noteId && !isDeletedNote(item));
  if (!token) {
    showSyncMessage("请先填写同步 Token。");
    showToast(t("syncStatusOffline"));
    renderSyncMeta();
    return false;
  }
  if (!note || isTransferAssistant(note) || isFolderRegistry(note)) return false;
  if (state.syncInFlight) {
    showToast(t("syncBusy"));
    return false;
  }

  clearTimeout(state.autoSyncTimer);
  localStorage.setItem(storageKeys.syncToken, token);
  state.syncInFlight = true;
  state.syncAction = "pushing";
  renderSyncMeta();
  showSyncMessage(t("syncPushing"));

  try {
    const localNote = normalizeNote(note);
    const localSignature = notesSignature([localNote]);
    const remotePayload = await fetchCloudState(token);
    const nextNotes = cloudSnapshotNotes(remotePayload)
      .filter((item) => !isTransferAssistant(item) && !isFolderRegistry(item) && item.id !== localNote.id);
    nextNotes.push(localNote);
    const nextFolders = mergeFolderLists(cloudSnapshotFolders(remotePayload), storedFolders(), [localNote.folder]);
    const pushResult = await putCloudState(token, { notes: withSystemNotes(nextNotes), folders: nextFolders });
    let remoteUpdatedAt = Number(pushResult.updatedAt) || Date.now();
    showSyncMessage(t("syncVerifying"));

    const verifyPayload = await fetchCloudState(token);
    remoteUpdatedAt = Number(verifyPayload.updatedAt) || remoteUpdatedAt;
    const remoteNote = cloudSnapshotNotes(verifyPayload).find((item) => item.id === localNote.id);
    const now = Date.now();
    if (!remoteNote || notesSignature([remoteNote]) !== localSignature) {
      const message = t("syncVerifyFailed");
      writeSyncMeta({
        pending: true,
        dirtyNoteIds: dirtyNoteIds(),
        lastError: message,
        remoteUpdatedAt,
        lastCheckedAt: now,
        lastVerifyAt: now
      });
      renderSyncMeta();
      renderLists();
      showSyncMessage(message);
      showToast(message);
      return false;
    }

    clearNotePendingState(localNote.id);
    localStorage.setItem(storageKeys.lastSyncAt, String(now));
    writeKnownCloudNote(localNote, {
      cloudFoldersSignature: foldersSignature(nextFolders),
      pending: dirtyNoteIds().length > 0,
      dirtyNoteIds: dirtyNoteIds(),
      lastError: "",
      remoteUpdatedAt,
      lastSyncedAt: now,
      lastPushAt: now,
      lastVerifiedAt: now,
      lastCheckedAt: now
    });
    setSaveStatus(t("syncVerifiedAt").replace("{time}", formatTime(now)));
    const message = t("noteSavedToCloud").replace("{time}", formatTime(now));
    showSyncMessage(message);
    showToast(message);
    renderAll();
    return true;
  } catch (error) {
    const message = `${t("syncFailed")}：${cloudErrorText(error)}`;
    writeSyncMeta({ pending: true, dirtyNoteIds: dirtyNoteIds(), lastError: message });
    renderSyncMeta();
    renderLists();
    showSyncMessage(message);
    showToast(message);
    return false;
  } finally {
    state.syncInFlight = false;
    state.syncAction = "";
    renderSyncMeta();
  }
}

async function syncCurrentNoteFromCloud() {
  if (NOTE_SYNC_ENGINE === "crdt") {
    return syncCloud({ manual: true, pullOnly: true, reason: "sync-note" });
  }
  const token = getSyncToken();
  const noteId = state.activeId;
  if (!token) {
    showSyncMessage("请先填写同步 Token。");
    showToast(t("syncStatusOffline"));
    renderSyncMeta();
    return false;
  }
  if (!noteId || isTransferAssistant(activeNote())) return false;
  if (state.syncInFlight) {
    showToast(t("syncBusy"));
    return false;
  }

  clearTimeout(state.saveTimer);
  state.saveTimer = null;
  state.savePendingNoteId = null;
  state.syncInFlight = true;
  state.syncAction = "pulling";
  renderSyncMeta();
  showSyncMessage(t("syncPulling"));

  try {
    const remotePayload = await fetchCloudState(token);
    const remoteNote = cloudSnapshotNotes(remotePayload).find((item) => item.id === noteId && !isTransferAssistant(item) && !isFolderRegistry(item));
    if (!remoteNote) {
      showSyncMessage(t("cloudNoteMissing"));
      showToast(t("cloudNoteMissing"));
      return false;
    }

    const normalized = normalizeNote(remoteNote);
    const index = state.notes.findIndex((item) => item.id === noteId);
    if (index >= 0) state.notes[index] = normalized;
    else state.notes.unshift(normalized);
    setStoredFolders(mergeFolderLists(storedFolders(), cloudSnapshotFolders(remotePayload), [normalized.folder]));
    clearNotePendingState(noteId);
    ensureActiveNote();
    saveNotes();

    const now = Date.now();
    localStorage.setItem(storageKeys.lastSyncAt, String(now));
    writeKnownCloudNote(normalized, {
      cloudFoldersSignature: foldersSignature(mergeFolderLists(storedFolders(), cloudSnapshotFolders(remotePayload), [normalized.folder])),
      pending: dirtyNoteIds().length > 0,
      dirtyNoteIds: dirtyNoteIds(),
      lastError: "",
      remoteUpdatedAt: Number(remotePayload.updatedAt) || now,
      lastSyncedAt: now,
      lastPullAt: now,
      lastCheckedAt: now
    });
    const message = t("notePulledFromCloud").replace("{time}", formatTime(now));
    showSyncMessage(message);
    showToast(message);
    renderAll();
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
  renderLists();
}

function clearSyncPending(remoteUpdatedAt = Date.now(), patch = {}, syncedSnapshots = null) {
  const now = Date.now();
  localStorage.setItem(storageKeys.lastSyncAt, String(now));
  if (syncedSnapshots) clearSyncedDirtyNotes(syncedSnapshots);
  else if (NOTE_SYNC_ENGINE !== "crdt") clearDirtyNotes();
  writeSyncMeta({
    pending: state.dirtyNoteIds.size > 0 || state.crdtPendingUpdates.length > 0,
    dirtyNoteIds: dirtyNoteIds(),
    lastError: "",
    remoteUpdatedAt: Number(remoteUpdatedAt) || now,
    lastSyncedAt: now,
    ...patch
  });
}

function startCloudSync(options = {}) {
  stopCloudSync();
  if (NOTE_SYNC_ENGINE !== "crdt" || !getSyncToken() || !elements.autoSyncToggle.checked) {
    renderSyncMeta();
    return;
  }
  state.syncStartupTimer = window.setTimeout(() => {
    state.syncStartupTimer = null;
    syncCloudInBackground({ silent: true, reason: "startup" });
  }, options.immediate ? 0 : 120);
  state.syncPollTimer = window.setInterval(() => {
    if (document.visibilityState === "hidden" || navigator.onLine === false) return;
    syncCloudInBackground({ silent: true, pullOnly: true, reason: "poll" });
  }, SYNC_POLL_INTERVAL);
  renderSyncMeta();
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

async function fetchWithTimeout(resource, options = {}, timeout = SYNC_REQUEST_TIMEOUT) {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), timeout);
  try {
    return await fetch(resource, { ...options, signal: controller.signal });
  } finally {
    window.clearTimeout(timer);
  }
}

async function fetchCloudState(token) {
  const response = await fetchWithTimeout(apiUrl(`/api/notes?t=${Date.now()}`), {
    cache: "no-store",
    headers: cloudHeaders(token)
  });
  if (!response.ok) throw new Error(await response.text());
  return response.json();
}

async function fetchCrdtState(token, since = 0) {
  const response = await fetchWithTimeout(apiUrl(`/api/notes?crdt=1&since=${Number(since) || 0}&t=${Date.now()}`), {
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

async function postCrdtUpdates(token, updates, options = {}) {
  const response = await fetchWithTimeout(apiUrl("/api/notes"), {
    method: "POST",
    cache: "no-store",
    headers: cloudHeaders(token, true),
    body: JSON.stringify({ updates, seed: Boolean(options.seed) })
  });
  if (!response.ok) throw new Error(await response.text());
  return response.json();
}

async function putCloudState(token, snapshot = {}) {
  const notes = Array.isArray(snapshot.notes) ? snapshot.notes : syncableNotes();
  const folders = Array.isArray(snapshot.folders) ? snapshot.folders : storedFolders();
  const response = await fetchWithTimeout(apiUrl("/api/notes"), {
    method: "PUT",
    cache: "no-store",
    headers: cloudHeaders(token, true),
    body: JSON.stringify({ notes, folders, updatedAt: Date.now() })
  });
  if (!response.ok) throw new Error(await response.text());
  return response.json();
}

function replaceNotesFromCloud(notes, options = {}) {
  const keepActiveId = options.keepActiveId !== false ? state.activeId : null;
  state.notes = withSystemNotes(notes).sort((a, b) => Number(b.pinned) - Number(a.pinned) || noteVersion(b) - noteVersion(a));
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
  writeCrdtDocState();
  renderAll();
}

function fullCrdtUpdateBase64() {
  return bytesToBase64(window.Y.encodeStateAsUpdate(state.crdtDoc));
}

function createCrdtVerificationTarget() {
  const dirtyIds = dirtyNoteIds();
  const verifyEverything = state.crdtPendingUpdates.length > 0 && dirtyIds.length === 0;
  const noteIds = verifyEverything
    ? state.notes.filter((note) => !isFolderRegistry(note)).map((note) => note.id)
    : dirtyIds.filter((id) => id !== FOLDER_REGISTRY_NOTE_ID);
  const noteSignatures = Object.fromEntries(
    [...new Set(noteIds)]
      .map((id) => [id, noteSignatureById(id)])
      .filter(([, signature]) => signature)
  );
  return {
    noteSignatures,
    foldersSignature: verifyEverything || dirtyIds.includes(FOLDER_REGISTRY_NOTE_ID)
      ? foldersSignature()
      : null
  };
}

function crdtSnapshotMatchesTarget(snapshot, target) {
  const notes = Array.isArray(snapshot?.notes) ? snapshot.notes.map(normalizeNote) : [];
  const noteMap = new Map(notes.map((note) => [note.id, note]));
  const noteMatches = Object.entries(target?.noteSignatures || {}).every(([id, signature]) => {
    const note = noteMap.get(id);
    return note && notesSignature([note]) === signature;
  });
  if (!noteMatches) return false;
  if (target?.foldersSignature) {
    return foldersSignature(snapshot?.folders || []) === target.foldersSignature;
  }
  return true;
}

async function verifyCrdtCloudState(token, target) {
  const payload = await fetchAllCrdtState(token, 0);
  const snapshot = snapshotFromCrdtUpdates(Array.isArray(payload.updates) ? payload.updates : []);
  return {
    ok: crdtSnapshotMatchesTarget(snapshot, target),
    latestId: Number(payload.latestId) || 0,
    snapshot
  };
}

async function syncCrdtCloud(options = {}) {
  const token = getSyncToken();
  const manual = Boolean(options.manual);
  const silent = Boolean(options.silent);
  const forcePull = Boolean(options.forcePull);
  const pullOnly = Boolean(options.pullOnly) || forcePull;

  if (!token) {
    if (manual) showSyncMessage("请先填写同步 Token。");
    renderSyncMeta();
    return false;
  }
  if (!crdtAvailable()) {
    initCrdtFromState();
  }
  if (!crdtAvailable()) {
    const message = "实时同步组件未加载，当前内容仍已保存在本地。";
    writeSyncMeta({ lastError: message, connectionState: "error" });
    renderSyncMeta();
    if (!silent) {
      showSyncMessage(message);
      showToast(message);
    }
    return false;
  }
  if (navigator.onLine === false) {
    writeSyncMeta({ connectionState: "offline" });
    renderSyncMeta();
    return false;
  }
  if (!manual && !elements.autoSyncToggle.checked) return;
  if (state.syncInFlight) {
    queueSyncRequest(options);
    return false;
  }
  if (!pullOnly && !prepareCurrentNoteForSync({
    noteId: options.noteId || state.activeId,
    forcePush: Boolean(options.forcePush)
  })) {
    if (manual) {
      showSyncMessage(t("inputComposing"));
      showToast(t("inputComposing"));
    }
    renderSyncMeta();
    return false;
  }
  if (pullOnly && state.noteInputComposing) return false;
  if (pullOnly && (state.saveTimer || state.savePendingNoteId)) {
    if (!prepareCurrentNoteForSync({ noteId: state.activeId })) return false;
  }

  clearTimeout(state.autoSyncTimer);
  localStorage.setItem(storageKeys.syncToken, token);
  state.syncInFlight = true;
  state.syncAction = pullOnly ? "pulling" : "pushing";
  writeSyncMeta({
    connectionState: "checking",
    lastAttemptAt: Date.now(),
    lastError: ""
  });
  renderSyncMeta();
  if (!silent) showSyncMessage(forcePull ? t("syncRefreshing") : pullOnly ? t("syncPulling") : t("syncPushing"));

  let pushed = false;
  let pulled = false;
  let seedPending = false;
  let skippedRemoteForLocal = false;
  try {
    const since = forcePull ? 0 : Number(localStorage.getItem(storageKeys.crdtUpdateId) || 0);
    const remotePayload = await fetchAllCrdtState(token, since);
    const updates = Array.isArray(remotePayload.updates) ? remotePayload.updates : [];
    const latestId = Number(remotePayload.latestId) || 0;
    const localHasChanges = dirtyNoteIds().length > 0 || Boolean(state.saveTimer || state.savePendingNoteId);

    if (updates.length) {
      if (localHasChanges && !forcePull) {
        skippedRemoteForLocal = true;
      } else if ((forcePull || since === 0) && !localHasChanges) {
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
      const lastRemoteId = Number(updates[updates.length - 1]?.id) || latestId;
      if (lastRemoteId > since) localStorage.setItem(storageKeys.crdtUpdateId, String(lastRemoteId));
      pulled = true;
    } else if (since === 0 && latestId === 0 && legacyPayloadHasNotes(remotePayload.legacy) && !localHasChanges) {
      replaceStateFromLegacyPayload(remotePayload.legacy);
      state.crdtSeedIsDefault = false;
      state.crdtPendingUpdates = [fullCrdtUpdateBase64()];
      writeCrdtPendingUpdates();
      pulled = true;
    } else if (since === 0 && latestId === 0 && !state.crdtSeedIsDefault) {
      state.crdtPendingUpdates = [fullCrdtUpdateBase64()];
      writeCrdtPendingUpdates();
      seedPending = true;
    }

    if (!pullOnly) ensureCrdtPendingUpdatesForDirty();

    if (!pullOnly && state.crdtPendingUpdates.length) {
      const pending = [...state.crdtPendingUpdates];
      const dirtySnapshot = Object.fromEntries(dirtyNoteIds().map((id) => [id, noteSignatureById(id)]));
      const result = await postCrdtUpdates(token, pending, { seed: seedPending && pending.length === 1 });
      if (result?.skipped) {
        const nextPayload = await fetchAllCrdtState(token, 0);
        const nextUpdates = Array.isArray(nextPayload.updates) ? nextPayload.updates : [];
        if (nextUpdates.length) {
          resetCrdtFromUpdates(nextUpdates);
          localStorage.setItem(storageKeys.crdtUpdateId, String(Number(nextPayload.latestId) || Number(result.latestId) || 0));
          state.crdtPendingUpdates = [];
          writeCrdtPendingUpdates();
          clearSyncPending(Date.now(), {
            lastPullAt: Date.now(),
            lastCheckedAt: Date.now(),
            lastSuccessAt: Date.now(),
            connectionState: "online"
          });
          pulled = true;
          return true;
        }
      }
      const currentPending = state.crdtPendingUpdates;
      const sentPrefixMatches = pending.every((update, index) => currentPending[index] === update);
      state.crdtPendingUpdates = sentPrefixMatches
        ? currentPending.slice(pending.length)
        : [fullCrdtUpdateBase64()];
      const postedLatestId = Number(result.latestId) || 0;
      if (postedLatestId > Number(localStorage.getItem(storageKeys.crdtUpdateId) || 0)) {
        localStorage.setItem(storageKeys.crdtUpdateId, String(postedLatestId));
      }
      writeCrdtPendingUpdates();
      clearSyncPending(Number(result.updatedAt) || Date.now(), {
        lastPushAt: Date.now(),
        lastPullAt: pulled ? Date.now() : readSyncMeta().lastPullAt || 0,
        lastSuccessAt: Date.now(),
        connectionState: "online"
      }, dirtySnapshot);
      try {
        const canonicalPayload = await fetchAllCrdtState(token, 0);
        const canonicalUpdates = Array.isArray(canonicalPayload.updates) ? canonicalPayload.updates : [];
        if (canonicalUpdates.length) {
          resetCrdtFromUpdates(canonicalUpdates);
          localStorage.setItem(storageKeys.crdtUpdateId, String(Number(canonicalPayload.latestId) || postedLatestId));
          pulled = true;
        }
      } catch {}
      pushed = true;
    } else if (forcePull || pulled) {
      clearSyncPending(Date.now(), {
        lastPullAt: Date.now(),
        lastCheckedAt: Date.now(),
        lastSuccessAt: Date.now(),
        connectionState: "online"
      });
    } else {
      writeSyncMeta({
        pending: state.crdtPendingUpdates.length > 0 || dirtyNoteIds().length > 0,
        dirtyNoteIds: dirtyNoteIds(),
        lastError: "",
        lastCheckedAt: Date.now(),
        lastSuccessAt: Date.now(),
        connectionState: "online"
      });
    }

    if ((pushed || pulled || forcePull) && !state.crdtPendingUpdates.length && !hasDirtyNotes()) {
      void putCloudState(token, {
        notes: syncableNotes(),
        folders: storedFolders()
      }).catch(() => {});
    }

    if (state.crdtPendingUpdates.length) scheduleAutoSync();
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
    return true;
  } catch (error) {
    const message = `${t("syncFailed")}：${cloudErrorText(error)}`;
    writeSyncMeta({
      pending: state.crdtPendingUpdates.length > 0 || state.dirtyNoteIds.size > 0,
      dirtyNoteIds: dirtyNoteIds(),
      lastError: message,
      connectionState: navigator.onLine === false ? "offline" : "error"
    });
    renderSyncMeta();
    if (!silent) {
      showSyncMessage(message);
      showToast(message);
    }
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

async function syncCloud(options = {}) {
  if (NOTE_SYNC_ENGINE === "crdt") return syncCrdtCloud(options);

  const token = getSyncToken();
  const manual = Boolean(options.manual);
  const silent = Boolean(options.silent);
  const forcePush = Boolean(options.forcePush);
  const forcePull = Boolean(options.forcePull);
  const pullOnly = (Boolean(options.pullOnly) || forcePull) && !forcePush;

  if (!token) {
    if (manual) showSyncMessage("请先填写同步 Token。");
    renderSyncMeta();
    return false;
  }
  if (!manual && !elements.autoSyncToggle.checked) return false;
  if (state.syncInFlight) {
    queueSyncRequest(options);
    return false;
  }
  if (pullOnly && !forcePull && (hasDirtyNotes() || state.noteInputComposing)) {
    if (manual) {
      showSyncMessage(t("inputComposing"));
      showToast(t("inputComposing"));
    }
    renderSyncMeta();
    scheduleAutoSync();
    return false;
  }
  if (!pullOnly && !prepareCurrentNoteForSync({
    noteId: options.noteId || state.activeId,
    forcePush
  })) {
    if (manual) {
      showSyncMessage(t("inputComposing"));
      showToast(t("inputComposing"));
    }
    renderSyncMeta();
    return false;
  }

  if (forcePull) {
    clearTimeout(state.saveTimer);
    state.saveTimer = null;
    state.savePendingNoteId = null;
    state.dirtyNoteIds.clear();
    clearLegacyCrdtSyncState();
    writeSyncMeta({ pending: false, dirtyNoteIds: [], lastError: "" });
  }

  clearTimeout(state.autoSyncTimer);
  localStorage.setItem(storageKeys.syncToken, token);
  const shouldPush = !pullOnly && (forcePush || hasDirtyNotes());
  const pendingBefore = shouldPush || hasDirtyNotes();
  state.syncInFlight = true;
  state.syncAction = shouldPush ? "pushing" : "pulling";
  renderSyncMeta();
  if (!silent) showSyncMessage(forcePull ? t("syncRefreshing") : shouldPush ? t("syncPushing") : t("syncPulling"));

  try {
    if (shouldPush) {
      const localSignature = snapshotSignature(syncableNotes(), storedFolders());
      const pushResult = await putCloudState(token);
      let remoteUpdatedAt = Number(pushResult.updatedAt) || Date.now();
      if (!silent) showSyncMessage(t("syncVerifying"));
      writeSyncMeta({ lastError: "", lastVerifyStartedAt: Date.now() });
      const verifyPayload = await fetchCloudState(token);
      remoteUpdatedAt = Number(verifyPayload.updatedAt) || remoteUpdatedAt;
      const remoteSignature = cloudSnapshotSignature(verifyPayload);
      const now = Date.now();
      if (remoteSignature !== localSignature) {
        const message = t("syncVerifyFailed");
        writeSyncMeta({
          pending: true,
          dirtyNoteIds: dirtyNoteIds(),
          lastError: message,
          remoteUpdatedAt,
          lastCheckedAt: now,
          lastVerifyAt: now
        });
        renderSyncMeta();
        showSyncMessage(message);
        if (!silent) showToast(message);
        return false;
      }

      clearSyncPending(remoteUpdatedAt, {
        ...cloudSnapshotMetaPatch(syncableNotes(), storedFolders()),
        lastPushAt: now,
        lastVerifiedAt: now,
        lastCheckedAt: now
      });
      renderSyncMeta();
      renderLists();
      const message = t("syncVerifiedAt").replace("{time}", formatTime(now));
      showSyncMessage(message);
      if (!silent) showToast(message);
      return true;
    }

    const beforeSignature = snapshotSignature(syncableNotes(), storedFolders());
    const remotePayload = await fetchCloudState(token);
    const remoteUpdatedAt = Number(remotePayload.updatedAt) || Date.now();
    const remoteSignature = cloudSnapshotSignature(remotePayload);
    const pulled = forcePull || beforeSignature !== remoteSignature;
    if (pulled) {
      replaceNotesFromCloud(cloudSnapshotNotes(remotePayload), {
        keepActiveId: true,
        folders: cloudSnapshotFolders(remotePayload)
      });
    }

    const now = Date.now();
    clearSyncPending(remoteUpdatedAt, {
      ...cloudSnapshotMetaPatch(cloudSnapshotNotes(remotePayload), cloudSnapshotFolders(remotePayload)),
      lastPullAt: pulled ? now : readSyncMeta().lastPullAt || 0,
      lastCheckedAt: now
    });
    renderSyncMeta();
    renderLists();
    if (forcePull) {
      const message = t("syncRefreshedAt").replace("{time}", formatTime(now));
      showSyncMessage(message);
      showToast(message);
    } else if (pulled) {
      const message = t("syncPulledAt").replace("{time}", formatTime(now));
      showSyncMessage(message);
      if (!silent) showToast(message);
    } else if (manual) {
      const message = t("syncNoChange");
      showSyncMessage(message);
      showToast(message);
    } else if (!silent) {
      showSyncMessage(t("syncCheckedAt").replace("{time}", formatTime(now)));
    }
    return true;
  } catch (error) {
    const message = `${t("syncFailed")}：${cloudErrorText(error)}`;
    if (pendingBefore || forcePush) writeSyncMeta({ pending: true, dirtyNoteIds: dirtyNoteIds(), lastError: message });
    else writeSyncMeta({ lastError: message });
    renderSyncMeta();
    if (!silent) {
      showSyncMessage(message);
      showToast(message);
    }
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

function clearSyncToken() {
  clearTimeout(state.syncTokenTimer);
  state.syncTokenTimer = null;
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

function refreshSyncAccessUi() {
  resetTransferState();
  applyFolderSectionVisibility();
  renderFolderDatalist();
  renderExportFolderSelect();
  renderLists();
  renderTransferPanel();
  renderSyncMeta();
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

function handleSyncTokenInput() {
  clearTimeout(state.syncTokenTimer);
  const token = elements.syncTokenInput.value.trim();

  if (!token) {
    localStorage.removeItem(storageKeys.syncToken);
    localStorage.setItem(storageKeys.autoSync, "0");
    elements.autoSyncToggle.checked = false;
    stopCloudSync();
    refreshSyncAccessUi();
    showSyncMessage(t("syncLocalReady"));
    return;
  }

  stopCloudSync();
  localStorage.setItem(storageKeys.syncToken, token);
  localStorage.setItem(storageKeys.autoSync, "1");
  elements.autoSyncToggle.checked = true;
  refreshSyncAccessUi();
  startCloudSync({ immediate: true });

  state.syncTokenTimer = window.setTimeout(async () => {
    state.syncTokenTimer = null;
    if (!getSyncToken()) return;
    showSyncMessage(t("cloudReady"));
    renderSyncMeta();
  }, 900);
}

function getSyncToken() {
  return (elements.syncTokenInput.value || localStorage.getItem(storageKeys.syncToken) || "").trim();
}

function showSyncMessage(message) {
  elements.syncMessage.textContent = message;
}

function cloudErrorText(error) {
  const text = String(error?.message || error || "未知错误");
  if (error?.name === "AbortError" || text.includes("aborted")) return t("syncTimeout");
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
  if (elements.saveStatus) elements.saveStatus.textContent = getSyncToken() ? t("syncPending") : t("savedLocal");
  updateTitleSaveStatusFromNote();
  markSyncPending(dirtyId);
  if (message) showToast(message);
}

function setSaveStatus(message) {
  if (elements.saveStatus) elements.saveStatus.textContent = message;
}

function updateTitleSaveStatusFromNote(syncMeta = readSyncMeta()) {
  if (!elements.titleSaveStatus || !elements.titleSaveStatusText) return;
  if (!showPerNoteSyncIndicators()) {
    elements.titleSaveStatus.hidden = true;
    elements.titleSaveStatusText.textContent = "";
    elements.titleSaveStatus.removeAttribute("title");
    elements.titleSaveStatus.removeAttribute("aria-label");
    return;
  }
  elements.titleSaveStatus.hidden = false;
  const note = activeNote();
  const status = noteCloudStatus(note, syncMeta);
  let label = t("titleSaved");
  let unsaved = false;

  if (status.status === "dirty") {
    label = t("syncPendingShort");
    unsaved = true;
  } else if (status.status === "saving") {
    label = t("syncPushing");
    unsaved = true;
  } else if (status.status === "synced") {
    label = t("synced");
  } else if (status.status === "offline") {
    label = t("titleSaved");
  } else if (status.label) {
    label = status.label;
  }

  elements.titleSaveStatus.classList.toggle("unsaved", unsaved);
  elements.titleSaveStatus.classList.toggle("saved", !unsaved);
  const icon = elements.titleSaveStatus.querySelector(".title-save-icon");
  if (icon) icon.textContent = "";
  elements.titleSaveStatusText.textContent = label;
  elements.titleSaveStatus.title = status.label || label;
  elements.titleSaveStatus.setAttribute("aria-label", status.label || label);
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
  const newNoteTitleLabel = document.getElementById("newNoteTitleLabel");
  if (newNoteTitleLabel) newNoteTitleLabel.textContent = t("newNoteTitleLabel");
  if (elements.newNoteTitleInput) elements.newNoteTitleInput.placeholder = t("newNoteTitlePlaceholder");
  const newNoteTypeLabel = document.getElementById("newNoteTypeLabel");
  if (newNoteTypeLabel) newNoteTypeLabel.textContent = t("newNoteTypeLabel");
  updateNewNoteTypeLabels();
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
  if (elements.docInput) elements.docInput.dataset.placeholder = t("docPlaceholder");
  if (elements.sidebarQuickNewButton) elements.sidebarQuickNewButton.title = t("newNote");
  if (elements.sidebarQuickNewButton) elements.sidebarQuickNewButton.setAttribute("aria-label", t("newNote"));
  if (elements.mobileNotesButton) {
    const mobileLabel = elements.mobileNotesButton.querySelector("span:last-child");
    if (mobileLabel) mobileLabel.textContent = t("mobileNotes");
    elements.mobileNotesButton.title = document.body.classList.contains("mobile-sidebar-open") ? t("closeNotes") : t("openNotes");
    elements.mobileNotesButton.setAttribute("aria-label", document.body.classList.contains("mobile-sidebar-open") ? t("closeNotes") : t("openNotes"));
  }
  if (elements.syncRefreshButton) {
    elements.syncRefreshButton.title = t("syncAll");
    elements.syncRefreshButton.setAttribute("aria-label", t("syncAll"));
  }
  if (elements.saveAllButton) {
    elements.saveAllButton.title = t("saveAll");
    elements.saveAllButton.setAttribute("aria-label", t("saveAll"));
    const label = elements.saveAllButton.querySelector("span:last-child");
    if (label) label.textContent = t("saveAll");
  }
  if (elements.syncRefreshButton) {
    const label = elements.syncRefreshButton.querySelector("span:last-child");
    if (label) label.textContent = t("syncAll");
  }
  elements.youdaoFilterButtons.forEach((button) => {
    const label = button.querySelector("span:last-child");
    if (!label) return;
    label.textContent = button.dataset.youdaoFilter === "favorite" ? t("favorite") : t("allNotes");
  });
  if (elements.youdaoTransferButton) {
    const label = elements.youdaoTransferButton.querySelector("span:last-child");
    if (label) label.textContent = t("transferAssistantTitle");
  }
  if (elements.youdaoClientSummary) {
    const label = elements.youdaoClientSummary.querySelector("span:last-child");
    if (label) label.textContent = t("clientDownload");
  }
  if (elements.youdaoInstallDesktopButton) {
    const label = elements.youdaoInstallDesktopButton.querySelector("span:last-child");
    if (label) label.textContent = t("installDesktopClient");
  }
  if (elements.youdaoAndroidAppButton) {
    const label = elements.youdaoAndroidAppButton.querySelector("span:last-child");
    if (label) label.textContent = t("androidApp");
  }
  if (elements.youdaoSyncSettingsButton) {
    const label = elements.youdaoSyncSettingsButton.querySelector("span:last-child");
    if (label) label.textContent = t("syncSettings");
    elements.youdaoSyncSettingsButton.title = t("syncSettings");
    elements.youdaoSyncSettingsButton.setAttribute("aria-label", t("syncSettings"));
  }
  applyYoudaoLayout(currentYoudaoLayout(), { persist: false, toggle: false });
  if (elements.topSyncButton) elements.topSyncButton.textContent = t("sync");
  if (elements.saveNoteButton) {
    elements.saveNoteButton.textContent = t("saveNote");
    elements.saveNoteButton.title = t("saveNoteShortcut");
    elements.saveNoteButton.setAttribute("aria-label", t("saveNoteShortcut"));
  }
  updateTitleSaveStatusFromNote();
  if (elements.syncNoteButton) elements.syncNoteButton.textContent = t("syncNote");
  const topbarMenuButton = document.querySelector(".topbar-menu-button");
  if (topbarMenuButton) {
    topbarMenuButton.title = t("moreActions");
    topbarMenuButton.setAttribute("aria-label", t("moreActions"));
  }
  applySidebarCollapsed(state.sidebarCollapsed);
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
  setToolbarTitle('[data-doc-command="bold"]', t("bold"));
  setToolbarTitle('[data-doc-command="italic"]', t("italic"));
  setToolbarTitle('[data-doc-command="underline"]', t("underline"));
  setToolbarTitle('[data-doc-command="strikeThrough"]', t("strikethrough"));
  setToolbarTitle('[data-doc-command="removeFormat"]', t("clearFormat"));
  setToolbarTitle('[data-doc-command="insertUnorderedList"]', t("unorderedList"));
  setToolbarTitle('[data-doc-command="insertOrderedList"]', t("orderedList"));
  setToolbarTitle('[data-doc-command="justifyLeft"]', t("alignLeft"));
  setToolbarTitle('[data-doc-command="justifyCenter"]', t("alignCenter"));
  setToolbarTitle('[data-doc-command="justifyRight"]', t("alignRight"));
  setToolbarTitle('[data-doc-command="outdent"]', t("decreaseIndent"));
  setToolbarTitle('[data-doc-command="indent"]', t("increaseIndent"));
  setToolbarTitle('[data-doc-action="checklist"]', t("taskList"));
  setToolbarTitle('[data-doc-block="blockquote"]', t("quote"));
  if (elements.docBlockSelect) {
    elements.docBlockSelect.title = t("paragraphStyle");
    elements.docBlockSelect.setAttribute("aria-label", t("paragraphStyle"));
    const blockLabels = {
      p: t("paragraphBody"),
      h1: t("heading1"),
      h2: t("heading2"),
      h3: t("heading3"),
      blockquote: t("quote")
    };
    Array.from(elements.docBlockSelect.options).forEach((option) => {
      option.textContent = blockLabels[option.value] || option.textContent;
    });
  }
  if (elements.docFontSelect) {
    elements.docFontSelect.title = t("fontFamily");
    elements.docFontSelect.setAttribute("aria-label", t("fontFamily"));
    const defaultOption = elements.docFontSelect.querySelector('option[value=""]');
    if (defaultOption) defaultOption.textContent = t("defaultFont");
  }
  if (elements.docFontSizeSelect) {
    elements.docFontSizeSelect.title = t("fontSize");
    elements.docFontSizeSelect.setAttribute("aria-label", t("fontSize"));
  }
  setToolbarTitle('#docTextColorInput', t("textColor"));
  setToolbarTitle('#docHighlightInput', t("highlightColor"));
  setToolbarTitle('[data-doc-color-apply="foreColor"]', t("textColor"));
  setToolbarTitle('[data-doc-color-apply="hiliteColor"]', t("highlightColor"));
  const docTextSummary = document.querySelector('[data-doc-color-menu="foreColor"] > summary');
  if (docTextSummary) {
    docTextSummary.title = t("textColor");
    docTextSummary.setAttribute("aria-label", t("textColor"));
  }
  const docHighlightSummary = document.querySelector('[data-doc-color-menu="hiliteColor"] > summary');
  if (docHighlightSummary) {
    docHighlightSummary.title = t("highlightColor");
    docHighlightSummary.setAttribute("aria-label", t("highlightColor"));
  }
  setMenuItemLabel(document.querySelector('[data-doc-color-clear="foreColor"]'), t("defaultTextColor"));
  setMenuItemLabel(document.querySelector('[data-doc-color-clear="hiliteColor"]'), t("clearHighlight"));
  document.querySelectorAll(".doc-custom-color span").forEach((span) => { span.textContent = t("customColor"); });
  const docInsertMenu = document.querySelector(".doc-insert-menu > summary");
  if (docInsertMenu) {
    docInsertMenu.title = t("insertMenu");
    docInsertMenu.setAttribute("aria-label", t("insertMenu"));
    const label = docInsertMenu.querySelector("span:nth-child(2)");
    if (label) label.textContent = t("insertMenu");
  }
  const docMoreMenu = document.querySelector(".doc-more-menu > summary");
  if (docMoreMenu) {
    docMoreMenu.title = t("moreFormat");
    docMoreMenu.setAttribute("aria-label", t("moreFormat"));
    const label = docMoreMenu.querySelector("span:first-child");
    if (label) label.textContent = t("moreButton");
  }
  setMenuItemLabel(document.querySelector('[data-doc-action="image"]'), t("insertImage"));
  setToolbarTitle('[data-doc-action="image"]', t("insertImage"));
  setMenuItemLabel(document.querySelector('[data-doc-action="link"]'), t("insertLink"));
  setToolbarTitle('[data-doc-command="unlink"]', t("removeLink"));
  if (elements.docImageControlLabel) elements.docImageControlLabel.textContent = t("docImageSize");
  if (elements.docImageControls) elements.docImageControls.setAttribute("aria-label", t("docImageSize"));
  if (elements.docImageOriginalButton) elements.docImageOriginalButton.textContent = t("docImageOriginal");
  if (elements.docImageRemoveButton) {
    elements.docImageRemoveButton.title = t("docImageRemove");
    elements.docImageRemoveButton.setAttribute("aria-label", t("docImageRemove"));
  }
  if (elements.docImageResizeHandle) elements.docImageResizeHandle.setAttribute("aria-label", t("docImageResize"));
  if (elements.docImageUploadText) elements.docImageUploadText.textContent = t("docImageUploading");
  const insertMenu = document.querySelector(".toolbar-menu.md-tool > summary");
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
  const androidAppDialogTitle = document.getElementById("androidAppDialogTitle");
  if (androidAppDialogTitle) androidAppDialogTitle.textContent = t("androidAppTitle");
  const androidAppDialogCopy = document.getElementById("androidAppDialogCopy");
  if (androidAppDialogCopy) androidAppDialogCopy.textContent = t("androidAppCopy");
  const downloadAndroidAppButton = document.getElementById("downloadAndroidAppButton");
  if (downloadAndroidAppButton) downloadAndroidAppButton.textContent = t("androidDownload");
  const checkAppUpdateButton = document.getElementById("checkAppUpdateButton");
  if (checkAppUpdateButton) checkAppUpdateButton.textContent = t("androidCheckUpdate");
  hydrateAppUpdatePanel();
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
  document.querySelectorAll(selector).forEach((button) => {
    button.title = label;
    button.setAttribute("aria-label", label);
  });
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
  const metrics = getEditorMetrics();
  textarea.scrollTop = Math.max(0, metrics.paddingTop + getEditorLineTopOffset(match.line, metrics) - textarea.clientHeight / 3);
  updateCurrentLineIndicator();
  syncLineNumberScroll();
}

function handleEditorCursorChange() {
  updateCurrentLineIndicator();
  renderDashboardOverview();
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

function saveDocSelection() {
  if (!elements.docInput) return;
  const selection = window.getSelection?.();
  if (!selection || !selection.rangeCount) return;
  const range = selection.getRangeAt(0);
  const container = range.commonAncestorContainer;
  const owner = container.nodeType === Node.ELEMENT_NODE ? container : container.parentNode;
  if (!owner || !elements.docInput.contains(owner)) return;
  state.docSelection = range.cloneRange();
}

function restoreDocSelection() {
  if (!elements.docInput) return;
  elements.docInput.focus();
  const selection = window.getSelection?.();
  if (!selection) return;
  if (state.docSelection) {
    try {
      selection.removeAllRanges();
      selection.addRange(state.docSelection);
      return;
    } catch {
      state.docSelection = null;
    }
  }
  const range = document.createRange();
  range.selectNodeContents(elements.docInput);
  range.collapse(false);
  selection.removeAllRanges();
  selection.addRange(range);
  state.docSelection = range.cloneRange();
}

function focusDocEditorEnd() {
  if (!elements.docInput) return;
  elements.docInput.focus();
  const selection = window.getSelection?.();
  if (!selection) return;
  const range = document.createRange();
  range.selectNodeContents(elements.docInput);
  range.collapse(false);
  selection.removeAllRanges();
  selection.addRange(range);
  state.docSelection = range.cloneRange();
}

function getDocSelectionOffsets() {
  if (!elements.docInput) return null;
  const selection = window.getSelection?.();
  if (!selection || !selection.rangeCount) return null;
  const range = selection.getRangeAt(0);
  if (!elements.docInput.contains(range.commonAncestorContainer)) return null;

  const measure = document.createRange();
  measure.selectNodeContents(elements.docInput);
  measure.setEnd(range.startContainer, range.startOffset);
  const start = measure.toString().length;
  measure.setEnd(range.endContainer, range.endOffset);
  const end = measure.toString().length;
  measure.detach?.();
  return { start, end };
}

function restoreDocSelectionOffsets(offsets) {
  if (!elements.docInput || !offsets) return;
  const walker = document.createTreeWalker(elements.docInput, NodeFilter.SHOW_TEXT);
  const range = document.createRange();
  let consumed = 0;
  let startSet = false;
  let endSet = false;
  let node = walker.nextNode();

  while (node) {
    const next = consumed + node.textContent.length;
    if (!startSet && offsets.start <= next) {
      range.setStart(node, Math.max(0, offsets.start - consumed));
      startSet = true;
    }
    if (!endSet && offsets.end <= next) {
      range.setEnd(node, Math.max(0, offsets.end - consumed));
      endSet = true;
      break;
    }
    consumed = next;
    node = walker.nextNode();
  }

  if (!startSet || !endSet) {
    range.selectNodeContents(elements.docInput);
    range.collapse(false);
  }
  const selection = window.getSelection?.();
  if (!selection) return;
  selection.removeAllRanges();
  selection.addRange(range);
  state.docSelection = range.cloneRange();
}

function normalizeDocInputHtml(options = {}) {
  const note = activeNote();
  if (!note || note.mode !== "doc" || !elements.docInput) return;
  const selectionOffsets = getDocSelectionOffsets();
  let clean = sanitizeDocHtml(elements.docInput.innerHTML || "<p></p>");
  if (options.compactGeneratedSpacing) clean = compactDocGeneratedSpacing(clean);
  if (elements.docInput.innerHTML !== clean) {
    elements.docInput.innerHTML = clean;
    restoreDocSelectionOffsets(selectionOffsets);
  }
  updateActiveFromInputs({ force: true });
}

function currentDocBlockTag() {
  const selection = window.getSelection?.();
  if (!selection || !selection.anchorNode || !elements.docInput) return "";
  let node = selection.anchorNode.nodeType === Node.ELEMENT_NODE ? selection.anchorNode : selection.anchorNode.parentNode;
  while (node && node !== elements.docInput) {
    const tag = node.tagName?.toLowerCase();
    if (["p", "h1", "h2", "h3", "blockquote", "li"].includes(tag)) return tag;
    node = node.parentNode;
  }
  return "";
}

function activeDocElement() {
  const selection = window.getSelection?.();
  if (!selection || !selection.anchorNode || !elements.docInput) return null;
  let node = selection.anchorNode.nodeType === Node.ELEMENT_NODE ? selection.anchorNode : selection.anchorNode.parentNode;
  while (node && node !== elements.docInput) {
    if (node.nodeType === Node.ELEMENT_NODE) return node;
    node = node.parentNode;
  }
  return null;
}

function docSelectionInsideEditor() {
  if (!elements.docInput || activeNote()?.mode !== "doc") return false;
  if (document.activeElement === elements.docInput) return true;
  const selection = window.getSelection?.();
  if (!selection || !selection.rangeCount) return false;
  const range = selection.getRangeAt(0);
  return elements.docInput.contains(range.commonAncestorContainer);
}

function handleDocEditorShortcut(event, key = String(event?.key || "").toLowerCase()) {
  if (!docSelectionInsideEditor()) return false;
  if (!(event.ctrlKey || event.metaKey) || event.altKey) return false;
  if (key === "z") {
    event.preventDefault();
    runNativeHistoryCommand(event.shiftKey ? "redo" : "undo");
    return true;
  }
  if (key === "y") {
    event.preventDefault();
    runNativeHistoryCommand("redo");
    return true;
  }
  return false;
}

function docListItemIsEmpty(item) {
  if (!item || item.tagName !== "LI") return false;
  if (item.querySelector("img, .doc-task-box")) return false;
  return !item.textContent.replace(/\u00a0/g, "").replace(/\u200b/g, "").trim();
}

function docListItemFromRange(range) {
  const block = docBlockElementFromNode(range?.startContainer);
  if (block?.tagName === "LI") return block;
  if (range?.startContainer?.nodeType !== Node.ELEMENT_NODE) return null;
  const children = range.startContainer.childNodes;
  const child = children[range.startOffset] || children[Math.max(0, range.startOffset - 1)];
  const candidate = child?.nodeType === Node.ELEMENT_NODE
    ? child.closest?.("li")
    : child?.parentElement?.closest?.("li");
  return candidate && elements.docInput?.contains(candidate) ? candidate : null;
}

function setDocCaretInside(element) {
  if (!element) return;
  const range = document.createRange();
  range.selectNodeContents(element);
  range.collapse(true);
  const selection = window.getSelection?.();
  if (!selection) return;
  selection.removeAllRanges();
  selection.addRange(range);
  state.docSelection = range.cloneRange();
}

function exitEmptyDocListItem(item) {
  const list = item?.parentElement;
  if (!item || !list || !["OL", "UL"].includes(list.tagName)) return false;
  const paragraph = document.createElement("p");
  paragraph.appendChild(document.createElement("br"));
  const followingItems = [];
  let previousCount = 0;
  let previous = item.previousElementSibling;
  while (previous) {
    if (previous.tagName === "LI") previousCount += 1;
    previous = previous.previousElementSibling;
  }
  let sibling = item.nextElementSibling;
  while (sibling) {
    const next = sibling.nextElementSibling;
    followingItems.push(sibling);
    sibling = next;
  }

  recordDocHistoryBeforeChange();
  item.remove();

  if (followingItems.length) {
    const nextList = document.createElement(list.tagName.toLowerCase());
    if (list.tagName === "OL") {
      nextList.start = previousCount + 1;
    }
    followingItems.forEach((node) => nextList.appendChild(node));
    list.parentNode.insertBefore(paragraph, list.nextSibling);
    list.parentNode.insertBefore(nextList, paragraph.nextSibling);
  } else {
    list.parentNode.insertBefore(paragraph, list.nextSibling);
  }

  if (!list.querySelector(":scope > li")) list.remove();
  setDocCaretInside(paragraph);
  updateActiveFromInputs({ force: true });
  syncDocHistoryCurrent();
  updateDocToolbarState();
  elements.docInput?.focus();
  return true;
}

function handleDocKeydown(event) {
  if (event.defaultPrevented || activeNote()?.mode !== "doc") return;
  if (event.key !== "Backspace" || event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) return;
  const selection = window.getSelection?.();
  if (!selection || !selection.rangeCount) return;
  const range = selection.getRangeAt(0);
  if (!range.collapsed || !elements.docInput?.contains(range.commonAncestorContainer)) return;
  const block = docListItemFromRange(range);
  if (block?.tagName !== "LI" || !docListItemIsEmpty(block)) return;
  event.preventDefault();
  exitEmptyDocListItem(block);
}

function handleDocBeforeInput(event) {
  if (activeNote()?.mode !== "doc" || state.docHistory.applying) return;
  if (event.inputType === "historyUndo" || event.inputType === "historyRedo") {
    event.preventDefault();
    runNativeHistoryCommand(event.inputType === "historyUndo" ? "undo" : "redo");
    return;
  }
  if (event.isComposing || event.inputType === "insertCompositionText") return;
  recordDocHistoryBeforeChange();
}

function docBlockElementFromNode(node) {
  let current = node?.nodeType === Node.ELEMENT_NODE ? node : node?.parentNode;
  while (current && current !== elements.docInput) {
    const tag = current.tagName?.toLowerCase();
    if (["p", "h1", "h2", "h3", "blockquote", "li"].includes(tag)) return current;
    current = current.parentNode;
  }
  return null;
}

function selectedDocBlocks() {
  if (!elements.docInput) return [];
  const selection = window.getSelection?.();
  if (!selection || !selection.rangeCount) return [];
  const range = selection.getRangeAt(0);
  if (!elements.docInput.contains(range.commonAncestorContainer)) return [];
  const anchorBlock = docBlockElementFromNode(selection.anchorNode);
  if (range.collapsed) return anchorBlock ? [anchorBlock] : [];
  const blocks = Array.from(elements.docInput.querySelectorAll("p,h1,h2,h3,blockquote,li"))
    .filter((block) => {
      try {
        return range.intersectsNode(block);
      } catch {
        return false;
      }
    });
  if (blocks.length) return blocks;
  return anchorBlock ? [anchorBlock] : [];
}

function createDocTaskBox(checked = false) {
  const box = document.createElement("span");
  box.className = "doc-task-box";
  box.setAttribute("data-doc-task", checked ? "checked" : "unchecked");
  box.setAttribute("contenteditable", "false");
  box.textContent = checked ? "☑" : "☐";
  return box;
}

function normalizeDocTaskBlock(paragraph, emptyText = "待办") {
  if (!paragraph || !["P", "LI"].includes(paragraph.tagName)) return null;
  const box = Array.from(paragraph.children).find((child) => child.classList?.contains("doc-task-box"));
  if (!box) return null;
  const label = Array.from(paragraph.children).find((child) => child.classList?.contains("doc-task-label"))
    || document.createElement("span");
  label.className = "doc-task-label";
  const nodes = Array.from(paragraph.childNodes);
  nodes.forEach((node) => {
    if (node !== box && node !== label) label.appendChild(node);
  });
  if (!label.textContent.replace(/\u00a0/g, "").replace(/\u200b/g, "").trim() && !label.querySelector("img")) {
    label.textContent = emptyText;
  }
  paragraph.classList.add("doc-task-line");
  paragraph.replaceChildren(box, label);
  return paragraph;
}

function docEditableFragmentTextLength(fragment) {
  fragment.querySelectorAll?.(".doc-task-box").forEach((box) => box.remove());
  return fragment.textContent.length;
}

function docEditableOffsetInBlock(block, node, offset) {
  if (!block || !node) return 0;
  try {
    const measure = document.createRange();
    measure.selectNodeContents(block);
    measure.setEnd(node, offset);
    const length = docEditableFragmentTextLength(measure.cloneContents());
    measure.detach?.();
    return length;
  } catch {
    return 0;
  }
}

function docEditablePositionInBlock(block, offset) {
  const target = Math.max(0, Number(offset) || 0);
  const walker = document.createTreeWalker(block, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (node.parentElement?.closest(".doc-task-box")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  let consumed = 0;
  let node = walker.nextNode();
  while (node) {
    const next = consumed + node.textContent.length;
    if (target <= next) return { node, offset: Math.max(0, target - consumed) };
    consumed = next;
    node = walker.nextNode();
  }
  return { node: block, offset: block.childNodes.length };
}

function getDocBlockSelectionSnapshot() {
  if (!elements.docInput) return null;
  const selection = window.getSelection?.();
  if (!selection || !selection.rangeCount) return null;
  const range = selection.getRangeAt(0);
  if (!elements.docInput.contains(range.commonAncestorContainer)) return null;
  const startBlock = docBlockElementFromNode(range.startContainer);
  const endBlock = docBlockElementFromNode(range.endContainer);
  if (!startBlock || !endBlock) return null;
  return {
    collapsed: range.collapsed,
    startBlock,
    endBlock,
    startOffset: docEditableOffsetInBlock(startBlock, range.startContainer, range.startOffset),
    endOffset: docEditableOffsetInBlock(endBlock, range.endContainer, range.endOffset)
  };
}

function restoreDocBlockSelectionSnapshot(snapshot) {
  if (!snapshot || !elements.docInput) return false;
  if (!elements.docInput.contains(snapshot.startBlock) || !elements.docInput.contains(snapshot.endBlock)) return false;
  const start = docEditablePositionInBlock(snapshot.startBlock, snapshot.startOffset);
  const end = snapshot.collapsed
    ? start
    : docEditablePositionInBlock(snapshot.endBlock, snapshot.endOffset);
  const range = document.createRange();
  range.setStart(start.node, start.offset);
  range.setEnd(end.node, end.offset);
  const selection = window.getSelection?.();
  if (!selection) return false;
  selection.removeAllRanges();
  selection.addRange(range);
  state.docSelection = range.cloneRange();
  return true;
}

function removeDocTaskBlock(paragraph) {
  if (!paragraph) return null;
  const box = Array.from(paragraph.children).find((child) => child.classList?.contains("doc-task-box"));
  if (!box) return null;
  const label = Array.from(paragraph.children).find((child) => child.classList?.contains("doc-task-label"));
  const content = document.createDocumentFragment();
  if (label) {
    while (label.firstChild) content.appendChild(label.firstChild);
  } else {
    Array.from(paragraph.childNodes).forEach((node) => {
      if (node !== box) content.appendChild(node);
    });
  }
  paragraph.classList.remove("doc-task-line");
  paragraph.replaceChildren(content);
  return paragraph;
}

function docStyleAncestor(command) {
  if (!elements.docInput) return null;
  const selection = window.getSelection?.();
  if (!selection || !selection.rangeCount) return null;
  const range = selection.getRangeAt(0);
  let node = range.startContainer.nodeType === Node.ELEMENT_NODE ? range.startContainer : range.startContainer.parentNode;
  let match = null;
  while (node && node !== elements.docInput) {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const tag = node.tagName?.toLowerCase();
      const hasBackground = tag === "mark" || Boolean(safeDocColor(node.style?.backgroundColor, "background"));
      const hasColor = Boolean(safeDocColor(node.style?.color, "text"));
      if ((command === "hiliteColor" && hasBackground) || (command === "foreColor" && hasColor)) {
        match = node;
      }
    }
    node = node.parentNode;
  }
  return match;
}

function normalizeDocComparableColor(value, kind = "text") {
  const raw = String(value || "").trim();
  if (!raw) return "";
  if (kind === "background" && /^(transparent|rgba?\(\s*0\s*,\s*0\s*,\s*0\s*,\s*0\s*\))$/i.test(raw)) return "";
  if (typeof document === "undefined") return raw.toLowerCase();
  const probe = document.createElement("span");
  probe.style.color = raw;
  return (probe.style.color || raw).toLowerCase();
}

function docEffectiveStyleColor(node, command) {
  if (!elements.docInput || !node) return "";
  let element = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
  if (!element || !elements.docInput.contains(element)) return "";
  if (command === "foreColor") {
    return normalizeDocComparableColor(window.getComputedStyle(element).color, "text");
  }
  while (element && element !== elements.docInput) {
    const computed = window.getComputedStyle(element);
    const color = normalizeDocComparableColor(element.style?.backgroundColor || computed.backgroundColor, "background");
    if (color) return color;
    element = element.parentElement;
  }
  return "";
}

function selectedDocTextNodes(range) {
  if (!elements.docInput || !range) return [];
  const nodes = [];
  const walker = document.createTreeWalker(elements.docInput, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.textContent.replace(/\u00a0/g, "").replace(/\u200b/g, "").trim()) return NodeFilter.FILTER_REJECT;
      try {
        return range.intersectsNode(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      } catch {
        return NodeFilter.FILTER_REJECT;
      }
    }
  });
  let node = walker.nextNode();
  while (node) {
    nodes.push(node);
    node = walker.nextNode();
  }
  return nodes;
}

function docSelectionStyleMatches(command, color) {
  if (!elements.docInput) return false;
  const target = normalizeDocComparableColor(color, command === "hiliteColor" ? "background" : "text");
  if (!target) return false;
  const selection = window.getSelection?.();
  if (!selection || !selection.rangeCount) return false;
  const range = selection.getRangeAt(0);
  if (!elements.docInput.contains(range.commonAncestorContainer)) return false;
  if (range.collapsed) return docEffectiveStyleColor(range.startContainer, command) === target;
  const nodes = selectedDocTextNodes(range);
  if (!nodes.length) return docEffectiveStyleColor(range.commonAncestorContainer, command) === target;
  return nodes.every((node) => docEffectiveStyleColor(node, command) === target);
}

function moveCollapsedDocSelectionOutOfStyle(command) {
  if (!elements.docInput) return false;
  const selection = window.getSelection?.();
  if (!selection || !selection.rangeCount) return false;
  const range = selection.getRangeAt(0);
  if (!range.collapsed || !elements.docInput.contains(range.startContainer)) return false;
  const styled = docStyleAncestor(command);
  if (!styled || !styled.parentNode) return false;

  const measure = document.createRange();
  measure.selectNodeContents(styled);
  measure.setEnd(range.startContainer, range.startOffset);
  const offset = measure.toString().length;
  const total = styled.textContent.length;
  measure.detach?.();

  const nextRange = document.createRange();
  const caretNode = document.createElement("span");
  caretNode.setAttribute("data-doc-clear-caret", "1");
  caretNode.textContent = "\u200b";
  if (offset <= 0) {
    styled.parentNode.insertBefore(caretNode, styled);
    nextRange.setStart(caretNode.firstChild, 1);
  } else if (offset >= total) {
    styled.parentNode.insertBefore(caretNode, styled.nextSibling);
    nextRange.setStart(caretNode.firstChild, 1);
  } else {
    const afterRange = range.cloneRange();
    afterRange.setEndAfter(styled);
    const afterFragment = afterRange.extractContents();
    styled.parentNode.insertBefore(caretNode, styled.nextSibling);
    styled.parentNode.insertBefore(afterFragment, caretNode.nextSibling);
    nextRange.setStart(caretNode.firstChild, 1);
  }
  nextRange.collapse(true);
  selection.removeAllRanges();
  selection.addRange(nextRange);
  state.docSelection = nextRange.cloneRange();
  return true;
}

function finishDocFormatting(options = {}) {
  saveDocSelection();
  window.setTimeout(() => {
    normalizeDocInputHtml(options);
    syncDocHistoryCurrent();
    updateDocToolbarState();
    elements.docInput?.focus();
  }, 0);
}

function currentDocEditorHtml() {
  return sanitizeDocHtml(elements.docInput?.innerHTML || "<p></p>");
}

function resetDocHistory(note = activeNote()) {
  const html = note?.mode === "doc" ? sanitizeDocHtml(note.body || "<p></p>") : "";
  state.docHistory = {
    noteId: note?.mode === "doc" ? note.id : null,
    undo: [],
    redo: [],
    last: html,
    applying: false
  };
}

function ensureDocHistory(note = activeNote()) {
  if (!note || note.mode !== "doc") return false;
  if (state.docHistory.noteId !== note.id) resetDocHistory(note);
  return true;
}

function trimDocHistoryStack(stack) {
  while (stack.length > DOC_HISTORY_LIMIT) stack.shift();
}

function recordDocHistoryBeforeChange() {
  const note = activeNote();
  if (!ensureDocHistory(note) || state.docHistory.applying) return;
  const current = currentDocEditorHtml();
  if (state.docHistory.undo[state.docHistory.undo.length - 1] !== current) {
    state.docHistory.undo.push(current);
    trimDocHistoryStack(state.docHistory.undo);
  }
  state.docHistory.redo = [];
  state.docHistory.last = current;
}

function syncDocHistoryCurrent() {
  if (!ensureDocHistory(activeNote()) || state.docHistory.applying) return;
  state.docHistory.last = currentDocEditorHtml();
}

function restoreDocHistorySnapshot(html) {
  if (!elements.docInput) return;
  state.docHistory.applying = true;
  elements.docInput.innerHTML = sanitizeDocHtml(html || "<p></p>");
  focusDocEditorEnd();
  updateActiveFromInputs({ force: true });
  updateDocToolbarState();
  state.docHistory.last = currentDocEditorHtml();
  state.docHistory.applying = false;
}

function runDocHistoryCommand(command) {
  if (!ensureDocHistory(activeNote())) return false;
  const undoing = command === "undo";
  const source = undoing ? state.docHistory.undo : state.docHistory.redo;
  const target = undoing ? state.docHistory.redo : state.docHistory.undo;
  if (!source.length) return false;
  const current = currentDocEditorHtml();
  const next = source.pop();
  if (current !== next) {
    target.push(current);
    trimDocHistoryStack(target);
  }
  restoreDocHistorySnapshot(next);
  return true;
}

function applyDocCommand(command, value = null, options = {}) {
  const note = activeNote();
  if (!note || note.mode !== "doc") return;
  if (command === "indent" || command === "outdent") {
    applyDocIndent(command === "indent" ? 1 : -1);
    return;
  }
  if (!options.skipHistory && command !== "undo" && command !== "redo") {
    recordDocHistoryBeforeChange();
  }
  restoreDocSelection();
  try {
    if (command === "foreColor" || command === "hiliteColor" || command === "backColor") {
      document.execCommand("styleWithCSS", false, true);
    } else if (command !== "undo" && command !== "redo") {
      document.execCommand("styleWithCSS", false, false);
    }
    if (command === "hiliteColor") {
      const ok = document.execCommand("hiliteColor", false, value);
      if (!ok) document.execCommand("backColor", false, value);
    } else {
      document.execCommand(command, false, value);
    }
  } catch (error) {
    console.warn("DOC command failed", error);
  }
  const compactGeneratedSpacing = options.compactGeneratedSpacing
    || command === "insertUnorderedList"
    || command === "insertOrderedList"
    || command === "insertHTML";
  finishDocFormatting({ compactGeneratedSpacing });
}

function docIndentValue(element) {
  const raw = element?.style?.paddingLeft || "";
  const match = raw.match(/^(\d+(?:\.\d+)?)px$/);
  if (!match) return 0;
  const value = Number(match[1]);
  return Number.isFinite(value) ? value : 0;
}

function applyDocIndent(direction = 1) {
  const note = activeNote();
  if (!note || note.mode !== "doc") return;
  recordDocHistoryBeforeChange();
  restoreDocSelection();
  const blocks = selectedDocBlocks();
  if (!blocks.length) {
    elements.docInput?.focus();
    return;
  }
  blocks.forEach((block) => {
    const next = Math.max(0, Math.min(144, docIndentValue(block) + (direction > 0 ? 24 : -24)));
    if (next) block.style.paddingLeft = `${next}px`;
    else block.style.removeProperty("padding-left");
    if (!block.getAttribute("style")) block.removeAttribute("style");
  });
  finishDocFormatting();
}

function applyDocBlock(block, force = false) {
  const current = currentDocBlockTag();
  const next = force ? block : current === block ? "p" : block;
  applyDocCommand("formatBlock", `<${next}>`);
}

function applyDocFontFamily(fontFamily) {
  const safeFamily = normalizeDocFontFamily(fontFamily);
  if (!safeFamily) {
    clearDocFontFamily();
    return;
  }
  applyDocCommand("fontName", safeFamily);
}

function stripDocFontFamily(node) {
  if (node.nodeType !== Node.ELEMENT_NODE) return;
  node.style?.removeProperty("font-family");
  if (node.tagName?.toLowerCase() === "font") {
    const span = document.createElement("span");
    while (node.firstChild) span.appendChild(node.firstChild);
    node.replaceWith(span);
    stripDocFontFamily(span);
    return;
  }
  Array.from(node.childNodes).forEach(stripDocFontFamily);
  if (node.nodeType === Node.ELEMENT_NODE && node.getAttribute("style") === "") node.removeAttribute("style");
}

function clearDocFontFamily() {
  const note = activeNote();
  if (!note || note.mode !== "doc") return;
  recordDocHistoryBeforeChange();
  restoreDocSelection();
  const selection = window.getSelection?.();
  if (!selection || !selection.rangeCount || !elements.docInput) {
    elements.docInput?.focus();
    return;
  }
  const range = selection.getRangeAt(0);
  if (!elements.docInput.contains(range.commonAncestorContainer)) return;
  if (range.collapsed) {
    let node = activeDocElement();
    while (node && node !== elements.docInput) {
      const hasFont = node.style?.fontFamily || node.tagName?.toLowerCase() === "font";
      if (hasFont) {
        stripDocFontFamily(node);
        break;
      }
      node = node.parentNode;
    }
  } else {
    const fragment = range.extractContents();
    Array.from(fragment.childNodes).forEach(stripDocFontFamily);
    range.insertNode(fragment);
    selection.removeAllRanges();
    selection.addRange(range);
  }
  finishDocFormatting();
}

function applyDocFontSize(size) {
  const commandSize = DOC_FONT_SIZE_TO_COMMAND.get(String(size));
  if (!commandSize) {
    elements.docInput?.focus();
    return;
  }
  applyDocCommand("fontSize", commandSize);
}

function setDocColorControl(command, color) {
  const input = command === "foreColor" ? elements.docTextColorInput : elements.docHighlightInput;
  const swatch = command === "foreColor" ? elements.docTextColorSwatch : elements.docHighlightSwatch;
  if (input) input.value = color;
  if (swatch) swatch.style.background = color;
}

function applyDocColor(command, color) {
  if (!color) return;
  setDocColorControl(command, color);
  applyDocCommand(command, color);
}

function toggleDocColor(command, color) {
  if (!color) return;
  setDocColorControl(command, color);
  restoreDocSelection();
  if (docSelectionStyleMatches(command, color)) {
    clearDocColor(command);
    return;
  }
  applyDocCommand(command, color);
}

function applyCurrentDocColor(command) {
  const input = command === "foreColor" ? elements.docTextColorInput : elements.docHighlightInput;
  const fallback = command === "foreColor" ? DOC_DEFAULT_TEXT_COLOR : DOC_DEFAULT_HIGHLIGHT_COLOR;
  const color = input?.value || fallback;
  closeToolbarMenus();
  toggleDocColor(command, color);
}

function insertDocChecklist() {
  const note = activeNote();
  if (!note || note.mode !== "doc") return;
  recordDocHistoryBeforeChange();
  restoreDocSelection();
  const blocks = selectedDocBlocks();
  if (blocks.length) {
    const selectionSnapshot = getDocBlockSelectionSnapshot();
    const allTaskBlocks = blocks.every((block) => block.querySelector(".doc-task-box"));
    blocks.forEach((block) => {
      if (allTaskBlocks) {
        removeDocTaskBlock(block);
        return;
      }
      if (!block.querySelector(".doc-task-box")) {
        const box = createDocTaskBox(false);
        const label = document.createElement("span");
        label.className = "doc-task-label";
        const nodes = Array.from(block.childNodes);
        nodes.forEach((node) => label.appendChild(node));
        if (!label.textContent.replace(/\u00a0/g, "").replace(/\u200b/g, "").trim() && !label.querySelector("img")) {
          label.textContent = "待办";
        }
        block.replaceChildren(box, label);
      } else {
        normalizeDocTaskBlock(block);
      }
    });
    restoreDocBlockSelectionSnapshot(selectionSnapshot);
    finishDocFormatting({ compactGeneratedSpacing: true });
    return;
  }
  applyDocCommand("insertHTML", '<p><span class="doc-task-box" data-doc-task="unchecked" contenteditable="false">☐</span>待办</p>', {
    compactGeneratedSpacing: true,
    skipHistory: true
  });
}

function handleDocTaskBoxClick(event) {
  const box = event.target.closest("[data-doc-task]");
  if (!box || !elements.docInput?.contains(box)) return;
  event.preventDefault();
  event.stopPropagation();
  recordDocHistoryBeforeChange();
  const checked = box.getAttribute("data-doc-task") === "checked";
  box.setAttribute("data-doc-task", checked ? "unchecked" : "checked");
  box.textContent = checked ? "☐" : "☑";
  updateActiveFromInputs({ force: true });
  syncDocHistoryCurrent();
  updateDocToolbarState();
}

function clearDocColor(command) {
  const note = activeNote();
  if (!note || note.mode !== "doc") return;
  recordDocHistoryBeforeChange();
  restoreDocSelection();
  const selection = window.getSelection?.();
  const collapsed = Boolean(selection?.rangeCount && selection.getRangeAt(0).collapsed);
  const movedOutOfStyle = collapsed && moveCollapsedDocSelectionOutOfStyle(command);
  try {
    if (!movedOutOfStyle) {
      document.execCommand("styleWithCSS", false, true);
      if (command === "foreColor") {
        document.execCommand("foreColor", false, DOC_DEFAULT_TEXT_COLOR);
      } else {
        const ok = document.execCommand("hiliteColor", false, "transparent");
        if (!ok) document.execCommand("backColor", false, "transparent");
      }
    }
  } catch (error) {
    console.warn("DOC clear color failed", error);
  }
  if (movedOutOfStyle) {
    saveDocSelection();
    updateActiveFromInputs({ force: true });
    updateDocToolbarState();
    elements.docInput?.focus();
    return;
  }
  finishDocFormatting();
}

function applyDocLink() {
  const note = activeNote();
  if (!note || note.mode !== "doc") return;
  restoreDocSelection();
  const current = document.queryCommandValue?.("createLink") || "";
  const url = window.prompt(t("linkPrompt"), current && current !== "false" ? current : "https://");
  if (!url) {
    elements.docInput?.focus();
    return;
  }
  let nextUrl = url.trim();
  if (!/^(https?:|mailto:|tel:|#)/i.test(nextUrl)) nextUrl = `https://${nextUrl}`;
  applyDocCommand("createLink", nextUrl);
}

function openDocImagePicker() {
  const note = activeNote();
  if (!note || note.mode !== "doc") return;
  if (!getSyncToken()) {
    showToast(t("docImageTokenRequired"));
    return;
  }
  saveDocSelection();
  elements.docImageInput?.click();
}

function handleDocImagePaste(event) {
  const files = Array.from(event.clipboardData?.items || [])
    .filter((item) => item.kind === "file" && item.type.startsWith("image/"))
    .map((item) => item.getAsFile())
    .filter(Boolean);
  if (!files.length) return;
  event.preventDefault();
  saveDocSelection();
  uploadAndInsertDocImages(files);
}

function handleDocImageDragOver(event) {
  if (!hasDraggedDocImages(event.dataTransfer)) return;
  event.preventDefault();
  if (event.dataTransfer) event.dataTransfer.dropEffect = "copy";
  elements.docInput?.classList.add("dragging-image");
}

function handleDocImageDragLeave(event) {
  if (event.relatedTarget && elements.docInput?.contains(event.relatedTarget)) return;
  elements.docInput?.classList.remove("dragging-image");
}

function handleDocImageDrop(event) {
  const files = Array.from(event.dataTransfer?.files || []).filter((file) => file.type.startsWith("image/"));
  elements.docInput?.classList.remove("dragging-image");
  if (!files.length) return;
  event.preventDefault();
  setDocCaretFromPoint(event.clientX, event.clientY);
  saveDocSelection();
  uploadAndInsertDocImages(files);
}

function hasDraggedDocImages(dataTransfer) {
  if (!dataTransfer) return false;
  if (Array.from(dataTransfer.items || []).some((item) => item.kind === "file" && item.type.startsWith("image/"))) return true;
  return Array.from(dataTransfer.files || []).some((file) => file.type.startsWith("image/"));
}

function setDocCaretFromPoint(x, y) {
  if (!elements.docInput) return;
  let range = document.caretRangeFromPoint?.(x, y) || null;
  if (!range && document.caretPositionFromPoint) {
    const position = document.caretPositionFromPoint(x, y);
    if (position) {
      range = document.createRange();
      range.setStart(position.offsetNode, position.offset);
      range.collapse(true);
    }
  }
  if (!range || !elements.docInput.contains(range.startContainer)) return;
  const selection = window.getSelection?.();
  if (!selection) return;
  selection.removeAllRanges();
  selection.addRange(range);
}

async function uploadAndInsertDocImages(files) {
  const note = activeNote();
  if (!note || note.mode !== "doc" || !files.length) return;
  if (!getSyncToken()) {
    showToast(t("docImageTokenRequired"));
    return;
  }

  const images = files.filter((file) => DOC_IMAGE_TYPES.has(String(file.type || "").toLowerCase()));
  if (!images.length) {
    showToast(t("docImageTypeUnsupported"));
    return;
  }
  if (images.length !== files.length) showToast(t("docImageTypeUnsupported"));

  const noteId = note.id;
  const currentCount = elements.docInput?.querySelectorAll("img").length || 0;
  if (currentCount >= DOC_IMAGE_MAX_PER_NOTE) {
    showToast(t("docImageCountLimit").replace("{count}", String(DOC_IMAGE_MAX_PER_NOTE)));
    return;
  }

  setDocImageUploading(true);
  let inserted = 0;
  try {
    for (const file of images.slice(0, Math.max(0, DOC_IMAGE_MAX_PER_NOTE - currentCount))) {
      if (file.size > DOC_IMAGE_MAX_BYTES) {
        showToast(t("docImageTooLarge").replace("{size}", formatBytes(DOC_IMAGE_MAX_BYTES)));
        continue;
      }
      try {
        const result = await fetchTransferJson("./api/assets", {
          method: "POST",
          body: file,
          headers: {
            "content-type": file.type,
            "x-file-name": encodeURIComponent(file.name || "image"),
            "x-file-size": String(file.size || 0),
            "x-note-id": noteId
          }
        });
        if (!result.asset?.src) throw new Error("Missing image URL");
        if (activeNote()?.id === noteId && activeNote()?.mode === "doc") {
          insertDocImageAsset(result.asset);
        } else {
          appendDocImageToNote(noteId, result.asset);
        }
        inserted += 1;
      } catch (error) {
        showToast(docImageErrorText(error));
      }
    }
  } finally {
    setDocImageUploading(false);
  }
  if (inserted) showToast(t("docImageUploaded"));
}

function setDocImageUploading(uploading) {
  state.docImageUploading = Boolean(uploading);
  if (elements.docImageUploadText) elements.docImageUploadText.textContent = t("docImageUploading");
  if (elements.docImageUploadIndicator) elements.docImageUploadIndicator.hidden = !uploading;
  const button = elements.toolbar?.querySelector('[data-doc-action="image"]');
  if (button) button.disabled = uploading;
}

function insertDocImageAsset(asset) {
  const src = safeDocImageSrc(asset.src);
  if (!src || !elements.docInput) throw new Error("Invalid image URL");
  restoreDocSelection();
  const selection = window.getSelection?.();
  if (!selection?.rangeCount) return;
  const range = selection.getRangeAt(0);
  if (!elements.docInput.contains(range.commonAncestorContainer)) return;

  range.deleteContents();
  const image = createDocImageElement(asset, src);
  range.insertNode(image);
  range.setStartAfter(image);
  range.collapse(true);
  selection.removeAllRanges();
  selection.addRange(range);
  state.docSelection = range.cloneRange();
  image.addEventListener("load", () => positionDocImageSelection(), { once: true });
  elements.docInput.dispatchEvent(new Event("input", { bubbles: true }));
  selectDocImage(image);
}

function appendDocImageToNote(noteId, asset) {
  const note = state.notes.find((item) => item.id === noteId && item.mode === "doc" && !isDeletedNote(item));
  const src = safeDocImageSrc(asset.src);
  if (!note || !src) return;
  const image = createDocImageElement(asset, src);
  note.body = sanitizeDocHtml(`${note.body || "<p></p>"}<p>${image.outerHTML}</p>`);
  note.updatedAt = Date.now();
  markNoteDirty(note.id);
  saveNotes();
  renderLists();
  renderSyncMeta();
}

function createDocImageElement(asset, src) {
  const image = document.createElement("img");
  image.setAttribute("src", src);
  image.setAttribute("alt", String(asset.name || "图片").slice(0, 160));
  if (asset.id) image.setAttribute("data-doc-image-id", String(asset.id).slice(0, 80));
  if (asset.name) image.setAttribute("data-doc-image-name", String(asset.name).slice(0, 160));
  image.setAttribute("draggable", "false");
  return image;
}

function docImageErrorText(error) {
  const raw = String(error?.message || error || "");
  let text = raw;
  let payload = null;
  try {
    payload = JSON.parse(raw);
    text = payload.error || raw;
  } catch {}
  if (text.includes("Missing R2") || text.includes("NANSTAR_NOTE_FILES")) return t("transferMissingBinding");
  if (text.includes("Unauthorized")) return t("transferBadToken");
  if (text.includes("Unsupported image type")) return t("docImageTypeUnsupported");
  if (text.includes("Image is too large")) {
    const limit = Number(payload?.maxImageBytes) || DOC_IMAGE_MAX_BYTES;
    return t("docImageTooLarge").replace("{size}", formatBytes(limit));
  }
  if (text.includes("Too many note images")) {
    const limit = Number(payload?.maxImagesPerNote) || DOC_IMAGE_MAX_PER_NOTE;
    return t("docImageCountLimit").replace("{count}", String(limit));
  }
  if (text.includes("Total image size")) {
    const limit = Number(payload?.maxTotalBytes) || DOC_IMAGE_MAX_TOTAL_BYTES;
    return t("docImageTotalLimit").replace("{size}", formatBytes(limit));
  }
  if (text.includes("Failed to fetch") || text.includes("Not found")) return t("transferApiUnavailable");
  return `${t("docImageUploadFailed")}：${text.slice(0, 120)}`;
}

function handleDocImageClick(event) {
  const image = event.target.closest?.("img");
  if (image && elements.docInput?.contains(image)) {
    selectDocImage(image);
    return;
  }
  clearDocImageSelection();
}

function handleDocImageKeydown(event) {
  if (!state.docSelectedImage) return;
  if (event.key === "Escape") {
    event.preventDefault();
    clearDocImageSelection();
    return;
  }
  if (event.key === "Backspace" || event.key === "Delete") {
    event.preventDefault();
    removeSelectedDocImage();
  }
}

function selectDocImage(image) {
  if (!image?.isConnected || !elements.docInput?.contains(image)) return;
  state.docSelectedImage = image;
  positionDocImageSelection();
}

function clearDocImageSelection() {
  state.docSelectedImage = null;
  state.docImageResize = null;
  if (elements.docImageSelectionFrame) elements.docImageSelectionFrame.hidden = true;
  if (elements.docImageControls) elements.docImageControls.hidden = true;
  if (elements.docImageResizeHandle) elements.docImageResizeHandle.hidden = true;
}

function positionDocImageSelection() {
  const image = state.docSelectedImage;
  const shell = elements.textShell;
  const editor = elements.docInput;
  if (!image?.isConnected || !shell || !editor || activeNote()?.mode !== "doc") {
    clearDocImageSelection();
    return;
  }

  const imageRect = image.getBoundingClientRect();
  const shellRect = shell.getBoundingClientRect();
  const editorRect = editor.getBoundingClientRect();
  const visible = imageRect.bottom > editorRect.top && imageRect.top < editorRect.bottom && imageRect.width > 0 && imageRect.height > 0;
  if (!visible) {
    if (elements.docImageSelectionFrame) elements.docImageSelectionFrame.hidden = true;
    if (elements.docImageControls) elements.docImageControls.hidden = true;
    if (elements.docImageResizeHandle) elements.docImageResizeHandle.hidden = true;
    return;
  }

  const left = imageRect.left - shellRect.left;
  const top = imageRect.top - shellRect.top;
  const frame = elements.docImageSelectionFrame;
  if (frame) {
    frame.hidden = false;
    frame.style.left = `${left}px`;
    frame.style.top = `${top}px`;
    frame.style.width = `${imageRect.width}px`;
    frame.style.height = `${imageRect.height}px`;
  }

  const controls = elements.docImageControls;
  if (controls) {
    controls.hidden = false;
    const controlWidth = Math.min(controls.scrollWidth || controls.offsetWidth, shellRect.width - 16);
    const controlHeight = controls.offsetHeight || 34;
    const controlLeft = Math.max(8, Math.min(left, shellRect.width - controlWidth - 8));
    const above = top - controlHeight - 8;
    const controlTop = above >= 8 ? above : Math.min(shellRect.height - controlHeight - 8, top + imageRect.height + 8);
    controls.style.left = `${controlLeft}px`;
    controls.style.top = `${Math.max(8, controlTop)}px`;
    updateDocImageSizeButtons(image);
  }

  const handle = elements.docImageResizeHandle;
  if (handle) {
    handle.hidden = false;
    handle.style.left = `${Math.max(0, Math.min(shellRect.width - 18, left + imageRect.width - 9))}px`;
    handle.style.top = `${Math.max(0, Math.min(shellRect.height - 18, top + imageRect.height - 9))}px`;
    handle.setAttribute("aria-valuenow", String(docImageDisplayPercent(image)));
  }
}

function updateDocImageSizeButtons(image) {
  const width = safeDocImageWidth(image.style.width);
  elements.docImageControls?.querySelectorAll("[data-doc-image-size]").forEach((button) => {
    const value = button.dataset.docImageSize;
    button.classList.toggle("active", value === "auto" ? !width : width === `${value}%`);
  });
}

function handleDocImageControlClick(event) {
  const button = event.target.closest("button");
  if (!button || !state.docSelectedImage) return;
  if (button.dataset.docImageAction === "remove") {
    removeSelectedDocImage();
    return;
  }
  if (button.dataset.docImageSize) setSelectedDocImageSize(button.dataset.docImageSize);
}

function setSelectedDocImageSize(value) {
  const image = state.docSelectedImage;
  if (!image?.isConnected) return;
  if (value === "auto") {
    image.style.removeProperty("width");
  } else {
    const percent = Math.max(10, Math.min(100, Number(value) || 100));
    image.style.width = `${percent}%`;
  }
  commitDocImageChange();
}

function removeSelectedDocImage() {
  const image = state.docSelectedImage;
  if (!image?.isConnected || !elements.docInput) return;
  const parent = image.parentNode;
  const index = parent ? Array.prototype.indexOf.call(parent.childNodes, image) : 0;
  image.remove();
  clearDocImageSelection();
  if (!elements.docInput.innerHTML.trim()) elements.docInput.innerHTML = "<p><br></p>";
  if (parent?.isConnected) {
    const range = document.createRange();
    range.setStart(parent, Math.min(index, parent.childNodes.length));
    range.collapse(true);
    const selection = window.getSelection?.();
    selection?.removeAllRanges();
    selection?.addRange(range);
    state.docSelection = range.cloneRange();
  }
  elements.docInput.dispatchEvent(new Event("input", { bubbles: true }));
  elements.docInput.focus();
}

function startDocImageResize(event) {
  const image = state.docSelectedImage;
  if (!image?.isConnected || event.button !== 0) return;
  event.preventDefault();
  const style = getComputedStyle(elements.docInput);
  const contentWidth = Math.max(1, elements.docInput.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight));
  state.docImageResize = {
    image,
    pointerId: event.pointerId,
    startX: event.clientX,
    startWidth: image.getBoundingClientRect().width,
    contentWidth
  };
  elements.docImageResizeHandle?.setPointerCapture?.(event.pointerId);
}

function continueDocImageResize(event) {
  const resize = state.docImageResize;
  if (!resize || resize.pointerId !== event.pointerId || !resize.image?.isConnected) return;
  event.preventDefault();
  const width = Math.max(10, Math.min(100, ((resize.startWidth + event.clientX - resize.startX) / resize.contentWidth) * 100));
  resize.image.style.width = `${Math.round(width)}%`;
  positionDocImageSelection();
}

function finishDocImageResize(event) {
  const resize = state.docImageResize;
  if (!resize || (event.pointerId != null && resize.pointerId !== event.pointerId)) return;
  try {
    elements.docImageResizeHandle?.releasePointerCapture?.(resize.pointerId);
  } catch {}
  state.docImageResize = null;
  commitDocImageChange();
}

function handleDocImageResizeKeydown(event) {
  if (!state.docSelectedImage || !["ArrowLeft", "ArrowRight", "ArrowDown", "ArrowUp"].includes(event.key)) return;
  event.preventDefault();
  const current = docImageDisplayPercent(state.docSelectedImage);
  const delta = event.key === "ArrowLeft" || event.key === "ArrowDown" ? -5 : 5;
  setSelectedDocImageSize(String(Math.max(10, Math.min(100, current + delta))));
}

function docImageDisplayPercent(image) {
  const width = safeDocImageWidth(image?.style?.width);
  if (width) return Math.round(parseFloat(width));
  const style = getComputedStyle(elements.docInput);
  const contentWidth = Math.max(1, elements.docInput.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight));
  return Math.max(10, Math.min(100, Math.round((image.getBoundingClientRect().width / contentWidth) * 100)));
}

function commitDocImageChange() {
  if (!state.docSelectedImage?.isConnected || !elements.docInput) return;
  elements.docInput.dispatchEvent(new Event("input", { bubbles: true }));
  window.requestAnimationFrame(positionDocImageSelection);
}

function queryDocCommandState(command) {
  try {
    return Boolean(document.queryCommandState?.(command));
  } catch {
    return false;
  }
}

function queryDocCommandValue(command) {
  try {
    return String(document.queryCommandValue?.(command) || "");
  } catch {
    return "";
  }
}

function normalizeDocFontFamily(value) {
  const raw = (String(value || "").split(",")[0] || "").trim().replace(/^['"]|['"]$/g, "");
  return DOC_FONT_FAMILY_ALIASES.get(raw.toLowerCase()) || "";
}

function normalizeDocFontSizeValue(value) {
  const raw = String(value || "").trim().toLowerCase();
  if (DOC_COMMAND_TO_FONT_SIZE.has(raw)) return DOC_COMMAND_TO_FONT_SIZE.get(raw);
  const pxMatch = raw.match(/^(\d+(?:\.\d+)?)px$/);
  if (!pxMatch) return "";
  const size = Number(pxMatch[1]);
  if (!Number.isFinite(size)) return "";
  const available = Array.from(DOC_FONT_SIZE_TO_COMMAND.keys()).map(Number);
  const nearest = available.reduce((best, candidate) => (
    Math.abs(candidate - size) < Math.abs(best - size) ? candidate : best
  ), 14);
  return String(nearest);
}

function currentDocFontFamilyValue() {
  const selection = window.getSelection?.();
  if (selection?.rangeCount && elements.docInput?.contains(selection.getRangeAt(0).commonAncestorContainer)) {
    const range = selection.getRangeAt(0);
    if (!range.collapsed) {
      const families = new Set(selectedDocTextNodes(range).map(docFontFamilyForNode).filter(Boolean));
      if (families.size === 1) return Array.from(families)[0];
      if (families.size > 1) return "";
    }
  }
  return docFontFamilyForNode(activeDocElement());
}

function docFontFamilyForNode(node) {
  let current = node?.nodeType === Node.ELEMENT_NODE ? node : node?.parentElement;
  while (current && current !== elements.docInput) {
    const raw = current.style?.fontFamily || (current.tagName?.toLowerCase() === "font" ? current.getAttribute("face") : "");
    const family = normalizeDocFontFamily(raw);
    if (family) return family;
    current = current.parentNode;
  }
  return "";
}

function currentDocFontSizeValue() {
  let node = activeDocElement();
  while (node && node !== elements.docInput) {
    const raw = node.style?.fontSize || (node.tagName?.toLowerCase() === "font" ? node.getAttribute("size") : "");
    const size = normalizeDocFontSizeValue(raw);
    if (size && DOC_FONT_SIZE_TO_COMMAND.has(size)) return size;
    node = node.parentNode;
  }
  return normalizeDocFontSizeValue(queryDocCommandValue("fontSize"));
}

function normalizeDocBlockForSelect(tag) {
  if (tag === "li") {
    const active = activeDocElement();
    const parentList = active?.closest?.("ul,ol");
    return parentList ? "p" : "p";
  }
  return ["p", "h1", "h2", "h3", "blockquote"].includes(tag) ? tag : "p";
}

function updateDocToolbarState() {
  if (!elements.toolbar || activeNote()?.mode !== "doc") return;
  const block = normalizeDocBlockForSelect(currentDocBlockTag());
  if (elements.docBlockSelect && elements.docBlockSelect.value !== block) elements.docBlockSelect.value = block;
  if (elements.docFontSelect) {
    const family = currentDocFontFamilyValue();
    if (elements.docFontSelect.value !== family) elements.docFontSelect.value = family;
  }
  if (elements.docFontSizeSelect) {
    const size = currentDocFontSizeValue() || "14";
    if (elements.docFontSizeSelect.value !== size) elements.docFontSizeSelect.value = size;
  }
  elements.toolbar.querySelectorAll("[data-doc-command]").forEach((button) => {
    const command = button.dataset.docCommand;
    const stateCommands = new Set([
      "bold",
      "italic",
      "underline",
      "strikeThrough",
      "insertUnorderedList",
      "insertOrderedList",
      "justifyLeft",
      "justifyCenter",
      "justifyRight"
    ]);
    button.classList.toggle("active", stateCommands.has(command) && queryDocCommandState(command));
  });
  const taskButton = elements.toolbar.querySelector('[data-doc-action="checklist"]');
  if (taskButton) {
    const taskBlocks = selectedDocBlocks();
    const taskActive = Boolean(taskBlocks.length) && taskBlocks.every((block) => block.querySelector(".doc-task-box"));
    taskButton.classList.toggle("active", taskActive);
  }
  if (elements.docTextColorSwatch) {
    const color = elements.docTextColorInput?.value || DOC_DEFAULT_TEXT_COLOR;
    elements.docTextColorSwatch.style.background = color;
  }
  if (elements.docHighlightSwatch) {
    const color = elements.docHighlightInput?.value || DOC_DEFAULT_HIGHLIGHT_COLOR;
    elements.docHighlightSwatch.style.background = color;
  }
}

function renderExportFormatButtons() {
  if (!elements.exportCurrentFormats) return;
  const note = activeNote();
  const allowed = new Set(note?.mode === "doc"
    ? ["default", "txt", "html", "pdf"]
    : note?.mode === "md"
      ? ["default", "txt", "md", "pdf"]
      : ["default", "txt"]);
  elements.exportCurrentFormats.querySelectorAll("[data-export-format]").forEach((button) => {
    const format = button.dataset.exportFormat || "default";
    button.hidden = !allowed.has(format);
    button.disabled = !note || isTransferAssistant(note);
    if (format === "default") button.textContent = t("exportDefault");
  });
}

function runNativeHistoryCommand(command) {
  const note = activeNote();
  if (note?.mode === "doc") {
    if (!runDocHistoryCommand(command)) applyDocCommand(command, null, { skipHistory: true });
    return;
  }
  elements.bodyInput.focus();
  try {
    document.execCommand(command, false, null);
  } catch {
    // Native Ctrl+Z/Ctrl+Y still works from the keyboard; toolbar fallback is best-effort.
  }
  window.setTimeout(updateActiveFromInputs, 0);
}

function insertSnippet(type) {
  const snippets = {
    path: "路径：\nC:\\\\path\\\\to\\\\file\n",
    command: "```bash\n\n```\n",
    checklist: "- [ ] 待处理\n- [ ] 已确认\n"
  };
  const text = snippets[type] || "";
  if (!text) return;
  const textarea = elements.bodyInput;
  const needsPrefix = textarea.selectionStart > 0 && !textarea.value.slice(0, textarea.selectionStart).endsWith("\n");
  const prefix = needsPrefix ? "\n\n" : "";
  replaceRange(textarea.selectionStart, textarea.selectionEnd, `${prefix}${text}`);
  textarea.focus();
}

function insertTable() {
  const textarea = elements.bodyInput;
  const table = "| 项目 | 内容 |\n| --- | --- |\n|  |  |\n";
  const needsPrefix = textarea.selectionStart > 0 && !textarea.value.slice(0, textarea.selectionStart).endsWith("\n");
  replaceRange(textarea.selectionStart, textarea.selectionEnd, `${needsPrefix ? "\n\n" : ""}${table}`);
  textarea.focus();
}

function applyToolbarAction(button) {
  if (button.dataset.command) {
    runNativeHistoryCommand(button.dataset.command);
    return;
  }

  if (button.dataset.docColorClear) {
    clearDocColor(button.dataset.docColorClear);
    return;
  }

  if (button.dataset.docColorApply) {
    applyCurrentDocColor(button.dataset.docColorApply);
    return;
  }

  if (button.dataset.docColor) {
    const command = button.closest("[data-doc-color-menu]")?.dataset.docColorMenu || "foreColor";
    toggleDocColor(command, button.dataset.docColor);
    return;
  }

  if (button.dataset.docAction === "image") {
    openDocImagePicker();
    return;
  }

  if (button.dataset.docAction === "link") {
    applyDocLink();
    return;
  }

  if (button.dataset.docAction === "checklist") {
    insertDocChecklist();
    return;
  }

  if (button.dataset.docCommand) {
    applyDocCommand(button.dataset.docCommand);
    return;
  }

  if (button.dataset.docBlock) {
    applyDocBlock(button.dataset.docBlock);
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
    showToast(`MD 最多保存 ${MAX_TRANSFER_IMAGES} 张图片`);
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
  const metrics = getEditorMetrics();
  const layout = getEditorLineLayout(metrics);
  elements.lineNumbersTrack.innerHTML = Array.from({ length: total }, (_, index) => {
    const lineNumber = index + 1;
    const classes = ["line-number"];
    if (lineNumber === state.currentLine) classes.push("current");
    if (states[index]?.searchHit) classes.push("search-hit");
    const height = Math.max(metrics.lineHeight, layout.heights[index] || metrics.lineHeight);
    return `<div class="${classes.join(" ")}" data-line="${lineNumber}" style="height:${height.toFixed(2)}px">${lineNumber}</div>`;
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
  refreshEditorLineLayoutSoon();
}

function jumpToLine(lineIndex, targetId) {
  const textarea = elements.bodyInput;
  const lines = textarea.value.replace(/\r\n/g, "\n").split("\n");
  const start = lines.slice(0, lineIndex).join("\n").length + (lineIndex > 0 ? 1 : 0);
  textarea.focus();
  textarea.setSelectionRange(start, start);
  const metrics = getEditorMetrics();
  textarea.scrollTop = Math.max(0, metrics.paddingTop + getEditorLineTopOffset(lineIndex + 1, metrics) - textarea.clientHeight / 3);
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
  const paddingLeft = parseFloat(style.paddingLeft) || 0;
  const paddingRight = parseFloat(style.paddingRight) || 0;
  return { lineHeight, paddingTop, paddingBottom, paddingLeft, paddingRight };
}

function refreshEditorLineLayoutSoon() {
  editorLineLayoutCache = null;
  if (editorLineLayoutFrame) return;
  editorLineLayoutFrame = window.requestAnimationFrame(() => {
    editorLineLayoutFrame = 0;
    if (!elements.bodyInput || !elements.lineNumbersTrack) return;
    updateLineNumbers();
    syncScrollState();
  });
}

function getEditorLineMeasureNode() {
  if (editorLineMeasureNode?.isConnected) return editorLineMeasureNode;
  const node = document.createElement("div");
  Object.assign(node.style, {
    position: "fixed",
    left: "-10000px",
    top: "0",
    visibility: "hidden",
    pointerEvents: "none",
    zIndex: "-1",
    boxSizing: "border-box",
    margin: "0",
    padding: "0",
    border: "0",
    whiteSpace: "pre-wrap",
    overflowWrap: "anywhere",
    wordBreak: "break-word",
    contain: "layout style"
  });
  document.body.appendChild(node);
  editorLineMeasureNode = node;
  return node;
}

function getEditorLineLayout(metrics = getEditorMetrics()) {
  const textarea = elements.bodyInput;
  const style = getComputedStyle(textarea);
  const value = textarea.value.replace(/\r\n/g, "\n");
  const width = Math.max(1, Math.floor(textarea.clientWidth - metrics.paddingLeft - metrics.paddingRight));
  const fontKey = [
    style.fontFamily,
    style.fontSize,
    style.fontWeight,
    style.fontStyle,
    style.letterSpacing,
    style.tabSize,
    metrics.lineHeight
  ].join("|");

  if (
    editorLineLayoutCache
    && editorLineLayoutCache.value === value
    && editorLineLayoutCache.width === width
    && editorLineLayoutCache.fontKey === fontKey
  ) {
    return editorLineLayoutCache.layout;
  }

  const measureNode = getEditorLineMeasureNode();
  Object.assign(measureNode.style, {
    width: `${width}px`,
    fontFamily: style.fontFamily,
    fontSize: style.fontSize,
    fontWeight: style.fontWeight,
    fontStyle: style.fontStyle,
    letterSpacing: style.letterSpacing,
    lineHeight: `${metrics.lineHeight}px`,
    tabSize: style.tabSize || "4"
  });

  const fragment = document.createDocumentFragment();
  const lines = value.split("\n");
  lines.forEach((line) => {
    const row = document.createElement("div");
    row.style.minHeight = `${metrics.lineHeight}px`;
    row.style.whiteSpace = "pre-wrap";
    row.style.overflowWrap = "anywhere";
    row.style.wordBreak = "break-word";
    row.textContent = line || "\u00a0";
    fragment.appendChild(row);
  });
  measureNode.replaceChildren(fragment);

  let top = 0;
  const tops = [];
  const heights = Array.from(measureNode.children).map((row) => {
    const height = Math.max(metrics.lineHeight, row.getBoundingClientRect().height || metrics.lineHeight);
    tops.push(top);
    top += height;
    return height;
  });
  const layout = { heights, tops, totalHeight: top };
  editorLineLayoutCache = { value, width, fontKey, layout };
  return layout;
}

function getEditorLineTopOffset(lineNumber, metrics = getEditorMetrics()) {
  const index = Math.max(0, Number(lineNumber) - 1);
  const layout = getEditorLineLayout(metrics);
  return layout.tops[index] ?? index * metrics.lineHeight;
}

function getEditorLineVisualHeight(lineNumber, metrics = getEditorMetrics()) {
  const index = Math.max(0, Number(lineNumber) - 1);
  const layout = getEditorLineLayout(metrics);
  return Math.max(metrics.lineHeight, layout.heights[index] || metrics.lineHeight);
}

function renderCurrentLineDecoration() {
  const metrics = getEditorMetrics();
  const offset = Math.max(0, metrics.paddingTop + getEditorLineTopOffset(state.currentLine, metrics) - elements.bodyInput.scrollTop);
  elements.editorLineHighlight.style.transform = `translateY(${offset}px)`;
  elements.editorLineHighlight.style.height = `${getEditorLineVisualHeight(state.currentLine, metrics)}px`;
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

function currentExportData(note, format = "default") {
  const requested = format === "default"
    ? (note.mode === "md" ? "md" : note.mode === "doc" ? "html" : "txt")
    : format;

  if (requested === "pdf" && (note.mode === "md" || note.mode === "doc")) {
    return { kind: "pdf" };
  }

  if (note.mode === "doc") {
    if (requested === "txt") {
      return { extension: "txt", type: "text/plain", content: docHtmlToText(note.body) };
    }
    return { extension: "html", type: "text/html", content: formatDocHtmlExport(note) };
  }

  if (note.mode === "md") {
    if (requested === "txt") {
      return { extension: "txt", type: "text/plain", content: note.body };
    }
    return { extension: "md", type: "text/markdown", content: formatMarkdownExport(note) };
  }

  return { extension: "txt", type: "text/plain", content: note.body };
}

function sanitizeDocHtml(html) {
  const source = String(html || "").trim();
  if (!source) return "<p></p>";
  if (typeof document === "undefined") return source.replace(/<script[\s\S]*?<\/script>/gi, "");

  const allowedTags = new Set(["p", "br", "strong", "em", "u", "s", "span", "mark", "h1", "h2", "h3", "ul", "ol", "li", "blockquote", "a", "img"]);
  const blockAliases = new Map([
    ["div", "p"],
    ["section", "p"],
    ["article", "p"],
    ["b", "strong"],
    ["i", "em"],
    ["font", "span"],
    ["strike", "s"],
    ["del", "s"]
  ]);
  const template = document.createElement("template");
  template.innerHTML = source;

  const cleanNode = (node) => {
    if (node.nodeType === Node.TEXT_NODE) return document.createTextNode((node.textContent || "").replace(/\u200b/g, ""));
    if (node.nodeType !== Node.ELEMENT_NODE) return document.createDocumentFragment();

    const rawTag = node.tagName.toLowerCase();
    if (["script", "style", "iframe", "object", "embed", "meta", "link"].includes(rawTag)) {
      return document.createDocumentFragment();
    }

    const tag = blockAliases.get(rawTag) || rawTag;
    if (!allowedTags.has(tag)) {
      const fragment = document.createDocumentFragment();
      node.childNodes.forEach((child) => fragment.appendChild(cleanNode(child)));
      return fragment;
    }

    const element = document.createElement(tag);
    if (tag === "img") {
      const src = safeDocImageSrc(node.getAttribute("src"));
      if (!src) return document.createDocumentFragment();
      element.setAttribute("src", src);
      element.setAttribute("alt", String(node.getAttribute("alt") || node.getAttribute("data-doc-image-name") || "图片").slice(0, 160));
      const imageId = String(node.getAttribute("data-doc-image-id") || "").trim();
      const imageName = String(node.getAttribute("data-doc-image-name") || "").trim();
      if (/^[0-9a-f-]{36}$/i.test(imageId)) element.setAttribute("data-doc-image-id", imageId);
      if (imageName) element.setAttribute("data-doc-image-name", imageName.slice(0, 160));
      const width = safeDocImageWidth(node.style?.width || node.getAttribute("width"));
      if (width) element.setAttribute("style", `width:${width}`);
      element.setAttribute("draggable", "false");
      return element;
    }
    if (tag === "a") {
      const href = node.getAttribute("href") || "";
      if (/^(https?:|mailto:|tel:|#)/i.test(href)) {
        element.setAttribute("href", href);
        element.setAttribute("target", "_blank");
        element.setAttribute("rel", "noreferrer");
      }
    }
    if (tag === "span") {
      const taskState = safeDocTaskState(node.getAttribute("data-doc-task"));
      if (taskState) {
        element.className = "doc-task-box";
        element.setAttribute("data-doc-task", taskState);
        element.setAttribute("contenteditable", "false");
        element.textContent = taskState === "checked" ? "☑" : "☐";
        return element;
      }
      if (node.classList.contains("doc-task-label")) {
        element.className = "doc-task-label";
      }
    }

    const styles = [];
    const color = safeDocColor(node.style?.color || (rawTag === "font" ? node.getAttribute("color") : ""), "text");
    const background = safeDocColor(node.style?.backgroundColor, "background");
    const fontFamily = safeDocFontFamily(node.style?.fontFamily || (rawTag === "font" ? node.getAttribute("face") : ""));
    const fontSize = safeDocFontSize(node.style?.fontSize || (rawTag === "font" ? node.getAttribute("size") : ""));
    const textAlign = safeDocTextAlign(node.style?.textAlign || node.getAttribute("align"));
    const textDecoration = safeDocTextDecoration(node.style?.textDecoration || node.style?.textDecorationLine);
    const paddingLeft = safeDocIndent(node.style?.paddingLeft);
    if (color) styles.push(`color:${color}`);
    if (background) styles.push(`background-color:${background}`);
    if (fontFamily) styles.push(`font-family:${fontFamily}`);
    if (fontSize) styles.push(`font-size:${fontSize}`);
    if (textAlign) styles.push(`text-align:${textAlign}`);
    if (textDecoration) styles.push(`text-decoration:${textDecoration}`);
    if (paddingLeft) styles.push(`padding-left:${paddingLeft}`);
    if (styles.length) element.setAttribute("style", styles.join(";"));

    const childFragment = document.createDocumentFragment();
    node.childNodes.forEach((child) => childFragment.appendChild(cleanNode(child)));
    if (tag === "span" && !styles.length && !node.classList.contains("doc-task-label")) return childFragment;
    element.appendChild(childFragment);
    return element;
  };

  const fragment = document.createDocumentFragment();
  template.content.childNodes.forEach((node) => fragment.appendChild(cleanNode(node)));
  const output = document.createElement("div");
  output.appendChild(fragment);
  normalizeDocTaskLineMarkup(output);
  const result = output.innerHTML.trim();
  return result || "<p></p>";
}

function normalizeDocTaskLineMarkup(container) {
  container.querySelectorAll?.("p,li").forEach((paragraph) => {
    normalizeDocTaskBlock(paragraph);
  });
}

function compactDocGeneratedSpacing(html) {
  if (typeof document === "undefined") return html;
  const wrapper = document.createElement("div");
  wrapper.innerHTML = String(html || "");
  normalizeDocTaskLineMarkup(wrapper);
  const isEmptyParagraph = (element) => {
    if (!element || element.tagName !== "P") return false;
    if (element.querySelector("img, .doc-task-box")) return false;
    const text = (element.textContent || "").replace(/\u00a0/g, "").replace(/\u200b/g, "").trim();
    return !text;
  };
  const isListOrTaskBlock = (element) => {
    if (!element) return false;
    if (element.tagName === "UL" || element.tagName === "OL") return true;
    return element.tagName === "P" && Boolean(element.querySelector(".doc-task-box"));
  };
  Array.from(wrapper.children).forEach((element) => {
    if (!isEmptyParagraph(element)) return;
    if (isListOrTaskBlock(element.previousElementSibling) || isListOrTaskBlock(element.nextElementSibling)) {
      element.remove();
    }
  });
  return wrapper.innerHTML.trim() || "<p></p>";
}

function safeDocImageSrc(value) {
  const raw = String(value || "").trim();
  if (!raw || typeof document === "undefined") return "";
  try {
    const url = new URL(raw, document.baseURI);
    const localHttp = url.protocol === "http:" && ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname);
    if (url.protocol !== "https:" && !localHttp) return "";
    const allowedOrigins = new Set([new URL(CLOUD_API_ORIGIN).origin]);
    if (/^https?:$/i.test(window.location.protocol)) allowedOrigins.add(window.location.origin);
    if (!allowedOrigins.has(url.origin) && !localHttp) return "";
    if (!/^\/api\/assets\/?$/i.test(url.pathname)) return "";
    if (!/^[0-9a-f-]{36}$/i.test(url.searchParams.get("id") || "")) return "";
    url.hash = "";
    return url.href;
  } catch {
    return "";
  }
}

function safeDocImageWidth(value) {
  const match = String(value || "").trim().match(/^(\d+(?:\.\d+)?)%$/);
  if (!match) return "";
  const percent = Number(match[1]);
  if (!Number.isFinite(percent) || percent < 10 || percent > 100) return "";
  return `${Math.round(percent)}%`;
}

function safeDocColor(value, kind = "any") {
  const color = String(value || "").trim();
  if (!color || color.length > 48) return "";
  if (/url|expression|javascript/i.test(color)) return "";
  if (kind === "background" && /^(transparent|rgba?\(\s*0\s*,\s*0\s*,\s*0\s*,\s*0\s*\))$/i.test(color)) return "";
  if (kind === "text" && /^(#111827|rgb\(\s*17\s*,\s*24\s*,\s*39\s*\))$/i.test(color)) return "";
  return color;
}

function safeDocFontFamily(value) {
  const firstFamily = String(value || "").split(",")[0] || "";
  const family = normalizeDocFontFamily(firstFamily);
  if (!family) return "";
  return /[\s\u0080-\uFFFF]/.test(family) ? `"${family}"` : family;
}

function safeDocFontSize(value) {
  const size = normalizeDocFontSizeValue(value);
  return DOC_FONT_SIZE_TO_COMMAND.has(size) ? `${size}px` : "";
}

function safeDocTextAlign(value) {
  const align = String(value || "").trim().toLowerCase();
  if (!["center", "right", "justify"].includes(align)) return "";
  return align;
}

function safeDocTextDecoration(value) {
  return /line-through/i.test(String(value || "")) ? "line-through" : "";
}

function safeDocIndent(value) {
  const match = String(value || "").trim().match(/^(\d+(?:\.\d+)?)px$/);
  if (!match) return "";
  const pixels = Number(match[1]);
  if (!Number.isFinite(pixels) || pixels <= 0 || pixels > 144) return "";
  return `${Math.round(pixels)}px`;
}

function safeDocTaskState(value) {
  const stateValue = String(value || "").trim().toLowerCase();
  return stateValue === "checked" || stateValue === "unchecked" ? stateValue : "";
}

function docHtmlToText(html) {
  const sanitized = sanitizeDocHtml(html);
  if (typeof document === "undefined") {
    return sanitized
      .replace(/<img\b[^>]*>/gi, "[图片]")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/(p|h[1-3]|li|blockquote)>/gi, "\n")
      .replace(/<[^>]+>/g, "")
      .replace(/\n{3,}/g, "\n\n")
      .trim();
  }

  const wrapper = document.createElement("div");
  wrapper.innerHTML = sanitized;
  const blockTags = new Set(["P", "H1", "H2", "H3", "LI", "BLOCKQUOTE"]);
  const containerTags = new Set(["UL", "OL"]);

  const inlineText = (node) => {
    if (node.nodeType === Node.TEXT_NODE) return node.textContent || "";
    if (node.nodeType !== Node.ELEMENT_NODE) return "";
    if (node.tagName === "BR") return "\n";
    if (node.tagName === "IMG") return `[图片: ${node.getAttribute("alt") || node.getAttribute("data-doc-image-name") || "image"}]`;
    return Array.from(node.childNodes).map(inlineText).join("");
  };

  const lines = [];
  const walk = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent || "";
      if (text.trim()) lines.push(text.trim());
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;
    if (node.tagName === "IMG") {
      lines.push(inlineText(node));
      return;
    }
    if (containerTags.has(node.tagName)) {
      node.childNodes.forEach(walk);
      return;
    }
    if (blockTags.has(node.tagName)) {
      const text = inlineText(node).replace(/\u00a0/g, " ").trimEnd();
      lines.push(node.tagName === "LI" && text.trim() ? `- ${text.trim()}` : text.trim());
      return;
    }
    if (node.tagName === "BR") {
      lines.push("");
      return;
    }
    node.childNodes.forEach(walk);
  };

  wrapper.childNodes.forEach(walk);
  return lines.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

function plainTextToDocHtml(text) {
  const value = String(text || "").replace(/\r\n/g, "\n");
  if (!value.trim()) return "<p></p>";
  return value
    .split("\n")
    .map((line) => line ? `<p>${escapeHtml(line)}</p>` : "<p><br></p>")
    .join("");
}

function formatDocHtmlExport(note) {
  const title = escapeHtml(note.title || "NanStar Note");
  const body = sanitizeDocHtml(note.body || "<p></p>");
  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <style>
    body{margin:0;padding:32px;color:#1f2937;background:#fff;font:15px/1.8 "Segoe UI","PingFang SC","Microsoft YaHei",sans-serif}
    main{max-width:860px;margin:0 auto}
    h1,h2,h3{line-height:1.35}
    h1{font-size:28px} h2{font-size:22px} h3{font-size:18px}
    blockquote{margin:16px 0;padding:10px 14px;border-left:4px solid #2663EB;background:#f4f7ff;color:#41516a}
    a{color:#2663EB}
    p{margin:0 0 .3em}
    img{display:block;max-width:100%;height:auto;margin:.55em 0;border-radius:6px}
  </style>
</head>
<body>
  <main>
    <h1>${title}</h1>
    ${body}
  </main>
</body>
</html>`;
}

function printableHtmlForNote(note) {
  if (note.mode === "doc") return formatDocHtmlExport(note);
  const title = escapeHtml(note.title || "NanStar Note");
  const body = renderMarkdown(note.body || "");
  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <style>
    body{margin:0;padding:32px;color:#1f2937;background:#fff;font:15px/1.8 "Segoe UI","PingFang SC","Microsoft YaHei",sans-serif}
    main{max-width:900px;margin:0 auto}
    h1,h2,h3,h4{line-height:1.35}
    pre{white-space:pre-wrap;word-break:break-word;background:#111827;color:#d8e3f0;padding:14px;border-radius:8px}
    code{font-family:"Cascadia Mono","Consolas",monospace}
    blockquote{margin:16px 0;padding:10px 14px;border-left:4px solid #2663EB;background:#f4f7ff;color:#41516a}
    table{width:100%;border-collapse:collapse} th,td{border:1px solid #dde4ef;padding:8px 10px}
    img{max-width:100%}
    .code-copy,.preview-copy-image{display:none}
  </style>
</head>
<body>
  <main>
    <h1>${title}</h1>
    ${body}
  </main>
</body>
</html>`;
}

function printNotePdf(note) {
  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    showToast("PDF print window was blocked");
    return;
  }
  printWindow.document.open();
  printWindow.document.write(printableHtmlForNote(note));
  printWindow.document.close();
  printWindow.focus();
  window.setTimeout(() => printWindow.print(), 250);
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
