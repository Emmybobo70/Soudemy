import React from "react";
import "../css/Navbar.css";

const Navbar = () => {
  // Social Media Links
  const openLink = (url) => {
    window.open(url, "_blank");
  };

  // Handle Search Click
  const handleSearch = () => {
    const query = prompt("What would you like to search for?");
    if (query) {
      alert(`You searched for: ${query}`);
    }
  };

  // Navigation Links
  const handleNavigation = (section) => {
    alert(`Navigating to the ${section} section!`);
  };

  return (
    <div className="villa-container">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">Soudemy</div>
        <nav>
          <ul>
            <li onClick={() => handleNavigation("Home")}>Home</li>
            <li onClick={() => handleNavigation("About")}>About</li>
            <li onClick={() => handleNavigation("Highlights")}>Highlights</li>
            <li onClick={() => handleNavigation("Amenities")}>Amenities</li>
            <li onClick={() => handleNavigation("Team")}>Team</li>
          </ul>
        </nav>
        <div className="icons">
          {/* Social Media Icons */}
          <i
            className="fab fa-instagram"
            onClick={() => openLink("https://www.instagram.com")}
          ></i>
          <i
            className="fab fa-twitter"
            onClick={() => openLink("https://www.twitter.com")}
          ></i>
          <i
            className="fab fa-facebook"
            onClick={() => openLink("https://www.facebook.com")}
          ></i>
          {/* Search */}
          <i className="fas fa-search" onClick={handleSearch}></i>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Modern Luxury Villa</h1>
          <p>Price: <strong>$2,999,99</strong></p>
          <button className="visit-button">Schedule a Visit</button>
        </div>
      </section>
    </div>
  );
};

export default Navbar;