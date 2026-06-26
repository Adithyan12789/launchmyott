import ScrollReveal from '../../ScrollReveal'
import GridPattern from '../shared/GridPattern'
import SR from '../shared/SR'
import Card from '../shared/Card'
import Badge from '../shared/Badge'

const Solutions = () => {
  const sols = [
    { e: '🎬', t: 'Film Studios & Production Houses', d: 'Launch your streaming home for your film library. Direct-to-consumer eliminates middlemen and maximizes revenue per title.', f: ['Premiere scheduling & countdown', 'Theatrical-to-digital windows', 'Revenue sharing dashboards', 'Festival circuit integration', 'Behind-the-scenes extras'] },
    { e: '📺', t: 'Regional Channels & Broadcasters', d: 'Extend your broadcast reach digitally. Simulcast live TV, build a VOD archive, and capture cord-cutters who still love your content.', f: ['Linear channel streaming', 'Catch-up TV / time-shift', 'EPG (Electronic Program Guide)', 'Regional language interfaces', 'Ad insertion (SSAI/CSAI)'] },
    { e: '🌟', t: 'Influencers & Creators', d: 'Own your audience, own your revenue. Stop depending on algorithm changes. Build your subscriber-based content empire.', f: ['Community features & chat', 'Tiered membership levels', 'Direct fan monetization', 'Merch store integration', 'Exclusive content vaults'] },
    { e: '🎓', t: 'Educational Platforms', d: 'Transform your courses into a premium learning experience. Certificates, progress tracking, quizzes, and cohort-based learning on your branded platform.', f: ['Course progress tracking', 'Quiz & assessment engine', 'Certificate generation', 'Instructor dashboards', 'Student analytics & reporting'] },
    { e: '🙏', t: 'Faith & Devotional Content', d: 'Reach your congregation globally with live worship streaming, sermon archives, devotional libraries, and community engagement tools.', f: ['Live worship streaming', 'Sermon archive & search', 'Donation integration', 'Prayer request features', 'Multi-campus support'] },
  ]
  return (
    <section id="solutions" className="section sec-gray">
      <GridPattern />
      <div className="container">
        <SR className="sh">
          <Badge text="Industry Solutions" />
          <h2 className="st">Custom-Built for<br />Your Industry</h2>
          <ScrollReveal baseOpacity={0.1} enableBlur blurStrength={4} baseRotation={2} textClassName="ss sr-text">We don't believe in one-size-fits-all. Every industry has unique workflows, audience behaviors, and monetization requirements. We've mastered them all.</ScrollReveal>
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
