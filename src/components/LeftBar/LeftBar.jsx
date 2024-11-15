import {
  SearchOutlined,
  FileDoneOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons"; 
import { Link } from "react-router-dom";
import "./LeftBar.css";
function LeftBar({ onClose }) {
  /* */
  return (
    <div className="container_leftBar" >
      <div className="button_leftBar">
        <Link to="/">
          <ArrowLeftOutlined className="icon_leftBar" />
        </Link>
      </div>
      <div className="glass-button_openFilter">
        <SearchOutlined className="icon_leftBar" onClick={onClose} />
      </div>
      <div className="glass-button_openFilter">
        <FileDoneOutlined className="icon_leftBar" />
      </div>
    </div>
  );
}

export default LeftBar;
