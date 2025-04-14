// components/Register.js
import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !surname || !id || !email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, surname, id, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Something went wrong.');
        return;
      }

      // Reset form
      setName('');
      setSurname('');
      setId('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setError('');

      navigate('/login');
    } catch (err) {
      setError('Failed to register. Please try again.');
      console.error('Registration error:', err);
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h2>Admin - Add User</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter user's name"
              required
            />
          </div>

          <div>
            <label>Surname</label>
            <input
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder="Enter user's surname"
              required
            />
          </div>

          <div>
            <label>ID</label>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Enter user ID"
              required
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter user's email"
              required
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>

          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
              required
            />
          </div>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <button type="submit">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
