import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from "../../contexts/LanguageContext"; 
import { Checkbox, Button, Form, Input } from 'antd';

import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const { language, toggleLanguage } = useLanguage(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', { email, password, rememberMe });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log('Register submitted:', { email, password });
  };

  const handleNavigateToMain = () => {
    navigate("/");
  };

 const handleChangeLanguaje = ()=>{
  toggleLanguage(language === 'es' ? 'en' : 'es')
 } 

  return (
    <div className="login-wrapper">
      <div className="login-container">   <Button className="language-toggle" onClick={handleChangeLanguaje} ghost>
        {language === 'es' ? 'ES' : 'EN'}
      </Button>
        <div className="avatar" onClick={handleNavigateToMain}></div>
        <Form onFinish={isRegistering ? handleRegisterSubmit : handleLoginSubmit}>
          <div className="input-group">
            <div className="label">
              {language === 'es' ? 'Correo Electrónico' : 'Email'}
            </div>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <div className="label">
              {language === 'es' ? 'Contraseña' : 'Password'}
            </div>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {!isRegistering && (
            <div className="remember-me">
              <Checkbox
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="Checkbox"
              >
                {language === 'es' ? 'Recuérdame' : 'Remember me'}
              </Checkbox>
            </div>
          )}
          <div className="forgot-password">
            <a href="#">
              {language === 'es' ? '¿Olvidaste tu contraseña?' : 'Forgot Password?'}
            </a>
          </div>
          <Button htmlType="submit" className="login-button">
            {isRegistering
              ? language === 'es' ? 'Registrar' : 'Register'
              : language === 'es' ? 'Iniciar Sesión' : 'Login'}
          </Button>
        </Form>
        <div className="register-link">
          {!isRegistering ? (
            <p>
              {language === 'es' ? '¿No tienes una cuenta?' : "Don't have an account?"}{' '}
              <a onClick={() => setIsRegistering(true)}>
                {language === 'es' ? 'Regístrate aquí' : 'Register here'}
              </a>
            </p>
          ) : (
            <p>
              {language === 'es' ? '¿Ya tienes una cuenta?' : 'Already have an account?'}{' '}
              <a onClick={() => setIsRegistering(false)}>
                {language === 'es' ? 'Inicia sesión aquí' : 'Login here'}
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
