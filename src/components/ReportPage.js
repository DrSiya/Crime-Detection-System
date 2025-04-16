import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ReportPage.css";

const ReportPage = () => {
  const [activePage, setActivePage] = useState("reports");
  const [reports, setReports] = useState([]);

  const handleClick = (page) => {
    setActivePage(page);
  };

  useEffect(() => {
    const storedReports = JSON.parse(localStorage.getItem("escalationReports")) || [];
    setReports(storedReports);
  }, []);

  return (
    <div className="report-container">
      <nav className="nav-bar">
        <Link to="/home" onClick={() => handleClick("home")} style={{ fontWeight: activePage === "home" ? "bold" : "normal", textDecoration: "none" }}>HOME</Link>
        <Link to="/live-monitoring" onClick={() => handleClick("live-monitoring")} style={{ fontWeight: activePage === "live-monitoring" ? "bold" : "normal", textDecoration: "none" }}>LIVE MONITORING</Link>
        <Link to="/alerts" onClick={() => handleClick("alerts")} style={{ fontWeight: activePage === "alerts" ? "bold" : "normal", textDecoration: "none" }}>ALERTS</Link>
        <Link to="/reports" onClick={() => handleClick("reports")} style={{ fontWeight: activePage === "reports" ? "bold" : "normal", textDecoration: "none" }}>REPORTS</Link>
        <Link to="/escalation" onClick={() => handleClick("escalation")} style={{ fontWeight: activePage === "escalation" ? "bold" : "normal", textDecoration: "none" }}>ESCALATION</Link>
        <button className="logout-btn" onClick={() => { window.location.href = "/login"; }}>
          Logout
        </button>
        <div className="user-icon"><i className="fas fa-user"></i></div>
      </nav>

      <h1 className="report-title">Reports</h1>

      {reports.length === 0 ? (
        <p>No reports available.</p>
      ) : (
        <div className="report-list">
          {reports.map((report, index) => (
            <div className="incident-box" key={index}>
              <h2>{report.location}</h2>
              <p className="coordinates">└ {report.coordinates}</p>
              <ul>
                <li>Summary: {report.incidentSummary}</li>
                {report.specialNotes && <li>Notes: {report.specialNotes}</li>}
                <li>Attended by: Officer {index + 1}</li>
              </ul>
              <button className="reopen-btn">Close</button>

              <table className="report-table">
                <tbody>
                  <tr>
                    <th>Time Logged</th>
                    <td>{new Date().toLocaleString()}</td>
                  </tr>
                  <tr>
                    <th>Site Arrival</th>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <th>Time Closed</th>
                    <td>N/A</td>
                  </tr>
                  <tr>
                    <th>SLA Met</th>
                    <td>Pending</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReportPage;
