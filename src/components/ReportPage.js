import React from "react";
import "./ReportPage.css"; // Import the CSS file

const ReportPage = () => {
  return (
    <div className="report-container">
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
