import ScrollReveal from '../../ScrollReveal'
import Aurora from '../shared/Aurora'
import SR from '../shared/SR'
import Mag from '../shared/Mag'
import Badge from '../shared/Badge'

const FinalCTA = () => (
  <section className="section final-cta">
    <Aurora />
    <div className="container">
      <SR>
        <div className="cta-inner">
          <Badge text="Your Move" />
          <h2>Stop Renting Audiences on<br />Someone Else's Platform.<br /><span className="cta-hl">Launch Your OTT Today.</span></h2>
          <ScrollReveal baseOpacity={0.1} enableBlur blurStrength={4} baseRotation={2} textClassName="sr-text">Every day you wait is another day your content generates revenue for YouTube, Vimeo, or some other platform — instead of for you. Your audience is ready. Your content deserves its own home. Let's build it together.</ScrollReveal>
          <div className="cta-btns">
            <Mag href="#contact" className="btn-pri">🎬 Get Your Free Demo</Mag>
            <Mag href="#solutions" className="btn-sec">Explore Solutions →</Mag>
          </div>
          <p className="cta-micro">✓ Free consultation &nbsp;&nbsp; ✓ No obligation &nbsp;&nbsp; ✓ Response within 4 hours &nbsp;&nbsp; ✓ 30-day money-back guarantee</p>
        </div>
      </SR>
    </div>
  </section>
)

export default FinalCTA
