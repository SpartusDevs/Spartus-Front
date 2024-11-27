import React from "react";
import { Input, Menu } from "antd";
import {
    UserOutlined,
    BellOutlined,
    SettingOutlined,
    HomeOutlined,
    AppstoreAddOutlined,
    FileAddOutlined, // Icono para 'To Work'
    DollarOutlined,  
    UsergroupAddOutlined,
    GithubOutlined 
  } from "@ant-design/icons";
  import { HiOutlinePaintBrush } from "react-icons/hi2";

import companyImg from "../../assets/logo/smalLogo.png";
import userImg from "../../assets/developers/yo.jpg";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="container-dashboard">
      <Header />
      <Sidebar/>
    </div>
  );
}

export default Dashboard;

const Header = () => {
  return (
    <div className="header-dashboard">
      <div className="company-dashboard">
        <img src={companyImg} alt="Company Logo"  />
        <h2>SPARTUS Gestion</h2>
      </div>

      <div className="inputs-buttons-dashboard">
        <Input
          placeholder="Search"
          prefix={<UserOutlined />}
          className="search-input"
        />
        <div className="icons-container">
          <UserOutlined className="header-icon" />
          <BellOutlined className="header-icon" />
          <SettingOutlined className="header-icon" />
          <img src={userImg} alt="User" className="user-avatar" />
        </div>
      </div>
    </div>
  );
};


const Sidebar = () => {
    return (
      <div className="sidebar">
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          className="sidebar-menu"
        >
          {/* Agregar Sección de Finanzas */}
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<AppstoreAddOutlined />}>
            Projects
          </Menu.Item>
          <Menu.Item key="3" icon={<GithubOutlined />}>
            Git Hub Gestion
          </Menu.Item>

          <Menu.Item key="4" icon={<UserOutlined />}>
            Team
          </Menu.Item>
          
          {/* Proyecto por hacer */}
          <Menu.Item key="5" icon={<FileAddOutlined />}>
            To Work
          </Menu.Item>
  
           <Menu.Item key="6" icon={<UsergroupAddOutlined  />}>
           Clients
          </Menu.Item>
          <Menu.Item key="7" icon={<DollarOutlined />}>
            Finances
          </Menu.Item>
          <Menu.Item key="8" icon={<HiOutlinePaintBrush />}>
            Desing Models
          </Menu.Item>
          <Menu.Item key="9" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
      
        </Menu>
      </div>
    );
  };