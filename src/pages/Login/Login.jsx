import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from "../../contexts/LanguageContext"; 
import { useAuth } from '../../contexts/AuthContext';
import { Checkbox, Button, Form, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { loginUser } from '../../services/Auth'; // Importación de loginUser

import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const { language, toggleLanguage } = useLanguage(); 
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  const [error, setError] = useState(''); // Para manejar errores

  const handleLoginSubmit = async (e) => {
    try {
      const response = await loginUser({ email, password });
      if (response.token) {
        login(response);
        navigate("/dashboard");
      } else {
        setError(response.message || 'Login failed');
      }
      
    } catch (error) {
      console.error("Login error:", error);
      setError('An error occurred. Please try again.');
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log('Register submitted:', { firstName, lastName, email, password });
  };

  const handleNavigateToMain = () => {
    navigate("/");
  };

  const handleChangeLanguage = () => {
    toggleLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <Button className="language-toggle" onClick={handleChangeLanguage} ghost>
          {language === 'es' ? 'ES' : 'EN'}
        </Button>
        <div className="avatar" onClick={handleNavigateToMain}></div>
        <Form onFinish={isRegistering ? handleRegisterSubmit : handleLoginSubmit}>
          {isRegistering && (
            <>
              <div className="input-group">
                <div className="label">
                  {language === 'es' ? 'Nombre' : 'First Name'}
                </div>
                <Input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <div className="label">
                  {language === 'es' ? 'Apellido' : 'Last Name'}
                </div>
                <Input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </>
          )}
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
            <Input.Password
              className='input_password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              iconRender={(visible) => 
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              visibilityToggle
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
        {error && <div className="error-message">{error}</div>} {/* Muestra el error */}
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
