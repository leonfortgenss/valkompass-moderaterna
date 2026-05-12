import { useState } from 'react'
import { questions, parties } from './data/questions.js'
import { calculateResults } from './utils/scoring.js'
import StartPage from './components/StartPage.jsx'
import QuestionPage from './components/QuestionPage.jsx'
import ResultsPage from './components/ResultsPage.jsx'

const SCREEN = { START: 'start', QUESTION: 'question', RESULTS: 'results' }

export default function App() {
  const [screen, setScreen] = useState(SCREEN.START)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState({})

  function handleStart() {
    setAnswers({})
    setCurrentIndex(0)
    setScreen(SCREEN.QUESTION)
  }

  function handleAnswer(value) {
    const q = questions[currentIndex]
    const newAnswers = { ...answers, [q.id]: value }
    setAnswers(newAnswers)

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

  const results = calculateResults(answers, questions, parties)
  return <ResultsPage results={results} onRestart={handleRestart} />
}
