import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import AOS from 'aos';
import LandingPage from './pages/LandingPage/index';
import AboutPage from './pages/AboutPage/index';
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
    element: <AboutPage />,
  }
]);

return (
  <RouterProvider router={router} /> 
);
}

export default App;
