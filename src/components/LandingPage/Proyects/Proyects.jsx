import React from 'react';
import './Proyects.css';

function Proyects({ language }) {
  return (
    <div className="new-proyects-container">
      <h2>{language === 'es' ? 'Últimos Proyectos' : 'Latest Projects'}</h2>
      <div className="proyects-cards">
        <div className="proyect-card" data-aos="fade-right">
          <img 
            src="https://www.4webs.es/blog/wp-content/uploads/2019/02/urls-que-es.jpg" 
            alt={language === 'es' ? 'Proyecto 1' : 'Project 1'} 
          />
        </div>
        <div className="proyect-card" data-aos="flip-left">
          <img 
            src="https://www.4webs.es/blog/wp-content/uploads/2019/02/urls-que-es.jpg" 
            alt={language === 'es' ? 'Proyecto 2' : 'Project 2'} 
          />
        </div>
        <div className="proyect-card" data-aos="fade-left">
          <img 
            src="https://www.4webs.es/blog/wp-content/uploads/2019/02/urls-que-es.jpg" 
            alt={language === 'es' ? 'Proyecto 3' : 'Project 3'} 
          />
        </div>
      </div>
    </div>
  );
}

export default Proyects;
