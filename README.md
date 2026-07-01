# NanStar Note

NanStar Note is a lightweight personal note platform for technical notes, client-site quick lookup, and browser-based access.

## First version

- Clean three-column workspace: note list, Markdown editor/preview, note inspector.
- Local-first storage through browser `localStorage`.
- Markdown preview with headings, lists, tasks, links, tables, blockquotes, and code blocks.
- Search by title and body.
- Favorites, recent notes, templates, duplicate, delete.
- Import `.json`, `.md`, and `.txt`.
- Export all notes as JSON and download a single note as Markdown.
- Share-link import for one note.
- Cloudflare Pages Functions + D1 sync scaffold.

## Local preview

```bash
node serve.js
```

Open:

```txt
http://localhost:4327
```

The site is static. You can also deploy the repository directly with Cloudflare Pages.

## Cloudflare sync setup

Create a Cloudflare Pages project from this GitHub repository.

Build settings:

```txt
Build command: none
Build output directory: /
```

Add a D1 database binding:

```txt
Variable name: NANSTAR_NOTES_DB
D1 database id: a636c1f4-d4db-4122-91a8-167be59a3e82
```

Add an environment variable:

```txt
NOTE_SYNC_TOKEN=choose-a-long-private-token
```

After deployment, open the sync dialog in NanStar Note and enter the same token.

## Data model

Cloud sync stores one JSON document in D1. The API creates this table automatically:

```sql
CREATE TABLE IF NOT EXISTS note_documents (
  key TEXT PRIMARY KEY,
  data TEXT NOT NULL,
  updated_at INTEGER NOT NULL
);
```

The stored document shape is:

```json
{
  "notes": [],
  "updatedAt": 0
}
```

This first version is designed for a single owner. Do not store passwords, API keys, or customer secrets unless you later add end-to-end encryption.

## Editor line-number alignment note

If the editor gutter and the active line drift apart while scrolling, the root cause is usually a bad scroll-sync strategy between the textarea and the line-number rail.

The fix used in this repo is:

- keep the gutter as a fixed container
- render line numbers inside an inner track element
- move that track with `transform: translateY(-textarea.scrollTop)`
- keep the textarea and gutter on the same line-height and padding values

This avoids relying on `scrollTop` for the gutter itself, which was the source of the drift on wheel scroll. The fix was verified by scrolling a long note to the lower half and checking that the visible line numbers still matched the text rows exactly.
