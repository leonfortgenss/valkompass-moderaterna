import { useState, useEffect } from 'react'

const AgreeStrongIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9.5" fill="currentColor" opacity="0.15"/>
    <path d="M7.5 12l3 3 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const AgreePartialIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
    <path d="M7.5 12l3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const DisagreePartialIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
    <path d="M8 12h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
)

const DisagreeStrongIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9.5" fill="currentColor" opacity="0.15"/>
    <path d="M8.5 8.5l7 7M15.5 8.5l-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
)

const OPTIONS = [
  { value: 2,  Icon: AgreeStrongIcon,    top: 'Instämmer', bot: 'helt'   },
  { value: 1,  Icon: AgreePartialIcon,   top: 'Instämmer', bot: 'delvis'  },
  { value: -1, Icon: DisagreePartialIcon,top: 'Delvis',    bot: 'emot'    },
  { value: -2, Icon: DisagreeStrongIcon, top: 'Helt',      bot: 'emot'    },
]

export default function QuestionPage({ question, total, current, answer, onAnswer, onBack }) {
  const [pending, setPending] = useState(null)

  // Clear pending state when the question changes
  useEffect(() => {
    setPending(null)
  }, [question.id])

  function handleSelect(value) {
    if (pending !== null) return
    setPending(value)
    setTimeout(() => onAnswer(value), 220)
  }

  return (
    <div className="question-page">
      <header className="q-header">
        <div className="m-badge small">M</div>
        <span className="q-counter">Fråga {current} av {total}</span>
      </header>

      <div className="progress-wrap">
        <div className="progress-bar" role="progressbar" aria-valuenow={current} aria-valuemin={1} aria-valuemax={total}>
          <div className="progress-fill" style={{ width: `${(current / total) * 100}%` }} />
        </div>
      </div>

      <div className="question-card">
        <span className="category-tag">{question.category}</span>
        <h2 className="question-text">{question.text}</h2>

        <div className="answer-grid" role="radiogroup" aria-label="Ditt svar">
          {OPTIONS.map((opt) => {
            const isSelected = pending === opt.value || (pending === null && answer === opt.value)
            return (
              <button
                key={opt.value}
                role="radio"
                aria-checked={isSelected}
                className={`answer-btn${isSelected ? ' selected' : ''}`}
                onClick={() => handleSelect(opt.value)}
                disabled={pending !== null}
              >
                <span className="answer-icon"><opt.Icon /></span>
                <span className="answer-label">{opt.top}<br />{opt.bot}</span>
              </button>
            )
          })}
        </div>

        {(question.proArg || question.conArg) && (
          <div className="arguments">
            {question.proArg && (
              <div className="arg arg-pro">
                <span className="arg-marker" aria-hidden="true">+</span>
                <span>{question.proArg}</span>
              </div>
            )}
            {question.conArg && (
              <div className="arg arg-con">
                <span className="arg-marker" aria-hidden="true">−</span>
                <span>{question.conArg}</span>
              </div>
            )}
          </div>
        )}

        <div className="action-row">
          <button className="skip-btn" onClick={() => onAnswer(null)}>
            Hoppa över denna fråga
          </button>
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
