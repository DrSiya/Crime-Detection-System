import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; 
import "./Home.css";

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate(); 
  const [activePage, setActivePage] = useState(location.pathname);

  const handleClick = (page) => {
    setActivePage(page);
  };

  
  const handleLogout = () => {
    navigate("/login"); 
  };

  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <nav className="nav-bar">
        <Link
          to="/home"
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

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>

        <div className="user-icon">
          <i className="fas fa-user"></i>
        </div>
      </nav>

      {/* Centered Heading and Image */}
      <div className="home-content">
        <h1>Welcome to the SmartGuard System</h1>
        <img src="/images/CRIMEEEE.png" alt="Crime Scene" className="home-image" />
      </div>
    </div>
  );
};

export default HomePage;
