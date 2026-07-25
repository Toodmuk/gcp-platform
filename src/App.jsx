import { Routes, Route, NavLink, Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home.jsx'
import Quiz from './pages/Quiz.jsx'
import QuizResult from './pages/QuizResult.jsx'
import Passport from './pages/Passport.jsx'
import Verify from './pages/Verify.jsx'
import Transcript from './pages/Transcript.jsx'
import Community from './pages/Community.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

const I = ({ children }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
)

const TABS = [
  { to: '/', end: true, label: 'Home', icon: <I><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /></I> },
  { to: '/quiz', label: 'Quiz', icon: <I><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" /><path d="M18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z" /></I> },
  { to: '/passport', label: 'Passport', icon: <I><rect x="4" y="3.5" width="16" height="17" rx="2" /><circle cx="12" cy="10" r="2.5" /><path d="M8 17c.8-2 2.3-3 4-3s3.2 1 4 3" /></I> },
  { to: '/community', label: 'Community', icon: <I><circle cx="9" cy="8" r="3" /><path d="M3.5 20c.7-3 2.7-4.5 5.5-4.5s4.8 1.5 5.5 4.5" /><circle cx="17" cy="9" r="2.4" /><path d="M16.8 15.7c1.9.5 3.2 1.7 3.8 3.8" /></I> },
  { to: '/verify/GCP-TH-2026-000117', label: 'Verify', icon: <I><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" /><path d="M9 12l2 2 4-4" /></I> },
]

export default function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <header className="nav">
        <Link to="/" className="nav-brand">
          <span className="nav-mark">GC</span>
          <span>
            <strong>Global Citizen Passport</strong>
            <em>by EF Education First</em>
          </span>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/quiz">Nugget Quiz</NavLink>
          <NavLink to="/passport">My Passport</NavLink>
          <NavLink to="/community">Community</NavLink>
          <NavLink to="/verify/GCP-TH-2026-000117" className="nav-verify">✓ Verify a credential</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quiz/result/:type" element={<QuizResult />} />
          <Route path="/passport" element={<Passport />} />
          <Route path="/verify/:id" element={<Verify />} />
          <Route path="/transcript" element={<Transcript />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </main>

      <footer className="footer">
        <div>
          <strong>EF Global Citizen Passport</strong> — a lifelong, verifiable record of skills earned
          through real experiences, scored by the GCI.
        </div>
        <div className="footer-meta">
          Concept prototype · Team Peter Partner · SCC 2026 × EF Education First
        </div>
      </footer>

      <nav className="tabbar" aria-label="Primary mobile">
        {TABS.map((t) => (
          <NavLink key={t.to} to={t.to} end={t.end}>
            {t.icon}
            <span>{t.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
