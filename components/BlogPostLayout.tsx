import Link from 'next/link'
import ReadingProgress from '@/components/ReadingProgress'

interface Props {
  title: string
  date: string
  readTime: string
  tags: string[]
  children: React.ReactNode
}

export default function BlogPostLayout({ title, date, readTime, tags, children }: Props) {
  const ghostTag = tags[0]?.toUpperCase() ?? 'WRITING'

  // Split title so we can stroke the last word
  const words = title.split(' ')
  const lastWord = words.pop()
  const leadWords = words.join(' ')

  return (
    <main className="min-h-screen bg-bg text-fore">
      <ReadingProgress />

      {/* Header */}
      <div className="relative px-[60px] pt-[80px] pb-[60px] border-b border-bdr overflow-hidden max-md:px-7 max-md:pt-16">

        {/* Ghost background tag */}
        <div
          aria-hidden
          className="absolute right-[-0.02em] top-1/2 -translate-y-1/2 font-display font-black uppercase select-none pointer-events-none leading-none"
          style={{ fontSize: 'clamp(80px, 14vw, 160px)', opacity: 0.03, color: '#F0EDE8' }}
        >
          {ghostTag}
        </div>

        <Link href="/blog" className="inline-flex items-center gap-3 font-mono text-grey uppercase mb-10
                                       hover:text-fore transition-colors duration-200"
              style={{ fontSize: 11, letterSpacing: '0.18em' }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M12 7H2M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          All posts
        </Link>

        <div className="relative max-w-[760px]">
          {/* Eyebrow */}
          <div className="section-label mb-6">WRITING</div>

          {/* Title */}
          <h1
            className="font-display font-black uppercase tracking-tight mb-6"
            style={{ fontSize: 'clamp(36px, 6vw, 72px)', lineHeight: 0.92 }}
          >
            {leadWords && <>{leadWords} </>}
            <span style={{ WebkitTextStroke: '1px rgba(240,237,232,0.55)', color: 'transparent' }}>
              {lastWord}
            </span>
          </h1>

          {/* Compact meta strip */}
          <div className="flex items-center gap-4 flex-wrap">
            <span className="font-mono text-grey uppercase" style={{ fontSize: 12, letterSpacing: '0.15em' }}>{date}</span>
            <span className="text-bdr">·</span>
            <span className="font-mono text-fore/40 uppercase" style={{ fontSize: 12, letterSpacing: '0.1em' }}>{readTime} read</span>
            {tags.length > 0 && <span className="text-bdr">·</span>}
            {tags.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="px-[60px] py-[80px] max-md:px-7 max-md:py-12">
        <div className="max-w-[760px]">
          <div className="prose-blog">
            {children}
          </div>

          {/* Footer nav */}
          <div className="mt-20 pt-8 border-t border-bdr flex justify-between items-center">
            <Link href="/blog" className="inline-flex items-center gap-3 font-mono text-grey uppercase
                                           hover:text-fore transition-colors duration-200"
                  style={{ fontSize: 11, letterSpacing: '0.18em' }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M12 7H2M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              All posts
            </Link>
            <Link href="/" className="inline-flex items-center gap-3 font-mono text-grey uppercase
                                       hover:text-fore transition-colors duration-200"
                  style={{ fontSize: 11, letterSpacing: '0.18em' }}>
              Home
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
