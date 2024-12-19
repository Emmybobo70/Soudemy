import React from "react";
import "../css/Hero2.css";
import viewImage from "../images/skyhaus-highlights-img1-scaled.svg"; // Path to your image

const highlights = [
  { title: "Amazing View", description: "the view is spectacular from deck tub or through the floor." },
  { title: "Quiet Neighbour", description: "the view is spectacular from deck tub or through the floor." },
  { title: "Housing Security", description: "the view is spectacular from deck tub or through the floor." },
];

const Hero2 = () => {
  return (
    <div className="hero2-container">
      <h2 className="hero2-title">Property Highlight</h2>
      <p className="hero2-description">
        A property description is made up of 2 parts: key features and property description. The key features section is
        your opportunity to tell potential tenants.
      </p>
      <div className="hero2-card-container">
        {highlights.map((item, index) => (
          <div key={index} className="hero2-card">
            <img src={viewImage} alt="Property View" className="hero2-card-image" />
            <div className="hero2-card-text">
              <h3 className="hero2-card-title">{item.title}</h3>
              <p className="hero2-card-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero2;
