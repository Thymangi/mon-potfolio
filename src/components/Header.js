import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import "./header.css"; // Import the CSS file for header styles

const Header = () => {
  return (
    <header className="site-header">
      <h1 className="site-title">John Doe</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/projects">Réalisations</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Me Contacter</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
