import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import AlertsPage from './components/Alerts';
import ReportPage from './components/ReportPage';

function App() {
  // const [currentPage, setCurrentPage] = useState("login");

  return (
    <Router>
    <Routes>
      {/* Define routes for the all the pages */}
      <Route path="/" element={<LoginPage />} />
      <Route path="/alerts" element={<AlertsPage />} />
      <Route path="/reports" element={<ReportPage />} />
    </Routes>
  </Router>
 
  );
}

export default App;
