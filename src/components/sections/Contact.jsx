import { useState, useEffect } from 'react'
import ScrollReveal from '../../ScrollReveal'
import ParticleGrid from '../shared/ParticleGrid'
import SR from '../shared/SR'
import Card from '../shared/Card'
import Mag from '../shared/Mag'
import Badge from '../shared/Badge'

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

const PLANS = ['Starter', 'Growth', 'Enterprise']
const PLATFORM_TYPES = ['Film Studio / VOD Platform', 'Live TV / Broadcast Channel', 'Creator / Influencer Platform', 'Educational / E-Learning', 'Faith / Religious Content', 'Sports Streaming', 'Other']
const FEATURES = ['Mobile Apps', 'Smart TV Apps', 'Web Platform', 'Live Streaming']

const initForm = {
  firstName: '', lastName: '', email: '', phone: '',
  company: '', platform: '', message: '',
  plan: '',           // Starter | Growth | Enterprise
  features: [],       // multi-select checkboxes
  launchDate: '',     // date picker
}

const Contact = () => {
  const [form, sf] = useState(initForm)
  const [status, ss] = useState('idle') // idle | loading | success | error
  const [errMsg, se] = useState('')

  const onChange = e => sf({ ...form, [e.target.name]: e.target.value })

  useEffect(() => {
    const handleFocus = () => {
      const input = document.getElementById('first-name')
      if (input) {
        setTimeout(() => {
          input.focus();
        }, 850) // Allow smooth scroll animation to finish
      }
    }

    const handleHashChange = () => {
      if (window.location.hash === '#contact') {
        handleFocus()
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    // Check initial hash on mount
    if (window.location.hash === '#contact') {
      handleFocus()
    }

    // Intercept all anchor clicks to #contact to ensure focus even if hash is already #contact
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a')
      if (anchor && anchor.getAttribute('href') === '#contact') {
        handleFocus()
      }
    }
    document.addEventListener('click', handleAnchorClick)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])

  const onFeatureToggle = feat => {
    const next = form.features.includes(feat)
      ? form.features.filter(f => f !== feat)
      : [...form.features, feat]
    sf({ ...form, features: next })
  }

  const onSubmit = async e => {
    e.preventDefault()
    ss('loading')
    se('')

    try {
      const payload = {
        access_key: WEB3FORMS_KEY,
        subject: `New OTT Proposal from ${form.firstName} ${form.lastName} [${form.plan || 'Plan TBD'}]`,
        from_name: `${form.firstName} ${form.lastName}`,
        replyto: form.email,
        cc: 'Hello@launchmyott.com,anilkhandelwal7845@gmail.com',
        message: `
━━━━━━━━━━━━━━━━━━━━━━━━━━
  NEW OTT PLATFORM PROPOSAL
━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Name:         ${form.firstName} ${form.lastName}
📧 Email:        ${form.email}
📞 Phone:        ${form.phone || 'Not provided'}
🏢 Company:      ${form.company || 'Not provided'}

💼 Plan:         ${form.plan || 'Not selected'}
📺 Platform:     ${form.platform || 'Not selected'}
🛠 Features:     ${form.features.length ? form.features.join(', ') : 'None selected'}
📅 Launch Date:  ${form.launchDate || 'Not specified'}

💬 Message:
${form.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted via LaunchMyOTT website
        `.trim(),
        botcheck: false,
      }

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (data.success) {
        ss('success')
        sf(initForm)
      } else {
        ss('error')
        se(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      ss('error')
      se('Network error. Please check your connection and try again.')
    }
  }

  const isLoading = status === 'loading'

  return (
    <section id="contact" className="section sec-gray">
      <ParticleGrid />
      <div className="container">
        <SR className="sh">
          <Badge text="Get In Touch" />
          <h2 className="st">Let's Build Your<br />Streaming Empire</h2>
          <ScrollReveal baseOpacity={0.1} enableBlur blurStrength={4} baseRotation={2} textClassName="ss sr-text">
            Fill out the form below and our OTT strategy team will get back to you within 4 business hours with a customized platform proposal — completely free, no obligation.
          </ScrollReveal>
        </SR>

        <div className="con-layout">
          <SR className="con-info">
            {[
              { icon: '📧', t: 'Email Us', i: 'Hello@launchmyott.com', s: 'We respond within 4 hours during business days' },
              { icon: '📞', t: 'Call Us', i: '+91 9447220618', s: 'Mon–Fri, 9am–6pm IST' },
              { icon: '💬', t: 'Live Chat', i: 'Available on our website', s: '' },
              { icon: '🌍', t: 'Global Office', i: '2nd & 3rd Floor, H No. 8-2-686/K/6, Gokul Kimtee Towers', s: 'Banjara Hills Road No. 12, Hyderabad, Telangana 500034' },
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
                {[
                  'Custom platform strategy document',
                  'Detailed project timeline & milestones',
                  'Transparent cost breakdown (no hidden fees)',
                  "Live demo of a similar platform we've built",
                  'Monetization strategy recommendations',
                ].map((b, i) => (
                  <li key={i}><span className="chk">✓</span>{b}</li>
                ))}
              </ul>
            </div>
          </SR>

          <SR delay={120}>
            <Card className="con-form-card">
              {status === 'success' ? (
                <div className="form-ok">
                  <div className="ok-icon">🎉</div>
                  <h3>Thank You!</h3>
                  <p>Our OTT strategy team will contact you within 4 business hours with a customized proposal.</p>
                  <button className="btn-sec" style={{ marginTop: '20px' }} onClick={() => ss('idle')}>
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <>
                  <h3>Start Your OTT Journey</h3>
                  <p className="form-sub">Tell us about your project and we'll craft a custom proposal within 24 hours.</p>
                  <form onSubmit={onSubmit} className="cform">

                    {/* Name row */}
                    <div className="form-row">
                      <input id="first-name" type="text" name="firstName" placeholder="First Name" value={form.firstName} onChange={onChange} required disabled={isLoading} />
                      <input type="text" name="lastName" placeholder="Last Name" value={form.lastName} onChange={onChange} required disabled={isLoading} />
                    </div>

                    {/* Contact */}
                    <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={onChange} required disabled={isLoading} />
                    <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={onChange} disabled={isLoading} />
                    <input type="text" name="company" placeholder="Company / Project Name" value={form.company} onChange={onChange} disabled={isLoading} />

                    {/* ── Plan selection ─────────────────────── */}
                    <div className="form-field-group">
                      <label className="form-label">Select Plan</label>
                      <div className="plan-radio-group">
                        {PLANS.map(p => (
                          <label key={p} className={`plan-radio ${form.plan === p ? 'plan-radio-active' : ''}`}>
                            <input
                              type="radio" name="plan" value={p}
                              checked={form.plan === p}
                              onChange={onChange}
                              disabled={isLoading}
                            />
                            {p}
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* ── Platform type dropdown ─────────────── */}
                    <select name="platform" value={form.platform} onChange={onChange} required disabled={isLoading}>
                      <option value="">Select Platform Type</option>
                      {PLATFORM_TYPES.map(t => <option key={t}>{t}</option>)}
                    </select>

                    {/* ── Features checkboxes ───────────────── */}
                    <div className="form-field-group">
                      <label className="form-label">Platform Features Needed</label>
                      <div className="feature-check-group">
                        {FEATURES.map(f => (
                          <label key={f} className={`feature-check ${form.features.includes(f) ? 'feature-check-active' : ''}`}>
                            <input
                              type="checkbox"
                              checked={form.features.includes(f)}
                              onChange={() => onFeatureToggle(f)}
                              disabled={isLoading}
                            />
                            {f}
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* ── Preferred launch date ─────────────── */}
                    <div className="form-field-group">
                      <label className="form-label">Preferred Launch Date</label>
                      <input
                        type="date" name="launchDate"
                        value={form.launchDate} onChange={onChange}
                        disabled={isLoading}
                        className="date-input"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>

                    {/* ── Message ───────────────────────────── */}
                    <textarea
                      name="message"
                      placeholder="Tell us about your project, content library, target audience, and goals..."
                      value={form.message} onChange={onChange} rows={4} required
                      disabled={isLoading}
                    />

                    {status === 'error' && (
                      <div className="form-error">⚠️ {errMsg}</div>
                    )}

                    <Mag type="submit" className={`btn-pri btn-submit ${isLoading ? 'btn-loading' : ''}`} disabled={isLoading}>
                      {isLoading ? (
                        <span className="btn-spinner-wrap">
                          <span className="btn-spinner" />
                          Sending…
                        </span>
                      ) : 'Send My Free Proposal →'}
                    </Mag>
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
