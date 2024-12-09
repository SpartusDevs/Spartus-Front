import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Menu, Dropdown } from "antd";
import {
  UserOutlined,
  BellOutlined,
  SettingOutlined,
  HomeOutlined,
  AppstoreAddOutlined,
  FileAddOutlined,
  DollarOutlined,
  UsergroupAddOutlined,
  GithubOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { useAuth } from "../../contexts/AuthContext.jsx";
import companyImg from "../../assets/logo/smalLogo.webp";
import {
  Clients,
  Dash,
  DesingModels,
  Finances,
  GitHubGestion,
  Projects,
  Settings,
  Team,
  ToWork,
  Profile,
} from "../../components/DashboardSelectedPage";
import { fetchGitHubRepos } from "../../services/githubApi.js";
import "./Dashboard.css";
import { getUserByToken } from "../../services/User.js";

function Dashboard() {
  const [selectedComponent, setSelectedComponent] = useState("dashboard");
  const [repos, setRepos] = useState([]);
  const { user, logout, setterUser } = useAuth();
  const navigate = useNavigate();

  const isLogged = async () => {
    if (!user) {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
      } else {
        try {
          const result = await getUserByToken(token);
          setterUser(result.data);
        } catch  {
          navigate("/login");
        }
      }
    }
  };

  const handleMenuClick = (e) => {
    setSelectedComponent(e.key);
  };
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  useEffect(() => {
    isLogged();
  }, []);

  useEffect(() => {
    const loadRepos = async () => {
      const fetchedRepos = await fetchGitHubRepos();
      setRepos(fetchedRepos);
    };
    loadRepos();
  }, []);

  return (
    <div className="container-dashboard">
      <Header
        setSelectedComponent={setSelectedComponent}
        user={user}
        logout={handleLogout}
      />
      <Sidebar onMenuClick={handleMenuClick} />
      <Body selectedComponent={selectedComponent} repos={repos} />
    </div>
  );
}

export default Dashboard;

const Header = ({ setSelectedComponent, user, logout }) => {
  const handleProfileClick = () => {
    setSelectedComponent("profile");
  };
  const menu = (
    <Menu onClick={(e) => handleMenuAction(e.key)}>
      <Menu.Item key="logout">
        {" "}
        <p className="menu_item" onClick={logout}>
          Salir
          <PoweroffOutlined className="manu_item-icon" />
        </p>
      </Menu.Item>
    </Menu>
  );
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
          <UserOutlined className="header-icon" onClick={handleProfileClick} />
          <BellOutlined className="header-icon" />
          <SettingOutlined className="header-icon nut_tool" />
          <Dropdown overlay={menu} trigger={["click"]}>
            <img
              src={user?.profileImg || "https://via.placeholder.com/150"}
              alt="User"
              className="user-avatar"
            />
          </Dropdown>
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
        onClick={onMenuClick}
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
        <Menu.Item key="clients" icon={<UsergroupAddOutlined />}>
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
        return <GitHubGestion repos={repos} />;
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
      case "profile":
        return <Profile />;
      default:
        return <Dash />;
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "92vh",
        paddingLeft: "281px",
        color: "white",
      }}
    >
      {renderComponent()}
    </div>
  );
};
