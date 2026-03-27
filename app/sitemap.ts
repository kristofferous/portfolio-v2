import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

const BASE_URL = 'https://nerskogen.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const generatedAt = new Date()
  const posts = getAllPosts()

  return [
    {
      url: BASE_URL,
      lastModified: generatedAt,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: generatedAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: post.lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
