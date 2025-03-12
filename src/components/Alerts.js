// import React from 'react';
// import { Link } from 'react-router-dom';
import './Alerts.css';
import React, { useState } from 'react';


const alertsData = [
  { id: 1, type: 'Gun shot', status: 'Closed', color: 'green' },
  { id: 2, type: 'Abnormal noise', status: 'Open', color: 'red' },
  { id: 3, type: 'Theft', status: 'Open', color: 'red' }
];


const Alerts = () => {

  // const goToPage = (page) => {
  //   window.location.href = page;
  // };
  const [activePage, setActivePage] = useState('alerts'); // Default to 'alerts'

  // Function to handle navigation
  const goToPage = (page) => {
    setActivePage(page); // Set the active page when clicked
    window.location.href = `/${page}`; // Navigate to the page
  };

  return (
    <div className="alerts-container">
      <nav className="nav-bar">
        {/* <button onClick={() => goToPage('/dashboard')}>HOME</button>
        <button onClick={() => goToPage('/live-monitoring')}>LIVE MONITORING</button>
        <button onClick={() => goToPage('/alerts')} className="active">ALERTS</button>
        <button onClick={() => goToPage('/reports')}>REPORTS</button>
        <button className="logout-btn">Logout</button>
        <div className="user-icon">
          <i className="fas fa-user"></i>
        </div> */}
      <button
          onClick={() => goToPage('dashboard')}
          style={{ fontWeight: activePage === 'dashboard' ? 'bold' : 'normal' }}
        >
          HOME
        </button>
        <button
          onClick={() => goToPage('live-monitoring')}
          style={{ fontWeight: activePage === 'live-monitoring' ? 'bold' : 'normal' }}
        >
          LIVE MONITORING
        </button>
        <button
          onClick={() => goToPage('alerts')}
          style={{ fontWeight: activePage === 'alerts' ? 'bold' : 'normal' }}
        >
          ALERTS
        </button>
        <button
          onClick={() => goToPage('reports')}
          style={{ fontWeight: activePage === 'reports' ? 'bold' : 'normal' }}
        >
          REPORTS
        </button>
        <button className="logout-btn">Logout</button>
        <div className="user-icon">
          <i className="fas fa-user"></i>
        </div>
      </nav>

      <h1>Alerts</h1>
      <p>Double-click on the alert to view detailed report</p>

      <div className="alerts-grid">
        {alertsData.map((alert) => (
          <div
            key={alert.id}
            className="alert-card"
            style={{ backgroundColor: alert.color }}
          >
            <span className="status-badge">{alert.status}</span>
            <h2>{alert.type}</h2>
            <p>-27.00961072665897, 30.802929823714297</p>
          </div>
        ))}
      </div>

      <div className="real-time-btn">
        <button>Real-Time ➝</button>
      </div>
    </div>
  );
};

export default Alerts;
