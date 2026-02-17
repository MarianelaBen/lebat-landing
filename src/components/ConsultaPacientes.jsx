import { useState } from 'react'
import { CONFIG } from '../data/content'
import IconWhatsApp from './IconWhatsApp'
import './ConsultaPacientes.css'

const SERVICIOS_OPTIONS = [
  'Kinesiología',
  'Enfermería',
  'Cuidador/a geriátrico/a',
  'Fonoaudiología',
  'Terapia Ocupacional',
  'Varios / No sé aún',
]

export default function ConsultaPacientes() {
  const [enviado, setEnviado] = useState(false)
  const [form, setForm]     = useState({ nombre:'', apellido:'', email:'', telefono:'', servicio:'', zona:'', consulta:'' })

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    // 📡 Aquí conectar con tu backend / EmailJS / Formspree
    setEnviado(true)
  }

  const waUrl = `https://wa.me/${CONFIG.whatsappNumero}?text=${encodeURIComponent('Hola LEBAT SALUD, quisiera hacer una consulta.')}`

  return (
    <section id="consulta" className="consulta-pacientes">
      <div className="section-label">Pacientes</div>
      <h2 className="section-title">¿Tenés alguna consulta?</h2>
      <p className="section-sub">
        Completá el formulario y te respondemos a la brevedad. También podés escribirnos directamente por WhatsApp.
      </p>

      <div className="consulta-inner">
        {/* ── Info ── */}
        <div className="consulta-info">
          <h3>Sin compromiso</h3>
          <p>Antes de coordinar cualquier servicio, podés hacernos todas las preguntas que necesites, sin costo ni obligación.</p>
          <h3>Respuesta rápida</h3>
          <p>Respondemos todas las consultas dentro de las 24 horas hábiles. Para urgencias, escribinos directo por WhatsApp.</p>
          <h3>Atención personalizada</h3>
          <p>No somos un call center. Cada consulta la atiende una persona real que va a tomarse el tiempo de entender lo que necesitás.</p>

          <div className="contacto-card">
            <h4>¿Preferís hablar directo?</h4>
            <p>Escribinos por WhatsApp y coordinamos en minutos.</p>
            <a href={waUrl} className="wa-direct" target="_blank" rel="noreferrer">
              <IconWhatsApp size={18} />
              Escribir por WhatsApp
            </a>
          </div>
        </div>

        {/* ── Formulario ── */}
        <div className="form-card">
          <h3>Formulario de consulta</h3>
          <p>Completá tus datos y contanos en qué podemos ayudarte.</p>

          {enviado ? (
            <div className="form-success">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--whatsapp)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <h4>¡Consulta enviada!</h4>
              <p>Te respondemos dentro de las 24 horas hábiles.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Nombre *</label>
                  <input name="nombre" type="text" className="form-input" placeholder="Tu nombre" required onChange={handleChange} value={form.nombre} />
                </div>
                <div className="form-group">
                  <label className="form-label">Apellido *</label>
                  <input name="apellido" type="text" className="form-input" placeholder="Tu apellido" required onChange={handleChange} value={form.apellido} />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Email *</label>
                <input name="email" type="email" className="form-input" placeholder="tucorreo@email.com" required onChange={handleChange} value={form.email} />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Teléfono</label>
                  <input name="telefono" type="tel" className="form-input" placeholder="+54 11 0000-0000" onChange={handleChange} value={form.telefono} />
                </div>
                <div className="form-group">
                  <label className="form-label">Servicio de interés</label>
                  <select name="servicio" className="form-select" onChange={handleChange} value={form.servicio}>
                    <option value="" disabled>Seleccioná</option>
                    {SERVICIOS_OPTIONS.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Zona / Barrio</label>
                <input name="zona" type="text" className="form-input" placeholder="Ej: Palermo, Belgrano, Zona Norte GBA" onChange={handleChange} value={form.zona} />
              </div>
              <div className="form-group">
                <label className="form-label">Tu consulta *</label>
                <textarea name="consulta" className="form-textarea" placeholder="Contanos qué necesitás, para quién es el servicio y cualquier detalle..." required onChange={handleChange} value={form.consulta} />
              </div>
              <button type="submit" className="btn-submit">Enviar consulta →</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
