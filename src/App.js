import React from 'react';
// import LoginPage from './components/LoginPage';
// import Alerts from './components/Alerts';
import './App.css';
// import LoginPage from './components/LoginPage';
import AlertsPage from './components/Alerts';

function App() {
  // const [currentPage, setCurrentPage] = useState("login");

  return (
  //   <div>
  //   <nav>
  //     <div onClick={() => setCurrentPage("login")} style={{ cursor: "pointer", margin: "10px" }}>
  //       Login
  //     </div>
  //     <div onClick={() => setCurrentPage("alerts")} style={{ cursor: "pointer", margin: "10px" }}>
  //       Alerts
  //     </div>
  //   </nav>
    
  //   <div>
  //     {currentPage === "login" && <LoginPage />}
  //     {currentPage === "alerts" && <Alerts />}
  //   </div>
  // </div>
  
  <div>
      <AlertsPage />
    </div>
  );
}

export default App;
