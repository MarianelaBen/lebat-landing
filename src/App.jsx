import './styles/global.css'

import Navbar           from './components/Navbar'
import Hero             from './components/Hero'
import Servicios        from './components/Servicios'
import QuienesSomos     from './components/QuienesSomos'
import Galeria          from './components/Galeria'
import Valoraciones     from './components/Valoraciones'
import Planes           from './components/Planes'
import ComoFunciona     from './components/ComoFunciona'
import ConsultaPacientes from './components/ConsultaPacientes'
import FAQ              from './components/FAQ'
import Sumate           from './components/Sumate'
import Footer           from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Servicios />
      <QuienesSomos />
      <Galeria />
      <Valoraciones />
      <Planes />
      <ComoFunciona />
      <ConsultaPacientes />
      <FAQ />
      <Sumate />
      <Footer />
    </>
  )
}
