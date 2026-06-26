import { useRef } from 'react'

const Card = ({ children, className = '' }) => {
  const r = useRef(null)
  const mv = e => {
    const el = r.current; if (!el) return
    const b = el.getBoundingClientRect()
    const x = e.clientX - b.left, y = e.clientY - b.top
    const rx = ((y - b.height / 2) / b.height) * -6
    const ry = ((x - b.width / 2) / b.width) * 6
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.01)`
    el.style.setProperty('--sx', `${x}px`)
    el.style.setProperty('--sy', `${y}px`)
  }
  const ml = () => { if (r.current) r.current.style.transform = '' }
  return (
    <div ref={r} className={`sc ${className}`} onMouseMove={mv} onMouseLeave={ml}>
      <div className="sc-spot" />{children}
    </div>
  )
}

export default Card
