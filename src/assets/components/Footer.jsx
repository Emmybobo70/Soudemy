import React, { useState } from "react";
import "../css/Footer.css";

const Footer = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert(`Thank you, ${formData.fullName}! Your information has been submitted.`);
  };

  return (
    <footer className="footer">
      <div className="footer-section contact">
        <h3>Contact</h3>
        <p>Find out all the ways to enjoy luxury residential life around the world.</p>
        <p>A. SeeStrasse 21, Zurich, CH</p>
        <p>M. +0 2256 036 3444</p>
      </div>

      <div className="footer-section faqs">
        <h3>FAQs</h3>
        <ul>
          <li>How long does the process take?</li>
          <li>How long does the process take?</li>
          <li>How long does the process take?</li>
          <li>How long does the process take?</li>
        </ul>
      </div>

      <div className="footer-section links">
        <h3>Useful Links</h3>
        <ul>
          <li>Property</li>
          <li>Video Tour</li>
          <li>Blog</li>
          <li>Terms of services</li>
        </ul>
      </div>

      <div className="footer-section enquire">
        <h3>Enquire</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-Mail ID"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <button type="submit">SUBMIT</button>
        </form>
      </div>

      <div className="footer-line"></div>
      <div className="footer-bottom">
        <p>All Rights For This Website Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
