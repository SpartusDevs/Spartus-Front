import { useState} from "react";
import GlassMenuBar from "../../components/GlassMenuBar";
import ProyectsPreview from "../../components/ProyectsPreview/ProyectsPreview"
import logo2 from '../../assets/logo/1-removebg-preview.png';
import "./styles/Body.css";
import { Link } from "react-router-dom";
import FilterProyectsBar from "../../components/FilterProyectsBar/FilterProyectsBar";
import LeftBar from "../../components/LeftBar/LeftBar";
import ViewProyect from "../../components/ViewProyect/ViewProyect";
function Body() {
  const [isFilterOpen, setIsFilterOpen ] = useState(false);
  const handleIsFilterOpenChange = () =>{
    setIsFilterOpen(!isFilterOpen)
  }

  const [isProyectOpen, setIsProyectOpen] = useState(false)

  return (
    <div className="body_container"> 

      <div className="body_titles_about">
        <Link to="/"> 
     <img src={logo2} className='img_about'/></Link>
     <div className="titlesText_about">
        <h1 className="title_about">Nuestros</h1>
        <h1 className="gradient-title_about">proyectos</h1>
        <p className="p_about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, blanditiis.</p>
      </div></div>
   <menubar/> {!isFilterOpen ? <LeftBar onClose={handleIsFilterOpenChange}/> :
   <FilterProyectsBar onClose={handleIsFilterOpenChange}/> }
{!isProyectOpen ? (
  <div className="container_proyects">
    {[...Array(6)].map((_, index) => (
      <ProyectsPreview key={index} onOpen={() => setIsProyectOpen(true)} />
    ))}
  </div>
) : (
  <div className="proyect_open">
    <ViewProyect setIsProyectOpen={setIsProyectOpen} />
  </div>
)}


       <GlassMenuBar data-aos="flip-up" data-aos-duration="3000" />
    </div>
  );
}

export default Body;
