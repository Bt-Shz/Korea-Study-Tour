import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const scheduleEvents = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/schedule-events' }),
  schema: z.object({
    title: z.string(),
    time: z.string(),
    location: z.string(),
    image: z.string(),
    dayNumber: z.number().int().min(1),
    date: z.string(),
    summary: z.string(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
    // Photo gallery. Add real photos here when they are ready, e.g.
    //   gallery:
    //     - src: /images/visit/kaist/01.jpg
    //       caption: Welcome session on the 6th floor
    // While `gallery` is empty, `galleryPlaceholders` empty frames are shown
    // so the team can see where the photos will go.
    gallery: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string().optional(),
          caption: z.string().optional(),
        }),
      )
      .default([]),
    galleryPlaceholders: z.number().int().min(0).default(6),
  }),
});

export const collections = {
  scheduleEvents,
};
