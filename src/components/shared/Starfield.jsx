import { useEffect, useRef } from 'react'

const Starfield = () => {
  const canvasRef = useRef(null)
  useEffect(() => {
    const c = canvasRef.current
    if (!c) return
    const ctx = c.getContext('2d')
    let id, w, h, stars = []
    const resize = () => {
      w = c.width = c.offsetWidth
      h = c.height = c.offsetHeight
      stars = Array.from({ length: 90 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random(),
        speed: Math.random() * 0.015 + 0.004
      }))
    }
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      stars.forEach(s => {
        s.alpha += s.speed
        if (s.alpha > 1 || s.alpha < 0) s.speed = -s.speed
        ctx.fillStyle = `rgba(99,102,241,${Math.max(0, Math.min(1, s.alpha)) * 0.35})`
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2)
        ctx.fill()
      })
      id = requestAnimationFrame(draw)
    }
    resize(); draw()
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(id); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={canvasRef} className="pg-canvas" />
}

export default Starfield
