'use client'
import { useReveal } from '@/hooks/useReveal'

const skills = [
  { name:'Java',       type:'Language',            level:80 },
  { name:'TypeScript', type:'Language',            level:80 },
  { name:'Python',     type:'Language',            level:65 },
  { name:'React',      type:'UI',                  level:75 },
  { name:'Next.js',    type:'Web Framework',       level:75 },
  { name:'AI Agents',  type:'Agentic Development', level:80 },
  { name:'Git',        type:'Version Control',     level:75 },
  { name:'SQL',        type:'Databases',           level:60 },
  { name:'Supabase',   type:'Backend / DB',        level:65 },
  { name:'Tauri',      type:'Desktop Apps',        level:50 },
  { name:'Three.js',   type:'3D / WebGL',          level:45 },
  { name:'ESP32',      type:'Embedded / MCU',      level:45 },
  { name:'PCB Design', type:'Hardware',            level:40 },
  { name:'AI / ML',    type:'Inference & RL',      level:30 },
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
