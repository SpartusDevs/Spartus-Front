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
  return (
    <div className="ribbon-container">
      <motion.div
        className="ribbon"
        animate={{ y: [0, -1200] }} 
        transition={{
          duration: 35, 
          repeat: Infinity, 
          ease: "linear", 
        }}
      >
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
