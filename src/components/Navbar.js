import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/dashboard" className="nav-link">Home</NavLink>
      <NavLink to="/live-monitoring" className="nav-link" activeClassName="active">LIVE MONITORING</NavLink>
      <NavLink to="/alerts" className="nav-link" activeClassName="active">ALERTS</NavLink>
      <NavLink to="/reports" className="nav-link" activeClassName="active">REPORTS</NavLink>
      <NavLink to="/settings" className="nav-link">Settings</NavLink>
    </nav>
  );
};

export default Navbar;
