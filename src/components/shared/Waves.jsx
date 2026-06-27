import { useEffect, useRef } from 'react'

const Waves = () => {
  const canvasRef = useRef(null)
  useEffect(() => {
    const c = canvasRef.current
    if (!c) return
    const ctx = c.getContext('2d')
    let id, w, h, t = 0
    const resize = () => {
      w = c.width = c.offsetWidth
      h = c.height = c.offsetHeight
    }
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(c);

    const draw = () => {
      id = requestAnimationFrame(draw)
      if (!isVisible || document.hidden) return;
      ctx.clearRect(0, 0, w, h)
      ctx.lineWidth = 1
      t += 0.003
      for (let i = 0; i < 3; i++) {
        ctx.strokeStyle = i === 0 ? 'rgba(99,102,241,0.06)' : i === 1 ? 'rgba(14,165,233,0.05)' : 'rgba(139,92,246,0.04)'
        ctx.beginPath()
        for (let x = 0; x <= w; x += 15) {
          const y = h * 0.5 + Math.sin(x * 0.004 + t + i * 1.5) * 25 + Math.cos(x * 0.002 - t * 0.4 + i) * 12
          if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y)
        }
        ctx.stroke()
      }
    }
    resize(); draw()
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(id); observer.disconnect(); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={canvasRef} className="pg-canvas" />
}

export default Waves
