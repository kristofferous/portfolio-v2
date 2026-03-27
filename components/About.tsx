'use client'
import { useReveal } from '@/hooks/useReveal'

export default function About() {
  const titleRef = useReveal()
  const leftRef  = useReveal()
  const rightRef = useReveal()

  return (
    <section className="py-[120px] px-[60px] bg-bg max-md:py-20 max-md:px-7" id="about">
      <div className="section-label">Who I Am</div>
      <h2 ref={titleRef as React.RefObject<HTMLHeadingElement>}
          className="section-title reveal mb-16">
        FROM PLUGINS<br />
        <span className="outline">TO PRODUCTS.</span>
      </h2>

      <div className="grid grid-cols-2 gap-[80px] items-start max-md:grid-cols-1 max-md:gap-12">

        {/* Left */}
        <div ref={leftRef as React.RefObject<HTMLDivElement>} className="reveal">
          {[
            <>Started building <strong className="text-fore font-medium">Minecraft plugins in Java</strong> at 13 — learned everything the hard way through trial, error, and too many Stack Overflow tabs. Now I build real products that run in real venues.</>,
            <>My flagship is <strong className="text-fore font-medium">Y-Link</strong>: an AI-driven DMX lighting ecosystem that turns music into professional light shows in real time. Beat detection, scene evaluation, moving head choreography — all autonomous.</>,
            <>Alongside that I do IT and hardware work at <strong className="text-fore font-medium">Axentra</strong>, and I&apos;m deepening expertise in embedded firmware, PCB design, and ML systems. Currently preparing for a 5-year university program in maths, algorithms, and physics.</>,
          ].map((text, i) => (
            <p key={i} className="text-[15px] leading-[1.85] text-fore/60 font-light mb-6">{text}</p>
          ))}
          <blockquote className="border-l-2 border-red pl-6 mt-9 font-display font-semibold text-xl uppercase tracking-[0.02em] text-fore" style={{ lineHeight: 1.4 }}>
            &ldquo;Strong in Rust &amp; JavaScript. Expanding into embedded, AI/ML, and beyond.&rdquo;
          </blockquote>
        </div>

        {/* Right */}
        <div ref={rightRef as React.RefObject<HTMLDivElement>} className="reveal">
          {/* Profile card */}
          <div className="border border-bdr bg-bg-2 p-8 mb-5 hover:border-bdrhv transition-colors duration-200">
            <div className="flex items-center gap-[18px] mb-5">
              <div className="w-12 h-12 bg-red flex items-center justify-center font-display font-black text-2xl text-white flex-shrink-0">K</div>
              <div>
                <div className="font-display font-bold text-xl uppercase tracking-[0.05em]">Kristoffer</div>
                <div className="font-mono text-grey uppercase mt-1" style={{ fontSize: 10, letterSpacing: '0.15em' }}>Founder &amp; Developer</div>
              </div>
            </div>
            <p className="text-[13px] text-fore/50 leading-[1.7] border-t border-bdr pt-4 mb-4">
              Kristiansand, Norway · 19 y/o<br />
              Founder &amp; building Y-Link
            </p>
            <div className="flex gap-5">
              {['https://nerskogen.com','https://y-link.no'].map(url => (
                <a key={url} href={url} target="_blank" rel="noreferrer"
                   className="font-mono text-red uppercase hover:opacity-70 transition-opacity duration-200"
                   style={{ fontSize: 10, letterSpacing: '0.12em' }}>
                  {url.replace('https://','')}
                </a>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-px bg-bdr border border-bdr">
            {[
              { num: '6+', label: 'Years Coding'   },
              { num: '0→1', label: 'Product Stage'  },
              { num: '2021', label: 'First Commit'  },
              { num: '∞',  label: 'DMX Channels'   },
            ].map(s => (
              <div key={s.label} className="stat-card bg-bg-2 p-6 flex flex-col gap-[6px] hover:bg-bg-3 transition-colors duration-200">
                <span className="font-display font-black text-red" style={{ fontSize: 44, lineHeight: 1, letterSpacing: '-0.02em' }}>{s.num}</span>
                <span className="font-mono text-grey uppercase" style={{ fontSize: 9, letterSpacing: '0.2em' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
