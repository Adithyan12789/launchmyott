import './App.css'
import GradualBlur from './components/shared/GradualBlur'

// ── Sections ──────────────────────────────────────────────
import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import TrustBar from './components/sections/TrustBar'
import ProblemSolution from './components/sections/ProblemSolution'
import Services from './components/sections/Services'
import Features from './components/sections/Features'
import Solutions from './components/sections/Solutions'
import Process from './components/sections/Process'
import Credibility from './components/sections/Credibility'
import Guarantee from './components/sections/Guarantee'
import FAQ from './components/sections/FAQ'
import Urgency from './components/sections/Urgency'
import FinalCTA from './components/sections/FinalCTA'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'

/* ═══════════════════════════════════════════
   APP
═══════════════════════════════════════════ */
export default function App() {
  return (
    <>
      <GradualBlur
        target="page"
        position="bottom"
        height="5rem"
        strength={2.5}
        divCount={5}
        curve="ease-out"
        opacity={1}
        zIndex={998}
      />
      <Navbar />
      <Hero />
      <TrustBar />
      <ProblemSolution />
      <Services />
      <Features />
      <Solutions />
      <Process />
      <Credibility />
      <Guarantee />
      <FAQ />
      <Urgency />
      <FinalCTA />
      <Contact />
      <Footer />
    </>
  )
}
