import logoSpartusGray from "../../assets/logo/smalLogo2 (2).png";
import loadingText from "../../assets/loagingText.png"
import "./Loading.css"; 

function Loading() {
  return (
    <div className="loading-container">
      <div className="spinner-container">
        <img src={logoSpartusGray} alt="Loading Logo" className="logo" />
        <img src={loadingText} alt="Loading text" className="logoText" />
      </div>
    </div>
  );
}

export default Loading;
