const testimonials = [
  {
    name: "Laura M.",
    role: "Familiar",
    text: "La coordinación fue impecable. Nos dieron tranquilidad y seguimiento real.",
  },
  {
    name: "Carlos R.",
    role: "Paciente",
    text: "El cuidador fue muy respetuoso y profesional. Excelente trato.",
  },
  {
    name: "Sofía G.",
    role: "Familiar",
    text: "Resolvieron rápido y con buena comunicación. Recomendable.",
  },
];

export default function Testimonials() {
  return (
    <section id="valoraciones" className="section section--alt">
      <div className="container">
        <div className="sectionHead">
          <h2>Valoraciones</h2>
          <p className="muted">Algunas experiencias de familias y pacientes.</p>
        </div>

        <div className="cardsGrid">
          {testimonials.map((t) => (
            <article key={t.name} className="testimonial">
              <div className="testimonial__stars" aria-label="5 estrellas">★★★★★</div>
              <p className="testimonial__text">“{t.text}”</p>
              <div className="testimonial__who">
                <strong>{t.name}</strong>
                <span className="muted"> — {t.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
