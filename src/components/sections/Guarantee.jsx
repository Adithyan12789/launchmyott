import ScrollReveal from '../../ScrollReveal'
import SR from '../shared/SR'
import Card from '../shared/Card'
import LineWaves from '../shared/LineWaves'

const Guarantee = () => (
  <section className="section sec-gray" style={{ position: 'relative', overflow: 'hidden', minHeight: '500px' }}>
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.6 }}>
      <LineWaves
        speed={0.3}
        innerLineCount={32}
        outerLineCount={36}
        warpIntensity={1}
        rotation={-45}
        edgeFadeWidth={0}
        colorCycleSpeed={1}
        brightness={1.2}
        color1="#6366f1"
        color2="#0ea5e9"
        color3="#8b5cf6"
        enableMouseInteraction
        mouseInfluence={2}
      />
    </div>
    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
      <SR>
        <Card className="g-card">
          <div className="g-left">
            <div className="g-shield">🛡️</div>
            <div className="g-label">30-DAY<br />MONEY-BACK<br />GUARANTEE</div>
          </div>
          <div className="g-right">
            <h2>Our Iron-Clad, Zero-Risk Guarantee</h2>
            <ScrollReveal baseOpacity={0.1} enableBlur blurStrength={3} baseRotation={1} textClassName="sr-text">We're so confident in the quality of our OTT platform development that we offer a full 30-day money-back guarantee. If within 30 days of project kickoff you're not completely satisfied with our progress, deliverables, and communication — we'll refund 100% of your payment. No questions asked. No hoops to jump through. No fine print.</ScrollReveal>
            <ScrollReveal baseOpacity={0.1} enableBlur blurStrength={3} baseRotation={1} textClassName="sr-text">We've offered this guarantee on every single project since 2016. Want to know how many times we've been asked for a refund? Three times out of 150+ projects. And in all three cases, we processed the refund within 48 hours. That's how much we stand behind our work.</ScrollReveal>
            <ScrollReveal baseOpacity={0.1} enableBlur blurStrength={3} baseRotation={1} textClassName="sr-text">You have literally nothing to lose and a world-class streaming platform to gain.</ScrollReveal>
          </div>
        </Card>
      </SR>
    </div>
  </section>
)

export default Guarantee
