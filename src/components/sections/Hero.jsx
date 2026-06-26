import Antigravity from '../../Antigravity'
import SR from '../shared/SR'
import Mag from '../shared/Mag'
import Cycle from '../shared/Cycle'
import Counter from '../shared/Counter'

const Hero = () => (
  <section id="hero" className="hero">
    {/* ReactBits Antigravity — full-hero 3D particle background */}
    <div className="hero-antigravity-bg">
      <Antigravity
        count={300}
        magnetRadius={6}
        ringRadius={7}
        waveSpeed={0.4}
        waveAmplitude={1}
        particleSize={1.5}
        lerpSpeed={0.09}
        color="#6366f1"
        autoAnimate
        particleVariance={1}
        rotationSpeed={0}
        depthFactor={1}
        pulseSpeed={3}
        particleShape="capsule"
        fieldStrength={10}
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
            Launch Your Own<br />
            <Cycle words={['OTT Platform', 'Streaming Empire', 'Content Hub', 'Media Brand']} /><br />
            in Minutes, Not Years
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
