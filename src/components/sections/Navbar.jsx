import { useEffect, useState } from 'react'
import Mag from '../shared/Mag'

const Navbar = () => {
  const [scrolled, ss] = useState(false)
  const [open, so] = useState(false)
  useEffect(() => {
    const fn = () => ss(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  const links = ['Services', 'Features', 'Solutions', 'FAQ', 'Contact']
  return (
    <nav className={`nav ${scrolled ? 'nav-s' : ''}`}>
      <div className="nav-c">
        <a href="#hero" className="brand">
          <div className="brand-icon">
            <svg width="18" height="18" viewBox="0 0 20 20"><polygon points="4,2 16,10 4,18" fill="url(#ng)" /><defs><linearGradient id="ng" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#6366f1" /><stop offset="100%" stopColor="#0ea5e9" /></linearGradient></defs></svg>
          </div>
          <span>Launch My OTT</span>
        </a>
        <div className={`nav-links ${open ? 'nl-open' : ''}`}>
          {links.map(l => <a key={l} href={`#${l.toLowerCase()}`} className="nl" onClick={() => so(false)}>{l}</a>)}
          <Mag href="#contact" className="nav-cta" onClick={() => so(false)}>Get Demo</Mag>
        </div>
        <button className={`burger ${open ? 'bopen' : ''}`} onClick={() => so(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
