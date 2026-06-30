# NanStar Note

NanStar Note is a lightweight personal note platform for technical notes, client-site quick lookup, and browser-based access.

## First version

- Clean three-column workspace: note list, Markdown editor/preview, note inspector.
- Local-first storage through browser `localStorage`.
- Markdown preview with headings, lists, tasks, links, tables, blockquotes, and code blocks.
- Search by title, body, and tags.
- Tags, favorites, recent notes, templates, duplicate, delete.
- Import `.json`, `.md`, and `.txt`.
- Export all notes as JSON and download a single note as Markdown.
- Share-link import for one note.
- Cloudflare Pages Functions + KV sync scaffold.

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

Add a KV namespace binding:

```txt
Variable name: NANSTAR_NOTES
Type: KV namespace
```

Add an environment variable:

```txt
NOTE_SYNC_TOKEN=choose-a-long-private-token
```

After deployment, open the sync dialog in NanStar Note and enter the same token.

## Data model

Cloud sync stores one JSON document in KV:

```json
{
  "notes": [],
  "updatedAt": 0
}
```

This first version is designed for a single owner. Do not store passwords, API keys, or customer secrets unless you later add end-to-end encryption.
