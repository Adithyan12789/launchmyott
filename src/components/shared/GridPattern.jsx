import { useEffect, useRef, useState } from 'react'

const GridPattern = () => {
  const containerRef = useRef(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect()
      setMouse({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
    }
    el.addEventListener('mousemove', handleMouseMove)
    return () => el.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={containerRef}
      className="grid-pattern-bg"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      style={{
        '--mx': hovering ? `${mouse.x}px` : '50%',
        '--my': hovering ? `${mouse.y}px` : '50%',
        '--mask-size': hovering ? '300px' : '600px'
      }}
    />
  )
}

export default GridPattern
