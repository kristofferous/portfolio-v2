'use client'
import { useReveal } from '@/hooks/useReveal'

const langColors: Record<string,string> = { 'Rust':'#CE422B', 'TypeScript':'#3178C6', 'HTML / JS':'#E34C26' }

const repos = [
  { name:'ALPINE',       lang:'Rust',        status:'Public', link:'https://github.com/alpine-core/protocol',
    desc:'Core lighting network protocol powering Y-Link. An encrypted and fast alternative to sACN and Art-Net with native discovery and identity' },
  { name:'timerapportering-app',     lang:'TypeScript',  status:'Public',        link:'https://github.com/kristofferous/timerapportering-app',
    desc:'Desktop time-tracking app for Windows and Linux built with Tauri 2 and Next.js. Clock in/out, manual backlog, monthly overview, weekly charts, and automatic Norwegian supplementary pay calculations.' },
  { name:'nerskogen.com',         lang:'TypeScript',  status:'Public',        link:'https://github.com/kristofferous/portfolio-v2',
    desc:'This portfolio — built with Next.js 14 App Router, Tailwind CSS, Barlow Condensed, and zero UI libraries.' },
]

export default function OpenSource() {
  const titleRef = useReveal()
  return (
    <section className="py-[120px] px-[60px] bg-bg max-md:py-20 max-md:px-7" id="open-source">
      <div className="section-label">Open Source</div>
      <h2 ref={titleRef as React.RefObject<HTMLHeadingElement>} className="section-title reveal mb-16">
        CODE IN<br /><span className="outline">THE OPEN.</span>
      </h2>
      <div className="grid gap-px bg-bdr border border-bdr mb-8"
           style={{ gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))' }}>
        {repos.map((r, i) => <RepoCard key={r.name} repo={r} index={i} />)}
      </div>
      <div className="flex justify-end">
        <a href="https://github.com" target="_blank" rel="noreferrer"
           className="inline-flex items-center gap-[10px] font-mono text-grey uppercase hover:text-fore
                      border-b border-transparent hover:border-bdr transition-all duration-200 py-3"
           style={{ fontSize:11, letterSpacing:'0.15em' }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
            <path fillRule="evenodd" d="M9 0C4.03 0 0 4.03 0 9c0 3.98 2.58 7.35 6.16 8.54.45.08.61-.19.61-.43 0-.21-.01-.77-.01-1.52-2.5.54-3.03-1.21-3.03-1.21-.41-1.04-1-.32-1-.32-.82-.56.06-.55.06-.55.9.06 1.38.93 1.38.93.8 1.38 2.1.98 2.61.75.08-.58.31-.98.57-1.2-1.99-.23-4.09-1-4.09-4.44 0-.98.35-1.78.93-2.41-.09-.23-.4-1.14.09-2.37 0 0 .75-.24 2.47.92A8.6 8.6 0 019 4.49c.76 0 1.53.1 2.25.3 1.71-1.16 2.46-.92 2.46-.92.49 1.23.18 2.14.09 2.37.58.63.93 1.43.93 2.41 0 3.45-2.1 4.21-4.1 4.43.32.28.61.83.61 1.67 0 1.21-.01 2.18-.01 2.48 0 .24.16.52.62.43C15.42 16.35 18 12.98 18 9c0-4.97-4.03-9-9-9z"/>
          </svg>
          View all repos on GitHub
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        </a>
      </div>
    </section>
  )
}

function RepoCard({ repo: r, index }: { repo: typeof repos[0]; index: number }) {
  const ref = useReveal()
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}
         className="os-card top-bar reveal bg-bg p-7 flex flex-col gap-0 hover:bg-bg-2 transition-colors duration-200"
         style={{ transitionDelay:`${index*70}ms` }}>
      <div className="flex items-center justify-between mb-4">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-grey">
          <path d="M1 3a1 1 0 011-1h3l1.5 2H12a1 1 0 011 1v6a1 1 0 01-1 1H2a1 1 0 01-1-1V3z" stroke="currentColor" strokeWidth="1.1"/>
        </svg>
        <span className={`font-mono uppercase border px-2 py-[3px]
          ${r.status==='Public' ? 'text-red border-red-border' : 'text-grey border-bdr'}`}
              style={{ fontSize:9, letterSpacing:'0.15em' }}>
          {r.status}
        </span>
      </div>
      <h3 className="font-display font-bold text-xl uppercase tracking-[0.04em] mb-[10px]">{r.name}</h3>
      <p className="text-[13px] leading-[1.7] text-fore/50 font-light flex-1 mb-5">{r.desc}</p>
      <div className="flex items-center justify-between border-t border-bdr pt-4">
        <span className="flex items-center gap-2 font-mono text-grey uppercase" style={{ fontSize:10, letterSpacing:'0.12em' }}>
          <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: langColors[r.lang]??'#888' }} />
          {r.lang}
        </span>
        {r.link && (
          <a href={r.link} target="_blank" rel="noreferrer"
             className="font-mono text-red uppercase hover:opacity-70 transition-opacity duration-200"
             style={{ fontSize:10, letterSpacing:'0.12em' }}>View →</a>
        )}
      </div>
    </div>
  )
}
