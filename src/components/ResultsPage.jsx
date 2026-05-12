import { useEffect, useState } from 'react'

export default function ResultsPage({ results, onRestart }) {
  const [visible, setVisible] = useState(false)
  const top = results[0]

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="results-page">
      <header className="q-header">
        <div className="m-badge small">M</div>
        <span className="q-counter">Ditt resultat</span>
      </header>

      <div className="results-card">
        <p className="results-label">Bästa matchning</p>

        <div className="top-match" style={{ borderColor: top.party.color + '60', background: top.party.color + '12' }}>
          <span className="top-party-name" style={{ color: top.party.color }}>
            {top.party.name}
          </span>
          <span className="top-match-pct">{top.match}%</span>
        </div>

        <p className="section-label">Alla partier</p>
        <ul className="party-list">
          {results.map(({ party, match }) => (
            <li key={party.id} className="party-row">
              <span className="party-id" style={{ backgroundColor: party.color }}>
                {party.id}
              </span>
              <div className="party-meta">
                <span className="party-name">{party.name}</span>
                <div className="bar-track">
                  <div
                    className={`bar-fill${visible ? ' visible' : ''}`}
                    style={{
                      width: `${match}%`,
                      backgroundColor: party.color,
                    }}
                  />
                </div>
              </div>
              <span className="party-pct">{match}%</span>
            </li>
          ))}
        </ul>

        <button className="btn-primary" onClick={onRestart}>
          Gör om valkompass
        </button>

        <p className="disclaimer">
          Partipositionerna är placeholders och uppdateras inför valet 2026.
        </p>
      </div>
    </div>
  )
}
