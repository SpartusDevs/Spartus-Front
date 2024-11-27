import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import AOS from 'aos';
import LandingPage from './pages/LandingPage/index';
import ProyectsPage from './pages/AboutPage/index';
import Dashboard from './pages/DashBoard/Dashboard'
import 'aos/dist/aos.css'; 


function App() {
AOS.init();
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/about",
    element: <ProyectsPage />,
  },
  { 
    path:"/dashboard",
    element: <Dashboard/>
  }
]);

return (
  <RouterProvider router={router} /> 
);
}

export default App;
