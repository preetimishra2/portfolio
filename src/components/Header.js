import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header font-link">
      <nav className="navbar">
        <div className="navbar-brand">Preeti Mishra</div>
        <ul className="nav-list">
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
          <li className="nav-item"><Link to="/experience" className="nav-link">Projects</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-link">Contact Me</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
