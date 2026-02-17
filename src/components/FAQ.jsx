import { useState } from 'react'
import { FAQ_ITEMS, CONFIG } from '../data/content'
import IconWhatsApp from './IconWhatsApp'
import './FAQ.css'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = i => setOpenIndex(prev => (prev === i ? null : i))

  const waUrl = `https://wa.me/${CONFIG.whatsappNumero}?text=${encodeURIComponent('Hola LEBAT SALUD, tengo una consulta.')}`

  return (
    <section id="faq" className="faq">
      <div className="section-label">Dudas frecuentes</div>
      <h2 className="section-title">Preguntas frecuentes</h2>
      <p className="section-sub">Las consultas que más nos llegan, respondidas de forma clara.</p>

      <div className="faq-grid">
        <div className="faq-list">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`}>
              <div className="faq-question" onClick={() => toggle(i)}>
                {item.pregunta}
                <span className="faq-arrow">+</span>
              </div>
              <div className="faq-answer">
                {item.respuesta}
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <h3>¿No encontraste tu respuesta?</h3>
          <p>No hay pregunta tonta. Escribinos por WhatsApp y te respondemos en minutos.</p>
          <a href={waUrl} className="whatsapp-btn" target="_blank" rel="noreferrer">
            <IconWhatsApp size={20} />
            Escribir por WhatsApp
          </a>
          <a href="#consulta" className="faq-form-link">
            O completá el formulario de consulta →
          </a>
        </div>
      </div>
    </section>
  )
}
