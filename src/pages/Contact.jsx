import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <section className="contact-hero">
        <h1>Get in Touch</h1>
        <p>We’d love to hear from you. Let’s start a conversation.</p>
      </section>

      <section className="contact-form-section">
        <form className="contact-form">
          <label>Name</label>
          <input type="text" placeholder="Your Name" />

          <label>Email</label>
          <input type="email" placeholder="your@email.com" />

          <label>Message</label>
          <textarea placeholder="Type your message here..." rows="5" />

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Dwello Headquarters</h3>
          <p>Opp. Newton School of Technology<br />Rishihood University, Sonepat<br />India</p>
          <p>Email: support@dwello.com<br />Phone: +91 99999 99999</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
