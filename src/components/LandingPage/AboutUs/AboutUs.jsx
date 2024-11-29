import image from "../../../assets/developers/yo.jpg";
import image2 from "../../../assets/developers/otro2.jpg";
import image3 from "../../../assets/developers/otro3.jpg";
import GradientButton from "../GradientButton/GradientButton";
import "./AboutUs.css";

const developers = [
  {
    index: 0,
    name: "Juan Laspiur",
    img: image,
    description: {
      es: "Desarrollador Node.js/React.js con sólida experiencia en bases de datos NoSQL. Apasionado por construir aplicaciones escalables y eficientes.",
      en: "Node.js/React.js developer with solid experience in NoSQL databases. Passionate about building scalable and efficient applications."
    },
  },
  {
    index: 1,
    name: "Andrés Ramírez",
    img: image2,
    description: {
      es: "Especialista en frontend y diseño UI/UX, con un enfoque en crear experiencias visuales atractivas y fáciles de usar. Experto en React y CSS avanzado.",
      en: "Frontend and UI/UX design specialist, focused on creating visually appealing and user-friendly experiences. Expert in React and advanced CSS."
    },
  },
  {
    index: 2,
    name: "Gabriel Gonzales",
    img: image3,
    description: {
      es: "Ingeniero en inteligencia artificial y big data. Utiliza datos y algoritmos para desarrollar soluciones innovadoras y basadas en evidencia.",
      en: "Artificial intelligence and big data engineer. Uses data and algorithms to develop innovative, evidence-based solutions."
    },
  },
];

const AboutUs = ({ language }) => {
  return (
    <section className="aboutUs">
      <h2>{language === "es" ? "Conócenos" : "About Us"}</h2>
      <div className="teamContainer">
        {developers.map((dev, index) => (
          <div className="teamCard" key={index}>
            <img src={dev.img} alt={dev.name} className="teamPhoto" />
            <h3>{dev.name}</h3>
            <p>{dev.description[language]}</p>
            <div className="butons_aboutUs">
              <GradientButton index={dev.index} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
