import React from 'react';

const Dashboard = ({ user }) => {
  return (
    <div className="auth-form-container">
      <h1 className="text-center">Dashboard</h1>
      <div className="form-group">
        <h3>Welcome to your dashboard!</h3>
        {user && (
          <div className="mt-3">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Account Created:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;