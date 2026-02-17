export default function Hero() {
  return (
    <section id="inicio" className="hero hero--light">
      <div className="container hero__grid">
        <div className="hero__content">
          <div className="badge badge--light">Cuidado domiciliario • Coordinación • Cobertura flexible</div>
          <h1>Lebat Salud</h1>
          <p className="lead">
            Cuidadores seleccionados y seguimiento continuo para brindar tranquilidad a la familia y bienestar al paciente.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#planes">Ver planes</a>
            <a className="btn btn--ghost" href="#contacto">Solicitar asesoramiento</a>
          </div>

          <div className="hero__trust">
            <div className="trustItem"><strong>Selección</strong><span>por perfil y experiencia</span></div>
            <div className="trustItem"><strong>Seguimiento</strong><span>coordinación y reportes</span></div>
            <div className="trustItem"><strong>Flexibilidad</strong><span>horas, noche o 24hs</span></div>
          </div>
        </div>

        <div className="hero__photo">
          {/* Cambiá la imagen cuando te pasen fotos */}
          <img
            src="/photos/hero.jpg"
            alt="Cuidado domiciliario profesional"
            onError={(e) => {
              // placeholder si no existe el archivo
              e.currentTarget.style.display = "none";
              e.currentTarget.parentElement.classList.add("imgPlaceholder");
            }}
          />
          <div className="hero__photoCard">
            <div className="hero__photoCardTitle">Atención humana, estándar premium</div>
            <div className="muted">Coordinación, continuidad y confianza.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
