const Marquee = ({ items }) => (
  <div className="mq">
    <div className="mq-track">
      {[...items, ...items, ...items].map((t, i) => <div key={i} className="mq-item">{t}</div>)}
    </div>
  </div>
)

export default Marquee
