export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <div className="footer__brand">
            <div className="logo logo--small">L</div>
            <div>
              <div className="brand__name">Lebat</div>
              <div className="brand__tag">Cuidado profesional a domicilio</div>
            </div>
          </div>
          <p className="muted small">
            Esta es una maqueta inicial. Textos e información legal se ajustan con el cliente.
          </p>
        </div>

        <div className="footer__links">
          <a href="#quienes">Quiénes somos</a>
          <a href="#planes">Planes</a>
          <a href="#adicionales">Servicios</a>
          <a href="#contacto">Contacto</a>
        </div>

        <div className="footer__contact">
          <a className="chip chip--dark" href="mailto:contacto@lebat.com">contacto@lebat.com</a>
          <a className="chip chip--dark" href="tel:+541122334455">+54 11 2233-4455</a>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container muted small">© {new Date().getFullYear()} Lebat. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
}
