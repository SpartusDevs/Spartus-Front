import "./GrayItemList.css";

function GrayItemList({ language }) {
  const translations = {
    es: [
      "Ofrecemos soluciones personalizadas con comunicación continua para satisfacer tus necesidades.",
      "Desarrollamos software eficiente, escalable y mantenible.",
      "Garantizamos óptimo rendimiento web.",
      "Soporte, optimización y mantenimiento de código",
    ],
    en: [
      "We offer personalized solutions with continuous communication to meet your needs.",
      "We develop efficient, scalable, and maintainable software.",
      "We guarantee optimal web performance.",
      "Support, optimization, and code maintenance.",
    ],
  };

  const t = translations[language]; 

  return (
    <div className="containter_items">
      <p>{t[0]}</p>
      <p>{t[1]}</p>
      <p>{t[2]}</p>
      <p>{t[3]}</p>
    </div>
  );
}

export default GrayItemList;
