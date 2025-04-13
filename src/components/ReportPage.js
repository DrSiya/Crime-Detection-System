import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ReportPage.css"; // Import the CSS file

const ReportPage = () => {
    const [activePage, setActivePage] = useState("reports"); // default active page
    // Handle link click and set active page
  const handleClick = (page) => {
    setActivePage(page);
  };
    return (
    <div className="report-container">
      

      <nav className="nav-bar">
        <Link to="/" onClick={() => handleClick("home")} style={{ fontWeight: activePage === "home" ? "bold" : "normal", textDecoration: "none" }}>HOME</Link>
        <Link to="/live-monitoring" onClick={() => handleClick("live-monitoring")} style={{ fontWeight: activePage === "live-monitoring" ? "bold" : "normal", textDecoration: "none" }}>LIVE MONITORING</Link>
        <Link to="/alerts" onClick={() => handleClick("alerts")} style={{ fontWeight: activePage === "alerts" ? "bold" : "normal", textDecoration: "none" }}>ALERTS</Link>
        <Link to="/reports" onClick={() => handleClick("reports")} style={{ fontWeight: activePage === "reports" ? "bold" : "normal", textDecoration: "none" }}>REPORTS</Link>
        <Link to="/escalation" onClick={() => handleClick("escalation")} style={{ fontWeight: activePage === "escalation" ? "bold" : "normal", textDecoration: "none" }}>ESCALATION</Link>
        <button className="logout-btn">Logout</button>
        <div className="user-icon"><i className="fas fa-user"></i></div>
      </nav>
      <h1 className="report-title">Reports</h1>
      <div className="report-content">
        {/* Incident Box */}
        <div className="incident-box">
          <h2>Gun shot</h2>
          <p className="coordinates">└ 27.00961072665897, 30.80292823714297</p>
          <ul>
            <li>Gun shot detected</li>
            <ul>
              <li>A community member was burning containers, which caused an explosion.</li>
            </ul>
            <li>Attended by: K Nkosi</li>
          </ul>
          <button className="reopen-btn">RE-OPEN</button>
        </div>

        {/* Time Log Table */}
        <table className="report-table">
          <tbody>
            <tr>
              <th>Time Logged</th>
              <td>00:00 12 Feb 2025</td>
            </tr>
            <tr>
              <th>Site Arrival</th>
              <td>00:15 12 Feb 2025</td>
            </tr>
            <tr>
              <th>Time Closed</th>
              <td>13:00 12 Feb 2025</td>
            </tr>
            <tr>
              <th>SLA Met</th>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportPage;
