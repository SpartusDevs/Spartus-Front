import { useState } from 'react';
import { Checkbox, Button, Form, Input } from 'antd';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false); // Estado para alternar entre login y registro

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', { email, password, rememberMe });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log('Register submitted:', { email, password });
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="avatar"></div>
        <Form onFinish={isRegistering ? handleRegisterSubmit : handleLoginSubmit}>
          <div className="input-group">
            <label>Email ID</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
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
                Remember me
              </Checkbox>
            </div>
          )}
          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>
          <Button htmlType="submit" className="login-button">
            {isRegistering ? 'Register' : 'Login'}
          </Button>
        </Form>
        <div className="register-link">
          {!isRegistering ? (
            <p>
              Don't have an account?{' '}
              <a onClick={() => setIsRegistering(true)}>Register here</a>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <a onClick={() => setIsRegistering(false)}>Login here</a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;

