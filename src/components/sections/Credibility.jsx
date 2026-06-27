import FlickeringGrid from '../shared/FlickeringGrid'
import SR from '../shared/SR'
import Card from '../shared/Card'
import Counter from '../shared/Counter'
import Badge from '../shared/Badge'

const Credibility = () => {
  const stats = [
    { v: '150+', l: 'OTT Platforms Launched Globally' },
    { v: '45M+', l: 'End Users Streaming Daily' },
    { v: '99.99%', l: 'Uptime SLA Guarantee' },
    { v: '8+', l: 'Years of OTT Expertise' },
  ]
  const certs = [
    { icon: '🏆', t: 'AWS Advanced Technology Partner', d: 'Enterprise-grade scalable cloud architecture' },
    { icon: '🛡️', t: 'ISO 27001 Security Certified', d: 'Industry-leading protection for user & billing data' },
    { icon: '🌍', t: 'GDPR & CCPA Compliance Ready', d: 'Seamless localized data operations worldwide' },
  ]
  return (
    <section id="credibility" className="section">
      <FlickeringGrid />
      <div className="container">
        <SR className="sh">
          <Badge text="Proven Authority" />
          <h2 className="st">Numbers That Power Your<br />Streaming Success</h2>
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
