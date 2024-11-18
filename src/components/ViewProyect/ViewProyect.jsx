import "./ViewProyect.css";
import {Button } from 'antd';
import androidIcon from '../../assets/tecnologiesIcons/android.svg';
import awsIcon from '../../assets/tecnologiesIcons/aws.svg';
import expoIcon from '../../assets/tecnologiesIcons/expo.svg';
import javaIcon from '../../assets/tecnologiesIcons/java.svg';
import nodeIcon from '../../assets/tecnologiesIcons/node.svg';
import reactIcon from '../../assets/tecnologiesIcons/react.svg';
import springIcon from '../../assets/tecnologiesIcons/spring.svg';
import vueIcon from '../../assets/tecnologiesIcons/vue.svg';

function ViewProyect({proyect}) {
  return (
    <div className="container_viewProyect" data-aos="flip-left"  data-aos-duration="1500">
      <div className="header_viewProyect">
        <div className="description_viewProyect">
          <h1 className="h1_viewProyect">Nombre del Proyecto</h1>
          <p className="p_viewProyect">Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam unde, optio asperiores odio rem laborum ab! Corporis illum provident incidunt. sit amet consectetur adipisicing elit. Officia, blanditiis.</p>
          <p className="p_viewProyect">Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam unde, optio asperiores odio rem laborum ab! Corporis illum provident incidunt. sit amet consectetur adipisicing elit. Officia, blanditiis.</p>
        </div>
            <img className="image_viewProyect"  src="https://www.4webs.es/blog/wp-content/uploads/2019/02/urls-que-es.jpg" />
      </div>
      <div>
      <h2 className="h2_viewProyect">Arquitectura</h2>
      <Button color="primary" variant="outlined" className="button_viewProyect"  ghost>
            Monolitica
          </Button>
      <p className="p_viewProyect">Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam unde, optio asperiores odio rem laborum ab! Corporis illum provident incidunt. sit amet consectetur adipisicing elit. Officia, blanditiis.</p>
      </div>
      <div >
      <h2 className="h2_viewProyect">Tecnologías</h2>
      <img src={androidIcon} className="icon_viewProyect" style={{marginLeft:'25px'}}/>
      <img src={awsIcon} className="icon_viewProyect"/>
      <img src={springIcon} className="icon_viewProyect"/>
      </div>
    </div>
  );
}

export default ViewProyect;
