import React from 'react';
import Navbar from '../Navbar';
import './Dashboard.css'; // Don't forget to link your CSS file

function Dashboard() {
  return (

    <>
    <Navbar/>
    <div className="dashboard-container">
      
      <div className="dashboard-content">
      
        <div className="user-info-card">
          <h3 className="info-title">User Information</h3>
          <div className="info-item">
            <span className="info-label">Name:</span>
            <span className="info-value">John Doe</span>
          </div>
          <div className="info-item">
            <span className="info-label">Email:</span>
            <span className="info-value">johndoe@example.com</span>
          </div>
          <div className="info-item">
            <span className="info-label">Phone:</span>
            <span className="info-value">(123) 456-7890</span>
          </div>
          <div className="info-item">
            <span className="info-label">Address:</span>
            <span className="info-value">123 Main St, City</span>
          </div>
          <button className="edit-button">Edit</button>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default Dashboard;
