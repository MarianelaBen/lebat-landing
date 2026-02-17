const plans = [
  {
    name: "6 horas",
    subtitle: "Apoyo parcial",
    highlights: ["Rutinas diarias", "Acompañamiento", "Supervisión general"],
    tag: "Ideal para mañana o tarde",
  },
  {
    name: "8 horas",
    subtitle: "Jornada completa",
    highlights: ["Higiene y confort", "Acompañamiento", "Coordinación y reporte"],
    tag: "Plan recomendado",
    featured: true,
  },
  {
    name: "12 horas",
    subtitle: "Día y noche",
    highlights: ["Cobertura extendida", "Asistencia continua", "Seguimiento"],
    tag: "Mayor continuidad",
  },
  {
    name: "24 horas",
    subtitle: "Cobertura total",
    highlights: ["Presencia permanente", "Turnos coordinados", "Contención 24/7"],
    tag: "Casos que requieren guardia",
  },
];

export default function Plans() {
  return (
    <section id="planes" className="section section--alt">
      <div className="container">
        <div className="sectionHead">
          <h2>Planes por horas</h2>
          <p className="muted">
            Elegí el módulo que mejor se adapte. Podemos ajustar días, horarios y perfil del cuidador.
          </p>
        </div>

        <div className="cardsGrid">
          {plans.map((p) => (
            <article key={p.name} className={`planCard ${p.featured ? "planCard--featured" : ""}`}>
              <div className="planCard__top">
                <div>
                  <div className="planCard__name">{p.name}</div>
                  <div className="muted">{p.subtitle}</div>
                </div>
                <div className="pill">{p.tag}</div>
              </div>

              <ul className="checklist checklist--spaced">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <div className="planCard__actions">
                <a className="btn btn--primary btn--full" href="#contacto">
                  Consultar este plan
                </a>
                <a
                  className="btn btn--ghost btn--full"
                  href="https://wa.me/5491122334455?text=Hola%20Lebat%2C%20quiero%20consultar%20por%20el%20plan%20de%208%20horas."
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="note">
          <strong>Nota:</strong> Los valores y la disponibilidad dependen de zona, horarios y complejidad del caso.
        </div>
      </div>
    </section>
  );
}
