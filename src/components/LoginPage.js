import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  console.log('LoginPage component is rendering'); // Debug log

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();  // useNavigate hook to programmatically navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === '' || password === '') {
      setError('Both fields are required.');
      return;
    }
    if (username === 'admin' && password === 'P@ssw0rd') {
      navigate('/alerts');
    } else {
      setError('Invalid credentials.');
    }
  };

  const handleRegister = () => {
    navigate('/register'); // Navigate to the register page
  };

  return (
    <div className="login-page">
      <div className="image-container"></div>
      <br></br>
      <div className="login-container">
        <h2>Login to SmartGuard</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Please enter your username"
              required
            />
          </div>
         
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Please enter your password"
              required
            />
          </div>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <button type="submit">Login</button>
        </form>
        <button onClick={handleRegister} style={{ marginTop: '10px' }}>Register</button>
      </div>
    </div>
  );
};

export default LoginPage;