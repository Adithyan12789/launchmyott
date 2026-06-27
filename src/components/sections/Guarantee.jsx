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
            <h2>Our Zero-Risk, White Label OTT Development Guarantee</h2>
            <ScrollReveal baseOpacity={0.1} enableBlur blurStrength={3} baseRotation={1} textClassName="sr-text">We are confident in our custom OTT app development and global hosting reliability. We support every kickoff with an ironclad 30-day money-back guarantee. If you are not satisfied with our milestone progress, design drafts, or codebase updates, we will issue a 100% refund. No questions asked.</ScrollReveal>
            <ScrollReveal baseOpacity={0.1} enableBlur blurStrength={3} baseRotation={1} textClassName="sr-text">This policy has backed all our custom white label OTT platform launches since 2016. Out of 150+ platform rollouts, only three clients have ever requested a refund—and each was processed in under 48 hours. We value developer transparency and absolute buyer trust.</ScrollReveal>
            <ScrollReveal baseOpacity={0.1} enableBlur blurStrength={3} baseRotation={1} textClassName="sr-text">You gain a premium video streaming platform with zero setup risk.</ScrollReveal>
          </div>
        </Card>
      </SR>
    </div>
  </section>
)

export default Guarantee
