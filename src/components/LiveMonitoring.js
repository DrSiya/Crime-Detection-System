// JavaScript source code
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./LiveMonitoring.css";

// Navbar Component
const LiveMonitoring = () => {
  const location = useLocation(); // Get the current route location
  const [activePage, setActivePage] = useState(location.pathname); // Set active page based on current route

  // Handle link click and set active page
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
            marginRight: "20px", // Add spacing between links
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
          }}
        >
          REPORTS
        </Link>
        <button className="logout-btn">Logout</button>
      <div className="user-icon">
        <i className="fas fa-user"></i>
      </div>
      </nav>

      {/* Title and Video Section */}
      <div className="content">
        <h1 className="title">Live Monitoring</h1>
        <video
          width="640"
          height="360"
          controls
          className="video-player"
        >
          <source src="/path/to/your/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default LiveMonitoring;