import image from "../../../assets/developers/yo.jpg"
import image2 from "../../../assets/developers/otro2.jpg"
import image3 from "../../../assets/developers/otro3.jpg"
import GradientButton from "../GradientButton/GradientButton";
import "./AboutUs.css";
const developers = [
  {
    index:0,
    name: "Juan Laspiur",
    img: image, 
    description:
      "Desarrollador Node.js/React.js con solida experiencia bases de datos NoSQL. Apasionado por construir aplicaciones escalables y eficientes.",
  },
  {
    index:1,
    name: "Andrés Ramírez",
    img: image2,
    description:
      "Especialista en frontend y diseño UI/UX, con un enfoque en crear experiencias visuales atractivas y fáciles de usar. Experto en React y CSS avanzado.",
  },
  {
    index:2,
    name: "Gabriel Gonzales",
    img: image3,
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
            <div className="butons_aboutUs">
            <GradientButton index={dev.index}/></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
