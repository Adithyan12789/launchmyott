import AuroraGL from '../shared/AuroraGL'
import ScrollReveal from '../../ScrollReveal'
import SR from '../shared/SR'
import Card from '../shared/Card'
import Badge from '../shared/Badge'

const ProblemSolution = () => {
  const problems = [
    { icon: '💸', t: 'Astronomical OTT Development Costs', d: 'Building a custom video streaming platform from scratch costs $500K–$2M+ and takes 12–18 months. Most budgets drain before launching a single stream.' },
    { icon: '🧩', t: 'Fragmented Streaming Infrastructure', d: 'Stitching together separate tools for encoding, video hosting, payment gateways, CDN, and analytics creates a fragile system that breaks constantly.' },
    { icon: '📱', t: 'Complex OTT App Development', d: 'Building separate apps for iOS, Android, Roku, Fire TV, and Smart TVs requires constant maintenance, individual certifications, and heavy developer support.' },
    { icon: '🏴‍☠️', t: 'Vulnerability to Content Piracy', d: 'Without studio-grade multi-DRM security and geo-blocking, premium video assets get ripped and pirated within hours, destroying video monetization options.' },
    { icon: '📉', t: 'System Crashes Under Scaling Load', d: 'Standard video hosting platforms crash during high-traffic premieres. A buffering screen destroys subscriber trust and drives high customer churn.' },
  ]
  const solutions = [
    { icon: '🚀', t: 'Launch Your OTT Platform in Weeks', d: 'Our proven white-label OTT platform framework eliminates long development timelines. Get a fully branded streaming service live in a fraction of the time.' },
    { icon: '🎯', t: 'Unified OTT CMS & Core Software', d: 'Manage video hosting, subscriber management, analytics, and billing in one seamless OTT dashboard—no technical experience required.' },
    { icon: '📺', t: 'Seamless OTT App Development', d: 'Launch native apps for iOS, Android, Apple TV, Roku, Fire TV, and Samsung Smart TVs from a single centralized codebase.' },
    { icon: '🔐', t: 'Studio-Grade Multi-DRM Security', d: 'Protect your library with Multi-DRM encryption (Widevine, FairPlay, PlayReady), geo-fencing, and dynamic watermarking to prevent screen recording.' },
    { icon: '☁️', t: 'Scalable Global Video Hosting Platform', d: 'Deliver high-quality HLS streams to millions of concurrent viewers globally with 99.99% uptime, powered by AWS Cloud and secure CDNs.' },
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
          <Badge text="The Streaming Challenge" />
          <h2 className="st">Building a Video Streaming Platform<br />Is Brutally Complex</h2>
          <ScrollReveal baseOpacity={0.1} enableBlur blurStrength={4} baseRotation={2} textClassName="ss sr-text">Launching a subscription video platform from scratch comes with heavy costs and tech hurdles. We solve them all.</ScrollReveal>
        </SR>
        <div className="ps-grid">
          <SR>
            <h3 className="side-t prob-t">❌ The High Cost of Building from Scratch</h3>
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
            <h3 className="side-t sol-t">🏆 The Launch My OTT Solution</h3>
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
