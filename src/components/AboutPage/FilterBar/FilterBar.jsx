import { useState, useEffect } from "react";
import { Input, DatePicker, Button, Select } from "antd";
import androidIcon from "../../../assets/tecnologiesIcons/android.svg";
import awsIcon from "../../../assets/tecnologiesIcons/aws.svg";
import expoIcon from "../../../assets/tecnologiesIcons/expo.svg";
import javaIcon from "../../../assets/tecnologiesIcons/java.svg";
import nodeIcon from "../../../assets/tecnologiesIcons/node.svg";
import reactIcon from "../../../assets/tecnologiesIcons/react.svg";
import springIcon from "../../../assets/tecnologiesIcons/spring.svg";
import vueIcon from "../../../assets/tecnologiesIcons/vue.svg";
import "./FilterBar.css";

function FilterBar({ language }) {
  const [selectedArchitecture, setSelectedArchitecture] = useState("monolitica");
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1250);

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

  // Detectar cambios de tamaño de ventana
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1250);
    };

    window.addEventListener("resize", handleResize);

    // Limpieza del evento al desmontar
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Traducciones
  const translations = {
    es: {
      nameFilter: "Por nombre",
      themeFilter: "Por temática",
      technologyFilter: "Por tecnología",
      yearFilter: "Por año",
      architectureFilter: "Arquitectura",
      monolithic: "Monolítica",
      microservice: "Microservicio",
      selectTechPlaceholder: "Selecciona una tecnología",
    },
    en: {
      nameFilter: "By name",
      themeFilter: "By theme",
      technologyFilter: "By technology",
      yearFilter: "By year",
      architectureFilter: "Architecture",
      monolithic: "Monolithic",
      microservice: "Microservice",
      selectTechPlaceholder: "Select a technology",
    },
  };

  const t = translations[language]; // Selecciona las traducciones según el idioma

  return (
    <div className="leftBar_filterProyects">
      {/* Siempre se muestran los filtros de Por nombre y Por temática */}
      <div>
        <h4 className="h4_filterProyects">{t.nameFilter}</h4>
        <Input className="inputNombre_filterProyects" placeholder={t.nameFilter} />
      </div>
      <div>
        <h4 className="h4_filterProyects">{t.themeFilter}</h4>
        <Select
          className="inputNombre_filterProyects"
          placeholder={t.selectTechPlaceholder}
          options={technologyOptions}
          style={{ width: "12rem" }}
        />
      </div>

      {/* Otros filtros visibles solo si la pantalla es mayor o igual a 1250px */}
      {!isSmallScreen && (
        <>
          <div>
            <h4 className="h4_filterProyects">{t.yearFilter}</h4>
            <DatePicker className="inputNombre_filterProyects" picker="year" />
          </div>
          <div>
            <h4 className="h4_filterProyects">{t.technologyFilter}</h4>
            <Select
              className="inputNombre_filterProyects"
              placeholder={t.selectTechPlaceholder}
              options={technologyOptions}
              style={{ width: "12rem" }}
            />
          </div>
          <div>
            <h4 className="h4_filterProyects">{t.architectureFilter}</h4>
            <div className="arquiButons_filterProyects">
              <Button
                type={selectedArchitecture === "monolitica" ? "primary" : "default"}
                onClick={() => handleArchitectureClick("monolitica")}
                ghost
              >
                {t.monolithic}
              </Button>
              <Button
                type={selectedArchitecture === "microservicio" ? "primary" : "default"}
                onClick={() => handleArchitectureClick("microservicio")}
                ghost
              >
                {t.microservice}
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default FilterBar;
