'use client'
import React from 'react'
import { useReveal } from '@/hooks/useReveal'

type Job = {
  title: string
  company: string
  period: string
  type: string
  desc: string
  tags: string[]
}

const jobs: Job[] = [
  {
    title:   'IT & Hardware',
    company: 'Axentra',
    period:  '2026 – Present',
    type:    'Part-time',
    desc:    'Part-time IT and hardware role at a Kristiansand-based circular IT company specialising in refurbished enterprise servers, network gear, and storage. Work spans SEO, Shopify tooling, headless architecture, and hands-on hardware handling for B2B customers across Norway.',
    tags:    ['IT', 'SEO', 'Next.js', 'Shopify', 'Hardware'],
  },
  {
    title:   'Sales Consultant',
    company: 'Elektroimportøren AS',
    period:  '2020 – Present',
    type:    'Part-time',
    desc:    "Customer-facing sales role at one of Norway's largest electrical wholesalers, covering installation materials, lighting, smart home, EV chargers, and heat pumps across 30+ nationwide stores. Advising both professional installers and private customers on technical product selection.",
    tags:    ['Sales', 'Customer Service', 'Electrical', 'Retail'],
  }
]

export default function WorkExperience() {
  const titleRef = useReveal()
  return (
    <section className="py-[120px] px-[60px] bg-bg max-md:py-20 max-md:px-7" id="work-experience">
      <div className="section-label">Work Experience</div>
      <h2 ref={titleRef as React.RefObject<HTMLHeadingElement>} className="section-title reveal mb-16">
        WHERE I&apos;VE<br /><span className="outline">WORKED.</span>
      </h2>
      <div className="flex flex-col gap-px bg-bdr border border-bdr">
        {jobs.map((job, i) => <JobCard key={i} job={job} index={i} />)}
      </div>
    </section>
  )
}

function JobCard({ job, index }: { job: Job; index: number }) {
  const ref = useReveal()
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}
         className="work-card reveal bg-bg hover:bg-bg-2 transition-colors duration-200 p-8 max-md:p-6 grid max-md:grid-cols-1"
         style={{ transitionDelay: `${index * 80}ms`,
                  gridTemplateColumns: '200px 1fr', gap: '48px', alignItems: 'start' }}>

      {/* Left: meta */}
      <div>
        <div className="font-mono text-red uppercase mb-1" style={{ fontSize: 10, letterSpacing: '0.18em' }}>{job.period}</div>
        <div className="font-display font-bold text-xl uppercase tracking-[0.04em] leading-tight mb-1">{job.company}</div>
        <div className="font-mono text-grey uppercase" style={{ fontSize: 9, letterSpacing: '0.15em' }}>{job.type}</div>
      </div>

      {/* Right: content */}
      <div>
        <h3 className="font-display font-extrabold text-[26px] uppercase tracking-[0.02em] leading-none mb-3">{job.title}</h3>
        <p className="text-[14px] leading-[1.75] text-fore/55 font-light mb-5 max-w-[600px]">{job.desc}</p>
        <div className="flex gap-2 flex-wrap">
          {job.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>

    </div>
  )
}
