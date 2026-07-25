import { Link } from 'react-router-dom'
import { HOLDER } from '../data.js'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="chip chip-gold">🛂 A lifelong credential — not a trip</span>
            <h1>
              Some things can’t be downloaded.<br />
              <span className="accent">Your GCI score</span> is the product.
            </h1>
            <p className="lead">
              The Global Citizen Passport is a verifiable, lifelong record of skills earned through
              real experiences — Adaptability, Cultural Awareness, Confident Communication — scored
              pre → post by the Global Citizenship Index (GCI), built on the same measurement DNA as
              the EF EPI.
            </p>
            <div className="hero-ctas">
              <Link to="/quiz" className="btn btn-primary">🍗 Find your Traveler type — free</Link>
              <Link to="/passport" className="btn btn-gold">Open my Passport</Link>
            </div>
            <div className="hero-stats">
              <div className="stat"><b>Free</b><span>first stamp + EF SET, no purchase</span></div>
              <div className="stat"><b>10 sec</b><span>for HR to verify your credential</span></div>
              <div className="stat"><b>No expiry</b><span>membership for life</span></div>
            </div>
          </div>
          <div>
            <div className="pp-cover">
              <div className="crest">🌏</div>
              <h3>GLOBAL CITIZEN<br />PASSPORT</h3>
              <div className="sub">EF EDUCATION FIRST</div>
              <div className="mrz">
                P&lt;GCPTHA&lt;&lt;SUKSAWAT&lt;&lt;PRAEW&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;<br />
                GCPTH2026000117&lt;GCI61&lt;L3&lt;DELTA19&lt;&lt;&lt;&lt;&lt;&lt;&lt;
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="kicker">The journey</span>
              <h2>Four stamps. One transformation.</h2>
            </div>
            <Link className="more" to="/passport">See a live passport →</Link>
          </div>
          <div className="card-grid">
            <div className="stage-card sky">
              <span className="icon">⚡</span>
              <div className="stage">SPARK</div>
              <p>Free EF SET + one real-world cultural task at a Global Citizen Challenge. Your CEFR score auto-prints as page 1 — value before any purchase.</p>
            </div>
            <div className="stage-card navy">
              <span className="icon">✈</span>
              <div className="stage">IMMERSE</div>
              <p>The real experience: 2–4 week camps to 6–52 week immersion. GCI scored pre → post — the delta is the product.</p>
            </div>
            <div className="stage-card blue">
              <span className="icon">🛠</span>
              <div className="stage">APPLY</div>
              <p>A 4-week “Bring It Home” micro-project with a public showcase. Evidence goes into your Passport — more than a badge.</p>
            </div>
            <div className="stage-card red">
              <span className="icon">♾</span>
              <div className="stage">BELONG</div>
              <p>Mentor stamps, the Bangkok Summit, scholarships, AIESEC exchange and global job-market access. No expiry.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="kicker">Explore the platform</span>
              <h2>One passport, three superpowers</h2>
            </div>
          </div>
          <div className="tile-grid">
            <Link to="/quiz" className="tile">
              <span className="t-emoji">🍗</span>
              <h3>What Type of Nugget Traveler are You?</h3>
              <p>A 90-second situational quiz → 1 of 7 characters, an IG-ready card, and a personalized EF journey map.</p>
              <span className="go">Take the quiz →</span>
            </Link>
            <Link to={'/verify/' + HOLDER.id} className="tile">
              <span className="t-emoji">✅</span>
              <h3>Verified in 10 seconds</h3>
              <p>Unique ID + QR. Open Badges 3.0 format — any recruiter can check the skills behind the claim, with evidence.</p>
              <span className="go">Try the HR view →</span>
            </Link>
            <Link to="/community" className="tile">
              <span className="t-emoji">🌏</span>
              <h3>EF Global Citizens</h3>
              <p>Your Passport is your login. Regional chapters, mentors, the Bangkok Summit — and alumni rates on your next departure.</p>
              <span className="go">Enter the community →</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
