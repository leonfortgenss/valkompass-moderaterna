export default function StartPage({ onStart }) {
  return (
    <div className="start-page">
      <div className="start-card">
        <h1 className="start-title">Valkompass 2026</h1>
        <p className="start-municipality">Stenungsunds kommunfullmäktige</p>

        <p className="intro-text">
          Svara på 15 frågor om lokal politik och se hur väl dina åsikter
          stämmer med partierna i kommunen.
        </p>

        <ul className="how-it-works" aria-label="Så fungerar det">
          <li>
            <span className="step-num">1</span>
            Läs varje påstående och välj din ståndpunkt
          </li>
          <li>
            <span className="step-num">2</span>
            Ta del av argument för och emot varje fråga
          </li>
          <li>
            <span className="step-num">3</span>
            Se din matchning med alla partier i kommunen
          </li>
        </ul>

        <button className="btn-primary" onClick={onStart}>
          Starta valkompass
        </button>

        <p className="disclaimer">
          Dina svar sparas inte och är helt anonyma.
          Partipositionerna uppdateras inför valet 2026.
        </p>
      </div>
    </div>
  )
}
