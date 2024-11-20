import "./AboutUs.css";
import image from "../../assets/developers/yo.jpg"
const developers = [
  {
    name: "Juan Laspiur",
    img: image, 
    description:
      "Desarrollador móvil y backend con experiencia en React Native, Node.js y bases de datos NoSQL. Apasionado por construir aplicaciones escalables y eficientes.",
  },
  {
    name: "Andrés Ramírez",
    img: image,
    description:
      "Especialista en frontend y diseño UI/UX, con un enfoque en crear experiencias visuales atractivas y fáciles de usar. Experto en React y CSS avanzado.",
  },
  {
    name: "[Nombre 3]",
    img: image,
    description:
      "Ingeniero en inteligencia artificial y big data. Utiliza datos y algoritmos para desarrollar soluciones innovadoras y basadas en evidencia.",
  },
];

const AboutUs = () => {
  return (
    <section className="aboutUs">
      <h2>Conócenos</h2>
      <div className="teamContainer">
        {developers.map((dev, index) => (
          <div className="teamCard" key={index}>
            <img src={dev.img} alt={dev.name} className="teamPhoto" />
            <h3>{dev.name}</h3>
            <p>{dev.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
