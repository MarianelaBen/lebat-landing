import { useEffect, useRef } from 'react'
import fotoGrande from '../assets/foto-kinesiologo.jpg'   // stock
import fotoChica  from '../assets/foto-atencion.jpg'      // stock
import './QuienesSomos.css'

const VALORES = [
  {
    titulo: 'Atención centrada en el paciente',
    descripcion: 'Cada plan de tratamiento se adapta a las necesidades, tiempos y contexto de cada persona.',
    iconPath: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z',
  },
  {
    titulo: 'Profesionales verificados',
    descripcion: 'Todos tienen matrícula activa, antecedentes chequeados y pasan por una entrevista de selección.',
    iconPath: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  },
  {
    titulo: 'Transparencia y confianza',
    descripcion: 'Precios claros, comunicación directa y seguimiento real de cada tratamiento.',
    iconPath: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 8v4M12 16h.01',
  },
]

export default function QuienesSomos() {
  const valoresRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    valoresRef.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="quienes-somos" className="quienes-somos">


      <div className="quienes-inner">
        <div className="quienes-texto">
          <div>
              <div className="section-label">Nuestra historia</div>
              <h2 className="section-title">¿Quiénes somos?</h2>
              <p className="section-sub">
        LEBAT SALUD nació de una idea simple: la salud de calidad no debería depender de si podés llegar a una clínica.
              </p>
          </div>

        {/* ── Fotos ── */}
        <div className="quienes-fotos">
          <div className="quienes-foto grande">
            {/* 📷 Reemplazar src con foto real del fundador/equipo */}
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80"
              alt="Profesional de LEBAT SALUD atendiendo a un paciente"
            />
            <div className="quienes-badge">
              <div className="quienes-badge-num">2023</div>
              {/* 📝 Reemplazar año si es necesario */}
              <div className="quienes-badge-label">Año de fundación</div>
            </div>
          </div>

          <div className="quienes-foto chica">
            {/* 📷 Reemplazar con foto propia */}
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80"
              alt="Atención kinesiológica a domicilio"
            />
          </div>

          <div className="quienes-foto chica placeholder">
            <div className="foto-placeholder-inner">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
                stroke="var(--azul-medio)" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
          </div>
        </div>
        </div>


        {/* ── Texto ── */}
        <div className="quienes-texto">
          <div className="section-label">Sobre nosotros</div>
          <h3 className="section-title qs-title">
            Una empresa que nació desde adentro del sistema de salud
          </h3>

          {/*
            📝 PLACEHOLDER — Reemplazar con la historia real del cliente.
            Podés editar directamente este bloque o pasarme el texto y lo actualizo.
          */}
          <p>
            [Nombre del fundador] es kinesiólogo con más de [X] años de experiencia. Durante su trayectoria
            atendiendo pacientes en clínicas y hospitales, notó siempre lo mismo: muchas personas dejaban
            de hacer su tratamiento, no porque no quisieran, sino porque no podían trasladarse.
          </p>
          <p>
            Esa observación fue la semilla de LEBAT SALUD. En [año], decidió dar el paso y crear una
            empresa que llevara la atención de calidad directamente al domicilio del paciente. Lo que
            comenzó como un proyecto unipersonal, hoy es un equipo de profesionales de distintas
            disciplinas comprometidos con la misma misión.
          </p>
          <p>
            Hoy contamos con [número] profesionales en [zonas de cobertura], y seguimos creciendo con
            el mismo compromiso de siempre: que cada paciente reciba la atención que merece, donde esté.
          </p>

          <div className="quienes-valores">
            {VALORES.map((v, i) => (
              <div
                key={v.titulo}
                className="quienes-valor anim-card"
                ref={el => (valoresRef.current[i] = el)}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <span className="quienes-valor-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="var(--azul-medio)" strokeWidth="1.8"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d={v.iconPath} />
                  </svg>
                </span>
                <div>
                  <h4>{v.titulo}</h4>
                  <p>{v.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
