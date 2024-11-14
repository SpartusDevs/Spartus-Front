import React from 'react';
import './ImageCard.css'; // Para el estilo

const ImageCard = () => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img
          src="https://www.4webs.es/blog/wp-content/uploads/2019/02/urls-que-es.jpg"
          alt="Project"
        />
      </div>
      <div className="content">
        <h2>Project Name</h2>
        <p>This is a description of the project. It explains what the project is about.</p>
      </div>
    </div>
  );
};

export default ImageCard;
