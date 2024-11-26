import { useState } from "react";
import AboutProyectTittles from "../../components/AboutProyectTittles/AboutProyectTittles";
import ProyectsPreview from "../../components/ProyectsPreview/ProyectsPreview";
import FilterProyectsBar from "../../components/FilterProyectsBar/FilterProyectsBar";
import LeftBar from "../../components/LeftBar/LeftBar";
import ViewProyect from "../../components/ViewProyect/ViewProyect";
import GlassMenuBar from "../../components/GlassMenuBar/GlassMenuBar";
import "./styles/Body.css";

function Body() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const handleIsFilterOpenChange = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const [isProyectOpen, setIsProyectOpen] = useState(false);

  return (
    <div className="body_container">
      <AboutProyectTittles />
      {!isFilterOpen ? (
        <LeftBar
          onClose={handleIsFilterOpenChange}
          isProyectOpen={isProyectOpen}
          setIsProyectOpen={setIsProyectOpen}
        />
      ) : (
        <FilterProyectsBar onClose={handleIsFilterOpenChange} />
      )}
      {!isProyectOpen ? (
        <div className="container_proyects">
          {[...Array(6)].map((_, index) => (
            <ProyectsPreview
              key={index}
              onOpen={() => {
                setIsFilterOpen(false);
                setIsProyectOpen(true);
              }}
            />
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
