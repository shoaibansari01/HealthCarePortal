import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Doctor.css";

const DoctorAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    specialization: "",
    experience: "",
    phone: "",
  });

  const navigate = useNavigate(); // Initialize navigation

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example validation or API request logic here
    if (isLogin) {
      // Simulate successful login
      console.log("Doctor logged in:", formData);
      navigate("/doctorDashboard"); // Navigate to doctorDashboard
    } else {
      console.log("Doctor registration:", formData);
      // Add registration logic here
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        {/* Left Side - Image/Info Section */}
        <div className="auth-info">
          <div className="auth-info-content">
            <h2>Welcome to HealthCare Portal</h2>
            <p>
              Join our network of healthcare professionals and make a difference
              in patients' lives.
            </p>

            <div className="auth-features">
              <div className="feature-item">
                <span className="feature-icon">🏥</span>
                <p>Access to Advanced Healthcare Platform</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📊</span>
                <p>Manage Patient Records Efficiently</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📅</span>
                <p>Smart Appointment Scheduling</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form Section */}
        <div className="auth-form-container">
          <div className="form-header">
            <h2>{isLogin ? "Doctor Login" : "Doctor Registration"}</h2>
            <div className="auth-toggle">
              <button
                className={isLogin ? "active" : ""}
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
              <button
                className={!isLogin ? "active" : ""}
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            {!isLogin && (
              <>
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Specialization</label>
                  <input
                    type="text"
                    name="specialization"
                    placeholder="Enter your specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Years of Experience</label>
                  <input
                    type="number"
                    name="experience"
                    placeholder="Years of experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </>
            )}

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              {isLogin ? "Login" : "Create Account"}
            </button>

            {isLogin && (
              <a href="#" className="forgot-password">
                Forgot Password?
              </a>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorAuth;
