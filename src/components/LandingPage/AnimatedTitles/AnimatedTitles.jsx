import "./AnimatedTitles.css";

function AnimatedTitles({ language }) {
  const translations = {
    es: {
      title1: "Impulsa tu",
      title2: "Transformación",
      title3: "Digital",
      description:
        "Soluciones innovadoras para crear y optimizar tu presencia online, llevando tu negocio al futuro digital.",
    },
    en: {
      title1: "Boost Your",
      title2: "Transformation",
      title3: "Digital",
      description:
        "Innovative solutions to create and optimize your online presence, taking your business into the digital future.",
    },
  };

  const t = translations[language]; 

  return (
    <div
      className="body_titles"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="2000"
    >
      <h1>{t.title1}</h1>
      <h1 className="h1_reconversion">{t.title2}</h1>
      <h1 className="gradient-title">{t.title3}</h1>
      <p className="gradient-description">{t.description}</p>
    </div>
  );
}

export default AnimatedTitles;
