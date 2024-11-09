import React from 'react';
// import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="logo.png" alt="Logo" className="logo-image" />
      </div>
      <div className="navbar-links">
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About </a>
        <a href="#content" className="nav-link">Content</a>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." className="search-input" />
        <button className="search-button">
          <i className="search-icon">🔍</i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
