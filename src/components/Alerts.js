import React from 'react';
import { Link } from 'react-router-dom';
import './Alerts.css';

const alertsData = [
  { id: 1, type: 'Gun shot', status: 'Closed', color: 'green' },
  { id: 2, type: 'Abnormal noise', status: 'Open', color: 'red' },
  { id: 3, type: 'Abnormal noise', status: 'Open', color: 'red' }
];

const Alerts = () => {
  return (
    <div className="alerts-container">
      <nav className="nav-bar">
        <Link to="/dashboard">HOME</Link>
        <Link to="/live-monitoring">LIVE MONITORING</Link>
        <Link to="/alerts" className="active">ALERTS</Link>
        <Link to="/reports">REPORTS</Link>
        <button className="logout-btn">Logout</button>
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
