import './App.css';
import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Add this import for routing
import LoginPage from './components/LoginPage'; // Import LoginPage
// import LoginPage from "./LoginPage";


function App() {
  return (
      <div className="App">
        <LoginPage />
      </div>
    );
  //   <Router>  {/* Using Router as alias for BrowserRouter */}
  //   <Routes>
  //     <Route path="/" element={<LoginPage />} />
  //   </Routes>
  // </Router>
}

export default App;
