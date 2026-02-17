import logo from '../assets/logo.png'
import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logo} alt="LEBAT SALUD" className="footer-logo-img" />
            <span className="footer-logo-text">
              LEBAT <span>SALUD</span>
            </span>
          </div>
          <p>
            Servicio integral de salud a domicilio en CABA y Gran Buenos Aires.
            Profesionales verificados, atención personalizada.
          </p>
        </div>

        <div className="footer-col">
          <h4>Servicios</h4>
          <ul>
            {['Kinesiología','Enfermería','Cuidadores geriátricos','Fonoaudiología','Terapia Ocupacional'].map(s => (
              <li key={s}><a href="#servicios">{s}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Empresa</h4>
          <ul>
            <li><a href="#planes">Planes</a></li>
            <li><a href="#como-funciona">¿Cómo funciona?</a></li>
            <li><a href="#consulta">Consultar turno</a></li>
            <li><a href="#sumate">Sumate al equipo</a></li>
            <li><a href="#faq">Preguntas frecuentes</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} LEBAT SALUD. Todos los derechos reservados.</span>
        <a href="#">Política de privacidad</a>
      </div>
    </footer>
  )
}
