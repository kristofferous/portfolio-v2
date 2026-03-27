import AsciiLogo from './AsciiLogo'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end relative overflow-hidden px-[60px] max-md:px-7">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-bg" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 65% 60% at 85% 35%, rgba(232,25,44,0.07) 0%, transparent 70%)' }} />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 40% 50% at 10% 90%, rgba(232,25,44,0.04) 0%, transparent 60%)' }} />

      <div className="relative z-10 pt-36">
        <div className="flex items-start gap-12">
          <div className="flex-1">
            {/* Eyebrow */}
            <p className={` font-mono uppercase text-red flex items-center gap-4 mb-7`}
               style={{ fontSize: 11, letterSpacing: '0.22em', opacity: 0, animation: 'fadeUp 0.8s ease 0.15s forwards' }}>
              <span className="block w-10 h-px bg-red flex-shrink-0" />
              Based in Kristiansand, Norway &mdash; 19 y/o Founder &amp; Developer
            </p>

            {/* Headline */}
            <h1 className="font-display font-black uppercase flex flex-col"
                style={{ fontSize: 'clamp(76px,12vw,170px)', lineHeight: 0.88, letterSpacing: '-0.01em',
                         opacity: 0, animation: 'fadeUp 0.95s ease 0.3s forwards' }}>
              <span>BUILDING</span>
              <span>THINGS</span>
              <span style={{ WebkitTextStroke: '1.5px rgba(240,237,232,0.5)', color: 'transparent' }}>THAT</span>
              <span className="text-red">MATTER.</span>
            </h1>
          </div>

          {/* ASCII logo */}
          <div className="hidden lg:block flex-shrink-0 ml-auto mr-24 mt-10">
            <AsciiLogo />
          </div>
        </div>

        {/* Sub row */}
        <div className="mt-12 flex items-end justify-between gap-10 max-md:flex-col max-md:items-start"
             style={{ opacity: 0, animation: 'fadeUp 0.8s ease 0.55s forwards' }}>
          <p className="max-w-[480px] text-[15px] leading-[1.8] text-fore/55 font-light">
            I&apos;m <strong className="text-fore font-medium">Kristoffer</strong> — a developer and founder pushing the limits of what software can do.
            From <strong className="text-fore font-medium">AI-driven lighting ecosystems</strong> to embedded systems and PCB design.
            Started coding at 13. Haven&apos;t stopped since.
          </p>
          <a href="#projects" className="btn-red flex-shrink-0">
            See My Work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute right-[60px] top-1/2 -translate-y-1/2 rotate-90 font-mono uppercase text-grey flex items-center gap-4 max-md:hidden"
           style={{ fontSize: 9, letterSpacing: '0.3em', opacity: 0, animation: 'fadeIn 1.2s ease 1.1s forwards' }}>
        Scroll
        <span className="block w-12 h-px bg-bdr" />
      </div>

      {/* Bottom stat bar */}
      <div className="relative z-10 grid grid-template-cols-4 border-t border-bdr mt-16 max-md:grid-cols-2"
           style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', opacity: 0, animation: 'fadeIn 1s ease 0.9s forwards' }}>
        {[
          { num: '6+',   label: 'Years Coding'    },
          { num: '0→1',  label: 'Product Stage'     },
          { num: 'Rust', label: 'Language of 2025' },
          { num: '∞',   label: 'DMX Channels'     },
        ].map((s, i) => (
          <div key={s.label}
               className={`stat-card flex flex-col gap-[6px] py-7 hover:bg-bg-2 transition-colors duration-200
                           ${i < 3 ? 'border-r border-bdr' : ''} max-md:${i===1?'border-r-0':''}`}>
            <span className="font-display font-black text-fore ml-5" style={{ fontSize: 36, lineHeight: 1, letterSpacing: '-0.02em' }}>{s.num}</span>
            <span className="font-mono text-grey uppercase ml-5" style={{ fontSize: 9, letterSpacing: '0.2em' }}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
