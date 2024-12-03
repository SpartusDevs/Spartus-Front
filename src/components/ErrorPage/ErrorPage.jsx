import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import spartusGraylogo from "../../assets/logo/2-removebg-preview.webp";
import "./ErrorPage.css";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/');
  };

  return (
    <div className="error-wrapper">
      <div className="error-container">
        <img src={spartusGraylogo} alt="Logo" className="error-logo" />
        <h1>¡Ups! Algo salió mal...</h1>
        <p>Lo sentimos, no pudimos encontrar la página que buscas.</p>
        <Button
          type="primary"
          onClick={handleRedirect}
          className="error-button"
        >
          Volver al inicio
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;

