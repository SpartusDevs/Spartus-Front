import { useState, useEffect } from "react";
import logo from "../../assets/logo/2-removebg-preview.png";
import logo2 from "../../assets/logo/1-removebg-preview.png";
import { Link } from "react-router-dom";
import { Button } from "antd";
import MenuBar from "../../components/MenuBar/MenuBar";
import ImageCarousel from "../../components/ImageCarousel";
import ImageRibbon from "../../components/ImageRibbon/ImageRibbon";
import "./styles/Header.css";
function Header() {
  const [updateImageLogo, setUpdateImageLogo] = useState(logo);
  const [flag, setFlag] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const timer = setTimeout(() => {
      setUpdateImageLogo(logo2);
      setFlag(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className="header">
        <MenuBar />
      </header>
      <main className="container">
        <div className="box box-1">
          <img src={updateImageLogo} className="img" />

          <div className="small-box">
            <p
              style={{ opacity: flag ? 1 : 0.3 }}
              className="buttonText_landing"
            >
              Accede a todos nuestros proeyctos
            </p>
            <Button
              color="danger"
              variant="solid"
              className="box-1-button"
              style={{ opacity: flag ? 1 : 0 }}
            >
              {" "}
              <Link to="/about">Nuestros Pryectos</Link>
            </Button>
          </div>
        </div>
        <div
          className="box"
        >
            <ImageRibbon />
     
        </div> {/**
        <div style={{height:'10vh', width:'40vh'}}>
<img src={ImageEspada} alt="icono_espada"  className="espadaIMG"/>
        </div> */}

      </main>
    </>
  );
}

export default Header;
