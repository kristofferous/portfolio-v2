export default function Footer() {
  return (
    <footer className="border-t border-bdr px-[60px] py-7 flex justify-between items-center bg-bg max-md:px-7">
      <span className="font-mono text-grey uppercase" style={{ fontSize:10, letterSpacing:'0.15em' }}>
        &copy; {new Date().getFullYear()} Kristoffer &middot; nerskogen.com
      </span>
      <span className="font-display font-bold uppercase text-fore/[0.18]" style={{ fontSize:13, letterSpacing:'0.1em' }}>
        Oslo, Norway
      </span>
    </footer>
  )
}
