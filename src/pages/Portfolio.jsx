import React from "react";
import projectimage1 from "../assets/projectimage1.jpeg";
import vacashin from "../assets/vacashin.png";
import employeetracker from "../assets/employeetracker.png";
import readmegenerator from "../assets/readme-generator.png";
import passwordgenerator from "../assets/password-generator.png";
import weather from "../assets/weather-app-screenshot.png";

const Portfolio = () => {
  return (
    <section className="main">
      <div className="container">
        <h5 className="portfolio-header">
          Click on the project images to be dircted to the deployed page!
        </h5>
      </div>
      <div className="container project1container">
        <p className="project1">
          <a
            href="https://github.com/The-word-warriors/vocab-vault"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Vocab Vault Repo
          </a>
          <a
            href="https://vocab-vault-0523.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="project-1-image"
              src={projectimage1}
              alt="Vocab Vault Link"
            ></img>
          </a>
        </p>
      </div>
      <div className="container project2container">
        <p className="project2">
          <a
            href="https://github.com/The-GHRK-Group/VaCASHin"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            VaCASHin Repo
          </a>
          <a
            href="https://the-ghrk-group.github.io/VaCASHin/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="project-2-image"
              src={vacashin}
              alt="Vacashin Link"
            ></img>
          </a>
        </p>
      </div>
      <div className="container project3container">
        <p className="project3">
          <a
            href="https://github.com/Halimaxo/employee-tracker"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Employee-tracker Repo
          </a>
          <a
            href="https://drive.google.com/file/d/1DQCldGttoA0dpou7b4fr8TwDpK9RIfmG/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="project-3-image"
              src={employeetracker}
              alt="Employee Tracker Link"
            ></img>
          </a>
        </p>
      </div>
      <div className="container project4container">
        <p className="project4">
          <a
            href="https://github.com/Halimaxo/ReadMe-Generator"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Readme Generator Repo
          </a>
          <a
            href="https://drive.google.com/file/d/1I_lRVdYXQqL9AnYCRFM-thJ5Qzu_uVqX/view"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="project-4-image"
              src={readmegenerator}
              alt="Readme Generator Link"
            ></img>
          </a>
        </p>
      </div>
      <div className="container project5container">
        <p className="project5">
          <a
            href="https://github.com/Halimaxo/Password-GeneratorLinks to an external site. "
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Password Generator Repo
          </a>
          <a
            href="https://halimaxo.github.io/Password-Generator/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="project-5-image"
              src={passwordgenerator}
              alt="Password Generator Link"
            ></img>
          </a>
        </p>
      </div>
      <div className="container project6container">
        <p className="project6">
          <a
            href="https://github.com/Halimaxo/weather-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Weather App Repo
          </a>
          <a
            href="https://halimaxo.github.io/weather-app/Links to an external site. "
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="project-6-image"
              src={weather}
              alt="Weather App Link"
            ></img>
          </a>
        </p>
      </div>
    </section>
  );
};

export default Portfolio;
