export default function Header() {
  return (
    <header className="header">
      <div className="container header__top">
        <div className="header__brand">
          <div className="logo">L</div>
          <div>
            <div className="brand__name">Lebat</div>
            <div className="brand__tag">Cuidado profesional a domicilio</div>
          </div>
        </div>

        <div className="header__contact">
          <a className="chip" href="tel:+541122334455" aria-label="Llamar">
            +54 11 2233-4455
          </a>
          <a className="chip" href="mailto:contacto@lebat.com" aria-label="Enviar email">
            contacto@lebat.com
          </a>
          <a className="btn btn--primary" href="#contacto">
            Pedir presupuesto
          </a>
        </div>
      </div>

      <div className="header__navWrap">
        <nav className="container nav" aria-label="Navegación principal">
          <a href="#inicio">Inicio</a>
          <a href="#quienes">Quiénes somos</a>
          <a href="#planes">Planes</a>
          <a href="#adicionales">Servicios</a>
          <a href="#valoraciones">Valoraciones</a>
          <a href="#contacto">Contacto</a>
          <a className="nav__cta" href="#trabaja">
            Trabajá con nosotros
          </a>
        </nav>
      </div>
    </header>
  );
}
