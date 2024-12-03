import { useState } from "react";
import AboutProyectTittles from "../../components/AboutPage/AboutProyectTittles/AboutProyectTittles";
import ProyectsPreview from "../../components/AboutPage/ProyectsPreview/ProyectsPreview";
import FilterBar from "../../components/AboutPage/FilterBar/FilterBar.jsx";
import LeftBar from "../../components/AboutPage/LeftBar/LeftBar";
import ViewProyectDetail from "../../components/AboutPage/ViewProyectDetail/ViewProyectDetail";
import GlassMenuBar from "../../components/comun/GlassMenuBar/GlassMenuBar";
import filterBarTranslations from "./translations/FilterBar.json"
import viewProyectDetailTranslations from "./translations/ViewProyectDetail.json" 
import "./styles/Body.css";
function Body({ language }) {
  const [isProyectOpen, setIsProyectOpen] = useState(false);

  return (
    <div className="body_container">
      {!isProyectOpen && <AboutProyectTittles language={language} />}

      <LeftBar
        isProyectOpen={isProyectOpen}
        setIsProyectOpen={setIsProyectOpen}
      />
      {!isProyectOpen && <FilterBar language={language} translations={filterBarTranslations}/>}
      {!isProyectOpen ? (
        <div className="container_proyects">
          {[...Array(12)].map((_, index) => (
            <ProyectsPreview
              key={index}
              onOpen={() => {
                setIsProyectOpen(true);
              }}
              language={language}
            />
          ))}
        </div>
      ) : (
        <div className="proyect_open">
          <ViewProyectDetail
            language={language}
            setIsProyectOpen={setIsProyectOpen}
            translations={viewProyectDetailTranslations}
          />
        </div>
      )}
      <GlassMenuBar
        language={language}
        data-aos="flip-up"
        data-aos-duration="3000"
      />
    </div>
  );
}

export default Body;
