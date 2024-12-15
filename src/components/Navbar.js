import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <h2>
              <span className="logo-health">Health</span>
              <span className="logo-care">Care</span>
            </h2>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`mobile-menu-btn ${isMobileMenuOpen ? "active" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <div className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
          <Link
            to="/"
            className="nav-link patient"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <i className="nav-icon">🏠</i>
            Home
          </Link>
          <Link
            to="/admin"
            className="nav-link admin"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <i className="nav-icon">👤</i>
            Admin
          </Link>
          <Link
            to="/doctor"
            className="nav-link doctor"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <i className="nav-icon">👨‍⚕️</i>
            Doctor
          </Link>
          <Link
            to="/appointment"
            className="nav-link appointment"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <i className="nav-icon">📅</i>
            Appointment
          </Link>
          <Link
            to="/patient"
            className="nav-link patient"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <i className="nav-icon">🏥</i>
            Patient
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
