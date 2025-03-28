import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import './Alerts.css';


const alertsData = [
  { id: 1, type: 'Gun shot', status: 'Closed', color: 'green' },
  { id: 2, type: 'Abnormal noise', status: 'Open', color: 'red' },
  { id: 3, type: 'Abnormal noise', status: 'Open', color: 'red' }
];


const Alerts = () => {

   const [activePage, setActivePage] = useState('alerts'); // default active page

   // Handle link click and set active page
   const handleClick = (page) => {
     setActivePage(page);
   };
  return (
    <div className="alerts-container">
      <nav className="nav-bar">
      <Link 
        to="/" 
        onClick={() => handleClick('home')} 
        style={{ fontWeight: activePage === 'home' ? 'bold' : 'normal', textDecoration: 'none' }}
      >
        HOME
      </Link>
      <Link 
        to="/live-monitoring" 
        onClick={() => handleClick('live-monitoring')} 
        style={{ fontWeight: activePage === 'live-monitoring' ? 'bold' : 'normal', textDecoration: 'none' }}
      >
        LIVE MONITORING
      </Link>

      <Link 
        to="/alerts" 
        onClick={() => handleClick('alerts')} 
        style={{ fontWeight: activePage === 'alerts' ? 'bold' : 'normal', textDecoration: 'none' }}
      >
        ALERTS
      </Link>

      <Link 
        to="/reports" 
        onClick={() => handleClick('reports')} 
        style={{ fontWeight: activePage === 'reports' ? 'bold' : 'normal', textDecoration: 'none' }}
      >
        REPORTS
      </Link>
    <Link
          to="/escalation"
          onClick={() => handleClick("/escalation")}
          style={{
            fontWeight: activePage === "/escalation" ? "bold" : "normal",
            textDecoration: "none",
          }}
        >
          ESCALATION
          </Link>
      <button className="logout-btn">Logout</button>
      <div className="user-icon">
        <i className="fas fa-user"></i>
      </div>
      </nav>
      
      {/* <h1>Alerts</h1> */}
      <br></br>
      <p>Double-click on the alert to view detailed report</p>
      <br></br>
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
<br></br>
      <div className="real-time-btn">
        <button>Real-Time ➝</button>
      </div>
    </div>
  );
};

export default Alerts;
