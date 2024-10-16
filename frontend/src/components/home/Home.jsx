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
    </>
  );
}
