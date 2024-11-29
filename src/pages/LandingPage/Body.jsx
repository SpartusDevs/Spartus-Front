import { FcKindle, FcAcceptDatabase, FcGenealogy } from "react-icons/fc";
import GlassMenuBar from "../../components/comun/GlassMenuBar/GlassMenuBar";
import GrayItemList from "../../components/LandingPage/GrayItemList/GrayItemList";
import AnimatedTitles from "../../components/LandingPage/AnimatedTitles/AnimatedTitles";
import FeatureCards from "../../components/LandingPage/FeatureCards/FeatureCards";
import MiddleTitles from "../../components/LandingPage/MiddleTitles/MiddleTitles";
import AboutUs from "../../components/LandingPage/AboutUs/AboutUs";
import "./styles/Body.css";

function Body({ language } ) {

  const translations = {
    es: {
      responsiveDesign: "Diseño Responsivo",
      responsiveDescription:
        "Creamos diseños adaptables que garantizan una experiencia óptima en cualquier dispositivo o pantalla.",
      secureInfrastructure: "Infraestructura Segura",
      secureDescription:
        "Usamos tecnologías seguras como HTTPS y firewalls para crear sitios web confiables y protegidos.",
      dataProtection: "Protección de Datos",
      dataDescription:
        "Aseguramos la privacidad y seguridad de tu información con protocolos avanzados de protección.",
    },
    en: {
      responsiveDesign: "Responsive Design",
      responsiveDescription:
        "We create adaptive designs that ensure an optimal experience on any device or screen.",
      secureInfrastructure: "Secure Infrastructure",
      secureDescription:
        "We use secure technologies like HTTPS and firewalls to build reliable and protected websites.",
      dataProtection: "Data Protection",
      dataDescription:
        "We ensure the privacy and security of your information with advanced protection protocols.",
    },
  };

  const t = translations[language]; 
  const cardsData = [
    {
      icon: <FcKindle style={{ width: "40px", height: "40px" }} />,
      title: t.responsiveDesign,
      description: t.responsiveDescription,
    },
    {
      icon: <FcGenealogy style={{ width: "40px", height: "40px" }} />,
      title: t.secureInfrastructure,
      description: t.secureDescription,
    },
    {
      icon: <FcAcceptDatabase style={{ width: "40px", height: "40px" }} />,
      title: t.dataProtection,
      description: t.dataDescription,
    },
  ];

  return (
    <div className="body_container">
      <AnimatedTitles language={language} />
      <FeatureCards cardsData={cardsData}  />
      <GlassMenuBar data-aos="flip-up" data-aos-duration="3000" language={language} />
      <GrayItemList language={language}/>
      <MiddleTitles language={language} />
      <AboutUs language={language}/>
    </div>
  );
}

export default Body;
