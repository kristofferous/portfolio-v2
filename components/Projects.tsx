'use client'
import { useReveal } from '@/hooks/useReveal'

const ArrowOut = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const LockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <rect x="3" y="6" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M5 6V4.5a2 2 0 014 0V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
)

const projects = [
  { num:'01', name:'Y-Link',        tags:['Rust','AI / ML','DMX','ESP32-S3','PCB','Embedded'], link:'https://y-link.no',
    desc:'AI-driven DMX lighting ecosystem for the AV and entertainment market. Autonomously generates professional light shows in real time — beat detection, scene selection, moving head choreography. Powered by ALPINE, a deterministic Rust execution engine with real-time beat analysis via CMSIS-DSP and a custom ESP32-S3 PCB with MAX3485 line driver. Priced at 5,000 NOK vs competitors at ~12,000 NOK.' },
  { num:'02', name:'Y-Link Studio', tags:['Tauri','Next.js','Three.js','TypeScript'],           link:'https://y-link.no',
    desc:'Desktop control application for Y-Link. 3D fixture placement editor, 2D fixture painter, real-time DMX patch grid, AI Show Conductor interface, and Music-To-Motion track resolution via SMTC/MPRIS and MusicBrainz.' },
  { num:'03', name:'Flittig UB',    tags:['Next.js', 'NestJs','TypeScript','Stripe','MariaDB'],        link:null,
    desc:'Full-stack marketplace app built for a Norwegian youth enterprise (ungdomsbedrift). Adults post local jobs — lawn mowing, house painting, odd tasks — and youth users claim and complete them. Integrated Stripe for in-app payments. Built solo end-to-end.' },
]

export default function Projects() {
  const titleRef = useReveal()
  return (
    <section className="py-[120px] px-[60px] bg-bg-2 max-md:py-20 max-md:px-7" id="projects">
      <div className="section-label">Selected Work</div>
      <h2 ref={titleRef as React.RefObject<HTMLHeadingElement>} className="section-title reveal mb-16">
        WHAT I&apos;VE<br /><span className="outline">BUILT.</span>
      </h2>
      <div className="flex flex-col gap-px bg-bdr border border-bdr">
        {projects.map((p, i) => <ProjectRow key={p.num} project={p} index={i} />)}
      </div>
    </section>
  )
}

function ProjectRow({ project: p, index }: { project: typeof projects[0]; index: number }) {
  const ref = useReveal()
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}
         className="project-row left-bar reveal bg-bg-2 hover:bg-bg-3 transition-colors duration-250 max-md:flex-col"
         style={{ display:'grid', gridTemplateColumns:'72px 1fr 64px', alignItems:'center',
                  gap:'36px', padding:'44px 48px', transitionDelay:`${index*60}ms` }}>
      <span className="font-display font-black text-fore/[0.06] hover:text-red-dim select-none transition-colors duration-250"
            style={{ fontSize:56, lineHeight:1, letterSpacing:'-0.03em' }}>{p.num}</span>
      <div>
        <div className="flex gap-2 flex-wrap mb-[14px]">{p.tags.map(t=><span key={t} className="tag">{t}</span>)}</div>
        <h3 className="font-display font-extrabold text-[32px] uppercase tracking-[0.02em] leading-none mb-3">{p.name}</h3>
        <p className="text-[14px] leading-[1.75] text-fore/48 font-light max-w-[580px]">{p.desc}</p>
      </div>
      <div className="flex justify-end max-md:justify-start">
        {p.link
          ? <a href={p.link} target="_blank" rel="noreferrer"
               className="w-12 h-12 border border-bdr flex items-center justify-center text-grey
                          hover:border-red hover:text-red hover:bg-red-dim hover:rotate-[-45deg] transition-all duration-250">
              <ArrowOut />
            </a>
          : <div className="w-12 h-12 border border-bdr flex items-center justify-center text-grey opacity-30" title="Private / WIP">
              <LockIcon />
            </div>
        }
      </div>
    </div>
  )
}
