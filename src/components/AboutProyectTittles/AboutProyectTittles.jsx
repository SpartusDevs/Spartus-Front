import { Link } from "react-router-dom";
import logo2 from "../../assets/logo/1-removebg-preview.png";
import "./AboutProyectTittles.css";

function AboutProyectTittles() {
  return (
    <div className="body_titles_about">
      <Link to="/">
        <img src={logo2} className="img_about" alt="Logo" />
      </Link>
      <div className="titlesText_about">
        <h1 className="title_about">Nuestros</h1>
        <h1 className="gradient-title_about">proyectos</h1>
        <p className="p_about">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
          blanditiis.
        </p>
      </div>
    </div>
  );
}

export default AboutProyectTittles;
