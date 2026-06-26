import { useEffect, useRef, useState } from 'react'

const Counter = ({ target, dur = 2000 }) => {
  const r = useRef(null)
  const [n, sn] = useState(0)
  const done = useRef(false)
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || done.current) return
      done.current = true
      const num = parseFloat(target.replace(/[^0-9.]/g, ''))
      const t0 = performance.now()
      const tick = now => {
        const p = Math.min((now - t0) / dur, 1)
        sn(Math.floor((1 - Math.pow(1 - p, 3)) * num))
        if (p < 1) requestAnimationFrame(tick); else sn(num)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.5 })
    if (r.current) o.observe(r.current)
    return () => o.disconnect()
  }, [target, dur])
  const plus = target.includes('+'), pct = target.includes('%'), dollar = target.startsWith('$')
  return <span ref={r}>{dollar ? '$' : ''}{n}{pct ? '%' : ''}{plus ? '+' : ''}</span>
}

export default Counter
