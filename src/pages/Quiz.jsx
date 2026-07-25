import { useMemo, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { QUESTIONS, CHARACTERS } from '../data.js'

export default function Quiz() {
  const [params] = useSearchParams()
  const startAt = Math.min(Number(params.get('q') || 0), QUESTIONS.length - 1)
  const [step, setStep] = useState(params.get('q') ? startAt : -1)
  const [answers, setAnswers] = useState([])
  const navigate = useNavigate()

  const pick = (weights) => {
    const next = [...answers]
    next[step] = weights
    if (step + 1 < QUESTIONS.length) {
      setAnswers(next)
      setStep(step + 1)
    } else {
      const totals = {}
      for (const w of next) {
        if (!w) continue
        for (const [k, v] of Object.entries(w)) totals[k] = (totals[k] || 0) + v
      }
      const winner = Object.keys(CHARACTERS).reduce(
        (best, k) => ((totals[k] || 0) > (totals[best] || 0) ? k : best),
        'golden'
      )
      navigate('/quiz/result/' + winner)
    }
  }

  const progress = useMemo(
    () => (step < 0 ? 0 : Math.round(((step + 1) / QUESTIONS.length) * 100)),
    [step]
  )

  if (step === -1) {
    return (
      <div className="quiz-shell">
        <div className="quiz-intro">
          <div className="quiz-emoji-row" aria-hidden="true">☀️✨🦖🔥🍿🍯🌊</div>
          <span className="chip chip-red">90-second personality quiz</span>
          <h1>
            What Type of <span className="nug">Nugget Traveler</span><br />are You?
          </h1>
          <p className="sub">
            Seven travelers. One is you. Answer 6 quick situations and get your character card
            (free, IG-ready) plus a personalized map of your EF journey. Studying abroad is an
            identity — we hand out mirrors, not brochures.
          </p>
          <button className="btn btn-primary" onClick={() => setStep(0)}>
            Start the quiz →
          </button>
          <div className="quiz-meta">
            <span>⏱ 90 seconds</span>
            <span>🎴 Shareable card</span>
            <span>🎁 Free EF SET invite</span>
            <span>🛂 First Passport stamp</span>
          </div>
        </div>
      </div>
    )
  }

  const q = QUESTIONS[step]
  return (
    <div className="quiz-shell">
      <div className="quiz-progress">
        <button
          className="q-back"
          onClick={() => setStep(step - 1)}
          aria-label={step === 0 ? 'Back to quiz intro' : 'Previous question'}
        >
          ←
        </button>
        <div className="bar"><i style={{ width: progress + '%' }} /></div>
        <span>{step + 1} / {QUESTIONS.length}</span>
      </div>
      <div className="q-card">
        <div className="measure"><span className="chip chip-sky">measuring · {q.measures}</span></div>
        <h2>{q.q}</h2>
        {q.options.map((o, i) => (
          <button key={i} className="q-opt" onClick={() => pick(o.w)}>
            <span className="key">{'ABC'[i]}</span>
            {o.t}
          </button>
        ))}
      </div>
    </div>
  )
}
