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
            <span className="htag-dot" />White-Label OTT Platform Development
          </div>
        </SR>
        <SR delay={80}>
          <h1 className="hero-h1">
            <Shuffle
              text="Launch Your Own"
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
            <Cycle words={['OTT Platform', 'Streaming Empire', 'Content Hub', 'Media Brand']} /><br />
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
            End-to-end streaming platform development for filmmakers, broadcasters, content creators,
            and media companies. From concept to global launch — we build the technology so you can
            focus on what matters: your content.
          </p>
        </SR>
        <SR delay={240}>
          <div className="hero-actions">
            <Mag href="#contact" className="btn-pri">
              🎬 Get Free Demo
            </Mag>
            <Mag href="#features" className="btn-sec">
              Explore Features →
            </Mag>
          </div>
        </SR>
        <SR delay={320}>
          <div className="hero-stats">
            {[
              { v: '50+', l: 'Platforms Launched' },
              { v: '45M+', l: 'End Users Served' },
              { v: '99.9%', l: 'Uptime Guarantee' },
              { v: '12+', l: 'Countries Reached' },
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
            <div className="mck-url">launchmyott.com — Dashboard</div>
          </div>
          <div className="mck-body">
            <div className="mck-side">
              {['📊 Overview', '📺 Content', '👥 Users', '💰 Revenue', '📈 Analytics'].map((t, i) => (
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
                <div className="mmet"><div className="mv">24.8K</div><div className="mk">Active Users</div></div>
                <div className="mmet"><div className="mv">$48.2K</div><div className="mk">MRR</div></div>
                <div className="mmet"><div className="mv">96.3%</div><div className="mk">Retention</div></div>
              </div>
            </div>
          </div>
        </div>
      </SR>
    </div>
  </section>
)

export default Hero
