import { PASOS } from '../data/content'
import './ComoFunciona.css'

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="como-funciona">
      <div className="section-label">El proceso</div>
      <h2 className="section-title">¿Cómo funciona?</h2>
      <p className="section-sub">Cuatro pasos simples y ya tenés al profesional en tu casa.</p>

      <div className="pasos-grid">
        {PASOS.map(paso => (
          <div key={paso.num} className="paso">
            <div className="paso-num">{paso.num}</div>
            <div className="paso-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="rgba(255,255,255,0.9)" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round">
                <path d={paso.iconPath} />
              </svg>
            </div>
            <h3>{paso.titulo}</h3>
            <p>{paso.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
