import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
    id: z.number(),
		title: z.string(),
		description: z.string(),
    summary: z.string().optional(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
    disabled: z.boolean().optional(),
	}),
});

export const collections = { blog };
