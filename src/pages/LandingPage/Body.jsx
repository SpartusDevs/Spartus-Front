import { FcKindle, FcAcceptDatabase, FcGenealogy } from "react-icons/fc";
import GlassMenuBar from "../../components/GlassMenuBar/GlassMenuBar";
import GrayItemList from "../../components/GrayItemList/GrayItemList";
import AnimatedTitles from "../../components/AnimatedTitles/AnimatedTitles";
import FeatureCards from "../../components/FeatureCards/FeatureCards";
import MiddleTitles from "../../components/MiddleTitles/MiddleTitles";
import AboutUs from "../../components/AboutUs/AboutUs";
import "./styles/Body.css";

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
      <AnimatedTitles />
      <FeatureCards cardsData={cardsData} />
      <GlassMenuBar data-aos="flip-up" data-aos-duration="3000" />
      <GrayItemList />
      <MiddleTitles />
      <AboutUs />
    </div>
  );
}

export default Body;
