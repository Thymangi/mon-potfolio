import React, { useRef } from "react";
import "../styles.css"; // Import a CSS file for styles

const About = () => {
  const aboutRef = useRef(null);

  const handleScroll = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="about">
      <div
        className="intro"
        style={{ backgroundImage: "url(images/hero-bg.jpg)" }}
      >
        <div className="overlay">
          <h1>Bonjour, je suis John Doe</h1>
          <p>Développeur web full stack</p>
          <button className="learn-more" onClick={handleScroll}>
            En savoir plus
          </button>
        </div>
      </div>
      <div className="about" ref={aboutRef} id="about-section">
        <div className="about-content">
          <div className="about-description">
            <h2>À propos</h2>
            <hr></hr>
            <p>
              Passionné par l'informatique et les nouvelles technologies, j'ai
              suivi une formation <b>d'ingénieur-développeur</b> web au CESI. Au
              cours de cette formation, j'ai pu acquérir de solides bases pour
              travailler dans le domaine du <b>développement web</b>.
            </p>
            <p>
              Basé à Lyon, je mets mon expérience au service de votre
              transformation numérique en tant que{" "}
              <b>développeur web full stack</b>.
            </p>
            <p>
              J'accorde une attention particulière à la qualité du code que
              j'écris et je respecte les bonnes pratiques du web.
            </p>
          </div>
          <div className="about-image-skills">
            <div className="about-image">
              <img src="./images/john-doe-about.jpg" alt="John Doe" />
            </div>
            <div className="skills">
              <h2>Mes compétences</h2>
              <div className="skill">
                <label>HTML</label>
                <div className="progress-bar">
                  <div className="progress html">90%</div>
                </div>
              </div>
              <div className="skill">
                <label>CSS</label>
                <div className="progress-bar">
                  <div className="progress css">80%</div>
                </div>
              </div>
              <div className="skill">
                <label>JavaScript</label>
                <div className="progress-bar">
                  <div className="progress javascript">70%</div>
                </div>
              </div>
              <div className="skill">
                <label>PHP</label>
                <div className="progress-bar">
                  <div className="progress php">60%</div>
                </div>
              </div>
              <div className="skill">
                <label>React</label>
                <div className="progress-bar">
                  <div className="progress react">50%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
