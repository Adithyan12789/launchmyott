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
          <Badge text="Limited Capacity" />
          <h2>Strict Limit of <span className="urg-hl">8 New OTT Launches</span> Per Month</h2>
          <p>To maintain the high performance of our OTT platform development, we cap monthly project kickoffs. Our queue has only <strong>3 launch slots remaining</strong> for this cycle.</p>
          <div className="urg-badges">
            <div className="ub">🔥 Only 3 of 8 Launch Slots Remaining This Month</div>
            <div className="ub">🎁 Free Content Migration & CMS Ingestion ($2,500 Value)</div>
            <div className="ub">⚡ Start This Week → Get Guaranteed 4-Week Launch Track</div>
          </div>
          <Mag href="#contact" className="btn-pri btn-lg">🚀 Claim Your Consultation Spot Now</Mag>
        </div>
      </SR>
    </div>
  </section>
)

export default Urgency
