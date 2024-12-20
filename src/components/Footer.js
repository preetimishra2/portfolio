import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Preeti Mishra | Designed with ❤️ by Preeti
      </p>
    </footer>
  );
};

export default Footer;
