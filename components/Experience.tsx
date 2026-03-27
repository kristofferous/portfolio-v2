'use client'
import { useReveal } from '@/hooks/useReveal'

const events = [
  { year:'2026', title:'University Prep',  role:'Student',              current:true,
    desc:'Preparing for a 5-year program spanning mathematics, algorithms, data engineering, and physics. Actively studying Matematikk R2.',
    tags:['Math','Algorithms','Physics'] },
  { year:'2025', title:'Axentra',          role:'IT & Hardware',
    desc:'Part-time IT and hardware role at a Norwegian e-commerce business selling refurbished enterprise servers. SEO, Shopify tooling, and headless architecture.',
    tags:['IT','SEO','Next.js','Shopify'] },
  { year:'2025', title:'Y-Link',           role:'Founder',
    desc:'Founded and building Y-Link — an AI-driven DMX lighting ecosystem for the AV and entertainment market. Targets venues with autonomous light show generation.',
    tags:['Rust','AI/ML','DMX','Embedded','PCB'] },
  { year:'2022', title:'Web & Freelance',  role:'Developer',
    desc:'Transitioned from Java to JavaScript, React, and full-stack web. Built freelance projects while deepening software architecture and product thinking.',
    tags:['React','Node.js','TypeScript'] },
  { year:'2019', title:'First Line of Code', role:'Self-taught',
    desc:'Wrote first Java programs as Minecraft / Spigot plugins at 13. Learned programming entirely through building, breaking, and reading source code.',
    tags:['Java','Spigot','Minecraft'] },
]

export default function Experience() {
  const titleRef = useReveal()
  return (
    <section className="py-[120px] px-[60px] bg-bg-2 max-md:py-20 max-md:px-7" id="experience">
      <div className="section-label">Timeline</div>
      <h2 ref={titleRef as React.RefObject<HTMLHeadingElement>} className="section-title reveal mb-16">
        HOW I GOT<br /><span className="outline">HERE.</span>
      </h2>
      <div className="relative flex flex-col">
        {/* Vertical line */}
        <div className="absolute left-[120px] top-0 bottom-0 w-px bg-bdr max-md:left-[80px]" />
        {events.map((e, i) => <TimelineItem key={e.year+e.title} event={e} index={i} />)}
      </div>
    </section>
  )
}

function TimelineItem({ event: e, index }: { event: typeof events[0]; index: number }) {
  const ref = useReveal()
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="reveal pb-14 last:pb-0"
         style={{ display:'grid', gridTemplateColumns:'100px 40px 1fr', transitionDelay:`${index*80}ms` }}>
      {/* Year */}
      <div className="flex flex-col items-end pr-5 pt-1 gap-2">
        <span className="font-display font-black text-grey" style={{ fontSize:16, letterSpacing:'0.04em' }}>{e.year}</span>
        {e.current && (
          <span className="font-mono text-red bg-red-dim border border-red-border uppercase px-[6px] py-[2px]"
                style={{ fontSize:8, letterSpacing:'0.2em' }}>NOW</span>
        )}
      </div>
      {/* Dot */}
      <div className="flex justify-center pt-2 relative">
        <div className="w-[10px] h-[10px] bg-red rounded-full flex-shrink-0 relative z-10" />
        {e.current && (
          <div className="absolute top-2 w-5 h-5 border border-red/40 rounded-full -translate-y-[5px] animate-pulse-ring" />
        )}
      </div>
      {/* Content */}
      <div className="pl-7">
        <h3 className="font-display font-extrabold uppercase text-[28px] tracking-[0.02em] leading-none mb-1">{e.title}</h3>
        <p className="font-mono text-grey uppercase mb-3" style={{ fontSize:10, letterSpacing:'0.15em' }}>{e.role}</p>
        <p className="text-[14px] leading-[1.75] text-fore/55 font-light max-w-[560px] mb-4">{e.desc}</p>
        <div className="flex gap-2 flex-wrap">{e.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
      </div>
    </div>
  )
}
