import { GALERIA_ITEMS } from '../data/content'
import './Galeria.css'

const PlaceholderIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
    stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
)

export default function Galeria() {
  return (
    <div id="galeria" className="galeria">
      <div className="galeria-label">En el día a día</div>
      <h2 className="galeria-title">Así trabajamos</h2>

      <div className="galeria-grid">
        {GALERIA_ITEMS.map((item, i) => (
          <div
            key={i}
            className={`galeria-item${item.spanRow ? ' span-row' : ''}${item.placeholder ? ' placeholder' : ''}`}
          >
            {item.placeholder ? (
              <>
                <PlaceholderIcon />
                <p>Tu foto aquí</p>
              </>
            ) : (
              <>
                {/* 📷 src viene de data/content.js — reemplazar con import de assets propios */}
                <img src={item.src} alt={item.alt} loading="lazy" />
                <div className="galeria-overlay">
                  <span>{item.label}</span>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
