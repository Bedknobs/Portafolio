import Slider from "react-slick";
import "../projects/projects.css";

export default function Challenges() {
  const projects = [
    {
      img: "/assets/images/Weather React.png",
      alt: "Weather App",
      description:
        "La Weather App es una pequeña aplicación diseñada para proporcionar información meteorológica sobre un lugar específico. Utilizando datos de una API, los usuarios pueden consultar el clima actual y las previsiones para su ubicación deseada. Este proyecto me permitió trabajar con APIs y mejorar mis habilidades de manejo de datos en tiempo real, brindando una experiencia práctica y útil para los usuarios.",
      peopleInvolved: "Proyecto realizado en solitario.",
      repoLink: "https://github.com/Bedknobs/rc2-weather-react-Bedknobs",
    },
    {
      img: "/assets/images/Bulb.png",
      alt: "Bulb",
      description:
        "En el proyecto Bulb, la base de diseño fue proporcionada, y mi responsabilidad fue implementar la funcionalidad en JavaScript. La aplicación presenta una bombilla visual que se puede encender y apagar mediante un botón situado a su lado. Este proyecto resalta mi capacidad para trabajar con elementos visuales y manejar la lógica detrás de la interacción del usuario, creando una experiencia dinámica y atractiva.",
      peopleInvolved: "Proyecto realizado en solitario.",
      repoLink: "https://github.com/Bedknobs/Bulb",
    },
    {
      img: "/assets/images/React Sounds.png",
      alt: "React Sounds",
      description:
        "React Sounds es un proyecto interactivo que permite a los usuarios tocar acordes de guitarra utilizando un teclado virtual. Cada tecla está etiquetada con letras que indican qué acordes produce. Aunque se puede usar el teclado del ordenador, la funcionalidad de la aplicación requiere que la tecla se haya pulsado previamente con el ratón. Este proyecto no solo demuestra mis habilidades en React, sino también mi capacidad para crear aplicaciones interactivas y educativas.",
      peopleInvolved: "Proyecto realizado en solitario.",
      repoLink: "https://github.com/FactoriaF5Code/react-sounds-Bedknobs",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 2000,
    cssEase: "linear",
  };
  return (
    <div id="challenges">
      <h3 className="titleSection">Pequeños Desafíos</h3>
      <Slider {...settings} className="slider">
        {projects.map((project, index) => (
          <div key={index} className="project-container">
            <img className="silderImage" src={project.img} alt={project.alt} />
            <div className="overlay">
              <p>{project.description}</p>
              <p>
                <i>{project.peopleInvolved}</i>
              </p>
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/icons/Github-Light.svg"
                  alt="Github repository"
                />
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
