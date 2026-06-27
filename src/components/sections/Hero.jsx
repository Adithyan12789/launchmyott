import ColorBends from '../shared/ColorBends'
import SR from '../shared/SR'
import Mag from '../shared/Mag'
import Cycle from '../shared/Cycle'
import Counter from '../shared/Counter'
import Shuffle from '../shared/Shuffle'

const Hero = () => (
  <section id="hero" className="hero">
    {/* ReactBits ColorBends — full-hero animated background */}
    <div className="hero-antigravity-bg" style={{ opacity: 0.8 }}>
      <ColorBends
        colors={["#6366f1", "#0ea5e9", "#8b5cf6", "#38bdf8", "#a855f7"]}
        rotation={90}
        speed={0.18}
        scale={1.0}
        frequency={1.1}
        warpStrength={1.2}
        mouseInfluence={0.8}
        noise={0.06}
        parallax={0.5}
        iterations={3}
        intensity={2.2}
        bandWidth={6}
        transparent
        autoRotate={0.8}
      />
    </div>
    <div className="hero-bg-mesh" />
    <div className="container hero-body">
      <div className="hero-left">
        <SR>
          <div className="hero-tag">
            <span className="htag-dot" />White-Label OTT Platform Development & Hosting
          </div>
        </SR>
        <SR delay={80}>
          <h1 className="hero-h1">
            <Shuffle
              text="Build & Launch Your"
              tag="span"
              shuffleDirection="right"
              duration={0.4}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover={true}
              respectReducedMotion={true}
              loop={false}
              style={{ display: 'block', textAlign: 'left', fontFamily: 'inherit', fontSize: 'inherit', fontWeight: 'inherit', lineHeight: 'inherit', color: 'inherit', letterSpacing: 'inherit' }}
            />
            <Cycle words={['White Label OTT Platform', 'Custom Netflix Clone', 'Video Streaming Platform', 'Subscription Video Platform']} /><br />
            <Shuffle
              text="in Minutes, Not Years"
              tag="span"
              shuffleDirection="right"
              duration={0.4}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover={true}
              respectReducedMotion={true}
              loop={false}
              style={{ display: 'block', textAlign: 'left', fontFamily: 'inherit', fontSize: 'inherit', fontWeight: 'inherit', lineHeight: 'inherit', color: 'inherit', letterSpacing: 'inherit' }}
            />
          </h1>
        </SR>
        <SR delay={160}>
          <p className="hero-p">
            Get enterprise-grade white-label OTT platform development. Launch your subscription video platform with a powerful OTT CMS, secure video hosting, and multi-device OTT app development—all under your own brand.
          </p>
        </SR>
        <SR delay={240}>
          <div className="hero-actions">
            <Mag href="#contact" className="btn-pri">
              🎬 Request a Free Proposal
            </Mag>
            <Mag href="#features" className="btn-sec">
              See OTT Software Features →
            </Mag>
          </div>
        </SR>
        <SR delay={320}>
          <div className="hero-stats">
            {[
              { v: '150+', l: 'OTT Platforms Launched' },
              { v: '45M+', l: 'End Users Streaming Daily' },
              { v: '99.99%', l: 'Uptime SLA Guarantee' },
              { v: '32+', l: 'Countries Reached' },
            ].map(s => (
              <div key={s.l} className="hstat">
                <div className="hstat-n"><Counter target={s.v} /></div>
                <div className="hstat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </SR>
      </div>

      <SR delay={200} className="hero-right">
        <div className="mockup">
          <div className="mck-bar">
            <div className="mck-dots"><span /><span /><span /></div>
            <div className="mck-url">launchmyott.com — OTT CMS Dashboard</div>
          </div>
          <div className="mck-body">
            <div className="mck-side">
              {['📊 Dashboard', '📺 OTT CMS', '👥 Subscribers', '💰 Video Monetization', '📈 Analytics'].map((t, i) => (
                <div key={i} className={`msi ${i === 0 ? 'msi-a' : ''}`}>{t}</div>
              ))}
            </div>
            <div className="mck-main">
              <div className="mck-chart">
                {[40, 62, 50, 80, 60, 90, 72, 96].map((h, i) => (
                  <div key={i} className="mbar" style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
              <div className="mck-metrics">
                <div className="mmet"><div className="mv">24.8K</div><div className="mk">Streamers Online</div></div>
                <div className="mmet"><div className="mv">$48.2K</div><div className="mk">Monthly Revenue</div></div>
                <div className="mmet"><div className="mv">96.3%</div><div className="mk">Viewer Retention</div></div>
              </div>
            </div>
          </div>
        </div>
      </SR>
    </div>
  </section>
)

export default Hero
