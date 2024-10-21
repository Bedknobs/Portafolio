import Slider from "react-slick";
import "./projects.css";

export default function Projects() {
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
        <div>
          <img
            className="silderImage"
            src="../../../src/assets/images/DoggieDiary_1.png"
            alt="DoggieDiary"
          />
        </div>
        <div>
          <img
            className="silderImage"
            src="../../../src/assets/images/Filmin.png"
            alt="Filmin clone"
          />
        </div>
        <div>
          <img
            className="silderImage"
            src="../../../src/assets/images/Netflix.png"
            alt="Netflix clone"
          />
        </div>
        <div>
          <img
            className="silderImage"
            src="../../../src/assets/images/Trooking_1.png"
            alt="Trooking"
          />
        </div>
      </Slider>
    </div>
  );
}
