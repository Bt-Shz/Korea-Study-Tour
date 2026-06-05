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
  }),
});

export const collections = {
  scheduleEvents,
};
