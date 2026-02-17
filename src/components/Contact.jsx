export default function Contact() {
  return (
    <section id="contacto" className="section">
      <div className="container twoCol">
        <div>
          <h2>Contacto</h2>
          <p className="muted">
            Contanos zona, horarios y necesidad. Te respondemos con disponibilidad y próximos pasos.
          </p>

          <div className="callout">
            <div className="callout__title">Respuesta rápida</div>
            <div className="muted">
              Si preferís, escribinos directo por WhatsApp y te asesoramos.
            </div>
            <a
              className="btn btn--primary"
              target="_blank"
              rel="noreferrer"
              href="https://wa.me/5491122334455?text=Hola%20Lebat%2C%20quiero%20consultar%20por%20un%20servicio%20de%20cuidado."
            >
              Abrir WhatsApp
            </a>
          </div>
        </div>

        <form className="formCard" onSubmit={(e) => e.preventDefault()}>
          <div className="formCard__title">Pedí un presupuesto</div>

          <label className="field">
            <span>Nombre</span>
            <input placeholder="Tu nombre" />
          </label>

          <label className="field">
            <span>Teléfono</span>
            <input placeholder="+54 11 ..." />
          </label>

          <label className="field">
            <span>Zona</span>
            <input placeholder="CABA / GBA / ..." />
          </label>

          <label className="field">
            <span>Mensaje</span>
            <textarea placeholder="Contanos qué necesitás y horarios aproximados" rows={4} />
          </label>

          <button className="btn btn--primary btn--full" type="submit">
            Enviar consulta
          </button>

          <div className="muted small">
            * Este formulario es maqueta. Después lo conectamos a Netlify Forms.
          </div>
        </form>
      </div>
    </section>
  );
}
