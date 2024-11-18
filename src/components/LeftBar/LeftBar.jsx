import {
  SearchOutlined,
  FileDoneOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import {  useNavigate } from "react-router-dom";
import "./LeftBar.css";

function LeftBar({ onClose, isProyectOpen, setIsProyectOpen }) {
  const navigate = useNavigate(); // Hook para redirigir programáticamente

  const handleCameBack = () => {
    if (isProyectOpen) {
      setIsProyectOpen(false);
    } else {
      navigate("/"); 
    }
  };

 const filter =()=>{
  setIsProyectOpen(false);
  onClose()
 }

  return (
    <div className="container_leftBar">
      <ArrowLeftOutlined
        className="icon_leftBar"
        onClick={handleCameBack} 
      />
      <SearchOutlined className="icon_leftBar" onClick={filter} />
    </div>
  );
}

export default LeftBar;
