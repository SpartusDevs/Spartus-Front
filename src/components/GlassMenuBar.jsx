import React, {useEffect, useState} from "react";
import { FcKindle, FcAcceptDatabase, FcGenealogy   } from "react-icons/fc";
import "./GlassMenuBar.css"; // Importar los estilos CSS
import ButtonScrollToTop from "./ButtonToTop/ButtonToTop";

function GlassMenuBar() {
    const [showBar, setShowBar] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;
  
        if (scrollPosition > viewportHeight * 0.4) {
          setShowBar(true);
        } else {
          setShowBar(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return (
     <> {showBar && (
        <div className="glass-menu-bar"  >
         <FcKindle style={{width:'40px', height:'40px'}} className="icon" />
         <FcGenealogy style={{width:'40px', height:'40px'}} className="icon" />
      <FcAcceptDatabase style={{width:'40px', height:'40px'}} className="icon" />
    </div>
  )}
  {showBar && <ButtonScrollToTop/>}


  </>)
}

export default GlassMenuBar;
