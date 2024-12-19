import React from 'react';
import '../css/Hero3.css';

const Hero3 = () => {
  return (
    <section className="hero3">
      <div className="hero3-content">
        <h2 className="hero3-title">SkyHaus Amenities</h2>
        <p className="hero3-description">
          The Key Features Section Is Your Opportunity To Tell Potential Tenants About Key Selling Points Of Your Point Formats. The Property Description Sections You To Go More In Depth Property.
        </p>
        <div className="hero3-features">
          <div className="feature">
            <p>Swimming Pool</p>
            <h4>45 Sq Ft</h4>
          </div>
          <div className="feature">
            <p>Large Play Ground</p>
            <h4>80 Sq Ft</h4>
          </div>
          <div className="feature">
            <p>High Security</p>
            <h4>24/7</h4>
          </div>
          <div className="feature">
            <p>Water Storage</p>
            <h4>1200 Gal</h4>
          </div>
          <div className="feature">
            <p>Basement</p>
            <h4>2</h4>
          </div>
          <div className="feature">
            <p>Elevator</p>
            <h4>2</h4>
          </div>
        </div>
      </div>
      <div className="hero3-image">
        <img src="/src/assets/images/Frame 23.svg" alt="SkyHaus Amenities" />
      </div>
    </section>
  );
};

export default Hero3;
