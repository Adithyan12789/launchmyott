import { useState } from 'react'
import ScrollReveal from '../../ScrollReveal'
import Waves from '../shared/Waves'
import SR from '../shared/SR'
import Badge from '../shared/Badge'

const FAQ = () => {
  const [open, so] = useState(null)
  const faqs = [
    { q: 'How long does it take to build and launch my white label OTT platform?', a: 'Our standard white label OTT platform launches in 4–6 weeks, including custom OTT app development, platform testing, and app store submissions. Larger streaming services take 6–10 weeks, while custom enterprise integrations range from 10–16 weeks. We work efficiently to deploy your video streaming platform quickly without compromising on quality.' },
    { q: 'Do I own the custom video streaming platform, or is it a rented software?', a: 'You own the entire platform. Unlike basic rented software solutions, we build and deploy the OTT CMS and apps under your brand, domain, and publisher accounts. You own 100% of the customer database, video assets, subscription revenue, and codebase—with zero vendor lock-in.' },
    { q: 'What ongoing costs should I expect for video hosting and CDN?', a: 'Your primary ongoing cost is hosting. After your one-time build fee, you only pay for AWS/GCP cloud hosting (starting around $99/mo), usage-based CDN bandwidth, and standard app store fees ($99/yr Apple, $25 one-time Google). This is highly cost-effective and scales directly with your viewership growth.' },
    { q: 'Can you migrate my existing content into the new OTT CMS?', a: 'Yes, migration is seamless. Our team handles complete migration from legacy setups like Vimeo OTT, YouTube, Uscreen, or Amazon S3. We transfer your video files, catalog structure, metadata tags, and customer data directly into your new white label OTT CMS. We have migrated directories of up to 25,000+ files.' },
    { q: 'Can you build custom features similar to a Netflix clone?', a: 'Absolutely. We can create advanced, custom functionality—including interactive video features, offline viewing capabilities, profiles, personalized recommendations, live chat overlays, and custom monetization strategies. Our developers specialize in tailoring the platform exactly to your needs.' },
    { q: 'How does your OTT solution prevent piracy and secure content?', a: 'Security is built into our core OTT software. We secure your streams with studio-grade Multi-DRM (Google Widevine, Apple FairPlay, Microsoft PlayReady), AES-128 token protection, geo-blocking filters, and anti-screen-recording shields to fully protect your video monetization rights.' },
    { q: 'Do you provide ongoing technical support after launch?', a: 'Yes, every project includes 90 days of dedicated post-launch support. After that, we offer affordable maintenance packages starting at $199/mo. Our support covers software updates, CDN performance monitoring, OS compatibility checks, and bug fixes so your streaming apps always run smoothly.' },
    { q: 'Can this video hosting platform scale to millions of concurrent streams?', a: 'Yes, scalability is guaranteed. The architecture is engineered on auto-scaling cloud clusters (AWS/GCP) and integrated with global CDNs. Whether you have 1,000 or millions of concurrent active users streaming in 4K, the platform scales dynamically to prevent buffering.' },
  ]
  return (
    <section id="faq" className="section">
      <Waves />
      <div className="container">
        <SR className="sh">
          <Badge text="OTT FAQ" />
          <h2 className="st">Frequently Asked Questions<br />About Our OTT Solution</h2>
          <ScrollReveal baseOpacity={0.1} enableBlur blurStrength={4} baseRotation={2} textClassName="ss sr-text">Get transparent answers about custom OTT app development, licensing, pricing, and platform scalability.</ScrollReveal>
        </SR>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <SR key={i} delay={(i % 4) * 50}>
              <div className={`faq-item ${open === i ? 'faq-open' : ''}`}>
                <button className="faq-q" onClick={() => so(open === i ? null : i)}>
                  <span>{f.q}</span>
                  <span className="faq-ico">{open === i ? '−' : '+'}</span>
                </button>
                <div className="faq-a"><p>{f.a}</p></div>
              </div>
            </SR>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
