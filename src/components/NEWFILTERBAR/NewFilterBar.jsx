import { useState } from "react";
import { Input, DatePicker, Button, Select } from "antd";
import androidIcon from "../../assets/tecnologiesIcons/android.svg";
import awsIcon from "../../assets/tecnologiesIcons/aws.svg";
import expoIcon from "../../assets/tecnologiesIcons/expo.svg";
import javaIcon from "../../assets/tecnologiesIcons/java.svg";
import nodeIcon from "../../assets/tecnologiesIcons/node.svg";
import reactIcon from "../../assets/tecnologiesIcons/react.svg";
import springIcon from "../../assets/tecnologiesIcons/spring.svg";
import vueIcon from "../../assets/tecnologiesIcons/vue.svg";
import "./NewFilterBar.css";

function NewFilterBar({ onClose }) {
  const [selectedArchitecture, setSelectedArchitecture] = useState("monolitica");

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

  const technologyOptions = technologies.map((tech) => ({
    value: tech.name,
    label: (
      <div className="technology-option">
        <img
          src={tech.icon}
          alt={tech.name}
          className="technology-icon"
          style={{
            width: 16,
            height: 16,
            verticalAlign: "middle",
            marginRight: 8,
          }}
        />
        {tech.name}
      </div>
    ),
  }));

  const handleArchitectureClick = (architecture) => {
    setSelectedArchitecture(architecture);
  };

  return (
    <div className="leftBar_filterProyects">
      <div>
        <h4 className="h4_filterProyects">Por nombre</h4>
        <Input className="inputNombre_filterProyects" placeholder="Por nombre" />
      </div>
      <div>
        <h4 className="h4_filterProyects">Por temática</h4>
        <Select
          className="inputNombre_filterProyects"
          placeholder="Selecciona una tecnología"
          options={technologyOptions}
          style={{ width: "12rem" }}
        />
      </div>
      <div>
        <h4 className="h4_filterProyects">Por año</h4>
        <DatePicker className="inputNombre_filterProyects" picker="year" />
      </div>
      <div>
        <h4 className="h4_filterProyects">Por tecnología</h4>
        <Select
          className="inputNombre_filterProyects"
          placeholder="Selecciona una tecnología"
          options={technologyOptions}
          style={{ width: "12rem" }}
        />
      </div>
      <div>
        <h4 className="h4_filterProyects">Arquitectura</h4>
        <div className="arquiButons_filterProyects">
          <Button
            type={selectedArchitecture === "monolitica" ? "primary" : "default"}
            onClick={() => handleArchitectureClick("monolitica")}
            ghost 
          >
            Monolítica
          </Button>
          <Button
            type={selectedArchitecture === "microservicio" ? "primary" : "default"}
            onClick={() => handleArchitectureClick("microservicio")}
            ghost 
          >
            Microservicio
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NewFilterBar;
