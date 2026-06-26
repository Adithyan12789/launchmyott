import { useState } from 'react'
import ScrollReveal from '../../ScrollReveal'
import ParticleGrid from '../shared/ParticleGrid'
import SR from '../shared/SR'
import Card from '../shared/Card'
import Mag from '../shared/Mag'
import Badge from '../shared/Badge'

const Contact = () => {
  const [form, sf] = useState({ firstName: '', lastName: '', email: '', phone: '', company: '', platform: '', message: '' })
  const [sent, ss] = useState(false)
  const onS = e => { e.preventDefault(); ss(true) }
  const onC = e => sf({ ...form, [e.target.name]: e.target.value })
  return (
    <section id="contact" className="section sec-gray">
      <ParticleGrid />
      <div className="container">
        <SR className="sh">
          <Badge text="Get In Touch" />
          <h2 className="st">Let's Build Your<br />Streaming Empire</h2>
          <ScrollReveal baseOpacity={0.1} enableBlur blurStrength={4} baseRotation={2} textClassName="ss sr-text">Fill out the form below and our OTT strategy team will get back to you within 4 business hours with a customized platform proposal — completely free, no obligation.</ScrollReveal>
        </SR>
        <div className="con-layout">
          <SR className="con-info">
            {[
              { icon: '📧', t: 'Email Us', i: 'hello@launchmyott.com', s: 'We respond within 4 hours during business days' },
              { icon: '📞', t: 'Call Us', i: '+91-7994389139', s: 'Mon–Fri, 9am–6pm IST' },
              { icon: '💬', t: 'Live Chat', i: 'Available on our website', s: '' },
              { icon: '🌍', t: 'Global Office', i: 'H No. 8, Gokul Kimtee Towers', s: '2-686/K/6, Road No. 12, NBT Nagar, Banjara Hills, Hyderabad, Telangana 500028' },
            ].map((c, i) => (
              <div key={i} className="con-item">
                <div className="con-icon">{c.icon}</div>
                <div>
                  <h4>{c.t}</h4>
                  <p>{c.i}</p>
                  {c.s && <p className="con-sub">{c.s}</p>}
                </div>
              </div>
            ))}
            <div className="con-benefits">
              <h4>🎁 What You'll Get After Submitting:</h4>
              <ul>
                {['Custom platform strategy document', 'Detailed project timeline & milestones', 'Transparent cost breakdown (no hidden fees)', 'Live demo of a similar platform we\'ve built', 'Monetization strategy recommendations'].map((b, i) => (
                  <li key={i}><span className="chk">✓</span>{b}</li>
                ))}
              </ul>
            </div>
          </SR>
          <SR delay={120}>
            <Card className="con-form-card">
              {sent ? (
                <div className="form-ok">
                  <div className="ok-icon">🎉</div>
                  <h3>Thank You!</h3>
                  <p>Our OTT strategy team will contact you within 4 business hours with a customized proposal.</p>
                </div>
              ) : (
                <>
                  <h3>Start Your OTT Journey</h3>
                  <p className="form-sub">Tell us about your project and we'll craft a custom proposal within 24 hours.</p>
                  <form onSubmit={onS} className="cform">
                    <div className="form-row">
                      <input type="text" name="firstName" placeholder="First Name" value={form.firstName} onChange={onC} required />
                      <input type="text" name="lastName" placeholder="Last Name" value={form.lastName} onChange={onC} required />
                    </div>
                    <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={onC} required />
                    <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={onC} />
                    <input type="text" name="company" placeholder="Company / Project Name" value={form.company} onChange={onC} />
                    <select name="platform" value={form.platform} onChange={onC} required>
                      <option value="">What type of platform do you need?</option>
                      <option>Film Studio / VOD Platform</option>
                      <option>Live TV / Broadcast Channel</option>
                      <option>Creator / Influencer Platform</option>
                      <option>Educational / E-Learning</option>
                      <option>Faith / Religious Content</option>
                      <option>Sports Streaming</option>
                      <option>Other</option>
                    </select>
                    <textarea name="message" placeholder="Tell us about your project, content library, target audience, and goals..." value={form.message} onChange={onC} rows={4} required />
                    <Mag type="submit" className="btn-pri btn-submit">Send My Free Proposal →</Mag>
                  </form>
                </>
              )}
            </Card>
          </SR>
        </div>
      </div>
    </section>
  )
}

export default Contact
