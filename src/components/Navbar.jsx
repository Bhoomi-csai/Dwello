import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Dwello</div>

      <div className="navbar-center">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/listing">Explore More</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <Link to="/login" className="login-btn">Login</Link>
    </nav>
  );
}

export default Navbar;
