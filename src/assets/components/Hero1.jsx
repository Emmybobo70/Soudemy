import React, { useState, useEffect } from "react";
import "../css/Hero1.css";

const Hero1 = () => {
  const images = [
    "/src/assets/images/skyhause-bedroom-1-q5yzal0mxx2yk24i54ut1rmpibvi03rmcaoyk99a8w.svg",
    "/src/assets/images/Frame 23.svg",
    "/src/assets/images/skyhause-bedroom-1-q5yzal0mxx2yk24i54ut1rmpibvi03rmcaoyk99a8w.svg",
    "/src/assets/images/Frame 23.svg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Slide effect every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="container">
      {/* Left Content */}
      <div className="text-content">
        <h1>SkyHaus Residence</h1>
        <p>
          A property description is made up of 2 parts: key features and
          property description. The key features section is your opportunity to
          tell potential tenants about the key selling points of your property,
          in a bullet point format. The property description section allows you
          to go in to more depth.
        </p>
        <div className="info">
          <div>
            <span role="img" aria-label="beds">🛏️</span> <strong>5</strong> Beds
          </div>
          <div>
            <span role="img" aria-label="baths">🛁</span> <strong>7</strong> Baths
          </div>
          <div>
            <span role="img" aria-label="garages">🚗</span> <strong>4</strong> Garages
          </div>
          <div>
            <span role="img" aria-label="kitchens">☕</span> <strong>2</strong> Kitchens
          </div>
        </div>
      </div>

      {/* Sliding Image */}
      <div className="image-container">
        <img
          src={images[currentImage]}
          alt="Property"
          className="sliding-image"
        />
      </div>
    </div>
  );
};

export default Hero1;
