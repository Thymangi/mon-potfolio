import React, { useEffect, useRef } from "react";
import "../styles.css";
import "./footer.css";

const Footer = () => {
  const backToTopButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (backToTopButtonRef.current) {
        if (window.scrollY > 300) {
          backToTopButtonRef.current.style.display = "block";
        } else {
          backToTopButtonRef.current.style.display = "none";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBackToTopClick = (e) => {
    e.preventDefault();

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>John Doe</h3>
          <p>123 Main St, Anytown, USA</p>
          <p>+1 (123) 456-7890</p>
          <div className="social-icons">
            <a
              href="https://github.com/johndoe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/github-icon.png" alt="Github" />
            </a>
            <a
              href="https://twitter.com/johndoe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/twitter-icon.png" alt="Twitter" />
            </a>
            <a
              href="https://linkedin.com/in/johndoe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/linkedin-icon.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Liens utiles</h3>
          <ul>
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Me Contacter</a>
            </li>
            <li>
              <a href="/legal">Mentions Légales</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Mes dernières réalisations</h3>
          <ul>
            <li>
              <a href="/projects/project1">Projet 1</a>
            </li>
            <li>
              <a href="/projects/project2">Projet 2</a>
            </li>
            <li>
              <a href="/projects/project3">Projet 3</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Mes derniers articles</h3>
          <ul>
            <li>
              <a href="/blog/article1">Article 1</a>
            </li>
            <li>
              <a href="/blog/article2">Article 2</a>
            </li>
            <li>
              <a href="/blog/article3">Article 3</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Designed by John Doe</p>
        <a
          href="#back-to-top"
          className="back-to-top"
          ref={backToTopButtonRef}
          onClick={handleBackToTopClick}
        >
          <img src="/images/fleche-retour.png" alt="Retour en haut" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
