# Schedule event detail pages

This guide explains how to add a detail page for a visit-schedule event card. Each detail page is a markdown file — similar to a blog post — rendered at `/visit-schedule/{slug}`.

## Quick start

1. Create a markdown file in `src/content/schedule-events/`.
2. Add a matching `slug` to the event in `src/data/schedule.ts`.
3. Run `npm run dev` and open `/visit-schedule/your-slug`.

See [departure-hk-seoul-arrival.md](./src/content/schedule-events/departure-hk-seoul-arrival.md) for a complete example (Day 1, first card).

## File location

```
src/content/schedule-events/
  departure-hk-seoul-arrival.md   ← example
  your-new-event.md              ← add more here
```

The filename (without `.md`) becomes the URL slug.

## Frontmatter

Every event file must start with YAML frontmatter:

```yaml
---
title: 'Departure from Hong Kong → Arrival in Seoul'
time: '7:00 AM'
location: 'HKIA Aisle A · Cathay Pacific'
image: 'https://example.com/hero.jpg'
dayNumber: 1
date: 'Mon 18 May 2026'
summary: 'Arrival & Settling In'
description: 'Short teaser shown on the detail page header.'
draft: false
---
```

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Event title (matches the schedule card) |
| `time` | Yes | Display time, e.g. `7:00 AM` |
| `location` | Yes | Location label shown on card and detail page |
| `image` | Yes | Hero image URL (card thumbnail uses the same image in `schedule.ts`) |
| `dayNumber` | Yes | Day number (1–4) |
| `date` | Yes | Full date string, e.g. `Mon 18 May 2026` |
| `summary` | Yes | Day theme, e.g. `Arrival & Settling In` |
| `description` | No | Short intro under the title on the detail page |
| `draft` | No | Set `true` to exclude from the build (default: `false`) |

## Body content

Write the main article below the frontmatter using standard markdown:

- Headings (`##`, `###`)
- Paragraphs, **bold**, _italic_
- Bullet and numbered lists
- Blockquotes (`>`)
- Images: `![Alt text](/images/schedule/photo.jpg)`

Content is rendered inside a centered prose column via `ArticleBody.astro`.

## Link the schedule card

Add a `slug` field to the matching event in `src/data/schedule.ts`. The slug must match the markdown filename:

```ts
{
  time: '7:00 AM',
  title: 'Departure from Hong Kong → Arrival in Seoul',
  slug: 'departure-hk-seoul-arrival',  // ← links to /visit-schedule/departure-hk-seoul-arrival
  type: 'travel',
  location: 'HKIA Aisle A · Cathay Pacific',
  description: '...',
  image: '...',
},
```

Events **without** a `slug` stay as static cards (not clickable). Add the slug only when the detail page is ready.

## Images

**Remote URLs** — use directly in frontmatter or markdown:

```yaml
image: 'https://images.unsplash.com/photo-...'
```

**Local files** — place under `public/` and reference with a root path:

```
public/images/schedule/hkia.jpg
```

```yaml
image: '/images/schedule/hkia.jpg'
```

## Preview locally

```sh
npm run dev
```

- Schedule list: [http://localhost:4321/visit-schedule](http://localhost:4321/visit-schedule)
- Example detail: [http://localhost:4321/visit-schedule/departure-hk-seoul-arrival](http://localhost:4321/visit-schedule/departure-hk-seoul-arrival)

## Architecture (for reference)

| Piece | Role |
|-------|------|
| `src/content.config.ts` | Validates frontmatter schema |
| `src/layouts/ArticleLayout.astro` | Page shell (header, footer, centered layout) |
| `src/components/content/ArticleHeader.astro` | Hero image, title, metadata |
| `src/components/content/ArticleBody.astro` | Prose wrapper for markdown body |
| `src/pages/visit-schedule/[slug].astro` | Builds one static page per content file |
| `src/components/cards/ScheduleEventRow.astro` | Renders card as a link when `slug` is set |

## Checklist for a new event

- [ ] Create `src/content/schedule-events/{slug}.md` with frontmatter + body
- [ ] Add `slug: '{slug}'` to the event in `src/data/schedule.ts`
- [ ] Confirm card image/title/description match between `schedule.ts` and the markdown file
- [ ] Preview at `/visit-schedule/{slug}`
- [ ] Run `npm run build` before deploying
