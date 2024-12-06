import React, { useState } from 'react';
import { Button } from 'antd';
import { LineChartOutlined, InboxOutlined, PushpinOutlined,InstagramOutlined, FacebookOutlined, WhatsAppOutlined, MailOutlined  } from '@ant-design/icons' // Importamos el componente Button de Ant Design
import './Dash.css'; // Importar el archivo de estilos

function Dash() {
  // Estado para gestionar la red social seleccionada
  const [selectedNetwork, setSelectedNetwork] = useState('Instagram'); 

  // Función para cambiar la red social seleccionada
  const handleNetworkSelect = (network) => {
    setSelectedNetwork(network);
  };

  const iconSelectedNetwork = ()=> {
   if(selectedNetwork === 'Instagram' ) {
    return <InstagramOutlined /> } 
    else if( selectedNetwork === 'Facebook') {
      return <FacebookOutlined />
    } else if( selectedNetwork === 'WhatsApp'){
      return <WhatsAppOutlined />
    } else if(selectedNetwork === 'Gmail') {
      return <MailOutlined />;
    }
}

  return (
    <div className="dash-container">
      {/* Barra lateral (Sidebar) */}
      <div className="dash-sidebar">
        <h3 className="dash-sidebar-title">Redes Sociales</h3>
        <ul className="dash-sidebar-list">
          <li className="dash-sidebar-item" onClick={() => handleNetworkSelect('Instagram')}>Instagram </li>
          <li className="dash-sidebar-item" onClick={() => handleNetworkSelect('Facebook')}>Facebook</li>
          <li className="dash-sidebar-item" onClick={() => handleNetworkSelect('Gmail')}>Gmail</li>
          <li className="dash-sidebar-item" onClick={() => handleNetworkSelect('WhatsApp')}>WhatsApp</li>
        </ul>
      </div>

      {/* Área principal */}
      <div className="dash-main-content">
        {/* Header: Título y opciones según la red social seleccionada */}
        <div className="dash-header">
          <h1 className="dash-header-title">{selectedNetwork} {iconSelectedNetwork()}</h1>
          <div className="dash-tabs">
            <Button type="primary" className="dash-tab-button">Analítica<LineChartOutlined /></Button> {/* Usamos los botones de Ant Design */}
            <Button type="primary" className="dash-tab-button">Inbox <InboxOutlined /></Button>
            <Button type="primary" className="dash-tab-button">Planificación <PushpinOutlined/></Button>
          </div>
        </div>

        {/* Contenido dinámico según la red social seleccionada */}
        <div className="dash-content">
          {selectedNetwork === 'Instagram' && <div className="dash-instagram-content">Contenido de Instagram </div>}
          {selectedNetwork === 'Facebook' && <div className="dash-facebook-content">Contenido de Facebook</div>}
          {selectedNetwork === 'Gmail' && <div className="dash-gmail-content">Contenido de Gmail</div>}
          {selectedNetwork === 'WhatsApp' && <div className="dash-whatsapp-content">Contenido de WhatsApp</div>}
        </div>
      </div>
    </div>
  );
}

export default Dash;
