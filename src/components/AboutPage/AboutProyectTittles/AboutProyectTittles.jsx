import { Link } from "react-router-dom";
import logo2 from "../../../assets/logo/1-removebg-preview.png";
import "./AboutProyectTittles.css";

function AboutProyectTittles({ language }) {
  return (
    <div className="body_titles_about">
      <Link to="/">
        <img src={logo2} className="img_about" alt="Logo" />
      </Link>
      <div className="titlesText_about">
        <h1 className="title_about">
          {language === "es" ? "Nuestros" : "Our"}
        </h1>
        <h1 className="gradient-title_about">
          {language === "es" ? "proyectos" : "projects"}
        </h1>
        <p className="p_about">
          {language === "es"
            ? "Aquí puedes ver algunos de nuestros desarrollos de aplicaciones y páginas web, que demuestran nuestro compromiso con la innovación y la calidad."
            : "Here you can see some of our app and website development projects, showcasing our commitment to innovation and quality."}
        </p>
      </div>
    </div>
  );
}

export default AboutProyectTittles;
