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
            <>I started out writing <strong className="text-fore font-medium">Minecraft plugins in Java</strong> at 13, mostly learning by trial and error. Since then I&apos;ve moved into TypeScript and web development, and picked up Python along the way.</>,
            <>My main side project is <strong className="text-fore font-medium">Y-Link</strong>, a DMX lighting controller that reacts to music with beat detection and automatic scene changes. It&apos;s also how I got into embedded hardware and PCB design.</>,
            <>Y-Link is written in Rust, which I don&apos;t write by hand, so I build it with <strong className="text-fore font-medium">AI coding agents</strong>: I plan the architecture, break down the tasks, and review and test what they produce. In Java, TypeScript, and Python I write the code myself. I pick whichever approach fits the project.</>,
            <>I study Data Engineering (dataingeniør) at <strong className="text-fore font-medium">OsloMet</strong> and have worked part-time with IT and hardware at <strong className="text-fore font-medium">Axentra</strong>.</>,
          ].map((text, i) => (
            <p key={i} className="text-[15px] leading-[1.85] text-fore/60 font-light mb-6">{text}</p>
          ))}
          <blockquote className="border-l-2 border-red pl-6 mt-9 font-display font-semibold text-xl uppercase tracking-[0.02em] text-fore" style={{ lineHeight: 1.4 }}>
            &ldquo;Strong in Java, TypeScript &amp; Python. Comfortable coding with or without AI.&rdquo;
          </blockquote>
        </div>

        {/* Right */}
        <div ref={rightRef as React.RefObject<HTMLDivElement>} className="reveal">
          {/* Profile card */}
          <div className="border border-bdr bg-bg-2 p-8 hover:border-bdrhv transition-colors duration-200">
            <div className="flex items-center gap-[18px] mb-5">
              <div className="w-12 h-12 bg-red flex items-center justify-center font-display font-black text-2xl text-white flex-shrink-0">K</div>
              <div>
                <div className="font-display font-bold text-xl uppercase tracking-[0.05em]">Kristoffer</div>
                <div className="font-mono text-grey uppercase mt-1" style={{ fontSize: 10, letterSpacing: '0.15em' }}>Developer &amp; Student</div>
              </div>
            </div>
            <p className="text-[13px] text-fore/50 leading-[1.7] border-t border-bdr pt-4 mb-4">
              Oslo, Norway · 19 y/o<br />
              Data Engineering @ OsloMet
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

        </div>
      </div>
    </section>
  )
}
