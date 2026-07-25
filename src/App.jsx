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
        <nav className="nav-links">
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
    </div>
  )
}
