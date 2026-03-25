'use client'
import { useReveal } from '@/hooks/useReveal'

const skills = [
  { name:'Rust',       type:'Systems / Firmware', level:85 },
  { name:'TypeScript', type:'Language',            level:92 },
  { name:'Next.js',    type:'Web Framework',       level:88 },
  { name:'React',      type:'UI',                  level:90 },
  { name:'Tauri',      type:'Desktop Apps',        level:78 },
  { name:'ESP32',      type:'Embedded / MCU',      level:70 },
  { name:'PCB Design', type:'Hardware',            level:55 },
  { name:'Three.js',   type:'3D / WebGL',          level:72 },
  { name:'AI / ML',    type:'Inference & RL',      level:65 },
  { name:'DMX / sACN', type:'AV Protocols',        level:88 },
  { name:'Arch Linux', type:'OS / DevOps',         level:80 },
  { name:'Supabase',   type:'Backend / DB',        level:82 },
]

export default function Skills() {
  const titleRef = useReveal()
  const gridRef  = useReveal()
  return (
    <section className="py-[120px] px-[60px] bg-bg max-md:py-20 max-md:px-7" id="skills">
      <div className="section-label">Toolbox</div>
      <h2 ref={titleRef as React.RefObject<HTMLHeadingElement>} className="section-title reveal mb-16">
        WHAT I<br /><span className="outline">WORK WITH.</span>
      </h2>
      <div ref={gridRef as React.RefObject<HTMLDivElement>}
           className="reveal grid gap-px bg-bdr border border-bdr"
           style={{ gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))' }}>
        {skills.map((s, i) => (
          <div key={s.name}
               className="skill-card top-bar bg-bg p-7 flex flex-col gap-[10px] hover:bg-bg-2 transition-colors duration-200"
               style={{ transitionDelay:`${i*35}ms` }}>
            <div className="flex items-baseline justify-between">
              <span className="font-display font-bold text-xl uppercase tracking-[0.04em]">{s.name}</span>
              <span className="font-mono text-grey" style={{ fontSize:10, letterSpacing:'0.1em' }}>{s.level}%</span>
            </div>
            <span className="font-mono text-grey uppercase" style={{ fontSize:9, letterSpacing:'0.18em' }}>{s.type}</span>
            <div className="h-px bg-bdr mt-[6px] overflow-hidden">
              <div className="h-full bg-red origin-left transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 scale-x-0 group-hover:scale-x-100"
                   style={{ width:`${s.level}%`, transform:'scaleX(0)',
                     /* trigger on parent hover via CSS */ }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
