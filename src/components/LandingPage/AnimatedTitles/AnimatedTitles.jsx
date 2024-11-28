import "./AnimatedTitles.css";

function AnimatedTitles() {
  return (
    <div
      className="body_titles"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="2000"
    >
      <h1>Impulsa tu</h1>
      <h1 className="h1_reconversion">Transformación</h1>
      <h1 className="gradient-title">Digital</h1>
      <p>
        Soluciones innovadoras para crear y optimizar tu presencia online,
        llevando tu negocio al futuro digital.
      </p>
    </div>
  );
}

export default AnimatedTitles;
