import { useEffect, useRef } from 'react'
import { VALORACIONES } from '../data/content'
import './Valoraciones.css'

export default function Valoraciones() {
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    cardsRef.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="valoraciones" className="valoraciones">
      <div className="valoraciones-header">
        <div>
          <div className="section-label">Lo que dicen nuestros pacientes</div>
          <h2 className="section-title">Valoraciones</h2>
        </div>
        <div className="rating-general">
          <div className="rating-num">5.0</div>
          <div>
            <div className="rating-stars">★★★★★</div>
            {/* 📝 Reemplazar [X] con el número real de valoraciones */}
            <div className="rating-sub">Basado en [X] valoraciones</div>
          </div>
        </div>
      </div>

      <div className="valoraciones-grid">
        {VALORACIONES.map((v, i) => (
          <div
            key={v.nombre}
            className="valoracion-card anim-card"
            ref={el => (cardsRef.current[i] = el)}
            style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
          >
            <div className="val-header">
              <div className="val-avatar" style={{ background: v.gradiente }}>
                {v.inicial}
              </div>
              <div className="val-info">
                <div className="val-nombre">{v.nombre}</div>
                <div className="val-servicio">{v.servicio}</div>
              </div>
              <div className="val-stars">★★★★★</div>
            </div>

            <p className="val-texto">{v.texto}</p>

            <div className="val-footer">
              <span className="val-tag">{v.tag}</span>
              <span className="val-fecha">{v.fecha}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
