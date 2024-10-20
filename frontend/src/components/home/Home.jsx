import BackToTop from "../backToTop/BackToTop";
import "./home.css";

export default function Home() {
  return (
    <div id="home">
      <nav>
        <section className="navSection">
          <img
            src="../../../src/assets/icons/rabbitIcon.svg"
            alt="Rabbit Icon"
          />
          <p>NOELIA REY</p>
        </section>
        <section className="navSection">
          <a href="#home">INICIO</a>
          <a href="#about">SOBRE MI</a>
          <a href="#projects">PROYECTOS</a>
          <a href="#challenges">PEQUEÑOS DESAFIOS</a>
          <a href="#contact">CONTACTO</a>
        </section>
      </nav>
      <div className="coverImage">
        <img src="../../../src/assets/images/homeImage.jpg" alt="Background" />
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
