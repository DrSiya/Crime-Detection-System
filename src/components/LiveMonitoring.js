import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./LiveMonitoring.css";

const LiveMonitoring = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState(location.pathname);

  const handleClick = (page) => {
    setActivePage(page);
  };

  return (
    <div className="live-container">
      {/* Navigation Bar */}
      <nav className="nav-bar">
        <Link
          to="/"
          onClick={() => handleClick("/")}
          style={{
            fontWeight: activePage === "/" ? "bold" : "normal",
            textDecoration: "none",
            marginRight: "20px",
          }}
        >
          HOME
        </Link>
        <Link
          to="/live-monitoring"
          onClick={() => handleClick("/live-monitoring")}
          style={{
            fontWeight: activePage === "/live-monitoring" ? "bold" : "normal",
            textDecoration: "none",
            marginRight: "20px",
          }}
        >
          LIVE MONITORING
        </Link>
        <Link
          to="/alerts"
          onClick={() => handleClick("/alerts")}
          style={{
            fontWeight: activePage === "/alerts" ? "bold" : "normal",
            textDecoration: "none",
            marginRight: "20px",
          }}
        >
          ALERTS
        </Link>
        <Link
          to="/reports"
          onClick={() => handleClick("/reports")}
          style={{
            fontWeight: activePage === "/reports" ? "bold" : "normal",
            textDecoration: "none",
            marginRight: "20px",
          }}
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

      {/* Title and Video Section */}
      <div className="content">
        <h1 className="title">Live Monitoring</h1>
        <div className="video-grid">
          <div className="video-wrapper">
            <video controls>
              <source src="/videos/Video 1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="video-wrapper">
            <video controls>
              <source src="/videos/Video 2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveMonitoring;
