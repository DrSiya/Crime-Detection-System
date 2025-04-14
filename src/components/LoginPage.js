import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if both fields are filled
    if (username === '' || password === '') {
      setError('Both fields are required.');
      return;
    }

    // Get the registered users from localStorage
    const registeredUsers = JSON.parse(localStorage.getItem('users')) || [];
    console.log("Registered Users Retrieved from LocalStorage: ", registeredUsers); // Log to see retrieved users

    // Clean up input data (remove any accidental spaces)
    const cleanedUsername = username.trim();
    const cleanedPassword = password.trim();

    // Find the user that matches both username and password
    const user = registeredUsers.find(
      (user) => user.username === cleanedUsername && user.password === cleanedPassword
    );

    console.log("Found User: ", user); // Log the user if found

    if (user) {
      // If user found, navigate to the alerts page
      navigate('/alerts');
    } else {
      // If no match found, show error
      setError('Invalid credentials. Please check your username and password.');
    }
  };

  const handleRegister = () => {
    navigate('/register'); // Navigate to the register page
  };

  return (
    <div className="login-page">
      <div className="image-container"></div>
      <br />
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
        <button onClick={handleRegister} style={{ marginTop: '10px' }}>
          Register
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
