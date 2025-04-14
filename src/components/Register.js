import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Get existing users from localStorage (if any)
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    console.log("Existing Users: ", existingUsers); // Log to see existing users

    // Check if username already exists
    if (existingUsers.some(user => user.username === username)) {
      setError('Username already taken, please choose another.');
      return;
    }

    // Create new user data
    const userData = {
      username,
      email,
      password,
    };

    // Save new user to localStorage
    existingUsers.push(userData);
    localStorage.setItem('users', JSON.stringify(existingUsers));

    // Log to confirm if new user is saved
    console.log("Updated Users in LocalStorage: ", JSON.parse(localStorage.getItem('users')));

    // Clear form data
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
    alert('✅ Registered successfully!');
    navigate('/login'); // Redirect to login after successful registration
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h2>Register for SmartGuard</h2>
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
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
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
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </div>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <button type="submit">Register</button>
        </form>

        <p>
          Already have an account?{' '}
          <button onClick={() => navigate('/login')} style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}>
            Login here
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
