import { defineCollection, z } from 'astro:content';

const reviewsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tool: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    tags: z.array(z.string()).default([]),
    affiliateUrl: z.string().url(),
    affiliateApproved: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const guidesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const trendsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    tags: z.array(z.string()).default([]),
    // Target main keyword this piece is written for — not rendered on the page,
    // just kept in frontmatter so we can track/audit keyword coverage over time.
    mainKeyword: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  reviews: reviewsCollection,
  guides: guidesCollection,
  trends: trendsCollection,
};
