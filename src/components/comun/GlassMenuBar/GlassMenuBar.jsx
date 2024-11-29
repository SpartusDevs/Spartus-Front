import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonScrollToTop from "../ButtonToTop/ButtonToTop";
import "./GlassMenuBar.css";

function GlassMenuBar({ language }) {
  const [showBar, setShowBar] = useState(false);
  const navigate = useNavigate();

  // Traducciones
  const translations = {
    es: {
      inicio: "Inicio",
      proyectos: "Proyectos",
      nosotros: "Nosotros",
    },
    en: {
      inicio: "Home",
      proyectos: "Projects",
      nosotros: "About Us",
    },
  };

  const t = translations[language]; // Selección de idioma

  const handleSelect = (item) => {
    if (item !== "ES") {
      if (item === t.inicio) {
        navigate("/");
      } else if (item === t.proyectos) {
        navigate("/about");
      } else if (item === t.nosotros) {
        navigate("/");
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      }
    }
  };

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
    <>
      {showBar && (
        <div className="glass-menu-bar">
          <p onClick={() => handleSelect(t.inicio)}>{t.inicio}</p>
          <p onClick={() => handleSelect(t.proyectos)}>{t.proyectos}</p>
          <p onClick={() => handleSelect(t.nosotros)}>{t.nosotros}</p>
        </div>
      )}
      {showBar && <ButtonScrollToTop />}
    </>
  );
}

export default GlassMenuBar;
