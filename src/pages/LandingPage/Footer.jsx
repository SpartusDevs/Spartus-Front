import { FacebookOutlined, TwitterOutlined, LinkedinOutlined } from "@ant-design/icons";
import "./styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <p>Email: contacto@tupagina.com</p>
          <p>Teléfono: +123 456 789</p>
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
