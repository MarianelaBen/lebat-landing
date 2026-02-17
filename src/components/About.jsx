export default function About() {
  return (
    <section id="quienes" className="section section--light">
      <div className="container twoCol twoCol--media">
        <div className="mediaBox">
          <img
            src="/photos/about.jpg"
            alt="Equipo Lebat Salud"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.parentElement.classList.add("imgPlaceholder");
            }}
          />
        </div>

        <div>
          <h2>Quiénes somos</h2>
          <p className="muted">
            En Lebat Salud brindamos cuidado domiciliario con una metodología clara:
            selección del cuidador, coordinación del servicio y seguimiento continuo.
          </p>

          <div className="infoGrid">
            <div className="infoCard">
              <div className="infoCard__title">Selección</div>
              <div className="muted">Entrevista + referencias + ajuste al caso.</div>
            </div>
            <div className="infoCard">
              <div className="infoCard__title">Coordinación</div>
              <div className="muted">Horarios, reemplazos y continuidad del servicio.</div>
            </div>
            <div className="infoCard">
              <div className="infoCard__title">Seguimiento</div>
              <div className="muted">Comunicación con la familia y control de calidad.</div>
            </div>
          </div>

          <div className="inlineCtas">
            <a className="btn btn--primary" href="#contacto">Consultar</a>
            <a className="btn btn--ghost" href="#planes">Ver planes</a>
          </div>
        </div>
      </div>
    </section>
  );
}
