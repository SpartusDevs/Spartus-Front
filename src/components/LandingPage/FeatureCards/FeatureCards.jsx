import "./FeatureCards.css";

function FeatureCards({ cardsData }) {
  return (
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
  );
}

export default FeatureCards;
