import  {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom"
import ButtonScrollToTop from "../ButtonToTop/ButtonToTop";
import "./GlassMenuBar.css"; 


function GlassMenuBar() {
    const [showBar, setShowBar] = useState(false);
    const navigate = useNavigate();
    const handleSelect = (item) => {
      if (item !== "ES") {
          if (item === "Inicio") {
          navigate("/");
        } else if (item === "Proyectos") {
          navigate("/about");
        } else if (item === "Nosotros") {
          navigate("/");
          window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        }
      } }
  
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
              <p
              onClick={() => handleSelect("Inicio")}
              >Inicio</p>
              <p
              onClick={() => handleSelect("Proyectos")}
              >Proyectos</p>
              <p
               onClick={() => handleSelect("Nosotros")}
              >Nosotros</p>
             
    </div>
  )}
  {showBar && <ButtonScrollToTop/>}


  </>)
}

export default GlassMenuBar;
