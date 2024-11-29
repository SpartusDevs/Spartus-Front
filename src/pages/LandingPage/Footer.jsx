import { FacebookOutlined, TwitterOutlined, LinkedinOutlined } from "@ant-design/icons";
import "./styles/Footer.css";

function Footer({ language }) {

  // Traducciones
  const translations = {
    es: {
      email: "Email: contacto@tupagina.com",
      phone: "Teléfono: +123 456 789",
    },
    en: {
      email: "Email: contact@yourpage.com",
      phone: "Phone: +123 456 789",
    },
  };

  const t = translations[language]; 
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <p>{t.email}</p>
          <p>{t.phone}</p>
        </div>
        <div className="footer-section">
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookOutlined className="icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <TwitterOutlined className="icon" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedinOutlined className="icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
