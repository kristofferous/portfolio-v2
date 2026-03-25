import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Kristoffer',
  description: 'Writing on Rust, embedded systems, AI-driven software, and building products.',
}

const posts = [
  { date: 'Mar 2026', readTime: '12 min', slug: 'building-ai-driven-dmx-lighting-engine-rust', tags: ['Rust', 'AI', 'DMX'],
    title: 'Building an AI-Driven DMX Lighting Engine in Rust',
    excerpt: 'How I designed the ALPINE execution layer, integrated beat detection via CMSIS-DSP, and architected a rule-based scene evaluation system for real-time autonomous light shows.' },
  { date: 'Feb 2026', readTime: '9 min', slug: 'music-to-motion-track-identity-real-time', tags: ['Architecture', 'Audio', 'TypeScript'],
    title: 'Music-to-Motion: Resolving Track Identity in Real Time',
    excerpt: 'A deep dive into the MTM system — OS media session APIs, MusicBrainz fallback, AcoustID fingerprinting, and how loopback audio saves us when everything else fails.' },
  { date: 'Jan 2026', readTime: '8 min', slug: 'first-pcb-lessons-y1-proto-rev-a', tags: ['PCB', 'Hardware', 'ESP32'],
    title: 'My First PCB: Lessons from the Y1-Proto-Rev_A',
    excerpt: 'What I learned designing and manufacturing a custom ESP32-S3 + MAX3485 DMX controller board through JLCPCB — from KiCad footprints to a working prototype unit.' },
  { date: 'Dec 2025', readTime: '6 min', slug: 'why-tauri-over-electron-y-link-studio', tags: ['Tauri', 'Rust', 'Desktop'],
    title: 'Why I Chose Tauri Over Electron for Y-Link Studio',
    excerpt: 'Memory footprint, startup time, and the Rust backend story. A practical comparison after actually shipping both approaches.' },
]

export default function BlogIndex() {
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
