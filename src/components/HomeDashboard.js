import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import './HomeDashboard.css'; // Optional for styling

const HomeDashboard = () => {
  const [alerts, setAlerts] = useState([]);

  // Fetch alerts from the backend
  useEffect(() => {
    axios.get('http://localhost:5000/api/alerts') // Ensure your backend provides location data
      .then((response) => setAlerts(response.data))
      .catch((error) => console.error('Error fetching alerts:', error));
  }, []);

  return (
    <div className="home-dashboard-container">
      <h1>Home Dashboard</h1>

      {/* Map Container */}
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "600px", width: "100%" }}>
        {/* TileLayer: OpenStreetMap */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {/* Loop through alerts and place markers on the map */}
        {alerts.map((alert) => (
          alert.latitude && alert.longitude && (
            <Marker
              key={alert.id}
              position={[alert.latitude, alert.longitude]}
              icon={new Icon({
                iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Map_marker_icon.png', // Custom Marker Icon
                iconSize: [25, 25],
              })}
            >
              <Popup>
                <h3>{alert.type}</h3>
                <p>Status: {alert.status}</p>
                <p>Location: {alert.latitude}, {alert.longitude}</p>
              </Popup>
            </Marker>
          )
        ))}
      </MapContainer>
    </div>
  );
};

export default HomeDashboard;
