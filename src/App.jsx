import { useState, useEffect } from 'react'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import AOS from 'aos';
import LandingPage from './pages/LandingPage/index';
import ProyectsPage from './pages/AboutPage/index';
import Dashboard from './pages/DashBoard/Dashboard';
import Loading from './components/Loading/Loading';
import 'aos/dist/aos.css'; 
import './App.css';
function App() {
  AOS.init();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 2000);
  }, []);

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
    <div>
      {loading ? <Loading /> : <RouterProvider router={router} />} 
    </div>
  );
}

export default App;
