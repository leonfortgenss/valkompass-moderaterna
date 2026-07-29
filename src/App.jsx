import { useEffect, useMemo, useState } from 'react'
import { questions } from './data/questions.js'
import { calculateResults } from './utils/scoring.js'
import StartPage from './components/StartPage.jsx'
import QuestionPage from './components/QuestionPage.jsx'
import ResultsPage from './components/ResultsPage.jsx'
import { trackEvent } from './lib/analytics.js'

const SCREEN = { START: 'start', QUESTION: 'question', RESULTS: 'results' }
const STORAGE_KEY = 'vilket-stenungsund-vill-du-ha:svar'

function loadStoredAnswers() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw)
    return typeof parsed === 'object' && parsed !== null ? parsed : {}
  } catch {
    return {}
  }
}

function persistAnswers(answers) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(answers))
  } catch {
    // Lokal lagring kan vara otillgänglig (t.ex. privat läge) — inget krasch.
  }
}

function clearStoredAnswers() {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    // Ignorera.
  }
}

function firstUnansweredIndex(answers) {
  const index = questions.findIndex((q) => answers[q.id] === undefined)
  return index === -1 ? questions.length : index
}

export default function App() {
  const initialAnswers = loadStoredAnswers()
  const initialUnanswered = firstUnansweredIndex(initialAnswers)
  const hasProgress = Object.keys(initialAnswers).length > 0

  const [screen, setScreen] = useState(
    hasProgress ? (initialUnanswered < questions.length ? SCREEN.QUESTION : SCREEN.RESULTS) : SCREEN.START,
  )
  const [currentIndex, setCurrentIndex] = useState(Math.min(initialUnanswered, questions.length - 1))
  const [answers, setAnswers] = useState(initialAnswers)

  const results = useMemo(
    () => (screen === SCREEN.RESULTS ? calculateResults(answers, questions) : null),
    [screen, answers],
  )

  useEffect(() => {
    if (screen === SCREEN.RESULTS && results) {
      trackEvent('test-completed', {
        profile: results.profile.name,
        match: results.matchPercent,
      })
    }
    // Ska bara skickas när man landar på resultatsidan, inte vid varje omritning.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screen])

  function handleStart() {
    trackEvent('test-started')
    setCurrentIndex(0)
    setScreen(SCREEN.QUESTION)
  }

  function handleAnswer(letter) {
    const q = questions[currentIndex]
    const newAnswers = { ...answers, [q.id]: letter }
    setAnswers(newAnswers)
    persistAnswers(newAnswers)

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setScreen(SCREEN.RESULTS)
    }
  }

  function handleBack() {
    setCurrentIndex(currentIndex - 1)
  }

  function handleRestart() {
    setAnswers({})
    clearStoredAnswers()
    setCurrentIndex(0)
    setScreen(SCREEN.START)
  }

  if (screen === SCREEN.START) {
    return <StartPage onStart={handleStart} />
  }

  if (screen === SCREEN.QUESTION) {
    return (
      <QuestionPage
        question={questions[currentIndex]}
        total={questions.length}
        current={currentIndex + 1}
        answer={answers[questions[currentIndex].id]}
        onAnswer={handleAnswer}
        onBack={handleBack}
      />
    )
  }

  return <ResultsPage results={results} onRestart={handleRestart} />
}
