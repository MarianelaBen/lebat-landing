import { useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import './Navbar.css'

const NAV_LINKS = [
  { href: '#hero',          label: 'Inicio' },
  { href: '#quienes-somos', label: 'Nosotros' },
  { href: '#servicios',     label: 'Servicios' },
  { href: '#planes',        label: 'Planes' },
  { href: '#valoraciones',  label: 'Valoraciones' },
  { href: '#faq',           label: 'Preguntas frecuentes' },
  { href: '#sumate',        label: 'Sumate' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero')
  const [menuOpen, setMenuOpen]           = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id], div[id]')
      let current = 'hero'
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const close = e => { if (!e.target.closest('.navbar')) setMenuOpen(false) }
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`navbar${menuOpen ? ' menu-open' : ''}`}>

      <a href="#hero" className="logo-wrap" onClick={closeMenu}>
        <img src={logo} alt="LEBAT SALUD" className="logo-img" />
        <div className="logo-text">LEBAT<span>SALUD</span></div>
      </a>

      <div className="nav-scroll-wrap">
        <ul className="nav-links">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={activeSection === href.replace('#', '') ? 'active' : ''}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <a href="#consulta" className="nav-cta desktop-only">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        Consultar
      </a>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(o => !o)}
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
      >
        <span className="ham-line" />
        <span className="ham-line" />
        <span className="ham-line" />
      </button>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <ul>
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={activeSection === href.replace('#', '') ? 'active' : ''}
                onClick={closeMenu}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#consulta" className="nav-cta mobile-cta" onClick={closeMenu}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          Consultar turno
        </a>
      </div>

    </nav>
  )
}
