'use client'
import React from 'react'
import { useReveal } from '@/hooks/useReveal'

const IconMath = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 14L5 4L9 10L11 7L13 12L16 5"/>
  </svg>
)

const IconHex = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
    <path d="M9 2L16 5.5V12.5L9 16L2 12.5V5.5L9 2Z"/>
  </svg>
)

const IconGear = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="9" r="2.5"/>
    <path d="M9 2v2M9 14v2M2 9h2M14 9h2M3.64 3.64l1.41 1.41M13.36 13.36l-1.41-1.41M3.64 14.36l1.41-1.41M13.36 4.64l-1.41 1.41"/>
  </svg>
)

const IconPeople = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6.5" cy="6" r="2.5"/>
    <circle cx="12.5" cy="7" r="2"/>
    <path d="M2 15c0-2.5 2-4.5 4.5-4.5S11 12.5 11 15M11.5 11c2.5 0 4.5 1.5 4.5 4"/>
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
  { icon: <IconMath />, topic: 'Discrete Mathematics', sub: 'OsloMet · Data Engineering', progress: 70,
    desc: 'Logic, sets, combinatorics, graphs, and proof techniques. The mathematical foundation for algorithms and data structures.' },
  { icon: <IconGear />, topic: 'Programming', sub: 'OsloMet · Data Engineering', progress: 70,
    desc: 'Core programming concepts: control flow, data types, functions, object-oriented design, and problem solving.' },
  { icon: <IconHex />,  topic: 'Web Development and Inclusive Design', sub: 'OsloMet · Data Engineering', progress: 70,
    desc: 'Building websites with HTML, CSS, and JavaScript, with a focus on accessibility and universal design.' },
  { icon: <IconPeople />, topic: 'Technology and Society for Programmers', sub: 'OsloMet · Data Engineering', progress: 70,
    desc: 'How software affects people and society: ethics, privacy, sustainability, and the responsibility of developers.' },
]

export default function Learning() {
  const titleRef = useReveal()
  return (
    <section className="py-[120px] px-[60px] bg-bg-2 max-md:py-20 max-md:px-7" id="currently-learning">
      <div className="section-label">Current Semester</div>
      <h2 ref={titleRef as React.RefObject<HTMLHeadingElement>} className="section-title reveal mb-16">
        WHAT I&apos;M<br /><span className="outline">STUDYING.</span>
      </h2>
      <div className="grid gap-px bg-bdr border border-bdr lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
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
