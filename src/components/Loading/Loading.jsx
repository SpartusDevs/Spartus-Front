import logoSpartusGray from "../../assets/logo/smalLogo2 (2).png"; // Importa la imagen
import "./Loading.css"; 

function Loading() {
  return (
    <div className="loading-container">
      <div className="spinner-container">
        <div className="spinner"></div>
        <img src={logoSpartusGray} alt="Loading Logo" className="logo" />
      </div>
    </div>
  );
}

export default Loading;
