import { useEffect, useRef, useState } from 'react'

const SR = ({ children, className = '', delay = 0 }) => {
  const r = useRef(null)
  const [v, sv] = useState(false)
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { sv(true); o.disconnect() } }, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' })
    if (r.current) o.observe(r.current)
    return () => o.disconnect()
  }, [])
  return <div ref={r} className={`srv ${v ? 'srv-in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>
}

export default SR
