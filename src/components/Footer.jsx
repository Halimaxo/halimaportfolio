import React from "react";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import stackoverflow from "../assets/stackoverflow.png";
import "../index.css";

const Footer = () => {
  return (
    <section id="footer-section">
      <div className="footer">
        <a href="https://github.com/Halimaxo" target="_blank" rel="noreferrer">
          <img className="footer-image" src={github} alt="GitHub link"></img>
        </a>
        <a
          href="https://linkedin.com/in/halimas"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="footer-image2"
            src={linkedin}
            alt="LinkedIn link"
          ></img>
        </a>
        <a
          href="https://stackoverflow.com/users/22218040/haloomi"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="footer-image3"
            src={stackoverflow}
            alt="Stackoverflow link"
          ></img>
        </a>
      </div>
    </section>
  );
};

export default Footer;
