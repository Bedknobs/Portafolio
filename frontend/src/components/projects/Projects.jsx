import Slider from "react-slick";
import "./projects.css";

export default function Projects() {
  const projects = [
    {
      img: "/assets/images/DoggieDiary_1.png",
      alt: "DoggieDiary",
      description:
        "DoggieDiary es una red social canina diseñada especialmente para los amantes de los perros. En esta plataforma, los usuarios pueden publicar posts, dar me gusta y comentar en las publicaciones de otros, así como seguir a otros usuarios y repostear contenido. Además, cada usuario tiene la opción de editar su perfil. Para acceder a la aplicación, es necesario registrarse, y todos los datos de registro se almacenan en una base de datos PostgreSQL.",
      peopleInvolved: "Proyecto realizado en solitario.",
      repoLink: "https://github.com/Bedknobs/rc2-final-project-Bedknobs",
    },
    {
      img: "/assets/images/Filmin.png",
      alt: "Filmin clone",
      description:
        "Filmin es un clon de la popular plataforma de streaming FILMIN. Utilizando datos almacenados en un archivo .json, he categorizado las películas según su género cinematográfico, ofreciendo a los usuarios una experiencia similar a la original. Este proyecto no solo pone a prueba mis habilidades de desarrollo, sino que también mejora la navegación y búsqueda de contenido.",
      peopleInvolved: "Proyecto realizado en solitario.",
      repoLink: "https://github.com/Bedknobs/rc2-project-4-Bedknobs",
    },
    {
      img: "/assets/images/ACAF.png",
      alt: "ACAF",
      description:
        "ACAF es una página web creada para una asociación del mismo nombre, desarrollada en colaboración con un equipo de seis personas. La página se divide en dos secciones: una dirigida al público general, donde se explica la misión de la asociación y quiénes la dirigen, y otra enfocada a la organización, donde los administradores pueden añadir, borrar o editar socios. Los datos de los socios se almacenan en una base de datos PostgreSQL, asegurando un manejo seguro y eficiente de la información.",
      peopleInvolved: "Proyecto realizado en equipo (6 personas).",
      repoLink: "https://github.com/Bedknobs/ACAF",
    },
    {
      img: "/assets/images/CRUD.png",
      alt: "CRUDo App",
      description:
        "CRUDo es una aplicación que permite a los usuarios guardar, editar, borrar y leer entradas. Para facilitar la experiencia del usuario, ya incluye datos pre-cargados en un archivo data.sql, asegurando que la aplicación esté lista para usar desde el primer momento. También ofrece funciones de filtrado por backend y frontend, así como una barra de búsqueda para encontrar entradas específicas.",
      peopleInvolved: "Proyecto realizado con dos compañeras.",
      repoLink: "https://github.com/Bedknobs/CRUD",
    },
    {
      img: "/assets/images/Netflix.png",
      alt: "Netflix clone",
      description:
        "Este proyecto es un clon de Netflix, desarrollado en colaboración con dos compañeros. Aquí, hemos categorizado las películas obtenidas de una API, y los usuarios pueden ver las calificaciones al pasar el ratón sobre cada título, lo que enriquece la experiencia del usuario. Este proyecto me ha permitido trabajar en equipo y mejorar mis habilidades de colaboración y desarrollo de frontend.",
      peopleInvolved: "Proyecto realizado con dos compañeros.",
      repoLink: "https://github.com/Bedknobs/rc2-proyecto5-group-3",
    },
    {
      img: "/assets/images/Trooking_1.png",
      alt: "Trooking",
      description:
        "Trooking es una aplicación inspirada en Booking.com, donde los usuarios pueden reservar habitaciones de hotel y gestionar sus reservas en la sección Mis Reservas. La información sobre las habitaciones se guarda en un archivo data.sql en el backend, facilitando la gestión de datos de manera eficiente. Este proyecto resalta la importancia del trabajo en equipo y la gestión de bases de datos.",
      peopleInvolved: "Proyecto realizado con dos compañeros.",
      repoLink: "https://github.com/Bedknobs/rc2-project-6-grupo-2",
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
    <div id="projects">
      <h2 className="titleSection">Proyectos</h2>
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
