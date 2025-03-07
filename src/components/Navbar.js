import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../services/authService";
import { toast } from "react-toastify";

const Navbar = ({ isAuthenticated, setIsAuthenticated, user }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      setIsAuthenticated(false);
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-brand">
          Auth System
        </Link>
        <div className="navbar-nav">
          {isAuthenticated ? (
            <>
              <span className="welcome-text">Welcome, {user?.name}</span>
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="link">
                Login
              </Link>
              <Link to="/register" className="link">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
