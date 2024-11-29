import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MenuBar.css";

function MenuBar({ language, toggleLanguage }) {
  const [selectedItem, setSelectedItem] = useState(language === "es" ? "Inicio" : "Home");
  const navigate = useNavigate();

  // Traducciones
  const translations = {
    es: {
      home: "Inicio",
      projects: "Proyectos",
      aboutUs: "Nosotros",
      languageLabel: "ES",
    },
    en: {
      home: "Home",
      projects: "Projects",
      aboutUs: "About Us",
      languageLabel: "EN",
    },
  };

  const t = translations[language]; // Selecciona las traducciones según el idioma

  const handleScroll = () => {
    const isAtBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 5;
    if (isAtBottom && selectedItem !== t.aboutUs) {
      setSelectedItem(t.aboutUs);
    } else if (!isAtBottom && selectedItem === t.aboutUs) {
      setSelectedItem(t.home);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [selectedItem, t]); // Dependencia actualizada para reflejar cambios en las traducciones

  const handleSelect = (item) => {
    if (item !== t.languageLabel) {
      setSelectedItem(item);
      if (item === t.home) {
        navigate("/");
      } else if (item === t.projects) {
        navigate("/about");
      } else if (item === t.aboutUs) {
        // Desplazarse al final de la página
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="menu">
      <p
        className={`nav-item ${selectedItem === t.home ? "selected" : ""}`}
        onClick={() => handleSelect(t.home)}
      >
        {t.home}
      </p>
      <p
        className={`nav-item ${selectedItem === t.projects ? "selected" : ""}`}
        onClick={() => handleSelect(t.projects)}
      >
        {t.projects}
      </p>
      <p
        className={`nav-item ${selectedItem === t.aboutUs ? "selected" : ""}`}
        onClick={() => handleSelect(t.aboutUs)}
      >
        {t.aboutUs}
      </p>
      <p className="nav-item selected"  onClick={() => toggleLanguage(language === "es" ? "en" : "es")}>{t.languageLabel}</p>
    </div>
  );
}

export default MenuBar;
