const addons = [
  { title: "Acompañamiento a turnos", desc: "Traslados a consultas, estudios o trámites.", img: "/photos/addon-1.jpg" },
  { title: "Cuidado post-operatorio", desc: "Apoyo durante recuperación y rutinas.", img: "/photos/addon-2.jpg" },
  { title: "Guardia nocturna", desc: "Supervisión y contención durante la noche.", img: "/photos/addon-3.jpg" },
  { title: "Asistencia domiciliaria", desc: "Higiene, movilidad y acompañamiento.", img: "/photos/addon-4.jpg" },
];

export default function Addons() {
  return (
    <section id="adicionales" className="section section--lightAlt">
      <div className="container">
        <div className="sectionHead">
          <h2>Servicios adicionales</h2>
          <p className="muted">Servicios puntuales para complementar un plan o resolver una necesidad concreta.</p>
        </div>

        <div className="cardsGrid cardsGrid--4">
          {addons.map((a) => (
            <article key={a.title} className="serviceCard serviceCard--photo">
              <div className="serviceCard__media">
                <img
                  src={a.img}
                  alt={a.title}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement.classList.add("imgPlaceholder");
                  }}
                />
              </div>
              <div className="serviceCard__title">{a.title}</div>
              <div className="muted">{a.desc}</div>
              <a className="link" target="_blank" rel="noreferrer" href="https://wa.me/5491122334455">
                Consultar →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
