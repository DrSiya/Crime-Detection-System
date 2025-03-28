import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Escalation.css";

const Escalation = () => {
  const [activePage, setActivePage] = useState("escalation"); // default active page
  const [formData, setFormData] = useState({
    location: "",
    coordinates: "",
    incidentSummary: "",
    specialNotes: "",
  });
  const [feedback, setFeedback] = useState("");

  // Handle link click and set active page
  const handleClick = (page) => {
    setActivePage(page);
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedback("Your escalation has been logged.");
  };

  return (
    <div className="escalation-container">
      <nav className="nav-bar">
        <Link to="/" onClick={() => handleClick("home")} style={{ fontWeight: activePage === "home" ? "bold" : "normal", textDecoration: "none" }}>HOME</Link>
        <Link to="/live-monitoring" onClick={() => handleClick("live-monitoring")} style={{ fontWeight: activePage === "live-monitoring" ? "bold" : "normal", textDecoration: "none" }}>LIVE MONITORING</Link>
        <Link to="/alerts" onClick={() => handleClick("alerts")} style={{ fontWeight: activePage === "alerts" ? "bold" : "normal", textDecoration: "none" }}>ALERTS</Link>
        <Link to="/reports" onClick={() => handleClick("reports")} style={{ fontWeight: activePage === "reports" ? "bold" : "normal", textDecoration: "none" }}>REPORTS</Link>
        <Link to="/escalation" onClick={() => handleClick("escalation")} style={{ fontWeight: activePage === "escalation" ? "bold" : "normal", textDecoration: "none" }}>ESCALATION</Link>
        <button className="logout-btn">Logout</button>
        <div className="user-icon"><i className="fas fa-user"></i></div>
      </nav>
      
      <div className="register-page">
        <div className="register-container">
          <h2>Escalation Form</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Location:</label>
              <input type="text" name="location" value={formData.location} onChange={handleChange} required />
            </div>
            <div>
              <label>Coordinates:</label>
              <input type="text" name="coordinates" value={formData.coordinates} onChange={handleChange} required />
            </div>
            <div>
              <label>Incident Summary:</label>
              <textarea name="incidentSummary" value={formData.incidentSummary} onChange={handleChange} required />
            </div>
            <div>
              <label>Special Notes:</label>
              <textarea name="specialNotes" value={formData.specialNotes} onChange={handleChange} />
            </div>
            <button type="submit">Submit</button>
          </form>
          {feedback && <p>{feedback}</p>}
        </div>
      </div>
    </div>
  );
};

export default Escalation;