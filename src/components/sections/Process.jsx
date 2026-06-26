import ScrollReveal from '../../ScrollReveal'
import Starfield from '../shared/Starfield'
import SR from '../shared/SR'
import Card from '../shared/Card'
import Badge from '../shared/Badge'

const Process = () => {
  const steps = [
    { n: '01', t: 'Discovery & Strategy', d: 'Deep-dive into your content library, target audience, monetization goals, and competitive landscape. We map out the entire platform architecture and go-to-market strategy.' },
    { n: '02', t: 'UI/UX Design', d: 'Custom branded interface design across all platforms. Interactive prototypes, user testing, and iterative refinements until the experience is cinematic and intuitive.' },
    { n: '03', t: 'Development & Integration', d: 'Full-stack development of web, mobile, and TV apps. CMS, payment, analytics, and DRM integration. Rigorous QA testing across 50+ device/browser combinations.' },
    { n: '04', t: 'Launch & Deploy', d: 'App store submissions, infrastructure provisioning, content migration, soft launch with beta users, performance optimization, and full public launch orchestration.' },
    { n: '05', t: 'Growth & Support', d: '24/7 technical support, monthly feature updates, performance monitoring, A/B testing, conversion optimization, and strategic growth consulting. Partners for the long haul.' },
  ]
  return (
    <section id="process" className="section">
      <Starfield />
      <div className="container">
        <SR className="sh">
          <Badge text="Our Process" />
          <h2 className="st">From Vision to Launch<br />in 5 Clear Steps</h2>
          <ScrollReveal baseOpacity={0.1} enableBlur blurStrength={4} baseRotation={2} textClassName="ss sr-text">Refined over 150+ platform launches. Every step is designed to minimize risk, maximize speed, and deliver a platform you're genuinely proud to launch.</ScrollReveal>
        </SR>
        <div className="proc-grid">
          {steps.map((s, i) => (
            <SR key={i} delay={i * 80}>
              <Card className="proc-card">
                <div className="proc-num">{s.n}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </Card>
            </SR>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
