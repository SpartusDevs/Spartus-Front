import { useState } from "react";
import "./MenuBar.css";

function MenuBar() {
  const [selectedItem, setSelectedItem] = useState("Inicio");

  const handleSelect = (item) => {
    if (item !== "ES") {
      setSelectedItem(item);
    }
  };

  return (
    <div className="menu">
      <p
        className={`nav-item ${selectedItem === "Inicio" ? "selected" : ""}`}
        onClick={() => handleSelect("Inicio")}
      >
        Inicio
      </p>
      <p
        className={`nav-item ${selectedItem === "Proyectos" ? "selected" : ""}`}
        onClick={() => handleSelect("Proyectos")}
      >
        Proyectos
      </p>
      <p
        className={`nav-item ${selectedItem === "Nosotros" ? "selected" : ""}`}
        onClick={() => handleSelect("Nosotros")}
      >
        Nosotros
      </p>
      <p className="nav-item selected">ES</p>
    </div>
  );
}

export default MenuBar;
