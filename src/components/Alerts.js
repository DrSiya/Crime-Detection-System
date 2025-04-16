import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Alerts.css';

// Alert data with unique coordinates
const alertsData = [
  {
    id: 1,
    type: 'Normal',
    status: 'Closed',
    color: 'green',
    coordinates: 'Camera 1, Tuck Shop',
  },
  {
    id: 2,
    type: 'Abnormal',
    status: 'Open',
    color: 'red',
    coordinates: 'Camera 2, Jewellery Shop',
  },
 
];

const Alerts = () => {
  const [activePage, setActivePage] = useState('alerts'); // default active page

  const handleClick = (page) => {
    setActivePage(page);
  };

  return (
    <div className="alerts-container">
      {/* Navigation Bar */}
      <nav className="nav-bar">
        <Link
          to="/home"
          onClick={() => handleClick('home')}
          style={{
            fontWeight: activePage === 'home' ? 'bold' : 'normal',
            textDecoration: 'none',
          }}
        >
          HOME
        </Link>
        <Link
          to="/live-monitoring"
          onClick={() => handleClick('live-monitoring')}
          style={{
            fontWeight: activePage === 'live-monitoring' ? 'bold' : 'normal',
            textDecoration: 'none',
          }}
        >
          LIVE MONITORING
        </Link>
        <Link
          to="/alerts"
          onClick={() => handleClick('alerts')}
          style={{
            fontWeight: activePage === 'alerts' ? 'bold' : 'normal',
            textDecoration: 'none',
          }}
        >
          ALERTS
        </Link>
        <Link
          to="/reports"
          onClick={() => handleClick('reports')}
          style={{
            fontWeight: activePage === 'reports' ? 'bold' : 'normal',
            textDecoration: 'none',
          }}
        >
          REPORTS
        </Link>
        <Link
          to="/escalation"
          onClick={() => handleClick('escalation')}
          style={{
            fontWeight: activePage === 'escalation' ? 'bold' : 'normal',
            textDecoration: 'none',
          }}
        >
          ESCALATION
        </Link>
        <button className="logout-btn">Logout</button>
        <div className="user-icon">
          <i className="fas fa-user"></i>
        </div>
      </nav>

      {/* Alert Cards */}
      <br />
      <br />
      <div className="alerts-grid">
        {alertsData.map((alert) => (
          <div
            key={alert.id}
            className="alert-card"
            style={{ backgroundColor: alert.color }}
          >
            <span className="status-badge">{alert.status}</span>
            <h2>{alert.type}</h2>
            <p>{alert.coordinates}</p>
          </div>
        ))}
      </div>

      {/* Real-Time Button */}
      <br />
      <div className="real-time-btn">
  <Link to="/live-monitoring">
    <button>Real-Time ➝</button>
  </Link>
</div>
    </div>
  );
};

export default Alerts;
