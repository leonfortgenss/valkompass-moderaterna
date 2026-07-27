import { useState, useEffect } from 'react'
import komunLogo from '../assets/steungundsundskommun.png'

export default function QuestionPage({ question, total, current, answer, onAnswer, onBack }) {
  const [pending, setPending] = useState(null)

  // Clear pending state when the question changes
  useEffect(() => {
    setPending(null)
  }, [question.id])

  function handleSelect(letter) {
    if (pending !== null) return
    setPending(letter)
    setTimeout(() => onAnswer(letter), 220)
  }

  return (
    <div className="question-page">
      <header className="q-header">
        <img src={komunLogo} className="q-logo" alt="Stenungsunds kommun" />
        <span className="q-counter">Fråga {current} av {total}</span>
      </header>

      <div className="progress-wrap">
        <div className="progress-bar" role="progressbar" aria-valuenow={current} aria-valuemin={1} aria-valuemax={total}>
          <div className="progress-fill" style={{ width: `${(current / total) * 100}%` }} />
        </div>
      </div>

      <div className="question-card">
        <span className="category-tag">{question.category}</span>
        <h2 className="question-title">{question.title}</h2>
        <p className="question-text">{question.text}</p>

        <div className="answer-list" role="radiogroup" aria-label="Ditt svar">
          {question.options.map((opt) => {
            const isSelected = pending === opt.letter || (pending === null && answer === opt.letter)
            return (
              <button
                key={opt.letter}
                role="radio"
                aria-checked={isSelected}
                className={`answer-option${isSelected ? ' selected' : ''}`}
                onClick={() => handleSelect(opt.letter)}
                disabled={pending !== null}
              >
                <span className="option-letter">{opt.letter}</span>
                <span className="option-text">{opt.text}</span>
              </button>
            )
          })}
        </div>
      </div>

      {current > 1 && (
        <button className="back-btn" onClick={onBack}>
          ← Föregående fråga
        </button>
      )}
    </div>
  )
}
