import {
  SearchOutlined,
  FileDoneOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import {  useNavigate } from "react-router-dom";
import "./LeftBar.css";

function LeftBar({ isProyectOpen, setIsProyectOpen }) {
  const navigate = useNavigate(); 

  const handleCameBack = () => {
    if (isProyectOpen) {
      setIsProyectOpen(false);
    } else {
      navigate("/"); 
    }
  };


  return (
    <div className="container_leftBar">
      <ArrowLeftOutlined
        className="icon_leftBar"
        onClick={handleCameBack} 
      />
    {/*  <SearchOutlined className="icon_leftBar" onClick={filter} /> */}
    </div>
  );
}

export default LeftBar;
