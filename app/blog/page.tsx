import Link from 'next/link'
import type { Metadata } from 'next'
import fs from 'fs'
import path from 'path'

export const metadata: Metadata = {
  title: 'Blog — Kristoffer',
  description: 'Writing on Rust, embedded systems, AI-driven software, and building products.',
}

interface PostMeta {
  slug: string
  title: string
  date: string
  readTime: string
  tags: string[]
  excerpt: string
}

function parsePost(slug: string): PostMeta | null {
  const mdxPath = path.join(process.cwd(), 'app/blog', slug, 'page.mdx')
  if (!fs.existsSync(mdxPath)) return null

  const content = fs.readFileSync(mdxPath, 'utf-8')

  const titleMatch = content.match(/title="([^"]+)"/)
  const dateMatch = content.match(/date="([^"]+)"/)
  const readTimeMatch = content.match(/readTime="([^"]+)"/)
  // Match tags={[...]} — outer braces aren't regex-special outside classes
  const tagsMatch = content.match(/tags=[{]([^}]+)[}]/)
  const descMatch = content.match(/description:\s*['"](.+?)['"]/)

  if (!titleMatch || !dateMatch || !readTimeMatch || !tagsMatch) return null

  const tags = Array.from(tagsMatch[1].matchAll(/['"]([^'"]+)['"]/g)).map(m => m[1])

  return {
    slug,
    title: titleMatch[1],
    date: dateMatch[1],
    readTime: readTimeMatch[1],
    tags,
    excerpt: descMatch?.[1] ?? '',
  }
}

function getAllPosts(): PostMeta[] {
  const blogDir = path.join(process.cwd(), 'app/blog')
  const slugs = fs.readdirSync(blogDir, { withFileTypes: true })
    .filter(e => e.isDirectory())
    .map(e => e.name)

  return slugs
    .map(parsePost)
    .filter((p): p is PostMeta => p !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export default function BlogIndex() {
  const posts = getAllPosts()
  return (
    <main className="min-h-screen bg-bg text-fore py-[120px] px-[60px] max-md:py-20 max-md:px-7">
      <Link href="/#blog" className="inline-flex items-center gap-3 font-mono text-grey uppercase mb-12
                                      hover:text-fore transition-colors duration-200"
            style={{ fontSize: 11, letterSpacing: '0.18em' }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M12 7H2M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
        Back
      </Link>

      <div className="section-label">Writing</div>
      <h1 className="section-title mb-16">
        ALL<br /><span className="outline">POSTS.</span>
      </h1>

      <div className="flex flex-col gap-px bg-bdr border border-bdr">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`}
                className="left-bar bg-bg hover:bg-bg-2 transition-colors duration-200 no-underline text-inherit"
                style={{ display: 'grid', gridTemplateColumns: '130px 1fr 48px', alignItems: 'center',
                         gap: '36px', padding: '36px 48px' }}>
            <div className="flex flex-col gap-[6px]">
              <span className="font-mono text-grey uppercase" style={{ fontSize: 10, letterSpacing: '0.18em' }}>{p.date}</span>
              <span className="font-mono text-fore/30 uppercase" style={{ fontSize: 9, letterSpacing: '0.12em' }}>{p.readTime}</span>
            </div>
            <div>
              <h2 className="font-display font-bold text-[22px] uppercase tracking-[0.02em] leading-[1.1] mb-2">{p.title}</h2>
              <p className="text-[13px] leading-[1.7] text-fore/45 font-light mb-3">{p.excerpt}</p>
              <div className="flex gap-2 flex-wrap">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
            <div className="flex justify-end">
              <div className="w-12 h-12 border border-bdr flex items-center justify-center text-grey">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
