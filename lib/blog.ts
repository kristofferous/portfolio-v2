import fs from 'fs'
import path from 'path'

export interface PostMeta {
  slug: string
  title: string
  date: string
  readTime: string
  tags: string[]
  excerpt: string
  lastModified: Date
}

const BLOG_DIR = path.join(process.cwd(), 'app/blog')
const MONTH_INDEX: Record<string, number> = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11,
}

function parseDisplayDate(value: string): Date {
  const match = value.trim().match(/^([A-Za-z]+)\s+(\d{4})$/)
  if (match) {
    const month = MONTH_INDEX[match[1].slice(0, 3).toLowerCase()]
    const year = Number(match[2])

    if (!Number.isNaN(year) && month !== undefined) {
      return new Date(Date.UTC(year, month, 1))
    }
  }

  const parsed = new Date(value)
  if (!Number.isNaN(parsed.getTime())) {
    return parsed
  }

  return new Date(0)
}

function parsePost(slug: string): PostMeta | null {
  const mdxPath = path.join(BLOG_DIR, slug, 'page.mdx')
  if (!fs.existsSync(mdxPath)) return null

  const content = fs.readFileSync(mdxPath, 'utf-8')
  const stats = fs.statSync(mdxPath)

  const titleMatch = content.match(/title="([^"]+)"/)
  const dateMatch = content.match(/date="([^"]+)"/)
  const readTimeMatch = content.match(/readTime="([^"]+)"/)
  // Match tags={[...]} — outer braces are literal in this pattern.
  const tagsMatch = content.match(/tags=[{]([^}]+)[}]/)
  const descMatch = content.match(/description:\s*['"](.+?)['"]/)

  if (!titleMatch || !dateMatch || !readTimeMatch || !tagsMatch) return null

  const tags = Array.from(tagsMatch[1].matchAll(/['"]([^'"]+)['"]/g)).map((m) => m[1])

  return {
    slug,
    title: titleMatch[1],
    date: dateMatch[1],
    readTime: readTimeMatch[1],
    tags,
    excerpt: descMatch?.[1] ?? '',
    lastModified: stats.mtime,
  }
}

export function getAllPosts(): PostMeta[] {
  const slugs = fs
    .readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)

  return slugs
    .map(parsePost)
    .filter((post): post is PostMeta => post !== null)
    .sort((a, b) => parseDisplayDate(b.date).getTime() - parseDisplayDate(a.date).getTime())
}
