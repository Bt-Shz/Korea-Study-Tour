# Adding a schedule event detail page

Detail pages live at `/visit-schedule/{slug}`. Each one is a markdown file in `src/content/schedule-events/`.

Working example: `src/content/schedule-events/departure-hk-seoul-arrival.md` (Day 1, first card).

## Steps

1. Create `src/content/schedule-events/{slug}.md`. The filename is the URL slug.
2. Fill in the frontmatter (see below) and write the body in markdown.
3. Add `slug: '{slug}'` to the matching event in `src/data/schedule.ts`.
4. Run `npm run dev` and check `/visit-schedule/{slug}`.

The schedule card is only clickable once `slug` is set in `schedule.ts`. Leave it out until the page is ready.

## Frontmatter

```yaml
---
title: 'Departure from Hong Kong → Arrival in Seoul'
time: '7:00 AM'
location: 'HKIA Aisle A · Cathay Pacific'
image: 'https://example.com/hero.jpg'
dayNumber: 1
date: 'Mon 18 May 2026'
summary: 'Arrival & Settling In'
description: 'Optional short intro on the detail page.'
draft: false
---
```

Required: `title`, `time`, `location`, `image`, `dayNumber`, `date`, `summary`.

Optional: `description`, `draft` (set `true` to skip at build time).

Keep `title`, `location`, and `image` in sync with the same event in `schedule.ts`. The card still reads from `schedule.ts`; the markdown file drives the detail page.

## Linking the card

In `src/data/schedule.ts`:

```ts
{
  time: '7:00 AM',
  title: 'Departure from Hong Kong → Arrival in Seoul',
  slug: 'departure-hk-seoul-arrival',
  type: 'travel',
  location: 'HKIA Aisle A · Cathay Pacific',
  description: '...',
  image: '...',
},
```

`slug` must match the markdown filename without `.md`.

## Images

Remote URL in frontmatter:

```yaml
image: 'https://images.unsplash.com/photo-...'
```

Local file — put it in `public/` and use a root path:

```yaml
image: '/images/schedule/hkia.jpg'
```

Inline in the body: `![Alt text](/images/schedule/photo.jpg)`

## Body

Standard markdown below the frontmatter: headings, lists, blockquotes, images. No special syntax.


