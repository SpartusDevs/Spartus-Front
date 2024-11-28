import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MenuBar.css";

function MenuBar() {
  const [selectedItem, setSelectedItem] = useState("Inicio");
  const navigate = useNavigate();

  const handleScroll = () => {
    const isAtBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 5;
    if (isAtBottom && selectedItem !== "Nosotros") {
      setSelectedItem("Nosotros");
    } else if (!isAtBottom && selectedItem === "Nosotros") {
      setSelectedItem("Inicio");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [selectedItem]);

  const handleSelect = (item) => {
    if (item !== "ES") {
      setSelectedItem(item);
      if (item === "Inicio") {
        navigate("/");
      } else if (item === "Proyectos") {
        navigate("/about");
      } else if (item === "Nosotros") {
        // Desplazarse al final de la página
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      }
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
