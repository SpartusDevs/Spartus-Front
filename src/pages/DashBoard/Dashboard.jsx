import  { useState, useEffect } from "react";
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
import companyImg from "../../assets/logo/smalLogo.webp";
import userImg from "../../assets/developers/yo.jpg";
import CompleteRegistrationModal from "../../components/CompleteRegistrationModal/CompleteRegistrationModal";
import { Clients, Dash, DesingModels, Finances, GitHubGestion, Projects, Settings, Team, ToWork } from "../../components/DashboardSelectedPage";
import {fetchGitHubRepos} from "../../services/githubApi.js"
import "./Dashboard.css";

function Dashboard() {
  const [selectedComponent, setSelectedComponent] = useState("dashboard");
  const [repos, setRepos] = useState([]);

  const handleMenuClick = (e) => {
    setSelectedComponent(e.key);
  };
  useEffect(() => {
    const loadRepos = async () => {
        const fetchedRepos = await fetchGitHubRepos();  
        setRepos(fetchedRepos);
       
    };
    loadRepos(); 
  }, []); 

  return (
    <div className="container-dashboard">
      <Header />
      <Sidebar onMenuClick={handleMenuClick} />
      <Body selectedComponent={selectedComponent} repos={repos} />
    </div>
  );
}

export default Dashboard;

const Header = () => {
  return (
    <div className="header-dashboard">
      <div className="company-dashboard">
        <img src={companyImg} alt="Company Logo" />
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

const Sidebar = ({ onMenuClick }) => {
  return (
    <div className="sidebar">
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        className="sidebar-menu"
        onClick={onMenuClick} // Establece el manejador de clic
      >
        <Menu.Item key="dashboard" icon={<HomeOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="projects" icon={<AppstoreAddOutlined />}>
          Projects
        </Menu.Item>
        <Menu.Item key="github" icon={<GithubOutlined />}>
          Git Hub Gestion
        </Menu.Item>
        <Menu.Item key="team" icon={<UserOutlined />}>
          Team
        </Menu.Item>
        <Menu.Item key="toWork" icon={<FileAddOutlined />}>
          To Work
        </Menu.Item>
        <Menu.Item key="clients" icon={<UsergroupAddOutlined />} >
          Clients
        </Menu.Item>
        <Menu.Item key="finances" icon={<DollarOutlined />}>
          Finances
        </Menu.Item>
        <Menu.Item key="designModels" icon={<HiOutlinePaintBrush />}>
          Design Models
        </Menu.Item>
        <Menu.Item key="settings" icon={<SettingOutlined />}>
          Settings
        </Menu.Item>
      </Menu>
    </div>
  );
};

const Body = ({ selectedComponent, repos }) => {
  const renderComponent = () => {
    switch (selectedComponent) {
      case "dashboard":
        return <Dash />;
      case "projects":
        return <Projects />;
      case "github":
        return <GitHubGestion repos={repos}/>;
      case "team":
        return <Team />;
      case "toWork":
        return <ToWork />;
      case "clients":
        return <Clients />;
      case "finances":
        return <Finances />;
      case "designModels":
        return <DesingModels />;
      case "settings":
        return <Settings />;
      default:
        return <Dash />; // Por defecto, muestra el componente Dashboard
    }
  };

  return (
    <div style={{ width: "100%", height: "92vh", paddingLeft: "281px", color:'white' }}>
      {renderComponent()}
    </div>
  );
};
