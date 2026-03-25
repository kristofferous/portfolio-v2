'use client'
import { useReveal } from '@/hooks/useReveal'

const items = [
  { icon:'∫',  topic:'Matematikk R2',     sub:'University Prep',    progress:72,
    desc:'Vectors, 3D geometry, coplanarity, volume problems, and angle-between-line-and-plane. Preparing for the Norwegian national exam.' },
  { icon:'⚡', topic:'Embedded Firmware', sub:'ESP32-S3 / RT1172',  progress:60,
    desc:'Low-level C/Rust firmware, CMSIS-DSP beat analysis, real-time scheduling, and multi-core MCU architecture for Y-Link hardware.' },
  { icon:'⬡',  topic:'Reinforcement Learning', sub:'AI / ML',       progress:45,
    desc:'RL fundamentals and Q-learning for future Y-Light Engine integration — phrase evaluator, driver selection, and show conductor layers.' },
  { icon:'⬛', topic:'PCB Design',         sub:'KiCad / JLCPCB',    progress:55,
    desc:'Schematic capture, layout, DRC, and prototype manufacturing. Currently on Rev_A of the Y1-Proto board with ESP32-S3 and MAX3485.' },
  { icon:'Aa', topic:'German & Spanish',  sub:'Languages',           progress:38,
    desc:'Actively studying both as part of a broader language interest alongside Norwegian and English.' },
  { icon:'◐',  topic:'Lucid Dreaming',    sub:'Practice',            progress:50,
    desc:'Building a consistent practice around dream journaling, reality checks, and WILD/MILD techniques.' },
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

function LearnCard({ item, index }: { item: typeof items[0]; index: number }) {
  const ref = useReveal()
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}
         className="learn-card bottom-bar reveal bg-bg-2 p-7 flex flex-col gap-[14px] hover:bg-bg-3 transition-colors duration-200"
         style={{ transitionDelay:`${index*60}ms` }}>
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-red-dim border border-red-border flex items-center justify-center
                        font-display font-black text-[17px] text-red flex-shrink-0">{item.icon}</div>
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
