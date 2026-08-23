import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const reviews = await getCollection('reviews', ({ data }) => !data.draft);
  const guides = await getCollection('guides', ({ data }) => !data.draft);

  const items = [
    ...reviews.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.pubDate,
      link: `/reviews/${entry.slug}/`,
    })),
    ...guides.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.pubDate,
      link: `/guides/${entry.slug}/`,
    })),
  ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: 'HoneyTools',
    description: 'Honest, hands-on reviews of AI and SaaS tools.',
    site: context.site,
    items,
  });
}
