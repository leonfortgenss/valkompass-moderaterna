import { useEffect, useState } from 'react'
import komunLogo from '../assets/steungundsundskommun.png'
import moderaternaLogo from '../assets/Moderaterna Logo.svg'
const VALMANIFEST_URL = 'https://www.stenungsundsmoderaterna.se/valmanifest2026'
const MEDLEM_URL = 'https://moderaterna.membersite.se/Membership/BuyMembershipGetSparData'

export default function ResultsPage({ results, onRestart }) {
  const [visible, setVisible] = useState(false)
  const [shareState, setShareState] = useState('idle')
  const { matchPercent, profile, subScores, agreements, disagreements } = results

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  async function handleShare() {
    const shareText = `Jag blev "${profile.name}" i testet Vilket Stenungsund vill du ha?`
    const shareUrl = window.location.href

    if (navigator.share) {
      try {
        await navigator.share({ text: shareText, url: shareUrl })
      } catch {
        // Avbrutet av användaren — ignorera.
      }
      return
    }

    try {
      await navigator.clipboard.writeText(`${shareText} ${shareUrl}`)
      setShareState('copied')
      setTimeout(() => setShareState('idle'), 2500)
    } catch {
      setShareState('idle')
    }
  }

  return (
    <div className="results-page">
      <header className="q-header">
        <img src={komunLogo} className="q-logo" alt="Stenungsunds kommun" />
        <span className="q-counter">Ditt resultat</span>
      </header>

      <div className="results-card">
        <p className="results-label">Din profil</p>
        <h1 className="profile-name">{profile.name}</h1>
        <p className="profile-text">{profile.text}</p>
        <p className="profile-closing">{profile.closing}</p>

        {/* 3. Moderat matchningsprocent */}
        <div className="match-block">
          <span className="match-pct">{matchPercent}%</span>
          <p className="match-text">
            Dina svar överensstämmer till {matchPercent} procent med Moderaterna i
            Stenungsunds prioriteringar.
          </p>
        </div>

        {/* 4. Tre delresultat */}
        <p className="section-label">Dina tre delresultat</p>
        <ul className="subscore-list">
          {subScores.map((s) => (
            <li key={s.key} className="subscore-row">
              <div className="subscore-head">
                <span className="subscore-label">{s.label}</span>
                <span className="subscore-pct">{s.percent}%</span>
              </div>
              <div className="bar-track">
                <div
                  className={`bar-fill${visible ? ' visible' : ''}`}
                  style={{ width: `${s.percent}%` }}
                />
              </div>
              <p className="subscore-text">{s.text}</p>
            </li>
          ))}
        </ul>

        {/* 5. Frågor där ni tycker lika */}
        {agreements.length > 0 && (
          <>
            <p className="section-label">Här tänker ni lika</p>
            <ul className="compare-list agree">
              {agreements.map((a) => (
                <li key={a.id} className="compare-item">
                  <span className="compare-icon" aria-hidden="true">✓</span>
                  <div>
                    <span className="compare-heading">{a.label}</span>
                    <p className="compare-text">{a.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}

        {/* 6. Frågor där ni tycker olika */}
        {disagreements.length > 0 && (
          <>
            <p className="section-label">Här tänker du annorlunda än vi</p>
            <ul className="compare-list disagree">
              {disagreements.map((d) => (
                <li key={d.id} className="compare-item">
                  <span className="compare-icon" aria-hidden="true">·</span>
                  <div>
                    <span className="compare-heading">{d.label}</span>
                    <p className="compare-text">{d.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
         {matchPercent > 70 && (
        <div className="reveal-block">
              <p>
                Det visar sig att dina svar ligger nära en politik som prioriterar
                kunskap, trygghet, företagsamhet, valfrihet och ordning i ekonomin.
              </p>
              <p className="reveal-strong">
                Det är också Moderaterna i Stenungsunds politik inför valet 2026.
              </p>

        </div>
      )}
        <div className="results-actions">
          <a className="btn-secondary" href={VALMANIFEST_URL} target="_blank" rel="noreferrer">
            Läs Moderaternas valmanifest
          </a>
          <a className="btn-secondary" href={MEDLEM_URL} target="_blank" rel="noreferrer">
            Bli medlem i Moderaterna
          </a>
          <button className="btn-primary" onClick={onRestart}>
            Gör om testet
          </button>
        </div>
        <div className="results-attribution">
          <div className="org-info">
            <div className="small">
              <img src={moderaternaLogo} alt="Moderaterna" className="m-logo" />
            </div>
            <div className="org-name">
              <span className="org-main">Moderaterna</span>
              <span className="org-sub">Stenungsunds kommun</span>
            </div>
          </div>
          <div className="reveal-tagline-group">
            <p className="reveal-tagline">
              Politiken i testet är spetsad med humor.
            </p>
            <p className="reveal-tagline">
              Vår ambition för Stenungsund är helt seriös.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
