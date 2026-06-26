import AuroraGL from '../shared/AuroraGL'
import ScrollReveal from '../../ScrollReveal'
import SR from '../shared/SR'
import Card from '../shared/Card'
import Badge from '../shared/Badge'

const ProblemSolution = () => {
  const problems = [
    { icon: '💸', t: 'Astronomical Dev Costs', d: 'Building from scratch costs $500K–$2M+ and takes 12–18 months. Most budgets can\'t survive that burn rate before generating a single dollar of revenue.' },
    { icon: '🧩', t: 'Technology Fragmentation', d: 'Video encoding, DRM, CDN, payments, analytics, CMS — stitching 15+ vendors creates a maintenance hellscape that breaks constantly.' },
    { icon: '📱', t: 'Multi-Device Complexity', d: 'iOS, Android, Roku, Fire TV, Apple TV, Samsung TV, Web — each platform has unique requirements, certifications, and ongoing update demands.' },
    { icon: '🏴‍☠️', t: 'Content Piracy & Security', d: 'Without enterprise-grade DRM and forensic watermarking, your premium content gets pirated within hours. Revenue evaporates overnight.' },
    { icon: '📉', t: 'Scaling Failures Under Load', d: 'Your big premiere night crashes because infrastructure can\'t handle the spike. Subscribers churn. Brand credibility destroyed in one evening.' },
  ]
  const solutions = [
    { icon: '🚀', t: 'Launch in 4–8 Weeks, Not 18 Months', d: 'Our battle-tested white-label OTT framework means you skip years of development. Fully branded, fully functional, fully yours — in weeks.' },
    { icon: '🎯', t: 'One Unified Platform', d: 'Video hosting, CMS, payments, analytics, DRM — everything in one seamless ecosystem managed from a single dashboard you actually enjoy using.' },
    { icon: '📺', t: 'All Devices, One Strategy', d: 'We build apps for every major platform — iOS, Android, Roku, Fire TV, Apple TV, Samsung TV, and Web — with consistent UX across all screens.' },
    { icon: '🔐', t: 'Studio-Grade Content Protection', d: 'Multi-DRM (Widevine, FairPlay, PlayReady), forensic watermarking, geo-blocking, and screen recording prevention. Same standards as Netflix.' },
    { icon: '☁️', t: 'Auto-Scaling Infrastructure', d: 'Built on AWS/GCP with global CDN. Whether 100 or 10 million concurrent viewers — the platform scales automatically. Zero downtime, ever.' },
  ]
  return (
    <section id="problem" className="section">
      <AuroraGL
        colorStops={['#6366f1', '#8b5cf6', '#0ea5e9']}
        blend={0.6}
        amplitude={0.8}
        speed={0.6}
      />
      <div className="container">
        <SR className="sh">
          <Badge text="The Reality Check" />
          <h2 className="st">Building a Streaming Platform<br />Is Brutally Complex</h2>
          <ScrollReveal baseOpacity={0.1} enableBlur blurStrength={4} baseRotation={2} textClassName="ss sr-text">Most content creators and media companies face the same painful roadblocks. Sound familiar?</ScrollReveal>
        </SR>
        <div className="ps-grid">
          <SR>
            <h3 className="side-t prob-t">😰 The Problems You're Facing</h3>
            <div className="cstack">
              {problems.map((p, i) => (
                <Card key={i} className="prob-card">
                  <div className="ci prob-ci">{p.icon}</div>
                  <div><h4>{p.t}</h4><p>{p.d}</p></div>
                </Card>
              ))}
            </div>
          </SR>
          <SR delay={120}>
            <h3 className="side-t sol-t">✅ The Launch My OTT Solution</h3>
            <div className="cstack">
              {solutions.map((s, i) => (
                <Card key={i} className="sol-card">
                  <div className="ci sol-ci">{s.icon}</div>
                  <div><h4>{s.t}</h4><p>{s.d}</p></div>
                </Card>
              ))}
            </div>
          </SR>
        </div>
      </div>
    </section>
  )
}

export default ProblemSolution
