import { PLANES, CONFIG } from '../data/content'
import IconWhatsApp from './IconWhatsApp'
import './Planes.css'

function irAWhatsApp(planNombre) {
  const mensaje = encodeURIComponent(
    `Hola LEBAT SALUD!\n\nMe interesa el *Plan ${planNombre}*.\n\nQuisiera recibir más información y coordinar una consulta sin compromiso.\n\nGracias!`
  )
  window.open(`https://wa.me/${CONFIG.whatsappNumero}?text=${mensaje}`, '_blank')
}

export default function Planes() {
  return (
    <section id="planes" className="planes">
      <div className="planes-header">
        <div>
          <div className="section-label">Planes disponibles</div>
          <h2 className="section-title">Elegí el plan<br />que más te conviene</h2>
        </div>
        <p className="section-sub" style={{ maxWidth: '360px' }}>
          Al seleccionar un plan te abrimos una conversación en WhatsApp con toda
          la información lista para coordinar tu primer turno.
        </p>
      </div>

      <div className="planes-grid">
        {PLANES.map(plan => (
          <div
            key={plan.id}
            className={`plan-card${plan.featured ? ' featured' : ''}`}
            onClick={() => irAWhatsApp(plan.nombre)}
          >
            <div className="plan-badge">{plan.badge}</div>
            <div className="plan-nombre">{plan.nombre}</div>
            <div className="plan-descripcion">{plan.descripcion}</div>

            <ul className="plan-features">
              {plan.features.map(f => <li key={f}>{f}</li>)}
            </ul>

            <div className="plan-precio">
              <div className="plan-precio-label">Desde</div>
              <div className="plan-precio-num">{plan.precio}</div>
              <div className="plan-precio-per">{plan.precioPer}</div>
            </div>

            <button className="plan-btn" type="button">
              <IconWhatsApp size={18} />
              Consultar por este plan
            </button>
          </div>
        ))}
      </div>

      <p className="planes-nota">
        Los precios son orientativos. El costo final se coordina según zona, frecuencia y especialidad.
        Al hacer click te contactamos por WhatsApp para darte el presupuesto exacto sin compromiso.
      </p>
    </section>
  )
}
