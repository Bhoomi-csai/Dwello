import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from "../assets/logo.png"

function Navbar() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
        <img src={logo} className='image'/>
        </Link>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>

      <div className={`navbar-center ${menuOpen ? 'active' : ''}`}>
        <NavLink to="/home" onClick={closeMenu}>Home</NavLink>
        <NavLink to="/listing" onClick={closeMenu}>Explore</NavLink>
        <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
        <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
      </div>

      <div className="navbar-right">
        {user ? (
          <>
            <span className="welcome-text"><span className='hi'>Hi,</span> {user?.email?.split('@')[0]}</span>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login" className="login-btn" onClick={closeMenu}>Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;