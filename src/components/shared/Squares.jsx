import { useEffect, useRef } from 'react'

const Squares = () => {
  const canvasRef = useRef(null)
  useEffect(() => {
    const c = canvasRef.current
    if (!c) return
    const ctx = c.getContext('2d')
    let id, w, h
    const size = 36
    let grid = []
    const resize = () => {
      w = c.width = c.offsetWidth
      h = c.height = c.offsetHeight
      const cols = Math.ceil(w / size)
      const rows = Math.ceil(h / size)
      grid = Array.from({ length: cols * rows }, (_, idx) => ({
        x: (idx % cols) * size,
        y: Math.floor(idx / cols) * size,
        alpha: Math.random() * 0.12,
        targetAlpha: Math.random() * 0.12,
      }))
    }
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      ctx.strokeStyle = 'rgba(99,102,241,0.03)'
      ctx.lineWidth = 0.5
      for (let x = 0; x < w; x += size) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke()
      }
      for (let y = 0; y < h; y += size) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke()
      }
      grid.forEach(s => {
        if (Math.random() < 0.003) {
          s.targetAlpha = Math.random() * 0.14
        }
        s.alpha += (s.targetAlpha - s.alpha) * 0.03
        if (s.alpha > 0.01) {
          ctx.fillStyle = `rgba(99,102,241,${s.alpha})`
          ctx.fillRect(s.x + 1, s.y + 1, size - 2, size - 2)
        }
      })
      id = requestAnimationFrame(draw)
    }
    resize(); draw()
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(id); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={canvasRef} className="pg-canvas" />
}

export default Squares
