import { QRCodeSVG } from 'qrcode.react'
import { HOLDER, VERIFY_URL } from '../data.js'

const LEVELS = {
  Adaptability: ['Follows routine', 'Copes with change', 'Navigates the unfamiliar', 'Thrives, leads others'],
  'Cultural Awareness': ['Own-culture lens', 'Notices difference', 'Adjusts behaviour', 'Bridges & mediates'],
  'Confident Communication': ['Hesitant, rehearsed', 'Functional exchanges', 'Holds real conversations', 'Persuades across cultures'],
}

const toLevel = (v) => (v > 75 ? 'L4' : v > 50 ? 'L3' : v > 25 ? 'L2' : 'L1')

export default function Transcript() {
  const h = HOLDER
  return (
    <div className="tr-shell">
      <div className="tr-doc">
        <div className="tr-head">
          <div>
            <h1>Global Citizenship Index — Official Transcript</h1>
            <div className="tr-sub">
              Scored against the GCI rubric v1.2 · anchored to OECD PISA Global Competence &amp;
              Council of Europe RFCDC descriptor banks · same measurement DNA as the EF EPI
            </div>
          </div>
          <div className="tr-ef">EF<span>EDUCATION FIRST</span></div>
        </div>

        <div className="tr-meta">
          <div className="f"><b>Holder</b><span>{h.name}</span></div>
          <div className="f"><b>Credential ID</b><span>{h.id}</span></div>
          <div className="f"><b>English (EF SET)</b><span>{h.efset.score} · CEFR {h.efset.cefr}</span></div>
          <div className="f"><b>Programme</b><span>EF London · 8 wks + APPLY</span></div>
        </div>

        <table className="tr-table">
          <thead>
            <tr>
              <th>Skill</th>
              <th>Pre-departure</th>
              <th>Post-APPLY</th>
              <th>Δ Delta</th>
              <th>Level descriptor (post)</th>
            </tr>
          </thead>
          <tbody>
            {h.gci.skills.map((s) => (
              <tr key={s.key}>
                <td><b>{s.key}</b></td>
                <td className="num">{s.pre} <span className="lvl">{toLevel(s.pre)}</span></td>
                <td className="num">{s.post} <span className="lvl">{toLevel(s.post)}</span></td>
                <td className="num" style={{ color: 'var(--ok)', fontWeight: 800 }}>+{s.post - s.pre}</td>
                <td>{LEVELS[s.key][Number(toLevel(s.post)[1]) - 1]}</td>
              </tr>
            ))}
            <tr className="total">
              <td>GCI Composite</td>
              <td className="num">{h.gci.pre}</td>
              <td className="num">{h.gci.post}</td>
              <td className="num" style={{ color: 'var(--ok)' }}>+{h.gci.delta}</td>
              <td>{h.gci.level}</td>
            </tr>
          </tbody>
        </table>

        <div style={{ fontSize: 11.5, color: 'var(--muted)' }}>
          Scoring: 40% structured observation (EF staff rubric) · 30% portfolio evidence in the
          Passport · 30% self + peer assessment. Levels L1 Novice → L4 Global-ready.
        </div>

        <div className="tr-evidence">
          <b>Evidence on file (verifiable)</b>
          <li>IMMERSE — GCI observation rubric, EF London staff, MAR–MAY 2026 · attendance 96%</li>
          <li>APPLY — “Bring It Home”: 4-week English club, Triam Udom · showcase video, 28 JUN 2026</li>
          <li>Mentor sign-off — P’Mild (London ’24), EF Global Citizens mentor programme</li>
          <li>EF SET certificate {h.efset.certId} · CEFR {h.efset.cefr}, {h.efset.date}</li>
        </div>

        <div className="tr-sign">
          <div className="sig">
            <div className="script">Kanyarat P.</div>
            <div className="line">Country Manager, EF Thailand</div>
            <span>Authorised signatory</span>
          </div>
          <div className="sig">
            <div className="script">D. Whitmore</div>
            <div className="line">Head of GCI Assessment, EF</div>
            <span>Rubric v1.2 · calibrated examiner</span>
          </div>
          <div style={{ textAlign: 'center' }}>
            <QRCodeSVG value={VERIFY_URL} size={84} fgColor="#0b2545" />
            <div style={{ fontFamily: 'var(--font-m)', fontSize: 9.5, color: 'var(--muted)', marginTop: 6 }}>scan to verify</div>
          </div>
        </div>

        <div className="tr-foot">
          <span>DOC GCI-TR-{h.id}</span>
          <span>sha256:9f1c…e77a</span>
          <span>issued 25 JUL 2026 · valid for life</span>
        </div>
      </div>

      <div className="center mt24">
        <button className="btn btn-navy">⬇ Download PDF</button>{' '}
        <button className="btn btn-ghost">in Add to LinkedIn profile</button>
      </div>
    </div>
  )
}
