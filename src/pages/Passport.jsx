import { Link } from 'react-router-dom'
import { QRCodeSVG } from 'qrcode.react'
import { HOLDER, VERIFY_URL } from '../data.js'

function Ring({ value, max = 100 }) {
  const r = 70
  const circ = 2 * Math.PI * r
  const filled = (value / max) * circ
  return (
    <div className="ring">
      <svg width="170" height="170" viewBox="0 0 170 170">
        <circle cx="85" cy="85" r={r} fill="none" stroke="#edf0f5" strokeWidth="14" />
        <circle
          cx="85" cy="85" r={r} fill="none" stroke="url(#g)" strokeWidth="14"
          strokeLinecap="round" strokeDasharray={`${filled} ${circ - filled}`}
        />
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2c6bb3" />
            <stop offset="100%" stopColor="#59a5f5" />
          </linearGradient>
        </defs>
      </svg>
      <div className="ring-center">
        <div>
          <b>{value}</b>
          <span>GCI · {HOLDER.gci.level}</span>
        </div>
      </div>
    </div>
  )
}

export default function Passport() {
  const h = HOLDER
  return (
    <div className="pass-shell">
      <div className="pass-head">
        <div>
          <span className="chip chip-gold">🛂 Physical from day one · digital for life</span>
          <h1>Global Citizen Passport</h1>
          <div className="sub">
            A verifiable, lifelong record of skills earned through real experiences — issued free at
            your first Global Citizen Challenge.
          </div>
        </div>
        <span className="chip chip-ok">● ACTIVE · NO EXPIRY</span>
      </div>

      <div className="book">
        {/* Left page — identity + EF SET page 1 */}
        <div className="page left">
          <div className="pg-label">Page 1 · Identity & English Level</div>
          <div className="idpage">
            <div className="idphoto">👩🏻</div>
            <div className="idfields">
              <div className="f"><b>Holder</b><span>{h.name}</span></div>
              <div className="f"><b>Passport no.</b><span>{h.id}</span></div>
              <div className="f"><b>Nationality</b><span>{h.nationality}</span></div>
              <div className="f"><b>Date of birth</b><span>{h.dob}</span></div>
              <div className="f"><b>Issued</b><span>{h.issued}</span></div>
              <div className="f"><b>Issuing office</b><span>{h.issuedAt}</span></div>
            </div>
          </div>

          <div className="efset-band">
            <span className="badge-ob chip chip-navy">Open Badge 3.0</span>
            <div className="score">{h.efset.score}</div>
            <div className="cefr">{h.efset.cefr}</div>
            <div className="meta">
              <b>EF SET English Certificate</b> — CEFR-aligned<br />
              Taken {h.efset.date} · ID {h.efset.certId}<br />
              Auto-printed as page 1 — value before any purchase.
            </div>
          </div>

          <div className="gci-panel">
            <Ring value={h.gci.post} />
            <div className="skill-bars">
              {h.gci.skills.map((s) => (
                <div className="sb" key={s.key}>
                  <div className="sb-head">
                    <span>{s.key}</span>
                    <span className="delta">{s.pre} → {s.post} (+{s.post - s.pre})</span>
                  </div>
                  <div className="track">
                    <span className="pre" style={{ width: s.pre + '%' }} />
                    <span className="post" style={{ width: s.post + '%', opacity: 0.85 }} />
                  </div>
                </div>
              ))}
              <div style={{ fontSize: 12, color: 'var(--muted)' }}>
                <b style={{ color: 'var(--navy)' }}>GCI-0</b> baseline {h.gci.pre} → <b style={{ color: 'var(--navy)' }}>GCI-2</b> post-APPLY {h.gci.post} · <b style={{ color: 'var(--ok)' }}>Δ +{h.gci.delta}</b> — the delta is the product.
              </div>
            </div>
          </div>

          <div className="mrz-strip">
            P&lt;GCPTHA&lt;&lt;SUKSAWAT&lt;&lt;PRAEW&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;<br />
            {h.id.replaceAll('-', '')}&lt;EFSET64C1&lt;GCI61L3&lt;DELTA19&lt;&lt;&lt;&lt;
          </div>
        </div>

        {/* Right page — stamps + QR */}
        <div className="page">
          <div className="pg-label">Pages 2–3 · Journey Stamps</div>
          <div className="stamp-grid">
            {h.stamps.map((s) => (
              <div className={'stamp ' + s.color} key={s.stage}>
                <div className="st-head"><span>{s.icon} {s.stage}</span><span>✔</span></div>
                <div className="st-title">{s.title}</div>
                <div className="st-detail">{s.detail}</div>
                <div className="st-date">{s.date}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 18, alignItems: 'center', marginTop: 24, background: '#fff', border: '1px solid var(--line)', borderRadius: 12, padding: '16px 18px' }}>
            <QRCodeSVG value={VERIFY_URL} size={92} fgColor="#0b2545" />
            <div style={{ fontSize: 12.5, color: 'var(--muted)', lineHeight: 1.6 }}>
              <b style={{ color: 'var(--navy)' }}>Works as an ID.</b> Scan to verify this credential —
              unique ID + evidence, checkable by any recruiter in 10 seconds.<br />
              <span style={{ fontFamily: 'var(--font-m)', fontSize: 11 }}>{VERIFY_URL.replace('https://', '')}</span>
            </div>
          </div>

          <div className="mrz-strip">
            STAMPS&lt;4OF4&lt;SPARK&lt;IMMERSE&lt;APPLY&lt;BELONG&lt;&lt;MEMBER&lt;LIFE
          </div>
        </div>
      </div>

      <div className="pass-actions">
        <Link to="/transcript" className="btn btn-navy">📄 View GCI Transcript</Link>
        <Link to={'/verify/' + h.id} className="btn btn-ghost">✅ Open verification page</Link>
        <button className="btn btn-ghost">in Add to LinkedIn</button>
        <Link to="/community" className="btn btn-gold">♾ Enter EF Global Citizens</Link>
      </div>
    </div>
  )
}
