import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-badge">Atención a domicilio · CABA y GBA</div>
        <h1>
          Tu salud, con el profesional<br />
          que viene a <em>vos</em>
        </h1>
        <p className="hero-desc">
          En LEBAT SALUD conectamos personas con profesionales de la salud certificados
          que se trasladan hasta tu domicilio. Sin filas, sin traslados, con la atención que merecés.
        </p>
        <div className="hero-buttons">
          <a href="#planes" className="btn-primary">Ver planes y servicios →</a>
          <a href="#consulta" className="btn-secondary">Hacer una consulta</a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-card-main">
          <h3>Profesionales a tu servicio</h3>
          <p>
            Kinesiología, enfermería, cuidadores geriátricos y más — todos con
            matrícula verificada y experiencia comprobada.
          </p>
          <div className="stats-row">
            <div className="stat">
              <div className="stat-num">+50</div>
              <div className="stat-label">Pacientes atendidos</div>
            </div>
            <div className="stat">
              <div className="stat-num">5★</div>
              <div className="stat-label">Valoración promedio</div>
            </div>
            <div className="stat">
              <div className="stat-num">24h</div>
              <div className="stat-label">Respuesta máx.</div>
            </div>
          </div>
        </div>

        <div className="floating-badge badge-top">
          <span className="badge-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--azul-medio)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </span>
          <div>
            <div className="badge-text">Turno confirmado</div>
            <div className="badge-sub">Hoy 15:00 · Kinesiología</div>
          </div>
        </div>

        <div className="floating-badge badge-bottom">
          <span className="badge-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--azul-medio)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </span>
          <div>
            <div className="badge-text">Profesional verificado</div>
            <div className="badge-sub">Matrícula activa confirmada</div>
          </div>
        </div>
      </div>
    </section>
  )
}
