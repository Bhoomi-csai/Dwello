import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-sections">
      <div className="footer-column">
            <h4>Quick Links</h4>
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
        </div>

        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>Email: support@dwello.com</p>
          <p>Phone: +91 99999 99999</p>
        </div>

        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
      © 2025 Dwello. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
