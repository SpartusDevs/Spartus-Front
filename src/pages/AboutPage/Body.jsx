import { useState } from "react";
import AboutProyectTittles from "../../components/AboutPage/AboutProyectTittles/AboutProyectTittles";
import ProyectsPreview from "../../components/AboutPage/ProyectsPreview/ProyectsPreview";
import FilterBar from "../../components/AboutPage/FilterBar/FilterBar.jsx";
import LeftBar from "../../components/AboutPage/LeftBar/LeftBar";
import ViewProyectDetail from "../../components/AboutPage/ViewProyectDetail/ViewProyectDetail";
import GlassMenuBar from "../../components/GlassMenuBar/GlassMenuBar";
import "./styles/Body.css";

function Body() {
  const [isProyectOpen, setIsProyectOpen] = useState(false);

  return (
    <div className="body_container">
      {!isProyectOpen && <AboutProyectTittles />}

      <LeftBar
        isProyectOpen={isProyectOpen}
        setIsProyectOpen={setIsProyectOpen}
      />
      {!isProyectOpen && <FilterBar />}
      {!isProyectOpen ? (
        <div className="container_proyects">
          {[...Array(12)].map((_, index) => (
            <ProyectsPreview
              key={index}
              onOpen={() => {
                setIsProyectOpen(true);
              }}
            />
          ))}
        </div>
      ) : (
        <div className="proyect_open">
          <ViewProyectDetail setIsProyectOpen={setIsProyectOpen} />
        </div>
      )}
      <GlassMenuBar data-aos="flip-up" data-aos-duration="3000" />
    </div>
  );
}

export default Body;
