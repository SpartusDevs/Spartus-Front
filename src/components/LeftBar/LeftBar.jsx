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
        <Link to="/">
          <ArrowLeftOutlined className="icon_leftBar" />
        </Link>
        <SearchOutlined className="icon_leftBar" onClick={onClose} />
        <FileDoneOutlined className="icon_leftBar" />
    </div>
  );
}

export default LeftBar;
