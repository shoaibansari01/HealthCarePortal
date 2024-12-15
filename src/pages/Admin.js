import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

const Admin = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    name: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Validate username using regex (example: alphanumeric and underscores allowed)
  const validateUsername = (username) => /^[a-zA-Z0-9_]+$/.test(username);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for the current field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Validate form data
  const validateForm = () => {
    const newErrors = {};

    // Username validation
    if (!formData.username) {
      newErrors.username = "Username is required";
    } else if (!validateUsername(formData.username)) {
      newErrors.username = "Username is invalid (alphanumeric only)";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    // Additional validations for signup
    if (!isLogin) {
      if (!formData.name) {
        newErrors.name = "Full name is required";
      }
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Please confirm your password";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);

      if (isLogin) {
        // Handle login
        navigate("/adminDashboard");
      } else {
        // Handle signup logic
        console.log("Sign-up logic goes here");
      }
    }
  };

  return (
    <div className="admin-container">
      <div className="admin-card">
        <div className="admin-header">
          <h2>{isLogin ? "Admin Login" : "Admin Signup"}</h2>
          <p>Welcome to the Healthcare Portal</p>
        </div>

        <form onSubmit={handleSubmit} className="admin-form">
          {/* Full Name field (only for signup) */}
          {!isLogin && (
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
          )}

          {/* Username field */}
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && (
              <span className="error">{errors.username}</span>
            )}
          </div>

          {/* Password field */}
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>

          {/* Confirm Password field (only for signup) */}
          {!isLogin && (
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <span className="error">{errors.confirmPassword}</span>
              )}
            </div>
          )}

          {/* Submit button */}
          <button type="submit" className="submit-btn">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Toggle between login and signup */}
        {/* <div className="toggle-form">
          <p>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setErrors({});
              }}
              className="toggle-btn"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Admin;
