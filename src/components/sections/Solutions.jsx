import ScrollReveal from '../../ScrollReveal'
import GridPattern from '../shared/GridPattern'
import SR from '../shared/SR'
import Card from '../shared/Card'
import Badge from '../shared/Badge'

const Solutions = () => {
  const sols = [
    { e: '🎬', t: 'Film Studios & Video on Demand', d: 'Launch a dedicated video on demand platform for your movie library. Bypass theater middlemen and maximize direct-to-consumer video monetization.', f: ['Premiere Scheduling & Countdowns', 'Theatrical-to-Digital Release Windows', 'Revenue Sharing & Royalty Panels', 'Film Festival Integration', 'Behind-the-Scenes & Bonus Content'] },
    { e: '📺', t: 'Broadcasters & Live TV Networks', d: 'Extend your reach with linear channels and live streaming platform capabilities. Capture digital cord-cutters with full VOD archives.', f: ['24/7 Linear Channel Streaming', 'Catch-Up TV & Time-Shifting', 'EPG (Electronic Program Guide)', 'Localized Multi-Language UI', 'Dynamic Server-Side Ad Insertion (SSAI)'] },
    { e: '🌟', t: 'Content Creators & Video Subscription', d: 'Own your audience and escape algorithm volatility. Build a subscription video platform and scale your streaming business.', f: ['Live Chat & Community Hubs', 'Tiered Subscriptions & Memberships', 'Direct Fan-to-Creator Monetization', 'Branded Merch Integrations', 'Exclusive Early-Access Vaults'] },
    { e: '🎓', t: 'E-Learning & Video Courses', d: 'Transform video content into a premium school academy with progress trackers, quizzes, and certification awards.', f: ['Video Course Progress Trackers', 'Interactive Quiz & Exam Engine', 'Automated Certificate Generator', 'Instructor Grade Dashboards', 'Student Analytics & Insights'] },
    { e: '🙏', t: 'Faith-Based & Devotional Streaming', d: 'Stream sermons, host live prayer events, and grow your congregation globally on a secure, ad-free video hosting platform.', f: ['Live Sermon & Event Streaming', 'Searchable Sermon & Devotional Archives', 'Integrated Online Tithing & Donations', 'Interactive Digital Prayer Requests', 'Multi-Campus & Regional Networks'] },
  ]
  return (
    <section id="solutions" className="section sec-gray">
      <GridPattern />
      <div className="container">
        <SR className="sh">
          <Badge text="Tailored Solutions" />
          <h2 className="st">OTT Solutions Custom-Built<br />for Your Industry</h2>
          <ScrollReveal baseOpacity={0.1} enableBlur blurStrength={4} baseRotation={2} textClassName="ss sr-text">Whether launching a Netflix clone for films, linear live streams for TV networks, or course videos, get tailored features for your streaming niche.</ScrollReveal>
        </SR>
        <div className="sol-grid">
          {sols.map((s, i) => (
            <SR key={i} delay={(i % 3) * 70}>
              <Card className="sol-card-item">
                <div className="sol-e">{s.e}</div>
                <h3>{s.t}</h3><p>{s.d}</p>
                <ul className="sol-feats">
                  {s.f.map((f, j) => <li key={j}><span className="chk">✓</span>{f}</li>)}
                </ul>
              </Card>
            </SR>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solutions
