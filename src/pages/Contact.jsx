import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

 

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>
          Get in Touch
        </h1>
        <p>
          We’d love to hear from you. Let's start a conversation.{" "}
        </p>
      </div>

      <div className="contact-wrapper">
        <div className="contact-grid">
          <form className="contact-form" >
            <h2>Send Message</h2>
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <textarea
              placeholder="Your message..."
              rows="5"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
            <button type="submit">
              <Send size={16} />Send Message
            </button>
          </form>

          <div className="contact-info">
            <h2>Contact Info</h2>
            <div className="info-block">
              <MapPin className="icon" />
              <div>
                <h3>Dwello Headquarters</h3>
                <p>
                  Opp. Newton School of Technology
                  <br />
                  Rishihood University, Sonepat
                  <br />
                  India
                </p>
              </div>
            </div>

            <div className="info-block">
              <Mail className="icon" />
              <div>
                <h3>Email</h3>
                <p>support@dwello.com</p>
              </div>
            </div>

            <div className="info-block">
              <Phone className="icon" />
              <div>
                <h3>Phone</h3>
                <p>+91 99999 99999</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
