import { useState } from 'react'
import { PERFILES_SUMATE } from '../data/content'
import './Sumate.css'

const ESPECIALIDADES = ['Kinesiología','Enfermería','Cuidador/a geriátrico/a','Fonoaudiología','Terapia Ocupacional','Otra']

export default function Sumate() {
  const [fileName, setFileName] = useState('')
  const [enviado, setEnviado]   = useState(false)
  const [form, setForm]         = useState({ nombre:'', apellido:'', email:'', telefono:'', especialidad:'', zona:'', mensaje:'' })

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  const handleFile   = e => { if (e.target.files[0]) setFileName(e.target.files[0].name) }
  const handleSubmit = e => {
    e.preventDefault()
    // 📡 Aquí conectar con tu backend / EmailJS / Formspree
    setEnviado(true)
  }

  return (
    <section id="sumate" className="sumate">
      <div className="sumate-inner">
        {/* ── Info ── */}
        <div>
          <div className="section-label">Trabajá con nosotros</div>
          <h2 className="section-title">Sumá tu carrera<br />a nuestra red</h2>
          <p className="section-sub">
            Somos una empresa en crecimiento que busca profesionales comprometidos.
            Flexibilidad horaria, pacientes derivados y respaldo total.
          </p>
          <br />
          <p className="sumate-desc">
            Ofrecemos derivación de pacientes, respaldo administrativo, pagos en tiempo y forma
            y la posibilidad de construir tu cartera dentro de nuestra red.
          </p>
          <div className="perfiles">
            {PERFILES_SUMATE.map(p => (
              <span key={p} className="perfil-tag">{p}</span>
            ))}
          </div>
        </div>

        {/* ── Formulario CV ── */}
        <div className="form-card">
          <h3>Enviá tu CV</h3>
          <p>Completá el formulario y nos contactamos dentro de las 48 horas hábiles.</p>

          {enviado ? (
            <div className="form-success">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--whatsapp)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <h4>¡Postulación enviada!</h4>
              <p>Nos contactamos pronto.</p>
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
                  <label className="form-label">Especialidad *</label>
                  <select name="especialidad" className="form-select" required onChange={handleChange} value={form.especialidad}>
                    <option value="" disabled>Seleccioná</option>
                    {ESPECIALIDADES.map(e => <option key={e}>{e}</option>)}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Zona de cobertura *</label>
                <input name="zona" type="text" className="form-input" placeholder="Ej: Palermo, Belgrano, Zona Norte GBA" required onChange={handleChange} value={form.zona} />
              </div>
              <div className="form-group">
                <label className="form-label">Mensaje (opcional)</label>
                <textarea name="mensaje" className="form-textarea" placeholder="Contanos tu experiencia y disponibilidad horaria..." onChange={handleChange} value={form.mensaje} />
              </div>
              <div className="form-group">
                <label className="form-label">CV (PDF o Word) *</label>
                <label className="file-upload">
                  <input type="file" accept=".pdf,.doc,.docx" onChange={handleFile} required style={{ display:'none' }} />
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--azul-medio)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
                  </svg>
                  {fileName
                    ? <p className="file-name">✓ {fileName}</p>
                    : <p><strong>Arrastrá tu CV</strong> o hacé click para seleccionarlo</p>
                  }
                </label>
              </div>
              <button type="submit" className="btn-submit">Enviar postulación →</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
