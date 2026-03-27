'use client'
import { useRef, useEffect } from 'react'

const LOGO = `

                   %%%%%%%%%%%%%%%%%%%%%%%                      %%%%%%%%%%%%%%%%%
                   %%%%%%%%%%%%%%%%%%%%%%%.                   %%%%%%%%%%%%%%%%%%%
                   %%%%%%%%%%%%%%%%%%%%%%%.                 *%%%%%%%%%%%%%%%%%%%%
                   %%%%%%%%%%%%%%%%%%%%%%%.               =%%%%%%%%%%%%%%%%%%%%%%
                   %%%%%%*         +%%%%%%.              %%%%%%%%%%       %%%%%%%
                   %%%%%%*         +%%%%%%.           .%%%%%%%%%%         %%%%%%%
                   %%%%%%*         +%%%%%%.          %%%%%%%%%%           %%%%%%%
                   %%%%%%*         +%%%%%%.        %%%%%%%%%%             %%%%%%%
                   %%%%%%*         +%%%%%%.      %%%%%%%%%%.              %%%%%%%
                   %%%%%%*         +%%%%%%     #%%%%%%%%%:                %%%%%%%
                   %%%%%%#         +%%%%     -%%%%%%%%%*                  %%%%%%%
                   %%%%%%%         +%%     .%%%%%%%%%#                    %%%%%%%
                   %%%%%%%         +      %%%%%%%%%%                     :%%%%%%%
                   *%%%%%%%             %%%%%%%%%%                       %%%%%%%
                    %%%%%%%%          %%%%%%%%%%      %%%%%%            %%%%%%%%
                     %%%%%%%%.      %%%%%%%%%%      %%%%%%%%%%%%:     +%%%%%%%%
                      %%%%%%.     %%%%%%%%%%      %%%%%%%%%%%%%%%%%-:%%%%%%%%%
                       %%%-     %%%%%%%%%%      ...:=#%%%%%%%%%%%%%%%%%%%%%%%
                        .     %%%%%%%%%%                   =%%%%%%%%%%%%%%%.
                            %%%%%%%%%%                         %%%%%%%%%%%
                          #%%%%%%%%%                             .%%%%%%%%%
                        =%%%%%%%%%.     %            -%%%%%%%      .%%%%%%%%+
                       %%%%%%%%%:     %%%%%     #%%%%%%%%%%%%%%-     #%%%%%%%%
                     *%%%%%%%%-     #%%%%%%%%%%%%%%%%%%%%%%%%%%%#      %%%%%%%%
                    #%%%%%%%#      #%%%%%%%%%%%%%%%%%%%%%%%#            %%%%%%%*
                    %%%%%%%        #%%%%%%%%%%%%%%%%%*                   %%%%%%%
                   %%%%%%%.        #%%%%%%%%%%%%%%                       +%%%%%%%
                   %%%%%%%         #%%%%%%%%%%%%                          %%%%%%%
                   %%%%%%*         #%%%%%%%%%%.     %%%                   %%%%%%%
                   %%%%%%+         #%%%%%%%%.     %%%%%%%                 %%%%%%%
                   %%%%%%+         #%%%%%%*     .%%%%%%%%%%               %%%%%%%
                   %%%%%%+         #%%%%%%.       =%%%%%%%%%%             %%%%%%%
                   %%%%%%+         #%%%%%%.         +%%%%%%%%%#           %%%%%%%
                   %%%%%%+         #%%%%%%.           #%%%%%%%%%*         %%%%%%%
                   %%%%%%+         #%%%%%%.             %%%%%%%%%%=       %%%%%%%
                   %%%%%%%%%%%%%%%%%%%%%%%.               %%%%%%%%%%%%%%%%%%%%%%%
                   %%%%%%%%%%%%%%%%%%%%%%%.                 %%%%%%%%%%%%%%%%%%%%%
                   %%%%%%%%%%%%%%%%%%%%%%%.                   %%%%%%%%%%%%%%%%%%%
                   %%%%%%%%%%%%%%%%%%%%%%%                      %%%%%%%%%%%%%%%%%
                                                                                  `

const MAX_DIST = 160
const MAX_FORCE = 18
const EASE = 0.1

interface Glyph { ch: string; bx: number; by: number; dx: number; dy: number }

export default function AsciiLogo() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const canvas = canvasRef.current
    if (!wrap || !canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let rafId = 0
    let unmounted = false
    let ready = false
    let mx = -9999
    let my = -9999
    let glyphs: Glyph[] = []
    let W = 0
    let H = 0
    let charW = 0
    let fontSize = 0

    const tick = () => {
      const rect = canvas.getBoundingClientRect()
      const rx = mx - rect.left
      const ry = my - rect.top

      ctx.clearRect(0, 0, W, H)

      let anyActive = false
      for (const g of glyphs) {
        const ddx = g.bx + charW * 0.5 - rx
        const ddy = g.by - fontSize * 0.5 - ry
        const distSq = ddx * ddx + ddy * ddy

        let tx = 0
        let ty = 0
        if (distSq < MAX_DIST * MAX_DIST) {
          const dist = Math.sqrt(distSq)
          const f = (1 - dist / MAX_DIST) * MAX_FORCE
          tx = (ddx / dist) * f
          ty = (ddy / dist) * f
        }

        g.dx += (tx - g.dx) * EASE
        g.dy += (ty - g.dy) * EASE

        if (Math.abs(g.dx) > 0.05 || Math.abs(g.dy) > 0.05 || tx !== 0) anyActive = true
        ctx.fillText(g.ch, g.bx + g.dx, g.by + g.dy)
      }

      // Pause RAF when everything has settled; onMouseMove restarts it
      rafId = anyActive ? requestAnimationFrame(tick) : 0
    }

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      if (!rafId && ready) rafId = requestAnimationFrame(tick)
    }

    const setup = () => {
      if (unmounted) return

      const cs = getComputedStyle(wrap)
      fontSize = parseFloat(cs.fontSize)
      const fontFamily = cs.fontFamily

      ctx.font = `${fontSize}px ${fontFamily}`
      charW = ctx.measureText('X').width
      const lineH = fontSize * 1.2

      const lines = LOGO.split('\n')
      for (let row = 0; row < lines.length; row++) {
        for (let col = 0; col < lines[row].length; col++) {
          const ch = lines[row][col]
          if (ch !== ' ') {
            glyphs.push({ ch, bx: col * charW, by: row * lineH + fontSize, dx: 0, dy: 0 })
          }
        }
      }

      const maxLen = Math.max(...lines.map(l => l.length))
      W = maxLen * charW
      H = lines.length * lineH

      const dpr = window.devicePixelRatio || 1
      canvas.width = Math.ceil(W * dpr)
      canvas.height = Math.ceil(H * dpr)
      canvas.style.width = `${W}px`
      canvas.style.height = `${H}px`
      ctx.scale(dpr, dpr)
      ctx.font = `${fontSize}px ${fontFamily}`
      ctx.fillStyle = 'rgb(232,25,44)'
      ctx.textBaseline = 'alphabetic'

      // Draw static frame immediately
      for (const g of glyphs) ctx.fillText(g.ch, g.bx, g.by)

      ready = true
    }

    document.fonts.ready.then(setup)
    window.addEventListener('mousemove', onMouseMove)

    return () => {
      unmounted = true
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <div
      ref={wrapRef}
      className="font-mono hidden lg:block select-none pointer-events-none"
      style={{
        fontSize: 'clamp(6px,0.55vw,11px)',
        opacity: 0,
        animation: 'fadeIn 1.2s ease 0.7s forwards',
      }}
    >
      <canvas ref={canvasRef} style={{ display: 'block' }} />
    </div>
  )
}
