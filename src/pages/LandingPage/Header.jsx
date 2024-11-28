import { useState, useEffect } from "react";
import logo from "../../assets/logo/2-removebg-preview.png";
import logo2 from "../../assets/logo/1-removebg-preview.png";
import { useNavigate  } from "react-router-dom";
import { Button } from "antd";
import MenuBar from "../../components/comun/MenuBar/MenuBar";
import ImageRibbon from "../../components/LandingPage/ImageRibbon/ImageRibbon";
import "./styles/Header.css";
function Header() {
  const [updateImageLogo, setUpdateImageLogo] = useState(logo);
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setUpdateImageLogo(logo2);
      setFlag(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

const handleOnClick = () =>{
  navigate("/about");
}

  return (
    <>
      <header className="header">
        <MenuBar />
      </header>
      <main className="container">
        <div className="box box-1">
          <img src={updateImageLogo} className="img" />

          <div className="small-box">
     
   
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
         <Button
              color="danger"
              variant="solid"
              className="box-1-button"
              style={{ opacity: flag ? 1 : 0 }}
              onClick={handleOnClick}
            >
              Nuestros proyectos
            </Button>
      </main>
    </>
  );
}

export default Header;
