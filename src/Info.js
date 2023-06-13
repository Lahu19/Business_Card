import React from "react";
import myImage from "./ash-photo.jpg";
import "./info.css";

export default function Info() {
  return (
    <div className="Info">
      <img src={myImage} alt="Ash Moreno" className="--info-image" />
      <h1>Lahu Andhale</h1>
      <h2>software Developer</h2>
      <p>
        I am a software developer with a passion for learning new technologies.
      </p>
      <div className="--info-buttons">
        <button className="--info-email">
          <a href="mailto:lahuandhale321@gmail.com">
            <i class="fa-solid fa-envelope"></i> Email
          </a>
        </button>
        <button className="--info-linkedin">
          <a
            href="https://www.linkedin.com/in/lahu-andhale-677509240/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-linkedin"></i> LinkedIn
          </a>
        </button>
      </div>
    </div>
  );
}
