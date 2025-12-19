import React, { useState } from "react";
import "./ContactForm.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const subject = `Portfolio Contact from ${formData.fullName}`;
    const body = `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    
    // Open default mail client
    window.location.href = `mailto:eng.ahmedghallab@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/Ahmed-Ghallab",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/ahmedghallab22",
      label: "LinkedIn",
    },
    {
      icon: <IoMail />,
      url: "mailto:eng.ahmedghallab@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section id="contact">
      <div className="contact-wrapper">
        <h2 className="form-title">Get In Touch</h2>
        <p className="contact-desc">
          I'm currently looking for new opportunities. My inbox is always open!
        </p>
        
        <form className="contact-form" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Your Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@mail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone (Optional)</label>
            <input
              type="tel"
              name="phone"
              placeholder="+971 50 000 0000"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>

        {/* Social Links Section - Mobile Only */}
        <div className="contact-social-mobile">
          <h3>Or find me on</h3>
          <div className="social-links-contact">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-contact"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
