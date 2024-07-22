import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Correct the path to App.css

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">Grapefruit</Link>
      <ul className="nav">
        <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
        <li className="nav-item"><a href="#health-coaches" className="nav-link">Health Coaches</a></li>
        <li className="nav-item"><a href="#popular-recipes" className="nav-link">Popular Recipes</a></li>
        <li className="nav-item"><a href="#classes" className="nav-link">Classes</a></li>
        <li className="nav-item"><a href="#booking" className="nav-link">Booking</a></li>
        <li className="nav-item"><a href="#contact-us" className="nav-link">Contact Us</a></li>
      </ul>
      <div className="search-container">
        <button onClick={toggleSearch} className="search-button">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path fill="#97A778" d="M10,18a8,8,0,1,1,8-8A8,8,0,0,1,10,18ZM10,4A6,6,0,1,0,16,10,6,6,0,0,0,10,4Z"></path>
            <path fill="#97A778" d="M21,21a1,1,0,0,1-.71-.29l-5-5a1,1,0,0,1,1.42-1.42l5,5A1,1,0,0,1,21,21Z"></path>
          </svg>
        </button>
        {showSearch && (
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
          />
        )}
      </div>
    </nav>
  );
};

export default Header;
