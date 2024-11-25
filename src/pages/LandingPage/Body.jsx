import { FcKindle, FcAcceptDatabase, FcGenealogy } from "react-icons/fc";
import GlassMenuBar from "../../components/GlassMenuBar/GlassMenuBar"
import "./styles/Body.css";
import Items from "../../components/Items/Items";
import TextAnimation from "../../components/TextAnimation/TextAnimation";
import AboutUs from "../../components/AboutUs/AboutUs";
import ProyectsSlider from "../../components/ProyectsSlider/ProyectsSlider";

function Body() {
  const cardsData = [
    {
      icon: <FcKindle style={{ width: "40px", height: "40px" }} />,
      title: "Diseño Responsivo",
      description:
        "Creamos diseños adaptables que garantizan una experiencia óptima en cualquier dispositivo o pantalla.",
    },
    {
      icon: <FcGenealogy style={{ width: "40px", height: "40px" }} />,
      title: "Infraestructura Segura",
      description:
        "Usamos tecnologías seguras como HTTPS y firewalls para crear sitios web confiables y protegidos.",
    },
    {
      icon: <FcAcceptDatabase style={{ width: "40px", height: "40px" }} />,
      title: "Protección de Datos",
      description:
        "Aseguramos la privacidad y seguridad de tu información con protocolos avanzados de protección.",
    },
  ];

  return (
    <div className="body_container">


      <div
        className="body_titles"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="2000"
      >
        {/* Impulsa tu Transformación Digital */}
        <h1>Impulsa tu</h1>
        <h1 className="h1_reconversion">Transformación</h1>
        <h1 className="gradient-title">Digital</h1>
        <p>
        Soluciones innovadoras para crear y optimizar tu presencia online, llevando tu negocio al futuro digital.
        </p>
      </div> 
     <div className="container_cards">
     <div className="img_backgraund"></div> 
     <div className="body_cards">
        {cardsData.map((card, index) => (
          <div className="card" key={index}>
            <div className="icon">{card.icon}</div>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
           
          </div>
        ))} 
        </div> 
         <div className="img_backgraund"></div>
      </div> 
      <GlassMenuBar data-aos="flip-up" data-aos-duration="3000" />
     
      <Items />
      <TextAnimation />
      <AboutUs />
    </div>
  );
}

export default Body;

