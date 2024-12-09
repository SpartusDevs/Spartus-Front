import { FcKindle, FcAcceptDatabase, FcGenealogy } from "react-icons/fc";
import GlassMenuBar from "../../components/comun/GlassMenuBar/GlassMenuBar";
import { GrayItemList, AnimatedTitles, FeatureCards, MiddleTitles, AboutUs, Proyects } from "../../components/LandingPage"; 
import translations from "./translations/Body.json";
import "./styles/Body.css";

function Body({ language }) {
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
      <FeatureCards cardsData={cardsData} />
      <GlassMenuBar data-aos="flip-up" data-aos-duration="3000" language={language} />
      <GrayItemList language={language} />
      <Proyects language={language}  data-aos="flip-up" data-aos-duration="3000"/>
      <MiddleTitles language={language} />
      <AboutUs language={language} />
    </div>
  );
}

export default Body;

