import ScrollReveal from '../../ScrollReveal'
import Aurora from '../shared/Aurora'
import Beams from '../shared/Beams'
import SR from '../shared/SR'
import Card from '../shared/Card'
import Badge from '../shared/Badge'

const Services = () => {
  const svcs = [
    { icon: '📱', t: 'OTT App Development', d: 'Native apps for iOS, Android, Smart TVs, Roku, Fire TV, Apple TV, and responsive web. Pixel-perfect UI with buttery-smooth playback on every device.' },
    { icon: '🎛️', t: 'CMS & Content Management', d: 'Intuitive drag-and-drop content management. Upload, organize, schedule, and publish across all platforms from one powerful dashboard. No technical skills needed.' },
    { icon: '☁️', t: 'Video Hosting & CDN', d: 'Enterprise-grade hosting with adaptive bitrate streaming (HLS/DASH), global CDN across 200+ edge locations, and 4K Ultra HD support with zero buffering.' },
    { icon: '💰', t: 'Monetization Engine', d: 'SVOD, AVOD, TVOD, and hybrid models. Flexible pricing tiers, free trials, coupon codes, and bundle offers built-in from day one.' },
    { icon: '💳', t: 'Payment Integration', d: 'Stripe, PayPal, Razorpay, and 50+ global gateways. 135+ currencies, recurring billing, in-app purchases, and automated dunning management.' },
    { icon: '📊', t: 'Advanced Analytics', d: 'Real-time viewer analytics, engagement heatmaps, churn prediction, revenue dashboards, and audience segmentation — all in one unified suite.' },
    { icon: '🔐', t: 'DRM & Security', d: 'Multi-DRM (Widevine, FairPlay, PlayReady), AES-128 encryption, forensic watermarking, geo-fencing, IP restrictions, and anti-screen-capture.' },
    { icon: '🔴', t: 'Live Streaming', d: 'Ultra-low latency streaming with DVR, real-time chat, live polls, multi-camera support, instant replay, and simulcasting to social platforms.' },
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
          <Badge text="Our Services" />
          <h2 className="st">Everything You Need to<br />Dominate Streaming</h2>
          <ScrollReveal baseOpacity={0.1} enableBlur blurStrength={4} baseRotation={2} textClassName="ss sr-text">From the first line of code to your millionth subscriber — the complete technology stack that powers world-class OTT platforms.</ScrollReveal>
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
