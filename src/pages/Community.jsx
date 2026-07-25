import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { HOLDER, REGIONS, GLOBAL_CHAPTERS } from '../data.js'

// Stylized Thailand, proportioned from real coordinates (lon 97.5–105.5 → x, lat 20.5–5.5 → y)
const PATHS = {
  north: 'M138,15 L185,25 L225,60 L230,135 L200,170 L150,175 L115,140 L110,70 Z',
  northeast: 'M230,135 L285,120 L340,150 L385,215 L380,285 L330,330 L270,320 L235,270 L225,190 Z',
  central: 'M150,175 L200,170 L225,190 L235,270 L225,330 L195,370 L160,380 L135,330 L130,240 Z',
  west: 'M115,140 L150,175 L130,240 L135,330 L160,380 L150,430 L115,415 L95,330 L92,220 Z',
  east: 'M225,330 L270,320 L330,330 L310,375 L270,425 L235,400 L215,370 Z',
  south: 'M130,400 L180,405 L165,470 L145,530 L120,590 L95,640 L110,690 L160,715 L215,730 L205,758 L140,745 L90,700 L70,645 L85,585 L105,520 L112,455 Z',
}

const LABELS = {
  north: [170, 105],
  northeast: [303, 228],
  central: [183, 262],
  west: [121, 268],
  east: [267, 363],
  south: [128, 555],
}

function seedChat(c, regionName) {
  return [
    { who: 'system', text: `You joined ${c.name} ✓ — say hi!` },
    { who: 'P’Mild · moderator', text: `Welcome! 🎉 We're the ${regionName} crew. Next up: ${c.next}.` },
    { who: 'Boss (Malta ’25)', text: 'New member! Which stamp are you on? I got my APPLY stamp here 🛂' },
  ]
}

function Chat({ community, regionName, onClose }) {
  const [msgs, setMsgs] = useState(() => seedChat(community, regionName))
  const [text, setText] = useState('')
  const bodyRef = useRef(null)

  useEffect(() => {
    bodyRef.current?.scrollTo(0, bodyRef.current.scrollHeight)
  }, [msgs])

  const send = (e) => {
    e.preventDefault()
    const t = text.trim()
    if (!t) return
    setMsgs((m) => [...m, { who: 'you', text: t }])
    setText('')
    setTimeout(() => {
      setMsgs((m) => [...m, { who: 'P’Mild · moderator', text: 'Love it 🙌 Pin the event and bring a friend — referrals earn you a mentor stamp!' }])
    }, 700)
  }

  return (
    <div className="chat-overlay" role="dialog" aria-label={'Chat — ' + community.name}>
      <div className="chat-sheet">
        <div className="chat-head">
          <span className="chat-icon">{community.icon}</span>
          <div>
            <b>{community.name}</b>
            <span>{community.members} members · 12 online · {regionName}</span>
          </div>
          <button className="chat-close" onClick={onClose} aria-label="Close chat">✕</button>
        </div>
        <div className="chat-body" ref={bodyRef}>
          {msgs.map((m, i) =>
            m.who === 'system' ? (
              <div className="chat-sys" key={i}>{m.text}</div>
            ) : (
              <div className={'chat-msg' + (m.who === 'you' ? ' mine' : '')} key={i}>
                {m.who !== 'you' && <b>{m.who}</b>}
                <p>{m.text}</p>
              </div>
            )
          )}
        </div>
        <form className="chat-input" onSubmit={send}>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Message the club…"
            aria-label="Message"
          />
          <button className="btn btn-primary" type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default function Community() {
  const [params] = useSearchParams()
  const initRegion = REGIONS[params.get('region')] ? params.get('region') : 'central'
  const [regionId, setRegionId] = useState(initRegion)
  const [chatIdx, setChatIdx] = useState(params.get('chat') !== null ? Number(params.get('chat')) : null)
  const region = REGIONS[regionId]
  const chat = chatIdx !== null ? region.communities[chatIdx] : null

  return (
    <>
      <section className="comm-hero">
        <div className="wrap">
          <span className="signed-chip">🛂 Signed in with Passport · {HOLDER.id}</span>
          <h1>EF Global Citizens — Thailand</h1>
          <p>
            The BELONG stage, live. Tap your region on the map, find your club — run, hike, board
            games, mentors — and the journey never ends at the airport.
          </p>
        </div>
      </section>

      <div className="wrap comm-v2">
        <div className="map-col">
          <svg className="th-map" viewBox="60 0 340 770" role="group" aria-label="Thailand regions map">
            {Object.entries(PATHS).map(([id, d]) => (
              <path
                key={id}
                d={d}
                className={regionId === id ? 'sel' : ''}
                style={{ '--rc': REGIONS[id].color }}
                onClick={() => { setRegionId(id); setChatIdx(null) }}
                tabIndex={0}
                role="button"
                aria-label={`${REGIONS[id].name} — ${REGIONS[id].members} members`}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { setRegionId(id); setChatIdx(null) } }}
              />
            ))}
            {Object.entries(LABELS).map(([id, [x, y]]) => (
              <g key={id} className="map-label" pointerEvents="none">
                <text x={x} y={y} textAnchor="middle" className={'lbl' + (regionId === id ? ' sel' : '')}>
                  {REGIONS[id].members.toLocaleString()}
                </text>
              </g>
            ))}
            <g pointerEvents="none">
              <circle cx="168" cy="348" r="5" fill="#e8b84b" stroke="#0b2545" strokeWidth="1.6" />
              <text x="150" y="352" textAnchor="end" className="bkk">Bangkok</text>
            </g>
          </svg>
          <div className="map-hint">🇹🇭 2,914 members across 6 regions — tap a region to explore its clubs</div>
        </div>

        <div className="region-panel">
          <div className="rp-head">
            <span className="rp-emoji">{region.emoji}</span>
            <div>
              <h2>{region.name}</h2>
              <span className="rp-sub">{region.hub} · <b>{region.members.toLocaleString()}</b> members</span>
            </div>
            {region.flagship && <span className="chip chip-gold">★ flagship</span>}
          </div>

          {region.communities.map((c, i) => (
            <div className="cc-card" key={c.name}>
              <span className="cc-icon">{c.icon}</span>
              <div className="cc-body">
                <b>{c.name}</b>
                <span>{c.members} members · <em className="cc-tag">{c.tag}</em></span>
                <span className="cc-next">📅 {c.next}</span>
              </div>
              <button className="btn btn-primary cc-join" onClick={() => setChatIdx(i)}>
                Join
              </button>
            </div>
          ))}

          <div className="cc-card ghost">
            <span className="cc-icon">✨</span>
            <div className="cc-body">
              <b>Start a new club</b>
              <span>3 founding members + a mentor sign-off = an official chapter stamp</span>
            </div>
            <button className="btn btn-ghost cc-join">Propose</button>
          </div>
        </div>
      </div>

      <div className="wrap">
        <h2 style={{ fontSize: 20, margin: '6px 0 12px' }}>Global chapters — your passport travels</h2>
        <div className="chapter-row">
          {GLOBAL_CHAPTERS.map((g) => (
            <div className="chapter" key={g.name}>
              {g.flag} {g.name} <span>{g.members.toLocaleString()}</span>
            </div>
          ))}
        </div>

        <div className="perk-strip">
          <div className="perk promo">
            <b>🎟 Alumni rate unlocked</b>
            <p>THB 15,000 off the next departure — yours or a friend you refer.</p>
            <div className="code">STAMP-AGAIN-26</div>
          </div>
          <div className="perk">
            <b>🤝 Mentor matching</b>
            <p>Guide the next SPARK cohort — mentoring earns Passport stamps + scholarship priority.</p>
          </div>
          <div className="perk">
            <b>🎓 Alumni scholarship fund</b>
            <p>Alumni-funded places every year — your GCI score is the application.</p>
          </div>
          <div className="perk">
            <b>🏛 Bangkok Summit 2026</b>
            <p>10 October · keynote alumni, showcase night, mentor awards. Delegate pass = 1 stamp.</p>
          </div>
        </div>
      </div>

      {chat && <Chat community={chat} regionName={region.name} onClose={() => setChatIdx(null)} />}
    </>
  )
}
