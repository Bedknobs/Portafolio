import "./home.css";

export default function Home() {
  return (
    <>
      <nav>
        <section className="navSection">
          <img
            src="../../../src/assets/icons/rabbitIcon.svg"
            alt="Rabbit Icon"
          />
          <p>NOELIA REY</p>
        </section>
        <section className="navSection">
          <a href="">INICIO</a>
          <a href="">SOBRE MI</a>
          <a href="">PROYECTOS</a>
          <a href="">PEQUEÑOS DESAFIOS</a>
          <a href="">CONTACTO</a>
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
    </>
  );
}
