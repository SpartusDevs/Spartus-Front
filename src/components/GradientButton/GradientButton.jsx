import { Button, ConfigProvider, Space } from 'antd';
import { FaLinkedin } from "react-icons/fa6";

import './GradientButton.css'; // Define los estilos CSS

const GradientButton = () => (
  <ConfigProvider>
    <Space>
      <Button type="primary" size="large" className="gradient-btn">
        Linkedin <FaLinkedin/>
      </Button>
    </Space>
  </ConfigProvider>
);

export default GradientButton;
