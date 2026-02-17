export default function Careers() {
  return (
    <section id="trabaja" className="section">
      <div className="container twoCol">
        <div>
          <h2>Trabajá con nosotros</h2>
          <p className="muted">
            Si sos cuidador/a y querés sumarte, completá el formulario. Luego coordinamos entrevista.
          </p>

          <ul className="checklist checklist--spaced">
            <li>Experiencia comprobable</li>
            <li>Disponibilidad horaria</li>
            <li>Buen trato y responsabilidad</li>
          </ul>
        </div>

        <form className="formCard" onSubmit={(e) => e.preventDefault()}>
          <div className="formCard__title">Postulación</div>

          <label className="field">
            <span>Nombre y apellido</span>
            <input placeholder="Tu nombre" />
          </label>

          <label className="field">
            <span>Email</span>
            <input placeholder="tu@email.com" />
          </label>

          <label className="field">
            <span>Teléfono</span>
            <input placeholder="+54 11 ..." />
          </label>

          <label className="field">
            <span>Adjuntar CV (PDF)</span>
            <input type="file" accept="application/pdf" />
          </label>

          <button className="btn btn--primary btn--full" type="submit">
            Enviar postulación
          </button>

          <div className="muted small">
            * Maqueta. Para CV te recomiendo Google Form (upload) o Netlify Forms con multipart.
          </div>
        </form>
      </div>
    </section>
  );
}
