import { defineCollection, z } from 'astro:content';

const guias = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    pubDate:     z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category:    z.enum(['educacao', 'tecnologia', 'dicas']),
    tags:        z.array(z.string()).default([]),
    readingTime: z.number().optional(), // minutos estimados
    featured:    z.boolean().default(false),
  }),
});

export const collections = { guias };
