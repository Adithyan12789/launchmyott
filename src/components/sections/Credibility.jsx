import FlickeringGrid from '../shared/FlickeringGrid'
import SR from '../shared/SR'
import Card from '../shared/Card'
import Counter from '../shared/Counter'
import Badge from '../shared/Badge'

const Credibility = () => {
  const stats = [
    { v: '50+', l: 'OTT Platforms Launched Globally' },
    { v: '45M+', l: 'End Users Streaming Daily' },
    { v: '99.99%', l: 'Average Platform Uptime' },
    { v: '8+', l: 'Years of OTT Expertise' },
  ]
  const certs = [
    { icon: '🏆', t: 'AWS Advanced Partner', d: 'Certified cloud infrastructure expertise' },
    { icon: '🛡️', t: 'ISO 27001 Certified', d: 'Enterprise-grade security standards' },
    { icon: '🌍', t: 'GDPR & CCPA Compliant', d: 'Full regulatory compliance worldwide' },
  ]
  return (
    <section id="credibility" className="section">
      <FlickeringGrid />
      <div className="container">
        <SR className="sh">
          <Badge text="Our Track Record" />
          <h2 className="st">Numbers That Prove<br />Our Expertise</h2>
        </SR>
        <div className="cred-stats">
          {stats.map((s, i) => (
            <SR key={i} delay={i * 70}>
              <div className="cstat">
                <div className="cnum"><Counter target={s.v} /></div>
                <div className="clbl">{s.l}</div>
              </div>
            </SR>
          ))}
        </div>
        <div className="cert-grid">
          {certs.map((c, i) => (
            <SR key={i} delay={i * 80}>
              <Card className="cert-card">
                <div className="cert-ic">{c.icon}</div>
                <div className="cert-t">{c.t}</div>
                <div className="cert-d">{c.d}</div>
              </Card>
            </SR>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Credibility
