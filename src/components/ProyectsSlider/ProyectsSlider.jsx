import "./ProyectsSlider.css";

function ProyectsSlider() {
  const images = Array(7).fill(
    "https://www.4webs.es/blog/wp-content/uploads/2019/02/urls-que-es.jpg"
  );

  return (
    <div className="container_proyectSlider">
      <div
        className="slider_proyectSlider"
        style={{ "--quantity": images.length }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="item_proyectSlider"
            style={{ "--position": index + 1 }}
          >
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProyectsSlider;
