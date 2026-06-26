const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="foot-grid">
        <div className="foot-brand">
          <div className="brand">
            <div className="brand-icon">
              <svg width="18" height="18" viewBox="0 0 20 20"><polygon points="4,2 16,10 4,18" fill="url(#fg)" /><defs><linearGradient id="fg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#6366f1" /><stop offset="100%" stopColor="#0ea5e9" /></linearGradient></defs></svg>
            </div>
            <span>Launch My OTT</span>
          </div>
          <p>End-to-end OTT platform development for content creators, broadcasters, and media companies worldwide. Building streaming empires since 2016.</p>
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
