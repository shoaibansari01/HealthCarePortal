import React from "react";
import "./HomePage.css";
import ImageSlider from "../components/ImageSlider";
import FeatureImage from "../assets/feature_image.png";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image">
          <ImageSlider />
        </div>
        <div className="hero-overlay">
          <h1>Healthcare Excellence</h1>
          <p>Advanced Care for Better Tomorrow</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-container">
        <h2 className="section-title">
          <span className="highlight">Key Features</span> of Our Healthcare
          Portal
        </h2>

        <div className="features-section">
          {/* Left: Features */}
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏥</div>
              <h3>Advanced Healthcare Technology</h3>
              <p>
                Integrating cutting-edge medical technology for precise
                diagnoses and innovative treatments.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Best Clinical Outcomes</h3>
              <p>
                Partnering with elite healthcare professionals to deliver
                exceptional patient care and results.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>10,000+ Healing Hands</h3>
              <p>
                A vast network of skilled healthcare experts bringing quality
                care to every patient.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="features-image-container">
            <div className="image-wrapper">
              <img
                src={FeatureImage}
                alt="Healthcare Features"
                className="feature-image"
              />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
