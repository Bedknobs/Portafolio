import "./home.css";

export default function Home() {
  return (
    <>
      <nav>
        <section className="navSection">
          <img src="../../../src/assets/rabbitIcon.svg" alt="Rabbit Icon" />
          <p>NOELIA REY</p>
        </section>
        <section className="navSection">
          <a href="">INICIO</a>
          <a href="">SOBRE MI</a>
          <a href="">SKILLS</a>
          <a href="">PROYECTOS</a>
          <a href="">CONTACTO</a>
        </section>
      </nav>

      <div className="coverImage">
        <img src="../../../src/assets/homeImage.jpg" alt="Background" />
      </div>

      <div className="welcomeText">
        <p className="welcomeTitle">Bienvenido a Mi Portafolio Web</p>
        <p className="welcomeSubtitle">
          ¡Hola! Soy un desarrollador web en crecimiento, entusiasta y con
          muchas ganas de aprender y mejorar, listo para enfrentar nuevos
          desafíos y crear soluciones innovadoras.
        </p>
      </div>
    </>
  );
}
