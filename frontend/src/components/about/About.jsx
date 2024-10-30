import Skills from "./Skills";
import "./about.css";
import aboutImage from "/assets/images/aboutImage.jpg"

export default function About() {
  return (
    <>
      <img
        className="aboutImage"
        src={aboutImage}
        alt="Background Photo About Me"
      />
      <div id="about">
        <h2 className="titleSection">Sobre Mí</h2>
        <p className="subtitleSection">
          Soy una desarrolladora fullstack apasionada, con un enfoque en la
          creación de interfaces dinámicas y fluidas utilizando React, y con
          experiencia en el desarrollo de soluciones robustas en backend con
          Java y Spring Boot. Aunque disfruto más del frontend, estoy siempre
          dispuesta a aprender y dominar cualquier tecnología que potencie mis
          habilidades para ofrecer soluciones completas y eficientes.
        </p>
        <Skills />
      </div>
    </>
  );
}
