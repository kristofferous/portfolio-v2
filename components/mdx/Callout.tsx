interface CalloutProps {
  label?: string
  children: React.ReactNode
}

export default function Callout({ label = 'NOTE', children }: CalloutProps) {
  return (
    <div
      className="my-8 border-l-[3px] bg-bg-2 pl-6 pr-6 py-5"
      style={{ borderColor: '#E8192C' }}
    >
      <span
        className="font-mono text-red uppercase tracking-widest block mb-4"
        style={{ fontSize: 11, letterSpacing: '0.2em' }}
      >
        {label}
      </span>
      <div className="font-display text-fore/90" style={{ fontSize: 20, lineHeight: 1.6 }}>
        {children}
      </div>
    </div>
  )
}
