import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header font-link">
      <nav className="navbar">
        {/* Make the brand name clickable */}
        <Link to="/portfolio" className="navbar-brand" onClick={() => setMenuOpen(false)}>
          Preeti Mishra
        </Link>
        <div className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? '✖' : '☰'}
        </div>
        <ul className={`nav-list ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/portfolio" className="nav-link" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/experience" className="nav-link" onClick={() => setMenuOpen(false)}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
