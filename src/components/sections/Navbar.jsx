import { useEffect, useState } from 'react'
import Mag from '../shared/Mag'
import logoImg from '../../assets/launchmyott-logo.png'

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
          <img src={logoImg} alt="LaunchMyOTT" className="brand-logo" />
        </a>
        <div className={`nav-links ${open ? 'nl-open' : ''}`}>
          {links.map(l => <a key={l} href={`#${l.toLowerCase()}`} className="nl" onClick={() => so(false)}>{l}</a>)}
          <Mag href="#contact" className="nav-cta" onClick={() => so(false)}>Book a Demo</Mag>
        </div>
        <button className={`burger ${open ? 'bopen' : ''}`} onClick={() => so(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
