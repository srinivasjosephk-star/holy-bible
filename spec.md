# Holy Bible App

## Current State
New project. Empty backend and default frontend scaffold.

## Requested Changes (Diff)

### Add
- Full Bible reading app with all 66 books (39 OT + 27 NT)
- Book list page organized by Old Testament and New Testament sections
- Chapter navigation page for each book
- Verse reading page with full chapter text
- Search functionality (search by keyword across books)
- Bookmarking system (save favorite verses)
- Reading progress tracking (last read chapter)
- Dark/light mode toggle
- Clean, modern design with excellent typography for scripture reading

### Modify
- N/A (new project)

### Remove
- N/A (new project)

## Implementation Plan
1. Backend: Store bookmarks, reading progress, and user notes in Motoko
2. Frontend: 
   - Home/landing page with Testament tabs (OT / NT)
   - Book grid with 66 books linked to chapter pages
   - Chapter page with verse-by-verse display
   - Full Bible text data embedded as static TypeScript data files
   - Navigation breadcrumbs: Home > Book > Chapter
   - Dark/light theme toggle
   - Bookmark toggle per verse
   - Search bar filtering by keyword
