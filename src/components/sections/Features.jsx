import ScrollReveal from '../../ScrollReveal'
import Waves from '../shared/Waves'
import SR from '../shared/SR'
import Card from '../shared/Card'
import Badge from '../shared/Badge'
import ScrollStack, { ScrollStackItem } from '../shared/ScrollStack'

const Features = () => {
  const feats = [
    { n: '01', t: '🌍 Multi-Language & Multi-Currency', d: 'Reach global audiences with 40+ languages, RTL layouts, localized metadata, subtitles, and region-specific pricing in 135+ currencies. One platform, every market.' },
    { n: '02', t: '☁️ Scalable Cloud Infrastructure', d: 'Auto-scaling on AWS/GCP handles traffic spikes seamlessly. From 10 to 10 million concurrent viewers — your platform never stutters, never crashes. 99.99% uptime SLA.' },
    { n: '03', t: '🤖 AI-Powered Recommendations', d: 'ML algorithms analyze viewing patterns and preferences to serve hyper-personalized content — increasing watch time by 35% and reducing churn by 28% on average.' },
    { n: '04', t: '🎛️ Powerful CMS Dashboard', d: 'Drag-and-drop content organization, automated transcoding, scheduled publishing, series management, metadata editing, thumbnail generation, and bulk upload.' },
    { n: '05', t: '👥 Complete Subscriber Management', d: 'Registration flows, viewing history, multi-profile support, parental controls, and automated engagement campaigns — all from one beautiful interface.' },
  ]
  return (
    <section id="features" className="section">
      <Waves />
      <div className="container">
        <SR className="sh">
          <Badge text="Platform Features" />
          <h2 className="st">Built for Scale.<br />Designed for Delight.</h2>
          <ScrollReveal baseOpacity={0.1} enableBlur blurStrength={4} baseRotation={2} textClassName="ss sr-text">Every feature has been battle-tested across 150+ platform launches. This isn't a prototype — it's proven technology powering millions of streaming hours daily.</ScrollReveal>
        </SR>
        <div className="feat-layout">
          <div className="feat-visual">
            <SR>
              <div className="dash-card">
                <div className="dash-bar">
                  <div className="dash-dots"><span /><span /><span /></div>
                  <span>Admin Dashboard</span>
                </div>
                <div className="dash-body">
                  <div className="dash-side">
                    {['📊 Overview', '📺 Content', '👥 Subscribers', '💰 Revenue', '📈 Analytics', '⚙️ Settings'].map((t, i) => (
                      <div key={i} className={`dsi ${i === 0 ? 'dsi-a' : ''}`}>{t}</div>
                    ))}
                  </div>
                  <div className="dash-main">
                    <div className="dash-chart">
                      {[40, 65, 50, 80, 60, 90, 75, 95].map((h, i) => (
                        <div key={i} className="dbar" style={{ height: `${h}%`, animationDelay: `${i * 0.12}s` }} />
                      ))}
                    </div>
                    <div className="dash-metrics">
                      <div className="dmet"><div className="dv">24.8K</div><div className="dk">Active Users</div></div>
                      <div className="dmet"><div className="dv">$48.2K</div><div className="dk">MRR</div></div>
                      <div className="dmet"><div className="dv">96.3%</div><div className="dk">Retention</div></div>
                    </div>
                  </div>
                </div>
              </div>
            </SR>
          </div>
          <ScrollStack className="feat-list" useWindowScroll={true}>
            {feats.map((f, i) => (
              <ScrollStackItem key={i}>
                <Card className="feat-item">
                  <div className="fnum">{f.n}</div>
                  <div><h3>{f.t}</h3><p>{f.d}</p></div>
                </Card>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </div>
    </section>
  )
}

export default Features
