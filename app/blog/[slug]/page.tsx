import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

const posts: Record<string, {
  title: string
  date: string
  readTime: string
  tags: string[]
  intro: string
  sections: { heading: string; body: string }[]
}> = {
  'building-ai-driven-dmx-lighting-engine-rust': {
    title: 'Building an AI-Driven DMX Lighting Engine in Rust',
    date: 'Mar 2026',
    readTime: '12 min',
    tags: ['Rust', 'AI', 'DMX'],
    intro: 'Y-Light Engine is the autonomous lighting brain behind Y-Link Studio. This post walks through the ALPINE execution layer, how beat analysis drives real-time DMX output, and the architectural decisions that make it all hold together under load.',
    sections: [
      {
        heading: 'The Problem Space',
        body: 'Running a live light show means latency budgets measured in milliseconds. A traditional scripted approach falls apart the moment a DJ drops an unscheduled track. The goal was a system that could evaluate the current musical context and make fixture decisions faster than a human operator — without ever feeling robotic.',
      },
      {
        heading: 'ALPINE: The Execution Layer',
        body: 'ALPINE (Adaptive Lighting Pipeline for Intelligent Node Execution) is a staged evaluation engine. Each frame, it receives beat phase, energy bands, and track metadata, then routes them through a priority-ordered rule set. Rules are compiled from a TOML scene definition at startup and evaluated in O(n) time against the current state vector.',
      },
      {
        heading: 'Beat Detection via CMSIS-DSP',
        body: 'Rather than running a full onset detection pipeline, Y-Light Engine consumes beat timestamps streamed from Y-Link Studio over a local IPC channel. The firmware side uses CMSIS-DSP FFT on the ESP32-S3 to compute sub-band energy, which feeds into a peak-picker tuned for BPM ranges from 60–200.',
      },
      {
        heading: 'DMX Output & Frame Pacing',
        body: 'DMX512 runs at 44 fps maximum. A dedicated output thread owns the serial port and paces frames with a spin-sleep loop calibrated to the platform timer resolution. The main engine thread double-buffers universe state so the output thread never blocks on rule evaluation.',
      },
      {
        heading: 'What\'s Next',
        body: 'The next milestone is a reinforcement-learning layer that learns venue-specific scene preferences from operator overrides. Currently prototyping the reward model — more on that in a future post.',
      },
    ],
  },
  'music-to-motion-track-identity-real-time': {
    title: 'Music-to-Motion: Resolving Track Identity in Real Time',
    date: 'Feb 2026',
    readTime: '9 min',
    tags: ['Architecture', 'Audio', 'TypeScript'],
    intro: 'Knowing what track is playing is table stakes for any smart lighting system. This post covers the MTM (Music-to-Motion) pipeline in Y-Link Studio — a multi-layer approach that starts with OS metadata and ends with loopback audio fingerprinting when everything else fails.',
    sections: [
      {
        heading: 'Layer 1: OS Media Session APIs',
        body: 'On macOS and Windows, most media players expose now-playing metadata through system APIs (SMTC on Windows, MediaRemote on macOS). MTM subscribes to these events first — they are essentially free, sub-millisecond, and accurate for mainstream players.',
      },
      {
        heading: 'Layer 2: MusicBrainz Lookup',
        body: 'When the OS returns a title and artist, MTM fires an async MusicBrainz query to enrich the result with ISRC, duration, BPM (where available), and genre tags. Results are cached by MBId to avoid redundant requests across a session.',
      },
      {
        heading: 'Layer 3: AcoustID Fingerprinting',
        body: 'When OS metadata is absent or unreliable (common with browser-based players), MTM captures a short PCM clip from the default audio output and runs it through the Chromaprint library to generate an AcoustID fingerprint. A lookup against the AcoustID API resolves the MBId and we re-enter the enrichment path.',
      },
      {
        heading: 'Layer 4: Loopback as Last Resort',
        body: 'If all else fails — no OS metadata, fingerprint lookup fails — MTM parks in loopback mode, still extracting energy bands and BPM from raw PCM. The lighting engine degrades gracefully to genre-unaware scenes driven purely by beat phase.',
      },
      {
        heading: 'Latency Budget',
        body: 'End-to-end from track change to resolved identity: ~80ms on the OS metadata path, ~1.2s on the AcoustID path. The lighting engine starts reacting to the new BPM immediately and applies scene metadata as soon as it arrives.',
      },
    ],
  },
  'first-pcb-lessons-y1-proto-rev-a': {
    title: 'My First PCB: Lessons from the Y1-Proto-Rev_A',
    date: 'Jan 2026',
    readTime: '8 min',
    tags: ['PCB', 'Hardware', 'ESP32'],
    intro: 'After months of breadboard prototyping, I committed to a custom PCB for the Y-Link hardware node. This is a post-mortem on the Rev_A board — what worked, what didn\'t, and what I\'d do differently on Rev_B.',
    sections: [
      {
        heading: 'The Board in Brief',
        body: 'Y1-Proto-Rev_A is a single-layer 100×80mm board built around the ESP32-S3-WROOM-1 module and a MAX3485 RS-485 transceiver for DMX output. It also breaks out I²C, UART, and a USB-C port for flashing and power. Manufactured by JLCPCB with HASL finish, five units ordered.',
      },
      {
        heading: 'KiCad Footprint Lessons',
        body: 'My first footprint mistake was on the USB-C connector — I used a through-hole footprint for a surface-mount part. Caught it in DRC before ordering, but it cost several hours of schematic rework. Always verify mechanical drawings against the actual part datasheet, not just the default library entry.',
      },
      {
        heading: 'The MAX3485 Termination Problem',
        body: 'DMX512 requires 120Ω termination at the end of the line. I placed the termination resistor on the board, which is correct for the last node but wrong for intermediate nodes. Rev_B will move termination to an external jumper or connector.',
      },
      {
        heading: 'What Actually Worked',
        body: 'Power delivery is clean. The 3.3V LDO (AMS1117-3.3) stays well within thermal limits at full load, and the decoupling layout around the ESP32 keeps the RF section happy. UART-to-USB via CH340 works first try on both macOS and Windows.',
      },
      {
        heading: 'Rev_B Wishlist',
        body: 'Jumper-selectable termination, a polarity protection MOSFET on the input rail, a reset button, and a proper 5-pin XLR footprint instead of the screw terminal I bodged in for Rev_A.',
      },
    ],
  },
  'why-tauri-over-electron-y-link-studio': {
    title: 'Why I Chose Tauri Over Electron for Y-Link Studio',
    date: 'Dec 2025',
    readTime: '6 min',
    tags: ['Tauri', 'Rust', 'Desktop'],
    intro: 'Y-Link Studio ships as a native desktop app. I started with Electron because it\'s the obvious choice, then switched to Tauri. This is a practical account of why — not a benchmark post, but a real-world shipping story.',
    sections: [
      {
        heading: 'The Electron Version',
        body: 'The Electron prototype worked fine. IPC was straightforward, the UI layer was React, and the Node.js backend handled serial port communication via the serialport package. The problem became apparent when running alongside a DAW: Electron idling consumed ~180MB RSS and ~4% CPU on an M2 MacBook Air. That\'s before the app does anything.',
      },
      {
        heading: 'Why Tauri Made Sense',
        body: 'Tauri uses the OS webview (WebKit on macOS, WebView2 on Windows) and a Rust backend. The immediate win is binary size: the Tauri build of Y-Link Studio is 8MB versus 140MB for Electron. More importantly, idle RSS drops to ~35MB. For a tool running alongside resource-hungry audio software, that matters.',
      },
      {
        heading: 'The Rust Backend Story',
        body: 'The Y-Link Studio backend manages serial port I/O, IPC to the Y-Light Engine process, and the MTM audio pipeline. All of this is natural Rust: tokio for async, serialport-rs for DMX output, and Tauri\'s command system for bridging to the frontend. The type safety across the IPC boundary (via serde) catches bugs that TypeScript-to-Node IPC would let through silently.',
      },
      {
        heading: 'What Tauri Still Gets Wrong',
        body: 'WebKit on macOS and WebView2 on Windows render differently — mostly in font rendering and flex edge cases. I maintain a small browser-compat CSS layer. The Tauri plugin ecosystem is also thinner than Electron\'s; I had to write my own system audio loopback plugin for the MTM fingerprinting path.',
      },
      {
        heading: 'Would I Choose It Again?',
        body: 'Yes, for this use case. If I were building a tool for a non-technical audience where installer size and startup UX matter most, Tauri wins easily. For an internal dev tool with a small team, Electron\'s larger ecosystem might tip the balance the other way.',
      },
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = posts[slug]
  if (!post) return {}
  return { title: `${post.title} — Kristoffer`, description: post.intro }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts[slug]
  if (!post) notFound()

  return (
    <main className="min-h-screen bg-bg text-fore">
      {/* Header */}
      <div className="px-[60px] pt-[80px] pb-[60px] border-b border-bdr max-md:px-7 max-md:pt-16">
        <Link href="/blog" className="inline-flex items-center gap-3 font-mono text-grey uppercase mb-10
                                       hover:text-fore transition-colors duration-200"
              style={{ fontSize: 11, letterSpacing: '0.18em' }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M12 7H2M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          All posts
        </Link>

        <div className="max-w-[760px]">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-grey uppercase" style={{ fontSize: 10, letterSpacing: '0.18em' }}>{post.date}</span>
            <span className="text-bdr">·</span>
            <span className="font-mono text-fore/30 uppercase" style={{ fontSize: 10, letterSpacing: '0.12em' }}>{post.readTime} read</span>
          </div>
          <h1 className="font-display font-black uppercase leading-none tracking-tight mb-6"
              style={{ fontSize: 'clamp(36px, 6vw, 72px)', lineHeight: 0.92 }}>
            {post.title}
          </h1>
          <div className="flex gap-2 flex-wrap">
            {post.tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="px-[60px] py-[80px] max-md:px-7 max-md:py-12">
        <div className="max-w-[760px]">
          {/* Intro */}
          <p className="text-[17px] leading-[1.8] text-fore/70 font-light mb-14 border-l-2 border-red pl-6">
            {post.intro}
          </p>

          {/* Sections */}
          <div className="flex flex-col gap-12">
            {post.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="font-display font-bold uppercase tracking-[0.04em] mb-3"
                    style={{ fontSize: 'clamp(18px, 2.5vw, 24px)' }}>
                  {s.heading}
                </h2>
                <p className="text-[14px] leading-[1.9] text-fore/55 font-light">{s.body}</p>
              </div>
            ))}
          </div>

          {/* Footer nav */}
          <div className="mt-20 pt-8 border-t border-bdr flex justify-between items-center">
            <Link href="/blog" className="inline-flex items-center gap-3 font-mono text-grey uppercase
                                           hover:text-fore transition-colors duration-200"
                  style={{ fontSize: 11, letterSpacing: '0.18em' }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M12 7H2M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              All posts
            </Link>
            <Link href="/" className="inline-flex items-center gap-3 font-mono text-grey uppercase
                                       hover:text-fore transition-colors duration-200"
                  style={{ fontSize: 11, letterSpacing: '0.18em' }}>
              Home
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
