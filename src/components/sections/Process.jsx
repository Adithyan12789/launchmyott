import ScrollReveal from '../../ScrollReveal'
import Starfield from '../shared/Starfield'
import SR from '../shared/SR'
import Card from '../shared/Card'
import Badge from '../shared/Badge'

const Process = () => {
  const steps = [
    { n: '01', t: 'Custom OTT Strategy', d: 'We map out your content library, target audience, monetization goals, and platform features to plan the absolute best roadmap for your brand.' },
    { n: '02', t: 'Branded UI/UX Design', d: 'Get a custom, cinema-quality interface built for all devices. We design beautiful, intuitive screens styled around your unique brand identity.' },
    { n: '03', t: 'OTT App Development', d: 'We develop native mobile and Smart TV apps, and integrate secure video hosting, an easy-to-use OTT CMS, multi-DRM security, and global payment gateways.' },
    { n: '04', t: 'Store Submissions & Launch', d: 'We handle the strict Apple, Google, Roku, and Fire TV app store submissions, deploy hosting infrastructures, migrate videos, and launch your platform globally.' },
    { n: '05', t: 'Continuous Scaling & Support', d: 'Receive 24/7 technical support, monthly app updates, CDN scaling checks, analytics reviews, and conversion rate optimization (CRO) consults to grow your brand.' },
  ]
  return (
    <section id="process" className="section">
      <Starfield />
      <div className="container">
        <SR className="sh">
          <Badge text="How it Works" />
          <h2 className="st">Launch Your OTT Platform<br />in 5 Simple Steps</h2>
          <ScrollReveal baseOpacity={0.1} enableBlur blurStrength={4} baseRotation={2} textClassName="ss sr-text">Refined across 150+ custom streaming rollouts. We handle the entire development pipeline from strategy to global app stores.</ScrollReveal>
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
