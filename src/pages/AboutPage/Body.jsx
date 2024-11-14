import React from "react";
import { FcKindle, FcAcceptDatabase, FcGenealogy } from "react-icons/fc";
import GlassMenuBar from "../../components/GlassMenuBar";
import ImageCarousel from "../../components/ImageCarousel"
import logo2 from '../../assets/logo/1-removebg-preview.png';
import "./styles/Body.css";
import { Link } from "react-router-dom";
function Body() {
  return (
    <div className="body_container"> 

      <div className="body_titles_about">
        <Link to="/"> 
     <img src={logo2} className='img_about'/></Link>
     <div>
        <h1>Nuestros</h1>
        <h1 className="gradient-title">proyectos</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, blanditiis.</p>
      </div></div>
   <menubar/>
   <div className="container_proyects">
        <ImageCarousel  />
        <ImageCarousel />
        <ImageCarousel />
        <ImageCarousel  />
        <ImageCarousel />
        <ImageCarousel />

      </div>     
       <GlassMenuBar data-aos="flip-up" data-aos-duration="3000" />
    </div>
  );
}

export default Body;
