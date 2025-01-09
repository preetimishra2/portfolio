import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer font-link">
      <p>
        © {new Date().getFullYear()} Preeti Mishra | Designed with ❤️ by Preeti
      </p>
      <div className="social-icons">
        <a
          href="https://github.com/preetimishra2"
          className="icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://linkedin.com/in/preetimishra"
          className="icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://twitter.com/preetimishra"
          className="icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
