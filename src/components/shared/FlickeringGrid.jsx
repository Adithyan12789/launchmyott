import { useEffect, useRef } from 'react'

const FlickeringGrid = () => {
  const canvasRef = useRef(null)
  useEffect(() => {
    const c = canvasRef.current
    if (!c) return
    const ctx = c.getContext('2d')
    let id, w, h, dots = []
    const gap = 24
    const resize = () => {
      w = c.width = c.offsetWidth
      h = c.height = c.offsetHeight
      const cols = Math.ceil(w / gap)
      const rows = Math.ceil(h / gap)
      dots = Array.from({ length: cols * rows }, (_, idx) => ({
        x: (idx % cols) * gap + gap / 2,
        y: Math.floor(idx / cols) * gap + gap / 2,
        alpha: Math.random() * 0.3 + 0.05,
        speed: (Math.random() * 0.015 + 0.005) * (Math.random() < 0.5 ? 1 : -1)
      }))
    }
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      dots.forEach(d => {
        d.alpha += d.speed
        if (d.alpha > 0.4 || d.alpha < 0.05) d.speed = -d.speed
        ctx.fillStyle = `rgba(99,102,241,${Math.max(0.05, Math.min(0.4, d.alpha))})`
        ctx.fillRect(d.x - 1, d.y - 1, 2, 2)
      })
      id = requestAnimationFrame(draw)
    }
    resize(); draw()
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(id); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={canvasRef} className="pg-canvas" />
}

export default FlickeringGrid
