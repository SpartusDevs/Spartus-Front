import React from "react";
import { FcKindle, FcAcceptDatabase, FcGenealogy   } from "react-icons/fc";
import GlassMenuBar from "../../components/GlassMenuBar";
import "./styles/Body.css";
function Body() {
  return (
    <div className="body_container">
      <div className="body_titles" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"   data-aos-duration="2000">
        <h1>Acelera tu</h1>
        <h1 className="h1_reconversion">Reconversión</h1>
        <h1 className="gradient-title">Reconversión</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, blanditiis.</p>
      </div>
   
      <div className="body_cards">
        <div className="card">
          <div className="icon">
            <FcKindle style={{width:'40px', height:'40px'}} />
          </div>
          <h2>Pone a prueba tus Soft Skills</h2>
          <p>
            Participa en equipos multidisciplinarios y multiculturales con
            talentos de todo el mundo.
          </p>
        </div>
        <div className="card">
          <div className="icon">
            <FcGenealogy  style={{width:'40px', height:'40px'}} />
          </div>
          <h2>Pone a prueba tus Soft Skills</h2>
          <p>
            Participa en equipos multidisciplinarios y multiculturales con
            talentos de todo el mundo.
          </p>
        </div>
        <div className="card">
          <div className="icon">
            <FcAcceptDatabase style={{width:'40px', height:'40px'}} />
          </div>
          <h2>Pone a prueba tus Soft Skills</h2>
          <p>
            Participa en equipos multidisciplinarios y multiculturales con
            talentos de todo el mundo.
          </p>
        </div>
      </div>
      <GlassMenuBar data-aos="flip-up" data-aos-duration="3000" />
    </div>
  );
}

export default Body;
