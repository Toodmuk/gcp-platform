import { useParams, Link } from 'react-router-dom'
import { HOLDER } from '../data.js'

export default function Verify() {
  const { id } = useParams()
  const h = HOLDER

  return (
    <div className="verify-shell">
      <div className="verify-banner">
        <div className="shield">🛡</div>
        <div>
          <h1>Credential verified</h1>
          <p>Issued and signed by EF Education First · Open Badges 3.0 / W3C Verifiable Credential</p>
        </div>
        <div className="vtime">verified in 1.2 s<br />25 JUL 2026 · 14:02 GMT+7</div>
      </div>

      <div className="verify-card">
        <div className="verify-id">
          <div className="vphoto">👩🏻</div>
          <div>
            <h2>{h.name}</h2>
            <div className="vid">{id || h.id}</div>
            <div className="mt8">
              <span className="chip chip-ok">● Active</span>{' '}
              <span className="chip chip-navy">EF SET {h.efset.score} · CEFR {h.efset.cefr}</span>{' '}
              <span className="chip chip-gold">Member since 2025</span>
            </div>
          </div>
          <div className="vscore">
            <b>{h.gci.post}</b>
            <span>GCI · {h.gci.level}<br />Δ +{h.gci.delta} · GCI-0 → GCI-2</span>
          </div>
        </div>

        <div className="checks">
          <div className="check">
            <span className="ok-dot">✓</span>
            <div><b>Issuer signature valid</b><span>EF Education First · issuer DID verified against registry</span></div>
          </div>
          <div className="check">
            <span className="ok-dot">✓</span>
            <div><b>Open Badges 3.0 compliant</b><span>1EdTech spec · W3C Verifiable Credentials data model</span></div>
          </div>
          <div className="check">
            <span className="ok-dot">✓</span>
            <div><b>Evidence attached</b><span>GCI rubric scores, APPLY portfolio, mentor sign-off, showcase video</span></div>
          </div>
          <div className="check">
            <span className="ok-dot">✓</span>
            <div><b>Not revoked · never expires</b><span>Status list checked · lifelong credential</span></div>
          </div>
        </div>

        <div className="v-stamps">
          {h.stamps.map((s) => (
            <div className="vs-row" key={s.stage}>
              <span className="vs-stage">{s.icon} {s.stage}</span>
              <div className="vs-body">
                <b>{s.title}</b>
                <span>Evidence: {s.evidence}</span>
              </div>
              <span className="vs-date">{s.date}</span>
            </div>
          ))}
        </div>

        <div className="verify-foot">
          <div style={{ fontSize: 13, color: 'var(--muted)', maxWidth: 380 }}>
            <b style={{ color: 'var(--navy)' }}>For recruiters:</b> every claim above is evidence-backed —
            you see the project, the showcase and the mentor sign-off, not just a logo.
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <Link to="/transcript" className="btn btn-navy">📄 GCI Transcript (PDF)</Link>
            <button className="btn btn-ghost">in View on LinkedIn</button>
          </div>
        </div>

        <div className="verify-hash">
          sha256:9f1c…e77a · anchored 25 JUL 2026 · gcp.ef.com/verify/{(id || h.id)} · powered by EF measurement infrastructure (EF SET · EF EPI since 2011)
        </div>
      </div>
    </div>
  )
}
