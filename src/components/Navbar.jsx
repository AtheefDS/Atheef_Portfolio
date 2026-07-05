import React from "react";
import atheef from "./atheef.jpeg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <a href="#" className="logo">
          <img
            src={atheef}
            alt="Mohamed Atheef"
            className="logo-img"
          />
        </a>

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </div>
    </nav>
  );
}