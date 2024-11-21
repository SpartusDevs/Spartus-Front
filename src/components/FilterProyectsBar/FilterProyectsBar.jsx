import { Input, DatePicker, FloatButton, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons"; // Importa el icono de cierre
import "./FilterProyectsBar.css";
import androidIcon from "../../assets/tecnologiesIcons/android.svg";
import awsIcon from "../../assets/tecnologiesIcons/aws.svg";
import expoIcon from "../../assets/tecnologiesIcons/expo.svg";
import javaIcon from "../../assets/tecnologiesIcons/java.svg";
import nodeIcon from "../../assets/tecnologiesIcons/node.svg";
import reactIcon from "../../assets/tecnologiesIcons/react.svg";
import springIcon from "../../assets/tecnologiesIcons/spring.svg";
import vueIcon from "../../assets/tecnologiesIcons/vue.svg";

function FilterProyectsBar({ onClose }) {
  const technologies = [
    { name: "Android", icon: androidIcon },
    { name: "AWS", icon: awsIcon },
    { name: "Expo", icon: expoIcon },
    { name: "Java", icon: javaIcon },
    { name: "Node", icon: nodeIcon },
    { name: "React", icon: reactIcon },
    { name: "Spring", icon: springIcon },
    { name: "Vue", icon: vueIcon },
  ];

  return (
    <div
      className="leftBar_filterProyects"
      data-aos="fade-right"
      data-aos-duration="3000"
    >
      {/* Botón de cierre */}
      <CloseOutlined className="closeIcon_filterProyects" onClick={onClose} />
      <h1 className="title_filterProyects">Filtrado</h1>
      <p className="pFunction_filterProyects">
        Filtra nuestros trabajos según su fecha de creación, nombre,
        tecnologías
      </p>
      <div>
        <h4 className="h4_filterProyects">Por nombre</h4>
        <Input
          className="inputNombre_filterProyects"
          placeholder="Por nombre"
        />
      </div> 
      <div>
        <h4 className="h4_filterProyects">Por Tematica</h4>
        <DatePicker className="inputNombre_filterProyects" picker="year" />
      </div>

      <div>
        <h4 className="h4_filterProyects">Por año</h4>
        <DatePicker className="inputNombre_filterProyects" picker="year" />
      </div>

      <div>
        <h4 className="h4_filterProyects">Por Tecnología</h4>
        <div className="technology-icons">
          {technologies.map((tech) => (
            <FloatButton
              key={tech.name}
              icon={
                <img
                  src={tech.icon}
                  alt={tech.name}
                  style={{ width: "20px", height: "20px", marginTop: "5px" }}
                />
              }
              type="primary"
              className="icon_filterProyects"
              tooltip={<span>{tech.name}</span>}
            />
          ))}
        </div>
      </div>
      <div>
        <h4 className="h4_filterProyects">Arquitectura</h4>
        <div className="arquiButons_filterProyects">
          <Button color="primary" variant="outlined" ghost>
            Monolítica
          </Button>
          <Button color="primary" variant="outlined" ghost>
            Microservicio
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FilterProyectsBar;
