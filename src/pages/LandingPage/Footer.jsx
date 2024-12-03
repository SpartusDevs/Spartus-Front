import { FacebookOutlined, TwitterOutlined, LinkedinOutlined } from "@ant-design/icons";
import translations from "./translations/Footer.json";
import "./styles/Footer.css";
function Footer({ language }) {
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