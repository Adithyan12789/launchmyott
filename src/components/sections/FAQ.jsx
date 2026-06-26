import { useState } from 'react'
import ScrollReveal from '../../ScrollReveal'
import Waves from '../shared/Waves'
import SR from '../shared/SR'
import Badge from '../shared/Badge'

const FAQ = () => {
  const [open, so] = useState(null)
  const faqs = [
    { q: 'How long does it take to launch my OTT platform?', a: 'Our Starter plan typically launches in 4–6 weeks. Growth plans take 6–10 weeks. Enterprise custom builds range from 10–16 weeks depending on complexity. These timelines include design, development, testing, and app store submissions. We\'ve launched platforms in as little as 3 weeks for clients with clear requirements and ready content.' },
    { q: 'Do I own the platform, or is it rented?', a: 'You own everything. The platform is built and deployed under your brand, your domain, your app store accounts. You own the codebase, the design, the subscriber data — all of it. We\'re not a SaaS platform where you rent access. No lock-in, no hostage data, no strings attached.' },
    { q: 'What ongoing costs should I expect after launch?', a: 'After the one-time development fee: Cloud hosting ($99–$999/mo based on traffic), CDN bandwidth (usage-based), optional maintenance packages ($199–$999/mo), and app store fees ($99/yr Apple, $25 one-time Google). Most clients spend $300–$800/month total on infrastructure until they hit 50,000+ subscribers.' },
    { q: 'Can I migrate my existing content library?', a: 'Absolutely. We handle complete content migration from any existing platform — YouTube, Vimeo, Amazon S3, other OTT platforms, or physical media. We migrate your videos, metadata, thumbnails, subtitles, and organize everything in your new CMS. Our largest migration involved 25,000+ titles with metadata in 8 languages.' },
    { q: 'What if I need features not in the standard plans?', a: 'That\'s exactly what our Enterprise plan is designed for. We build custom features all the time — from interactive choose-your-own-adventure content to real-time sports statistics overlays. Custom features are priced separately and typically range from $2,000–$20,000 depending on complexity.' },
    { q: 'How do you handle content piracy and security?', a: 'Security is non-negotiable. Every platform includes Multi-DRM encryption (Widevine for Android/Chrome, FairPlay for Apple, PlayReady for Windows), AES-128 content encryption, secure token authentication, geo-blocking capabilities, and IP-based access restrictions.' },
    { q: 'Do you provide support after launch?', a: 'Yes — every plan includes 90 days of free post-launch support. After that, we offer monthly support packages: Essential ($199/mo), Professional ($499/mo), Premium ($999/mo — dedicated account manager, 24/7 phone support). 92% of our clients choose ongoing support.' },
    { q: 'Can my platform scale to millions of users?', a: 'It\'s literally what we\'re built for. Our architecture uses auto-scaling cloud infrastructure (AWS/GCP) with global CDN across 200+ edge locations. Our largest client currently serves 8 million monthly active users across 32 countries.' },
  ]
  return (
    <section id="faq" className="section">
      <Waves />
      <div className="container">
        <SR className="sh">
          <Badge text="FAQ" />
          <h2 className="st">Every Question You Have,<br />Answered Honestly.</h2>
          <ScrollReveal baseOpacity={0.1} enableBlur blurStrength={4} baseRotation={2} textClassName="ss sr-text">Thoroughly transparent answers to help you make a confident decision.</ScrollReveal>
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
