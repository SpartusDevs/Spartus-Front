import React from 'react';
import './ProyectsPreview.css';

const proyectos = [
  {
    id: 1,
    nombre: 'Proyecto 1',
    descripcion: 'Descripción del proyecto 1.',
    tecnologias: ['React', 'Node.js', 'CSS'],
    imagen: 'https://eikonos.com/wp-content/uploads/2016/01/diseno-web-responsive.jpg'
  },
  {
    id: 2,
    nombre: 'Proyecto 2',
    descripcion: 'Descripción del proyecto 2.',
    tecnologias: ['Angular', 'Express', 'MongoDB'],
    imagen: 'https://eikonos.com/wp-content/uploads/2016/01/diseno-web-responsive.jpg'
  },
  {
    id: 3,
    nombre: 'Proyecto 3',
    descripcion: 'Descripción del proyecto 3.',
    tecnologias: ['Vue', 'Firebase', 'Sass'],
    imagen: 'https://eikonos.com/wp-content/uploads/2016/01/diseno-web-responsive.jpg'
  },
  {
    id: 4,
    nombre: 'Proyecto 4',
    descripcion: 'Descripción del proyecto 4.',
    tecnologias: ['React Native', 'Expo', 'Redux'],
    imagen: 'https://eikonos.com/wp-content/uploads/2016/01/diseno-web-responsive.jpg'
  },
  {
    id: 5,
    nombre: 'Proyecto 5',
    descripcion: 'Descripción del proyecto 5.',
    tecnologias: ['Python', 'Flask', 'SQLite'],
    imagen: 'https://eikonos.com/wp-content/uploads/2016/01/diseno-web-responsive.jpg'
  }
];

function ProyectsPreview() {
  return (
    <div className="proyectos-container">
      {proyectos.map((proyecto) => (
        <div className="proyecto-card" key={proyecto.id}>
          <img src={proyecto.imagen} alt={proyecto.nombre} className="proyecto-img" />
          <h3 className="proyecto-nombre">{proyecto.nombre}</h3>
          <p className="proyecto-descripcion">{proyecto.descripcion}</p>
          <ul className="proyecto-tecnologias">
            {proyecto.tecnologias.map((tecnologia, index) => (
              <li key={index}>{tecnologia}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default ProyectsPreview;
