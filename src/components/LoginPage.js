import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState(''); // Can be user ID or email
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Both fields are required.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Login failed.');
        return;
      }

      // Login successful, navigate to alerts
      navigate('/alerts');
    } catch (err) {
      console.error('Login error:', err);
      setError('Failed to connect to server.');
    }
  };

  const handleRegister = () => {
    navigate('/admin'); // Navigate to admin register page
  };

  return (
    <div className="login-page">
      <div className="image-container"></div>
      <div className="login-container">
        <h2>Login to SmartGuard</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username (ID or Email)</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your ID or Email"
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
              placeholder="Enter your password"
              required
            />
          </div>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <button type="submit">Login</button>
        </form>

        <button onClick={handleRegister} style={{ marginTop: '10px' }}>
          Admin
        </button>
      </div>
    </div>
  );
};

export default LoginPage;