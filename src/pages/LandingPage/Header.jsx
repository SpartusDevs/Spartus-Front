import { useState, useEffect } from "react";
import logo from "../../assets/logo/2-removebg-preview.png";
import logo2 from "../../assets/logo/1-removebg-preview.png";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import MenuBar from "../../components/comun/MenuBar/MenuBar";
import ImageRibbon from "../../components/LandingPage/ImageRibbon/ImageRibbon";
import "./styles/Header.css";

function Header({language, toggleLanguage}) {
  const [updateImageLogo, setUpdateImageLogo] = useState(logo);
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();

  const translations = {
    es: {
      projects: "Nuestros proyectos",
    },
    en: {
      projects: "Our Projects",
    },
  };

  const t = translations[language]; 

  useEffect(() => {
    const timer = setTimeout(() => {
      setUpdateImageLogo(logo2);
      setFlag(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleOnClick = () => {
    navigate("/about");
  };

  return (
    <>
      <header className="header">
        <MenuBar language={language} toggleLanguage={toggleLanguage} />
      </header>
      <main className="container">
        <div className="box box-1">
          <img src={updateImageLogo} className="img" />
          <div className="small-box"></div>
        </div>
        <div className="box">
          <ImageRibbon />
        </div>
        <Button
          color="danger"
          variant="solid"
          className="box-1-button"
          style={{ opacity: flag ? 1 : 0 }}
          onClick={handleOnClick}
        >
          {t.projects}
        </Button>
      </main>
    </>
  );
}

export default Header;
