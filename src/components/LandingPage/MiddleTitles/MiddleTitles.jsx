import "./MiddleTitles.css";

function MiddleTitles({ language }) {
  // Traducciones
  const translations = {
    es: {
      greeting: "Hola,",
      thanks: "gracias",
      description1: "por visitar nuestra página",
      description2: "Contáctate con nosotros sin compromiso y estaremos encantados de ayudarte con lo que necesites.",
      buttonText: "Únete",
    },
    en: {
      greeting: "Hello,",
      thanks: "thank you",
      description1: "for visiting our page",
      description2: "Get in touch with us without commitment, and we will be happy to help you with whatever you need.",
      buttonText: "Join",
    },
  };

  const t = translations[language];

  return (
    <div className="intro">
      <div className="container_intro">
        <span>{t.greeting}</span>
        <div className="animated_intro-text">
          <span>{t.thanks}</span>
        </div>
      </div>
      <div className="container_intro-description">
        <p>{t.description1}</p>
        <p>{t.description2}</p>
        <button className="join_button">{t.buttonText}</button>
      </div>
    </div>
  );
}

export default MiddleTitles;
