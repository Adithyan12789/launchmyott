import ScrollReveal from '../../ScrollReveal'
import Waves from '../shared/Waves'
import Threads from '../shared/Threads'
import SR from '../shared/SR'
import Card from '../shared/Card'
import Badge from '../shared/Badge'
import ScrollStack, { ScrollStackItem } from '../shared/ScrollStack'

const Features = () => {
  const feats = [
    { n: '01', t: '🌍 Global Localization & Currencies', d: 'Expand your subscription video platform worldwide with 40+ languages, RTL layouts, localized subtitles, and localized billing in 135+ currencies.' },
    { n: '02', t: '☁️ Scalable Video Hosting Infrastructure', d: 'Auto-scaling cloud infrastructure on AWS and GCP handles peak user spikes seamlessly. Deliver high-bitrate streaming with a guaranteed 99.99% uptime SLA.' },
    { n: '03', t: '🤖 AI Recommendation OTT Software', d: 'Machine learning algorithms analyze viewing history to recommend personalized content, boosting platform engagement by 35% and reducing churn by 28%.' },
    { n: '04', t: '🎛️ Enterprise OTT CMS Panel', d: 'Manage content with drag-and-drop playlists, automated cloud transcoding, scheduled release windows, bulk imports, and dynamic thumbnail creators.' },
    { n: '05', t: '👥 End-to-End Subscriber CRO Management', d: 'Seamless user registration, viewing progress tracking, profile creation, content recommendations, and automated email campaigns to maximize conversions.' },
  ]
  return (
    <section id="features" className="section">
      <Waves />
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, opacity: 0.35 }}>
        <Threads
          amplitude={1}
          distance={0}
          enableMouseInteraction
          color={[0.388, 0.4, 0.945]}
        />
      </div>
      <div className="container">
        <SR className="sh">
          <Badge text="OTT Platform Features" />
          <h2 className="st">Built for Scaling.<br />Engineered for CRO.</h2>
          <ScrollReveal baseOpacity={0.1} enableBlur blurStrength={4} baseRotation={2} textClassName="ss sr-text">Every tool has been refined across 150+ white label OTT platform launches. Scale your video streaming platform with robust tech.</ScrollReveal>
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
