interface StatProps {
  value: string
  label: string
}

export function Stat({ value, label }: StatProps) {
  return (
    <div className="bg-bg px-6 py-5 flex flex-col gap-1">
      <span
        className="font-display font-black text-fore leading-none"
        style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}
      >
        {value.split('').map((ch, i) =>
          /[0-9]/.test(ch) ? (
            <span key={i} style={{ color: '#E8192C' }}>{ch}</span>
          ) : (
            ch
          )
        )}
      </span>
      <span
        className="font-mono text-grey uppercase"
        style={{ fontSize: 9, letterSpacing: '0.15em' }}
      >
        {label}
      </span>
    </div>
  )
}

export function Stats({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="grid grid-cols-3 gap-px bg-bdr border border-bdr my-8"
    >
      {children}
    </div>
  )
}
