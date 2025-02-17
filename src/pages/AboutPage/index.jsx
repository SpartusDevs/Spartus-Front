import { useEffect } from "react";
import { useLanguage } from "../../contexts/LanguageContext"; 
import Body from './Body';

function ProyectsPage() {
  const { language } = useLanguage(); 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  return (
    <div style={{ color: 'white', width: '100%' }}>
      <Body  language={language}/>
    </div>
  );
}

export default ProyectsPage;
