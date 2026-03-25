const items = [
  'Rust','TypeScript','Next.js','Tauri','ESP32-S3','Three.js',
  'Supabase','ALPINE','sACN / DMX','PCB Design','Arch Linux','AI / ML',
]

export default function TechBar() {
  const doubled = [...items, ...items]
  return (
    <div className="border-t border-b border-bdr bg-bg-2 overflow-hidden py-[18px]">
      <div className="flex items-center w-max animate-marquee hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-3 px-8 font-display font-bold uppercase text-fore/30 hover:text-fore/70 transition-colors duration-200 whitespace-nowrap"
                style={{ fontSize: 13, letterSpacing: '0.14em' }}>
            <span className="w-1 h-1 bg-red rounded-full opacity-50 flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
