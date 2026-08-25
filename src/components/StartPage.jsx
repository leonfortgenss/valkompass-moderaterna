export default function StartPage({ onStart }) {
  return (
    <div className="start-page">
      <div className="start-card">
        <h1 className="start-title">Vilket Stenungsund vill du ha?</h1>

        <p className="intro-text">
          Gör 19 lokala vägval om skola, ekonomi, trygghet, omsorg och framtid.
          Välj det alternativ som ligger närmast hur du själv tänker.
        </p>

        <button className="btn-primary" onClick={onStart}>
          Starta testet
        </button>

        <p className="start-subtext">
          Politik är allvar. Men politiska reflexer kan ibland behöva synas i
          ett lite skarpare ljus.
        </p>

        <p className="about-test">
          Ett politiskt test med glimten i ögat, framtaget av Moderaterna i
          Stenungsund.
        </p>
      </div>
    </div>
  )
}
