import { useEffect, useRef } from 'react'
import { SERVICIOS } from '../data/content'
import './Servicios.css'

export default function Servicios() {
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
    <section id="servicios" className="servicios">
      <div className="section-label">Lo que hacemos</div>
      <h2 className="section-title">Servicios integrales<br />a domicilio</h2>
      <p className="section-sub">
        Contamos con profesionales de distintas ramas de la salud disponibles para asistirte donde estés.
      </p>

      <div className="servicios-grid">
        {SERVICIOS.map((s, i) => (
          <div
            key={s.id}
            className="servicio-card anim-card"
            ref={el => (cardsRef.current[i] = el)}
          >
            <span className="servicio-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
                stroke="var(--azul-medio)" strokeWidth="1.6"
                strokeLinecap="round" strokeLinejoin="round">
                <path d={s.iconPath} />
              </svg>
            </span>
            <h3>{s.nombre}</h3>
            <p>{s.descripcion}</p>
            <span className="servicio-tag">{s.tag}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
