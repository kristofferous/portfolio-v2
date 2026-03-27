'use client'
import React from 'react'
import { useReveal } from '@/hooks/useReveal'

const IconMath = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 14L5 4L9 10L11 7L13 12L16 5"/>
  </svg>
)

const IconChip = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <rect x="5" y="5" width="8" height="8" rx="1"/>
    <path d="M5 7H2M5 11H2M13 7h3M13 11h3M7 5V2M11 5V2M7 13v3M11 13v3"/>
  </svg>
)

const IconHex = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
    <path d="M9 2L16 5.5V12.5L9 16L2 12.5V5.5L9 2Z"/>
  </svg>
)

const IconPCB = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="12" height="12" rx="1"/>
    <circle cx="7" cy="7" r="1.5"/>
    <circle cx="11" cy="11" r="1.5"/>
    <path d="M7 8.5V11H9.5"/>
  </svg>
)

const IconTriangle = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
    <path d="M9 3L16 15H2L9 3Z"/>
  </svg>
)

const IconGear = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="9" r="2.5"/>
    <path d="M9 2v2M9 14v2M2 9h2M14 9h2M3.64 3.64l1.41 1.41M13.36 13.36l-1.41-1.41M3.64 14.36l1.41-1.41M13.36 4.64l-1.41 1.41"/>
  </svg>
)

type LearningItem = {
  icon: React.ReactNode
  topic: string
  sub: string
  progress: number
  desc: string
}

const items: LearningItem[] = [
  { icon: <IconMath />,     topic: 'Matematikk R2',       sub: 'University Prep',    progress: 72,
    desc: 'Vectors, 3D geometry, coplanarity, volume problems, and angle-between-line-and-plane. Preparing for the Norwegian national exam.' },
  { icon: <IconChip />,     topic: 'Embedded Firmware',   sub: 'ESP32-S3 / RT1172',  progress: 60,
    desc: 'Low-level C/Rust firmware, CMSIS-DSP beat analysis, real-time scheduling, and multi-core MCU architecture for Y-Link hardware.' },
  { icon: <IconHex />,      topic: 'Reinforcement Learning', sub: 'AI / ML',          progress: 45,
    desc: 'RL fundamentals and Q-learning for future Y-Light Engine integration — phrase evaluator, driver selection, and show conductor layers.' },
  { icon: <IconPCB />,      topic: 'PCB Design',           sub: 'KiCad / JLCPCB',    progress: 55,
    desc: 'Schematic capture, layout, DRC, and prototype manufacturing. Currently on Rev_A of the Y1-Proto board with ESP32-S3 and MAX3485.' },
  { icon: <IconTriangle />, topic: 'Computer Graphics',    sub: 'WebGL / WGPU',       progress: 42,
    desc: 'Exploring GPU pipeline fundamentals, shader programming, and real-time rendering techniques to support future visualiser work in Y-Light Engine.' },
  { icon: <IconGear />,     topic: 'Rust Async & Types',   sub: 'Advanced Patterns',  progress: 55,
    desc: 'Deepening knowledge of async runtimes, trait objects, lifetimes, and zero-cost abstractions for production-quality Rust across Y-Link and Y-Light.' },
]

export default function Learning() {
  const titleRef = useReveal()
  return (
    <section className="py-[120px] px-[60px] bg-bg-2 max-md:py-20 max-md:px-7" id="currently-learning">
      <div className="section-label">Currently Learning</div>
      <h2 ref={titleRef as React.RefObject<HTMLHeadingElement>} className="section-title reveal mb-16">
        ALWAYS<br /><span className="outline">LEVELLING UP.</span>
      </h2>
      <div className="grid gap-px bg-bdr border border-bdr lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {items.map((item, i) => <LearnCard key={item.topic} item={item} index={i} />)}
      </div>
    </section>
  )
}

function LearnCard({ item, index }: { item: LearningItem; index: number }) {
  const ref = useReveal()
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}
         className="learn-card bottom-bar reveal bg-bg-2 p-7 flex flex-col gap-[14px] hover:bg-bg-3 transition-colors duration-200"
         style={{ transitionDelay:`${index*60}ms` }}>
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-red-dim border border-red-border flex items-center justify-center text-red flex-shrink-0">{item.icon}</div>
        <div>
          <h3 className="font-display font-bold text-xl uppercase tracking-[0.04em] leading-none mb-1">{item.topic}</h3>
          <p className="font-mono text-grey uppercase" style={{ fontSize:9, letterSpacing:'0.18em' }}>{item.sub}</p>
        </div>
      </div>
      <p className="text-[13px] leading-[1.7] text-fore/50 font-light flex-1">{item.desc}</p>
      <div className="flex items-center gap-3 mt-1">
        <div className="flex-1 h-px bg-bdr overflow-hidden">
          <div className="h-full bg-red origin-left transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-300"
               style={{ width:`${item.progress}%`, transform:'scaleX(0)' }} />
        </div>
        <span className="font-mono text-grey whitespace-nowrap" style={{ fontSize:10, letterSpacing:'0.1em' }}>{item.progress}%</span>
      </div>
    </div>
  )
}
