'use client'
import { useReveal } from '@/hooks/useReveal'

export default function Contact() {
  const headlineRef = useReveal()
  return (
    <section className="py-[140px] px-[60px] bg-bg-2 text-center relative overflow-hidden max-md:py-24 max-md:px-7" id="contact">
      <div className="absolute inset-0 pointer-events-none"
           style={{ background:'radial-gradient(ellipse 60% 70% at 50% 65%, rgba(232,25,44,0.06) 0%, transparent 70%)' }} />
      <div className="section-label justify-center before:hidden">Get In Touch</div>
      <h2 ref={headlineRef as React.RefObject<HTMLHeadingElement>}
          className="reveal font-display font-black uppercase mt-6 mb-13"
          style={{ fontSize:'clamp(52px,9vw,120px)', lineHeight:0.9, letterSpacing:'-0.01em', marginBottom:52 }}>
        LET&apos;S BUILD<br />
        <span style={{ WebkitTextStroke:'1px rgba(240,237,232,0.2)', color:'transparent' }}>SOMETHING</span><br />
        TOGETHER.
      </h2>
      <a href="mailto:kristoffer@nerskogen.com" className="btn-red mx-auto">
        kristoffer@nerskogen.com
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
      <div className="flex items-center justify-center gap-5 flex-wrap mt-11">
        {[
          { href:'https://nerskogen.com',  label:'nerskogen.com'   },
          null,
          { href:'https://y-link.no',      label:'y-link.no'       },
          null,
          { href:'https://github.com',     label:'GitHub'          },
          null,
          { href:'tel:+4796632121',        label:'+47 966 32 121'  },
        ].map((item, i) =>
          item === null
            ? <span key={i} className="w-1 h-1 bg-bdr rounded-full" />
            : <a key={i} href={item.href} target="_blank" rel="noreferrer"
                 className="font-mono text-grey uppercase hover:text-fore border-b border-transparent
                            hover:border-bdr transition-all duration-200 py-2"
                 style={{ fontSize:11, letterSpacing:'0.18em' }}>{item.label}</a>
        )}
      </div>
    </section>
  )
}
