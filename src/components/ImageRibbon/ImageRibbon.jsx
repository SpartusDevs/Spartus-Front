import { motion } from "framer-motion";
import "./ImageRibbon.css";

const images = [
  "https://www.tucanit.com/wp-content/uploads/2022/07/eva.png",
  "https://www.tucanit.com/wp-content/uploads/2022/07/eva.png",
  "https://www.tucanit.com/wp-content/uploads/2022/07/eva.png",
  "https://www.tucanit.com/wp-content/uploads/2022/07/eva.png",
  "https://www.tucanit.com/wp-content/uploads/2022/07/eva.png",
];

const ImageRibbon = () => {
  const imageVariants = {
    animate: {
      y: ["0%", "-200%"], // Se desplaza de su posición inicial hacia arriba
    },
  };

  return (
    <div className="ribbon-container">
      <motion.div
        className="ribbon"
        animate={{ y: [0, -1200] }} // Desplaza todo hacia arriba
        transition={{
          duration: 20, // Tiempo total del movimiento (ajustable)
          repeat: Infinity, // Animación infinita
          ease: "linear", // Velocidad constante
        }}
      >
        {/* Muestra las imágenes duplicadas para crear un efecto continuo */}
        {images.concat(images).map((image, index) => (
          <div key={index} className="image-wrapper">
            <img src={image} alt={`img-${index}`} />
          </div>
        ))}
      </motion.div>
      
    </div>
  );
};

export default ImageRibbon;
