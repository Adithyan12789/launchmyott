import Squares from '../shared/Squares'
import SR from '../shared/SR'
import Mag from '../shared/Mag'
import Badge from '../shared/Badge'

const Urgency = () => (
  <section className="urgency">
    <div className="urgency-bg" />
    <Squares />
    <div className="container">
      <SR>
        <div className="urgency-inner">
          <Badge text="Limited Availability" />
          <h2>We Only Take On <span className="urg-hl">8 New Projects</span> Per Month</h2>
          <p>To maintain the quality our clients expect, we strictly limit new project intake. Our current queue has <strong>3 spots remaining for this month</strong>. Once filled, the next available start date moves to the following month.</p>
          <div className="urg-badges">
            <div className="ub">🔥 3 of 8 Spots Remaining This Month</div>
            <div className="ub">🎁 Free Content Migration ($2,500 value) — This Month Only</div>
            <div className="ub">⚡ Book This Week → Get Priority 4-Week Launch Track</div>
          </div>
          <Mag href="#contact" className="btn-pri btn-lg">🚀 Claim Your Spot Now</Mag>
        </div>
      </SR>
    </div>
  </section>
)

export default Urgency
