import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import { useLanguage } from "../../contexts/LanguageContext"; 

function LandingPage() {
  const { language, toggleLanguage  } = useLanguage(); 

  return (
    <div>
        <Header language={language} toggleLanguage={toggleLanguage} />
        <Body language={language}/>
        <Footer language={language}/>
     </div>
  )
}

export default LandingPage