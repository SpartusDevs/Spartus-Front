import { Button } from 'antd';
import { FaLinkedin } from "react-icons/fa6";

import './GradientButton.css'; 

const GradientButton = ({ index }) => { 
  const handleClick = () => {
    if (index === 0) {
      window.open('https://www.linkedin.com/in/laspiurperezjuan/', '_blank');
    } else {
      window.open('https://www.linkedin.com', '_blank');
    }
  };

  return (
      <Button type="primary" size="large" className="gradient-btn" onClick={handleClick}>
        Linkedin <FaLinkedin />
      </Button>
  );
}

export default GradientButton;
