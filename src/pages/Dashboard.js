import React from "react";
import { FaUser, FaEnvelope, FaCalendarAlt } from "react-icons/fa";

const Dashboard = ({ user }) => {
  return (
    <div className="auth-form-container">
      <h1 className="text-center">Dashboard</h1>
      <div className="form-group">
        {user && (
          <div className="dashboard-info">
            <div className="info-item">
              <FaUser className="info-icon" />
              <span className="info-label">Name:</span>
              <span className="info-value">{user.name}</span>
            </div>
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <span className="info-label">Email:</span>
              <span className="info-value">{user.email}</span>
            </div>
            <div className="info-item">
              <FaCalendarAlt className="info-icon" />
              <span className="info-label">Account Created:</span>
              <span className="info-value">
                {new Date(user.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
