import './OpenFilterGlassButton.css';
import { SearchOutlined, FileDoneOutlined, ArrowLeftOutlined } from '@ant-design/icons'; // Importar el ícono de búsqueda

function OpenFilterGlassButton({ onClose}) {
/* */
    return (
        <div style={{position:'absolute'}}>
               <div className="glass-button_openFilter" >
            <ArrowLeftOutlined className='icon_openFilter' /></div>
    <div className="glass-button_openFilter" >
    <SearchOutlined className='icon_openFilter' onClick={onClose}/>
   
    </div>
     <div className="glass-button_openFilter" >
     <FileDoneOutlined className='icon_openFilter'/>
     </div>
    </div>
  );
}

export default OpenFilterGlassButton;
