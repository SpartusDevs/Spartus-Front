import './ProyectsPreview.css'; // Para el estilo


const ProyectsPreview = ({ onOpen, language }) => {
  return (
    <div className="card-container_P-Preview" onClick={onOpen} data-aos="zoom-in"
    data-aos-duration="3000">
      <div className="image-container_pr">
        <img
          src="https://www.4webs.es/blog/wp-content/uploads/2019/02/urls-que-es.jpg"
          alt="Project"
        />
      </div>
      <div className="content_pr">
        <h2>Project Name</h2>
        <p>This is a description of the project. It explains what the project is about.</p>
      </div>
    </div>
  );
};

export default ProyectsPreview;
