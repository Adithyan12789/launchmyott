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
          <Badge text="Start Streaming" />
          <h2>Stop Renting Audiences. Build Your Custom<br />Video Streaming Platform Today.</h2>
          <ScrollReveal baseOpacity={0.1} enableBlur blurStrength={4} baseRotation={2} textClassName="sr-text">Take full control of your video monetization, subscriber data, and brand identity. Launch a professional white label OTT platform with native Smart TV apps and premium cloud streaming in weeks.</ScrollReveal>
          <div className="cta-btns">
            <Mag href="#contact" className="btn-pri">🎬 Get Your Free OTT Proposal</Mag>
            <Mag href="#solutions" className="btn-sec">Explore OTT Niche Solutions →</Mag>
          </div>
          <p className="cta-micro">✓ Free Consultation &nbsp;&nbsp; ✓ Zero Risk Guarantee &nbsp;&nbsp; ✓ Proposal Within 4 Business Hours</p>
        </div>
      </SR>
    </div>
  </section>
)

export default FinalCTA
