import {
  SearchOutlined,
  FileDoneOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons"; 
import { Link } from "react-router-dom";
import "./OpenFilterGlassButton.css";
function OpenFilterGlassButton({ onClose }) {
  /* */
  return (
    <div className="container_openFilter" >
      <div className="glass-button_openFilter">
        <Link to="/">
          {" "}
          <ArrowLeftOutlined className="icon_openFilter" />
        </Link>
      </div>
      <div className="glass-button_openFilter">
        <SearchOutlined className="icon_openFilter" onClick={onClose} />
      </div>
      <div className="glass-button_openFilter">
        <FileDoneOutlined className="icon_openFilter" />
      </div>
    </div>
  );
}

export default OpenFilterGlassButton;
