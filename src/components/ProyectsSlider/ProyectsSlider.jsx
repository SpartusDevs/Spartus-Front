import { useState } from "react";
import "./ProyectsSlider.css";

function ProyectsSlider() {
  const [paused, setPaused] = useState(false);
  
  const images = [
    "https://www.4webs.es/blog/wp-content/uploads/2019/02/urls-que-es.jpg",
    "https://eikonos.com/wp-content/uploads/2016/01/diseno-web-responsive.jpg",
    "https://josmarketing.es/wp-content/uploads/2017/11/presentacion-final-de-disenyo-web.jpg",
    "https://www.optimbyte.com/wp-content/uploads/2014/08/total-lapera.jpg",
    "https://www.4webs.es/blog/wp-content/uploads/2019/02/urls-que-es.jpg"
  ];



  return (
    <div
      className={`container_proyectSlider `}
      onMouseEnter={() => setPaused(true)} // Detener la animación al pasar el mouse
      onMouseLeave={() => setPaused(false)} // Reanudar la animación al quitar el mouse
    >
      <div
        className={`slider_proyectSlider ${paused ? "paused" : ""}`}
        style={{ "--quantity": images.length }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="item_proyectSlider"
            style={{ "--position": index + 1 }}
          >
            <img src={src} alt={`Slide ${index + 1}`} onMouseEnter={()=>{setPaused(true)}} onMouseLeave={()=>{setPaused(false)}}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProyectsSlider;
