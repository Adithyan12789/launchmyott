import { useRef } from 'react'

const Mag = ({ children, as: Tag = 'button', className = '', href, onClick, type }) => {
  const r = useRef(null)
  const mv = e => {
    const el = r.current; if (!el) return
    const b = el.getBoundingClientRect()
    const x = e.clientX - b.left - b.width / 2
    const y = e.clientY - b.top - b.height / 2
    el.style.transform = `translate(${x * 0.16}px,${y * 0.16}px) scale(1.03)`
  }
  const ml = () => { if (r.current) r.current.style.transform = '' }
  const El = href ? 'a' : Tag
  return <El ref={r} className={className} href={href} onClick={onClick} type={type}
    onMouseMove={mv} onMouseLeave={ml}>{children}</El>
}

export default Mag
