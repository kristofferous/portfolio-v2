'use client'
import { useEffect, useState } from 'react'

const links = ['About','Experience','Skills','Projects','Open Source','Blog','Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (label: string) => {
    document.getElementById(label.toLowerCase().replace(/\s+/g,'-'))?.scrollIntoView({ behavior:'smooth' })
    setOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between
      transition-all duration-300
      ${scrolled
        ? 'px-[60px] py-[18px] bg-bg/92 border-b border-bdr backdrop-blur-[12px]'
        : 'px-[60px] py-7'
      } max-md:px-7`}
    >
      {/* gradient when not scrolled */}
      {!scrolled && (
        <div className="absolute inset-0 bg-gradient-to-b from-bg/95 to-transparent pointer-events-none -z-10" />
      )}

      <a href="#" className="font-display font-black text-xl uppercase tracking-[0.1em] text-fore">
        K<span className="text-red">.</span>nerskogen
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-9 list-none">
        {links.map(l => (
          <li key={l}>
            <button
              onClick={() => go(l)}
              className="font-mono text-10 uppercase tracking-[0.18em] text-grey
                         relative pb-1 transition-colors duration-200 hover:text-fore
                         after:content-[''] after:absolute after:bottom-0 after:left-0
                         after:h-px after:bg-red after:w-0 hover:after:w-full after:transition-all after:duration-300"
            >{l}</button>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-1 z-[101]"
        onClick={() => setOpen(o => !o)}
        aria-label="Menu"
      >
        <span className={`block w-[22px] h-px bg-fore transition-transform duration-250 ${open ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
        <span className={`block w-[22px] h-px bg-fore transition-transform duration-250 ${open ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 bg-bg flex flex-col items-center justify-center gap-8 z-[99] animate-fade-in">
          {links.map(l => (
            <button key={l} onClick={() => go(l)}
              className="font-display font-black text-[40px] uppercase tracking-[0.05em] text-fore hover:text-red transition-colors duration-200">
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
