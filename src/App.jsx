import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Plans from "./components/Plans";
import Addons from "./components/Addons";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Careers from "./components/Careers";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <About />
        <Plans />
        <Addons />
        <Testimonials />
        <Contact />
        <Careers />
      </main>
      <Footer />

      {/* WhatsApp floating button */}
      <a
        className="wa-float"
        href="https://wa.me/5491122334455?text=Hola%20Lebat%2C%20quiero%20consultar%20por%20servicios%20de%20cuidado."
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
        title="WhatsApp"
      >
        <span className="wa-dot" aria-hidden="true" />
        WhatsApp
      </a>
    </div>
  );
}
