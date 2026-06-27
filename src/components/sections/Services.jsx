import ScrollReveal from '../../ScrollReveal'
import Aurora from '../shared/Aurora'
import Beams from '../shared/Beams'
import SR from '../shared/SR'
import Card from '../shared/Card'
import Badge from '../shared/Badge'

const Services = () => {
  const svcs = [
    { icon: '📱', t: 'OTT App Development', d: 'Native white-label apps for iOS, Android, Apple TV, Roku, Fire TV, and Samsung Smart TVs. Fully customized UI designed to keep your audience streaming on any screen.' },
    { icon: '🎛️', t: 'Advanced OTT CMS', d: 'Streamline video management with a robust admin panel. Upload, organize metadata, schedule live programs, and manage video categories across all devices instantly.' },
    { icon: '☁️', t: 'Video Hosting & CDN', d: 'Enterprise-grade video hosting featuring adaptive bitrate playback (HLS/DASH), global secure CDNs, and 4K Ultra HD delivery with zero buffering or delay.' },
    { icon: '💰', t: 'Flexible Video Monetization', d: 'Maximize revenue with built-in support for Subscription VOD (SVOD), transactional VOD (TVOD/PPV), ad-supported streaming (AVOD), and hybrid subscription models.' },
    { icon: '💳', t: 'Global Billing & Payments', d: 'Integrate payment systems like Stripe, PayPal, and local gateways. Offer recurring pricing tiers, free trials, coupons, and seamless mobile in-app purchases.' },
    { icon: '📊', t: 'Real-Time Viewer Analytics', d: 'Track viewer engagement heatmaps, geographical traffic, churn analytics, subscriber growth, and advertising performance inside a single unified dashboard.' },
    { icon: '🔐', t: 'Multi-DRM Security', d: 'Studio-grade content protection utilizing Google Widevine, Apple FairPlay, and Microsoft PlayReady DRM, plus IP geo-blocking and screen-recording prevention.' },
    { icon: '🔴', t: 'Live Streaming Platform', d: 'Ultra-low latency live streaming equipped with interactive live chat, DVR playback, instant replay, real-time polling, and simultaneous social broadcasting.' },
  ]
  return (
    <section id="services" className="section sec-gray">
      <Aurora />
      <div className="services-beams-bg">
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={20}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
          diffuseColor="#ffffff"
        />
      </div>
      <div className="container">
        <SR className="sh">
          <Badge text="Core Services" />
          <h2 className="st">Complete White Label OTT<br />Software Solution</h2>
          <ScrollReveal baseOpacity={0.1} enableBlur blurStrength={4} baseRotation={2} textClassName="ss sr-text">From custom OTT app development to secure global streaming infrastructure, get the tools you need to build and scale your streaming business.</ScrollReveal>
        </SR>
        <div className="svc-grid">
          {svcs.map((s, i) => (
            <SR key={i} delay={(i % 4) * 60}>
              <Card className="svc-card">
                <div className="svc-icon-wrap">{s.icon}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
                <div className="svc-line" />
              </Card>
            </SR>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
