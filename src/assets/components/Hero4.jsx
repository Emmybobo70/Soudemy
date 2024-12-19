import React, { useState } from "react";
import "../css/Hero4.css";

const Hero4 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    title: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // Reset after 3 seconds
  };

  return (
    <div className="team-container">
      {/* Left Side - Team Members */}
      <div className="team-section">
        <h2 className="team-title">Our Team</h2>
        <div className="team-cards">
          <div className="team-card">
            <img
              src="/src/assets/images/Frame 24.svg"
              alt="Sean Walker"
              className="team-image"
            />
            <div className="team-text">
              <h3>Sean Walker</h3>
              <p>Renting Agent</p>
            </div>
          </div>
          <div className="team-card">
            <img
              src="/src/assets/images/Frame 25.svg"
              alt="Jenish Desai"
              className="team-image"
            />
            <div className="team-text">
              <h3>Jenish Desai</h3>
              <p>SEO</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="form-section">
        <h3>Building A Future With Our Help. Leave A Message And Our Agent Will Contact You</h3>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="telephone"
            placeholder="Telephone"
            value={formData.telephone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <button type="submit">SEND</button>
        </form>
        {submitted && <p className="success-message">Successfully Submitted!</p>}
      </div>
    </div>
  );
};

export default Hero4;
