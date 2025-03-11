import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
  console.log('LoginPage component is rendering'); // Debug log

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === '' || password === '') {
      setError('Both fields are required.');
      return;
    }
    if (username === 'admin' && password === 'password') {
      alert('Login successful!');
    } else {
      setError('Invalid credentials.');
    }
  };

  return (
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
            placeholder="Enter your username"
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
    </div>
  );
};

export default LoginPage;
