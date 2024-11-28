import { FcCollapse } from "react-icons/fc";
import './ButtonScrollToTop.css';

function ButtonScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="glass-button" onClick={scrollToTop} data-aos="fade-up"
    data-aos-anchor-placement="center-center" >
      <FcCollapse size={25} /> 
    </div>
  );
}

export default ButtonScrollToTop;
