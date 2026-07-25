import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { CHARACTERS } from '../data.js'

export default function QuizResult() {
  const { type } = useParams()
  const c = CHARACTERS[type] || CHARACTERS.golden
  const [sent, setSent] = useState(false)

  return (
    <div className="result-shell">
      <div className="result-grid">
        <div>
          <div className="ig-card" style={{ background: `linear-gradient(165deg, ${c.bg}, #ffffff 55%, ${c.bg})` }}>
            <div className="ig-top">
              <span>EF · NUGGET TRAVELER</span>
              <span style={{ color: c.color }}>#{c.id.toUpperCase()}</span>
            </div>
            <div className="ig-hero">
              <div className="big-emoji">{c.emoji}</div>
              <div className="char-title" style={{ color: c.color }}>{c.title}</div>
              <h2>{c.name}</h2>
            </div>
            <div className="ig-tag">“{c.tagline}”</div>
            <div className="ig-traits">
              {c.traits.map((t) => <span key={t}>{t}</span>)}
            </div>
            <div className="ig-bottom">
              <span>Which nugget are you? 🍗<br />ef.com/nugget-traveler</span>
              <b>EF · SCC 2026</b>
            </div>
          </div>
          <div className="result-actions">
            <button className="btn btn-navy">⬇ Save card</button>
            <button className="btn btn-ghost">📤 Share to IG Story</button>
          </div>
        </div>

        <div className="result-side">
          <span className="chip chip-gold">Your result · 1 of 7 characters</span>
          <h1>{c.name} — {c.title}</h1>
          <p className="lead">{c.tagline}</p>

          <div className="profile-grid">
            <div className="p-item"><b>Duration window</b><span>{c.profile.duration}</span></div>
            <div className="p-item"><b>Outcome type</b><span>{c.profile.outcome}</span></div>
            <div className="p-item"><b>Budget exposure</b><span>{c.profile.budget}</span></div>
            <div className="p-item"><b>Life stage</b><span>{c.profile.stage}</span></div>
          </div>

          <div className="journey-box">
            <b>✈ Your EF journey match</b>
            <p>{c.journey}</p>
            <p><strong style={{ color: 'var(--navy)' }}>Next step:</strong> {c.next}</p>
          </div>

          <div className="gate">
            {!sent ? (
              <>
                <h3>🔓 Unlock your full Nugget Report (PDF)</h3>
                <p>
                  A personalized read of your traveler type + a mapped EF journey with programs,
                  destinations and budget lanes — plus an invite to the next Global Citizen
                  Challenge (free EF SET + your first Passport stamp).
                </p>
                <form onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
                  <input placeholder="Name" required />
                  <input placeholder="Email" type="email" required />
                  <input placeholder="LINE ID" />
                  <input placeholder="Phone (optional)" />
                  <button className="btn btn-gold" type="submit">Send me the report →</button>
                </form>
              </>
            ) : (
              <div className="gate-done">
                <div className="big">📬</div>
                <h3>Report on the way!</h3>
                <p>Check your inbox — and grab your first stamp at a Global Citizen Challenge near you.</p>
                <Link to="/passport" className="btn btn-gold mt16">Preview the Passport →</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
