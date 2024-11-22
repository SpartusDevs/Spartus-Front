import { useState, useEffect } from 'react';
import logo from '../../assets/logo/2-removebg-preview.png';
import logo2 from '../../assets/logo/1-removebg-preview.png';
import logo2Developer from '../../assets/logo/developer-removebg-preview.png';
import { Link } from 'react-router-dom';
import molde from '../../assets/Captura de pantalla 2024-11-11 111755.png';
import { Button } from "antd";
import ProyectsPreview from '../../components/ProyectsPreview/ProyectsPreview';
import Body from './Body';
import MenuBar from '../../components/MenuBar/MenuBar';
import ImageCarousel from '../../components/ImageCarousel';
import './styles/Header.css'
import ProyectsSlider from '../../components/ProyectsSlider/ProyectsSlider';

function Header() {
  const [updateImageLogo, setUpdateImageLogo] = useState(logo);
  const [flag, setFlag] = useState(false)

  useEffect(() => {
    // Change the logo after 4 seconds
    const timer = setTimeout(() => {
      setUpdateImageLogo(logo2);
      setFlag(true)
    }, 2000);

    // Clear the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <header className='header'>
       <MenuBar/>
      </header>
      <main className='container'> 
        <div className='box box-1'>
          <img src={updateImageLogo} className='img' />
        {/*  <img src={logo2Developer} className='absoluteImg'/> */}
      
          <div className='small-box'> 
              
   <p style={{ opacity: flag ? 1 : 0.3 }} className='buttonText_landing'>Accede a todos nuestros proeyctos</p>
         <Button color="danger" variant="solid" className='box-1-button'   style={{ opacity: flag ? 1 : 0 }}
          >  <Link to="/about">Nuestros Pryectos</Link></Button>
     
            
      </div>

        </div>
         <div className='box box-2' data-aos="fade-left"  data-aos-duration="3000">    
          < ProyectsSlider />  
         
{  /*   <h1 className="lastProyects" >Ultimos proyectos:</h1> <ImageCarousel number={1}  />
        <ImageCarousel />
        <ImageCarousel />  */ }
        </div>

      </main>
    </>
  );
}

export default Header;
