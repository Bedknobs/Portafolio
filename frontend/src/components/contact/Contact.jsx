import "./contact.css";

export default function Contact() {
  return (
    <div id="contact">
      <h3 className="titleSection">¡Hablemos!</h3>
      <p className="subtitleSection">
        Me encantaría conectar y explorar oportunidades para colaborar juntos.
      </p>
      <section className="socialMedia">
        <a href="mailto:reysilvanoelia424@gmail.com?subject=Asunto del mensaje&body=Hola, me gustaría saber más sobre...">
          <img src="../../../src/assets/icons/Gmail-Light.svg" alt="Gmail" />
        </a>
        <a href="https://www.linkedin.com/in/noelia-rey-silva/" target="_blanck">
          <img src="../../../src/assets/icons/LinkedIn.svg" alt="LinkedIn" />
        </a>
        <a href="https://github.com/Bedknobs" target="_blanck">
          <img src="../../../src/assets/icons/Github-Light.svg" alt="Github" />
        </a>
      </section>
    </div>
  );
}
