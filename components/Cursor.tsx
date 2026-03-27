'use client'
import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    setActive(true)

    let mx = 0, my = 0, rx = 0, ry = 0
    let rafId: number
    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }
    document.addEventListener('mousemove', onMove)
    const tick = () => {
      if (dotRef.current)  { dotRef.current.style.left  = mx + 'px'; dotRef.current.style.top  = my + 'px' }
      rx += (mx - rx) * 0.13; ry += (my - ry) * 0.13
      if (ringRef.current) { ringRef.current.style.left = rx + 'px'; ringRef.current.style.top = ry + 'px' }
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    const grow   = () => {
      dotRef.current  && Object.assign(dotRef.current.style,  { width: '6px',  height: '6px' })
      ringRef.current && Object.assign(ringRef.current.style, { width: '56px', height: '56px', borderColor: 'rgba(232,25,44,0.7)' })
    }
    const shrink = () => {
      dotRef.current  && Object.assign(dotRef.current.style,  { width: '10px', height: '10px' })
      ringRef.current && Object.assign(ringRef.current.style, { width: '36px', height: '36px', borderColor: 'rgba(232,25,44,0.4)' })
    }
    const attach = () => document.querySelectorAll('a,button,.project-row,.skill-card,.stat-card,.os-card,.learn-card,.blog-row,.work-card').forEach(el => {
      el.addEventListener('mouseenter', grow); el.addEventListener('mouseleave', shrink)
    })
    attach()
    const mo = new MutationObserver(attach)
    mo.observe(document.body, { childList: true, subtree: true })
    return () => { document.removeEventListener('mousemove', onMove); cancelAnimationFrame(rafId); mo.disconnect() }
  }, [])

  if (!active) return null

  const base = 'fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full transition-[width,height] duration-200'
  return (
    <>
      <div ref={dotRef}  className={`${base} bg-red`}                          style={{ width: 10, height: 10 }} />
      <div ref={ringRef} className={`${base} border border-red/40 z-[9998]`}   style={{ width: 36, height: 36, transition: 'width .3s, height .3s, border-color .3s' }} />
    </>
  )
}
