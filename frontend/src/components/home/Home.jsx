import BackToTop from "../backToTop/BackToTop";
import "./home.css";
import { useState } from "react";
import HamburguerMenu from "../hamburguerMenu/HamburguerMenu";
import RabbitIcon from "/assets/icons/rabbitIcon.svg";
import homeImage from "/assets/images/homeImage.jpg";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div id="home">
      <nav>
        <section className="navSection">
          <img
            src={RabbitIcon}
            alt="Rabbit Icon"
          />
          <p>NOELIA REY</p>
        </section>

        <section className={`navSection ${menuOpen ? "navActive" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            INICIO
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            SOBRE MI
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            PROYECTOS
          </a>
          <a href="#challenges" onClick={() => setMenuOpen(false)}>
            PEQUEÑOS DESAFIOS
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            CONTACTO
          </a>
        </section>

        <HamburguerMenu toggleMenu={toggleMenu} menuOpen={menuOpen} />
      </nav>
      <div className="coverImage">
        <img src={homeImage} alt="Background" />
      </div>
      <div className="welcomeText">
        <p className="welcomeTitle">Bienvenido a Mi Portafolio Web</p>
        <p className="welcomeSubtitle">
          ¡Hola! Soy una desarrolladora web en crecimiento, entusiasta y con
          muchas ganas de aprender y mejorar, lista para enfrentar nuevos
          desafíos y crear soluciones innovadoras.
        </p>
      </div>
      <BackToTop />
    </div>
  );
}
