import { FcKindle, FcAcceptDatabase, FcGenealogy } from "react-icons/fc";
import GlassMenuBar from "../../components/GlassMenuBar";
import "./styles/Body.css";

function Body() {
  const cardsData = [
    {
      icon: <FcKindle style={{ width: "40px", height: "40px" }} />,
      title: "Pone a prueba tus Soft Skills",
      description:
        "Participa en equipos multidisciplinarios y multiculturales con talentos de todo el mundo.",
    },
    {
      icon: <FcGenealogy style={{ width: "40px", height: "40px" }} />,
      title: "Pone a prueba tus Soft Skills",
      description:
        "Participa en equipos multidisciplinarios y multiculturales con talentos de todo el mundo.",
    },
    {
      icon: <FcAcceptDatabase style={{ width: "40px", height: "40px" }} />,
      title: "Pone a prueba tus Soft Skills",
      description:
        "Participa en equipos multidisciplinarios y multiculturales con talentos de todo el mundo.",
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
        <h1>Acelera tu</h1>
        <h1 className="h1_reconversion">Reconversión</h1>
        <h1 className="gradient-title">Reconversión</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
          blanditiis.
        </p>
      </div>
      <div className="body_cards">
        {cardsData.map((card, index) => (
          <div className="card" key={index}>
            <div className="icon">{card.icon}</div>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
      <GlassMenuBar data-aos="flip-up" data-aos-duration="3000" />
    </div>
  );
}

export default Body;
