import  {useEffect, useState} from "react";
import ButtonScrollToTop from "../ButtonToTop/ButtonToTop";
import "./GlassMenuBar.css"; 


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
              <p>Inicio</p>
              <p>Proyectos</p>
              <p>Nosotros</p>
             
    </div>
  )}
  {showBar && <ButtonScrollToTop/>}


  </>)
}

export default GlassMenuBar;
