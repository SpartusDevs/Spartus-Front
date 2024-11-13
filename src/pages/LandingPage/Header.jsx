import { useState, useEffect } from 'react';
import logo from '../../assets/logo/2-removebg-preview.png';
import logo2 from '../../assets/logo/1-removebg-preview.png';
import logo2Developer from '../../assets/logo/developer-removebg-preview.png';

import molde from '../../assets/Captura de pantalla 2024-11-11 111755.png';
import { Button } from "antd";
import ProyectsPreview from '../../components/ProyectsPreview/ProyectsPreview';
import Body from './Body';
import MenuBar from '../../components/MenuBar/MenuBar';

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
      <main>
        <div className='flex-box box-1'>
          <img src={updateImageLogo} className='img'/>
          <img src={logo2Developer} className='absoluteImg'/>
          <p style={{ opacity: flag ? 1 : 0.3 }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore autem aliquam accusamus!</p>
          <p   style={{ opacity: flag ? 1 : 0.3 }}>Lorem, ipsum.</p>
       <Button color="danger" variant="solid" className='cvButton'         style={{ opacity: flag ? 1 : 0 }}
          > Descubre más</Button>
        </div>
        <div className='flex-box box-2'>
   
        </div>
      </main>
    </>
  );
}

export default Header;
