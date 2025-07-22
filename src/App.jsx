import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './components/footer';
import Listing from './pages/Listing';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      {user && <Navbar />}
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/home" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/home" /> : <Register />} />
        {user && (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/listing" element={<Listing />} />
          </>
        )}
        <Route 
          path="*" 
          element={<Navigate to={user ? "/home" : "/login"} />} 
        />
      </Routes>
      {user && <Footer />}
    </Router>
  );
}

export default App;
