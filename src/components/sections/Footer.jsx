import logoImg from '../../assets/launchmyott-logo.png'

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="foot-grid">
        <div className="foot-brand">
          <a href="#hero" className="brand foot-brand-logo">
            <img src={logoImg} alt="LaunchMyOTT" className="brand-logo foot-logo-img" />
          </a>
          <p>Enterprise-grade white label OTT platform development and video hosting solutions for media companies, broadcasters, and studios globally. Launch your streaming service with our proven OTT software.</p>
          <div className="foot-socials">
            <a href="#" className="fsoc">𝕏</a>
            <a href="#" className="fsoc">in</a>
            <a href="#" className="fsoc">▶</a>
          </div>
        </div>
        <div className="foot-col">
          <h4>Services</h4>
          {['OTT App Development', 'CMS & Content Management', 'Video Hosting & CDN', 'Monetization Engine', 'DRM & Security', 'Live Streaming'].map(l => <a key={l} href="#services">{l}</a>)}
        </div>
        <div className="foot-col">
          <h4>Solutions</h4>
          {['Film Studios', 'Broadcasters', 'Creators & Influencers', 'Education', 'Faith & Devotional'].map(l => <a key={l} href="#solutions">{l}</a>)}
        </div>
        <div className="foot-col">
          <h4>Company</h4>
          {['FAQ', 'Contact Us', 'Get Demo', 'Privacy Policy', 'Terms of Service'].map(l => <a key={l} href="#contact">{l}</a>)}
        </div>
      </div>
      <div className="foot-bottom">
        <p>© 2024 Launch My OTT. All rights reserved. Built with ❤️ for content creators worldwide.</p>
      </div>
    </div>
  </footer>
)

export default Footer
