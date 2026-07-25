import { HOLDER, TH_REGIONS, GLOBAL_CHAPTERS, FEED } from '../data.js'

export default function Community() {
  return (
    <>
      <section className="comm-hero">
        <div className="wrap">
          <span className="signed-chip">🛂 Signed in with Passport · {HOLDER.id}</span>
          <h1>EF Global Citizens — Thailand</h1>
          <p>
            The BELONG stage, live. Your Passport is your membership: join your region, meet
            mentors, earn stamps by giving back — and your journey never ends at the airport.
          </p>
        </div>
      </section>

      <div className="wrap comm-grid">
        <div>
          <div className="section-head" style={{ marginBottom: 16 }}>
            <h2 style={{ fontSize: 22 }}>Chapters near you</h2>
            <span className="chip chip-sky">🇹🇭 Thailand · 2,914 members</span>
          </div>
          <div className="region-grid">
            {TH_REGIONS.map((r) => (
              <div className={'region-card' + (r.hot ? ' hot' : '')} key={r.name}>
                {r.hot && <span className="hot-flag chip chip-gold">★ flagship</span>}
                <div className="r-head"><span>{r.icon}</span>{r.name}</div>
                <div className="members"><b>{r.members.toLocaleString()}</b> members · 12 mentors</div>
                <div className="next">📅 {r.next}</div>
                <button className="join btn btn-ghost" style={{ padding: '7px 14px', fontSize: 12.5 }}>Join</button>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 22, marginTop: 34 }}>Global chapters</h2>
          <div className="chapter-row">
            {GLOBAL_CHAPTERS.map((g) => (
              <div className="chapter" key={g.name}>
                {g.flag} {g.name} <span>{g.members.toLocaleString()}</span>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 22, marginTop: 34, marginBottom: 12 }}>Community feed</h2>
          <div className="feed">
            {FEED.map((p, i) => (
              <div className="feed-post" key={i}>
                <div className="fp-head"><b>{p.who}</b><span>{p.when} ago</span></div>
                <p>{p.text}</p>
                <div className="likes">♥ {p.likes} · 💬 Reply</div>
              </div>
            ))}
          </div>
        </div>

        <aside className="perk-rail">
          <div className="perk promo">
            <b>🎟 Alumni rate unlocked</b>
            <p>BELONG members get THB 15,000 off the next departure — yours or a friend you refer.</p>
            <div className="code">STAMP-AGAIN-26</div>
          </div>
          <div className="perk">
            <b>🤝 Mentor matching</b>
            <p>Guide the next SPARK cohort. Mentoring earns Passport stamps + priority scholarship access.</p>
          </div>
          <div className="perk">
            <b>🎓 Alumni scholarship fund</b>
            <p>Alumni-funded places every year — your GCI score is the application.</p>
          </div>
          <div className="perk">
            <b>🌏 AIESEC exchange</b>
            <p>Volunteer and exchange placements across 100+ countries with our partner AIESEC.</p>
          </div>
          <div className="perk">
            <b>💼 Global job-market access</b>
            <p>Employer board where your verified GCI transcript speaks first. 10-second HR check built in.</p>
          </div>
          <div className="perk">
            <b>🏛 Bangkok Summit 2026</b>
            <p>10 October · keynote alumni, showcase night, mentor awards. Delegate pass = 1 stamp.</p>
          </div>
        </aside>
      </div>
    </>
  )
}
