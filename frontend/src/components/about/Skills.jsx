export default function Skills() {
    const tools = [
      { src: "/assets/icons/Git.svg", alt: "Git" },
      { src: "/assets/icons/Github-Light.svg", alt: "Github" },
      { src: "/assets/icons/VSCode-Light.svg", alt: "Visual Studio Code" },
      { src: "/assets/icons/Postman.svg", alt: "Postman" },
      { src: "/assets/icons/Powershell-Light.svg", alt: "Powershell" },
      { src: "/assets/icons/AndroidStudio-Light.svg", alt: "Android Studio" },
    ];
  
    const techSkills = [
      { src: "/assets/icons/HTML.svg", alt: "HTML" },
      { src: "/assets/icons/CSS.svg", alt: "CSS" },
      { src: "/assets/icons/React-Light.svg", alt: "React" },
      { src: "/assets/icons/TailwindCSS-Light.svg", alt: "TailwindCSS" },
      { src: "/assets/icons/MaterialUI-Light.svg", alt: "Material-UI" },
      { src: "/assets/icons/Jest.svg", alt: "Jest" },
      { src: "/assets/icons/Vite-Light.svg", alt: "Vite" },
      { src: "/assets/icons/SVG-Light.svg", alt: "SVG" },
      { src: "/assets/icons/Java-Light.svg", alt: "Java" },
      { src: "/assets/icons/Spring-Light.svg", alt: "Spring" },
      { src: "/assets/icons/NodeJS-Light.svg", alt: "NodeJs" },
      { src: "/assets/icons/Firebase-Light.svg", alt: "Firebase" },
      { src: "/assets/icons/PostgreSQL-Light.svg", alt: "PostgreSQL" },
    ];
  
    const otherSkills = [
      { src: "/assets/icons/Figma-Light.svg", alt: "Figma" },
      { src: "/assets/icons/Photoshop.svg", alt: "Photoshop" },
      { src: "/assets/icons/Wordpress.svg", alt: "Wordpress" },
      { src: "/assets/icons/Windows-Light.svg", alt: "Windows" },
      { src: "/assets/icons/Discord.svg", alt: "Discord" },
      { src: "/assets/icons/Notion-Light.svg", alt: "Notion" },
    ];
  
    const renderSkills = (skills) => {
      return skills.map((skill, index) => (
        <div className="skillItem" key={index}>
          <img src={skill.src} alt={skill.alt} />
          <span className="tooltip">{skill.alt}</span>
        </div>
      ));
    };
  
    return (
      <div className="skills">
        <section className="skillsSection">
          <h3>Herramientas de Desarrollo</h3>
          <section>
            {renderSkills(tools)}
          </section>
        </section>
        <section className="skillsSection">
          <h3>Skills Técnicos</h3>
          <section>
            {renderSkills(techSkills)}
          </section>
        </section>
        <section className="skillsSection">
          <h3>Otros</h3>
          <section>
            {renderSkills(otherSkills)}
          </section>
        </section>
      </div>
    );
  }
  