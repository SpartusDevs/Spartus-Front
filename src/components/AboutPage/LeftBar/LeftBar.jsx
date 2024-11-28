import {  useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
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
    </div>
  );
}

export default LeftBar;
